"use client";

import { useState } from "react";
import {
  FaPalette,
  FaCopy,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaPaintBrush,
  FaUndo,
  FaCode,
} from "react-icons/fa";

export default function ColorPicker() {

  const [color, setColor] = useState("#4F46E5");
  const [copied, setCopied] = useState("");



  const hexToRgb = (hex: string) => {

    const value = hex.replace("#", "");

    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;

  };



  const copyValue = async (
    value: string,
    type: string
  ) => {

    await navigator.clipboard.writeText(value);

    setCopied(type);


    setTimeout(() => {

      setCopied("");

    }, 2000);

  };





  const resetColor = () => {

    setColor("#4F46E5");

  };



  const rgbValue = hexToRgb(color);



  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-12">


      <div className="mx-auto max-w-6xl">



        {/* Hero */}

        <section className="mb-12 text-center">


          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-5xl shadow-2xl">

            <FaPalette />

          </div>




          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold text-indigo-600">

            <FaBolt />

            Design & Developer Tool

          </div>




          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">

            Color Picker

          </h1>




          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">

            Select any color and instantly get HEX and RGB
            values for websites, apps and designs.

          </p>


        </section>









        {/* Main SaaS Card */}

        <section className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-2xl backdrop-blur-xl md:p-10">


          <div className="grid gap-8 lg:grid-cols-2">





            {/* Picker Panel */}

            <div className="rounded-3xl border bg-white p-8 shadow-lg">


              <div className="flex items-center gap-3">


                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">

                  <FaPaintBrush />

                </div>


                <h2 className="text-xl font-bold text-gray-900">

                  Choose Color

                </h2>


              </div>






              <div className="mt-8 flex justify-center">


                <input

                  type="color"

                  value={color}

                  onChange={(e)=>setColor(e.target.value)}

                  className="
                  h-52
                  w-52
                  cursor-pointer
                  rounded-3xl
                  border-0
                  shadow-xl
                  "

                />


              </div>






              <button

                onClick={resetColor}

                className="
                mt-8
                flex
                w-full
                items-center
                justify-center
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

                <FaUndo />

                Reset Color

              </button>



            </div>









            {/* Preview Panel */}

            <div className="rounded-3xl border bg-white p-8 shadow-lg">


              <div className="flex items-center gap-3">


                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">

                  <FaCode />

                </div>


                <h2 className="text-xl font-bold text-gray-900">

                  Color Details

                </h2>


              </div>






              <div

                className="mt-8 h-44 rounded-3xl shadow-inner"

                style={{
                  backgroundColor: color
                }}

              />






              <div className="mt-6 space-y-4">






                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">


                  <div>

                    <p className="text-sm text-gray-500">
                      HEX VALUE
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {color.toUpperCase()}
                    </p>


                  </div>



                  <button

                    onClick={()=>copyValue(color,"hex")}

                    className="flex items-center gap-2 font-semibold text-indigo-600"

                  >

                    <FaCopy />

                    {copied==="hex" ? "Copied" : "Copy"}

                  </button>


                </div>








                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">


                  <div>

                    <p className="text-sm text-gray-500">
                      RGB VALUE
                    </p>


                    <p className="mt-1 font-bold text-gray-900">
                      {rgbValue}
                    </p>


                  </div>




                  <button

                    onClick={()=>copyValue(rgbValue,"rgb")}

                    className="flex items-center gap-2 font-semibold text-indigo-600"

                  >

                    <FaCopy />

                    {copied==="rgb" ? "Copied" : "Copy"}

                  </button>



                </div>





              </div>



            </div>



          </div>



        </section>









        {/* Feature Cards */}

        <section className="mt-12 grid gap-6 md:grid-cols-3">



          <div className="rounded-3xl border bg-white/70 p-6 shadow-lg backdrop-blur">


            <FaPaintBrush className="text-3xl text-indigo-600"/>


            <h3 className="mt-4 font-bold text-gray-900">

              Designer Friendly

            </h3>


            <p className="mt-2 text-sm text-gray-600">

              Quickly find colors for UI, graphics and branding.

            </p>


          </div>






          <div className="rounded-3xl border bg-white/70 p-6 shadow-lg backdrop-blur">


            <FaBolt className="text-3xl text-indigo-600"/>


            <h3 className="mt-4 font-bold text-gray-900">

              Instant Conversion

            </h3>


            <p className="mt-2 text-sm text-gray-600">

              Get HEX and RGB values instantly.

            </p>


          </div>







          <div className="rounded-3xl border bg-white/70 p-6 shadow-lg backdrop-blur">


            <FaShieldAlt className="text-3xl text-indigo-600"/>


            <h3 className="mt-4 font-bold text-gray-900">

              Privacy Safe

            </h3>


            <p className="mt-2 text-sm text-gray-600">

              No uploads. Everything works in your browser.

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