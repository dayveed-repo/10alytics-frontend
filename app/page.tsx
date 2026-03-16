import Conversion from "./components/landingpage/Conversion";
import HeroSection from "./components/landingpage/HeroSection";
import Navbar from "./components/landingpage/Navbar";
import TopSalesSection from "./components/landingpage/topSalesSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-brF">
      <TopSalesSection />
      <Navbar />
      <HeroSection />
      <Conversion />
    </main>
  );
}
