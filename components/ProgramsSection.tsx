"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { scrollToForm } from "@/lib/scrollToForm";

const industryPills = [
  { label: "Engineering",       icon: "/icons/settings-03.svg"       },
  { label: "Human Resources",   icon: "/icons/user-settings-02.svg"  },
  { label: "Finance",           icon: "/icons/bank-finance.svg"      },
  { label: "Operations",        icon: "/icons/property-new.svg"      },
  { label: "Marketing",         icon: "/icons/megaphone-01.svg"      },
  { label: "Legal",             icon: "/icons/bank-legal.svg"        },
  { label: "Healthcare",        icon: "/icons/health.svg"            },
  { label: "Education",         icon: "/icons/mortarboard-01.svg"    },
];

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── Section Header (centered) ─────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-4">
            AI-First Philosophy
          </p>
          <h2
            className="font-[family-name:var(--font-dm-sans)] font-medium text-[40px] leading-tight text-[#222222] mb-4"
          >
            AI in My{" "}
            <span className="relative inline-block">
              Field
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 60 6"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q30 1 60 5" stroke="#222222" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
          </h2>
          <p
            className="text-[#222222] text-base leading-relaxed max-w-[700px] mx-auto"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            The ultimate integration of artificial intelligence across every profession. Master
            practical AI applications designed specifically for your industry and workflow.
          </p>
        </div>

        {/* ── Two-column visual: circular image LEFT + stacked browser cards RIGHT ── */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-12 mb-20">

          {/* Left: Circular woman image + avatar row */}
          <div className="flex-none flex flex-col items-center gap-6 w-full lg:w-[438px]">
            <Image
              src="/images/ai-field-circular.png"
              alt="AI in My Field"
              width={438}
              height={471}
              className="w-full max-w-[438px] object-contain"
            />
          </div>

          {/* Right: Two browser cards stacked like notebooks */}
          <div className="flex-none relative w-full lg:w-[461px]" style={{ height: '380px' }}>

            {/* Card 1 — bottom/behind, centered */}
            <div
              className="absolute top-0 z-10 rounded-xl overflow-hidden shadow-md border border-gray-100"
              style={{ width: '92%', left: '50%', transform: 'translateX(-50%) translateY(8px)' }}
            >
              {/* Browser header */}
              <div className="bg-white flex items-center px-4 py-2.5 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#d9d9d9]" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#ff294f]" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#fbbf24]" />
                </div>
              </div>
              {/* Browser body */}
              <div className="bg-[#fbfbfb] p-6">
                <p
                  className="text-[#222222] font-semibold leading-snug text-[15px]"
                  style={{ fontFamily: "'var(--font-mooli), cursive, system-ui" }}
                >
                  Artificial Intelligence is reshaping how professionals work in their chosen field.
                  From automating repetitive tasks to generating insights and improving
                  decision-making, AI is becoming an essential skill—not an option.
                </p>
                <div className="flex gap-3 mt-2">
                  <div className="h-[7px] rounded-full bg-[#f3f3f3] w-40" />
                  <div className="h-[7px] rounded-full bg-[#f3f3f3] w-24" />
                </div>
                
              </div>
            </div>

            {/* Card 2 — front/on top, centered */}
            <div
              className="absolute top-1 z-20 rounded-xl overflow-hidden shadow-xl border border-gray-100"
              style={{ width: '98%', left: '50%', transform: 'translateX(-50%)' }}
            >
              {/* Browser header */}
              <div className="bg-white flex items-center px-4 py-2.5 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
                  <div className="w-2 h-2 rounded-full bg-[#ff294f]" />
                  <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                </div>
              </div>
              {/* Browser body */}
              <div className="bg-[#fbfbfb] p-6">
                <p
                  className="text-[#222222] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-mooli), cursive, system-ui" }}
                >
                  Work is evolving and AI is at the center of it. What used to take hours can now
                  take minutes. Let&apos;s help you apply AI to your actual work.
                </p>
                <div className="flex gap-3 mt-2">
                  <div className="h-2 rounded-full bg-[#f3f3f3] w-44" />
                  <div className="h-2 rounded-full bg-[#f3f3f3] w-28" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Program Cards (full-width, stacked vertically) ─────────── */}
        <div className="flex flex-col gap-6 items-center">

          {/* Card 1: General AI */}
          <div className="w-full max-w-[1087px] bg-[#e9f8ff] rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left: text content */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center gap-4">
                {/* Icon + heading row */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6CADCC] to-[#4D8DAC] flex items-center justify-center shrink-0">
                    <img
                      src="/icons/artificial-intelligence-02.svg"
                      width={24}
                      height={24}
                      alt="General AI"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[#0f172a] font-semibold text-xl leading-snug"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >
                      General AI
                    </h3>
                    
                  </div>
                </div>
                <p
                  className="text-[#475569] text-[14px] lg:text-base leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: '332px' }}
                >
                  Build a strong foundation in AI, data, and machine learning.
                </p>
                <button onClick={scrollToForm} className="inline-flex items-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-medium text-[14px] px-5 py-3 rounded-xl w-fit">
                  Explore Program
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {/* Right: image — p-8 on mobile (all sides), desktop: top/bottom/right only */}
              <div className="w-full lg:w-[560px] shrink-0 p-4 lg:pt-8 lg:pb-8 lg:pr-8 lg:pl-0">
                <Image
                  src="/images/general-ai-img.png"
                  alt="General AI"
                  width={620}
                  height={320}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Card 2: AI for Professionals */}
          <div className="w-full max-w-[1087px] bg-[#fff4ee] rounded-2xl overflow-hidden">
            {/* Top row: image LEFT + text RIGHT */}
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left: image — 32px padding top, bottom, left; not touching edges */}
              <div className="w-full lg:w-[560px] shrink-0 p-4 lg:pt-8 lg:pb-8 lg:pl-8 lg:pr-0">
                <Image
                  src="/images/ai-professionals-img.png"
                  alt="AI for Professionals"
                  width={560}
                  height={320}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Right: text */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E3B49B] to-[#9C6D53] flex items-center justify-center shrink-0">
                    <img
                      src="/icons/artificial-intelligence-04.svg"
                      width={24}
                      height={24}
                      alt="AI for Professionals"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[#0f172a] font-semibold text-xl leading-snug"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >
                      AI for Professionals
                    </h3>
                  </div>
                </div>
                <p
                  className="text-[#475569] text-[14px] lg:text-base leading-relaxed"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: '332px' }}
                >
                  Designed for working professionals across all industries who want to stay ahead in
                  the AI-driven economy.
                </p>
                <button onClick={scrollToForm} className="inline-flex items-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-medium text-[14px] px-5 py-3 rounded-xl w-fit">
                  Explore Program
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom: AI professional courses (INSIDE the card) */}
            <div className="px-8 lg:px-10 pb-8 pt-3">
              <div className="flex items-center justify-between mb-4">
                <p
                  className="text-[#0f172a] font-semibold text-xl"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  AI professional courses
                </p>
                
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {industryPills.map((pill) => (
                  <div
                    key={pill.label}
                    onClick={scrollToForm}
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-4 hover:shadow-sm transition-shadow cursor-pointer"
                  >
                    <img
                      src={pill.icon}
                      width={24}
                      height={24}
                      alt={pill.label}
                      className="shrink-0"
                    />
                    <span
                      className="font-semibold text-[#222222] text-sm"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
