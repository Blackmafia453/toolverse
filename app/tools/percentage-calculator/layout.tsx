import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  percentageCalculatorSEO,
  metadata,
} from "@/components/seo/toolData/percentageCalculatorSEO";

export { metadata };

export default function PercentageCalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...percentageCalculatorSEO} />
      {children}
    </>
  );
}