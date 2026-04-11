"use client";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "25 live sessions (2 weeks, weekdays + weekends)",
  "Hands-on projects & real-world datasets",
  "Certificate of completion",
  "Access to recorded sessions for 3 months",
  "Private Slack community access",
  "1-on-1 career mentorship session",
  "Portfolio review by industry practitioners",
  "Job placement support",
];

export default function PricingSection() {
  const scrollToEnroll = () => {
    const el = document.getElementById("enroll");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            Investment
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            Program Pricing
          </h2>
        </div>

        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Naira card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-6">
            <div>
              <span className="text-[#727272] text-sm font-medium">Nigerian Naira</span>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-[#0f172a] font-bold text-[40px] leading-none">₦50,000</span>
                <span className="text-[#727272] text-sm line-through mb-1">₦89,999</span>
              </div>
              <span className="inline-block bg-[#fef2f2] text-[#d51420] text-xs font-semibold px-2.5 py-1 rounded-full mt-2">
                Early Bird — Save 44%
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                  <span className="text-[#475569] text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToEnroll}
              className="mt-auto flex items-center justify-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-semibold text-sm px-6 py-3.5 rounded-xl"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* USD card */}
          <div className="bg-[#0f172a] rounded-2xl border border-[#1e2d3d] p-8 flex flex-col gap-6">
            <div>
              <span className="text-white/50 text-sm font-medium">US Dollar (International)</span>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-white font-bold text-[40px] leading-none">$36</span>
                <span className="text-white/40 text-sm line-through mb-1">$64.94</span>
              </div>
              <span className="inline-block bg-[#d51420]/20 text-[#ff6b6b] text-xs font-semibold px-2.5 py-1 rounded-full mt-2">
                Early Bird — Save 44%
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#4ade80] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToEnroll}
              className="mt-auto flex items-center justify-center gap-2 bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-semibold text-sm px-6 py-3.5 rounded-xl"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
