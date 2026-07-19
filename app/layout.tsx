import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolVerse - Free Online Tools",
    template: "%s | ToolVerse",
  },

  description:
    "ToolVerse provides fast, free and secure online tools including word counters, PDF tools, image converters, calculators, generators and productivity utilities.",

  keywords: [
    "free online tools",
    "online tools",
    "word counter",
    "password generator",
    "PDF tools",
    "PDF merge",
    "image converter",
    "QR code generator",
    "calculators",
    "productivity tools",
  ],

  metadataBase: new URL(
    "https://soupxor.com"
  ),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "ToolVerse - Free Online Tools",

    description:
      "Fast, secure and free online tools including converters, calculators, PDF utilities and productivity tools.",

    url:
      "https://soupxor.com",

    siteName:
      "ToolVerse",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "ToolVerse - Free Online Tools",

    description:
      "Free online calculators, converters, generators and productivity tools.",
  },

  verification: {
    google:
      "gwgj0QPVav_qdBjoEBY-McpoQN4LajWUXp9D5HBteTA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}

      </body>

    </html>
  );
}