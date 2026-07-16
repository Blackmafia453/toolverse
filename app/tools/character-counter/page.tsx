"use client";

import { useState } from "react";
import {
  FiType,
  FiHash,
  FiFileText,
  FiShield,
  FiZap,
} from "react-icons/fi";


export default function CharacterCounter() {

  const [text, setText] = useState("");

  const charactersWithSpaces = text.length;

  const charactersWithoutSpaces =
    text.replace(/\s/g, "").length;

  const words =
    text.trim()
      ? text.trim().split(/\s+/).length
      : 0;

  const sentences =
    text.trim()
      ? text.split(/[.!?]+/).filter(Boolean).length
      : 0;



  const clearText = () => {
    setText("");
  };



  return (

    <main
      className="
      min-h-screen
      relative
      overflow-hidden
      px-5
      py-16
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
        right-10
        w-72
        h-72
        bg-purple-300/20
        blur-3xl
        rounded-full
        "
      />



      <div className="max-w-5xl mx-auto">



        {/* Hero */}

        <section className="text-center mb-14">


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

            <FiType />

            Live Character Analysis

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
            to-blue-600
            shadow-xl
            mb-7
            "
          >

            <FiHash className="text-white text-5xl"/>

          </div>




          <h1
            className="
            text-4xl
            md:text-6xl
            font-extrabold
            text-slate-900
            "
          >
            Character Counter
          </h1>



          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-lg
            text-slate-600
            leading-8
            "
          >
            Count characters, words and sentences instantly with our fast
            privacy-friendly online character counter.
          </p>



        </section>








        {/* Tool Card */}


        <section
          className="
          bg-white/70
          backdrop-blur-xl
          border
          border-white
          rounded-3xl
          shadow-2xl
          p-6
          md:p-10
          "
        >



          <div className="flex items-center gap-3 mb-5">

            <FiFileText className="text-indigo-600 text-xl"/>

            <h2 className="font-bold text-xl text-slate-900">
              Enter Your Text
            </h2>

          </div>





          <textarea

            value={text}

            onChange={(e)=>setText(e.target.value)}

            placeholder="Start typing or paste your text here..."

            className="
            w-full
            min-h-[260px]
            p-6
            rounded-3xl
            bg-white
            border
            border-slate-200
            outline-none
            resize-none
            text-lg
            text-slate-800
            focus:ring-4
            focus:ring-indigo-100
            focus:border-indigo-500
            transition
            "

          />





          <div className="flex justify-end mt-6">


            <button

              onClick={clearText}

              className="
              px-6
              py-3
              rounded-xl
              bg-slate-100
              text-slate-700
              font-semibold
              hover:bg-slate-200
              transition
              "

            >

              Clear

            </button>


          </div>








          {/* Stats */}


          <div
            className="
            mt-8
            grid
            grid-cols-2
            md:grid-cols-4
            gap-5
            "
          >


            <StatCard
              title="Characters"
              value={charactersWithSpaces}
            />


            <StatCard
              title="No Spaces"
              value={charactersWithoutSpaces}
            />


            <StatCard
              title="Words"
              value={words}
            />


            <StatCard
              title="Sentences"
              value={sentences}
            />


          </div>




        </section>








        {/* Feature Cards */}


        <section
          className="
          mt-8
          grid
          md:grid-cols-2
          gap-6
          "
        >


          <FeatureCard

            icon={<FiShield/>}

            title="Private & Secure"

            description="Your text stays inside your browser. Nothing is uploaded or stored."

          />



          <FeatureCard

            icon={<FiZap/>}

            title="Instant Results"

            description="Statistics update instantly while you type."

          />



        </section>



      </div>


    </main>

  );

}






function StatCard({
  title,
  value,
}:{
  title:string;
  value:number;
}){


  return(

    <div
      className="
      bg-gradient-to-br
      from-indigo-50
      to-purple-50
      border
      border-indigo-100
      rounded-2xl
      p-5
      text-center
      "
    >

      <h3
        className="
        text-3xl
        font-extrabold
        text-slate-900
        "
      >
        {value}
      </h3>


      <p className="text-slate-600 mt-2 text-sm">
        {title}
      </p>


    </div>

  );

}








function FeatureCard({
  icon,
  title,
  description,
}:{
  icon:React.ReactNode;
  title:string;
  description:string;
}){


  return(

    <div
      className="
      bg-white/70
      backdrop-blur-xl
      border
      border-white
      rounded-3xl
      p-7
      shadow-xl
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