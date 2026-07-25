import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { PDFExtractionResult } from "./types";

if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}


function sortTextItems(items:any[]) {

  return items.sort((a,b)=>{

    const ay =
      a.transform?.[5] ?? 0;

    const by =
      b.transform?.[5] ?? 0;


    if(
      Math.abs(ay-by) < 5
    ){

      return (
        (a.transform?.[4] ?? 0) -
        (b.transform?.[4] ?? 0)
      );

    }


    return by-ay;

  });

}



function buildLines(items:any[]) {

  const lines:string[]=[];

  let currentLine="";
  let currentY:number|null=null;


  for(
    const item of items
  ){

    const text =
      item.str?.trim();


    if(!text)
      continue;


    const y =
      item.transform?.[5] ?? 0;



    if(
      currentY === null
    ){

      currentY=y;

    }



    if(
      Math.abs(currentY-y) > 5
    ){

      if(
        currentLine.trim()
      ){

        lines.push(
          currentLine.trim()
        );

      }


      currentLine="";

      currentY=y;

    }



    currentLine +=
      text + " ";

  }



  if(
    currentLine.trim()
  ){

    lines.push(
      currentLine.trim()
    );

  }


  return lines;

}





export async function extractPDFText(
  file:File
):Promise<PDFExtractionResult>{


  const buffer =
    await file.arrayBuffer();



  const pdf =
    await pdfjsLib
      .getDocument({
        data:buffer,
        useWorkerFetch:false,
      })
      .promise;



  let pagesText:string[]=[];

  let characterCount=0;



  for(
    let pageNumber=1;
    pageNumber<=pdf.numPages;
    pageNumber++
  ){

    const page =
      await pdf.getPage(
        pageNumber
      );



    const content =
      await page.getTextContent();



    const items =
      sortTextItems(
        content.items as any[]
      );



    const lines =
      buildLines(
        items
      );



    const pageText =
      lines.join("\n");



    characterCount +=
      pageText.length;



    pagesText.push(
      pageText
    );

  }




  const finalText =
    pagesText
      .join("\n\n")
      .replace(/\u00A0/g," ")
      .replace(/[ ]{2,}/g," ")
      .replace(/\n{3,}/g,"\n\n")
      .trim();



  return {

    text:finalText,

    pages:
      pdf.numPages,


    // Agar PDF mein text layer nahi hai
    // to OCR activate karenge

    isScanned:
      characterCount < 50

  };

}