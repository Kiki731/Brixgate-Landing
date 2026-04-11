"use client";

const steps = [
  {
    step: "01",
    title: "Submit Your Application",
    description:
      "Fill out the enrollment form with your details, current role, and why you want to join. Takes less than 3 minutes.",
  },
  {
    step: "02",
    title: "Get Your Confirmation",
    description:
      "You'll receive a confirmation email within 24 hours with your cohort details, payment link, and pre-course prep materials.",
  },
  {
    step: "03",
    title: "Join the Cohort",
    description:
      "Log in to our platform on cohort start day, meet your cohort, and begin your hands-on AI security training.",
  },
];

export default function HowToApply() {
  const scrollToEnroll = () => {
    const el = document.getElementById("enroll");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            How To Apply
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col gap-4">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+32px)] right-[-50%] h-px bg-gray-200" />
              )}
              <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {s.step}
              </div>
              <h3 className="font-semibold text-[#0f172a] text-base">
                {s.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={scrollToEnroll}
            className="bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white font-semibold text-sm px-8 py-3.5 rounded-xl"
          >
            Apply Now — Cohort 1 Open
          </button>
        </div>
      </div>
    </section>
  );
}
