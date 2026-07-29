import { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  colorPickerSEO,
  metadata,
} from "@/components/seo/toolData/colorPickerSEO";

export { metadata };

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO {...colorPickerSEO} />
      {children}
    </>
  );
}