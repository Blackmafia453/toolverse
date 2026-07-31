import type { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import {
  characterCounterSEO,
  characterCounterMetadata,
} from "@/components/seo/toolData/characterCounterSEO";

export const metadata = characterCounterMetadata;

export default function CharacterCounterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ToolSEO
        name={characterCounterSEO.name}
        description={characterCounterSEO.description}
        url={characterCounterSEO.url}
        category={characterCounterSEO.category}
        keywords={characterCounterSEO.keywords}
        features={characterCounterSEO.features}
        faqs={characterCounterSEO.faqs}
        howTo={characterCounterSEO.howTo}
      />

      {children}
    </>
  );
}