"use client";

import { useState } from "react";
import {
  FiDownload,
  FiFileText,
  FiCheckCircle,
  FiAlertCircle,
  FiDatabase,
} from "react-icons/fi";

import Hero from "@/components/finance/bank-statement-converter/Hero";
import UploadZone from "@/components/finance/bank-statement-converter/UploadZone";
import FileCard from "@/components/finance/bank-statement-converter/FileCard";
import ProcessingLoader from "@/components/finance/bank-statement-converter/ProcessingLoader";

import { Transaction } from "./types";
import { extractPDFText } from "./pdfExtractor";
import {
  extractTextWithOCR,
} from "./ocr";
import {
  parseTransactions,
} from "./parser";
import {
  generateExcel,
} from "./excel";


export default function BankStatementConverterPage() {


  const [file, setFile] =
    useState<File | null>(null);


  const [transactions, setTransactions] =
    useState<Transaction[]>([]);


  const [loading, setLoading] =
    useState(false);


  const [progressText, setProgressText] =
    useState("");


  const [error, setError] =
    useState("");


  const [completed, setCompleted] =
    useState(false);



  /**
   * Main conversion pipeline
   */
  const convertStatement = async () => {


    if (!file) return;



    try {


      setLoading(true);

      setError("");

      setCompleted(false);

      setTransactions([]);

      setProgressText(
        "Reading PDF statement..."
      );



      let extractedText = "";



      /**
       * First attempt:
       * Normal PDF extraction
       */
      try {


        const result =
          await extractPDFText(
            file
          );


        extractedText =
          result.text || "";


      } catch {

        extractedText = "";

      }



      /**
       * OCR fallback
       */
      if (
        !extractedText ||
        extractedText.length < 80
      ) {


        setProgressText(
          "Scanning PDF pages with OCR..."
        );



        const ocrResult =
          await extractTextWithOCR(
            file,
            (status) => {

              setProgressText(
                `${status.status}`
              );

            }
          );



        extractedText =
          ocrResult.text;


      }



      if (
        !extractedText ||
        extractedText.length < 20
      ) {

        throw new Error(
          "Unable to extract text from this PDF."
        );

      }



      setProgressText(
        "Detecting transactions..."
      );



      const parsedResult =
  parseTransactions(
    extractedText
  );


if (
  !parsedResult.transactions ||
  !parsedResult.transactions.length
) {

  throw new Error(
    "No transactions found in this statement."
  );

}


setTransactions(
  parsedResult.transactions
);

      setProgressText(
        "Generating Excel file..."
      );



      generateExcel(
  parsedResult.transactions,
  {
    fileName:
      `${file.name.replace(
        ".pdf",
        ""
      )}-converted.xlsx`,
  }
);



      setCompleted(true);


    } catch (err:any) {


      setError(
        err.message ||
        "Conversion failed."
      );


    } finally {


      setLoading(false);

      setProgressText("");

    }

  };




  const downloadAgain = () => {


    if (!transactions.length)
      return;



    generateExcel(
      transactions,
      {
        fileName:
          "soupxor-bank-statement.xlsx",
      }
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

          onFileSelect={(selected)=>{

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

              onRemove={()=>{

                setFile(null);

                setTransactions([]);

                setCompleted(false);

              }}

            />

          )
        }






        {
          file &&
          !loading &&
          (

            <button

              onClick={
                convertStatement
              }

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
          loading &&
          (

            <div>

              <ProcessingLoader />

              {
                progressText &&
                (

                  <p
                    className="
                    mt-4
                    text-center
                    text-sm
                    font-medium
                    text-indigo-600
                    "
                  >

                    {progressText}

                  </p>

                )
              }

            </div>

          )
        }







        {
          error &&
          (

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
          completed &&
          (

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
                  "
                >

                  Conversion Completed

                </h2>

              </div>





              <div
                className="
                mt-5
                flex
                items-center
                gap-3
                rounded-xl
                bg-indigo-50
                p-4
                text-indigo-700
                "
              >

                <FiDatabase />

                <span>

                  {transactions.length}
                  {" "}
                  transactions extracted

                </span>

              </div>






              <p
                className="
                mt-5
                text-slate-600
                "
              >

                Your bank statement has been
                converted into a structured Excel file.

              </p>






              <button

                onClick={
                  downloadAgain
                }

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

                <FiDownload />

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
                title:
                "Universal PDF Support",

                text:
                "Handles different bank statement formats worldwide."
              },


              {
                title:
                "Secure Processing",

                text:
                "Your financial files are processed locally in your browser."
              },


              {
                title:
                "Excel Ready",

                text:
                "Exports clean structured transactions instantly."
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