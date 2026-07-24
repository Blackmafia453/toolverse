"use client";

import { useState } from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiShield,
  FiZap,
  FiDatabase,
  FiCreditCard,
  FiX,
  FiDownload,
  FiCheckCircle,
} from "react-icons/fi";

import ToolHeader from "@/components/ToolHeader";
import ToolFAQ from "@/components/ToolFAQ";
import ToolHowTo from "@/components/ToolHowTo";
import ToolRelated from "@/components/ToolRelated";

export default function BankStatementConverterPage() {
  const [activeTab, setActiveTab] = useState("Excel");
  const [file, setFile] = useState<File | null>(null);

  const formats = [
    {
      name: "Excel",
      text: "Convert bank statements into organized Excel spreadsheets.",
    },
    {
      name: "CSV",
      text: "Export transactions into CSV files for accounting systems.",
    },
    {
      name: "JSON",
      text: "Convert financial data into developer-friendly JSON format.",
    },
  ];

  const banks = [
    "Chase",
    "Bank of America",
    "Wells Fargo",
    "HSBC",
    "Barclays",
    "Standard Chartered",
    "HBL",
    "Meezan Bank",
  ];

  const faqData = [
    {
      question: "Is my bank statement secure?",
      answer:
        "Yes. Soupxor follows privacy-first processing. Your financial files are not shared with third parties.",
    },
    {
      question: "Can I convert PDF bank statements to Excel?",
      answer:
        "Yes. Excel conversion is the primary supported export format.",
    },
    {
      question: "Which banks are supported?",
      answer:
        "Soupxor supports statements from many popular banks worldwide.",
    },
    {
      question: "Are QuickBooks and Xero exports available?",
      answer:
        "QuickBooks and Xero integrations are planned for future releases.",
    },
  ];

  const relatedTools = [
    {
      name: "PDF Merge",
      href: "/tools/pdf-merge",
    },
    {
      name: "PDF Split",
      href: "/tools/pdf-split",
    },
    {
      name: "PDF QuickBooks",
      href: "/tools/pdf-quickbooks",
    },
    {
      name: "PDF Xero",
      href: "/tools/pdf-xero",
    },
  ];

  const steps = [
    "Upload your bank statement PDF file.",
    "Choose your preferred export format.",
    "Convert transactions into structured data.",
    "Download your financial file.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">

      <div className="mx-auto max-w-6xl">

        <ToolHeader
          title="Bank Statement Converter"
          description="Convert PDF bank statements into Excel, CSV, and JSON formats. Extract transactions, organize financial data, and simplify accounting workflows with Soupxor."
        />


        {/* Upload */}

        <section className="mt-12 rounded-3xl border border-indigo-100 bg-white/80 p-10 shadow-2xl backdrop-blur">

          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">

              <FiUploadCloud size={40}/>

            </div>


            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Upload Bank Statement PDF
            </h2>


            <p className="mt-3 text-gray-600">
              Convert your financial documents into clean digital formats instantly.
            </p>



            <label className="mt-8 block cursor-pointer rounded-3xl border-2 border-dashed border-indigo-300 bg-indigo-50/50 p-12 transition hover:bg-indigo-100">

              <FiFileText
                size={55}
                className="mx-auto text-indigo-600"
              />


              <p className="mt-5 text-lg font-semibold text-gray-800">
                Drag & Drop your PDF here
              </p>


              <p className="mt-2 text-sm text-gray-500">
                or click to browse files
              </p>


              <input
                type="file"
                accept="application/pdf"
                hidden
                onChange={(e)=>setFile(e.target.files?.[0] || null)}
              />


            </label>



            {file && (

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-indigo-50 p-4">

                <div className="flex items-center gap-3">

                  <FiCheckCircle className="text-green-600"/>

                  <span className="font-medium">
                    {file.name}
                  </span>

                </div>


                <button
                  onClick={()=>setFile(null)}
                  className="rounded-full bg-white p-2 shadow"
                >
                  <FiX/>
                </button>

              </div>

            )}



            <button
              className="mt-8 flex mx-auto items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >

              <FiDownload/>

              Convert Statement

            </button>


          </div>

        </section>



        {/* Formats */}


        <section className="mt-14 grid gap-5 md:grid-cols-5">


          {formats.map((item)=>(

            <button
              key={item.name}
              onClick={()=>setActiveTab(item.name)}
              className={`rounded-3xl p-6 text-left shadow-lg transition hover:-translate-y-1 ${
                activeTab===item.name
                ?
                "bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
                :
                "bg-white text-gray-800"
              }`}
            >

              <h3 className="text-xl font-bold">
                PDF → {item.name}
              </h3>

              <p className="mt-2 text-sm opacity-80">
                {item.text}
              </p>

            </button>

          ))}


          <div className="rounded-3xl bg-gray-100 p-6">

            <h3 className="font-bold">
              PDF → QuickBooks
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Coming Soon
            </p>

          </div>


          <div className="rounded-3xl bg-gray-100 p-6">

            <h3 className="font-bold">
              PDF → Xero
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Coming Soon
            </p>

          </div>


        </section>




        {/* Banks */}


        <section className="mt-16 rounded-3xl bg-white p-10 shadow-xl">


          <div className="flex items-center gap-3">

            <FiCreditCard
              size={32}
              className="text-indigo-600"
            />

            <h2 className="text-3xl font-bold">
              Supported Banks
            </h2>

          </div>



          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4">


            {banks.map((bank)=>(

              <div
                key={bank}
                className="group rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">

                  {bank.charAt(0)}

                </div>


                <h3 className="mt-4 font-bold text-gray-800">
                  {bank}
                </h3>


                <p className="mt-1 text-sm text-gray-500">
                  Bank Statement
                </p>


              </div>

            ))}


          </div>

        </section>



        <section className="mt-16 grid gap-6 md:grid-cols-3">


          {[
            {
              icon:FiZap,
              title:"Fast Processing",
              text:"Quick document conversion workflow."
            },
            {
              icon:FiDatabase,
              title:"Structured Data",
              text:"Clean transaction organization."
            },
            {
              icon:FiShield,
              title:"Privacy First",
              text:"Your financial files stay protected."
            }

          ].map((item)=>(

            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2"
            >

              <item.icon
                size={38}
                className="text-indigo-600"
              />

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>


              <p className="mt-3 text-gray-600">
                {item.text}
              </p>

            </div>

          ))}


        </section>




        <section className="mt-16">

          <ToolHowTo
            title="How To Convert Bank Statements"
            steps={steps}
          />

        </section>



        <section className="mt-16">

          <ToolFAQ
            faqs={faqData}
          />

        </section>



        <section className="mt-16">

          <ToolRelated
            tools={relatedTools}
          />

        </section>


      </div>

    </main>
  );
}