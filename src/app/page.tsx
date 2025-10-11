import { NavbarDemo } from "@/components/hero";
import AboutSection from "@/components/aboutsection";
import { NewsCarousel } from "@/components/NewsCarousel";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <NavbarDemo />
      <NewsCarousel />
      <AboutSection />
      <Footer />
    </>
  );
}