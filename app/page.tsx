import Navbar from "./components/landingpage/Navbar";
import TopSalesSection from "./components/landingpage/topSalesSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-brF">
      <TopSalesSection />
      <Navbar />
    </main>
  );
}
