import { createWorker, Worker } from "tesseract.js";
import * as pdfjsLib from "pdfjs-dist";

export interface OCRProgress {
  page: number;
  totalPages: number;
  progress: number;
  status: string;
  confidence?: number;
}

export interface OCRResult {
  text: string;
  confidence: number;
  pages: {
    pageNumber: number;
    text: string;
    confidence: number;
  }[];
}


let worker: Worker | null = null;


/**
 * Create reusable OCR worker
 */
async function getWorker() {
  if (worker) return worker;

  worker = await createWorker("eng", 1, {
    logger: (message) => {
      console.log("OCR:", message);
    },
  });

 await worker.setParameters({
  preserve_interword_spaces: "1",
});

  return worker;
}


/**
 * Convert PDF page into image
 */
async function renderPDFPage(
  pdf: pdfjsLib.PDFDocumentProxy,
  pageNumber: number
) {
  const page = await pdf.getPage(pageNumber);

  const viewport = page.getViewport({
    scale: 2.5,
  });


  const canvas = document.createElement("canvas");

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas not supported");
  }


  canvas.width = viewport.width;
  canvas.height = viewport.height;


  await page.render({
    canvasContext: context,
    viewport,
  }).promise;


  return preprocessImage(canvas);
}



/**
 * Improve OCR accuracy
 */
function preprocessImage(
  canvas: HTMLCanvasElement
) {

  const ctx = canvas.getContext("2d");

  if (!ctx) return canvas;


  const image = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );


  const data = image.data;


  for (let i = 0; i < data.length; i += 4) {

    const brightness =
      (data[i] +
        data[i + 1] +
        data[i + 2]) /
      3;


    const value =
      brightness > 150
        ? 255
        : 0;


    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
  }


  ctx.putImageData(
    image,
    0,
    0
  );


  return canvas;
}



/**
 * Run OCR on complete PDF
 */
export async function extractTextWithOCR(
  file: File,
  onProgress?: (
    progress: OCRProgress
  ) => void
): Promise<OCRResult> {


  const arrayBuffer =
    await file.arrayBuffer();


  const pdf =
    await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;


  const totalPages =
    pdf.numPages;


  const ocrWorker =
    await getWorker();


  const pages: OCRResult["pages"] = [];


  let finalText = "";

  let totalConfidence = 0;



  for (
    let pageNumber = 1;
    pageNumber <= totalPages;
    pageNumber++
  ) {


    onProgress?.({
      page: pageNumber,
      totalPages,
      progress:
        Math.round(
          ((pageNumber - 1) /
            totalPages) *
            100
        ),
      status:
        `Processing page ${pageNumber} of ${totalPages}`,
    });



    const image =
      await renderPDFPage(
        pdf,
        pageNumber
      );


    const result =
      await ocrWorker.recognize(
        image
      );


    const text =
      result.data.text
        .replace(/\n{3,}/g, "\n\n")
        .trim();


    const confidence =
      result.data.confidence || 0;



    pages.push({
      pageNumber,
      text,
      confidence,
    });



    finalText +=
      `\n${text}`;



    totalConfidence += confidence;



    onProgress?.({
      page: pageNumber,
      totalPages,
      progress:
        Math.round(
          (pageNumber /
            totalPages) *
            100
        ),
      status:
        `Completed page ${pageNumber}`,
      confidence,
    });
  }



  return {
    text: finalText.trim(),
    confidence:
      totalPages
        ? totalConfidence / totalPages
        : 0,
    pages,
  };
}



/**
 * Cleanup OCR worker
 */
export async function terminateOCR() {

  if (worker) {

    await worker.terminate();

    worker = null;
  }
}