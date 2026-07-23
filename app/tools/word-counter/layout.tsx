import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Counter - Count Words, Characters & Reading Time | Soupxor",
  description:
    "Use Soupxor's free Word Counter tool to instantly count words, characters, sentences, paragraphs, and reading time. Fast, accurate, and privacy-friendly browser-based tool.",
  keywords: [
    "word counter",
    "online word counter",
    "character counter",
    "count words online",
    "sentence counter",
    "paragraph counter",
    "reading time calculator",
    "free writing tools",
    "Soupxor",
  ],
  alternates: {
    canonical: "https://soupxor.com/tools/word-counter",
  },
  openGraph: {
    title: "Word Counter - Free Online Text Analysis Tool | Soupxor",
    description:
      "Count words, characters, sentences, paragraphs and reading time instantly with Soupxor Word Counter.",
    url: "https://soupxor.com/tools/word-counter",
    siteName: "Soupxor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter - Free Online Tool | Soupxor",
    description:
      "Analyze your text instantly with Soupxor Word Counter. Fast, private and accurate.",
  },
};

export default function WordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Soupxor Word Counter",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            description:
              "Free online word counter tool that counts words, characters, sentences, paragraphs and reading time.",
            url: "https://soupxor.com/tools/word-counter",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  );
}