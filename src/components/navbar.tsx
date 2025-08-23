"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(false);

  // ✅ Dark mode toggle (optional)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-md 
                 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md
                 border-b border-gray-200 dark:border-gray-700
                 text-gray-900 dark:text-white"
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* ✅ Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setActive("home")}
        >
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-[#0284c7]"
          />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            IBP
          </span>
        </motion.a>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              onClick={() => setActive(link.href.replace("#", ""))}
              whileHover={{ scale: 1.05 }}
              className={`relative transition-colors duration-300 ${
                active === link.href.replace("#", "")
                  ? "text-blue-600 dark:text-cyan-400 font-bold"
                  : "hover:text-blue-500 dark:hover:text-cyan-300"
              }`}
            >
              {link.name}
              {active === link.href.replace("#", "") && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer">
          {isOpen ? (
            <FiX onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* ✅ Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col space-y-6 py-6 px-8 
                       bg-white dark:bg-[#0f172a] 
                       text-gray-900 dark:text-white 
                       border-t border-gray-200 dark:border-gray-700"
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => {
                  setActive(link.href.replace("#", ""));
                  setIsOpen(false);
                }}
                className={`text-lg transition-colors duration-300 ${
                  active === link.href.replace("#", "")
                    ? "text-blue-600 dark:text-cyan-400 font-bold"
                    : "hover:text-blue-500 dark:hover:text-cyan-300"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
