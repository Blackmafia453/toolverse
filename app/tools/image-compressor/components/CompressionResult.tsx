import { FaDownload, FaCheck } from "react-icons/fa6";

interface CompressionResultProps {
  compressedImage: string;
  compressedSize: number;
  formatSize: (size: number) => string;
}

export default function CompressionResult({
  compressedImage,
  compressedSize,
  formatSize,
}: CompressionResultProps) {

  if (!compressedImage) return null;


  return (
    <div
      className="
      mt-8
      rounded-3xl
      border
      border-indigo-100
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      p-8
      text-center
      shadow-xl
      shadow-indigo-100/40
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

        <FaCheck
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
        Compression Complete
      </h3>



      <p
        className="
        mt-2
        text-gray-500
        "
      >
        Your optimized image is ready.
      </p>



      <div
        className="
        mt-6
        inline-flex
        rounded-2xl
        bg-white
        px-8
        py-4
        shadow-md
        "
      >

        <span
          className="
          text-3xl
          font-bold
          text-indigo-700
          "
        >
          {formatSize(compressedSize)}
        </span>

      </div>



      <br />



      <a
        href={compressedImage}
        download="compressed-image.jpg"
        className="
        mt-7
        inline-flex
        items-center
        gap-3
        rounded-2xl
        bg-gray-900
        px-8
        py-4
        text-white
        font-semibold
        shadow-lg
        transition
        hover:bg-gray-800
        "
      >

        <FaDownload />

        Download Image

      </a>


    </div>
  );
}