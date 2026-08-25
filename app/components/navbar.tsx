"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logopw.png";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer">
              <svg className="w-3.5 h-3.5 mr-1.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
              Download App via SMS
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              PakWheels Hotline: <strong className="text-white ml-1 font-mono">0800-72594</strong>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-red-500 font-medium px-2 py-0.5 rounded bg-red-950/40 border border-red-900/50 text-[11px] cursor-pointer hover:bg-red-900/60 transition-colors">
              اردو
            </span>
            <span className="text-slate-700">|</span>
            <Link href="/nav/signup" className="hover:text-white transition-colors font-medium">
              Sign Up
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/nav/signin" className="hover:text-white transition-colors font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0 group">
            <div className="relative py-1">
              <Image 
                src={logo} 
                alt="PakWheels" 
                width={150} 
                height={32} 
                priority
                className="brightness-110 object-contain group-hover:scale-105 transition-transform duration-200" 
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 text-sm font-medium">
            {[
              { label: "Used Cars", href: "/nav/usedcars" },
              { label: "New Cars", href: "/nav/newcars" },
              { label: "Bikes", href: "/nav/bikes" },
              { label: "Auto Store", href: "/nav/autostore" },
              { label: "Videos", href: "/nav/videos" },
              { label: "Forums", href: "/nav/forums" },
              { label: "Blog", href: "/nav/blog" },
              { label: "More", href: "/nav/more" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/70 transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link 
              href="/nav/usedcars"
              className="inline-flex items-center px-4 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-950/50 hover:shadow-red-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/>
              </svg>
              Post an Ad
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 animate-in fade-in slide-in-from-top-2">
            {[
              { label: "Used Cars", href: "/nav/usedcars" },
              { label: "New Cars", href: "/nav/newcars" },
              { label: "Bikes", href: "/nav/bikes" },
              { label: "Auto Store", href: "/nav/autostore" },
              { label: "Videos", href: "/nav/videos" },
              { label: "Forums", href: "/nav/forums" },
              { label: "Blog", href: "/nav/blog" },
              { label: "More", href: "/nav/more" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/nav/usedcars"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-lg font-semibold text-sm uppercase text-white bg-red-600 hover:bg-red-500 shadow-md"
              >
                Post an Ad
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}