import { FaDownload, FaLayerGroup, FaSpinner } from "react-icons/fa";

interface PDFDownloadProps {
  filesCount: number;
  loading: boolean;
  downloadUrl: string;
  mergeFiles: () => void;
}

export default function PDFDownload({
  filesCount,
  loading,
  downloadUrl,
  mergeFiles,
}: PDFDownloadProps) {
  return (
    <div className="mt-8 space-y-5">

      {filesCount >= 2 && (
        <div
          className="
            rounded-3xl
            border
            border-white/60
            bg-white/80
            p-6
            shadow-xl
            backdrop-blur
          "
        >

          <button
            onClick={mergeFiles}
            disabled={loading}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              via-purple-600
              to-indigo-700
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              duration-300
              hover:scale-[1.02]
              hover:shadow-indigo-300
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >

            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Merging PDFs...
              </>
            ) : (
              <>
                <FaLayerGroup />
                Merge PDFs
              </>
            )}

          </button>

        </div>
      )}


      {downloadUrl && (
        <div
          className="
            rounded-3xl
            border
            border-green-100
            bg-white/80
            p-6
            shadow-xl
            backdrop-blur
          "
        >

          <div className="mb-4 text-center">

            <h3 className="text-lg font-bold text-gray-900">
              Your PDF is Ready
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Successfully merged all selected PDF files.
            </p>

          </div>


          <a
            href={downloadUrl}
            download="merged.pdf"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-gray-900
              to-gray-700
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              duration-300
              hover:scale-[1.02]
              hover:shadow-xl
            "
          >

            <FaDownload />

            Download Merged PDF

          </a>

        </div>
      )}

    </div>
  );
}