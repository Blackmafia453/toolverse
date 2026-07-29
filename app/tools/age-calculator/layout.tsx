import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  ageCalculatorSEO,
  metadata,
} from "@/components/seo/toolData/ageCalculatorSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...ageCalculatorSEO} />
      {children}
    </>
  );
}