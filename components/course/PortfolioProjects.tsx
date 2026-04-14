"use client";
import Image from "next/image";

const projects = [
  {
    title: "Phishing Email Detection Model",
    desc: "Train an AI-based system to identify suspicious phishing emails using patterns, keywords, and sender behavior.",
    image: "/images/Rectangle 152.png",
  },
  {
    title: "Malware Classification Project",
    desc: "Use machine learning techniques to categorize and identify different types of malware threats.",
    image: "/images/Rectangle 153.png",
  },
  {
    title: "Network Threat Monitoring Dashboard",
    desc: "Build a dashboard that helps monitor unusual network activity and security alerts in real time.",
    image: "/images/Rectangle 153 a.png",
  },
  {
    title: "AI-Powered Intrusion Detection Concept",
    desc: "Work on a security model designed to detect unauthorized access attempts using intelligent pattern recognition.",
    image: "/images/Rectangle 153 b.png",
  },
];

export default function PortfolioProjects() {
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
          Build practical experience by working on projects inspired by real cybersecurity and AI-driven security challenges.
        </p>

        {/* 4-column project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col gap-3">
              <h3
                className="text-[#222] text-[15px] font-semibold leading-snug"
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
              <div className="relative w-full h-[160px] rounded-xl overflow-hidden mt-auto">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-[#f5f0ff] rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[#222] text-[14px] leading-relaxed max-w-[600px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            These projects help you apply your knowledge, build a strong portfolio, and gain confidence to solve real-world security challenges using AI powered solutions.
          </p>
          <a
            href="#enroll"
            onClick={(e) => { e.preventDefault(); document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-semibold text-sm px-5 py-2.5 rounded-lg whitespace-nowrap"
          >
            Start Building Your Skills →
          </a>
        </div>
      </div>
    </section>
  );
}
