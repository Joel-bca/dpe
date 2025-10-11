"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "Committee", link: "/committee" },
    { name: "Contact", link: "/#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* ======= NAVBAR ======= */}
      <Navbar className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md border-none z-50">
        <NavBody>
          <NavbarLogo>
            <span className="text-white font-bold text-lg">
              C.L.E.A.R Portal
            </span>
          </NavbarLogo>
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              className:
                "text-gray-200 hover:text-white transition-colors duration-200",
            }))}
          />
          <div className="flex items-center gap-3">
            <NavbarButton
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20"
            >
              Login
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Register
            </NavbarButton>
          </div>
        </NavBody>

        {/* ======= MOBILE NAVBAR ======= */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <span className="text-white font-bold text-lg">
                C.L.E.A.R Portal
              </span>
            </NavbarLogo>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-gray-200 hover:text-white py-2 text-lg"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-6">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full bg-white/10 text-white hover:bg-white/20"
              >
                Register
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* ======= HERO SECTION ======= */}
      <HeroSection />
    </div>
  );
}

// ======= HERO SECTION COMPONENT =======
const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center brightness-[0.55]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Department of Physical Education | BYC
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Empowering athletes, shaping champions, and building a community of
          excellence.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {/* Using your custom HoverBorderGradient button */}
          <HoverBorderGradient className="text-white text-lg font-medium">
            Explore Events
          </HoverBorderGradient>

          <HoverBorderGradient className="text-white text-lg font-medium">
            Join Committee
          </HoverBorderGradient>
        </div>
      </motion.div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </section>
  );
};
