"use client"
import { useState, useEffect } from "react"

const links = [
  { label: "Home", href: "#" },
  { label: "Elder Safety", href: "#elder-safety" },
  { label: "Water Protection", href: "#water" },
  { label: "GuardianHub", href: "#guardianhub" },
  { label: "Remote Support", href: "#remote-support" },
  { label: "Pricing", href: "#packages" },
  { label: "Contact", href: "#contact" },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-gray-950/95 backdrop-blur shadow-lg border-b border-gray-800" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Logo */}
        <a href="#" className="font-bold text-white text-lg tracking-tight flex items-center gap-2">
          <span className="text-blue-400">⚡</span> Get Notified LLC
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7042397532"
            className="ml-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-1.5 rounded-lg transition-colors"
          >
            📞 Call Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-3 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7042397532"
            className="mt-2 bg-blue-600 text-white text-sm font-bold py-2 px-3 rounded-lg text-center"
          >
            📞 704-239-7532
          </a>
        </div>
      )}
    </nav>
  )
}
