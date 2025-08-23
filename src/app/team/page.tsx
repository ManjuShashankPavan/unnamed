"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const members = [
  {
    name: "Manjunath P",
    role: "Full Stack Developer",
    img: "/images/manja.jpeg",
    linkedin: "https://www.linkedin.com/in/manjunath-gowda-1741982a6",
    github: "https://github.com/manjunath1004",
  },
  {
    name: "N S Shashank",
    role: "Backend Developer",
    img: "/images/Shashank.jpeg",
    linkedin: "https://www.linkedin.com/in/n-s-shashank-582264349/",
    github: "https://github.com/ns-shashank",
  },
  {
    name: "Pavan Kumar K",
    role: "Frontend Developer",
    img: "/images/pavan.jpeg",
    linkedin: "https://www.linkedin.com/in/pavan-kumar-k-42922b35a/",
    github: "https://github.com/pavankumarkkgf",
  },
  {
    name: "Mahesh Y",
    role: "Frontend Developer",
    img: "/images/mahesh.jpeg",
    linkedin: "https://www.linkedin.com/in/maheshyash",
    github: "https://github.com/Maheshyash131",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 px-8 bg-[#0b1220]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-12 text-white"
      >
        Meet Our Team 👨‍💻
      </motion.h2>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-6xl mx-auto">
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-200 hover:border-white hover:shadow-xl transition-all duration-300"
          >
            {/* Profile Image */}
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              src={m.img}
              alt={m.name}
              className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-white shadow-md object-cover"
            />

            {/* Name & Role */}
            <h3 className="text-xl font-bold text-white">{m.name}</h3>
            <p className="text-white">{m.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-4 text-2xl">
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href={m.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black transition-transform hover:scale-125"
              >
                <FaGithub />
              </a>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 opacity-0 hover:opacity-10 transition duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
