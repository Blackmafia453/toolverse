import {
  FaCalendarCheck,
  FaMoneyBillWave,
  FaPercent,
} from "react-icons/fa6";

interface LoanResultProps {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export default function LoanResult({
  monthlyPayment,
  totalPayment,
  totalInterest,
}: LoanResultProps) {

  if (monthlyPayment <= 0) return null;

  return (
    <section
      className="
      mt-8
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

      <h2 className="text-2xl font-bold text-gray-900">
        Loan Summary
      </h2>

      <p className="mt-2 text-gray-500">
        Based on the values you entered.
      </p>


      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-6">

          <FaCalendarCheck className="text-3xl text-indigo-600" />

          <h3 className="mt-4 text-sm font-medium text-gray-500">
            Monthly Payment
          </h3>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            ${monthlyPayment.toFixed(2)}
          </p>

        </div>



        <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 p-6">

          <FaMoneyBillWave className="text-3xl text-purple-600" />

          <h3 className="mt-4 text-sm font-medium text-gray-500">
            Total Payment
          </h3>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            ${totalPayment.toFixed(2)}
          </p>

        </div>



        <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-6">

          <FaPercent className="text-3xl text-blue-600" />

          <h3 className="mt-4 text-sm font-medium text-gray-500">
            Total Interest
          </h3>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            ${totalInterest.toFixed(2)}
          </p>

        </div>

      </div>

    </section>
  );
}