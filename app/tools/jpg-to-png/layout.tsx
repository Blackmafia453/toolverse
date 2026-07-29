import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  jpgToPngSEO,
  metadata,
} from "@/components/seo/toolData/jpgToPngSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...jpgToPngSEO} />
      {children}
    </>
  );
}