"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Mail, Linkedin, Github, Instagram, Send, Copy, Check } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("iamtanushsingla@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-reveal")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("revealed")
              }, 120 * index)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-[#060913] relative overflow-hidden">
      <div className="grid-bg opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs font-semibold text-[#b76e79] uppercase tracking-wider bg-[#b76e79]/10 px-3 py-1 rounded-full mb-4 inline-block">
            Get in Touch
          </span>
          <h2 className="scroll-reveal font-poppins font-bold text-3xl md:text-5xl text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="scroll-reveal max-w-2xl mx-auto text-slate-400">
            Have a project in mind, looking to hire, or want to collaborate? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="scroll-reveal order-2 lg:order-1">
            <div className="glass-panel border-white/[0.05] rounded-2xl p-6 md:p-8 hover:border-white/[0.08] transition-all duration-300">
              <h3 className="font-poppins font-bold text-white text-xl mb-6">Send a Message</h3>

              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/25 text-green-400 rounded-lg p-4 mb-6 text-sm">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:border-[#b76e79] focus:ring-1 focus:ring-[#b76e79] outline-none transition-all placeholder:text-slate-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:border-[#b76e79] focus:ring-1 focus:ring-[#b76e79] outline-none transition-all placeholder:text-slate-600"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:border-[#b76e79] focus:ring-1 focus:ring-[#b76e79] outline-none transition-all resize-none placeholder:text-slate-600"
                      placeholder="What's on your mind?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#b76e79] hover:bg-[#b76e79]/85 text-white w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-70 hover-glow-rose"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Let's Build Together <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="scroll-reveal order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-bold text-white text-2xl mb-4">Contact Information</h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                  Looking to fill a software engineering or ML role? Feel free to copy my email directly or drop a message. I usually respond within a few business hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="bg-[#b76e79]/10 border border-[#b76e79]/20 p-3.5 rounded-full text-[#b76e79] group-hover:bg-[#b76e79]/20 transition-all duration-300 shadow-[0_0_15px_rgba(183,110,121,0.1)] group-hover:shadow-[0_0_20px_rgba(183,110,121,0.25)]">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider">Email Address</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href="mailto:iamtanushsingla@gmail.com"
                        className="text-white hover:text-[#b76e79] transition-colors text-sm font-semibold"
                      >
                        iamtanushsingla@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300 no-print"
                        title="Copy email"
                      >
                        {copiedEmail ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-[#00f2fe]/10 border border-[#00f2fe]/20 p-3.5 rounded-full text-[#00f2fe] group-hover:bg-[#00f2fe]/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.1)] group-hover:shadow-[0_0_20px_rgba(0,242,254,0.25)]">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider">LinkedIn</h4>
                    <Link
                      href="https://www.linkedin.com/in/tanush-singla-330a27281/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00f2fe] transition-colors text-sm font-semibold mt-1 block"
                    >
                      linkedin.com/in/tanushsingla
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-purple-500/10 border border-purple-500/20 p-3.5 rounded-full text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider">GitHub</h4>
                    <Link
                      href="https://github.com/cidtheshadow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors text-sm font-semibold mt-1 block"
                    >
                      github.com/cidtheshadow
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-full text-amber-400 group-hover:bg-amber-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider">Instagram</h4>
                    <Link
                      href="https://instagram.com/singla_tanush"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-400 transition-colors text-sm font-semibold mt-1 block"
                    >
                      @singla_tanush
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
