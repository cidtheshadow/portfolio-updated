"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Terminal, Cpu, Trophy, Briefcase } from "lucide-react"
import ResumeModal from "@/components/resume-modal"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    if (elements) {
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  const metrics = [
    {
      icon: <Cpu className="text-[#00f2fe]" size={20} />,
      value: "0.28ms",
      label: "Vector Query Latency",
      description: "Custom SQ8 & ADC search",
    },
    {
      icon: <Terminal className="text-[#b76e79]" size={20} />,
      value: "75%",
      label: "Memory Reduction",
      description: "8-bit quantization pipeline",
    },
    {
      icon: <Trophy className="text-amber-400" size={20} />,
      value: "LeetCode",
      label: "Problem Author",
      description: '"Largest Digit Product"',
    },
    {
      icon: <Briefcase className="text-purple-400" size={20} />,
      value: "Founder & CEO",
      label: "Aetherin SaaS",
      description: "Leading tech & MVP build",
    },
  ]

  return (
    <>
      <section ref={sectionRef} className="pt-32 pb-24 md:pt-40 md:pb-36 relative overflow-hidden bg-gradient-to-b from-[#060913] to-[#0b1120]">
        {/* Background Grid Pattern */}
        <div className="grid-bg animate-grid-move"></div>

        {/* Decorative Blur Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#b76e79]/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00f2fe]/5 blur-3xl animate-pulse-slow"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="space-y-8 lg:col-span-7">
              <div className="fade-in space-y-4" style={{ transitionDelay: "0.1s" }}>
                <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
                  Engineering High-Performance <span className="text-gradient">Systems</span> & <span className="text-gradient-cyan">ML Pipelines</span>.
                </h1>
              </div>

              <div className="fade-in" style={{ transitionDelay: "0.3s" }}>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
                  Computer Science student at SLIET. Founder & CEO of <span className="text-[#b76e79] font-medium">Aetherin</span>. Specializing in systems programming, memory quantization, vector search, and custom React architectures.
                </p>
              </div>

              <div className="fade-in flex flex-wrap gap-4" style={{ transitionDelay: "0.5s" }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#b76e79] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b76e79]/80 transition-all duration-300 hover-glow-rose text-sm"
                >
                  Get in Touch <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg text-sm"
                >
                  Download Resume <Download size={16} />
                </button>
              </div>
            </div>

            <div className="fade-in lg:col-span-5 relative" style={{ transitionDelay: "0.7s" }}>
              <div className="glass-panel rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto p-2 border-white/[0.08] relative group glass-panel-glow">
                <div className="rounded-xl overflow-hidden h-full relative">
                  <Image
                    src="/profile.png"
                    alt="Tanush Singla"
                    width={600}
                    height={800}
                    className="object-cover object-top w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Decorative items */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-[#b76e79]/20 hidden md:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-slate-700/20 hidden md:block"></div>
            </div>
          </div>

          {/* Recruiter Metrics Dashboard */}
          <div className="fade-in grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 md:mt-28" style={{ transitionDelay: "0.9s" }}>
            {metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="glass-panel rounded-xl p-5 border-white/[0.05] hover:border-gradient-hover transition-all duration-300 hover:translate-y-[-4px] group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {metric.icon}
                  </div>
                  <span className="font-poppins font-bold text-2xl text-white tracking-tight">{metric.value}</span>
                </div>
                <p className="text-xs font-semibold text-slate-300 group-hover:text-[#b76e79] transition-colors">{metric.label}</p>
                <p className="text-[11px] text-slate-500 mt-1">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  )
}
