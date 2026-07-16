import { FaMoneyBillWave } from "react-icons/fa";

export default function LoanHero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-indigo-100 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 px-8 py-14 text-center shadow-2xl">

      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20">

          <FaMoneyBillWave className="text-4xl text-white" />

        </div>

        <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Loan Calculator
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-indigo-100">
          Calculate your monthly EMI, total repayment and total interest
          instantly with our professional loan calculator.
        </p>

      </div>

    </section>
  );
}