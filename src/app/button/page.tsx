"use client"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917996032595?text=Hello%20I%20am%20interested%20in%20your%20services.%20Can%20you%20please%20provide%20me%20more%20details?"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  )
}
