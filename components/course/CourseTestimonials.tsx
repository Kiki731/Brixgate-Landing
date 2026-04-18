import Image from "next/image";
import { Star } from "lucide-react";
import type { CourseTestimonial } from "@/lib/courses-data";

export default function CourseTestimonials({ testimonials }: { testimonials: CourseTestimonial[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p
            className="text-[#727272] text-[12px] font-medium tracking-[0.15em] uppercase mb-3"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            Testimonials
          </p>
          <h2
            className="text-[#222] text-[26px] sm:text-[40px] font-medium tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Trusted by Learners Everywhere
          </h2>
          <p
            className="text-[#727272] text-[16px] mt-3"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            Our learners say it best—see how we&apos;re making an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[#f0f0f0] rounded-2xl p-6 flex flex-col gap-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                </div>
                <div>
                  <p
                    className="text-[#222] text-[15px] font-semibold"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#727272] text-[12px]"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {t.role}
                  </p>
                  <p
                    className="text-[#727272] text-[11px]"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>

              <p
                className="text-[#475569] text-[14px] leading-relaxed flex-1"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 ">
                <div className="flex items-center gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  <span
                    className="text-[#222] text-[13px] font-semibold ml-1"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {t.rating}
                  </span>
                </div>
                <span className="text-[#727272] text-[12px]">·</span>
                <span
                  className="text-[#727272] text-[12px]"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {t.alumni} Alumni
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
