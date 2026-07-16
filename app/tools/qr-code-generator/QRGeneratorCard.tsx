"use client";

import { ReactNode } from "react";
import { FiGrid } from "react-icons/fi";

interface QRGeneratorCardProps {
  children: ReactNode;
}

export default function QRGeneratorCard({
  children,
}: QRGeneratorCardProps) {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white/80 backdrop-blur-xl shadow-xl p-6 sm:p-8">

        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="relative z-10">

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
              <FiGrid className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                QR Code Generator
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Generate a high-quality QR code instantly from your text or URL.
              </p>
            </div>

          </div>


          {/* Component Content */}
          <div>
            {children}
          </div>

        </div>

      </div>
    </section>
  );
}