"use client";
import Image from "next/image";
import type { CourseProject } from "@/lib/courses-data";

export default function PortfolioProjects({ projects }: { projects: CourseProject[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-[32px] font-medium tracking-[-0.05em] mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Portfolio Projects
        </h2>
        <p
          className="text-[#727272] text-[15px] mb-10"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          Build practical experience by working on projects inspired by real-world challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {/* Text — padded, normal flow */}
              <div className="flex flex-col gap-3 p-4">
                <h3
                  className="text-[#222] text-[16px] font-semibold leading-snug"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#727272] text-[13px] leading-relaxed"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
              {/* Image — edge-to-edge, no border-radius so top edge is flat;
                  bottom corners inherit the card's rounded-xl via parent overflow-hidden */}
              <div className="relative w-full h-[160px] mt-auto">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f5f0ff] rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[#222] text-[14px] leading-relaxed max-w-[630px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif,", fontWeight: 500 }}
          >
            These projects help you apply your knowledge, build a strong portfolio, and gain confidence to solve real-world challenges using AI-powered solutions.
          </p>
          <a
            href="#enroll"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-semibold text-sm px-5 py-2.5 rounded-lg whitespace-nowrap"
          >
            Start Building Your Skills →
          </a>
        </div>
      </div>
    </section>
  );
}
