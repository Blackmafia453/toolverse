"use client";

import { useState, ChangeEvent } from "react";
import { PDFDocument } from "pdf-lib";

import PDFHero from "./PDFHero";
import PDFUpload from "./PDFUpload";
import PDFFileList from "./PDFFileList";
import PDFDownload from "./PDFDownload";

export default function PdfMerge() {
  const [files, setFiles] = useState<File[]>([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const selectFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFiles(Array.from(e.target.files));
    setDownloadUrl("");
  };

  const mergeFiles = async () => {
    if (files.length < 2) return;

    try {
      setLoading(true);

      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const bytes = await file.arrayBuffer();

        const pdf = await PDFDocument.load(bytes);

        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );

        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      const pdfBytes = await mergedPdf.save();

      // Convert Uint8Array to clean ArrayBuffer for Vercel TypeScript build
      const buffer = new ArrayBuffer(pdfBytes.length);

      const view = new Uint8Array(buffer);

      view.set(pdfBytes);

      const blob = new Blob(
        [buffer],
        {
          type: "application/pdf",
        }
      );

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);

    } catch (error) {
      console.error("PDF Merge Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-12">

      <div className="mx-auto max-w-6xl">

        <PDFHero />

        <PDFUpload
          selectFiles={selectFiles}
        />

        <PDFFileList
          files={files}
        />

        <PDFDownload
          filesCount={files.length}
          loading={loading}
          downloadUrl={downloadUrl}
          mergeFiles={mergeFiles}
        />

        <div className="mt-12 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">

          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            About PDF Merge Tool
          </h2>

          <p className="leading-8 text-gray-600">
             Soupxor PDF Merge Tool allows you to combine multiple PDF files
            into one document quickly and securely. All processing happens
            directly in your browser without uploading files to any server.
          </p>

        </div>

      </div>

    </main>
  );
}