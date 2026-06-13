"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import AgencySection from "@/components/agency-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  useEffect(() => {
    // Initialize animations when component mounts
    const fadeElements = document.querySelectorAll(".fade-in")
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("appear")
      }, 100 * index)
    })

    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AgencySection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
