import { FaCloudArrowUp } from "react-icons/fa6";

interface ImageUploadCardProps {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUploadCard({
  onUpload,
}: ImageUploadCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-indigo-100
      bg-white/70
      backdrop-blur-2xl
      p-8
      shadow-xl
      shadow-indigo-100/40
      transition
      hover:shadow-2xl
      "
    >

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
        group-hover:border-indigo-400
        "
      >


        <div
          className="
          mx-auto
          w-20
          h-20
          rounded-3xl
          bg-gradient-to-br
          from-indigo-600
          to-purple-600
          flex
          items-center
          justify-center
          shadow-lg
          "
        >

          <FaCloudArrowUp
            className="
            text-white
            text-4xl
            "
          />

        </div>



        <h3
          className="
          mt-6
          text-2xl
          font-bold
          text-gray-900
          "
        >
          Upload Your Image
        </h3>



        <p
          className="
          mt-3
          text-gray-500
          max-w-md
          mx-auto
          "
        >
          Choose an image and compress it instantly without
          uploading your files to any server.
        </p>



        <label
          className="
          mt-7
          inline-flex
          cursor-pointer
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          px-8
          py-3
          text-white
          font-semibold
          shadow-lg
          hover:opacity-90
          transition
          "
        >

          Select Image

          <input
            type="file"
            accept="image/*"
            onChange={onUpload}
            className="hidden"
          />

        </label>


      </div>

    </div>
  );
}