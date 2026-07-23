import {
  FaCalculator,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

export default function LoanInfo() {
  return (
    <section
      className="
      mt-10
      rounded-3xl
      border
      border-gray-100
      bg-white/80
      backdrop-blur-2xl
      p-8
      shadow-xl
      shadow-indigo-100/30
      "
    >
      <div className="max-w-3xl">

        <h2 className="text-2xl font-bold text-gray-900">
          Free Online Loan Calculator
        </h2>

        <p className="mt-4 leading-8 text-gray-500">
           Soupxor Loan Calculator helps you estimate your monthly loan
          payments, total repayment amount, and total interest within
          seconds. Everything is calculated instantly in your browser with
          no registration or hidden fees.
        </p>

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-3xl bg-indigo-50 p-6">

          <FaCalculator className="text-3xl text-indigo-600" />

          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Accurate EMI
          </h3>

          <p className="mt-2 text-gray-500">
            Calculate monthly installments using the standard EMI formula.
          </p>

        </div>



        <div className="rounded-3xl bg-purple-50 p-6">

          <FaBolt className="text-3xl text-purple-600" />

          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Instant Results
          </h3>

          <p className="mt-2 text-gray-500">
            Get repayment details immediately without waiting.
          </p>

        </div>



        <div className="rounded-3xl bg-blue-50 p-6">

          <FaShieldAlt className="text-3xl text-blue-600" />

          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            100% Private
          </h3>

          <p className="mt-2 text-gray-500">
            All calculations happen locally in your browser.
          </p>

        </div>

      </div>
    </section>
  );
}