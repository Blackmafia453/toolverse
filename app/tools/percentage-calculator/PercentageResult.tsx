import { FaChartLine } from "react-icons/fa";
import {
  FiCheckCircle,
} from "react-icons/fi";

interface PercentageResultProps {
  value: string;
}

export default function PercentageResult({
  value,
}: PercentageResultProps) {

  return (

    <div
      className="
      rounded-3xl
      border
      border-indigo-100
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      p-7
      text-center
      "
    >



      <div
        className="
        mx-auto
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-indigo-100
        "
      >

        <FaChartLine className="
        text-2xl
        text-indigo-600
        "/>


      </div>







      <div
        className="
        mt-5
        flex
        items-center
        justify-center
        gap-2
        "
      >

        <FiCheckCircle className="text-green-500"/>


        <p
          className="
          text-sm
          font-bold
          uppercase
          tracking-wider
          text-gray-500
          "
        >

          Result

        </p>


      </div>








      <h3
        className="
        mt-3
        text-4xl
        font-extrabold
        text-indigo-700
        "
      >

        {value}

      </h3>



      <p
        className="
        mt-3
        text-sm
        text-gray-500
        "
      >

        Calculated instantly by ToolVerse

      </p>



    </div>


  );

}