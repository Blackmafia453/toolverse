"use client";

import { useState } from "react";
import {
  FaExchangeAlt,
  FaCloudUploadAlt,
  FaFileImage,
  FaDownload,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaImage,
} from "react-icons/fa";

export default function JpgToPng() {
  const [image, setImage] = useState("");
  const [convertedImage, setConvertedImage] = useState("");

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setImage(imageURL);
    setConvertedImage("");

    const img = new Image();

    img.src = imageURL;

    img.onload = () => {
      const canvas = document.createElement("canvas");

      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx?.drawImage(
        img,
        0,
        0
      );

      const pngURL = canvas.toDataURL(
        "image/png"
      );

      setConvertedImage(pngURL);
    };
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-12">

      <div className="mx-auto max-w-6xl">


        {/* Hero */}

        <section className="text-center mb-12">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-5xl shadow-xl">

            <FaExchangeAlt />

          </div>


          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold text-indigo-600">

            <FaBolt />
            Instant Image Conversion

          </div>


          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">

            JPG to PNG Converter

          </h1>


          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">

            Convert JPG images into high quality PNG format instantly.
            Fast, secure and completely free with ToolVerse.

          </p>

        </section>





        {/* Main Converter Card */}

        <section className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-2xl">


          {/* Upload */}

          <div className="rounded-3xl border-2 border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-10 text-center">


            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md text-indigo-600 text-4xl">

              <FaCloudUploadAlt />

            </div>


            <h2 className="mt-5 text-xl font-bold text-gray-900">

              Upload JPG Image

            </h2>


            <p className="mt-2 text-gray-600">

              Select your JPG file and convert it into PNG instantly.

            </p>


            <input

              type="file"

              accept="image/jpeg"

              onChange={handleUpload}

              className="mt-6 block w-full cursor-pointer rounded-xl border bg-white p-3 text-gray-700"

            />


          </div>





          {/* Preview */}

          {image && (

            <div className="mt-10 rounded-3xl border bg-white p-6 shadow-lg">


              <div className="mb-5 flex items-center gap-3">

                <FaImage className="text-indigo-600 text-xl"/>

                <h3 className="font-bold text-gray-900 text-xl">

                  Original JPG Preview

                </h3>

              </div>



              <img

                src={image}

                alt="Uploaded JPG"

                className="mx-auto max-h-[420px] w-full rounded-2xl border object-contain"

              />


            </div>

          )}







          {/* Download */}

          {convertedImage && (

            <div className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-8 text-center">


              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow text-indigo-600 text-3xl">

                <FaCheckCircle />

              </div>


              <h3 className="mt-5 text-2xl font-bold text-gray-900">

                PNG Conversion Complete

              </h3>


              <p className="mt-2 text-gray-600">

                Your converted PNG image is ready.

              </p>



              <a

                href={convertedImage}

                download="converted-image.png"

                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700"

              >

                <FaDownload />

                Download PNG

              </a>


            </div>

          )}



        </section>







        {/* Info Section */}

        <section className="mt-12 grid gap-6 md:grid-cols-3">


          <div className="rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-lg">

            <FaBolt className="text-3xl text-indigo-600"/>

            <h3 className="mt-4 font-bold text-gray-900">

              Fast Conversion

            </h3>

            <p className="mt-2 text-sm text-gray-600">

              Images are converted instantly inside your browser.

            </p>

          </div>



          <div className="rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-lg">

            <FaShieldAlt className="text-3xl text-indigo-600"/>

            <h3 className="mt-4 font-bold text-gray-900">

              Privacy Protected

            </h3>

            <p className="mt-2 text-sm text-gray-600">

              Your images never leave your device.

            </p>

          </div>



          <div className="rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-lg">

            <FaFileImage className="text-3xl text-indigo-600"/>

            <h3 className="mt-4 font-bold text-gray-900">

              High Quality PNG

            </h3>

            <p className="mt-2 text-sm text-gray-600">

              Maintain image quality during conversion.

            </p>

          </div>


        </section>





        <p className="mt-10 text-center text-sm text-gray-500">

          ToolVerse • Free Professional Online Tools

        </p>


      </div>

    </main>
  );
}