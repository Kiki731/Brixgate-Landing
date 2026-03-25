import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden relative">
      {/* Background map image */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/images/Hero-bg.png"
          alt=""
          width={1200}
          height={800}
          className="object-contain opacity-80"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-14 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-4 lg:min-h-[600px]">
        {/* ── Left Column ─────────────────────────────────────────── */}
        <div className="flex-1 max-w-[600px]">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 bg-[#f8f8f8] border border-gray-200 rounded-full px-3 py-1.5 mb-7 anim-fade-up delay-100">
            <span className="bg-[#0f172a] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              {/* spark icon */}
              {/* <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M6 0L7 4H11L8 6.5L9 10.5L6 8L3 10.5L4 6.5L1 4H5L6 0Z" fill="white" />
              </svg> */}
              New
            </span>
            <span className="text-[#0f172a] text-[13px] font-normal">
              No. 1 Artificial Intelligence Infrastructure
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-[family-name:var(--font-dm-sans)] font-medium text-[42px] lg:text-[64px] leading-none text-[#101010] mb-6 anim-fade-up delay-200">
            AI in My Field
          </h1>

          {/* Subtitle */}
          <p className="text-[#222222] text-base lg:text-lg leading-relaxed mb-10 max-w-[580px] anim-fade-up delay-300">
            AI is reshaping modern work. Explore how it integrates into cybersecurity, software
            engineering, product development, data intelligence, and cloud infrastructure.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-4 anim-fade-up delay-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative -ml-2 first:ml-0">
                  <Image src={`/images/hero-avatar-${n}.png`} alt={`Professional ${n}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[#282828] text-sm font-[family-name:var(--font-inter)] max-w-[180px]">
              Over <span className="text-[#FF580C]">12k+</span> professionals trained
            </span>
          </div>

          {/* Stats Pill */}
          <div className="mt-8 inline-flex items-center gap-5 bg-[#a855f7] rounded-xl px-6 py-4 anim-fade-up delay-500">
            <div className="flex flex-col items-center leading-tight">
              <span className="text-white font-bold text-[12px] lg:text-[15px]">Over 50+</span>
              <span className="text-white/90 text-[10px] font-[family-name:var(--font-inter)]">Instructors</span>
            </div>
            <div className="w-px h-[34px] bg-white/40" />
            <div className="flex flex-col items-center leading-tight">
              <span className="text-white font-bold text-[12px] lg:text-[15px]">Over 12,000+</span>
              <span className="text-white/90 text-[10px] font-[family-name:var(--font-inter)]">Learners</span>
            </div>
            <div className="w-px h-[34px] bg-white/40" />
            <div className="flex flex-col items-center leading-tight">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 14 13">
                  <path d="M7 0L8.573 4.84H13.657L9.542 7.83L11.115 12.67L7 9.68L2.885 12.67L4.458 7.83L0.343 4.84H5.427L7 0Z" />
                </svg>
                <span className="text-white font-bold text-[12px] lg:text-[15px]">4.9</span>
              </span>
              <span className="text-white/90 text-[10px] font-[family-name:var(--font-inter)]">Ratings</span>
            </div>
          </div>
        </div>

      </div>

      {/* Desktop only: pinned to right edge of the section */}
      <div className="hidden lg:block absolute right-0 bottom-0 z-10 anim-slide-right delay-300">
        <Image
          src="/images/hero-right-panel4.png"
          alt="Applied Artificial Intelligence — Cohort 1.2"
          width={740}
          height={637}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
