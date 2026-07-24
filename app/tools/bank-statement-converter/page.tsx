"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import { FiDownload, FiFileText, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

import Hero from "@/components/finance/bank-statement-converter/Hero";
import UploadZone from "@/components/finance/bank-statement-converter/UploadZone";
import FileCard from "@/components/finance/bank-statement-converter/FileCard";
import ProcessingLoader from "@/components/finance/bank-statement-converter/ProcessingLoader";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/6.1.200/pdf.worker.min.mjs`;

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


  const extractPDFText = async (pdfFile: File) => {
    const buffer = await pdfFile.arrayBuffer();

    const pdf = await getDocument({
      data: buffer,
    }).promise;


    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);

      const content = await page.getTextContent();

      const pageText = content.items
        .map((item: any) => item.str)
        .join(" ");

      fullText += pageText + "\n";
    }


    return normalizeText(fullText);
  };


  const parseTransactions = (text: string): Transaction[] => {

    const lines = text.split(/\n|(?=\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/);


    const results: Transaction[] = [];


    lines.forEach((line) => {

      const numbers = line.match(
        /[-+]?\d[\d,]*\.?\d*/g
      );


      if (!numbers || numbers.length < 2) {
        return;
      }


      const dateMatch = line.match(
        /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/
      );


      if (!dateMatch) {
        return;
      }


      const date = dateMatch[0];


      const cleanedNumbers = numbers.map((n) =>
        n.replace(/,/g, "")
      );


      const lastNumbers =
        cleanedNumbers.slice(-3);


      let debit = "";
      let credit = "";
      let balance = "";


      if (lastNumbers.length === 3) {

        debit = lastNumbers[0];
        credit = lastNumbers[1];
        balance = lastNumbers[2];

      } 
      else if(lastNumbers.length === 2){

        balance = lastNumbers[1];

        if (
          line.toLowerCase().includes("credit") ||
          line.toLowerCase().includes("deposit")
        ) {
          credit = lastNumbers[0];
        } else {
          debit = lastNumbers[0];
        }

      }


      const description = line
        .replace(date, "")
        .replace(numbers.join(""), "")
        .trim();



      results.push({
        date,
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


      const text = await extractPDFText(file);


      const parsed =
        parseTransactions(text);


      if (!parsed.length) {

        throw new Error(
          "No transactions found. Please upload a readable bank statement PDF."
        );

      }


      setTransactions(parsed);


      const worksheet =
        XLSX.utils.json_to_sheet(parsed);


      const workbook =
        XLSX.utils.book_new();


      XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Transactions"
      );


      XLSX.writeFile(
        workbook,
        `${file.name.replace(".pdf","")}-converted.xlsx`
      );


      setCompleted(true);


    } catch(err:any){

      setError(
        err.message ||
        "Something went wrong while converting your statement."
      );

    } finally {

      setLoading(false);

    }

  };



  const handleDownloadAgain = () => {

    if (!transactions.length) return;


    const worksheet =
      XLSX.utils.json_to_sheet(transactions);


    const workbook =
      XLSX.utils.book_new();


    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Transactions"
    );


    XLSX.writeFile(
      workbook,
      "soupxor-bank-statement.xlsx"
    );

  };



  return (

    <main className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white">

      <Hero />


      <section className="max-w-5xl mx-auto px-6 py-12">


        <UploadZone
          onFileSelect={(selectedFile:File)=>{

            setFile(selectedFile);
            setTransactions([]);
            setCompleted(false);
            setError("");

          }}
        />



        {file && (

          <div className="mt-8">

            <FileCard
              file={file}
              onRemove={()=>setFile(null)}
            />

          </div>

        )}



        {file && !loading && (

          <button
            onClick={convertStatement}
            className="
            mt-8 w-full rounded-2xl
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            py-4
            font-semibold
            shadow-lg
            transition
            "
          >

            Convert Bank Statement

          </button>

        )}



        {loading && (

          <div className="mt-10">

            <ProcessingLoader />

          </div>

        )}



        {error && (

          <div
          className="
          mt-8
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-red-200
          bg-red-50
          p-5
          text-red-700
          "
          >

            <FiAlertCircle />

            {error}

          </div>

        )}



        {completed && (

          <div
          className="
          mt-10
          rounded-3xl
          border
          border-indigo-100
          bg-white/70
          backdrop-blur-xl
          p-8
          shadow-xl
          "
          >

            <div className="flex items-center gap-3">

              <FiCheckCircle
              className="text-green-600"
              size={24}
              />

              <h2
              className="
              text-xl
              font-bold
              "
              >
                Conversion Completed
              </h2>

            </div>



            <p className="mt-3 text-gray-600">

              Your bank transactions have been extracted and converted into Excel format.

            </p>



            <button
            onClick={handleDownloadAgain}
            className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            text-white
            font-semibold
            "
            >

              <FiDownload />

              Download Excel Again

            </button>


          </div>

        )}



      </section>




      <section className="max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">


        {[
          {
            title:"Universal PDF Support",
            text:"Works with bank statements from different countries without bank-specific templates."
          },
          {
            title:"Secure Processing",
            text:"Files are processed locally inside your browser."
          },
          {
            title:"Excel Ready",
            text:"Export clean transaction data instantly."
          }
        ].map((item)=>(

          <div
          key={item.title}
          className="
          rounded-3xl
          bg-white/70
          backdrop-blur-xl
          border
          border-indigo-100
          p-6
          shadow-sm
          "
          >

            <FiFileText
            className="text-indigo-600 mb-4"
            size={26}
            />

            <h3 className="font-bold text-lg">

              {item.title}

            </h3>


            <p className="mt-2 text-gray-600 text-sm">

              {item.text}

            </p>


          </div>

        ))}


      </section>


    </main>

  );

}