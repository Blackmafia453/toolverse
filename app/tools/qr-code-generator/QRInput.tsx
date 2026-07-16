import { FaLink, FaQrcode } from "react-icons/fa6";

interface QRInputProps {
  text: string;
  setText: (value: string) => void;
  generateQR: () => void;
}

export default function QRInput({
  text,
  setText,
  generateQR,
}: QRInputProps) {
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
      "
    >

      <div className="mb-6 text-center">

        <h2 className="text-2xl font-bold text-gray-900">
          Enter Text or URL
        </h2>

        <p className="mt-2 text-gray-500">
          Add any link or text and generate your QR code instantly.
        </p>

      </div>


      <div className="relative">

        <FaLink
          className="
            absolute
            left-5
            top-5
            text-xl
            text-indigo-500
          "
        />


        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://example.com"
          className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-4
            pl-14
            text-gray-800
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-200
          "
        />

      </div>


      <button
        onClick={generateQR}
        className="
          mt-6
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
        "
      >

        <FaQrcode />

        Generate QR Code

      </button>


    </div>
  );
}