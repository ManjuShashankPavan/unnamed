"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center 
                 bg-gradient-to-br from-blue-700 via-[#0f172a] to-cyan-600 
                 text-white px-6 relative overflow-hidden"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl"
      >
        We Build{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Your Ideas Into Products
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl"
      >
        A passionate team of{" "}
        <span className="text-cyan-400 font-semibold">4 developers</span> 👨‍💻👩‍💻  
        helping startups and agencies turn concepts into powerful digital solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg 
                     shadow-lg transition-transform hover:scale-105 hover:bg-cyan-400"
        >
          Our Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg 
                     shadow-lg transition-transform hover:scale-105 hover:bg-cyan-400 hover:text-[#0f172a]"
        >
          Contact Us
        </a>
      </motion.div>

      {/* Decorative glow effect */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}
