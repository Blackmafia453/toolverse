"use client";

import { useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import {
  FiCalendar,
  FiClock,
  FiShield,
  FiZap,
} from "react-icons/fi";


export default function AgeCalculator() {

  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");



  const calculateAge = () => {

    if (!birthDate) return;


    const today = new Date();
    const birth = new Date(birthDate);


    let years =
      today.getFullYear() - birth.getFullYear();

    let months =
      today.getMonth() - birth.getMonth();

    let days =
      today.getDate() - birth.getDate();



    if (days < 0) {
      months--;
      days += 30;
    }


    if (months < 0) {
      years--;
      months += 12;
    }



    setAge(
      `${years} Years • ${months} Months • ${days} Days`
    );

  };




  return (

    <main
      className="
      min-h-screen
      px-5
      py-16
      relative
      overflow-hidden
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


      <div
        className="
        absolute
        top-20
        left-10
        h-72
        w-72
        rounded-full
        bg-indigo-300/20
        blur-3xl
        "
      />


      <div
        className="
        max-w-5xl
        mx-auto
        "
      >




        {/* Hero */}

        <section
          className="
          text-center
          mb-14
          "
        >


          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-indigo-100
            text-indigo-700
            font-semibold
            text-sm
            mb-6
            "
          >

            <FiClock />

            Instant Age Calculation

          </div>





          <div
            className="
            w-24
            h-24
            mx-auto
            rounded-3xl
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-indigo-600
            via-purple-600
            to-indigo-700
            shadow-xl
            mb-7
            "
          >

            <FaCalendarDays
              className="
              text-white
              text-5xl
              "
            />

          </div>





          <h1
            className="
            text-4xl
            md:text-6xl
            font-extrabold
            tracking-tight
            text-slate-900
            "
          >
            Age Calculator
          </h1>





          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-lg
            leading-8
            text-slate-600
            "
          >
            Find your exact age in years, months and days instantly
            with our fast and privacy-friendly calculator.
          </p>


        </section>







        {/* Main Card */}

        <section
          className="
          glass
          rounded-3xl
          shadow-soft
          p-6
          md:p-10
          "
        >



          <div
            className="
            rounded-3xl
            bg-gradient-to-br
            from-indigo-50
            to-purple-50
            border
            border-indigo-100
            p-6
            md:p-8
            "
          >



            <div
              className="
              flex
              items-center
              gap-3
              mb-6
              "
            >

              <FiCalendar
                className="
                text-indigo-600
                text-xl
                "
              />


              <label
                className="
                font-bold
                text-slate-900
                "
              >
                Select Birth Date
              </label>


            </div>





            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="
              w-full
              p-5
              rounded-2xl
              bg-white
              border
              border-slate-200
              text-slate-800
              outline-none
              focus:ring-4
              focus:ring-indigo-100
              focus:border-indigo-500
              transition
              "
            />






            <button
              onClick={calculateAge}
              className="
              mt-6
              w-full
              py-4
              rounded-2xl
              flex
              items-center
              justify-center
              gap-3
              text-white
              font-bold
              text-lg
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              shadow-lg
              hover:shadow-hover
              hover:-translate-y-0.5
              transition
              "
            >

              <FiCalendar />

              Calculate My Age

            </button>


          </div>







          {
            age && (

              <div
                className="
                mt-8
                rounded-3xl
                bg-gradient-to-br
                from-indigo-50
                to-purple-50
                border
                border-indigo-100
                p-8
                text-center
                "
              >

                <p
                  className="
                  text-slate-500
                  font-semibold
                  "
                >
                  Your Exact Age
                </p>


                <h2
                  className="
                  mt-4
                  text-3xl
                  md:text-5xl
                  font-extrabold
                  text-slate-900
                  "
                >
                  {age}
                </h2>


              </div>

            )
          }



        </section>








        {/* Features */}

        <section
          className="
          mt-8
          grid
          md:grid-cols-2
          gap-6
          "
        >



          <FeatureCard
            icon={<FiShield />}
            title="Private Calculation"
            description="Your birth date stays inside your browser. No information is stored."
          />



          <FeatureCard
            icon={<FiZap />}
            title="Instant Results"
            description="Calculate exact age breakdown in seconds without signup."
          />


        </section>




      </div>


    </main>

  );

}






function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {


  return (

    <div
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
        text-indigo-600
        text-3xl
        mb-5
        "
      >
        {icon}
      </div>



      <h3
        className="
        text-xl
        font-bold
        text-slate-900
        "
      >
        {title}
      </h3>




      <p
        className="
        mt-3
        text-slate-600
        leading-7
        "
      >
        {description}
      </p>


    </div>

  );

}