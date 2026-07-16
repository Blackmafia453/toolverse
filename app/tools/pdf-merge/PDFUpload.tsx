import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";

interface PDFUploadProps {
  selectFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PDFUpload({
  selectFiles,
}: PDFUploadProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/60
        bg-white/80
        p-8
        shadow-xl
        backdrop-blur
        md:p-10
      "
    >

      <div className="mb-7 text-center">

        <h2 className="text-2xl font-bold text-gray-900">
          Upload PDF Files
        </h2>

        <p className="mt-2 text-gray-500">
          Add multiple PDF documents and merge them into one file.
        </p>

      </div>


      <div
        className="
          rounded-3xl
          border-2
          border-dashed
          border-indigo-200
          bg-gradient-to-br
          from-indigo-50
          via-white
          to-purple-50
          p-10
          text-center
          transition
          duration-300
          hover:border-indigo-400
          hover:shadow-lg
        "
      >

        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-indigo-500
            via-purple-500
            to-pink-500
            shadow-lg
          "
        >
          <FaCloudUploadAlt className="text-4xl text-white" />
        </div>


        <h3 className="mt-6 text-lg font-semibold text-gray-900">
          Choose your PDF documents
        </h3>


        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
          Select two or more PDF files. Your documents are processed
          securely inside your browser.
        </p>


        <label
          className="
            mt-7
            inline-flex
            cursor-pointer
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-indigo-700
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            transition
            duration-300
            hover:scale-105
            hover:shadow-indigo-300
          "
        >

          <FaFilePdf />

          Choose PDF Files


          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={selectFiles}
            className="hidden"
          />

        </label>


        <p className="mt-5 text-xs text-gray-400">
          Supported format: PDF only
        </p>

      </div>

    </div>
  );
}