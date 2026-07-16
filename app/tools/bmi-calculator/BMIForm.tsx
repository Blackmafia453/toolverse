import { FaCalculator } from "react-icons/fa";
import { FiRefreshCw, FiUser } from "react-icons/fi";

interface BMIFormProps {
  height: string;
  weight: string;
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
  resetFields: () => void;
}

export default function BMIForm({
  height,
  weight,
  setHeight,
  setWeight,
  resetFields,
}: BMIFormProps) {

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
          bg-indigo-100
          "
        >

          <FaCalculator className="text-2xl text-indigo-600" />

        </div>



        <div>

          <h2
            className="
            text-2xl
            font-bold
            text-gray-900
            "
          >

            Enter Details

          </h2>


          <p className="text-sm text-gray-500">
            Provide your height and weight
          </p>


        </div>


      </div>





      <div className="space-y-6">



        <div>

          <label
            className="
            mb-2
            block
            text-sm
            font-semibold
            text-gray-700
            "
          >

            Height (cm)

          </label>



          <div
            className="
            flex
            items-center
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-4
            transition
            focus-within:border-indigo-500
            focus-within:bg-white
            focus-within:ring-4
            focus-within:ring-indigo-100
            "
          >

            <FiUser className="text-gray-400" />


            <input

              type="number"

              placeholder="Example: 175"

              value={height}

              onChange={(e)=>setHeight(e.target.value)}

              className="
              w-full
              bg-transparent
              px-4
              py-4
              text-gray-800
              outline-none
              "

            />


            <span className="text-sm text-gray-400">
              cm
            </span>


          </div>


        </div>







        <div>


          <label
            className="
            mb-2
            block
            text-sm
            font-semibold
            text-gray-700
            "
          >

            Weight (kg)

          </label>




          <div
            className="
            flex
            items-center
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-4
            transition
            focus-within:border-indigo-500
            focus-within:bg-white
            focus-within:ring-4
            focus-within:ring-indigo-100
            "
          >


            <FiUser className="text-gray-400" />


            <input

              type="number"

              placeholder="Example: 70"

              value={weight}

              onChange={(e)=>setWeight(e.target.value)}

              className="
              w-full
              bg-transparent
              px-4
              py-4
              text-gray-800
              outline-none
              "

            />


            <span className="text-sm text-gray-400">
              kg
            </span>


          </div>


        </div>







        <button

          onClick={resetFields}

          className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          py-4
          font-bold
          text-white
          shadow-lg
          transition
          hover:scale-[1.02]
          "

        >

          <FiRefreshCw />

          Reset Calculator


        </button>



      </div>


    </div>

  );

}