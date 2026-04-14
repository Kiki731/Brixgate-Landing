"use client";

const steps = [
  { num: 1, title: "Submit Application", desc: "Fill in your application by providing your details." },
  { num: 2, title: "Reserve your seat", desc: "Select the course that fits your goals." },
  { num: 3, title: "Start Learning", desc: "Begin your Brixgate learning journey." },
];

const professions = [
  { label: "Security Analyst", color: "bg-[#e0f2fe] text-[#0369a1]" },
  { label: "Penetration Testers", color: "bg-[#fce7f3] text-[#9d174d]" },
  { label: "SOC Engineers", color: "bg-[#f0fdf4] text-[#166534]" },
  { label: "Cloud Security Engineers", color: "bg-[#fef9c3] text-[#854d0e]" },
  { label: "Incidence Responders", color: "bg-[#fff7ed] text-[#9a3412]" },
  { label: "GRC Professionals", color: "bg-[#f0fdf4] text-[#14532d]" },
];

const eligibility = [
  "Experienced cybersecurity professional",
  "Interest in using AI in cybersecurity",
  "Problem-solving mindset",
];

export default function HowToApply() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-10">

        {/* Left: How To Apply */}
        <div className="flex-1">
          <h2
            className="text-[#222] text-[40px] font-medium tracking-[-0.05em] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            How To Apply
          </h2>
          <p
            className="text-[#727272] text-[14px] mb-8"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            Get started in 4 easy steps
          </p>

          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <div key={step.num}>
                <div className="bg-white rounded-xl border border-[#f0f0f0] px-5 py-4 flex items-start gap-4 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#7c3aed] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <p
                      className="text-[#222] text-[15px] font-semibold"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-[#727272] text-[13px] mt-0.5"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="ml-9 my-1 text-[#ccc] text-lg leading-none">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Who Is This For */}
        <div className="flex-1">
          <h2
            className="text-[#222] text-[40px] font-medium tracking-[-0.05em] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Who Is This Program For?
          </h2>
          <p
            className="text-[#727272] text-[14px] mb-8"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            This program is built for professionals, not beginners
          </p>

          {/* Profession grid */}
          <div className="bg-white rounded-xl border border-[#f0f0f0] shadow-sm p-5 mb-6">
            <div className="grid grid-cols-2 gap-3">
              {professions.map((p) => (
                <div
                  key={p.label}
                  className={`${p.color} rounded-lg px-4 py-3 text-sm font-medium`}
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div>
            <p
              className="text-[#222] text-[15px] font-semibold mb-3"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
            >
              Eligibility Criteria
            </p>
            <ul className="flex flex-col gap-2">
              {eligibility.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[#475569] text-sm"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#475569] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
