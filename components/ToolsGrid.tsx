import Link from "next/link";

import {
  FiFileText,
  FiType,
  FiShield,
  FiGrid,
  FiCalendar,
  FiPercent,
  FiActivity,
  FiDollarSign,
  FiImage,
  FiFile,
  FiCode,
  FiDroplet,
  FiMinimize2,
  FiScissors,
} from "react-icons/fi";



export default function ToolsGrid() {


  const allTools = [

    {
      name: "Word Counter",
      category: "Text",
      icon: <FiFileText />,
      link: "/tools/word-counter",
    },

    {
      name: "Character Counter",
      category: "Text",
      icon: <FiType />,
      link: "/tools/character-counter",
    },

    {
      name: "Password Generator",
      category: "Security",
      icon: <FiShield />,
      link: "/tools/password-generator",
    },

    {
      name: "QR Code Generator",
      category: "Utility",
      icon: <FiGrid />,
      link: "/tools/qr-code-generator",
    },

    {
      name: "Age Calculator",
      category: "Calculator",
      icon: <FiCalendar />,
      link: "/tools/age-calculator",
    },

    {
      name: "Percentage Calculator",
      category: "Calculator",
      icon: <FiPercent />,
      link: "/tools/percentage-calculator",
    },

    {
      name: "BMI Calculator",
      category: "Calculator",
      icon: <FiActivity />,
      link: "/tools/bmi-calculator",
    },

    {
      name: "Loan Calculator",
      category: "Finance",
      icon: <FiDollarSign />,
      link: "/tools/loan-calculator",
    },

    {
      name: "Image Compressor",
      category: "Image",
      icon: <FiMinimize2 />,
      link: "/tools/image-compressor",
    },

    {
      name: "JPG to PNG",
      category: "Image",
      icon: <FiImage />,
      link: "/tools/jpg-to-png",
    },

    {
      name: "PNG to JPG",
      category: "Image",
      icon: <FiImage />,
      link: "/tools/png-to-jpg",
    },

    {
      name: "PDF Merge",
      category: "PDF",
      icon: <FiFile />,
      link: "/tools/pdf-merge",
    },

    {
      name: "PDF Split",
      category: "PDF",
      icon: <FiScissors />,
      link: "/tools/pdf-split",
    },

    {
      name: "JSON Formatter",
      category: "Developer",
      icon: <FiCode />,
      link: "/tools/json-formatter",
    },

    {
      name: "Color Picker",
      category: "Design",
      icon: <FiDroplet />,
      link: "/tools/color-picker",
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
        from-indigo-50/60
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
            Tool Library
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
            All Free Tools
          </h2>



          <p
            className="
            mt-5
            text-lg
            text-slate-600
            "
          >
            Browse our complete collection of useful online utilities.
          </p>


        </div>





        {/* Tools Grid */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          "
        >


          {
            allTools.map((tool) => (

              <div
                key={tool.name}
                className="
                group
                glass
                rounded-3xl
                p-6
                shadow-soft
                hover:shadow-hover
                hover:-translate-y-2
                transition
                "
              >




                {/* Icon */}

                <div
                  className="
                  w-14
                  h-14
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
                  transition
                  "
                >

                  {tool.icon}

                </div>





                {/* Category */}

                <span
                  className="
                  inline-block
                  mt-5
                  text-xs
                  font-semibold
                  px-3
                  py-1
                  rounded-full
                  bg-indigo-100
                  text-indigo-700
                  "
                >

                  {tool.category}

                </span>





                <h3
                  className="
                  mt-4
                  font-bold
                  text-lg
                  text-slate-900
                  "
                >

                  {tool.name}

                </h3>





                <Link
                  href={tool.link}
                  className="
                  inline-flex
                  items-center
                  gap-2
                  mt-5
                  text-indigo-600
                  font-semibold
                  hover:gap-3
                  transition-all
                  "
                >

                  Use Tool
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