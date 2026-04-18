"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { CoursePractitioner } from "@/lib/courses-data";

export default function OurPractitioners({ practitioners }: { practitioners: CoursePractitioner[] }) {
  const [active, setActive] = useState(0);
  const p = practitioners[active];

  // Auto-advance every 4 seconds; resets if user manually picks a slide
  useEffect(() => {
    setActive(0); // reset when practitioners change (different course)
  }, [practitioners]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % practitioners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [active, practitioners.length]);

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── DESKTOP (md+) ── */}
        <div className="hidden md:block">
          <div className="relative" style={{ minHeight: "550px" }}>

            {/* Section heading — absolute at top, z-20, doesn't affect flow */}
            <div className="absolute top-0 left-0 z-20 w-[45%]">
              <h2
                className="text-[#1a1a1a] text-[40px] font-medium tracking-[-0.04em] mb-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Our Practitioners
              </h2>
              <p
                className="text-[#475569] text-[15px] leading-relaxed"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                Learn from experienced professionals who bring real-world
                knowledge, practical insights, and industry expertise into every
                session.
              </p>
            </div>

            {/* Card background — Rectangle 140.png, starts at 140px below heading */}
            <div
              className="absolute inset-x-0 bottom-0 flex flex-col justify-center"
              style={{
                top: "140px",
                backgroundImage: "url('/images/Rectangle 140.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Text column — left 57% */}
              <div className="w-[57%] px-10 flex flex-col gap-4">
                <h3
                  className="text-white font-bold text-[17px] leading-snug"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {p.role}
                </h3>
                <p
                  className="text-white/80 text-[14px] leading-[1.7]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.bio}
                </p>
                <div>
                  <p
                    className="text-white font-bold text-[14px] mb-1"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    Core Expertise:
                  </p>
                  <p
                    className="text-white/80 text-[14px] leading-relaxed"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {p.expertise}
                  </p>
                </div>
                <p
                  className="text-white font-bold text-[14px]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.sessions}
                </p>
              </div>
            </div>

            {/* Practitioner photo */}
            <div className="absolute right-0 bottom-0 w-[42%]" style={{ top: "80px" }}>
              <div className="relative h-full w-full overflow-hidden rounded-tr-[54px] rounded-br-[54px]">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  className="object-contain object-right-bottom"
                  sizes="(max-width: 1280px) 42vw, 537px"
                  priority
                />
                {/* Purple name badge */}
                <div className="absolute bottom-10 right-2 bg-[#a855f7] rounded-2xl px-5 py-3 z-10">
                  <p
                    className="text-white font-bold text-[17px] text-right"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {p.name}
                  </p>
                  <p
                    className="text-[#222222] text-[13px] text-right mt-0.5"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {p.experience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE (< md) ── */}
        <div className="md:hidden">
          <h2
            className="text-[#1a1a1a] text-[32px] font-bold tracking-[-0.04em] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Our Practitioners
          </h2>
          <p
            className="text-[#475569] text-[14px] mb-6 leading-relaxed"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            Learn from experienced professionals who bring real-world knowledge,
            practical insights, and industry expertise into every session.
          </p>

          <div
            className="-mx-6"
            style={{
              backgroundImage: "url('/images/Rectangle 140.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="px-8 pt-12 pb-4 flex flex-col gap-4">
              <h3
                className="text-white font-bold text-[16px] leading-snug"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {p.role}
              </h3>
              <p
                className="text-white/80 text-[13px] leading-[1.7]"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                {p.bio}
              </p>
              <div>
                <p
                  className="text-white font-bold text-[13px] mb-1"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  Core Expertise:
                </p>
                <p
                  className="text-white/80 text-[13px] leading-relaxed"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.expertise}
                </p>
              </div>
              <p
                className="text-white font-bold text-[13px]"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                {p.sessions}
              </p>
            </div>

            <div className="relative w-full h-[300px] mt-2">
              <Image
                src={p.photo}
                alt={p.name}
                fill
                className="object-contain object-bottom"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-[#a855f7] rounded-2xl px-4 py-2.5 z-10">
                <p
                  className="text-white font-bold text-[15px] text-right"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-[#222222] text-[12px] text-right mt-0.5"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.experience}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {practitioners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View practitioner ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-3 h-3 bg-[#a855f7]"
                  : "w-2.5 h-2.5 bg-[#d1d5db] hover:bg-[#a855f7]/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
