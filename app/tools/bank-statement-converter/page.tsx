"use client";

import Image from "next/image";
import {
  FiUploadCloud,
  FiFileText,
  FiShield,
  FiZap,
  FiDownload,
  FiCheckCircle,
  FiGlobe,
  FiCreditCard,
} from "react-icons/fi";

export default function BankStatementConverterPage() {
 const banks = [
  {
    name: "Chase Bank",
    logo: "/banks/chase.svg",
    country: "USA",
  },
  {
  name: "Bank of America",
  logo: "/banks/bank-of-america.svg",
  country: "USA",
  },
  {
    name: "HSBC",
    logo: "/banks/hsbc.svg",
    country: "UK",
  },
  {
    name: "Barclays",
    logo: "/banks/barclays.svg",
    country: "UK",
  },
  {
    name: "HDFC Bank",
    logo: "/banks/hdfc.svg",
    country: "India",
  },
  {
    name: "Meezan Bank",
    logo: "/banks/meezan.svg",
    country: "Pakistan",
  },
];

  const features = [
    {
      icon: <FiZap />,
      title: "Instant Conversion",
      text: "Convert bank statements into organized Excel files within seconds.",
    },
    {
      icon: <FiShield />,
      title: "Privacy Focused",
      text: "Your financial documents stay protected with secure processing.",
    },
    {
      icon: <FiFileText />,
      title: "Smart Formatting",
      text: "Automatically organize dates, descriptions, deposits and withdrawals.",
    },
    {
      icon: <FiDownload />,
      title: "Excel Ready",
      text: "Download clean spreadsheets ready for accounting and analysis.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white px-4 py-12">

      <section className="mx-auto max-w-6xl text-center">

        <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-5 py-2 text-sm text-indigo-600 shadow-sm backdrop-blur">
          <FiCreditCard />
          Finance Productivity Tool
        </div>


        <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Bank Statement Converter
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
          Convert your bank statements into clean Excel spreadsheets quickly.
          Soupxor helps individuals, accountants, freelancers and businesses
          organize financial data with a simple and secure workflow.
        </p>


        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl">

          <div className="rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/50 p-10">

            <FiUploadCloud className="mx-auto text-5xl text-indigo-600" />

            <h2 className="mt-5 text-2xl font-semibold text-gray-900">
              Upload Your Bank Statement
            </h2>

            <p className="mt-3 text-gray-600">
              Upload PDF, CSV or supported bank statement files.
            </p>


            <button className="mt-7 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700">
              Upload Statement
            </button>

          </div>

        </div>

      </section>



      <section className="mx-auto mt-20 max-w-6xl">

        <div className="mb-10 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Supported Worldwide Banks
          </h2>

          <p className="mt-3 text-gray-600">
            Designed for statements from popular banks around the world.
          </p>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {banks.map((bank) => (

            <div
              key={bank.name}
              className="flex items-center gap-5 rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50">

                <Image
                  src={bank.logo}
                  alt={`${bank.name} logo`}
                  width={45}
                  height={45}
                  className="object-contain"
                />

              </div>


              <div>

                <h3 className="font-semibold text-gray-900">
                  {bank.name}
                </h3>

                <p className="flex items-center gap-2 text-sm text-gray-500">
                  <FiGlobe />
                  {bank.country}
                </p>

              </div>


            </div>

          ))}

        </div>

      </section>




      <section className="mx-auto mt-20 max-w-6xl">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature)=>(
            
            <div
              key={feature.title}
              className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl text-indigo-600">
                {feature.icon}
              </div>


              <h3 className="mt-5 font-semibold text-gray-900">
                {feature.title}
              </h3>


              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {feature.text}
              </p>


            </div>

          ))}

        </div>

      </section>




      <section className="mx-auto mt-20 max-w-5xl rounded-3xl border bg-white p-10 shadow-xl">

        <h2 className="text-center text-3xl font-bold text-gray-900">
          Why Use Soupxor Bank Statement Converter?
        </h2>


        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            Managing financial records manually can take hours. Soupxor
            simplifies the process by transforming complicated bank statements
            into structured spreadsheet data.
          </p>


          <p>
            Whether you are preparing accounting reports, analyzing expenses,
            tracking business transactions or organizing personal finances,
            this tool helps save valuable time.
          </p>


          <div className="grid gap-4 md:grid-cols-2">

            {[
              "Convert statements into spreadsheet format",
              "Organize transaction history automatically",
              "Useful for accountants and businesses",
              "Works with multiple bank formats",
            ].map((item)=>(
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 text-sm text-gray-700"
              >
                <FiCheckCircle className="text-indigo-600" />
                {item}
              </div>
            ))}

          </div>


        </div>


      </section>




      <section className="mx-auto mt-20 max-w-4xl text-center">

        <h2 className="text-3xl font-bold text-gray-900">
          Convert Your Bank Statement Today
        </h2>

        <p className="mt-4 text-gray-600">
          Turn financial documents into useful data with Soupxor's free online
          bank statement converter.
        </p>


      </section>


    </main>
  );
}