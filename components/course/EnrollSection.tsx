"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzXfb2UYf4Bk1vCkQWFMPP_IYXMONrB6oV_ZDtc9ZEfcFi1zFyP5n1gG2WTAp2_7D/exec";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnrollSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone ? `(${form.phone})` : "");
    formData.append("track", "AI in Cyber Security & Intelligence");
    formData.append("role", form.role);

    fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body: formData }).catch(() => {});
    setStatus("success");
    setTimeout(() => setStatus("idle"), 40000);
  };

  return (
    <section id="enroll" className="py-16 bg-[#0f172a]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[600px] mx-auto text-center mb-10">
          <p className="text-[#a855f7] text-xs font-medium tracking-widest uppercase mb-3">
            Enroll Now
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-bold text-[32px] lg:text-[40px] text-white leading-tight mb-4">
            Secure Your Spot in Cohort 1
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Cohort 1 starts 2 May 2026. Applications close 30 April 2026. Limited spots available.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl p-8 max-w-[560px] mx-auto"
          style={{ minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: status === "success" ? "center" : "flex-start" }}
        >
          {status === "success" ? (
            <div className="text-center flex flex-col items-center gap-4 py-6">
              <div className="w-14 h-14 rounded-full bg-[#f0fdf4] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#16a34a]" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0f172a] text-xl">You&apos;re in!</h3>
              <p className="text-[#475569] text-sm max-w-[340px] leading-relaxed">
                Thanks for applying to Cohort 1. Check your inbox — we&apos;ll send your confirmation and next steps within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[#0f172a] font-medium text-sm mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adebayo Okafor"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d51420]/30 focus:border-[#d51420]"
                />
              </div>
              <div>
                <label className="block text-[#0f172a] font-medium text-sm mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d51420]/30 focus:border-[#d51420]"
                />
              </div>
              <div>
                <label className="block text-[#0f172a] font-medium text-sm mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d51420]/30 focus:border-[#d51420]"
                />
              </div>
              <div>
                <label className="block text-[#0f172a] font-medium text-sm mb-1.5">Current Role</label>
                <input
                  type="text"
                  placeholder="e.g. SOC Analyst"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d51420]/30 focus:border-[#d51420]"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex items-center justify-center gap-2 bg-[#d51420] hover:bg-[#b8111e] disabled:opacity-60 transition-colors text-white font-semibold text-sm px-6 py-3.5 rounded-xl mt-2"
              >
                {status === "submitting" ? "Submitting…" : "Enroll Now — Secure Your Spot"}
                {status !== "submitting" && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
