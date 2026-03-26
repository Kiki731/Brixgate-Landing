import { ArrowRight } from "lucide-react";

const industries = [
  { label: "Engineering", icon: "⚙️" },
  { label: "Human Resources", icon: "👤" },
  { label: "Finance", icon: "🏦" },
  { label: "Operations", icon: "📋" },
  { label: "Marketing", icon: "📣" },
  { label: "Legal", icon: "🏛️" },
  { label: "Healthcare", icon: "🏥" },
  { label: "Education", icon: "🎓" },
];

export default function AIInMyFieldSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left Text */}
          <div className="w-full lg:w-[50%] max-w-[560px]">
            <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-4">
              AI-First Philosophy
            </p>
            <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-4xl text-[#222] leading-tight mb-4">
              AI in My Field
            </h2>
            <p className="text-[#222] text-[14px] lg:text-xl leading-relaxed mb-8">
              AI is reshaping modern work. Explore how it integrates into cybersecurity, software
              engineering, product development, data intelligence, and cloud infrastructure.
            </p>

            {/* Browser Mockup Cards — stacked like notebooks */}
            <div className="relative pb-10">
              {/* Card 1 — back, peeks out behind the front card */}
              <div
                className="absolute inset-0 rounded-xl border border-gray-100 bg-[#fbfbfb] overflow-hidden"
                style={{
                  zIndex: 1,
                  transform: "rotate(2deg) translateY(10px) translateX(6px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div className="bg-white flex items-center gap-2 px-4 py-2 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff2949]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#222] text-xl leading-relaxed">
                    Work is evolving and AI is at the center of it. What used to take hours can now
                    take minutes. Let&apos;s help you apply AI to your actual work.
                    
                  </p>
                  <div className="flex gap-3 mt-3">
                    <div className="h-2 rounded bg-gray-200 w-44" />
                    <div className="h-2 rounded bg-gray-200 w-28" />
                  </div>
                </div>
              </div>

              {/* Card 2 — front, fully visible on top */}
              <div
                className="relative rounded-xl border border-gray-100 bg-[#fbfbfb] overflow-hidden"
                style={{
                  zIndex: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                }}
              >
                <div className="bg-white flex items-center gap-2 px-4 py-2 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff2949]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#222] font-semibold text-[18px] leading-relaxed">
                    Artificial Intelligence is reshaping how professionals work in their chosen
                    field. From automating repetitive tasks to generating insights and improving
                    decision-making, AI is becoming an essential skill—not an option.
                  </p>
                  <div className="flex gap-3 mt-3">
                    <div className="h-1.5 rounded bg-gray-200 w-40" />
                    <div className="h-1.5 rounded bg-gray-200 w-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats visual + info card */}
          <div className="w-full lg:w-[44%] max-w-[480px] relative">
            <div className="bg-[#f6f6f6] rounded-2xl p-6 relative overflow-hidden">
              {/* Purple circles */}
              <div className="absolute top-0 right-0 w-[510px] h-[510px] rounded-full bg-[#f5ebff] opacity-50 translate-x-1/4 -translate-y-1/4" />
              <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full bg-[#f0e1ff] opacity-50 translate-x-1/4 -translate-y-1/4" />

              <div className="relative">
                {/* Info card */}
                <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#eeedf d] p-3 rounded-xl">
                      <div className="w-8 h-8 bg-[#eeedfd] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2L14 8H20L15.5 11.5L17.5 17.5L12 14L6.5 17.5L8.5 11.5L4 8H10L12 2Z"
                            stroke="#4749c1"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#727272] text-sm">Cohort 1.2</p>
                      <h3 className="text-[#222] font-semibold text-3xl leading-tight">
                        Applied Artificial Intelligence
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-3">
                      <div className="h-4 rounded bg-gray-100 w-44" />
                      <div className="h-4 rounded bg-gray-100 w-28" />
                    </div>
                    <div className="flex gap-3">
                      <div className="h-4 rounded bg-gray-100 w-28" />
                      <div className="h-4 rounded bg-gray-100 w-44" />
                    </div>
                  </div>
                </div>

                {/* Stats card */}
                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <BookIcon />
                    <div>
                      <p className="text-[#afafae] text-base">AI Courses</p>
                      <p className="text-[#222] font-semibold text-2xl">100+ AI use cases</p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[#edededo]" />
                  <div className="flex items-center gap-2">
                    <UserAddIcon />
                    <div>
                      <p className="text-[#afafae] text-base">Learners</p>
                      <p className="text-[#222] font-semibold text-2xl">12,000+</p>
                    </div>
                  </div>
                </div>

                {/* +12K badge */}
                <div className="absolute -left-8 bottom-24 bg-[#fff3ea] rounded-xl px-3 py-2">
                  <span className="text-black font-semibold text-xl">+12K</span>
                </div>

                {/* Speech bubble */}
                <div className="mt-4 bg-[#a855f7] text-white text-xl font-normal rounded-xl rounded-bl-none px-4 py-2 inline-block">
                  Students
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry category pills */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-4 bg-white hover:shadow-sm transition-shadow cursor-pointer"
            >
              <span className="text-xl">{ind.icon}</span>
              <span className="font-semibold text-[#222] text-base">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookIcon() {
  return (
    <svg className="w-9 h-9 text-[#222]" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserAddIcon() {
  return (
    <svg className="w-9 h-9 text-[#222]" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14C19.7 14.2 21 15.1 21 17V19H23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 20V18C1 15.79 4.69 14 9 14C13.31 14 17 15.79 17 18V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
