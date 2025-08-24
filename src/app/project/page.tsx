"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Health One",
    desc: "A powerful web app built with React & TailwindCSS.",
    img: "/images/HealthOne.jpg",
    github: "https://github.com/pavankumarkkgf/HelathOne",
    demo: "https://healthone-xi.vercel.app/",
  },
  {
    title: "SpeaQAI",
    desc: "An AI-driven solution for real-world challenges.",
    img: "/images/SpeaQ.png",
    github: "https://github.com/pavankumarkkgf/SpeaQAI",
    demo: "#",
  },
  {
    title: "SBK Gold",
    desc: "A mobile-friendly app with smooth animations.",
    img: "/images/Sbk.png",
    github: "https://github.com/GlobalTechSoftwareSolution/SBK-gold-company",
    demo: "https://sbk-gold-company.netlify.app/",
  },
  {
    title: "Digital Marketing",
    desc: "A backend system with Node.js & Express.",
    img: "/images/digi.png",
    // github: "",
    demo: "https://www.instagram.com/globaltechsoftwaresolutions00/?next=%2F",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#0b1220]" 
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-12 
                   bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        🚀 Our Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111827] rounded-2xl shadow-xl overflow-hidden 
                       hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300"
          >
            {/* Image */}
            <motion.img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {p.title}
              </h3>
              <p className="text-gray-400 mb-6">{p.desc}</p>

              {/* Buttons */}
              <div className="flex justify-center space-x-6">
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-5 py-2.5 
                             bg-gray-800 text-white rounded-lg hover:bg-gray-700 
                             shadow-md transition"
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-5 py-2.5 
                             bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
                             rounded-lg hover:from-cyan-400 hover:to-blue-500 
                             shadow-md transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
