import { FaHeart } from "react-icons/fa";
import {
  FiActivity,
  FiInfo,
} from "react-icons/fi";

interface BMIData {
  bmi: string;
  category: string;
  color: string;
  advice: string;
}

interface BMIResultProps {
  bmiData: BMIData | null;
}

export default function BMIResult({ bmiData }: BMIResultProps) {

  return (

    <div
      className="
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
          bg-pink-100
          "
        >

          <FaHeart className="text-2xl text-pink-600"/>

        </div>



        <div>

          <h2 className="
          text-2xl
          font-bold
          text-gray-900
          ">

            Your BMI Result

          </h2>


          <p className="text-sm text-gray-500">
            Your health measurement
          </p>


        </div>


      </div>






      {!bmiData ? (

        <div
          className="
          flex
          h-[320px]
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-gray-200
          px-6
          text-center
          "
        >


          <FiActivity className="
          mb-4
          text-4xl
          text-indigo-500
          "/>



          <p className="
          text-gray-500
          leading-relaxed
          ">

            Enter your height and weight to calculate your BMI score.

          </p>


        </div>


      ) : (


        <div className="space-y-6">



          {/* Score Card */}

          <div
            className="
            rounded-3xl
            bg-gradient-to-br
            from-indigo-50
            to-purple-50
            p-8
            text-center
            border
            border-indigo-100
            "
          >


            <p className="
            text-sm
            font-bold
            uppercase
            tracking-wider
            text-indigo-600
            ">

              BMI Score

            </p>




            <h3
              className="
              mt-3
              text-6xl
              font-extrabold
              text-gray-900
              "
            >

              {bmiData.bmi}

            </h3>




            <div className="
            mt-5
            inline-flex
            rounded-full
            bg-white
            px-5
            py-2
            shadow-sm
            "
            >

              <span className={`
              font-bold
              ${bmiData.color}
              `}>

                {bmiData.category}

              </span>


            </div>



          </div>







          {/* Advice */}


          <div
            className="
            rounded-3xl
            border
            border-gray-100
            bg-gray-50
            p-6
            "
          >


            <div className="
            mb-3
            flex
            items-center
            gap-2
            font-bold
            text-gray-900
            "
            >

              <FiInfo className="text-indigo-600"/>

              Health Advice

            </div>



            <p className="
            leading-relaxed
            text-gray-600
            ">

              {bmiData.advice}

            </p>


          </div>








          {/* BMI Range */}


          <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-gray-100
            "
          >

            <table className="w-full text-sm">


              <thead className="bg-gray-50">

                <tr>

                  <th className="
                  px-5
                  py-4
                  text-left
                  font-bold
                  text-gray-700
                  ">

                    BMI Range

                  </th>


                  <th className="
                  px-5
                  py-4
                  text-left
                  font-bold
                  text-gray-700
                  ">

                    Category

                  </th>


                </tr>

              </thead>




              <tbody>


                <tr className="border-t">

                  <td className="px-5 py-4">
                    Below 18.5
                  </td>

                  <td className="px-5 py-4 text-blue-600 font-semibold">
                    Underweight
                  </td>

                </tr>



                <tr className="border-t">

                  <td className="px-5 py-4">
                    18.5 - 24.9
                  </td>

                  <td className="px-5 py-4 text-green-600 font-semibold">
                    Normal
                  </td>

                </tr>



                <tr className="border-t">

                  <td className="px-5 py-4">
                    25 - 29.9
                  </td>

                  <td className="px-5 py-4 text-yellow-600 font-semibold">
                    Overweight
                  </td>

                </tr>




                <tr className="border-t">

                  <td className="px-5 py-4">
                    30+
                  </td>

                  <td className="px-5 py-4 text-red-600 font-semibold">
                    Obese
                  </td>

                </tr>


              </tbody>


            </table>


          </div>



        </div>


      )}



    </div>

  );

}