import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  jsonFormatterSEO,
  metadata,
} from "@/components/seo/toolData/jsonFormatterSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...jsonFormatterSEO} />
      {children}
    </>
  );
}