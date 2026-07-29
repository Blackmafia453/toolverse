import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import PopularTools from "@/components/PopularTools";
import ToolsGrid from "@/components/ToolsGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import HomeSchema from "@/components/seo/HomeSchema";

export const metadata: Metadata = {
  title: "Free Online Tools for PDF, Image, Text, Developers & Calculators",
  description:
    "Soupxor offers fast, secure and free online tools including PDF tools, image converters, text utilities, developer tools and calculators. No installation required, privacy-focused and browser-based.",
  alternates: {
    canonical: "https://soupxor.com",
  },
  openGraph: {
    title: "Soupxor – Free Online Tools",
    description:
      "Free online PDF, image, text, developer and calculator tools built for speed, privacy and productivity.",
    url: "https://soupxor.com",
  },
};

export default function Home() {
  return (
    <>
      <HomeSchema />

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <Hero />

        <SearchBar />

        <Categories />

        <PopularTools />

        <ToolsGrid />

        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}