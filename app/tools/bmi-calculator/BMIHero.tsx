import { FaWeight } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

export default function BMIHero() {
  return (
    <section className="mb-12 text-center">


      <div
        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-indigo-100
        px-5
        py-2
        text-sm
        font-semibold
        text-indigo-700
        mb-6
        "
      >

        <FiActivity />

        Health & Fitness Calculator

      </div>



      <div
        className="
        mx-auto
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-3xl
        bg-gradient-to-br
        from-indigo-600
        via-blue-600
        to-purple-600
        shadow-xl
        "
      >

        <FaWeight className="text-5xl text-white" />

      </div>




      <h1
        className="
        mt-6
        text-4xl
        font-extrabold
        tracking-tight
        text-gray-900
        md:text-6xl
        "
      >

        BMI Calculator

      </h1>




      <p
        className="
        mx-auto
        mt-5
        max-w-2xl
        text-lg
        leading-relaxed
        text-gray-500
        "
      >

        Calculate your Body Mass Index instantly using your height and weight.
        Understand your healthy weight range with a simple and fast tool.

      </p>


    </section>
  );
}