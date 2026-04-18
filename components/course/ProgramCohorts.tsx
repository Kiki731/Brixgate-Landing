"use client";
import Image from "next/image";
import { Calendar, Users, Clock, Star } from "lucide-react";
import type { CourseCohort } from "@/lib/courses-data";

export default function ProgramCohorts({ cohorts }: { cohorts: CourseCohort[] }) {
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
          Build practical experience by working on projects inspired by real challenges.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cohorts.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col"
            >
              {/* Card header */}
              <div className="bg-[#172435] px-5 py-5 flex items-start justify-between">
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
                {/* Dates + Cohort grid — instructor removed from here */}
                <div className="grid grid-cols-2 gap-3 text-[13px]">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#727272] mb-1">
                      <Calendar className="w-3.5 h-3.5" /> Start Date
                    </div>
                    <p className="text-[#222] font-medium">{c.startDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#727272] mb-1">Cohort</p>
                    <p className="text-[#222] font-medium">{c.cohort}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[#727272] mb-1">
                      <Calendar className="w-3.5 h-3.5" /> End Date
                    </div>
                    <p className="text-[#222] font-medium">{c.endDate}</p>
                  </div>
                </div>

                {/* Program Ratings + duration/students (left) | Program Instructor (right) */}
                <div className="flex items-start justify-between text-[13px]">
                  {/* Ratings + duration + students stacked on the left */}
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[#727272]">Program Ratings</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                      ))}
                      <span className="text-[#222] font-medium ml-1">({c.rating} Rating)</span>
                    </div>
                    <div className="flex items-center gap-3 text-[12px] text-[#727272] mt-0.5">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {c.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {c.students}</span>
                    </div>
                  </div>

                  {/* Instructor — label on top, larger square image below, aligned right */}
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="text-[#727272] text-[12px]">Program Instructor</span>
                    <div className="w-18 h-18 rounded-md overflow-hidden relative shrink-0">
                      <Image src={c.instructor} alt="Instructor" fill className="object-cover" sizes="80px" />
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  {c.ctaStyle === "text" ? (
                    <div className="flex items-center justify-center w-full bg-[#F2F2F2] rounded-xl px-5 py-3">
                      <p
                        className="text-[#222] font-semibold text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {c.cta}
                      </p>
                    </div>
                  ) : (
                    <a
                      href="#enroll"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
                      }}
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
