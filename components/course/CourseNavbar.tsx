"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function CourseNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#172435] text-white sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <Image src="/images/brixgate-logo.png" alt="Brixgate" width={105} height={48} priority />
        </a>

        {/* Desktop: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+2347000000000"
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            Toll-Free: 0700-000-0000
          </a>
          <a
            href="https://portal.brixgate.com"
            className="text-sm font-semibold text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-4 py-2.5 rounded-md transition-colors"
          >
            Log In
          </a>
          <a
            href="#enroll"
            className="flex items-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white text-sm font-semibold px-4 py-2.5 rounded-md"
          >
            Talk to an Advisor
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
            href="tel:+2347000000000"
            className="flex items-center gap-2 text-sm font-medium py-2 border-b border-white/10"
          >
            <Phone className="w-4 h-4" />
            Toll-Free: 0700-000-0000
          </a>
          <div className="flex gap-3 pt-2">
            <a
              href="https://portal.brixgate.com"
              className="text-sm font-semibold text-white/80 border border-white/30 px-4 py-2 rounded-md"
            >
              Log In
            </a>
            <a
              href="#enroll"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 bg-[#d51420] text-white text-sm font-semibold px-4 py-2 rounded-md"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
