import {
  FaFont,
  FaImage,
  FaFilePdf,
  FaCalculator,
  FaLock,
  FaCode,
} from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      title: "Text Tools",
      description:
        "Word Counter, Character Counter and professional writing tools from Soupxor.",
      icon: <FaFont />,
    },
    {
      title: "Image Tools",
      description:
        "Compress, resize and convert images instantly without installing software.",
      icon: <FaImage />,
    },
    {
      title: "PDF Tools",
      description:
        "Merge, split and organize PDF documents securely in your browser.",
      icon: <FaFilePdf />,
    },
    {
      title: "Calculators",
      description:
        "Age, BMI, Percentage, Loan and everyday calculation utilities.",
      icon: <FaCalculator />,
    },
    {
      title: "Security Tools",
      description:
        "Generate strong passwords and use privacy-focused security utilities.",
      icon: <FaLock />,
    },
    {
      title: "Developer Tools",
      description:
        "JSON Formatter and developer productivity tools for modern workflows.",
      icon: <FaCode />,
    },
  ];

  return (
    <section
      className="
        relative
        py-24
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-indigo-50/70
          via-white
          to-white
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
        {/* Header */}
        <div
          className="
            text-center
            mb-16
          "
        >
          <span
            className="
              text-indigo-600
              font-semibold
              uppercase
              tracking-[0.2em]
              text-sm
            "
          >
            Categories
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-extrabold
              text-slate-900
            "
          >
            Explore Tools by Category
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-lg
              text-slate-600
            "
          >
            Soupxor brings together fast, privacy-friendly online tools for
            writing, PDFs, images, development, security and everyday
            productivity—all in one place.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {categories.map((item) => (
            <div
              key={item.title}
              className="
                group
                glass
                rounded-3xl
                p-8
                shadow-soft
                hover:shadow-hover
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  text-white
                  bg-gradient-to-br
                  from-indigo-600
                  to-purple-600
                  shadow-md
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  mt-7
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-slate-600
                "
              >
                {item.description}
              </p>

              <div
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-indigo-600
                  font-semibold
                  group-hover:gap-3
                  transition-all
                "
              >
                Explore Tools
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}