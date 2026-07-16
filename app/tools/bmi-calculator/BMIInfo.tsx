import { FaInfoCircle } from "react-icons/fa";
import {
  FiShield,
  FiZap,
  FiHeart,
} from "react-icons/fi";


export default function BMIInfo() {

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


          <h2 className="
          text-2xl
          font-bold
          text-gray-900
          ">

            About BMI Calculator

          </h2>


          <p className="text-sm text-gray-500">

            Understand your body weight range

          </p>


        </div>


      </div>






      <p className="
      leading-8
      text-gray-600
      ">

        Body Mass Index (BMI) is a simple measurement that compares your
        weight with your height. It is commonly used as a general indicator
        to understand whether your weight falls within a healthy range.

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


          <FiZap className="
          mb-4
          text-3xl
          text-indigo-600
          "/>



          <h3 className="
          font-bold
          text-gray-900
          ">

            Instant Calculation

          </h3>



          <p className="
          mt-3
          text-sm
          leading-relaxed
          text-gray-600
          ">

            Get your BMI score immediately by entering basic body information.

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


          <FiHeart className="
          mb-4
          text-3xl
          text-purple-600
          "/>



          <h3 className="
          font-bold
          text-gray-900
          ">

            Health Awareness

          </h3>



          <p className="
          mt-3
          text-sm
          leading-relaxed
          text-gray-600
          ">

            Understand your general weight category and maintain healthier habits.

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

            Private & Free

          </h3>



          <p className="
          mt-3
          text-sm
          leading-relaxed
          text-gray-600
          ">

            All calculations happen inside your browser. No data is stored.

          </p>


        </div>




      </div>





    </section>

  );

}