import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bank Statement Converter - Convert PDF Bank Statements to Excel | Soupxor",

  description:
    "Convert bank statements into clean Excel spreadsheets with Soupxor's free Bank Statement Converter. Easily organize transactions, expenses, deposits and financial records.",

  keywords: [
    "bank statement converter",
    "bank statement to excel",
    "PDF bank statement converter",
    "convert bank statement to excel",
    "financial statement converter",
    "CSV bank statement converter",
    "online bank converter",
  ],

  alternates: {
    canonical:
      "https://soupxor.com/tools/bank-statement-converter",
  },

  openGraph: {
    title:
      "Bank Statement Converter - Convert Bank Statements to Excel | Soupxor",

    description:
      "Transform PDF and CSV bank statements into organized Excel files with Soupxor's secure online converter.",

    url:
      "https://soupxor.com/tools/bank-statement-converter",

    siteName: "Soupxor",

    type: "website",

    images: [
      {
        url: "https://soupxor.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soupxor Bank Statement Converter",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Bank Statement Converter - Soupxor",

    description:
      "Convert bank statements into Excel spreadsheets quickly with Soupxor.",

    images: [
      "https://soupxor.com/og-image.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BankStatementConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}