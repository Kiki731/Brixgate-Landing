"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need prior experience in cybersecurity or AI?",
    a: "No prior AI or machine learning experience is required. We do recommend a basic understanding of how networks work and familiarity with any programming language, ideally Python. Our instructors will guide you through everything else.",
  },
  {
    q: "Is this course live or self-paced?",
    a: "The program is live online — you'll join daily sessions with instructors and your cohort. All sessions are recorded, so if you miss one, you can catch up within 24 hours. Self-paced review access continues for 3 months after the cohort ends.",
  },
  {
    q: "What time are the live sessions?",
    a: "Sessions run weekdays (Monday–Friday) from 7:00 PM – 9:00 PM WAT, with Saturday review sessions from 10:00 AM – 12:00 PM WAT. This schedule is designed for working professionals.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Upon successful completion of the program and submission of your capstone project, you'll receive a Brixgate Certificate in AI-Powered Cybersecurity. The certificate is digitally verifiable and can be added to your LinkedIn profile.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a full refund if you request it within 48 hours of the cohort start date. After that, we do not offer refunds but will defer your enrollment to the next available cohort.",
  },
];

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0f172a] text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#727272] shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-[#475569] text-sm leading-relaxed pt-4">
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
