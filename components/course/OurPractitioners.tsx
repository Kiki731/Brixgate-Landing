"use client";
import { useState } from "react";
import Image from "next/image";

const practitioners = [
  {
    role: "Senior Instructor, Cyber Security & Intelligence",
    name: "Adewale Johnson",
    experience: "9+ Years",
    bio: "Adewale Johnson is an experienced cybersecurity practitioner and instructor with a strong background in digital defense, threat monitoring, and operational security. Over the years, he has supported organizations in strengthening their cyber posture, identifying system weaknesses, and responding to evolving digital threats.",
    expertise: "Threat Intelligence • Security Monitoring • Vulnerability Management • Incident Response • Cyber Defense Operations",
    sessions: "Over 1,200 live sessions taken",
    photo: "/images/Rectangle 152.png",
  },
  {
    role: "Lead Instructor, AI & Machine Learning Security",
    name: "Practitioner 2",
    experience: "7+ Years",
    bio: "Update this bio with the second practitioner's background and experience.",
    expertise: "Machine Learning • Deep Learning • NLP • Computer Vision • MLOps",
    sessions: "Over 800 live sessions taken",
    photo: "/images/Rectangle 152.png",
  },
  {
    role: "Senior Instructor, Cloud Security & Compliance",
    name: "Practitioner 3",
    experience: "10+ Years",
    bio: "Update this bio with the third practitioner's background and experience.",
    expertise: "AWS Security • Azure Sentinel • Cloud Compliance • DevSecOps • Zero Trust",
    sessions: "Over 950 live sessions taken",
    photo: "/images/Rectangle 152.png",
  },
];

export default function OurPractitioners() {
  const [active, setActive] = useState(0);
  const p = practitioners[active];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section heading */}
        <h2
          className="text-[#1a1a1a] text-[40px] font-bold tracking-[-0.04em] mb-3"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Our Practitioners
        </h2>
        <p
          className="text-[#475569] text-[15px] mb-10 max-w-[600px] leading-relaxed"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          Learn from experienced professionals who bring real-world knowledge,
          practical insights, and industry expertise into every session.
        </p>

        {/* Card + overflowing photo wrapper */}
        <div className="relative" style={{ minHeight: "460px" }}>

          {/* Dark navy card — starts 72px down so photo overflows above */}
          <div className="absolute inset-x-0 bottom-0" style={{ top: "72px" }}>
            <div className="relative w-full" style={{ minHeight: "388px" }}>

              {/*
                SVG card shape:
                - Diagonal cut at top-left (from x=200 on top to y=130 on left)
                - Smooth 24px rounded corners at top-right, bottom-right, bottom-left
              */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1200 388"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M200,0 L1176,0 Q1200,0 1200,24 L1200,364 Q1200,388 1176,388 L24,388 Q0,388 0,364 L0,130 Z"
                  fill="#172435"
                />
              </svg>

              {/* Text content — left 57%, padded to sit inside the card shape */}
              <div className="relative z-10 w-[57%] px-10 py-10 flex flex-col gap-4">
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
          </div>

          {/*
            Practitioner photo — full wrapper height so it naturally overflows
            above the card. object-bottom anchors the person's feet to the card bottom.
          */}
          <div className="absolute right-0 inset-y-0 w-[42%]">
            <div className="relative h-full w-full">
              <Image
                src={p.photo}
                alt={p.name}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1280px) 42vw, 537px"
                priority
              />

              {/* Purple name badge — bottom-right of photo area */}
              <div className="absolute bottom-10 right-2 bg-[#a855f7] rounded-2xl px-5 py-3 z-10">
                <p
                  className="text-white font-bold text-[17px] text-center"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-white/90 text-[13px] text-center mt-0.5"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.experience}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel dot navigation */}
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
