"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CourseFAQItem } from "@/lib/courses-data";

export default function CourseFAQ({ faqs }: { faqs: CourseFAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-center text-[22px] sm:text-[32px] lg:text-[40px] font-medium tracking-[-0.05em] mb-10"
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
