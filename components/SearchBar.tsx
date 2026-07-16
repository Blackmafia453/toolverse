"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiSearch,
  FiArrowRight,
  FiX,
  FiGrid,
} from "react-icons/fi";

const tools = [
  {
    name: "Word Counter",
    category: "Text",
    link: "/tools/word-counter",
  },
  {
    name: "Password Generator",
    category: "Security",
    link: "/tools/password-generator",
  },
  {
    name: "QR Code Generator",
    category: "Utility",
    link: "/tools/qr-code-generator",
  },
  {
    name: "Age Calculator",
    category: "Calculator",
    link: "/tools/age-calculator",
  },
  {
    name: "BMI Calculator",
    category: "Calculator",
    link: "/tools/bmi-calculator",
  },
  {
    name: "Percentage Calculator",
    category: "Calculator",
    link: "/tools/percentage-calculator",
  },
  {
    name: "Loan Calculator",
    category: "Finance",
    link: "/tools/loan-calculator",
  },
  {
    name: "Image Compressor",
    category: "Image",
    link: "/tools/image-compressor",
  },
  {
    name: "JPG to PNG",
    category: "Image",
    link: "/tools/jpg-to-png",
  },
  {
    name: "PNG to JPG",
    category: "Image",
    link: "/tools/png-to-jpg",
  },
  {
    name: "PDF Merge",
    category: "PDF",
    link: "/tools/pdf-merge",
  },
  {
    name: "PDF Split",
    category: "PDF",
    link: "/tools/pdf-split",
  },
  {
    name: "JSON Formatter",
    category: "Developer",
    link: "/tools/json-formatter",
  },
  {
    name: "Color Picker",
    category: "Design",
    link: "/tools/color-picker",
  },
];

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-indigo-50/40 to-white" />

      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <FiGrid className="text-indigo-600" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              ToolVerse Search
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-slate-900">
            Find Your Perfect Tool
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600 leading-8">
            Search instantly through our premium collection of free online
            tools. Fast, clean and designed for productivity.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 blur-lg group-hover:opacity-40 transition duration-500" />

          <div className="relative glass rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center">
              <div className="pl-7">
                <FiSearch className="text-2xl text-indigo-600" />
              </div>

              <input
                type="text"
                placeholder="Search tools like PDF Merge, Word Counter..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent px-5 py-6 text-lg text-slate-800 placeholder:text-slate-400 outline-none"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <FiX size={20} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            {tools.length} Tools Available
          </span>

          {search && (
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              {filteredTools.length} Results Found
            </span>
          )}
        </div>

        {/* Results */}
        {search && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-2xl animate-in fade-in duration-300">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.link}
                  className="group flex items-center justify-between border-b border-slate-100 px-7 py-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 last:border-none"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 transition group-hover:text-indigo-600">
                      {tool.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {tool.category} Tool
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-indigo-600 font-semibold transition group-hover:translate-x-1">
                    Open
                    <FiArrowRight />
                  </div>
                </Link>
              ))
            ) : (
              <div className="py-16 px-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">
                  <FiSearch className="text-2xl text-indigo-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  No tools found
                </h3>

                <p className="mt-2 text-slate-500">
                  Try searching with another keyword.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}