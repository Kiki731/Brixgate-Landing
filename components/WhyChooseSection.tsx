"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    title: "Practical, Not Just Theory",
    description: "Learn by building real-world AI solutions,not just watching videos.",
    bg: "#e9f8ff",
    icon: "/images/why-icon-1.png",
  },
  {
    title: "Industry-Focused Learning",
    description: "Courses designed around real use cases in Tech and regular field.",
    bg: "#fff4ee",
    icon: "/images/why-icon-2.png",
  },
  {
    title: "Job-Ready Skills",
    description: "Learn what employers need, apply it instantly.",
    bg: "#fbeeff",
    icon: "/images/why-icon-3.png",
  },
  {
    title: "AI Across Careers",
    description: "AI fits every role—developer, analyst, or manager.",
    bg: "#eeedfd",
    icon: "/images/why-icon-4.png",
  },
  {
    title: "Certificates",
    description: "Validate your skills with certificates that stand out.",
    bg: "#eefcf5",
    icon: "/images/why-icon-5.png",
  },
  {
    title: "Structured Learning Paths",
    description: "Clear roadmaps from beginner to advanced, no confusion.",
    bg: "#fff2d0",
    icon: "/images/why-icon-6.png",
  },
];

export default function WhyChooseSection() {
  const ref = useInView();
  return (
    <section className="py-20 bg-white"><div ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 scroll-anim">
          
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-4xl text-[#0f172a]">
            Why Choose Brixgate
          </h2>
          <p className="text-[#222] text-[14px] lg:text-base mt-2 max-w-[560px]">
            We don&apos;t just teach AI, we prepare you to use it where it matters.
          </p>
        </div>

        {/* Sub banner */}
        {/* <div className="bg-[#f9f9f9] rounded-xl px-6 py-4 mb-8 text-center">
          <p className="text-[#475569] text-[14px] lg:text-base">
            Designed for working professionals across all industries who want to stay ahead in the
            AI-driven economy.
          </p>
        </div> */}

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4 scroll-anim hover-lift"
            >
              <div
                className="w-[70px] h-[70px] rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: f.bg }}
              >
                <Image src={f.icon} alt={f.title} width={36} height={36} />
              </div>
              <div>
                <h3 className="font-medium text-[#282828] text-lg mb-0">{f.title}</h3>
                <p className="text-[#727272] text-[14px] lg:text-sm leading-snug">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></section>
  );
}
