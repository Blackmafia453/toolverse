"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  FiUploadCloud,
  FiFileText,
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";


interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
}


export default function UploadZone({
  onFileSelect,
  disabled = false,
}: UploadZoneProps) {


  const onDrop = useCallback(
    (acceptedFiles: File[]) => {

      const file = acceptedFiles[0];

      if (!file) return;

      onFileSelect(file);

    },
    [onFileSelect]
  );



  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
  } = useDropzone({

    onDrop,

    disabled,

    multiple: false,

    maxFiles: 1,

    accept: {
      "application/pdf": [".pdf"],
    },

    maxSize: 15 * 1024 * 1024,

  });




  return (

    <section
      id="converter"
      className="
      mx-auto
      mt-16
      w-full
      max-w-4xl
      px-4
      sm:px-6
      "
    >


      <div

        {...getRootProps()}

        className={`
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border-2
        border-dashed
        p-8
        text-center
        transition-all
        duration-300
        sm:p-12

        ${
          isDragActive
          ?
          "border-indigo-600 bg-indigo-50"
          :
          "border-indigo-200 bg-white hover:border-indigo-500 hover:shadow-xl"
        }

        ${disabled ? "cursor-not-allowed opacity-60" : ""}

        `}
      >


        <input {...getInputProps()} />


        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-indigo-500/10
          via-transparent
          to-blue-500/10
          opacity-0
          transition
          group-hover:opacity-100
          "
        />



        <div
          className="
          relative
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-br
          from-indigo-600
          to-purple-600
          text-white
          shadow-xl
          transition
          group-hover:-translate-y-1
          "
        >

          <FiUploadCloud className="h-10 w-10"/>

        </div>




        <h3
          className="
          relative
          mt-6
          text-2xl
          font-bold
          text-slate-950
          "
        >

          {
            isDragActive
            ?
            "Drop your bank statement here"
            :
            "Upload Bank Statement PDF"
          }

        </h3>




        <p
          className="
          relative
          mx-auto
          mt-3
          max-w-xl
          text-sm
          leading-7
          text-slate-600
          "
        >

          Drag and drop your PDF bank statement or click to browse.
          Soupxor extracts transactions and converts them into Excel.

        </p>




        <div
          className="
          relative
          mt-8
          flex
          flex-wrap
          justify-center
          gap-3
          "
        >


          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            "
          >

            <FiFileText className="text-indigo-600"/>

            PDF Only

          </div>




          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            "
          >

            <FiShield className="text-emerald-600"/>

            Private Processing

          </div>


        </div>




        <div
          className="
          relative
          mt-8
          text-sm
          font-bold
          text-indigo-600
          "
        >

          Maximum file size: 15MB

        </div>



      </div>





      {
        fileRejections.length > 0 && (

          <div
            className="
            mt-5
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-red-200
            bg-red-50
            p-4
            text-sm
            text-red-700
            "
          >

            <FiAlertCircle className="h-5 w-5"/>


            <div>

              <p className="font-semibold">
                Unable to upload this file
              </p>


              <p className="mt-1">
                Please upload a valid PDF bank statement under 15MB.
              </p>


            </div>


          </div>

        )
      }






      <div
        className="
        mt-8
        grid
        gap-4
        sm:grid-cols-3
        "
      >


        {[
          {
            icon: FiCheckCircle,
            title: "Automatic Extraction",
            text: "Reads transaction details automatically.",
            color: "text-emerald-600",
          },
          {
            icon: FiShield,
            title: "Secure",
            text: "Files stay protected during processing.",
            color: "text-indigo-600",
          },
          {
            icon: FiFileText,
            title: "Excel Ready",
            text: "Export structured spreadsheet data.",
            color: "text-purple-600",
          },
        ].map((item) => {


          const Icon = item.icon;


          return (

            <div
              key={item.title}
              className="
              rounded-2xl
              border
              border-indigo-100
              bg-white
              p-5
              shadow-sm
              "
            >

              <Icon
                className={`
                h-6
                w-6
                ${item.color}
                `}
              />


              <h4
                className="
                mt-3
                font-bold
                text-slate-950
                "
              >
                {item.title}
              </h4>


              <p
                className="
                mt-2
                text-sm
                text-slate-600
                "
              >
                {item.text}
              </p>


            </div>

          );


        })}


      </div>



    </section>

  );

}