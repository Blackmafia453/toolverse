interface LoanFormProps {
  amount: number;
  setAmount: (value: number) => void;
  interest: number;
  setInterest: (value: number) => void;
  years: number;
  setYears: (value: number) => void;
  onCalculate: () => void;
}

export default function LoanForm({
  amount,
  setAmount,
  interest,
  setInterest,
  years,
  setYears,
  onCalculate,
}: LoanFormProps) {
  const inputClass = `
    w-full
    rounded-2xl
    border
    border-gray-200
    bg-white
    px-4
    py-3
    text-gray-900
    placeholder:text-gray-400
    outline-none
    transition-all
    focus:border-indigo-500
    focus:ring-4
    focus:ring-indigo-100
  `;

  return (
    <div
      className="
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
        Loan Details
      </h2>

      <p className="mt-2 text-gray-500">
        Enter your loan information below.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Loan Amount
          </label>

          <input
            type="number"
            value={amount || ""}
            onChange={(e) => setAmount(Number(e.target.value))}
            className={inputClass}
            placeholder="100000"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Annual Interest Rate (%)
          </label>

          <input
            type="number"
            value={interest || ""}
            onChange={(e) => setInterest(Number(e.target.value))}
            className={inputClass}
            placeholder="10"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Loan Term (Years)
          </label>

          <input
            type="number"
            value={years || ""}
            onChange={(e) => setYears(Number(e.target.value))}
            className={inputClass}
            placeholder="5"
          />
        </div>

        <button
          onClick={onCalculate}
          className="
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-blue-600
            py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-xl
          "
        >
          Calculate Loan
        </button>
      </div>
    </div>
  );
}