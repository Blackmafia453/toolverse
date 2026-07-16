import Link from "next/link";
import {
  FaArrowRight,
  FaBolt,
  FaTools,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-100" />

      <div className="absolute top-10 left-0 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />


      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">


          {/* Left Content */}
          <div className="text-center lg:text-left">


            {/* Badge */}
            <div
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white/70
              backdrop-blur-md
              border
              border-indigo-100
              text-indigo-700
              font-semibold
              shadow-sm
              "
            >
              <FaBolt />

              100+ Free Online Tools
            </div>



            {/* Heading */}
            <h1
              className="
              mt-8
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              tracking-tight
              leading-tight
              text-slate-900
              "
            >

              Powerful Tools.

              <span
                className="
                block
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-indigo-600
                bg-clip-text
                text-transparent
                "
              >
                One Simple Platform.
              </span>

            </h1>



            {/* Description */}
            <p
              className="
              mt-7
              max-w-2xl
              text-lg
              md:text-xl
              leading-8
              text-slate-600
              "
            >
              ToolVerse gives you fast, free and privacy-focused online tools
              for everyday tasks. No complicated setup, no unnecessary signup,
              just powerful tools available instantly.
            </p>



            {/* CTA */}
            <div
              className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-5
              justify-center
              lg:justify-start
              "
            >

              <Link
                href="/tools"
                className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                shadow-lg
                hover:shadow-hover
                hover:-translate-y-1
                transition
                "
              >
                Explore Tools

                <FaArrowRight />
              </Link>



              <Link
                href="/about"
                className="
                flex
                items-center
                justify-center
                px-8
                py-4
                rounded-xl
                font-semibold
                bg-white/70
                backdrop-blur
                border
                border-slate-200
                text-slate-700
                hover:border-indigo-600
                hover:text-indigo-600
                transition
                "
              >
                Learn More
              </Link>

            </div>



            {/* Trust Points */}
            <div
              className="
              mt-10
              flex
              flex-wrap
              justify-center
              lg:justify-start
              gap-5
              "
            >

              <TrustItem text="No Signup Required" />

              <TrustItem text="Privacy Focused" />

              <TrustItem text="100% Free" />

            </div>


          </div>





          {/* Right Visual */}
          <div className="relative">


            <div
              className="
              glass
              rounded-3xl
              p-8
              shadow-soft
              hover:shadow-hover
              transition
              "
            >

              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="text-sm text-slate-500">
                    ToolVerse Dashboard
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    All Tools Ready
                  </h3>
                </div>


                <div
                  className="
                  h-12
                  w-12
                  rounded-2xl
                  bg-indigo-100
                  flex
                  items-center
                  justify-center
                  text-indigo-600
                  "
                >
                  <FaTools />
                </div>

              </div>



              <div className="space-y-4">


                <ToolPreview
                  icon={<FaRocket />}
                  title="Fast Processing"
                  value="Instant"
                />


                <ToolPreview
                  icon={<FaShieldAlt />}
                  title="Privacy Protection"
                  value="Secure"
                />


                <ToolPreview
                  icon={<FaStar />}
                  title="Premium Experience"
                  value="Simple"
                />


              </div>


            </div>


            {/* Floating Card */}
            <div
              className="
              absolute
              -bottom-6
              -left-6
              glass
              rounded-2xl
              px-5
              py-4
              shadow-soft
              hidden
              md:block
              "
            >

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-indigo-600" />

                <div>

                  <p className="font-bold text-slate-900">
                    Trusted Tools
                  </p>

                  <p className="text-sm text-slate-600">
                    Simple & Reliable
                  </p>

                </div>

              </div>

            </div>


          </div>


        </div>


      </div>

    </section>
  );
}





function TrustItem({
  text,
}: {
  text: string;
}) {

  return (
    <div
      className="
      flex
      items-center
      gap-2
      text-sm
      font-medium
      text-slate-600
      "
    >

      <FaCheckCircle className="text-indigo-600" />

      {text}

    </div>
  );
}





function ToolPreview({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {

  return (

    <div
      className="
      flex
      items-center
      justify-between
      rounded-2xl
      bg-white/70
      border
      border-slate-100
      p-4
      "
    >

      <div className="flex items-center gap-4">

        <div
          className="
          h-10
          w-10
          rounded-xl
          bg-indigo-50
          flex
          items-center
          justify-center
          text-indigo-600
          "
        >
          {icon}
        </div>


        <p className="font-semibold text-slate-800">
          {title}
        </p>

      </div>


      <span
        className="
        text-sm
        font-bold
        text-indigo-600
        "
      >
        {value}
      </span>


    </div>

  );
}