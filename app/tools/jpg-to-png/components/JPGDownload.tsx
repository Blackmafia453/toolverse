import { FaCheckCircle, FaDownload } from "react-icons/fa";

interface JPGDownloadProps {
  downloadUrl: string | null;
  fileName: string;
}

export default function JPGDownload({
  downloadUrl,
  fileName,
}: JPGDownloadProps) {
  if (!downloadUrl) return null;

  return (
    <section
      className="
        rounded-3xl
        border
        border-gray-100
        bg-white/80
        backdrop-blur-2xl
        p-8
        shadow-xl
        shadow-indigo-100/30
      "
    >
      <div className="flex items-center gap-3">
        <FaCheckCircle className="text-3xl text-green-600" />

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Conversion Complete
          </h2>

          <p className="text-gray-500">
            Your PNG image is ready to download.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{fileName}</p>
            <p className="text-sm text-gray-500">
              Successfully converted to PNG format.
            </p>
          </div>

          <FaCheckCircle className="text-2xl text-green-600" />
        </div>
      </div>

      <a
        href={downloadUrl}
        download={fileName.replace(/\.(jpg|jpeg)$/i, ".png")}
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-blue-600
          px-6
          py-4
          text-lg
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-2xl
        "
      >
        <FaDownload className="text-xl" />
        Download PNG
      </a>
    </section>
  );
}