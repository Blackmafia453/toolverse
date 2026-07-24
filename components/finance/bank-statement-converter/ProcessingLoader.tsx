"use client";

import {
  FiFileText,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    icon: FiFileText,
    title: "Reading PDF Statement",
    description: "Analyzing document structure",
  },
  {
    icon: FiCpu,
    title: "Extracting Transactions",
    description: "Finding dates, amounts and descriptions",
  },
  {
    icon: FiDatabase,
    title: "Smart Parsing",
    description: "Organizing financial data",
  },
  {
    icon: FiDownload,
    title: "Generating Excel",
    description: "Preparing downloadable spreadsheet",
  },
];

interface ProcessingLoaderProps {
  currentStep?: number;
}

export default function ProcessingLoader({
  currentStep = 0,
}: ProcessingLoaderProps) {
  return (
    <section className="mx-auto mt-10 w-full max-w-3xl px-4 sm:px-0">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-500/30">
            <FiCpu className="h-10 w-10 animate-pulse" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
            Processing Your Bank Statement
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Soupxor is extracting transactions and converting your PDF into a
            structured Excel spreadsheet.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            const completed = index < currentStep;
            const active = index === currentStep;

            return (
              <div
                key={step.title}
                className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                  active
                    ? "border-indigo-300 bg-indigo-50 dark:border-indigo-500/30 dark:bg-indigo-500/10"
                    : completed
                    ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10"
                    : "border-slate-200 bg-white/50 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    completed
                      ? "bg-emerald-500 text-white"
                      : active
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-400 dark:bg-white/10"
                  }`}
                >
                  {completed ? (
                    <FiCheckCircle className="h-6 w-6" />
                  ) : (
                    <Icon
                      className={`h-6 w-6 ${
                        active ? "animate-pulse" : ""
                      }`}
                    />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>

                {active && (
                  <div className="ml-auto flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600 [animation-delay:300ms]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 text-center dark:border-indigo-500/20 dark:bg-indigo-500/10">
          <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
            Processing happens securely in your browser. Your financial data
            never leaves your device.
          </p>
        </div>
      </div>
    </section>
  );
}