"use client";

import { useMemo, useState } from "react";

import BMIHero from "./BMIHero";
import BMIForm from "./BMIForm";
import BMIResult from "./BMIResult";
import BMIInfo from "./BMIInfo";

export default function BMICalculatorPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmiData = useMemo(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      return null;
    }

    const meter = h / 100;
    const bmi = w / (meter * meter);

    let category = "";
    let color = "";
    let advice = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600";
      advice =
        "You are below the healthy weight range. Consider a balanced, nutrient-rich diet and regular strength training.";
    } else if (bmi < 25) {
      category = "Normal Weight";
      color = "text-green-600";
      advice =
        "Excellent! Maintain your healthy lifestyle with balanced nutrition and regular exercise.";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-600";
      advice =
        "Try increasing physical activity and maintaining a calorie-balanced diet.";
    } else {
      category = "Obese";
      color = "text-red-600";
      advice =
        "Consider consulting a healthcare professional for a personalized weight management plan.";
    }

    return {
      bmi: bmi.toFixed(1),
      category,
      color,
      advice,
    };
  }, [height, weight]);

  const resetFields = () => {
    setHeight("");
    setWeight("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <BMIHero />

        <div className="grid gap-8 lg:grid-cols-2">
          <BMIForm
            height={height}
            weight={weight}
            setHeight={setHeight}
            setWeight={setWeight}
            resetFields={resetFields}
          />

          <BMIResult bmiData={bmiData} />
        </div>

        <BMIInfo />
      </div>
    </main>
  );
}