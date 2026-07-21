import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import PopularTools from "@/components/PopularTools";
import ToolsGrid from "@/components/ToolsGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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