import Link from "next/link"
import { Linkedin, Github, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#060913] border-t border-white/[0.05] text-slate-300 py-12 no-print">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-poppins font-bold text-xl mb-1 text-white">
              Tanush <span className="text-gradient">Singla</span>
            </h3>
            <p className="text-slate-400 text-sm">CS Student & Developer</p>
          </div>

          <div className="flex space-x-6 items-center">
            <Link
              href="https://www.linkedin.com/in/tanush-singla-330a27281/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/cidtheshadow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://leetcode.com/u/cidtheshadow/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="LeetCode"
              title="LeetCode Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.943l1.132 1.132a1.375 1.375 0 0 0 1.943 0l9.777-9.778a1.375 1.375 0 0 0 0-1.943L14.444.414A1.375 1.375 0 0 0 13.483 0zm5.412 4.961a1.375 1.375 0 0 0-.947.414l-9.778 9.778a1.375 1.375 0 0 0 0 1.943l1.131 1.132a1.375 1.375 0 0 0 1.943 0l9.778-9.778a1.375 1.375 0 0 0 0-1.943l-1.131-1.132a1.375 1.375 0 0 0-.996-.414zM3.477 10.385a1.375 1.375 0 0 0-.961.414L.414 11.931a1.375 1.375 0 0 0 0 1.943l9.777 9.778a1.375 1.375 0 0 0 1.943 0l1.132-1.132a1.375 1.375 0 0 0 0-1.943L3.488 10.8a1.375 1.375 0 0 0-.011-.415z"/>
              </svg>
            </Link>
            <Link
              href="https://instagram.com/singla_tanush"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tanush Singla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
