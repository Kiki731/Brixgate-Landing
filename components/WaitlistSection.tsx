"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

function StatPill({
  top,
  bottom,
  divider = true,
}: {
  top: string;
  bottom: string;
  divider?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center leading-tight">
        <span className="text-white font-semibold text-[15px] leading-tight">{top}</span>
        <span className="text-[#afafae] text-[10px] font-[family-name:var(--font-inter)]">
          {bottom}
        </span>
      </div>
      {divider && <div className="w-px h-[34px] bg-white/40" />}
    </div>
  );
}

export default function WaitlistSection() {
  const [activeTab, setActiveTab] = useState<"signup" | "login">("signup");

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0B1221",
        borderTopLeftRadius: "1400px",
        backgroundImage: "url('/images/waitlist-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "min(100%, 1440px) auto",
        minHeight: "900px",
      }}
    >
      {/* Dot Grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative cross marks */}
      <div className="absolute top-10 right-[480px] pointer-events-none opacity-30">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 0V22M0 11H22" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-[420px] pointer-events-none opacity-20">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0V8M0 4H8" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Max-width Foreground Container ─────────────────────────── */}
      <div className="relative max-w-[1280px] mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-end gap-8 lg:gap-10">

        {/* ── Left Column: text with solid navy background safety net ── */}
        <div className="flex-1 max-w-[600px] bg-[#0f172a] rounded-2xl p-8 flex flex-col gap-5">
          <p className="text-[#f8f8f8] text-xs font-medium tracking-widest uppercase">
            waitlist
          </p>

          <h2
            className="font-[family-name:var(--font-montserrat)] font-normal text-[40px] leading-tight"
            style={{
              backgroundImage: "linear-gradient(to right, #eb004f, #ff7544)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Join AI in My Field Waitlist
          </h2>

          <p
            className="text-[#9da4b3] font-semibold text-base leading-relaxed"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            AI is rapidly transforming how work is done across fields like cybersecurity, software
            engineering, product development, data, and cloud infrastructure.
          </p>

          <p
            className="text-[#9da4b3] font-semibold text-base leading-relaxed"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            This program explores how artificial intelligence is applied within real professional
            domains. Complete the short form to join the waitlist and be notified when applications
            open.
          </p>

          {/* Stats Card */}
          <div className="inline-flex items-center bg-[#172435] rounded-xl px-5 py-3 gap-3 mt-2 w-fit">
            <StatPill top="Beginner" bottom="Track" />
            <StatPill top="1,200" bottom="Learners" />
            <div className="flex flex-col items-center leading-tight">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 fill-[#fbbf24]" viewBox="0 0 14 13">
                  <path d="M7 0L8.573 4.84H13.657L9.542 7.83L11.115 12.67L7 9.68L2.885 12.67L4.458 7.83L0.343 4.84H5.427L7 0Z" />
                </svg>
                <span className="text-[#f59e0b] font-semibold text-[15px]">4.9</span>
              </span>
              <span className="text-[#afafae] text-[10px] font-[family-name:var(--font-inter)]">
                Ratings
              </span>
            </div>
          </div>
        </div>

        {/* ── Right Column: transparent wrapper, white form card inside ── */}
        <div className="w-full lg:w-[496px] shrink-0">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Tab Bar */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-4 text-sm font-bold transition-colors ${
                  activeTab === "signup"
                    ? "text-[#000] border-b-2 border-[#000]"
                    : "text-[#727272] font-normal"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-4 text-sm transition-colors ${
                  activeTab === "login"
                    ? "text-[#000] font-bold border-b-2 border-[#000]"
                    : "text-[#727272] font-normal"
                }`}
              >
                Log In
              </button>
            </div>

            <div className="px-8 pt-6 pb-8">
              {/* Heading */}
              <h3 className="font-[family-name:var(--font-dm-sans)] font-medium text-2xl text-[#222] mb-1">
                Get Early Access
              </h3>
              <p className="text-[#727272] text-sm mb-6">
                Join the waitlist to receive priority updates and be among the first to enroll in
                our AI courses.
              </p>

              {/* Form Fields */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Program</label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors text-gray-400 appearance-none bg-white pr-10"
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      <option>General AI</option>
                      <option>AI in Data Analytic Intelligence</option>
                      <option>AI in Cyber Security</option>
                      <option>AI in Software Engineering</option>
                      <option>AI in Product Management</option>
                      <option>AI in DevOps</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#737373"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-[#727272] text-xs mt-4 mb-4 leading-snug">
                By clicking Join the Waitlist, I agree to{" "}
                <a href="#" className="underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>

              <p className="text-[#727272] text-xs mb-4">
                Join 1,200+ future AI professionals already on the waitlist.
              </p>

              <button className="w-full bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-semibold text-base py-4 rounded-lg flex items-center justify-center gap-2 mb-4">
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Divider */}
              <div className="relative flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-[#222] bg-white px-2">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Google signup */}
              <button className="w-full border border-gray-200 rounded-lg py-3.5 flex items-center justify-center gap-3 text-[#222] text-sm hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Signup with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
