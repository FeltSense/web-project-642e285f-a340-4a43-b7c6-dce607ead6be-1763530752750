'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo/Brand */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-lg font-semibold text-slate-900 hidden sm:inline">Retail Business</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors duration-200">
          Home
        </Link>
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors duration-200">
          About
        </a>
        <a href="#portfolio" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors duration-200">
          Portfolio
        </a>
      </div>

      {/* CTA Button + Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:inline-flex px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:scale-105">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu (shown when toggled) */}
    <div className="md:hidden hidden pb-4 border-t border-slate-200/50">
      <div className="flex flex-col gap-1 pt-4">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors">
          Home
        </Link>
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors">
          About
        </a>
        <a href="#portfolio" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors">
          Portfolio
        </a>
        <button className="mt-3 mx-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-lg w-full hover:shadow-lg transition-all">
          Get Started
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}