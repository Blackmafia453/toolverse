"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import {
  FiUploadCloud,
  FiFileText,
  FiScissors,
  FiDownload,
  FiCheckCircle,
  FiShield,
  FiZap,
} from "react-icons/fi";

export default function PDFSplitPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState(0);
  const [pageRange, setPageRange] = useState("1");
  const [previewUrl, setPreviewUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = e.target.files?.[0];

    if (!uploadedFile) return;

    if (uploadedFile.type !== "application/pdf") {
      setMessage("Please upload a valid PDF file.");
      return;
    }

    setFile(uploadedFile);
    setDownloadUrl("");
    setMessage("");

    const url = URL.createObjectURL(uploadedFile);

    setPreviewUrl(url);

    const bytes = await uploadedFile.arrayBuffer();

    const pdf = await PDFDocument.load(bytes);

    setPages(pdf.getPageCount());

    setPageRange("1");
  };

  const splitPDF = async () => {
    if (!file) return;

    try {
      setLoading(true);
      setMessage("");

      const bytes = await file.arrayBuffer();

      const originalPdf = await PDFDocument.load(bytes);

      const newPdf = await PDFDocument.create();

      const selectedPages = pageRange
        .split(",")
        .flatMap((range) => {
          if (range.includes("-")) {
            const [start, end] = range
              .split("-")
              .map(Number);

            return Array.from(
              {
                length: end - start + 1,
              },
              (_, i) => start + i
            );
          }

          return [Number(range)];
        })
        .filter(
          (page) =>
            page > 0 &&
            page <= pages
        );

      if (selectedPages.length === 0) {
        setMessage("Enter valid page numbers.");
        setLoading(false);
        return;
      }

      const copiedPages = await newPdf.copyPages(
        originalPdf,
        selectedPages.map((page) => page - 1)
      );

      copiedPages.forEach((page) => {
        newPdf.addPage(page);
      });

    const output = await newPdf.save();

const safeArrayBuffer = new ArrayBuffer(output.byteLength);

const view = new Uint8Array(safeArrayBuffer);

view.set(output);

const blob = new Blob(
  [safeArrayBuffer],
  {
    type: "application/pdf",
  }
);


      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);

      setMessage(
        "PDF split successfully!"
      );

    } catch (error) {
      console.error(error);

      setMessage(
        "Something went wrong."
      );

    }

    setLoading(false);
  };


  return (
    <main className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-white
      to-indigo-50
      px-4
      py-12
    ">

      <div className="max-w-6xl mx-auto">

        <section className="text-center mb-12">

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-indigo-100
            text-indigo-700
            text-sm
            font-semibold
            mb-5
          ">

            <FiScissors />

            PDF Split Tool

          </div>


          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
          ">
            Split PDF Files Easily
          </h1>


          <p className="
            mt-4
            text-gray-600
            max-w-2xl
            mx-auto
            text-lg
            leading-8
          ">
            Extract selected pages from PDF documents instantly.
            Secure browser-based processing with no file uploads.
          </p>

        </section>



        <section className="
          grid
          md:grid-cols-2
          gap-8
        ">


          <div className="
            rounded-3xl
            border
            border-white/60
            bg-white/80
            p-8
            shadow-xl
            backdrop-blur
          ">


            <div className="
              flex
              items-center
              gap-3
              mb-6
            ">

              <div className="
                p-3
                rounded-2xl
                bg-indigo-100
                text-indigo-600
              ">
                <FiUploadCloud size={25}/>
              </div>

              <h2 className="text-xl font-bold">
                Upload PDF
              </h2>

            </div>


            <label className="
              cursor-pointer
              block
              rounded-2xl
              border-2
              border-dashed
              border-indigo-200
              p-10
              text-center
              hover:border-indigo-500
              transition
            ">

              <FiFileText
                className="
                  mx-auto
                  text-indigo-500
                  mb-4
                "
                size={45}
              />

              <p className="text-gray-600">
                Click to select PDF file
              </p>


              <input
                type="file"
                accept="application/pdf"
                hidden
                onChange={handleUpload}
              />

            </label>


            {file && (
              <div className="
                mt-6
                rounded-2xl
                bg-indigo-50
                p-5
              ">

                <p className="font-semibold text-gray-900">
                  {file.name}
                </p>

                <p className="
                  text-sm
                  text-gray-600
                  mt-2
                ">
                  Total Pages: {pages}
                </p>

              </div>
            )}



            {pages > 0 && (

              <div className="mt-6">

                <label className="
                  text-sm
                  font-semibold
                  text-gray-700
                ">
                  Select Pages
                </label>


                <input
                  value={pageRange}
                  onChange={(e)=>setPageRange(e.target.value)}
                  placeholder="Example: 1-3,5"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                  "
                />


                <button
                  onClick={splitPDF}
                  disabled={loading}
                  className="
                    mt-5
                    w-full
                    rounded-xl
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    py-3
                    font-semibold
                    transition
                  "
                >

                  {loading
                    ? "Processing..."
                    : "Split PDF"
                  }

                </button>

              </div>

            )}


            {message && (
              <p className="
                mt-5
                text-indigo-600
                font-medium
              ">
                {message}
              </p>
            )}

          </div>





          <div className="
            rounded-3xl
            border
            border-white/60
            bg-white/80
            p-8
            shadow-xl
            backdrop-blur
          ">


            <div className="
              flex
              items-center
              gap-3
              mb-6
            ">

              <div className="
                p-3
                rounded-2xl
                bg-purple-100
                text-purple-600
              ">

                <FiScissors size={25}/>

              </div>


              <h2 className="text-xl font-bold">
                PDF Preview
              </h2>

            </div>


            {
              previewUrl ? (

                <iframe
                  src={previewUrl}
                  className="
                    w-full
                    h-[420px]
                    rounded-2xl
                    border
                  "
                />

              ) : (

                <div className="
                  h-[420px]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                ">
                  Upload PDF to preview
                </div>

              )
            }



            {downloadUrl && (

              <a
                href={downloadUrl}
                download="split-document.pdf"
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-green-600
                  text-white
                  py-3
                  font-semibold
                "
              >

                <FiDownload/>

                Download PDF

              </a>

            )}

          </div>


        </section>





        <section className="
          mt-12
          grid
          md:grid-cols-3
          gap-6
        ">

          {[
            {
              icon:<FiShield/>,
              title:"Secure",
              text:"Files remain inside your browser."
            },
            {
              icon:<FiZap/>,
              title:"Fast",
              text:"Instant PDF processing."
            },
            {
              icon:<FiCheckCircle/>,
              title:"Simple",
              text:"Easy page extraction."
            }
          ].map((item,index)=>(

            <div
              key={index}
              className="
                rounded-3xl
                border
                border-white/60
                bg-white/80
                p-6
                shadow-xl
                backdrop-blur
              "
            >

              <div className="text-indigo-600 mb-4">
                {item.icon}
              </div>


              <h3 className="font-bold text-lg">
                {item.title}
              </h3>


              <p className="mt-2 text-gray-600">
                {item.text}
              </p>

            </div>

          ))}

        </section>




        <section className="
          mt-12
          rounded-3xl
          border
          border-white/60
          bg-white/80
          p-8
          shadow-xl
          backdrop-blur
        ">

          <h2 className="
            text-2xl
            font-bold
            text-gray-900
            mb-4
          ">
            About PDF Split Tool
          </h2>


          <p className="
            text-gray-600
            leading-8
          ">
            ToolVerse PDF Split Tool helps you extract selected pages
            from PDF files quickly. All processing happens directly
            in your browser, keeping your documents private and secure.
          </p>

        </section>


      </div>

    </main>
  );
}