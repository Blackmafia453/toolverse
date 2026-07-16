interface ImagePreviewProps {
  preview: string;
  originalSize: number;
  formatSize: (size: number) => string;
}

export default function ImagePreview({
  preview,
  originalSize,
  formatSize,
}: ImagePreviewProps) {

  if (!preview) return null;

  return (
    <div
      className="
      mt-8
      rounded-3xl
      border
      border-gray-100
      bg-white/80
      backdrop-blur-2xl
      p-6
      shadow-xl
      shadow-indigo-100/30
      "
    >

      <div
        className="
        flex
        items-center
        justify-between
        mb-5
        "
      >

        <h3
          className="
          text-xl
          font-bold
          text-gray-900
          "
        >
          Original Image
        </h3>


        <span
          className="
          rounded-full
          bg-indigo-50
          px-4
          py-2
          text-sm
          font-semibold
          text-indigo-700
          "
        >
          {formatSize(originalSize)}
        </span>

      </div>



      <div
        className="
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-gray-50
        to-indigo-50
        border
        border-gray-100
        p-4
        "
      >

        <img
          src={preview}
          alt="Image preview"
          className="
          w-full
          max-h-[420px]
          rounded-2xl
          object-contain
          "
        />

      </div>


    </div>
  );
}