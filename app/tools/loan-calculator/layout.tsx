import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  loanCalculatorSEO,
  metadata,
} from "@/components/seo/toolData/loanCalculatorSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...loanCalculatorSEO} />
      {children}
    </>
  );
}