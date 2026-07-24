import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bank Statement Converter - Convert PDF Bank Statements to Excel, CSV & JSON | Soupxor",

  description:
    "Convert bank statements from PDF to Excel, CSV, and JSON instantly with Soupxor. Extract transactions, organize financial data, and simplify accounting workflows securely.",

  keywords: [
    "bank statement converter",
    "pdf bank statement converter",
    "convert bank statement to excel",
    "pdf to excel converter",
    "bank statement to csv",
    "bank statement to json",
    "financial data converter",
    "transaction extractor",
    "accounting tools",
    "free bank statement converter",
    "online pdf converter",
    "Soupxor tools",
  ],

  alternates: {
    canonical:
      "https://soupxor.com/tools/bank-statement-converter",
  },

  openGraph: {
    title:
      "Bank Statement Converter - PDF to Excel, CSV & JSON | Soupxor",

    description:
      "Convert PDF bank statements into structured Excel, CSV, and JSON files with Soupxor's secure financial conversion tool.",

    url:
      "https://soupxor.com/tools/bank-statement-converter",

    siteName: "Soupxor",

    type: "website",

    images: [
      {
        url:
          "https://soupxor.com/og-image.png",

        width: 1200,
        height: 630,

        alt:
          "Soupxor Bank Statement Converter",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Bank Statement Converter - PDF to Excel, CSV & JSON | Soupxor",

    description:
      "Convert bank statements into Excel, CSV, and JSON formats quickly with Soupxor's privacy-first converter.",

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