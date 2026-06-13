"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function AgencySection() {
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
              }, 150 * index)
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
    <section ref={sectionRef} className="section-padding bg-[#090d16] text-slate-100 relative overflow-hidden border-t border-white/[0.05]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="scroll-reveal font-poppins font-semibold text-3xl md:text-4xl text-white mb-3">
            Aetherin
          </h2>
          <p className="scroll-reveal text-slate-400 max-w-lg text-base">
            A B2B SaaS platform I'm building for the education space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="scroll-reveal lg:col-span-6 space-y-6">
            <p className="text-slate-300 leading-relaxed text-[15px]">
              As the founder, I lead a small development team across the entire product lifecycle — from architecture decisions and sprint planning to deployment pipelines. We're building tools that integrate AI capabilities into educational workflows.
            </p>

            <p className="text-slate-400 leading-relaxed text-[15px]">
              The tech stack spans decoupled APIs, sentence embedding models, and LLM-powered features for content generation. I also manage a growing community of 500+ developers and educators around the product.
            </p>

            <div className="pt-4 no-print">
              <Link
                href="https://instagram.com/aetherin.tass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b76e79] hover:bg-[#a55d68] text-white px-5 py-2.5 rounded-full text-xs font-medium transition-colors duration-200"
              >
                <Instagram size={14} /> @aetherin.tass
              </Link>
            </div>
          </div>

          <div className="scroll-reveal lg:col-span-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://i.im.ge/2025/05/15/v8jmZp.1.png"
                alt="Aetherin - Brand Identity"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://i.im.ge/2025/05/15/v8jCAW.2.png"
                alt="Aetherin - Client Work"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://i.im.ge/2025/05/15/v8jNi1.3.png"
                alt="Aetherin - AI Content"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://i.im.ge/2025/05/15/v8jPbf.4.png"
                alt="Aetherin - Strategy"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
