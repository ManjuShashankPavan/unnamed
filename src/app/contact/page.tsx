"use client";
import { useState, useRef, FormEvent, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
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
    const yourNumber = "917996032595";

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

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE - Contact Info */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white hover:shadow-lg hover:shadow-indigo-900/20 transition-all">
          <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white rounded-full mb-6"></div>

          <p className="text-gray-300 mb-10 leading-relaxed">
            Have a question about our services or want to start a project? We’d
            love to hear from you.
          </p>

          <div className="space-y-6 text-gray-200">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-white text-2xl mt-1" />
              <p>
                <span className="font-semibold">VISIT US</span>
                <br />
                Bangalore, Karnataka, India
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-white text-2xl mt-1" />
              <p>
                <span className="font-semibold">CALL US</span>
                <br />
                +91-7996032595
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-white text-2xl mt-1" />
              <p>
                <span className="font-semibold">EMAIL US</span>
                <br />
                devlora.devteam@gmail.com
              </p>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />

          <div>
            <h3 className="font-semibold text-gray-200 mb-3">FOLLOW US</h3>
            <div className="flex space-x-6 text-2xl text-gray-400">
              <a
                href="https://www.instagram.com/ideasbecomeproducts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              </a>

              <a
                href="https://www.facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white hover:shadow-lg hover:shadow-indigo-900/20 transition-all">
          <h2 className="text-3xl font-bold text-white mb-2">
            Drop us a line or two
          </h2>
          <p className="text-gray-400 mb-8">We’d love to hear from you</p>

          <form ref={form} onSubmit={sendToWhatsApp} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-white text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-white text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />

            <textarea
              name="message"
              placeholder="Your message *"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-white text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold shadow-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {popup.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-xl text-white font-medium transition-opacity duration-500 ${
            popup.type === "success"
              ? "bg-green-600"
              : "bg-gradient-to-r from-red-400 to-red-600"
          }`}
        >
          {popup.message}
        </div>
      )}
    </div>
  );
}
