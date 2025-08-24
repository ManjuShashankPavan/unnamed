"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] dark:bg-[#0f172a] text-white py-12 mt-0 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center md:text-left relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About + Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer mb-3"
            >
              {/* ✅ Fixed Logo (Bigger & Properly Aligned) */}
              <img
                src="/images/logo.png"
                alt="Nirvix Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Nirvixa
              </span>
            </motion.a>

            {/* Tagline */}
            <p className="text-gray-400 italic text-sm mb-4 ml-14 mt-2">
              “Where ideas turn into reality.”
            </p>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              We help startups and agencies turn concepts into powerful digital
              solutions with modern design and scalable technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Team", "Projects", "Contact"].map((link, i) => (
                <li key={i}>
                  <motion.a
                    whileHover={{ x: 6 }}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/nirvixa"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://www.linkedin.com/company/nirvixa/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:nirvixa@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400"
        >
          <p>
            © {year}{" "}
            <span className="font-semibold text-cyan-400">Nirvixa</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
