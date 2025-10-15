"use client";

import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { HeroSection } from "@/components//hero";

export default function ASMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] via-[#eef2ff] to-[#f7f9ff] text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.6]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
            Annual Sports Meet 2025
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Join the grand celebration of athletic excellence, teamwork, and
            sportsmanship at Christ University, BYC.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <HoverBorderGradient className="text-white text-lg font-medium">
              Register Now
            </HoverBorderGradient>
            <HoverBorderGradient className="text-white text-lg font-medium">
              Download Rulebook
            </HoverBorderGradient>
          </div>
        </motion.div>
      </section>

      {/* ===== EVENT DETAILS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Event Overview
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md border border-gray-200 text-center"
          >
            <CalendarDays className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-1">Event Dates</h3>
            <p className="text-gray-600">December 12–14, 2025</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md border border-gray-200 text-center"
          >
            <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-1">Venue</h3>
            <p className="text-gray-600">Main Sports Ground, BYC Campus</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md border border-gray-200 text-center"
          >
            <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-1">Open To</h3>
            <p className="text-gray-600">All Christ University students</p>
          </motion.div>
        </div>

        {/* ===== RULES & CATEGORIES ===== */}
        <div className="space-y-12">
          {/* Individual Events */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
              <Trophy className="w-6 h-6" /> Individual Events
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>100m Sprint (Men & Women)</li>
              <li>Long Jump</li>
              <li>High Jump</li>
              <li>Shot Put</li>
              <li>Table Tennis (Singles)</li>
            </ul>
          </div>

          {/* Team Events */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-700 flex items-center gap-2">
              <Users className="w-6 h-6" /> Team Events
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Football (5-a-side)</li>
              <li>Cricket (Tennis Ball)</li>
              <li>Volleyball</li>
              <li>Basketball</li>
              <li>Relay (4x100m)</li>
            </ul>
          </div>

          {/* General Rules */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-700 flex items-center gap-2">
              General Guidelines
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>All participants must carry their college ID cards.</li>
              <li>Participants must wear appropriate sports attire.</li>
              <li>Team captains should confirm participation 30 minutes before the event.</li>
              <li>Unsportsmanlike conduct will lead to disqualification.</li>
              <li>The referee’s decision will be final.</li>
            </ul>
          </div>
        </div>

        {/* ===== REGISTER SECTION ===== */}
        <div className="text-center mt-20">
          <HoverBorderGradient className="text-lg font-medium text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Go to Registration Portal
            </a>
          </HoverBorderGradient>
        </div>
      </section>
    </div>
  );
}
