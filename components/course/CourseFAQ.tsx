"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need to already work in cybersecurity?",
    a: "Yes — this program is designed for working cybersecurity professionals who want to augment their skills with AI. You should already have a foundational understanding of security concepts like networks, threat types, and basic tooling. We don't teach cybersecurity basics; we teach you how AI changes what you can do with what you already know.",
  },
  {
    q: "What does \"Live Instructor-Led\" mean exactly?",
    a: "Every session runs live online via video — not pre-recorded. You'll interact directly with the instructor, ask questions in real time, and work through exercises with your cohort. Sessions are also recorded so you can review them, but the primary experience is live.",
  },
  {
    q: "Will I need to pay for AI tools on top of the fee?",
    a: "No. The program is structured around tools with free tiers or open-source options. Ollama (local AI), open-source SIEM setups, and free-tier ChatGPT are used throughout. Where a paid tool is demonstrated, a free alternative is always provided.",
  },
  {
    q: "Is the certificate recognised by employers?",
    a: "The certificate is issued by Brixgate and tied to a verifiable capstone project. It's designed to be portfolio-evidence, not just a participation badge. Increasingly, employers in security value demonstrated capability over credentials — the project artefact is the real differentiator.",
  },
  {
    q: "Can my company pay on my behalf?",
    a: "Yes. We can issue an invoice to your company or employer. Contact us at we@brixgate.com with your company's billing details and we'll arrange it. Corporate group enrollments (3+ seats) also receive a discount.",
  },
];

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-center text-[32px] lg:text-[40px] font-medium tracking-[-0.05em] mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="max-w-[800px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span
                  className="text-[#222] text-[15px] pr-4"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#727272] shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-[#f4f4f4]">
                  <p
                    className="text-[#475569] text-[14px] leading-relaxed pt-4"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
