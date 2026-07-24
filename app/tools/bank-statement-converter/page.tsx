"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import {
  FiDownload,
  FiFileText,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import Hero from "@/components/finance/bank-statement-converter/Hero";
import UploadZone from "@/components/finance/bank-statement-converter/UploadZone";
import FileCard from "@/components/finance/bank-statement-converter/FileCard";
import ProcessingLoader from "@/components/finance/bank-statement-converter/ProcessingLoader";

type Transaction = {
  date: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
};

export default function BankStatementConverterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  const normalizeText = (text: string) => {
    return text
      .replace(/\s+/g, " ")
      .replace(/[|]/g, " ")
      .trim();
  };


  const extractPDFText = async (file: File) => {

    const buffer = await file.arrayBuffer();


    const pdfjs = await import(
      "pdfjs-dist/legacy/build/pdf.mjs"
    );


    if (!pdfjs.GlobalWorkerOptions.workerSrc) {
      pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
    }


    const pdf = await pdfjs
      .getDocument({
        data: buffer,
      })
      .promise;


    let fullText = "";


    for (let i = 1; i <= pdf.numPages; i++) {

      const page = await pdf.getPage(i);

      const content =
        await page.getTextContent();


      const text =
        content.items
          .map((item: any) => item.str)
          .join(" ");


      fullText += text + "\n";

    }


    return normalizeText(fullText);

  };



  const parseTransactions = (
    text: string
  ): Transaction[] => {


    const lines = text.split(
      /\n|(?=\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/
    );


    const results: Transaction[] = [];


    lines.forEach((line) => {


      const dateMatch =
        line.match(
          /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/
        );


      const numbers =
        line.match(
          /[-+]?\d[\d,]*\.?\d*/g
        );


      if (
        !dateMatch ||
        !numbers ||
        numbers.length < 2
      ) {
        return;
      }


      const cleaned =
        numbers.map(
          (n) => n.replace(/,/g, "")
        );


      const last =
        cleaned.slice(-3);


      let debit = "";
      let credit = "";
      let balance = "";


      if (last.length === 3) {

        debit = last[0];
        credit = last[1];
        balance = last[2];

      } else {

        balance = last[1];


        if (
          line.toLowerCase().includes("credit") ||
          line.toLowerCase().includes("deposit")
        ) {

          credit = last[0];

        } else {

          debit = last[0];

        }

      }


      const description =
        line
          .replace(dateMatch[0], "")
          .replace(numbers.join(""), "")
          .trim();


      results.push({

        date: dateMatch[0],

        description:
          description || "Transaction",

        debit,

        credit,

        balance,

      });


    });


    return results;

  };



  const convertStatement = async () => {


    if (!file) return;


    try {

      setLoading(true);
      setError("");
      setCompleted(false);


      const text =
        await extractPDFText(file);


      const parsed =
        parseTransactions(text);


      if (!parsed.length) {

        throw new Error(
          "No transactions found. Upload a readable bank statement PDF."
        );

      }


      setTransactions(parsed);



      const sheet =
        XLSX.utils.json_to_sheet(parsed);


      const workbook =
        XLSX.utils.book_new();


      XLSX.utils.book_append_sheet(
        workbook,
        sheet,
        "Transactions"
      );


      XLSX.writeFile(
        workbook,
        `${file.name.replace(".pdf", "")}-converted.xlsx`
      );


      setCompleted(true);


    } catch (err: any) {


      setError(
        err.message ||
        "Conversion failed."
      );


    } finally {

      setLoading(false);

    }

  };



  const downloadAgain = () => {


    const sheet =
      XLSX.utils.json_to_sheet(
        transactions
      );


    const workbook =
      XLSX.utils.book_new();


    XLSX.utils.book_append_sheet(
      workbook,
      sheet,
      "Transactions"
    );


    XLSX.writeFile(
      workbook,
      "soupxor-bank-statement.xlsx"
    );

  };



  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-b
      from-indigo-50
      via-white
      to-indigo-50
      text-slate-900
      "
    >

      <Hero />


      <section
        className="
        mx-auto
        max-w-5xl
        px-6
        pb-20
        "
      >


        <UploadZone

          onFileSelect={(selected) => {

            setFile(selected);
            setTransactions([]);
            setCompleted(false);
            setError("");

          }}

        />



        {
          file && (

            <FileCard

              file={file}

              onRemove={() => setFile(null)}

            />

          )

        }




        {
          file && !loading && (

            <button

              onClick={convertStatement}

              className="
              mt-8
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              py-4
              font-bold
              text-white
              shadow-xl
              shadow-indigo-500/30
              transition
              hover:scale-[1.01]
              "

            >

              Convert Bank Statement

            </button>

          )

        }




        {
          loading && (

            <ProcessingLoader />

          )

        }




        {
          error && (

            <div
              className="
              mt-8
              flex
              gap-3
              rounded-2xl
              border
              border-red-200
              bg-red-50
              p-5
              font-medium
              text-red-700
              "
            >

              <FiAlertCircle size={22}/>

              {error}

            </div>

          )

        }





        {
          completed && (

            <div
              className="
              mt-10
              rounded-3xl
              border
              border-indigo-100
              bg-white
              p-8
              shadow-xl
              "
            >

              <div
                className="
                flex
                items-center
                gap-3
                "
              >

                <FiCheckCircle
                  className="text-emerald-600"
                  size={28}
                />


                <h2
                  className="
                  text-2xl
                  font-bold
                  text-slate-950
                  "
                >

                  Conversion Completed

                </h2>


              </div>


              <p
                className="
                mt-4
                text-slate-600
                "
              >

                Your bank transactions are ready in Excel format.

              </p>



              <button

                onClick={downloadAgain}

                className="
                mt-6
                flex
                items-center
                gap-2
                rounded-xl
                bg-indigo-600
                px-6
                py-3
                font-semibold
                text-white
                hover:bg-indigo-700
                "

              >

                <FiDownload/>

                Download Excel Again

              </button>


            </div>

          )

        }





        <div
          className="
          mt-16
          grid
          gap-6
          md:grid-cols-3
          "
        >


          {
            [
              {
                title:"Universal PDF Support",
                text:"Works with different bank statement formats worldwide."
              },
              {
                title:"Secure Processing",
                text:"Your financial files stay inside your browser."
              },
              {
                title:"Excel Ready",
                text:"Export structured transactions instantly."
              }

            ].map((item)=>(


              <div

                key={item.title}

                className="
                rounded-3xl
                border
                border-indigo-100
                bg-white
                p-6
                shadow-lg
                "

              >


                <FiFileText
                  className="
                  mb-4
                  text-indigo-600
                  "
                  size={28}
                />


                <h3
                  className="
                  text-lg
                  font-bold
                  text-slate-950
                  "
                >

                  {item.title}

                </h3>


                <p
                  className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-600
                  "
                >

                  {item.text}

                </p>


              </div>


            ))

          }


        </div>


      </section>


    </main>

  );

}