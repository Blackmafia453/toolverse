import ToolSEO from "@/components/seo/ToolSEO";
import { wordCounterMetadata, wordCounterSEO } from "@/components/seo/toolData/wordCounterSEO";

export const metadata = wordCounterMetadata;

export default function WordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToolSEO {...wordCounterSEO} />
      {children}
    </>
  );
}