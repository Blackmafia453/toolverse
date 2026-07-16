"use client";

import { useState } from "react";

import ImageHero from "./components/ImageHero";
import ImageUploadCard from "./components/ImageUploadCard";
import ImagePreview from "./components/ImagePreview";
import CompressionSettings from "./components/CompressionSettings";
import CompressionResult from "./components/CompressionResult";
import ImageInfo from "./components/ImageInfo";


export default function ImageCompressor() {

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [quality, setQuality] = useState(70);



  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;


    setImage(file);

    setOriginalSize(file.size);


    const url = URL.createObjectURL(file);

    setPreview(url);

    setCompressedImage("");

  };





  const compressImage = () => {

    if (!image) return;


    const img = new Image();

    img.src = preview;


    img.onload = () => {

      const canvas = document.createElement("canvas");

      const ctx = canvas.getContext("2d");


      let width = img.width;
      let height = img.height;


      const maxWidth = 1400;


      if (width > maxWidth) {

        height = (height * maxWidth) / width;

        width = maxWidth;

      }


      canvas.width = width;

      canvas.height = height;


      ctx?.drawImage(
        img,
        0,
        0,
        width,
        height
      );



      canvas.toBlob(

        (blob) => {

          if (!blob) return;


          const url = URL.createObjectURL(blob);


          setCompressedImage(url);

          setCompressedSize(blob.size);

        },

        "image/jpeg",

        quality / 100

      );

    };

  };





  const formatSize = (size:number) => {

    return (
      (size / 1024).toFixed(2)
      + " KB"
    );

  };





  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      px-5
      py-12
      "
    >

      <div className="max-w-5xl mx-auto">


        <ImageHero />



        <div
          className="
          bg-white/80
          backdrop-blur-xl
          rounded-3xl
          border
          border-gray-100
          shadow-xl
          p-6
          md:p-8
          "
        >


          <ImageUploadCard
            onUpload={handleUpload}
          />



          <ImagePreview
            preview={preview}
            originalSize={originalSize}
            formatSize={formatSize}
          />



          {image && (

            <CompressionSettings

              quality={quality}

              setQuality={setQuality}

              onCompress={compressImage}

            />

          )}



          <CompressionResult

            compressedImage={compressedImage}

            compressedSize={compressedSize}

            formatSize={formatSize}

          />


        </div>



        <ImageInfo />


      </div>

    </main>

  );

}