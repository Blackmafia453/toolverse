interface JPGPreviewProps {
  previewUrl: string | null;
}

export default function JPGPreview({
  previewUrl,
}: JPGPreviewProps) {
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
        Image Preview
      </h2>

      <p className="mt-2 text-gray-500">
        Preview your selected JPG image before converting it to PNG.
      </p>

      {!previewUrl ? (
        <div
          className="
            mt-8
            flex
            h-[380px]
            items-center
            justify-center
            rounded-3xl
            border-2
            border-dashed
            border-gray-200
            bg-gradient-to-br
            from-slate-50
            to-indigo-50
          "
        >
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-100">
              <svg
                className="h-10 w-10 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4-4 4 4 8-8"
                />
              </svg>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              No Image Selected
            </h3>

            <p className="mt-2 text-gray-500">
              Upload a JPG image to see its preview.
            </p>
          </div>
        </div>
      ) : (
        <div
          className="
            mt-8
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            shadow-lg
          "
        >
          <img
            src={previewUrl}
            alt="Preview"
            className="h-auto max-h-[500px] w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}