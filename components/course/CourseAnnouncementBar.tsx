"use client";

export default function CourseAnnouncementBar() {
  return (
    <div className="bg-[#511c84] text-white py-2.5 px-4 text-center text-xs font-medium tracking-wide">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-6 flex-wrap">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
          Verified Excellence
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
          Globally Recognized
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
          AI-First Training
        </span>
      </div>
    </div>
  );
}
