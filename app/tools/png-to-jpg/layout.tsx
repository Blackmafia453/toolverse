import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  pngToJpgSEO,
  metadata,
} from "@/components/seo/toolData/pngToJpgSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...pngToJpgSEO} />
      {children}
    </>
  );
}