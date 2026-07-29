import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  pdfSplitSEO,
  metadata,
} from "@/components/seo/toolData/pdfSplitSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...pdfSplitSEO} />
      {children}
    </>
  );
}