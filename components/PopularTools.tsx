import Link from "next/link";
import {
  FaFileAlt,
  FaShieldAlt,
  FaQrcode,
  FaCalendarAlt,
  FaCompressArrowsAlt,
  FaFilePdf,
} from "react-icons/fa";


export default function PopularTools() {

  const tools = [
    {
      name: "Word Counter",
      description:
        "Count words, characters and paragraphs instantly.",
      icon: <FaFileAlt />,
      link: "/tools/word-counter",
    },
    {
      name: "Password Generator",
      description:
        "Generate strong and secure passwords.",
      icon: <FaShieldAlt />,
      link: "/tools/password-generator",
    },
    {
      name: "QR Code Generator",
      description:
        "Create professional QR codes quickly and easily.",
      icon: <FaQrcode />,
      link: "/tools/qr-code-generator",
    },
    {
      name: "Age Calculator",
      description:
        "Calculate your exact age instantly.",
      icon: <FaCalendarAlt />,
      link: "/tools/age-calculator",
    },
    {
      name: "Image Compressor",
      description:
        "Compress images while maintaining quality.",
      icon: <FaCompressArrowsAlt />,
      link: "/tools/image-compressor",
    },
    {
      name: "PDF Merge",
      description:
        "Combine multiple PDF files in seconds.",
      icon: <FaFilePdf />,
      link: "/tools/pdf-merge",
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
        from-white
        via-indigo-50/40
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



        {/* Heading */}
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
            Featured Tools
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
            Popular Tools
          </h2>


          <p
            className="
            mt-5
            text-lg
            text-slate-600
            "
          >
            Explore the most popular productivity tools used by our community.
          </p>


        </div>






        {/* Cards */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {
            tools.map((tool) => (

              <div
                key={tool.name}
                className="
                group
                glass
                rounded-3xl
                p-8
                shadow-soft
                hover:shadow-hover
                hover:-translate-y-2
                transition
                "
              >



                {/* Icon */}
                <div
                  className="
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  text-2xl
                  text-white
                  bg-gradient-to-br
                  from-indigo-600
                  to-purple-600
                  shadow-md
                  group-hover:scale-110
                  transition
                  "
                >
                  {tool.icon}
                </div>





                <h3
                  className="
                  mt-7
                  text-2xl
                  font-bold
                  text-slate-900
                  "
                >
                  {tool.name}
                </h3>





                <p
                  className="
                  mt-3
                  text-slate-600
                  leading-7
                  "
                >
                  {tool.description}
                </p>






                <Link
                  href={tool.link}
                  className="
                  inline-flex
                  items-center
                  gap-2
                  mt-7
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-indigo-600
                  to-purple-600
                  hover:shadow-hover
                  hover:-translate-y-0.5
                  transition
                  "
                >
                  Open Tool
                  <span>→</span>
                </Link>



              </div>

            ))
          }


        </div>



      </div>


    </section>
  );
}