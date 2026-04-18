import Image from "next/image";
import Link from "next/link";
import type { CourseLink } from "@/lib/courses-data";

export default function OtherPrograms({ programs }: { programs: CourseLink[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-[22px] sm:text-[32px] font-medium tracking-[-0.05em] mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Other Programs
        </h2>

        <div className="flex flex-col sm:flex-row gap-6">
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/course/${p.slug}`}
              className="flex items-center gap-4 group flex-1 bg-[#f8fafc] hover:bg-[#f0f4ff] border border-[#f0f0f0] rounded-xl p-4 transition-colors"
            >
              <div className="w-[72px] h-[72px] relative rounded-lg overflow-hidden shrink-0">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="72px" />
              </div>
              <p
                className="text-[#222] text-[14px] font-medium leading-snug group-hover:text-[#474dc1] transition-colors"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                {p.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
