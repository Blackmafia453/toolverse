"use client";

import { FiDownload, FiCheckCircle } from "react-icons/fi";

interface QRDownloadProps {
  downloadQR: () => void;
  qrValue: string;
}

export default function QRDownload({
  downloadQR,
  qrValue,
}: QRDownloadProps) {

  if (!qrValue) return null;

  return (
    <div
      className="
        mt-6
        rounded-3xl
        border
        border-indigo-100
        bg-white/80
        backdrop-blur-xl
        p-6
        shadow-lg
      "
    >

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-green-100
            text-green-600
          "
        >
          <FiCheckCircle className="text-xl" />
        </div>


        <div>
          <h3 className="font-bold text-gray-900">
            QR Code Ready
          </h3>

          <p className="text-sm text-gray-500">
            Your QR code has been generated successfully.
          </p>
        </div>

      </div>


      <button
        onClick={downloadQR}
        className="
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          px-5
          py-3
          font-semibold
          text-white
          shadow-lg
          transition
          hover:scale-[1.02]
        "
      >
        <FiDownload />
        Download QR Image
      </button>


    </div>
  );
}