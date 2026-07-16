"use client";

import { useState } from "react";

import LoanHero from "./components/LoanHero";
import LoanForm from "./components/LoanForm";
import LoanResult from "./components/LoanResult";
import LoanInfo from "./components/LoanInfo";

export default function LoanCalculatorPage() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateLoan = () => {
    if (amount <= 0 || interest <= 0 || years <= 0) {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
      return;
    }

    // Existing EMI Formula (Preserved)
    const monthlyRate = interest / 12 / 100;
    const months = years * 12;

    const emi =
      (amount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const payment = emi * months;
    const interestPaid = payment - amount;

    setMonthlyPayment(emi);
    setTotalPayment(payment);
    setTotalInterest(interestPaid);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Hero */}
        <LoanHero />

        {/* Calculator */}
        <section className="mt-12 grid gap-8 lg:grid-cols-2">

          <LoanForm
            amount={amount}
            setAmount={setAmount}
            interest={interest}
            setInterest={setInterest}
            years={years}
            setYears={setYears}
            onCalculate={calculateLoan}
          />

          <LoanResult
            monthlyPayment={monthlyPayment}
            totalPayment={totalPayment}
            totalInterest={totalInterest}
          />

        </section>

        {/* Info */}
        <LoanInfo />

      </div>
    </main>
  );
}