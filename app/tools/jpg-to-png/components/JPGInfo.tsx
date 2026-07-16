import {
  FaBolt,
  FaImage,
  FaShieldAlt,
} from "react-icons/fa";

export default function JPGInfo() {
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
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900">
          Free JPG to PNG Converter
        </h2>

        <p className="mt-4 leading-8 text-gray-500">
          Convert JPG images into high-quality PNG files directly in your
          browser. Your files are never uploaded to any server, making the
          conversion fast, secure, and completely private.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl bg-indigo-50 p-6">
          <FaImage className="text-3xl text-indigo-600" />

          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            High Quality Output
          </h3>

          <p className="mt-2 text-gray-500">
            Convert JPG images into PNG format while maintaining excellent
            image quality.
          </p>
        </div>

        <div className="rounded-3xl bg-purple-50 p-6">
          <FaBolt className="text-3xl text-purple-600" />

          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Instant Conversion
          </h3>

          <p className="mt-2 text-gray-500">
            Your image is converted instantly using your browser with no
            waiting time.
          </p>
        </div>

        <div className="rounded-3xl bg-blue-50 p-6">
          <FaShieldAlt className="text-3xl text-blue-600" />

          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            100% Private
          </h3>

          <p className="mt-2 text-gray-500">
            All processing happens locally on your device. Your images never
            leave your browser.
          </p>
        </div>
      </div>
    </section>
  );
}