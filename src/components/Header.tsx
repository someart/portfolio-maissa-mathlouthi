'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-pink-500/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white">
          Maissa Mathlouthi
        </a>
        
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-300 hover:text-pink-900 transition">About</a>
          <a href="#skills" className="text-gray-300 hover:text-pink-900 transition">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-pink-900 transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-pink-900 transition">Contact</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="flex flex-col gap-4 p-4">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
 