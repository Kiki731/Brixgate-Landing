"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CurriculumData {
  title: string;
  description: string;
  items: string[];
}

interface Props {
  skills: string[];
  curriculum: CurriculumData;
}

export default function SkillsAndCurriculum({ skills, curriculum }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  const handleExpandAll = () => {
    setExpandAll(!expandAll);
    setOpenIndex(null);
  };

  const isOpen = (i: number) => expandAll || openIndex === i;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-16">

        {/* Skills you'll gain */}
        <div className="bg-white border border-[#f4f4f4] rounded-[12px] p-6">
          <div className="flex flex-col gap-6">
            <h2
              className="text-[#222] text-[32px] font-medium tracking-[-0.05em]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Skills you&apos;ll gain
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#f3f3ff] text-[#222] text-[14px] px-[10px] py-[4px] rounded-[50px]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Program Curriculum */}
        <div id="curriculum" className="bg-white border border-[#f4f4f4] rounded-[12px] p-6 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2
                className="text-[#222] text-[32px] font-medium tracking-[-0.05em]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {curriculum.title}
              </h2>
              <p
                className="text-[#727272] text-[18px] leading-[1.625]"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                {curriculum.description}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span
                  className="text-[#222] text-[18px] font-semibold tracking-[-0.05em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Content
                </span>
                <button
                  onClick={handleExpandAll}
                  className="text-[#474dc1] text-[16px]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {expandAll ? "Collapse all" : "Expand all"}
                </button>
              </div>

              <div className="border border-[#e2e8f0] rounded-[6px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                {curriculum.items.map((item, i) => (
                  <div key={item} className={i > 0 ? "border-t border-[#e2e8f0]" : ""}>
                    <button
                      className="w-full flex items-center justify-between gap-2 bg-[#fafafa] hover:bg-gray-50 transition-colors px-[18px] py-[13px] h-[70px]"
                      onClick={() => {
                        if (!expandAll) setOpenIndex(openIndex === i ? null : i);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronDown
                          className={`w-4 h-4 text-[#474dc1] shrink-0 transition-transform ${isOpen(i) ? "rotate-180" : ""}`}
                        />
                        <span
                          className="text-[#031124] text-[18px] font-semibold text-left"
                          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                        >
                          {item}
                        </span>
                      </div>
                    </button>
                    {isOpen(i) && (
                      <div className="px-[18px] py-4 bg-white border-t border-[#f4f4f4]">
                        <p className="text-[#475569] text-sm leading-relaxed">
                          Detailed module content coming soon.
                        </p>
                      </div>
                    )}
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
