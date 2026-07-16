"use client";

import { useState } from "react";
import {
  FaCode,
  FaCopy,
  FaTrash,
  FaMagic,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaCompress,
  FaFileCode,
} from "react-icons/fa";

export default function JsonFormatter() {

  const [jsonInput, setJsonInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);



  const formatJson = () => {

    try {

      const parsed = JSON.parse(jsonInput);

      const formatted = JSON.stringify(
        parsed,
        null,
        4
      );

      setJsonOutput(formatted);
      setError("");

    } catch {

      setError("Invalid JSON format. Please check your JSON syntax.");
      setJsonOutput("");

    }

  };




  const minifyJson = () => {

    try {

      const parsed = JSON.parse(jsonInput);

      const minified = JSON.stringify(parsed);

      setJsonOutput(minified);
      setError("");

    } catch {

      setError("Invalid JSON format. Please check your JSON syntax.");
      setJsonOutput("");

    }

  };





  const copyText = async () => {

    if (!jsonOutput) return;

    await navigator.clipboard.writeText(jsonOutput);

    setCopied(true);


    setTimeout(() => {

      setCopied(false);

    }, 2000);

  };





  const clearAll = () => {

    setJsonInput("");
    setJsonOutput("");
    setError("");

  };





  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-12">


      <div className="mx-auto max-w-6xl">



        {/* Hero */}

        <section className="mb-12 text-center">


          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 text-white text-5xl shadow-2xl">

            <FaCode />

          </div>



          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold text-indigo-600">

            <FaBolt />

            Developer Utility Tool

          </div>




          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">

            JSON Formatter

          </h1>




          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">

            Format, beautify and minify JSON data instantly with a fast,
            secure browser-based developer tool.

          </p>


        </section>







        {/* Main Tool Card */}

        <section className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-2xl backdrop-blur-xl md:p-10">



          <div className="grid gap-8 lg:grid-cols-2">





            {/* Input */}

            <div className="rounded-3xl border bg-white p-6 shadow-lg">


              <div className="mb-5 flex items-center gap-3">

                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">

                  <FaFileCode />

                </div>


                <h2 className="text-xl font-bold text-gray-900">

                  JSON Input

                </h2>


              </div>




              <textarea

                value={jsonInput}

                onChange={(e)=>setJsonInput(e.target.value)}

                placeholder='Paste JSON data here...'

                className="
                h-[420px]
                w-full
                rounded-2xl
                border
                bg-slate-50
                p-5
                font-mono
                text-sm
                text-gray-800
                outline-none
                transition
                focus:border-indigo-500
                focus:ring-2
                focus:ring-indigo-100
                "

              />





              <div className="mt-5 flex flex-wrap gap-3">



                <button

                  onClick={formatJson}

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-indigo-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-indigo-700
                  "

                >

                  <FaMagic />

                  Format

                </button>





                <button

                  onClick={minifyJson}

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-purple-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-purple-700
                  "

                >

                  <FaCompress />

                  Minify

                </button>





                <button

                  onClick={clearAll}

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-gray-700
                  transition
                  hover:bg-gray-100
                  "

                >

                  <FaTrash />

                  Clear

                </button>


              </div>


            </div>









            {/* Output */}

            <div className="rounded-3xl border bg-white p-6 shadow-lg">


              <div className="mb-5 flex items-center justify-between">


                <h2 className="text-xl font-bold text-gray-900">

                  Formatted Output

                </h2>




                <button

                  onClick={copyText}

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-indigo-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-indigo-600
                  transition
                  hover:bg-indigo-100
                  "

                >

                  <FaCopy />

                  {copied ? "Copied" : "Copy"}

                </button>


              </div>





              <div className="
              h-[420px]
              overflow-auto
              rounded-2xl
              bg-slate-900
              p-5
              shadow-inner
              ">


                <pre className="
                whitespace-pre-wrap
                font-mono
                text-sm
                leading-6
                text-green-400
                ">

                  {jsonOutput || "Formatted JSON will appear here..."}

                </pre>


              </div>






              {error && (

                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-600">

                  {error}

                </div>

              )}


            </div>


          </div>


        </section>








        {/* Features */}

        <section className="mt-12 grid gap-6 md:grid-cols-3">



          <div className="rounded-3xl border bg-white/70 p-6 shadow-lg backdrop-blur">

            <FaMagic className="text-3xl text-indigo-600"/>

            <h3 className="mt-4 font-bold text-gray-900">

              Beautify JSON

            </h3>


            <p className="mt-2 text-sm text-gray-600">

              Convert complex JSON into clean readable structure.

            </p>


          </div>





          <div className="rounded-3xl border bg-white/70 p-6 shadow-lg backdrop-blur">

            <FaShieldAlt className="text-3xl text-indigo-600"/>


            <h3 className="mt-4 font-bold text-gray-900">

              Secure Processing

            </h3>


            <p className="mt-2 text-sm text-gray-600">

              Your JSON data stays inside your browser.

            </p>


          </div>






          <div className="rounded-3xl border bg-white/70 p-6 shadow-lg backdrop-blur">


            <FaCheckCircle className="text-3xl text-indigo-600"/>


            <h3 className="mt-4 font-bold text-gray-900">

              Developer Ready

            </h3>


            <p className="mt-2 text-sm text-gray-600">

              Perfect for APIs, coding and data debugging.

            </p>


          </div>



        </section>






        <p className="mt-10 text-center text-sm text-gray-500">

          ToolVerse • Free Professional Online Tools

        </p>


      </div>


    </main>

  );

}