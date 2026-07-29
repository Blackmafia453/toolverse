import type { Metadata } from "next";

interface ToolMetadataProps {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
}

export function generateToolMetadata({
  title,
  description,
  keywords,
  slug,
}: ToolMetadataProps): Metadata {

  const url = `https://soupxor.com/tools/${slug}`;

  return {
    title,
    description,

    keywords,

    metadataBase: new URL("https://soupxor.com"),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Soupxor",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}