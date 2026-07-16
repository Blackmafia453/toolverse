interface CompressionSettingsProps {
  quality: number;
  setQuality: (value: number) => void;
  onCompress: () => void;
}

export default function CompressionSettings({
  quality,
  setQuality,
  onCompress,
}: CompressionSettingsProps) {

  return (
    <div
      className="
      mt-8
      rounded-3xl
      border
      border-indigo-100
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
        mb-6
        "
      >

        <div>
          <h3
            className="
            text-xl
            font-bold
            text-gray-900
            "
          >
            Compression Quality
          </h3>

          <p
            className="
            mt-1
            text-sm
            text-gray-500
            "
          >
            Adjust quality level before compressing.
          </p>
        </div>


        <div
          className="
          rounded-full
          bg-indigo-50
          px-5
          py-2
          font-bold
          text-indigo-700
          "
        >
          {quality}%
        </div>

      </div>



      <input
        type="range"
        min="20"
        max="90"
        value={quality}
        onChange={(e) => setQuality(Number(e.target.value))}
        className="
        w-full
        accent-indigo-600
        cursor-pointer
        "
      />



      <div
        className="
        mt-6
        flex
        justify-between
        text-sm
        text-gray-400
        "
      >
        <span>
          Lower Size
        </span>

        <span>
          Better Quality
        </span>
      </div>



      <button
        onClick={onCompress}
        className="
        mt-7
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-blue-600
        py-4
        text-white
        font-semibold
        shadow-xl
        shadow-indigo-200
        transition
        hover:scale-[1.01]
        "
      >
        Compress Image
      </button>


    </div>
  );
}