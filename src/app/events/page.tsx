"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/events_tab/hero";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  return (  
    <HeroSection />
        
  );
}
