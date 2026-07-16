"use client";

import { QRCodeCanvas } from "qrcode.react";
import { FaDownload, FaQrcode } from "react-icons/fa6";

interface QRPreviewProps {
  qrValue: string;
  downloadQR: () => void;
}

export default function QRPreview({
  qrValue,
  downloadQR,
}: QRPreviewProps) {
  return (
    <div className="mt-8">

      <div
        className="
          rounded-3xl
          border
          border-indigo-100
          bg-white/80
          backdrop-blur-xl
          p-6
          sm:p-8
          shadow-xl
        "
      >

        {/* Header */}
        <div className="mb-6 flex items-center gap-4">

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
            <FaQrcode className="text-xl" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              QR Code Preview
            </h3>

            <p className="text-sm text-gray-500">
              Your generated QR code will appear here.
            </p>
          </div>

        </div>


        {/* QR Preview Area */}
        <div
          className="
            flex
            min-h-[280px]
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            border-indigo-200
            bg-gradient-to-br
            from-indigo-50
            to-purple-50
          "
        >

          {qrValue ? (
            <div
              className="
                rounded-3xl
                bg-white
                p-5
                shadow-lg
              "
            >
              <QRCodeCanvas
                value={qrValue}
                size={220}
                bgColor="#ffffff"
                fgColor="#111827"
                level="H"
              />
            </div>
          ) : (

            <div className="text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-100
                "
              >
                <FaQrcode className="text-3xl text-indigo-500" />
              </div>

              <p className="mt-4 text-gray-500">
                Enter text or URL to generate your QR code
              </p>

            </div>

          )}

        </div>


        {/* Download Button */}
        {qrValue && (
          <button
            onClick={downloadQR}
            className="
              mt-6
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
              hover:shadow-xl
            "
          >
            <FaDownload />
            Download QR Code
          </button>
        )}

      </div>

    </div>
  );
}