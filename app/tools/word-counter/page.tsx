"use client";

import { useState } from "react";
import {
  FiCopy,
  FiTrash2,
  FiEdit3,
  FiType,
  FiAlignLeft,
  FiClock,
  FiHash,
  FiFileText,
  FiShield,
  FiZap,
} from "react-icons/fi";

export default function WordCounterPage() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const words =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const characters = text.length;

  const charactersWithoutSpaces =
    text.replace(/\s/g, "").length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter(Boolean).length;

  const paragraphs =
    text.trim() === ""
      ? 0
      : text.split(/\n+/).filter(Boolean).length;

  const readingTime =
    words === 0 ? 0 : Math.ceil(words / 200);


  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  const clearText = () => {
    setText("");
  };


  const stats = [
    {
      title: "Total Words",
      value: words,
      icon: <FiType />,
    },
    {
      title: "Characters",
      value: characters,
      icon: <FiHash />,
    },
    {
      title: "Without Spaces",
      value: charactersWithoutSpaces,
      icon: <FiAlignLeft />,
    },
    {
      title: "Sentences",
      value: sentences,
      icon: <FiEdit3 />,
    },
    {
      title: "Paragraphs",
      value: paragraphs,
      icon: <FiFileText />,
    },
    {
      title: "Reading Time",
      value: `${readingTime} min`,
      icon: <FiClock />,
    },
  ];


  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-5 py-14">

      <div className="max-w-6xl mx-auto">


        {/* Hero Section */}

        <section className="text-center mb-12">


          <div className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-indigo-100
          text-indigo-700
          text-sm
          font-semibold
          mb-6
          ">

            <FiZap />

            Fast & Privacy Friendly

          </div>



          <div className="
          w-24
          h-24
          mx-auto
          rounded-3xl
          bg-gradient-to-br
          from-indigo-600
          via-blue-600
          to-purple-600
          flex
          items-center
          justify-center
          shadow-xl
          mb-6
          ">

            <FiEdit3 className="text-white text-5xl"/>

          </div>



          <h1 className="
          text-4xl
          md:text-6xl
          font-extrabold
          text-gray-900
          tracking-tight
          ">

            Word Counter

          </h1>



          <p className="
          mt-5
          max-w-2xl
          mx-auto
          text-gray-500
          text-lg
          leading-relaxed
          ">

            Analyze your text instantly. Count words, characters,
            sentences and reading time with a fast browser-based tool.

          </p>


        </section>




        {/* Main Tool */}

        <section className="
        bg-white/90
        backdrop-blur-xl
        rounded-3xl
        border
        border-gray-100
        shadow-2xl
        p-6
        md:p-10
        ">


          <div className="
          flex
          items-center
          gap-3
          mb-5
          text-gray-800
          font-semibold
          ">

            <FiFileText className="text-indigo-600"/>

            Enter Your Text

          </div>



          <textarea

            value={text}

            onChange={(e)=>setText(e.target.value)}

            placeholder="Write or paste your content here..."

            className="
            w-full
            h-80
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            p-6
            text-gray-800
            text-lg
            leading-relaxed
            outline-none
            resize-none
            transition
            focus:bg-white
            focus:ring-4
            focus:ring-indigo-100
            focus:border-indigo-500
            "

          />



          <div className="
          flex
          flex-col
          sm:flex-row
          gap-4
          mt-6
          ">


            <button

              onClick={copyText}

              className="
              flex-1
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              hover:scale-[1.02]
              text-white
              py-4
              rounded-2xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition
              shadow-lg
              "

            >

              <FiCopy/>

              {copied ? "Copied Successfully" : "Copy Text"}

            </button>




            <button

              onClick={clearText}

              className="
              flex-1
              bg-gray-100
              hover:bg-gray-200
              text-gray-700
              py-4
              rounded-2xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition
              "

            >

              <FiTrash2/>

              Clear Text

            </button>


          </div>




          {/* Statistics */}

          <div className="
          grid
          grid-cols-2
          lg:grid-cols-3
          gap-5
          mt-10
          ">


            {stats.map((stat)=>(

              <div
              key={stat.title}
              className="
              group
              bg-gradient-to-br
              from-indigo-50
              to-purple-50
              border
              border-indigo-100
              rounded-3xl
              p-6
              text-center
              hover:-translate-y-1
              hover:shadow-lg
              transition
              "
              >

                <div className="
                w-14
                h-14
                mx-auto
                rounded-2xl
                bg-white
                flex
                items-center
                justify-center
                text-indigo-600
                text-2xl
                shadow-sm
                mb-4
                group-hover:scale-110
                transition
                ">

                  {stat.icon}

                </div>


                <h3 className="
                text-3xl
                font-bold
                text-gray-900
                ">

                  {stat.value}

                </h3>


                <p className="
                text-sm
                text-gray-500
                mt-2
                ">

                  {stat.title}

                </p>


              </div>

            ))}


          </div>


        </section>




        {/* Trust Section */}

        <section className="
        mt-8
        grid
        md:grid-cols-2
        gap-5
        ">


          <div className="
          bg-white
          border
          border-gray-100
          rounded-3xl
          p-7
          shadow-sm
          ">

            <FiShield className="text-indigo-600 text-3xl mb-4"/>

            <h2 className="
            text-xl
            font-bold
            text-gray-900
            mb-3
            ">

              Private & Secure

            </h2>


            <p className="
            text-gray-500
            leading-relaxed
            ">

              Your text never leaves your browser. All calculations happen locally for maximum privacy.

            </p>


          </div>



          <div className="
          bg-white
          border
          border-gray-100
          rounded-3xl
          p-7
          shadow-sm
          ">

            <FiZap className="text-purple-600 text-3xl mb-4"/>

            <h2 className="
            text-xl
            font-bold
            text-gray-900
            mb-3
            ">

              Instant Results

            </h2>


            <p className="
            text-gray-500
            leading-relaxed
            ">

              Get real-time word analysis while typing without waiting or uploading files.

            </p>


          </div>


        </section>


      </div>

    </main>
  );
}