import { FaInfoCircle } from "react-icons/fa";
import {
  FiZap,
  FiShield,
  FiLayers,
} from "react-icons/fi";

export default function PercentageInfo() {

  return (

    <section
      className="
      mt-10
      rounded-3xl
      border
      border-gray-100
      bg-white/90
      p-6
      shadow-2xl
      backdrop-blur-xl
      md:p-8
      "
    >



      <div
        className="
        mb-8
        flex
        items-center
        gap-4
        "
      >


        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-indigo-100
          "
        >

          <FaInfoCircle className="
          text-2xl
          text-indigo-600
          "/>

        </div>





        <div>

          <h2
            className="
            text-2xl
            font-bold
            text-gray-900
            "
          >

            About Percentage Calculator

          </h2>


          <p className="text-sm text-gray-500">

            Simple math tools for everyday calculations

          </p>


        </div>


      </div>








      <p
        className="
        leading-8
        text-gray-600
        "
      >

        ToolVerse Percentage Calculator helps you solve common percentage
        problems instantly. Calculate percentages, increases, decreases,
        and discounts directly in your browser without installing any software.

      </p>








      <div
        className="
        mt-8
        grid
        gap-5
        md:grid-cols-3
        "
      >




        <div
          className="
          rounded-3xl
          border
          border-indigo-100
          bg-indigo-50
          p-6
          "
        >


          <FiLayers className="
          mb-4
          text-3xl
          text-indigo-600
          "/>



          <h3 className="
          font-bold
          text-gray-900
          ">

            Multiple Calculations

          </h3>



          <p
            className="
            mt-3
            text-sm
            leading-relaxed
            text-gray-600
            "
          >

            Solve percentage, increase, decrease, and discount problems quickly.

          </p>


        </div>







        <div
          className="
          rounded-3xl
          border
          border-purple-100
          bg-purple-50
          p-6
          "
        >


          <FiZap className="
          mb-4
          text-3xl
          text-purple-600
          "/>



          <h3 className="
          font-bold
          text-gray-900
          ">

            Instant Results

          </h3>




          <p
            className="
            mt-3
            text-sm
            leading-relaxed
            text-gray-600
            "
          >

            Get accurate calculations instantly while typing your values.

          </p>


        </div>








        <div
          className="
          rounded-3xl
          border
          border-green-100
          bg-green-50
          p-6
          "
        >


          <FiShield className="
          mb-4
          text-3xl
          text-green-600
          "/>



          <h3 className="
          font-bold
          text-gray-900
          ">

            Free & Private

          </h3>




          <p
            className="
            mt-3
            text-sm
            leading-relaxed
            text-gray-600
            "
          >

            All calculations run inside your browser. Your data stays private.

          </p>


        </div>





      </div>




    </section>

  );

}