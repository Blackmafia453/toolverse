import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

interface JPGUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
}

export default function JPGUpload({
  onFileSelect,
  selectedFile,
}: JPGUploadProps) {
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
      <h2 className="text-2xl font-bold text-gray-900">
        Upload JPG Image
      </h2>

      <p className="mt-2 text-gray-500">
        Choose a JPG image to convert into PNG format.
      </p>

      <label
        className="
          mt-8
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-indigo-200
          bg-gradient-to-br
          from-indigo-50
          via-white
          to-purple-50
          p-12
          text-center
          transition-all
          duration-300
          hover:border-indigo-500
          hover:bg-indigo-50
        "
      >
        <FaCloudUploadAlt className="text-6xl text-indigo-600" />

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Drag & Drop Your JPG
        </h3>

        <p className="mt-2 text-gray-500">
          or click below to browse your computer
        </p>

        <div
          className="
            mt-6
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-blue-600
            px-8
            py-3
            font-semibold
            text-white
            shadow-lg
          "
        >
          Browse Image
        </div>

        <input
          type="file"
          accept=".jpg,.jpeg,image/jpeg"
          className="hidden"
          onChange={(e) =>
            onFileSelect(e.target.files?.[0] || null)
          }
        />
      </label>

      {selectedFile && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-green-200
            bg-green-50
            p-5
          "
        >
          <div className="flex items-center gap-3">
            <FaImage className="text-2xl text-green-600" />

            <div>
              <p className="font-semibold text-gray-900">
                {selectedFile.name}
              </p>

              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}