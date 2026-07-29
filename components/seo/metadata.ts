import type { Metadata } from "next";

interface ToolMetadataProps {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  category?: string;
}

const SITE_NAME = "Soupxor";
const SITE_URL = "https://soupxor.com";
const DEFAULT_OG_IMAGE = "/og-image.png";

export function generateToolMetadata({
  title,
  description,
  keywords,
  slug,
  category = "Utilities",
}: ToolMetadataProps): Metadata {
  const url = `${SITE_URL}/tools/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),

    title,
    description,

    applicationName: SITE_NAME,

    keywords,

    category,

    classification: "Business",

    authors: [
      {
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],

    creator: SITE_NAME,

    publisher: SITE_NAME,

    referrer: "origin-when-cross-origin",

    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
      },
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },

    openGraph: {
      type: "website",
      locale: "en_US",

      url,

      siteName: SITE_NAME,

      title,

      description,

      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [DEFAULT_OG_IMAGE],
    },
  };
}