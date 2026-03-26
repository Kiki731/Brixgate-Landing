"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Fatima Al-Hassan",
    role: "Software Developer",
    location: "Lagos Nigeria",
    quote:
      "What I love most is how practical everything is. It's not just theory you actually learn skills you can use immediately at work.",
    rating: "4.9",
    alumni: "312 Alumni",
    placed: "94% Placed",
    avatar: "/images/testimonial-avatar-5.jpg",
  },
  {
    name: "David. Shoneye",
    role: "Data Analyst",
    location: "Lagos Nigeria",
    quote:
      "This program helped me transition into tech without feeling overwhelmed. The step-by-step approach made all the difference.",
    rating: "4.9",
    alumni: "312 Alumni",
    placed: "94% Placed",
    avatar: "/images/testimonial-avatar-4.jpg",
  },
  {
    name: "Sadiq Maitama.",
    role: "Business Analyst",
    location: "Lagos Nigeria",
    quote:
      "I finally understand how AI works and how to apply it in my field. This is more than a course it's a career upgrade.",
    rating: "4.9",
    alumni: "312 Alumni",
    placed: "94% Placed",
    avatar: "/images/testimonial-avatar-6.jpg",
  },
];

function StarIcon() {
  return (
    <svg className="w-3 h-3 fill-[#f59e0b]" viewBox="0 0 12 12">
      <path d="M6 0L7.34 4.11H11.66L8.16 6.65L9.51 10.76L6 8.22L2.49 10.76L3.84 6.65L0.34 4.11H4.66L6 0Z" />
    </svg>
  );
}

export default function Testimonials() {
  const ref = useInView();
  return (
    <section className="py-20 bg-white"><div ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center scroll-anim">
          <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mb-3">
            testimonials
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-4xl text-[#0f172a] leading-tight mb-2">
            Trusted by Learners Everywhere
          </h2>
          <p className="text-[#727272] text-[14px] lg:text-base">
            Our learners say it best, see how we&apos;re making an impact.
          </p>
        </div>

        {/* Cards */}
        <div className="flex overflow-x-auto gap-5 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 snap-x snap-mandatory">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-[300px] lg:w-auto snap-start bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col gap-5 flex-shrink-0 lg:flex-shrink scroll-anim hover-lift"
            >
              {/* Quote icon */}
              <div className="w-6 h-6 text-gray-300">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.3 6H6.8C5.2 6 4 7.2 4 8.8v4.4C4 14.8 5.2 16 6.8 16H9v1.5c0 1.4-1.1 2.5-2.5 2.5H6V22h.5C9.5 22 12 19.5 12 16.5V8.8C12 7.2 10.8 6 11.3 6zM22.3 6h-4.5c-1.6 0-2.8 1.2-2.8 2.8v4.4c0 1.6 1.2 2.8 2.8 2.8H20v1.5c0 1.4-1.1 2.5-2.5 2.5H17V22h.5c2.9 0 5.5-2.5 5.5-5.5V8.8C23 7.2 21.8 6 22.3 6z" />
                </svg>
              </div>

              {/* Reviewer */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full shrink-0 overflow-hidden relative">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[#111827] font-semibold text-xl">{t.name}</span>
                    
                  </div>
                  <p className="text-[#6b7280] text-[14px] lg:text-base">{t.role}</p>
                  <p className="text-[#9ca3af] text-xs mt-0.5">{t.location}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#6b7280] text-[14px] lg:text-base pb-8 leading-relaxed">{t.quote}</p>

              {/* Stats row */}
              {/* <div className="flex items-center gap-2 text-sm border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1">
                  <StarIcon />
                  <span className="text-[#f59e0b] font-semibold">{t.rating}</span>
                </span>
                <span className="text-gray-300 text-base">·</span>
                <span className="text-[#9ca3af] text-xs">{t.alumni}</span>
                <span className="text-gray-300 text-base">·</span>
                <span className="text-[#9ca3af] text-xs">{t.placed}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div></section>
  );
}
