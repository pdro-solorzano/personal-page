import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { PortfolioSection } from "../components/PortfolioSection";

function MainLayout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export { MainLayout };
