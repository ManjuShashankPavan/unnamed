"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Globe, Palette, Sparkles, Megaphone, FileText, LifeBuoy } from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "We build full-stack websites, e-commerce platforms, and web apps that are fast, scalable, and user-friendly.",
    icon: Globe,
  },
  {
    title: "Graphic Designing",
    desc: "Creative and modern designs for web, print, and social media to bring your ideas to life.",
    icon: Palette,
  },
  {
    title: "Logo & Branding Designing",
    desc: "Unique logos and consistent branding solutions that help you stand out and leave a mark.",
    icon: Sparkles,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven strategies for SEO, social media, and paid campaigns to maximize your online presence.",
    icon: Megaphone,
  },
  {
    title: "Content Creation",
    desc: "High-quality blogs, copywriting, and creative content tailored to engage your target audience.",
    icon: FileText,
  },
  {
    title: "Consulting & Supporting",
    desc: "Expert advice and continuous support to help you achieve your digital goals efficiently.",
    icon: LifeBuoy,
  },
];

// ✅ Type-safe variant with custom index support
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as any, // 👈 TS fix while keeping same functionality
      delay: i * 0.1,
    },
  }),
};

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-slate-950 text-slate-200 px-6 md:px-12 lg:px-20 py-16"
    >
      <motion.h1
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-4xl md:text-5xl font-bold text-center mb-8"
      >
        What We Do
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-slate-400 text-center max-w-3xl mx-auto mb-12"
      >
        We provide a complete range of digital services to help businesses establish a strong online presence and achieve growth.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:shadow-lg hover:shadow-indigo-900/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="h-6 w-6 text-indigo-400" />
                <h2 className="text-lg font-semibold">{service.title}</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
