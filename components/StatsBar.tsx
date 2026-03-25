export default function StatsBar() {
  return (
    <div className="bg-[#a855f7] py-3">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-center">
        <div className="inline-flex items-center gap-6 bg-[#a855f7] rounded-xl px-8 py-2.5">
          <div className="flex flex-col items-center leading-tight">
            <span className="text-white font-bold text-[15px]">Over 50+</span>
            <span className="text-white/90 text-[10px] font-[family-name:var(--font-inter)]">
              Instructors
            </span>
          </div>
          <div className="w-px h-[34px] bg-white/40" />
          <div className="flex flex-col items-center leading-tight">
            <span className="text-white font-bold text-[15px]">Over 12,000+</span>
            <span className="text-white/90 text-[10px] font-[family-name:var(--font-inter)]">
              Learners
            </span>
          </div>
          <div className="w-px h-[34px] bg-white/40" />
          <div className="flex flex-col items-center leading-tight">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 14 13">
                <path d="M7 0L8.573 4.84H13.657L9.542 7.83L11.115 12.67L7 9.68L2.885 12.67L4.458 7.83L0.343 4.84H5.427L7 0Z" />
              </svg>
              <span className="text-white font-bold text-[15px]">4.9</span>
            </span>
            <span className="text-white/90 text-[10px] font-[family-name:var(--font-inter)]">
              Ratings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
