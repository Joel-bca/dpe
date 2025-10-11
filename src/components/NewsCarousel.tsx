"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const news = [
  {
    title: "Christ Wins Inter-University Football Championship",
    author: "Department of Physical Education",
    time: "3 min read",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Athletics Meet 2025 – Highlights and Record Breakers",
    author: "Sports Council",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Christ Volleyball Team Qualifies for Nationals",
    author: "DPE Media",
    time: "2 min read",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "BYC Campus Hosts Annual Sports Fest – A Grand Success",
    author: "Christ University",
    time: "4 min read",
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Meet Our Rising Star: National-Level Swimmer Sneha",
    author: "Media Committee",
    time: "3 min read",
    image:
      "https://images.unsplash.com/photo-1505842465776-3d90f616310d?auto=format&fit=crop&w=1600&q=80",
  },
];

export function NewsCarousel() {
  return (
    <section className="relative w-full bg-black text-white py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Latest Highlights
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Catch up on the latest achievements and sports events at Christ BYC
        </p>
      </div>

      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-6xl px-6"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2">
            {news.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/3 lg:basis-1/4 transition-transform duration-700 ease-out"
              >
                <NewsCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-none" />
          <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-none" />
        </Carousel>
      </div>
    </section>
  );
}

function NewsCard({
  title,
  author,
  time,
  image,
}: {
  title: string;
  author: string;
  time: string;
  image: string;
}) {
  return (
    <div className="group relative h-80 w-full overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* Background Image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110",
        )}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* Text content */}
      <div className="absolute bottom-0 p-4 z-10 transition-all duration-500 group-hover:translate-y-0 translate-y-10">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{author}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
}
