import { FaFilePdf } from "react-icons/fa";

export default function PDFHero() {
  return (
    <div className="mb-14 text-center">

      <div
        className="
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-[2rem]
          bg-gradient-to-br
          from-indigo-500
          via-purple-500
          to-pink-500
          shadow-xl
          shadow-indigo-200
        "
      >
        <FaFilePdf className="text-5xl text-white" />
      </div>


      <div className="mt-7">

        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-indigo-100
            bg-indigo-50
            px-5
            py-2
            text-sm
            font-semibold
            text-indigo-700
          "
        >
          PDF Utility Tool
        </span>


        <h1
          className="
            mt-5
            text-4xl
            font-extrabold
            tracking-tight
            text-gray-900
            md:text-5xl
          "
        >
          Merge PDF Files

          <span
            className="
              block
              bg-gradient-to-r
              from-indigo-600
              via-purple-600
              to-pink-500
              bg-clip-text
              text-transparent
            "
          >
            Instantly & Securely
          </span>

        </h1>


        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-lg
            leading-8
            text-gray-600
          "
        >
          Combine multiple PDF documents into one file with a fast,
          secure, and completely free online PDF merger.
          Your files stay private because everything is processed
          directly inside your browser.
        </p>

      </div>

    </div>
  );
}