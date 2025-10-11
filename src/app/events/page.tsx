"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/department.jpg')", // Replace with your image later
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4">
            Events & Highlights
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore all the major sports and physical education events conducted by the
            Department of Physical Education | BYC.
          </p>
        </motion.div>
      </section>

      {/* EVENTS SECTION */}
      <section className="min-h-screen py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16">Our Events</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.length > 0 ? (
            events.map((event, index) => (
              <motion.div
                key={event.event_id || index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-800/30 to-gray-900/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                {/* Event Image */}
                <div
                  className="h-64 w-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${event.image || "/department.jpg"})`,
                  }}
                ></div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {event.title || "Untitled Event"}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {event.description || "No description available."}
                  </p>
                  {event.link && (
                    <Link href={event.link}>
                      <button className="rounded-full border border-white/50 px-6 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20 transition-all">
                        Learn More
                      </button>
                    </Link>
                  )}
                </div>

                {/* Static Info */}
                <div className="p-4">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    {event.date || "Date TBA"}
                  </p>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              Loading events or no events found yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
