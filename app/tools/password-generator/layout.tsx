import ToolSEO from "@/components/seo/ToolSEO";
import {
  passwordGeneratorMetadata,
  passwordGeneratorSEO,
} from "@/components/seo/toolData/passwordGeneratorSEO";

export const metadata = passwordGeneratorMetadata;

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToolSEO {...passwordGeneratorSEO} />
      {children}
    </>
  );
}