import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrowseSections from "../components/BrowseSections";
import Footer from "../components/Footer";
import HandpickedCollections from "../components/HandpickedCollection";
import BoxAboutUs from "../components/BoxAboutUs";

function Homepage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <BrowseSections />
        <BoxAboutUs />
        <HandpickedCollections />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
