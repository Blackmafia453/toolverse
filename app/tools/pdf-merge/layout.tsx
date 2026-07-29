import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  pdfMergeSEO,
  metadata,
} from "@/components/seo/toolData/pdfMergeSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...pdfMergeSEO} />
      {children}
    </>
  );
}