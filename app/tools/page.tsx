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


export default function ToolsPage() {


  const tools = [

    {
      name: "Word Counter",
      description: "Count words, characters and paragraphs instantly.",
      category: "Text",
      icon: <FiFileText />,
      link: "/tools/word-counter",
    },

    {
      name: "Character Counter",
      description: "Count characters, words and sentences easily.",
      category: "Text",
      icon: <FiType />,
      link: "/tools/character-counter",
    },

    {
      name: "Password Generator",
      description: "Create strong and secure passwords instantly.",
      category: "Security",
      icon: <FiShield />,
      link: "/tools/password-generator",
    },

    {
      name: "QR Code Generator",
      description: "Generate QR codes quickly and easily.",
      category: "Utility",
      icon: <FiGrid />,
      link: "/tools/qr-code-generator",
    },

    {
      name: "Age Calculator",
      description: "Calculate your exact age in seconds.",
      category: "Calculator",
      icon: <FiCalendar />,
      link: "/tools/age-calculator",
    },

    {
      name: "Percentage Calculator",
      description: "Calculate percentages instantly.",
      category: "Calculator",
      icon: <FiPercent />,
      link: "/tools/percentage-calculator",
    },

    {
      name: "BMI Calculator",
      description: "Calculate your BMI score easily.",
      category: "Calculator",
      icon: <FiActivity />,
      link: "/tools/bmi-calculator",
    },

    {
      name: "Loan Calculator",
      description: "Calculate monthly loan payments.",
      category: "Finance",
      icon: <FiDollarSign />,
      link: "/tools/loan-calculator",
    },

    {
      name: "Image Compressor",
      description: "Compress images without losing quality.",
      category: "Image",
      icon: <FiMinimize2 />,
      link: "/tools/image-compressor",
    },

    {
      name: "JPG to PNG",
      description: "Convert JPG images into PNG format.",
      category: "Image",
      icon: <FiImage />,
      link: "/tools/jpg-to-png",
    },

    {
      name: "PNG to JPG",
      description: "Convert PNG images into JPG format.",
      category: "Image",
      icon: <FiImage />,
      link: "/tools/png-to-jpg",
    },

    {
      name: "PDF Merge",
      description: "Combine multiple PDF files together.",
      category: "PDF",
      icon: <FiFile />,
      link: "/tools/pdf-merge",
    },

    {
      name: "PDF Split",
      description: "Split PDF files into separate pages.",
      category: "PDF",
      icon: <FiScissors />,
      link: "/tools/pdf-split",
    },

    {
      name: "JSON Formatter",
      description: "Format and beautify JSON code.",
      category: "Developer",
      icon: <FiCode />,
      link: "/tools/json-formatter",
    },

    {
      name: "Color Picker",
      description: "Pick colors and get HEX values.",
      category: "Design",
      icon: <FiDroplet />,
      link: "/tools/color-picker",
    },

  ];



  return (

    <main
      className="
      min-h-screen
      relative
      overflow-hidden
      py-20
      px-6
      "
    >


      <div
        className="
        absolute
        inset-0
        -z-10
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-purple-100
        "
      />



      <div className="max-w-7xl mx-auto">



        {/* Hero */}

        <section className="text-center mb-16">


          <span
            className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-indigo-100
            text-indigo-700
            font-semibold
            text-sm
            "
          >
            Tool Library
          </span>



          <h1
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-extrabold
            text-slate-900
            "
          >
            All Free Online Tools
          </h1>



          <p
            className="
            mt-5
            max-w-3xl
            mx-auto
            text-lg
            text-slate-600
            "
          >
            Explore powerful, fast and privacy-friendly tools
            for everyday tasks.
          </p>


        </section>







        {/* Tools Grid */}


        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >



          {
            tools.map((tool)=>(

              <Link
                href={tool.link}
                key={tool.name}
                className="
                group
                bg-white/70
                backdrop-blur-xl
                border
                border-white
                rounded-3xl
                p-8
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                "
              >


                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  text-white
                  bg-gradient-to-br
                  from-indigo-600
                  to-purple-600
                  group-hover:scale-110
                  transition
                  "
                >

                  {tool.icon}

                </div>



                <span
                  className="
                  inline-block
                  mt-6
                  px-3
                  py-1
                  rounded-full
                  bg-indigo-100
                  text-indigo-700
                  text-xs
                  font-semibold
                  "
                >

                  {tool.category}

                </span>



                <h2
                  className="
                  mt-4
                  text-xl
                  font-bold
                  text-slate-900
                  "
                >

                  {tool.name}

                </h2>



                <p
                  className="
                  mt-3
                  text-slate-600
                  leading-7
                  "
                >

                  {tool.description}

                </p>



                <div
                  className="
                  mt-6
                  text-indigo-600
                  font-semibold
                  group-hover:translate-x-1
                  transition
                  "
                >

                  Open Tool →

                </div>



              </Link>


            ))
          }



        </section>



      </div>


    </main>

  );

}