"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  metric: string
  tags: string[]
  github: string
  demoUrl: string
}

const projects: Project[] = [
  {
    id: "vector-search",
    title: "Quantized Vector Search Engine",
    description:
      "An 8-bit Scalar Quantization pipeline in Python that compresses float32 embeddings while maintaining semantic fidelity. Uses Asymmetric Dot Product search directly on compressed matrices with zero decompression overhead.",
    metric: "75% memory reduction · 0.28ms query latency · 100% Recall@10",
    tags: ["Python", "NumPy", "Vector Search", "Quantization"],
    github: "https://github.com/cidtheshadow",
    demoUrl: "",
  },
  {
    id: "ml-stock",
    title: "ML Stock Prediction Framework",
    description:
      "End-to-end training and backtesting pipeline ingesting live market feeds. Benchmarks Linear Regression, Random Forest, and LSTM architectures with custom feature engineering and optimized memory allocations.",
    metric: "<15ms inference · ~40% faster pipeline after OOP refactor",
    tags: ["Python", "Scikit-Learn", "LSTM", "Pandas", "Flask"],
    github: "https://github.com/cidtheshadow",
    demoUrl: "",
  },
  {
    id: "madhuram-fest",
    title: "Madhuram Fest Website",
    description:
      "Official web app for SLIET's cultural festival. Built with performance-first architecture — lazy-loaded assets, compressed images, and modular components designed for reuse across future editions.",
    metric: "1,000+ concurrent users at peak · ~30% smaller page assets",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/cidtheshadow/To-Do",
    demoUrl: "https://madhuramfest.in",
  },
  {
    id: "blind-stick",
    title: "Assistive Blind Stick",
    description:
      "Arduino-based device for visually impaired users, using ultrasonic sensor arrays for real-time obstacle detection. Custom interrupt routines deliver immediate haptic feedback with minimal false positives.",
    metric: "Sub-100ms detection-to-feedback · field-tested with 5+ volunteers",
    tags: ["Arduino", "C++", "Sensors", "Embedded Systems"],
    github: "https://github.com/cidtheshadow/To-Do",
    demoUrl:
      "https://www.youtube.com/watch?si=f0dBkMt0Dhxp6p4F&v=ZjIT247-v8s&feature=youtu.be",
  },
]

export default function ProjectsSection() {
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
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-[#060913] relative"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="scroll-reveal font-poppins font-semibold text-3xl md:text-4xl text-white mb-3">
            Projects
          </h2>
          <p className="scroll-reveal text-slate-400 max-w-lg text-base">
            A few things I&rsquo;ve built — from low-level systems work to
            full-stack web apps.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="scroll-reveal rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-0.5"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                <p className="text-sm text-slate-500 italic mb-5">
                  {project.metric}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] no-print">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs transition-colors duration-200"
                  >
                    <Github size={14} />
                    Source
                  </Link>
                )}
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
