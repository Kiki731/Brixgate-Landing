"use client";
import Image from "next/image";

const stats = [
  { label: "Application Closes", value: "30 Apr, 2026" },
  { label: "Cohort Start Date", value: "2 May, 2026" },
  { label: "Program Duration", value: "2 weeks" },
  { label: "Learning Format", value: "Live, Online classes" },
];

export default function CourseHero() {
  const scrollToEnroll = () => {
    const el = document.getElementById("enroll");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCurriculum = () => {
    const el = document.getElementById("curriculum");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <section className="bg-[#f5f9ff] relative">
      {/* Two-column layout — same container as landing page */}
      <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-6">

        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-flex">
            <div className="bg-white px-[18px] py-[6px] rounded-full">
              <span
                className="text-[#222] text-[14px] tracking-[0.35px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Artificial Intelligence
              </span>
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-dm-sans)] font-medium text-[#222] leading-[0.91] text-[48px] lg:text-[67px]">
            AI in Cyber Security
          </h1>

          <p
            className="text-[#222] text-[16px] lg:text-[20px] leading-[1.4] max-w-[520px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            A 3-week intensive for working cybersecurity professionals. Use AI to
            detect threats faster, automate your workflows, and operate at a level
            manual analysis cannot match.
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-2">
            <button
              onClick={scrollToEnroll}
              className="flex items-center gap-2.5 bg-[#d51520] text-white font-medium text-base px-8 py-3.5 rounded-[5.4px] h-[52px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Enroll Now - Secure Your Spot
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={scrollToCurriculum}
              className="flex items-center justify-center border border-[#222] text-[#222] font-medium text-base px-8 py-3.5 rounded-[5.4px] h-[52px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Curriculum
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:flex flex-none w-[540px] relative h-[500px] overflow-hidden rounded-xl">
          <div className="absolute inset-0 flex">
            <div className="w-[60%] h-full bg-[#f0f1ff]" />
            <div className="w-[40%] h-full bg-white" />
          </div>
          {/* Dot cluster — top-left corner only */}
          <div className="absolute left-[14px] top-[10px] flex flex-col gap-[7px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex gap-[7px]">
                {Array.from({ length: 14 }).map((_, j) => (
                  <div key={j} className="w-[5px] h-[5px] rounded-full bg-[#7c6bda]" />
                ))}
              </div>
            ))}
          </div>
          {/* Card image — offset to the right, lavender visible on left */}
          <div className="absolute top-[30px] bottom-[30px] right-0 left-[18%]">
            <Image
              src="/images/photo_5960941581084855491_y 1.png"
              alt="AI in Cyber Security & Intelligence"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>

    </section>

    {/* Stats Bar — OUTSIDE hero section, pulled up over the section boundary */}
    {/* ↕ ADJUST POSITION: change -mt-[50px] — more negative = higher up into hero bg */}
    <div className="relative z-20 max-w-[1240px] mx-auto px-6 -mt-[50px]">
      <div className="bg-[#172435] rounded-[24px] px-[38px] py-[16px] shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center flex-1">
              <div className="flex flex-col gap-[2px]">
                <span
                  className="text-white text-[15px] lg:text-[18px] leading-[36px]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {stat.label}
                </span>
                <span
                  className="text-white font-semibold text-[18px] lg:text-[24px] leading-[43px]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {stat.value}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-[68px] bg-white mx-6 lg:mx-10 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
