"use client";
import Image from "next/image";

export default function NeedAssistance() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className="rounded-2xl overflow-hidden flex flex-col lg:flex-row items-stretch"
          style={{ background: "linear-gradient(135deg, #172435 60%, #1e3a5f 100%)" }}
        >
          {/* Text side */}
          <div className="flex-1 px-10 py-10 flex flex-col gap-5 justify-center">
            <h2
              className="text-white text-[28px] lg:text-[32px] font-semibold leading-tight"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Need Assistance?
            </h2>
            <p
              className="text-white/70 text-[16px] leading-relaxed max-w-[380px]"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
            >
              Contact our team for support with applications, program details,
              or any other inquiries.
            </p>
            <a
              href="#enroll"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-white text-[#172435] font-semibold text-sm px-6 py-3 rounded-xl w-fit hover:bg-gray-100 transition-colors"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
            >
              Talk to an Advisor
            </a>
          </div>

          {/* Image side */}
          <div className="flex-none lg:w-[340px] relative min-h-[220px]">
            <Image
              src="/images/photo_5958689781271170252_y 1.png"
              alt="Students collaborating"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
