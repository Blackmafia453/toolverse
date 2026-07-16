"use client";

import {
  FiInfo,
  FiShield,
  FiZap,
} from "react-icons/fi";

export default function QRInfo() {
  return (
    <section
      className="
        mt-8
        rounded-3xl
        border
        border-indigo-100
        bg-white/80
        backdrop-blur-xl
        p-6
        sm:p-8
        shadow-lg
      "
    >

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-indigo-500
            to-purple-600
            text-white
            shadow-lg
          "
        >
          <FiInfo className="text-xl" />
        </div>


        <div>
          <h3 className="text-xl font-bold text-gray-900">
            About QR Code Generator
          </h3>

          <p className="text-sm text-gray-500">
            Create and download QR codes quickly and securely.
          </p>
        </div>

      </div>


      <div className="grid gap-4 sm:grid-cols-2">


        <div
          className="
            rounded-2xl
            border
            border-indigo-100
            bg-indigo-50/60
            p-5
          "
        >

          <FiZap className="mb-3 text-xl text-indigo-600" />

          <h4 className="font-semibold text-gray-900">
            Instant Generation
          </h4>

          <p className="mt-2 text-sm text-gray-600">
            Generate QR codes instantly from any text or URL.
          </p>

        </div>



        <div
          className="
            rounded-2xl
            border
            border-purple-100
            bg-purple-50/60
            p-5
          "
        >

          <FiShield className="mb-3 text-xl text-purple-600" />

          <h4 className="font-semibold text-gray-900">
            Safe & Private
          </h4>

          <p className="mt-2 text-sm text-gray-600">
            Your data stays in your browser and is not uploaded.
          </p>

        </div>


      </div>


    </section>
  );
}