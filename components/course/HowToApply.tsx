"use client";
import type { CourseStep, CourseProfession } from "@/lib/courses-data";

interface Props {
  steps: CourseStep[];
  professions: CourseProfession[];
  eligibility: string[];
}

function LongDownArrow() {
  return (
    <svg width="16" height="48" viewBox="0 0 16 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0V42"
        stroke="#D1D5DB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 3"
      />
      <path
        d="M2 36L8 44L14 36"
        stroke="#D1D5DB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HowToApply({ steps, professions, eligibility }: Props) {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-10">

        {/* Left: How To Apply */}
        <div className="flex-1">
          <h2
            className="text-[#222] text-[26px] sm:text-[40px] font-medium tracking-[-0.05em] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            How To Apply
          </h2>
          <p
            className="text-[#727272] text-[14px] mb-8"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            Get started in {steps.length} easy steps
          </p>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={step.num}>
                {/* Step card */}
                <div className="bg-white rounded-xl px-5 py-5 flex items-center gap-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]">
                  {/* Rounded square number badge — size matches text block height */}
                  <div
                    className="w-[44px] h-[44px] rounded-[8px] bg-[#7c3aed] text-white text-[16px] font-bold flex items-center justify-center shrink-0"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p
                      className="text-[#222] text-[15px] font-semibold leading-[22px]"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-[#727272] text-[13px] leading-[20px]"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Long dashed arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="ml-[28px] flex items-center py-2">
                    <LongDownArrow />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Who Is This For */}
        <div className="flex-1">
          <h2
            className="text-[#222] text-[26px] sm:text-[40px] font-medium tracking-[-0.05em] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Who Is This Program For?
          </h2>
          <p
            className="text-[#727272] text-[14px] mb-8"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            This program is built for professionals, not beginners
          </p>

          {/* Single card housing both profession pills AND eligibility */}
          <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]">
            {/* Profession pills grid */}
            <div className="grid grid-cols-2 gap-3">
              {professions.map((p) => (
                <div
                  key={p.label}
                  className={`${p.color} rounded-lg px-4 py-4 text-sm`}
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 600 }}
                >
                  {p.label}
                </div>
              ))}
            </div>

            {/* Eligibility Criteria — inside the card with #FAFAFA bg */}
            <div className="bg-[#FAFAFA] rounded-lg p-4">
              <p
                className="text-[#222] text-[15px] font-semibold mb-3"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                Eligibility Criteria
              </p>
              <ul className="flex flex-col gap-2">
                {eligibility.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[#475569] text-sm"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#475569] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
