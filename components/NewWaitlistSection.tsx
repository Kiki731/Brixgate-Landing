"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwbROYvncdflkNnYuFQ9x-LRlDH5-ViiOKtnDnvQvC0yEkIaqKiMpmy_7Zw2FbVRZ6Now/exec";

const waitlistStyles = `
  @media (max-width: 1024px) {
    .waitlist-section { min-height: unset !important; padding-top: 40px !important; }
    .waitlist-lady { display: none !important; }
    .waitlist-curve { border-top-left-radius: 60px !important; height: 90% !important; }
    .waitlist-grid { flex-direction: column !important; padding-bottom: 40px !important; }
    .waitlist-left { margin-top: 0 !important; }
    .waitlist-right { width: 100% !important; padding-top: 24px !important; padding-bottom: 24px !important; }
    .waitlist-heading { font-size: 22px !important; max-width: 100% !important; }
  }
`;

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

export default function NewWaitlistSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus("loading");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("program", form.program);
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", program: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
    <style>{waitlistStyles}</style>
    {/**
     * LAYER 1 — Main Wrapper
     * Dark navy bg, large padding-top creates space above the curved text box
     * where the lady's head will "pop up" through the border-radius opening.
     */}
    <section
      className="waitlist-section"
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        paddingTop: "80px",
        marginTop: "32px",
        minHeight: "900px",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/**
       * LAYER 1b — Blue curved background shape
       * Absolute, bottom-anchored, full-width, 90% height.
       * This gets the dark navy bg + large border-top-left-radius.
       * z-index: 1 so it sits above the raw section bg but below the lady.
       */}
      <div
        className="waitlist-curve"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "82%",
          backgroundColor: "#0B1221",
          borderTopLeftRadius: "350px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/**
       * LAYER 2 — Lady image
       * Pinned to bottom-left, z-index 2 (above the curved bg shape).
       * Her head rises into the empty padding-top space and peeks above
       * the curved top-left opening.
       */}
      <img
        className="waitlist-lady"
        src="/images/lady-bg.png"
        alt="AI in My Field student"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          maxWidth: "780px",
          width: "57%",
          zIndex: 2,
          objectFit: "contain",
          objectPosition: "bottom left",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/**
       * LAYER 3 — Foreground content grid
       * Centered max-width container, two columns, z-index 10.
       */}
      <div
        className="waitlist-grid"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          alignItems: "stretch",
        }}
      >
        {/**
         * Left Column — Text container (fully transparent)
         * No background, no border-radius, no large padding.
         * Flexbox centers content vertically so the lady's face is visible above.
         */}
        <div
          className="waitlist-left"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "400px",
          }}
        >
          {/* Inner text safety-net box — navy bg keeps text readable over the lady */}
          <div
            style={{
              backgroundColor: "#0B1221",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
          {/* WAITLIST label */}
          <p
            className="text-[#f8f8f8] font-medium tracking-widest uppercase"
            style={{ fontSize: "12px" }}
          >
            waitlist
          </p>

          {/* Main heading — gradient */}
          <h2
            className="waitlist-heading font-[family-name:var(--font-Segoe UI), system-ui, sans-serif] font-medium leading-tight"
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              backgroundColor: "#FFFFFF",
              // backgroundImage: "linear-gradient(to right, #eb004f, #ff7544)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              maxWidth: "374px",
            }}
          >
            Join AI in My Field Waitlist
          </h2>

          {/* Body paragraph */}
          <p
            className="text-[#9da4b3] font-normal text-[14px] lg:text-base leading-relaxed"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            AI is rapidly transforming how work is done across fields like cybersecurity, software
            engineering, product development, data, and cloud infrastructure.
          </p>
          <p
            className="text-[#9da4b3] font-normal text-[14px] lg:text-base leading-relaxed"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            This program explores how artificial intelligence is applied within real professional domains.
          </p>
          <p
            className="text-[#9da4b3] font-normal text-[14px] lg:text-base leading-relaxed"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            Complete the short
            form to join the waitlist and be notified when applications open.
          </p>

          {/* Stats card */}
          {/* <div
            className="inline-flex items-center rounded-xl gap-3 mt-2 w-fit"
            style={{ backgroundColor: "#172435", padding: "12px 20px" }}
          >
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
          </div> */}
          {/* end inner text safety-net box */}
        </div>
        </div>

        {/* Right Column — Transparent wrapper; white form card inside */}
        <div
          className="waitlist-right"
          style={{
            width: "496px",
            flexShrink: 0,
            alignSelf: "flex-start",
            paddingTop: "140px",
            paddingBottom: "60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              overflow: "hidden",
            }}
          >
            <div className="px-8 pt-6 pb-8">
              {/* Card heading */}
              <h3 className="font-[family-name:var(--font-dm-sans)] font-medium text-2xl text-[#222] mb-1">
                Get Early Access
              </h3>
              <p className="text-[#727272] text-sm mb-6">
                Join the waitlist to receive priority updates and be among the first to enroll in
                our AI courses.
              </p>

              {/* Form fields */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#222]">Program</label>
                  <div className="relative">
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 h-12 text-sm outline-none focus:border-[#172435] transition-colors text-gray-400 appearance-none bg-white pr-10"
                    >
                      <option value="" disabled>Select a program</option>
                      <option>General AI</option>
                      <option>AI in Data Analytic Intelligence</option>
                      <option>AI in Cyber Security</option>
                      <option>AI in Software Engineering</option>
                      <option>AI in Product Management</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="#737373" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {status === "success" && (
                  <p className="text-green-600 text-sm font-medium text-center">You&apos;re on the waitlist! We&apos;ll be in touch soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}

                <p className="text-[#727272] text-xs mt-2">
                  Join 1,200+ future AI professionals already on the waitlist.
                </p>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#d51420] hover:bg-[#b8111e] disabled:opacity-60 transition-colors text-white font-semibold text-base py-4 rounded-lg flex items-center justify-center gap-2"
                >
                  {status === "loading" ? "Submitting…" : "Join the Waitlist"}
                  {status !== "loading" && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
