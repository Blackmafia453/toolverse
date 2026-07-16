"use client";

import { useState } from "react";

import PercentageHero from "./PercentageHero";
import PercentageCard from "./PercentageCard";
import DiscountCard from "./DiscountCard";
import PercentageResult from "./PercentageResult";
import PercentageInfo from "./PercentageInfo";

export default function PercentageCalculatorPage() {
  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";

  const [percent, setPercent] = useState("");
  const [number, setNumber] = useState("");

  const percentageOfNumber =
    percent && number
      ? ((Number(percent) / 100) * Number(number)).toFixed(2)
      : "0";

  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");

  const whatPercent =
    value && total && Number(total) !== 0
      ? ((Number(value) / Number(total)) * 100).toFixed(2)
      : "0";

  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");

  const increase =
    oldValue && newValue && Number(oldValue) !== 0
      ? (
          ((Number(newValue) - Number(oldValue)) /
            Number(oldValue)) *
          100
        ).toFixed(2)
      : "0";

  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const discountAmount =
    price && discount
      ? ((Number(price) * Number(discount)) / 100).toFixed(2)
      : "0";

  const finalPrice =
    price && discount
      ? (Number(price) - Number(discountAmount)).toFixed(2)
      : "0";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <PercentageHero />

        <div className="grid gap-8 lg:grid-cols-2">
          <PercentageCard title="Percentage of a Number">
            <input
              type="number"
              placeholder="Percentage (%)"
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
              className={inputClass}
            />

            <input
              type="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={inputClass}
            />

            <PercentageResult value={percentageOfNumber} />
          </PercentageCard>


          <PercentageCard title="X is What % of Y?">
            <input
              type="number"
              placeholder="X Value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={inputClass}
            />

            <input
              type="number"
              placeholder="Y Value"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className={inputClass}
            />

            <PercentageResult value={`${whatPercent}%`} />
          </PercentageCard>


          <PercentageCard title="Percentage Increase">
            <input
              type="number"
              placeholder="Old Value"
              value={oldValue}
              onChange={(e) => setOldValue(e.target.value)}
              className={inputClass}
            />

            <input
              type="number"
              placeholder="New Value"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className={inputClass}
            />

            <PercentageResult value={`${increase}%`} />
          </PercentageCard>


          <DiscountCard
            discountAmount={discountAmount}
            finalPrice={finalPrice}
          >
            <input
              type="number"
              placeholder="Original Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={inputClass}
            />

            <input
              type="number"
              placeholder="Discount (%)"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className={inputClass}
            />
          </DiscountCard>
        </div>

        <PercentageInfo />
      </div>
    </main>
  );
}