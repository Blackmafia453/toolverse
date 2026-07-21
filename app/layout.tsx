import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://soupxor.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Soupxor",

  title: {
    default: "Soupxor – Free Online Tools for PDF, Image, Text, SEO & Developers",
    template: "%s | Soupxor",
  },

  description:
    "Soupxor is a premium collection of fast, secure and completely free online tools for PDF, image conversion, text utilities, developer tools, calculators and productivity. No installation, privacy-first, mobile friendly and optimized for speed.",

  keywords: [
    "Soupxor",
    "free online tools",
    "online tools",
    "pdf tools",
    "image tools",
    "text tools",
    "developer tools",
    "seo tools",
    "word counter",
    "character counter",
    "password generator",
    "json formatter",
    "color picker",
    "qr code generator",
    "pdf merge",
    "pdf split",
    "image compressor",
    "jpg to png",
    "png to jpg",
    "age calculator",
    "percentage calculator",
    "loan calculator",
    "bmi calculator",
    "fast online tools",
    "privacy focused tools",
    "browser based tools",
    "free productivity tools",
    "web utilities",
    "developer utilities",
    "online converter",
    "online calculator",
    "free pdf editor",
    "image converter",
    "secure online utilities"
  ],

  authors: [
    {
      name: "Soupxor",
      url: siteUrl,
    },
  ],

  creator: "Soupxor",

  publisher: "Soupxor",

  category: "Technology",

  classification: "Business",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Soupxor",

    title:
      "Soupxor – Free Online Tools for PDF, Image, Text, SEO & Developers",

    description:
      "Premium free online tools built for speed, privacy and productivity. PDF tools, image converters, calculators, developer utilities and much more.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soupxor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Soupxor – Free Online Tools for PDF, Image, Text, SEO & Developers",

    description:
      "Fast, secure and privacy-friendly online tools for everyone.",

    images: ["/og-image.png"],
  },

  appleWebApp: {
    capable: true,
    title: "Soupxor",
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#4F46E5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}