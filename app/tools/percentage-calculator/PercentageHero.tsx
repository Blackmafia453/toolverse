import { FaPercent } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

export default function PercentageHero() {
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

        <FiTrendingUp />

        Math & Finance Calculator

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
        via-purple-600
        to-pink-500
        shadow-xl
        "
      >

        <FaPercent className="text-5xl text-white" />

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

        Percentage Calculator

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

        Calculate percentages, increases, decreases, and discounts instantly.
        A fast, accurate, and privacy-friendly calculator by  Soupxor.

      </p>


    </section>
  );
}