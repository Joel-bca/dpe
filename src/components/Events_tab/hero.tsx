"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface HeroData {
  PageName: string;
  Title: string;
  Description: string;
  BgImage: string;
  PrimaryAction: string;
  SecondaryAction: string;
}

export function HeroSection({ page }: { page: string }) {
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => {
        const match = data.find(
          (item: HeroData) => item.PageName.toLowerCase() === page.toLowerCase()
        );
        setHero(match);
      })
      .catch(console.error);
  }, [page]);

  if (!hero)
    return (
      <section className="flex items-center justify-center h-screen text-gray-400">
        Loading hero section...
      </section>
    );

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.55]"
        style={{ backgroundImage: `url(${hero.BgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          {hero.Title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">{hero.Description}</p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {hero.PrimaryAction && (
            <HoverBorderGradient className="text-white text-lg font-medium">
              {hero.PrimaryAction}
            </HoverBorderGradient>
          )}
          {hero.SecondaryAction && (
            <HoverBorderGradient className="text-white text-lg font-medium">
              {hero.SecondaryAction}
            </HoverBorderGradient>
          )}
        </div>
      </motion.div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </section>
  );
}
