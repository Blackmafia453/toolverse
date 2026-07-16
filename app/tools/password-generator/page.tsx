"use client";

import { useState } from "react";
import {
  FiCopy,
  FiRefreshCw,
  FiShield,
  FiKey,
  FiLock,
  FiCheckCircle,
} from "react-icons/fi";

export default function PasswordGeneratorPage() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [copied, setCopied] = useState(false);


  const generatePassword = () => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let result = "";

    for (let i = 0; i < length; i++) {

      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );

    }

    setPassword(result);
    setCopied(false);

  };



  const copyPassword = () => {

    if (!password) return;

    navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    },2000);

  };



  const getStrength = () => {

    if(password.length >= 20)
      return "Very Strong";

    if(password.length >= 14)
      return "Strong";

    if(password.length >= 10)
      return "Medium";

    return "Weak";

  };



  const strength = getStrength();



  return (

    <main className="
    min-h-screen
    bg-gradient-to-br
    from-indigo-50
    via-white
    to-purple-50
    px-5
    py-14
    ">


      <div className="max-w-5xl mx-auto">



        {/* Hero */}

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
          font-semibold
          text-sm
          mb-6
          ">

            <FiShield/>

            Secure Password Tool

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

            <FiKey className="text-white text-5xl"/>

          </div>




          <h1 className="
          text-4xl
          md:text-6xl
          font-extrabold
          text-gray-900
          ">

            Password Generator

          </h1>



          <p className="
          mt-5
          max-w-2xl
          mx-auto
          text-gray-500
          text-lg
          ">

            Generate strong and secure passwords instantly.
            Everything runs privately inside your browser.

          </p>


        </section>





        {/* Main Card */}

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



          {/* Password Display */}


          <div className="
          bg-gradient-to-r
          from-indigo-50
          to-purple-50
          border
          border-indigo-100
          rounded-3xl
          p-6
          ">


            <div className="
            flex
            items-center
            gap-2
            text-gray-700
            font-semibold
            mb-4
            ">

              <FiLock className="text-indigo-600"/>

              Generated Password

            </div>



            <div className="
            flex
            items-center
            justify-between
            gap-4
            bg-white
            rounded-2xl
            p-5
            border
            border-gray-100
            ">


              <span className="
              text-gray-900
              font-semibold
              break-all
              ">

                {password || "Click generate to create password"}

              </span>



              {
                password && (

                <button

                onClick={copyPassword}

                className="
                shrink-0
                w-12
                h-12
                rounded-xl
                bg-indigo-100
                text-indigo-600
                flex
                items-center
                justify-center
                hover:bg-indigo-200
                transition
                "

                >

                  <FiCopy/>

                </button>

                )
              }


            </div>



            {
              password && (

              <div className="
              mt-5
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-indigo-700
              ">

                <FiCheckCircle/>

                Strength: {strength}

              </div>

              )
            }


          </div>






          {/* Length Control */}


          <div className="
          mt-8
          bg-gray-50
          rounded-3xl
          p-6
          ">


            <div className="
            flex
            justify-between
            items-center
            mb-5
            ">


              <h3 className="
              font-bold
              text-gray-800
              ">

                Password Length

              </h3>


              <span className="
              px-4
              py-2
              rounded-xl
              bg-indigo-100
              text-indigo-700
              font-bold
              ">

                {length}

              </span>


            </div>



            <input

            type="range"

            min="6"

            max="32"

            value={length}

            onChange={(e)=>setLength(Number(e.target.value))}

            className="
            w-full
            accent-indigo-600
            "

            />


          </div>







          {/* Generate Button */}


          <button

          onClick={generatePassword}

          className="
          mt-8
          w-full
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          hover:scale-[1.02]
          text-white
          py-4
          rounded-2xl
          font-bold
          flex
          items-center
          justify-center
          gap-3
          transition
          shadow-lg
          "

          >

            <FiRefreshCw/>

            Generate Password

          </button>






          {/* Security Card */}


          <div className="
          mt-8
          grid
          md:grid-cols-2
          gap-5
          ">



            <div className="
            bg-indigo-50
            border
            border-indigo-100
            rounded-3xl
            p-6
            ">


              <FiShield className="
              text-indigo-600
              text-3xl
              mb-4
              "/>


              <h3 className="
              font-bold
              text-gray-900
              mb-2
              ">

                Privacy Protected

              </h3>


              <p className="
              text-gray-500
              text-sm
              leading-relaxed
              ">

                Passwords are generated locally. No data is stored or uploaded.

              </p>


            </div>




            <div className="
            bg-purple-50
            border
            border-purple-100
            rounded-3xl
            p-6
            ">


              <FiKey className="
              text-purple-600
              text-3xl
              mb-4
              "/>


              <h3 className="
              font-bold
              text-gray-900
              mb-2
              ">

                Strong Security

              </h3>


              <p className="
              text-gray-500
              text-sm
              leading-relaxed
              ">

                Create longer passwords with numbers and special characters.

              </p>


            </div>


          </div>






          {
            copied && (

            <p className="
            text-center
            mt-6
            text-green-600
            font-semibold
            ">

              Password copied successfully!

            </p>

            )
          }



        </section>


      </div>


    </main>

  );

}