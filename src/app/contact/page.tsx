"use client";
import { useState, useRef, FormEvent, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaPenNib,
  FaBullhorn,
  FaFileAlt,
  FaChartLine,
  FaPaintBrush,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, email, service, message } = formData;
    const yourNumber = "917996032595"; // ✅ your WhatsApp number (with country code)

    const text = `Hello, I want to get in touch.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Service: ${service}%0A
Message: ${message}`;

    const url = `https://wa.me/${yourNumber}?text=${text}`;
    window.open(url, "_blank");

    setPopup({
      show: true,
      message: "✅ Opening WhatsApp...",
      type: "success",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [popup.show]);

  const services = [
    {
      title: "Website Development",
      desc: "We build full-stack websites, e-commerce platforms, and web apps that are fast, scalable, and user-friendly.",
      icon: <FaGlobe className="text-2xl text-indigo-400" />,
    },
    {
      title: "Graphic Designing",
      desc: "Creative and modern designs for web, print, and social media to bring your ideas to life.",
      icon: <FaPaintBrush className="text-2xl text-purple-400" />,
    },
    {
      title: "Logo & Branding Designing",
      desc: "Unique logos and consistent branding solutions that help you stand out and leave a mark.",
      icon: <FaPenNib className="text-2xl text-pink-400" />,
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven strategies for SEO, social media, and paid campaigns to maximize your online presence.",
      icon: <FaBullhorn className="text-2xl text-blue-400" />,
    },
    {
      title: "Content Creation",
      desc: "High-quality blogs, copywriting, and creative content tailored to engage your target audience.",
      icon: <FaFileAlt className="text-2xl text-green-400" />,
    },
    {
      title: "Consulting & Supporting",
      desc: "Expert advice and continuous support to help you achieve your digital goals efficiently.",
      icon: <FaChartLine className="text-2xl text-cyan-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 md:px-20">
      {/* ✅ CONTACT SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE - Contact Info */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-gray-700 hover:shadow-lg hover:shadow-indigo-900/20 transition-all">
          <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-indigo-500 rounded-full mb-6"></div>

          <p className="text-gray-300 mb-10 leading-relaxed">
            Have a question about our services or want to start a project? We'd love to hear from you.
            Fill out the form or contact us directly using the information below.
          </p>

          <div className="space-y-6 text-gray-200">
            <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
              <FaMapMarkerAlt className="text-indigo-400 text-xl mt-1" />
              <div>
                <span className="font-semibold text-white">VISIT US</span>
                <p className="mt-1">Bangalore, Karnataka, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
              <FaPhoneAlt className="text-indigo-400 text-xl mt-1" />
              <div>
                <span className="font-semibold text-white">CALL US</span>
                <p className="mt-1">
                  <a
                    href="tel:+917996032595"
                    className="text-white hover:text-indigo-300 transition-colors"
                  >
                    +91-7996032595
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
              <FaEnvelope className="text-indigo-400 text-xl mt-1" />
              <div>
                <span className="font-semibold text-white">EMAIL US</span>
                <p className="mt-1">
                  <a
                    href="mailto:nirvixa@gmail.com"
                    className="text-white hover:text-indigo-300 transition-colors"
                  >
                    nirvixa@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />

          <div>
            <h3 className="font-semibold text-white mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.instagram.com/nirvixa2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-pink-500 transition-colors"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/people/Nirvixa/61579641066740/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-gray-700 hover:shadow-lg hover:shadow-indigo-900/20 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <FaWhatsapp className="text-2xl text-green-400" />
            <h2 className="text-3xl font-bold text-white">
              Message us on WhatsApp
            </h2>
          </div>
          <p className="text-gray-400 mb-8">We'll respond as quickly as possible</p>

          <form ref={form} onSubmit={sendToWhatsApp} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none"
              >
                <option value="">Select a Service *</option>
                {services.map((service, i) => (
                  <option key={i} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message *"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold shadow-md bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {popup.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-xl text-white font-medium transition-opacity duration-500 flex items-center gap-2 ${
            popup.type === "success"
              ? "bg-green-600"
              : "bg-gradient-to-r from-red-400 to-red-600"
          }`}
        >
          {popup.type === "success" ? (
            <FaWhatsapp className="text-lg" />
          ) : null}
          {popup.message}
        </div>
      )}
    </div>
  );
}