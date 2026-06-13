"use client"

import { X, Download, Eye, Printer } from "lucide-react"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  const googleDriveLink = "https://drive.google.com/file/d/1ATe3YZ0Gvdk0DvzCsFNuFaAwjL2c2cLz/view?usp=sharing"
  // Direct download link from Google Drive file ID
  const directDownloadLink = "https://drive.google.com/uc?export=download&id=1ATe3YZ0Gvdk0DvzCsFNuFaAwjL2c2cLz"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in no-print">
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#090d16] border border-white/10 p-6 md:p-8 shadow-2xl shadow-black/80 transform transition-all animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <div className="mb-6">
          <h3 className="font-poppins font-bold text-xl text-white">Access Resume</h3>
          <p className="text-slate-400 text-xs mt-1">Select how you would like to view or save the resume.</p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <a
            href={directDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between w-full bg-[#b76e79] hover:bg-[#b76e79]/90 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#b76e79]/10"
          >
            <span className="flex items-center gap-2">
              <Download size={16} /> Direct PDF Download
            </span>
            <span className="text-[10px] uppercase font-bold text-white/80">Recommended</span>
          </a>

          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-all duration-300"
          >
            <Eye size={16} className="text-slate-400" /> View / Preview Online
          </a>

          <button
            onClick={() => {
              onClose()
              window.print()
            }}
            className="flex items-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-all duration-300"
          >
            <Printer size={16} className="text-slate-400" /> Print / Save Local Version
          </button>
        </div>

        {/* Minimal Footer */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="text-[10px] text-slate-500 font-mono">Tanush Singla &bull; Systems Programmer</p>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}
