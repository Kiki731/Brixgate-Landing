import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adeyemi Oluremi",
    role: "Penetration Tester",
    location: "Lagos, Nigeria",
    quote: "I went in sceptical about whether AI could fit into a penetration testing workflow. Three weeks later I had a working setup and my recon time dropped by more than half. The local setup is the most useful thing — no data leaving our environment.",
    rating: 4.9,
    alumni: "3k",
    avatar: "/images/testimonial-avatar-1.png",
  },
  {
    name: "Emeka Davis",
    role: "SOC Engineer",
    location: "Abuja, Nigeria",
    quote: "Finally a program that treats us like professionals. No hand-holding, no basics I already know. Straight into applying AI to real security problems. I built an IR playbook in Week 3 that my team is actually using right now.",
    rating: 4.9,
    alumni: "6k",
    avatar: "/images/testimonial-avatar-2.png",
  },
  {
    name: "Wale Adams",
    role: "Cloud Security Engineer",
    location: "Port-Harcourt, Nigeria",
    quote: "The SIEM triage section alone justified the enrollment fee. We went from 400 daily alerts to a manageable queue of about 30 that actually need human attention. That's the kind of shift that changes how a team operates.",
    rating: 4.9,
    alumni: "2.5k",
    avatar: "/images/testimonial-avatar-3.png",
  },
];

export default function CourseTestimonials() {
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
            className="text-[#222] text-[40px] font-medium tracking-[-0.05em]"
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
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden relative shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
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

              {/* Quote */}
              <p
                className="text-[#475569] text-[14px] leading-relaxed flex-1"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Rating + alumni */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#f4f4f4]">
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
