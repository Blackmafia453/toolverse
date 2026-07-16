import { ReactNode } from "react";
import { FaCalculator } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

interface PercentageCardProps {
  title: string;
  children: ReactNode;
}

export default function PercentageCard({
  title,
  children,
}: PercentageCardProps) {

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
      transition
      hover:-translate-y-1
      md:p-8
      "
    >




      <div
        className="
        mb-7
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

          <FaCalculator className="
          text-2xl
          text-indigo-600
          "/>

        </div>





        <div>


          <h2
            className="
            text-xl
            font-bold
            text-gray-900
            "
          >

            {title}

          </h2>



          <div
            className="
            mt-1
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
            "
          >

            <FiActivity className="text-indigo-500"/>

            Quick calculation

          </div>


        </div>



      </div>






      <div className="space-y-5">

        {children}

      </div>




    </div>

  );

}