'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#191919]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-aeonik font-medium text-lg">
            THE CONTENT NERD
            <div className="w-3 h-3 bg-white"></div>
            <div className="w-3 h-3 bg-white"></div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-white/80 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
