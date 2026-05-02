"use client";
import Image from "next/image";

const features = [
  "6 live instructor-led sessions",
  "Verifiable certificate of completion",
  "Full access to all course materials",
  "Access to Brixgate Expert Network community",
  "Hands-on labs every session",
  "All tools run locally — no extra subscriptions",
  "Capstone project with instructor feedback",
];

function CircleCheck() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-[1px]"
    >
      <circle cx="9" cy="9" r="8" stroke="#6d28d9" strokeWidth="1.5" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 7"
        stroke="#6d28d9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection({ checkoutHref }: { checkoutHref?: string }) {
  const scrollToEnroll = () => {
    const el = document.getElementById("enroll");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── Mobile-only plain heading ── */}
        <h2
          className="block lg:hidden text-[#222] text-[22px] sm:text-[32px] font-medium tracking-[-0.05em] mb-8"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          One price. Everything included.
        </h2>

        {/* gap-0 so the left blob and card are flush — no space between them */}
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:justify-center">

          {/* ── Left: Hero Text — desktop only ── */}
          <div className="hidden lg:block lg:w-auto lg:shrink-0 relative px-8 py-10">
            {/* right corners square so it sits flush against the pricing card; left-only stroke */}
            <div className="absolute inset-0 bg-[#efefef] rounded-tl-2xl rounded-bl-2xl border-l-[6px] border-[#727272]" />
            <h2
              className="relative z-10 text-[#1a1a1a] text-[38px] font-medium leading-[1.2] tracking-[-0.03em] whitespace-nowrap py-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              One price.<br />Everything included.
            </h2>
          </div>

          {/* ── Right: Pricing Card — fully separate, all edges rounded ── */}
          <div className="w-full lg:w-[700px] lg:shrink-0 relative">

            {/* fix 6: sparks replaced with the actual PNG */}
            <div className="absolute -top-9 right-0 z-30 pointer-events-none">
              <Image
                src="/images/Group 1171276387.png"
                width={56}
                height={56}
                alt=""
              />
            </div>

            {/* all four corners rounded — fully independent card */}
            <div className="relative border-[16px] border-[#A855F7] rounded-[24px] bg-white overflow-hidden">

              {/* "Pricing" tab badge */}
              <div
                className="absolute top-0 right-0 bg-[#A855F7] text-white text-lg font-semibold px-6 py-2.5 rounded-bl-[20px] z-10"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Pricing
              </div>

              {/* Card body */}
              <div className="px-7 pt-12 pb-7 flex flex-col gap-4">

                {/* fix 3 + fix 5: smaller prices, each strikethrough sits directly below its price */}
                <div className="flex items-start gap-5 flex-wrap">

                  {/* NGN column: price on top, strikethrough directly below */}
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline">
                      <span
                        className="text-[#1a1a1a] text-[19px] font-bold leading-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >₦</span>
                      <span
                        className="text-[#1a1a1a] text-[44px] font-bold leading-none tracking-[-0.03em]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >50,000</span>
                      <span
                        className="text-[#1a1a1a] text-[19px] font-bold leading-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >.00</span>
                    </div>
                    <span
                      className="text-[#dc2626] text-[14px] font-medium line-through"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >₦120,000</span>
                  </div>

                  {/* Separator — aligned to top (main price row) */}
                  <span className="text-[#94a3b8] text-2xl font-light mt-2">/</span>

                  {/* USD column: price on top, strikethrough directly below */}
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline">
                      <span
                        className="text-[#1a1a1a] text-[19px] font-bold leading-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >$</span>
                      <span
                        className="text-[#1a1a1a] text-[44px] font-bold leading-none tracking-[-0.03em]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >36</span>
                      <span
                        className="text-[#1a1a1a] text-[19px] font-bold leading-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >.22</span>
                    </div>
                    <span
                      className="text-[#dc2626] text-[14px] font-medium line-through"
                      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                    >$86.97</span>
                  </div>
                </div>

                {/* Subtitle */}
                <p
                  className="text-[#222222] text-[14px]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  one-time payment · full 3-week program
                </p>

                {/* Dashed divider */}
                <hr className="border-dashed border-[#cbd5e1]" />

                {/* Features — 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-1">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CircleCheck />
                      <span
                        className="text-[#334155] text-[13px] leading-[1.5]"
                        style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enroll Now button */}
                {checkoutHref ? (
                  <a
                    href={checkoutHref}
                    className="w-full py-4 rounded-lg text-white font-semibold text-[15px] mt-2 hover:opacity-95 transition-opacity flex items-center justify-center"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      background: "linear-gradient(to right, #b01818 0%, #d51420 20%, #d51420 100%)",
                      boxShadow: "inset 3px 0 10px rgba(0,0,0,0.18)",
                    }}
                  >
                    Enroll Now
                  </a>
                ) : (
                  <button
                    onClick={scrollToEnroll}
                    className="w-full py-4 rounded-lg text-white font-semibold text-[15px] mt-2 hover:opacity-95 transition-opacity"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      background: "linear-gradient(to right, #b01818 0%, #d51420 20%, #d51420 100%)",
                      boxShadow: "inset 3px 0 10px rgba(0,0,0,0.18)",
                    }}
                  >
                    Enroll Now
                  </button>
                )}
              </div>

              {/* Footer ribbon */}
              <div className="bg-[#A855F7] py-3 px-7 text-center">
                <p
                  className="text-white text-sm font-bold tracking-wide"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  Cohort sizes are limited. Enrollment closes once cohort is full.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
