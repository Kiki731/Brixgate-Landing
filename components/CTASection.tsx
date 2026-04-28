"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { scrollToForm } from "@/lib/scrollToForm";

export default function CTASection() {
  return (
    <section className="relative bg-[#1c2839] overflow-hidden pt-16 pb-10 lg:pt-20 lg:pb-12 mb-2">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* "Join the next cohort" — top heading */}
        <h3
          className="font-[family-name:var(--font-dm-sans)] font-semibold text-[40px] text-[#969595] mb-2"
        >
          Join the next cohort
        </h3>

        {/* Two-column: text LEFT, person image RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          {/* Left: CTA text content */}
          <div className="flex-1 max-w-[520px]">
            <p className="text-[#d9d9d9] text-xs font-medium tracking-widest uppercase mb-4">
              get started
            </p>
            <h2
              className="font-medium text-[40px] text-white leading-tight mb-5"
              style={{ fontFamily: "'Kaio TRIAL', var(--font-dm-sans), sans-serif" }}
            >
              Your Next Chapter Starts Here
            </h2>
            <p className="text-[#d9d9d9] text-sm leading-relaxed mb-8">
              BrixGate is for people who care deeply about how work is done, not just what gets
              done. If that resonates with you, we&apos;d like to hear from you.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button onClick={scrollToForm} className="flex items-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-medium text-base px-6 py-3.5 rounded-xl">
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Person image + decorative strokes */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Decorative stroke rectangles */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[140px] h-[300px] rounded-2xl border border-white/15" />
              <div className="absolute right-0 bottom-0 w-[28px] h-[50px] rounded border border-white/15" />
            </div>
            <Image
              src="/images/cta-person.png"
              alt="Join the next cohort"
              width={460}
              height={480}
              className="relative z-10 w-full max-w-[460px] object-contain rounded-br-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
