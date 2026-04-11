"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const modules = [
  {
    week: "Week 1",
    title: "Foundations of AI in Cybersecurity",
    lessons: [
      "Introduction to AI and machine learning for security professionals",
      "Understanding the modern threat landscape",
      "Data collection and preprocessing for security datasets",
      "Building your first anomaly detection model",
      "AI ethics and responsible use in security contexts",
    ],
  },
  {
    week: "Week 2",
    title: "Threat Detection & Automated Response",
    lessons: [
      "Network intrusion detection with supervised learning",
      "Malware classification using neural networks",
      "Building automated incident response playbooks",
      "SIEM integration and AI-powered log analysis",
      "Capstone: Build a real-time threat detection system",
    ],
  },
  {
    week: "Bonus",
    title: "AI-Powered Penetration Testing",
    lessons: [
      "Automated vulnerability scanning with AI tools",
      "Using LLMs for security research and report generation",
      "Red team vs. blue team AI simulations",
    ],
  },
  {
    week: "Tools",
    title: "Industry Tools & Platforms",
    lessons: [
      "Splunk + AI plugins for log analysis",
      "Darktrace and AI-native security platforms",
      "Python security libraries: Scapy, Impacket, scikit-learn",
      "OpenAI and LangChain for security automation",
    ],
  },
  {
    week: "Portfolio",
    title: "Portfolio Projects",
    lessons: [
      "Project 1: Network anomaly detection dashboard",
      "Project 2: AI-powered phishing email classifier",
      "Project 3: Automated threat intelligence report generator",
    ],
  },
];

export default function ProgramCurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            Curriculum
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            Program Curriculum
          </h2>
          <p className="text-[#475569] text-base mt-3 max-w-[560px] mx-auto">
            A structured, hands-on curriculum built by practitioners for
            practitioners.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-3">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-[#0f172a] text-white text-[11px] font-semibold px-3 py-1 rounded-full shrink-0">
                    {mod.week}
                  </span>
                  <span className="font-semibold text-[#0f172a] text-base">
                    {mod.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#727272] shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-gray-100">
                  <ul className="flex flex-col gap-3 pt-4">
                    {mod.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex items-start gap-3 text-[#475569] text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d51420] mt-1.5 shrink-0" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
