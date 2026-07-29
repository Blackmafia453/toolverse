import ToolSEO from "@/components/seo/ToolSEO";
import {
  qrCodeGeneratorMetadata,
  qrCodeGeneratorSEO,
} from "@/components/seo/toolData/qrCodeGeneratorSEO";

export const metadata = qrCodeGeneratorMetadata;

export default function QRCodeGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToolSEO {...qrCodeGeneratorSEO} />
      {children}
    </>
  );
}