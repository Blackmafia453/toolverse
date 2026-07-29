import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  imageCompressorSEO,
  metadata,
} from "@/components/seo/toolData/imageCompressorSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...imageCompressorSEO} />
      {children}
    </>
  );
}