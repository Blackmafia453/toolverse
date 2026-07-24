"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiFileText,
  FiDownload,
  FiGlobe,
  FiLock,
  FiCpu,
  FiZap,
  FiStar,
} from "react-icons/fi";

const features = [
  {
    icon: FiCpu,
    title: "Smart Generic Parser",
    description:
      "Automatically extracts transactions from most bank statement PDFs without bank-specific templates.",
  },
  {
    icon: FiShield,
    title: "100% Private",
    description:
      "Your files stay in your browser. No uploads, no cloud processing, no data storage.",
  },
  {
    icon: FiDownload,
    title: "Instant Excel Export",
    description:
      "Convert extracted transactions into clean XLSX spreadsheets ready for analysis.",
  },
];

const highlights = [
  "Supports thousands of bank statement formats",
  "Client-side processing",
  "Fast PDF text extraction",
  "Excel (.xlsx) export",
  "Secure & private",
  "No registration required",
];

const badges = [
  {
    icon: FiLock,
    label: "Privacy First",
  },
  {
    icon: FiZap,
    label: "Lightning Fast",
  },
  {
    icon: FiGlobe,
    label: "Works Worldwide",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-indigo-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <div className="absolute left-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
              <FiStar className="h-4 w-4" />
              Enterprise Finance Tool
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-6xl">
              Convert Bank Statement PDF
              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 bg-clip-text text-transparent">
                Into Excel in Seconds
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Soupxor intelligently extracts transactions from bank statement
              PDFs and converts them into structured Excel spreadsheets using a
              smart generic parser designed for worldwide bank formats.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#converter"
                className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Start Converting
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                Browse Tools
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <FiCheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {badges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                  >
                    <Icon className="h-4 w-4" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Soupxor Finance
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Smart PDF Converter
                  </h2>
                </div>

                <div className="rounded-2xl bg-indigo-600 p-4 text-white shadow-lg shadow-indigo-500/30">
                  <FiFileText className="h-7 w-7" />
                </div>
              </div>

              <div className="space-y-5">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-slate-200 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 p-3 text-white shadow-lg">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {feature.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white shadow-xl">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      Secure Client-Side Processing
                    </h3>

                    <p className="mt-2 text-sm text-indigo-100">
                      PDFs are processed directly inside your browser to maximize
                      privacy, speed, and reliability.
                    </p>
                  </div>

                  <div className="flex-shrink-0 rounded-xl bg-white/15 px-5 py-3 text-center backdrop-blur">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs uppercase tracking-widest text-indigo-100">
                      Browser Based
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-white/50 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl lg:block dark:border-white/10 dark:bg-white/10">
              <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Output
              </div>

              <div className="mt-1 font-bold text-slate-900 dark:text-white">
                Clean Excel (.xlsx)
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/50 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl lg:block dark:border-white/10 dark:bg-white/10">
              <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Processing
              </div>

              <div className="mt-1 font-bold text-emerald-600">
                PDF → JSON → Excel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}