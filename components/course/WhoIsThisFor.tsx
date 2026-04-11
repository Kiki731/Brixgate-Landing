const professions = [
  "Software Engineers",
  "Security Analysts",
  "Network Engineers",
  "IT Administrators",
  "SOC Analysts",
  "Penetration Testers",
  "Data Scientists",
  "Risk & Compliance Officers",
  "DevSecOps Engineers",
  "CISOs & Security Leaders",
];

const eligibility = [
  "Basic understanding of how the internet and networks work",
  "Familiarity with any programming language (Python preferred)",
  "No prior AI or machine learning experience required",
  "Access to a laptop with at least 8GB RAM",
];

export default function WhoIsThisFor() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            Audience
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            Who Is This For?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Profession pills */}
          <div>
            <h3 className="font-semibold text-[#0f172a] text-lg mb-5">
              Built for these professionals
            </h3>
            <div className="flex flex-wrap gap-3">
              {professions.map((p) => (
                <span
                  key={p}
                  className="bg-white border border-gray-200 text-[#0f172a] text-sm font-medium px-4 py-2 rounded-full shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div>
            <h3 className="font-semibold text-[#0f172a] text-lg mb-5">
              Entry requirements
            </h3>
            <ul className="flex flex-col gap-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#d51420] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-2.5 h-2.5"
                      viewBox="0 0 10 8"
                      fill="none"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#475569] text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
