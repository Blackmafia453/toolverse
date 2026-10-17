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


      // Preserve original image dimensions
      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;


      canvas.width = width;

      canvas.height = height;


      if (ctx) {
        // Fill white background for clean rendering with transparent images
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, width, height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);
      }



      // Map slider quality (20-100) to browser canvas JPEG encoder quality:
      // - Values 20-90 map directly to 0.20-0.90, preserving existing behavior and compression.
      // - Values 90-100 scale smoothly from 0.90 to 0.92.
      // In browser canvas (Skia/libjpeg), passing 1.0 (100%) disables quantization tables (sets to all 1s)
      // and disables chroma subsampling (switches to 4:4:4), causing the file size to explode (3x-5x).
      // Capping encoder quality at 0.92 preserves maximum perceptual quality while preventing the file bloat.
      const encoderQuality =
        quality <= 90
          ? quality / 100
          : 0.90 + ((quality - 90) / 10) * 0.02;


      canvas.toBlob(

        (blob) => {

          if (!blob) return;


          const url = URL.createObjectURL(blob);


          setCompressedImage(url);

          setCompressedSize(blob.size);

        },

        "image/jpeg",

        encoderQuality

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