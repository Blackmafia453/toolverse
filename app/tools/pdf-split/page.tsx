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

       <section className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-2xl px-8 py-16 mb-12">

  {/* Background Glow */}
  <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl"></div>
  <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl"></div>

  <div className="relative z-10 text-center">

    <div className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-indigo-200
      bg-indigo-50
      px-5
      py-2
      text-sm
      font-semibold
      text-indigo-700
      shadow-sm
    ">
      <FiScissors className="text-indigo-600" />
      PDF Split Tool
    </div>

    <h1 className="
      mt-6
      text-4xl
      md:text-6xl
      font-extrabold
      tracking-tight
      text-gray-900
      leading-tight
    ">
      Split PDF Files
      <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
        Fast, Secure & Free
      </span>
    </h1>

    <p className="
      mt-6
      max-w-3xl
      mx-auto
      text-lg
      leading-8
      text-gray-600
    ">
      Extract specific pages from any PDF directly inside your browser.
      No uploads, no waiting, and no privacy concerns. Your files never
      leave your device.
    </p>

    <div className="
      mt-10
      flex
      flex-wrap
      justify-center
      gap-4
    ">

      <div className="
        flex
        items-center
        gap-2
        rounded-2xl
        bg-white
        px-5
        py-3
        shadow-lg
        border
        border-gray-100
      ">
        <FiShield className="text-indigo-600" />
        <span className="text-sm font-medium text-gray-700">
          100% Secure
        </span>
      </div>

      <div className="
        flex
        items-center
        gap-2
        rounded-2xl
        bg-white
        px-5
        py-3
        shadow-lg
        border
        border-gray-100
      ">
        <FiZap className="text-indigo-600" />
        <span className="text-sm font-medium text-gray-700">
          Instant Processing
        </span>
      </div>

      <div className="
        flex
        items-center
        gap-2
        rounded-2xl
        bg-white
        px-5
        py-3
        shadow-lg
        border
        border-gray-100
      ">
        <FiCheckCircle className="text-indigo-600" />
        <span className="text-sm font-medium text-gray-700">
          No Registration
        </span>
      </div>

    </div>

  </div>

</section>



        <section className="
          grid
          md:grid-cols-2
          gap-8
        ">


          <div
  className="
    group
    relative
    overflow-hidden
    rounded-[32px]
    border
    border-white/70
    bg-white/80
    backdrop-blur-xl
    p-8
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-2xl
  "
>
<div className="flex items-center justify-between mb-8">

  <div className="flex items-center gap-4">

    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-indigo-500
        via-indigo-600
        to-purple-600
        text-white
        shadow-lg
      "
    >
      <FiUploadCloud size={28} />
    </div>

    <div>

      <h2 className="text-2xl font-bold text-gray-900">
        Upload PDF
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Select a PDF file to extract specific pages.
      </p>

    </div>

  </div>

  <span
    className="
      rounded-full
      bg-indigo-50
      px-3
      py-1
      text-xs
      font-semibold
      text-indigo-700
      border
      border-indigo-100
    "
  >
    Secure
  </span>

</div>

            <label
  className="
    group
    relative
    block
    cursor-pointer
    overflow-hidden
    rounded-3xl
    border-2
    border-dashed
    border-indigo-200
    bg-gradient-to-br
    from-indigo-50
    via-white
    to-purple-50
    p-12
    text-center
    transition-all
    duration-300
    hover:border-indigo-500
    hover:shadow-xl
    hover:scale-[1.01]
  "
>

  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  <div className="relative z-10">

    <div
      className="
        mx-auto
        mb-6
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-3xl
        bg-gradient-to-br
        from-indigo-500
        to-purple-600
        text-white
        shadow-xl
      "
    >
      <FiUploadCloud size={38} />
    </div>

    <h3 className="text-xl font-bold text-gray-900">
      Drag & Drop your PDF
    </h3>

    <p className="mt-3 text-gray-600">
      or <span className="font-semibold text-indigo-600">browse your device</span>
    </p>

    <p className="mt-4 text-sm text-gray-500">
      Supports PDF files only
    </p>

  </div>

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
             Soupxor PDF Split Tool helps you extract selected pages
            from PDF files quickly. All processing happens directly
            in your browser, keeping your documents private and secure.
          </p>

        </section>


      </div>

    </main>
  );
}