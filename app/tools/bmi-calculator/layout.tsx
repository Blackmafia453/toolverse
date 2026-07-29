import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  bmiCalculatorSEO,
  metadata,
} from "@/components/seo/toolData/bmiCalculatorSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...bmiCalculatorSEO} />
      {children}
    </>
  );
}