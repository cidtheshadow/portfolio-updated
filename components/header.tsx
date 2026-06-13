"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ResumeModal from "@/components/resume-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#060913]/85 backdrop-blur-md border-b border-white/[0.05] py-3 shadow-xl" : "bg-transparent py-5"
        } no-print`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-poppins font-bold text-xl md:text-2xl text-white hover:text-slate-300 transition-colors duration-200"
          >
            Tanush.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Projects", "About", "Certifications", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="border border-white/15 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/25 transition-colors duration-200"
            >
              Resume
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-slate-300 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#060913]/95 backdrop-blur-xl border-b border-white/[0.05] py-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              {["Projects", "About", "Certifications", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setResumeModalOpen(true)
                }}
                className="border border-white/15 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/25 transition-colors duration-200 text-center"
              >
                Resume
              </button>
            </nav>
          </div>
        )}
      </header>

      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  )
}
