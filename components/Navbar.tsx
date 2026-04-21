"use client";
import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { scrollToForm, scrollToSection } from "@/lib/scrollToForm";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#172435] text-white sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <Image src="/images/brixgate-logo.png" alt="Brixgate" width={105} height={48} priority />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {/* <a
            href="#"
            className="px-3 py-2 text-sm font-semibold hover:text-white/80 transition-colors flex items-center gap-1"
          >
            Programs <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-semibold hover:text-white/80 transition-colors"
          >
            Our Team
          </a> */}
          {/* <a
            href="#"
            className="px-3 py-2 text-sm text-[#475569] hover:text-white/80 transition-colors"
          >
            Program Finder
          </a> */}
          {/* <a
            href="#"
            className="px-3 py-2 text-sm text-[#475569] hover:text-white/80 transition-colors"
          >
            Emblem
          </a> */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="px-3 py-2 text-sm font-semibold hover:text-white/80 transition-colors"
          >
            Home
          </a>
          <a
            href="#courses-section"
            onClick={(e) => { e.preventDefault(); scrollToSection("courses-section"); }}
            className="px-3 py-2 text-sm font-semibold hover:text-white/80 transition-colors"
          >
            Our Courses
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* <a
            href="#"
            className="text-sm font-medium text-[#fdfbf6] hover:text-white/80 transition-colors"
          >
            Sign in
          </a> */}
            <p className="px-3 py-2 text-sm text-white/80">
            Phone: +234 7088093620
          </p>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToForm(); }}
            className="flex items-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white text-sm font-semibold px-4 py-2.5 rounded-md"
          >
            Get Started
            {/* <span className="w-6 h-6 rounded bg-[#f6d9e4] flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-[#d51420]" />
            </span> */}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#172435] border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }}
            className="text-sm font-medium py-2 border-b border-white/10"
          >
            Home
          </a>
          <a
            href="#courses-section"
            onClick={(e) => { e.preventDefault(); scrollToSection("courses-section"); setMobileOpen(false); }}
            className="text-sm font-medium py-2 border-b border-white/10 last:border-0"
          >
            Our Courses
          </a>
          <div className="flex gap-3 pt-2">
            {/* <a href="#" className="text-sm font-medium">
              Sign in
            </a> */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToForm(); setMobileOpen(false); }}
              className="flex items-center gap-2 bg-[#d51420] text-white text-sm font-semibold px-4 py-2 rounded-md"
            >
              Get Started
              {/* <ArrowRight className="w-3.5 h-3.5" /> */}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
