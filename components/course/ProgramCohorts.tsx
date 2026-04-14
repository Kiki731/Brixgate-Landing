"use client";
import Image from "next/image";
import { Calendar, Users, Clock, Star } from "lucide-react";

const cohorts = [
  {
    title: "AI in Cyber Security April 2026",
    badge: null,
    startDate: "Ongoing",
    cohort: "April Cohort",
    endDate: "15 Mar 2026",
    instructor: "/images/testimonial-avatar-4.jpg",
    rating: "4.9",
    duration: "3 weeks",
    students: "312 students",
    cta: "Ongoing Program",
    ctaStyle: "text",
  },
  {
    title: "AI in Cyber Security April 2026",
    badge: "Limited Seats",
    startDate: "30 Apr 2026",
    cohort: "April Cohort",
    endDate: "15 Apr 2026",
    instructor: "/images/testimonial-avatar-5.jpg",
    rating: "4.9",
    duration: "3 weeks",
    students: "100 students enrolled",
    cta: "Enrol Now",
    ctaStyle: "button",
  },
  {
    title: "AI in Cyber Security March 2026",
    badge: null,
    startDate: "2 Mar 2026",
    cohort: "March Cohort",
    endDate: "15 Mar 2026",
    instructor: "/images/testimonial-avatar-6.jpg",
    rating: "4.9",
    duration: "3 weeks",
    students: "312 students",
    cta: "Enrol Now",
    ctaStyle: "button",
  },
];

export default function ProgramCohorts() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-[32px] font-medium tracking-[-0.05em] mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Program Cohorts
        </h2>
        <p
          className="text-[#727272] text-[15px] mb-10"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          Build practical experience by working on projects inspired by real cybersecurity and AI-driven security challenges.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cohorts.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col"
            >
              {/* Card header */}
              <div className="bg-[#172435] px-5 py-4 flex items-start justify-between">
                <h3
                  className="text-white text-[15px] font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {c.title}
                </h3>
                {c.badge && (
                  <span className="bg-[#d51420] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full ml-2 shrink-0">
                    {c.badge}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="px-5 py-5 flex flex-col gap-4 flex-1">
                <div className="grid grid-cols-2 gap-3 text-[13px]">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#727272] mb-1">
                      <Calendar className="w-3.5 h-3.5" /> Start Date
                    </div>
                    <p className="text-[#222] font-semibold">{c.startDate}</p>
                  </div>
                  <div>
                    <p className="text-[#727272] mb-1">Cohort</p>
                    <p className="text-[#222] font-semibold">{c.cohort}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[#727272] mb-1">
                      <Calendar className="w-3.5 h-3.5" /> End Date
                    </div>
                    <p className="text-[#222] font-semibold">{c.endDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
                      <Image src={c.instructor} alt="Instructor" fill className="object-cover" />
                    </div>
                    <span className="text-[#727272] text-[12px]">Program Instructor</span>
                  </div>
                </div>

                {/* Rating + meta */}
                <div className="border-t border-[#f0f0f0] pt-4 flex items-center justify-between text-[13px]">
                  <div>
                    <p className="text-[#727272] mb-1">Program Ratings</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                      ))}
                      <span className="text-[#222] font-semibold ml-1">({c.rating} Rating)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[12px] text-[#727272]">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {c.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {c.students}</span>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  {c.ctaStyle === "text" ? (
                    <p className="text-[#d51420] font-semibold text-sm text-center">{c.cta}</p>
                  ) : (
                    <a
                      href="#enroll"
                      onClick={(e) => { e.preventDefault(); document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="flex items-center justify-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-semibold text-sm px-5 py-3 rounded-xl w-full"
                    >
                      {c.cta} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
