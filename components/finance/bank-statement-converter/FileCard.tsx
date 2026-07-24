"use client";

import {
  FiFileText,
  FiTrash2,
  FiCheckCircle,
  FiHardDrive,
} from "react-icons/fi";

interface FileCardProps {
  file: File;
  onRemove: () => void;
}

export default function FileCard({
  file,
  onRemove,
}: FileCardProps) {
  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";

    const sizes = ["Bytes", "KB", "MB", "GB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(
      bytes / Math.pow(1024, index)
    ).toFixed(2)} ${sizes[index]}`;
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
            <FiFileText className="h-8 w-8" />
          </div>

          <div>
            <h3 className="max-w-[220px] truncate text-lg font-bold text-slate-900 dark:text-white sm:max-w-md">
              {file.name}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <FiHardDrive className="h-4 w-4" />
                {formatSize(file.size)}
              </span>

              <span className="hidden sm:block">•</span>

              <span>PDF Document</span>
            </div>
          </div>
        </div>

        <button
          onClick={onRemove}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
        >
          <FiTrash2 className="h-4 w-4" />
          Remove
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
        <div className="flex items-center gap-3">
          <FiCheckCircle className="h-6 w-6 text-emerald-500" />

          <div>
            <p className="font-semibold text-emerald-700 dark:text-emerald-400">
              File Ready
            </p>

            <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">
              Ready for transaction extraction
            </p>
          </div>
        </div>

        <div className="hidden rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-600 sm:block dark:text-emerald-400">
          PDF
        </div>
      </div>
    </div>
  );
}