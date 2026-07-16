import { FaImages } from "react-icons/fa6";

export default function ImageHero() {
  return (
    <section className="relative mb-12 overflow-hidden">

      <div
        className="
        absolute
        -top-10
        left-1/2
        -translate-x-1/2
        w-72
        h-72
        bg-indigo-300/30
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        relative
        text-center
        "
      >

        <div
          className="
          mx-auto
          w-24
          h-24
          rounded-[2rem]
          bg-gradient-to-br
          from-indigo-600
          via-purple-600
          to-blue-500
          flex
          items-center
          justify-center
          shadow-2xl
          shadow-indigo-300/40
          "
        >
          <FaImages
            className="
            text-white
            text-5xl
            "
          />
        </div>


        <h1
          className="
          mt-6
          text-4xl
          md:text-6xl
          font-bold
          tracking-tight
          text-gray-900
          "
        >
          Image Compressor
        </h1>


        <p
          className="
          mt-5
          max-w-2xl
          mx-auto
          text-lg
          text-gray-500
          leading-relaxed
          "
        >
          Compress images instantly while maintaining high quality.
          Your images are processed securely inside your browser.
        </p>


        <div
          className="
          mt-6
          inline-flex
          items-center
          rounded-full
          border
          border-indigo-100
          bg-white/70
          backdrop-blur-xl
          px-5
          py-2
          text-sm
          font-medium
          text-indigo-700
          shadow-sm
          "
        >
          Fast • Private • Free
        </div>

      </div>

    </section>
  );
}