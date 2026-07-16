import { FaTag } from "react-icons/fa";
import {
  FiShoppingBag,
  FiTrendingDown,
} from "react-icons/fi";

interface DiscountCardProps {
  children: React.ReactNode;
  discountAmount: string;
  finalPrice: string;
}

export default function DiscountCard({
  children,
  discountAmount,
  finalPrice,
}: DiscountCardProps) {

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
          bg-purple-100
          "
        >

          <FaTag className="
          text-2xl
          text-purple-600
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

            Discount Calculator

          </h2>


          <p
            className="
            mt-1
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
            "
          >

            <FiShoppingBag className="text-purple-500"/>

            Calculate final price instantly

          </p>


        </div>


      </div>







      <div className="space-y-5">


        {children}






        <div
          className="
          mt-6
          rounded-3xl
          border
          border-indigo-100
          bg-gradient-to-br
          from-indigo-50
          to-purple-50
          p-6
          "
        >



          <div
            className="
            mb-4
            flex
            items-center
            gap-2
            font-bold
            text-gray-900
            "
          >

            <FiTrendingDown className="text-red-500"/>

            Price Summary

          </div>







          <div className="
          flex
          justify-between
          text-gray-600
          "
          >

            <span>
              Discount Amount
            </span>


            <span className="
            font-bold
            text-red-600
            "
            >

              {discountAmount}

            </span>


          </div>






          <div
            className="
            mt-4
            flex
            justify-between
            "
          >

            <span className="
            text-gray-600
            "
            >

              Final Price

            </span>



            <span
              className="
              font-extrabold
              text-green-600
              "
            >

              {finalPrice}

            </span>


          </div>



        </div>



      </div>



    </div>

  );

}