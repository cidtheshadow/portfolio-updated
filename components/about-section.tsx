"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Code2, Cpu, Wrench, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("Languages")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-reveal")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("revealed")
              }, 100 * index)
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

  const skills = {
    Languages: [
      { name: "C++", level: "Expert", desc: "Low-level system architecture" },
      { name: "Python", level: "Advanced", desc: "Machine learning pipelines" },
      { name: "JavaScript", level: "Advanced", desc: "Frontend & Backend" },
      { name: "TypeScript", level: "Intermediate", desc: "Type-safe interfaces" },
      { name: "SQL", level: "Intermediate", desc: "Database querying" },
      { name: "HTML/CSS", level: "Advanced", desc: "UI development" },
    ],
    Libraries: [
      { name: "NumPy", level: "Expert", desc: "Matrix operations" },
      { name: "Pandas", level: "Advanced", desc: "Data processing" },
      { name: "Scikit-learn", level: "Advanced", desc: "ML Models" },
      { name: "sentence-transformers", level: "Intermediate", desc: "Embeddings" },
      { name: "React / Next.js", level: "Advanced", desc: "Web applications" },
      { name: "Flask", level: "Intermediate", desc: "RESTful APIs" },
    ],
    Tools: [
      { name: "AWS", level: "Intermediate", desc: "Cloud deployment" },
      { name: "Git / GitHub", level: "Advanced", desc: "Version control" },
      { name: "Linux", level: "Advanced", desc: "Server administration" },
      { name: "Figma", level: "Intermediate", desc: "UI/UX design" },
      { name: "Vercel", level: "Advanced", desc: "Continuous deployment" },
    ],
    Concepts: [
      { name: "DSA", level: "Expert", desc: "Optimized problem solving" },
      { name: "Vector Search", level: "Advanced", desc: "Similarity matching" },
      { name: "Quantization", level: "Advanced", desc: "Memory reduction" },
      { name: "Memory Management", level: "Advanced", desc: "Performance" },
      { name: "OOP", level: "Advanced", desc: "Software architecture" },
    ],
  }

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "Languages":
        return <Code2 size={16} />
      case "Libraries":
        return <Cpu size={16} />
      case "Tools":
        return <Wrench size={16} />
      case "Concepts":
        return <ShieldCheck size={16} />
      default:
        return <Code2 size={16} />
    }
  }

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-deep-card relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#00f2fe] blur-[120px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="scroll-reveal text-xs font-semibold text-[#b76e79] uppercase tracking-wider bg-[#b76e79]/10 px-3 py-1 rounded-full mb-3">
            Core Competencies
          </span>
          <h2 className="scroll-reveal font-poppins font-bold text-3xl md:text-5xl text-white mb-4">
            About & <span className="text-gradient-cyan">Proficiencies</span>
          </h2>
          <p className="scroll-reveal text-slate-400 text-center max-w-2xl text-base md:text-lg">
            Engineering robust systems from low-level memory management to high-throughput cloud applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="scroll-reveal lg:col-span-5 space-y-10">
            <div className="glass-panel p-2 rounded-2xl border-white/[0.08] relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b76e79]/20 to-[#00f2fe]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                  alt="Coding environment"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full opacity-80 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1626] via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-[#00f2fe]" size={24} />
                <h3 className="font-poppins font-bold text-white text-xl">Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-white/10 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#00f2fe] border-4 border-[#0f1626]"></div>
                  <h4 className="font-poppins font-bold text-white text-lg">B.E. in Computer Science</h4>
                  <p className="text-slate-400 text-sm mt-1">Sant Longowal Institute of Engineering & Tech</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-[#00f2fe] bg-[#00f2fe]/10 px-2 py-1 rounded">Expected 2029</span>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-600 border-4 border-[#0f1626]"></div>
                  <h4 className="font-poppins font-bold text-white text-lg">Diploma in Computer Science</h4>
                  <p className="text-slate-400 text-sm mt-1">Sant Longowal Institute of Engineering & Tech</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-slate-300 bg-white/10 px-2 py-1 rounded mr-2">2023 - 2026</span>
                  <span className="inline-block mt-2 text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded">SGPA: 8.64</span>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/[0.08] h-full">
              <h3 className="font-poppins font-bold text-white text-xl mb-6">Technical Arsenal</h3>
              
              <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-white/10">
                {Object.keys(skills).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-[#b76e79]/20 to-[#b76e79]/5 border border-[#b76e79]/50 text-white shadow-[0_0_15px_rgba(183,110,121,0.2)]"
                        : "bg-transparent border border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {getTabIcon(tab)}
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills[activeTab as keyof typeof skills].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 hover:border-[#00f2fe]/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white text-base group-hover:text-[#00f2fe] transition-colors flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#00f2fe] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {skill.name}
                      </h4>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        skill.level === "Expert" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                        skill.level === "Advanced" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                        "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 bg-white/[0.03] p-2 rounded border border-white/[0.02]">
                      <span className="text-[#b76e79] font-semibold">Impact •</span> {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
