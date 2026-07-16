import {
  FaBolt,
  FaShieldAlt,
  FaGift,
  FaMobileAlt,
  FaRocket,
  FaMousePointer,
} from "react-icons/fa";


export default function WhyChooseUs() {


  const features = [
    {
      title: "Lightning Fast",
      description:
        "All tools process quickly with smooth and reliable performance.",
      icon: <FaBolt />,
    },
    {
      title: "Secure & Private",
      description:
        "Your files and data remain protected inside your browser.",
      icon: <FaShieldAlt />,
    },
    {
      title: "100% Free",
      description:
        "Access all ToolVerse utilities without any hidden cost.",
      icon: <FaGift />,
    },
    {
      title: "Fully Responsive",
      description:
        "Enjoy a perfect experience on mobile, tablet and desktop.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Modern Technology",
      description:
        "Built with fast and reliable web technologies.",
      icon: <FaRocket />,
    },
    {
      title: "Easy To Use",
      description:
        "Simple interfaces designed for everyone.",
      icon: <FaMousePointer />,
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
            Why ToolVerse
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
            Why Choose ToolVerse?
          </h2>



          <p
            className="
            mt-5
            text-lg
            text-slate-600
            "
          >
            Everything you need in one fast, simple and powerful platform.
          </p>


        </div>







        {/* Feature Cards */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >


          {
            features.map((feature) => (

              <div
                key={feature.title}
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
                  text-white
                  text-2xl
                  bg-gradient-to-br
                  from-indigo-600
                  to-purple-600
                  shadow-md
                  group-hover:scale-110
                  transition
                  "
                >
                  {feature.icon}
                </div>





                <h3
                  className="
                  mt-7
                  text-2xl
                  font-bold
                  text-slate-900
                  "
                >
                  {feature.title}
                </h3>





                <p
                  className="
                  mt-3
                  text-slate-600
                  leading-7
                  "
                >
                  {feature.description}
                </p>



              </div>

            ))
          }


        </div>


      </div>


    </section>
  );
}