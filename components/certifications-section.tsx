"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const certifications = [
  {
    id: 1,
    name: "CS50 by Harvard",
    logo: "https://i.im.ge/2025/05/15/v8j7XX.4.png",
    description: "Algorithmic thinking, data structures, memory management, and system logic.",
    url: "https://certificates.cs50.io/4712d3cd-eb8a-466f-a3dd-3a8ac17a5c12.pdf?size=letter",
  },
  {
    id: 2,
    name: "AWS Certified AI Practitioner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description: "Constructing and monitoring AI/ML cloud resources, prompt engineering, and safety.",
    url: "https://aws.amazon.com/certification/",
  },
  {
    id: 3,
    name: "Google AI Essentials",
    logo: "https://i.im.ge/2025/05/15/v8jIbh.2.png",
    description: "Generative AI usage, prompt design, and data task optimization tools.",
    url: "https://www.coursera.org/account/accomplishments/specialization/4XCLZE5O6RDG",
  },
  {
    id: 4,
    name: "Google Prompting Essentials",
    logo: "https://i.im.ge/2025/05/15/v8jIbh.2.png",
    description: "Advanced prompt engineering and AI communication strategies.",
    url: "https://www.credly.com/badges/02124061-360e-4f0a-8abd-cf934337c7a5/linked_in_profile",
  },
  {
    id: 5,
    name: "Google Cybersecurity Professional",
    logo: "https://i.im.ge/2025/05/15/v8jIbh.2.png",
    description: "Intrusion analysis, network protection protocols, and Linux system security audits.",
    url: "https://www.coursera.org/account/accomplishments/verify/7PTDEZETCQ22?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    id: 6,
    name: "Python for Data Science by IBM",
    logo: "https://i.im.ge/2025/05/15/v8jDh8.3.png",
    description: "Advanced Python data manipulation, API calls, and numerical operations.",
    url: "https://www.credly.com/badges/f6f29993-c690-4bb4-be32-e874969a482a/linked_in_profile",
  },
  {
    id: 7,
    name: "LeetCode Problem Author",
    logo: "https://i.im.ge/2025/05/15/v8jhaY.6.png",
    description: "Designed algorithmic challenge 'Largest Digit Product' accepted into official bank.",
    url: "https://leetcode.com/u/cidtheshadow/",
  },
]

export default function CertificationsSection() {
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
    <section id="certifications" ref={sectionRef} className="section-padding bg-[#0b1120] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal font-poppins font-bold text-3xl md:text-4xl text-gradient mb-4">
            Certifications
          </h2>
          <p className="scroll-reveal max-w-2xl mx-auto text-slate-400">
            Verifiable industry credentials and algorithmic milestones validating continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Link key={cert.id} href={cert.url} target="_blank" rel="noopener noreferrer" className="group">
              <div
                className="scroll-reveal glass-panel rounded-xl p-6 border-white/[0.05] flex items-center gap-4 hover:bg-[#0f1626]/60 hover:border-[#b76e79]/30 transition-colors duration-300 h-36"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-white/5 p-2.5 group-hover:bg-[#b76e79]/10 transition-colors flex items-center justify-center border border-white/[0.05]">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={50}
                    height={50}
                    className="object-contain max-w-full max-h-full filter brightness-95 contrast-125"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-poppins font-bold text-white text-base group-hover:text-[#b76e79] transition-colors truncate">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 leading-normal line-clamp-2">{cert.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
