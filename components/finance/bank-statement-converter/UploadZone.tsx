"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  FiUploadCloud,
  FiFileText,
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
}

export default function UploadZone({
  onFileSelect,
  disabled = false,
}: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      onFileSelect(file);
    },
    [onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
  } = useDropzone({
    onDrop,
    disabled,
    multiple: false,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxSize: 15 * 1024 * 1024,
  });

  return (
    <section
      id="converter"
      className="mx-auto mt-16 w-full max-w-4xl px-4 sm:px-6"
    >
      <div
        {...getRootProps()}
        className={`group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed p-8 text-center transition-all duration-300 sm:p-12 ${
          isDragActive
            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
            : "border-slate-300 bg-white/70 hover:border-indigo-400 hover:bg-indigo-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
      >
        <input {...getInputProps()} />

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-500/30 transition-transform duration-300 group-hover:-translate-y-1">
          <FiUploadCloud className="h-10 w-10" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
          {isDragActive
            ? "Drop your bank statement here"
            : "Upload Bank Statement PDF"}
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          Drag and drop your PDF bank statement or click to browse. Soupxor
          will extract transactions and convert them into a clean Excel file.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <FiFileText className="h-4 w-4 text-indigo-600" />
            PDF Only
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <FiShield className="h-4 w-4 text-emerald-500" />
            Private Processing
          </div>
        </div>

        <div className="mt-8 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          Maximum file size: 15MB
        </div>
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
          <FiAlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />

          <div>
            <p className="font-semibold">
              Unable to upload this file
            </p>

            <p className="mt-1">
              Please upload a valid PDF bank statement under 15MB.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <FiCheckCircle className="h-6 w-6 text-emerald-500" />

          <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">
            Automatic Extraction
          </h4>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Reads transaction details automatically.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <FiShield className="h-6 w-6 text-indigo-600" />

          <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">
            Secure
          </h4>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Files stay protected during processing.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <FiFileText className="h-6 w-6 text-violet-600" />

          <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">
            Excel Ready
          </h4>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Export structured spreadsheet data.
          </p>
        </div>
      </div>
    </section>
  );
}