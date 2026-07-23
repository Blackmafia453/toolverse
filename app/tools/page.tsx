import type { Metadata } from "next";
import {
  FiFileText,
  FiLock,
  FiCalendar,
  FiGrid,
  FiImage,
  FiFile,
  FiScissors,
  FiCode,
  FiDroplet,
  FiPercent,
  FiActivity,
  FiDollarSign,
  FiMinimize2,
  FiHash,
  FiZap,
} from "react-icons/fi";

import ToolButton from "@/components/ToolButton";

export const metadata: Metadata = {
  title: "Free Online Tools - Soupxor",
  description:
    "Explore Soupxor's collection of free online tools including text tools, image tools, PDF utilities, calculators, security tools, and developer tools.",
  keywords: [
    "free online tools",
    "text tools",
    "image tools",
    "PDF tools",
    "calculator tools",
    "password generator",
    "word counter",
    "QR code generator",
    "Soupxor",
  ],
  openGraph: {
    title: "Free Online Tools - Soupxor",
    description:
      "Use powerful free online tools for productivity, calculations, images, PDFs, security, and development.",
    url: "https://soupxor.com/tools",
    siteName: "Soupxor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Tools - Soupxor",
    description:
      "A complete collection of free online tools built for productivity and everyday tasks.",
  },
};

const tools = [
  {
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs instantly.",
    icon: FiFileText,
    route: "/tools/word-counter",
  },
  {
    name: "Password Generator",
    description: "Create secure and strong passwords instantly.",
    icon: FiLock,
    route: "/tools/password-generator",
  },
  {
    name: "Age Calculator",
    description: "Calculate your exact age from your date of birth.",
    icon: FiCalendar,
    route: "/tools/age-calculator",
  },
  {
    name: "QR Code Generator",
    description: "Generate custom QR codes quickly and easily.",
    icon: FiGrid,
    route: "/tools/qr-code-generator",
  },
  {
    name: "Image Compressor",
    description: "Compress images while maintaining quality.",
    icon: FiMinimize2,
    route: "/tools/image-compressor",
  },
  {
    name: "JPG to PNG Converter",
    description: "Convert JPG images into PNG format.",
    icon: FiImage,
    route: "/tools/jpg-to-png",
  },
  {
    name: "PNG to JPG Converter",
    description: "Convert PNG images into JPG format.",
    icon: FiImage,
    route: "/tools/png-to-jpg",
  },
  {
    name: "PDF Merge",
    description: "Combine multiple PDF files into one document.",
    icon: FiFile,
    route: "/tools/pdf-merge",
  },
  {
    name: "PDF Split",
    description: "Split PDF files into separate pages.",
    icon: FiScissors,
    route: "/tools/pdf-split",
  },
  {
    name: "JSON Formatter",
    description: "Format and beautify JSON data instantly.",
    icon: FiCode,
    route: "/tools/json-formatter",
  },
  {
    name: "Color Picker",
    description: "Pick colors and get HEX and RGB values.",
    icon: FiDroplet,
    route: "/tools/color-picker",
  },
  {
    name: "Percentage Calculator",
    description: "Calculate percentages quickly and accurately.",
    icon: FiPercent,
    route: "/tools/percentage-calculator",
  },
  {
    name: "BMI Calculator",
    description: "Calculate your body mass index instantly.",
    icon: FiActivity,
    route: "/tools/bmi-calculator",
  },
  {
    name: "Loan Calculator",
    description: "Calculate loan payments and interest estimates.",
    icon: FiDollarSign,
    route: "/tools/loan-calculator",
  },
  {
    name: "Hash Generator",
    description: "Generate secure hashes for your data.",
    icon: FiHash,
    route: "/tools/hash-generator",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-20">
      <section className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg">
            <FiZap size={30} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            All Free Online Tools
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Explore Soupxor&apos;s professional collection of fast, secure, and
            easy-to-use online tools.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="group rounded-3xl border border-white/60 bg-white/70 p-7 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
                  <Icon size={26} />
                </div>

                <h2 className="text-xl font-semibold text-gray-900">
                  {tool.name}
                </h2>

                <p className="mt-3 min-h-[50px] text-sm leading-6 text-gray-600">
                  {tool.description}
                </p>

                <div className="mt-6">
                  <ToolButton href={tool.route} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}