"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

import QRHero from "./QRHero";
import QRGeneratorCard from "./QRGeneratorCard";
import QRInput from "./QRInput";
import QRPreview from "./QRPreview";
import QRDownload from "./QRDownload";
import QRInfo from "./QRInfo";

export default function QRCodeGeneratorPage() {

  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");


  const generateQR = () => {
    if (!text) return;

    setQrValue(text);
  };


  const downloadQR = () => {

    const canvas = document.getElementById(
      "qr-code"
    ) as HTMLCanvasElement;


    if (!canvas) return;


    const url = canvas.toDataURL("image/png");


    const link = document.createElement("a");

    link.href = url;

    link.download = " Soupxor-qrcode.png";

    link.click();

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

      <div className="max-w-4xl mx-auto">


        <QRHero />


        <QRGeneratorCard>

          <QRInput
            text={text}
            setText={setText}
            generateQR={generateQR}
          />


          <QRPreview
            qrValue={qrValue}
            downloadQR={downloadQR}
          />


          <QRDownload
            qrValue={qrValue}
            downloadQR={downloadQR}
          />


        </QRGeneratorCard>


        <QRInfo />


        {qrValue && (
          <div className="hidden">

            <QRCodeCanvas
              id="qr-code"
              value={qrValue}
              size={220}
            />

          </div>
        )}


      </div>

    </main>

  );
}