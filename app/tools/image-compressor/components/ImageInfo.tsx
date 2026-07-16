import {
  FaBolt,
  FaLock,
  FaInfinity,
} from "react-icons/fa6";

export default function ImageInfo() {
  return (
    <section
      className="
      mt-10
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

      <h2
        className="
        text-2xl
        font-bold
        text-gray-900
        "
      >
        Free Online Image Compressor
      </h2>


      <p
        className="
        mt-3
        text-gray-500
        leading-relaxed
        max-w-3xl
        "
      >
        ToolVerse Image Compressor helps you reduce image file size
        quickly while keeping great visual quality. Images are processed
        directly in your browser, so your files stay private and secure.
      </p>



      <div
        className="
        mt-8
        grid
        md:grid-cols-3
        gap-5
        "
      >


        <div
          className="
          rounded-3xl
          bg-indigo-50
          p-5
          "
        >

          <FaBolt
            className="
            text-2xl
            text-indigo-600
            "
          />

          <h3
            className="
            mt-4
            font-bold
            text-gray-900
            "
          >
            Fast Compression
          </h3>

          <p
            className="
            mt-2
            text-sm
            text-gray-500
            "
          >
            Compress images instantly without waiting.
          </p>

        </div>




        <div
          className="
          rounded-3xl
          bg-purple-50
          p-5
          "
        >

          <FaLock
            className="
            text-2xl
            text-purple-600
            "
          />

          <h3
            className="
            mt-4
            font-bold
            text-gray-900
            "
          >
            Private & Secure
          </h3>

          <p
            className="
            mt-2
            text-sm
            text-gray-500
            "
          >
            Your images never leave your browser.
          </p>

        </div>




        <div
          className="
          rounded-3xl
          bg-blue-50
          p-5
          "
        >

          <FaInfinity
            className="
            text-2xl
            text-blue-600
            "
          />

          <h3
            className="
            mt-4
            font-bold
            text-gray-900
            "
          >
            Free Forever
          </h3>

          <p
            className="
            mt-2
            text-sm
            text-gray-500
            "
          >
            No signup required. Use anytime.
          </p>

        </div>


      </div>


    </section>
  );
}