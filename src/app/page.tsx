import { Nav } from "@/components/navgation";
import { HeroSection } from "@/components/hero";
import AboutSection from "@/components/aboutsection";
import { NewsCarousel } from "@/components/NewsCarousel";

export default function HomePage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <NewsCarousel />
      <AboutSection />
    </>
  );
}