import type { ReactNode } from "react";
import ToolSEO from "@/components/seo/ToolSEO";
import { characterCounterSEO } from "@/components/seo/toolData/characterCounterSEO";

export const metadata = {
  title: "Free Character Counter Tool - Count Characters Online",
  description:
    "Use Soupxor's free Character Counter to instantly count characters, words, and sentences online.",
};

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