import { FaFilePdf } from "react-icons/fa";

interface PDFFileListProps {
  files: File[];
}

export default function PDFFileList({
  files,
}: PDFFileListProps) {
  if (files.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 space-y-4">

      {files.map((file, index) => (
        <div
          key={index}
          className="
            group
            flex
            items-center
            gap-4
            rounded-3xl
            border
            border-white/60
            bg-white/80
            p-5
            shadow-lg
            backdrop-blur
            transition
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >

          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-red-50
              to-red-100
            "
          >
            <FaFilePdf className="text-2xl text-red-600" />
          </div>


          <div className="min-w-0">

            <p
              className="
                truncate
                font-semibold
                text-gray-900
              "
            >
              {file.name}
            </p>


            <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">

              <span>
                PDF Document
              </span>

              <span>
                •
              </span>

              <span>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>

            </div>

          </div>


          <div
            className="
              ml-auto
              hidden
              rounded-full
              bg-indigo-50
              px-3
              py-1
              text-xs
              font-medium
              text-indigo-600
              sm:block
            "
          >
            #{index + 1}
          </div>


        </div>
      ))}

    </div>
  );
}