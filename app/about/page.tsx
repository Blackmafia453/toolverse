import {
  FiZap,
  FiShield,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";


export default function AboutPage() {

  const features = [

    {
      title: "Fast & Reliable",
      description:
        "Our tools are designed for speed with a smooth experience across all devices.",
      icon: <FiZap />,
    },

    {
      title: "Privacy First",
      description:
        "Your files and information stay secure with browser-based processing.",
      icon: <FiShield />,
    },

    {
      title: "Accessible Everywhere",
      description:
        "Use ToolVerse anytime from desktop, tablet or mobile devices.",
      icon: <FiGlobe />,
    },

    {
      title: "Built For Everyone",
      description:
        "Students, developers, designers and professionals can work faster.",
      icon: <FiUsers />,
    },

  ];



  return (

    <main
      className="
      min-h-screen
      relative
      overflow-hidden
      px-6
      py-20
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



      <div className="max-w-6xl mx-auto">



        {/* Hero */}

        <section className="text-center">


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
            About ToolVerse
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

            Powerful Online Tools
            <span
              className="
              block
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              bg-clip-text
              text-transparent
              "
            >
              Made Simple
            </span>

          </h1>




          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            text-slate-600
            "
          >

            ToolVerse is a modern platform providing free online tools
            that help students, developers, creators and professionals
            complete everyday tasks faster.

          </p>



        </section>







        {/* Mission Card */}


        <section
          className="
          mt-16
          glass
          rounded-3xl
          p-8
          md:p-12
          shadow-soft
          "
        >


          <h2
            className="
            text-3xl
            font-bold
            text-slate-900
            "
          >
            Our Mission
          </h2>



          <p
            className="
            mt-5
            text-slate-600
            text-lg
            leading-8
            "
          >

            Our mission is to create simple, fast and accessible online
            utilities that anyone can use without complicated software
            installations or unnecessary registrations.

            ToolVerse focuses on providing a clean experience where users
            can complete tasks quickly while keeping their privacy protected.

          </p>


        </section>







        {/* Features */}


        <section
          className="
          mt-12
          grid
          md:grid-cols-2
          gap-6
          "
        >


          {
            features.map((feature)=>(

              <div

                key={feature.title}

                className="
                glass
                rounded-3xl
                p-7
                shadow-soft
                hover:shadow-hover
                hover:-translate-y-1
                transition
                "

              >


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
                  mb-5
                  "
                >

                  {feature.icon}

                </div>



                <h3
                  className="
                  text-xl
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


        </section>



      </div>


    </main>

  );

}