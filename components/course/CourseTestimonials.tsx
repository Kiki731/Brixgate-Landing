import Image from "next/image";

const testimonials = [
  {
    name: "Adebayo Okafor",
    role: "SOC Analyst, Lagos",
    text: "The course completely changed how I approach threat detection. I went from manual log reviews to building AI pipelines that flag anomalies in real time. Worth every naira.",
    avatar: "/images/testimonial-avatar-1.png",
    rating: 5,
  },
  {
    name: "Chukwuemeka Eze",
    role: "Network Engineer, Abuja",
    text: "I had zero ML experience before this. The instructors broke everything down practically. Two weeks later, I deployed a classifier for our company's phishing detection.",
    avatar: "/images/testimonial-avatar-2.png",
    rating: 5,
  },
  {
    name: "Fatima Al-Hassan",
    role: "IT Security Manager",
    text: "The live sessions were incredibly engaging. Real case studies, actual tools used in the industry. This isn't theory — it's what practitioners actually do.",
    avatar: "/images/testimonial-avatar-3.png",
    rating: 5,
  },
];

export default function CourseTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            What Our Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#f59e0b]" viewBox="0 0 12 12">
                    <path d="M6 0L7.34 4.11H11.66L8.16 6.65L9.51 10.76L6 8.22L2.49 10.76L3.84 6.65L0.34 4.11H4.66L6 0Z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#475569] text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a] text-sm">{t.name}</p>
                  <p className="text-[#727272] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
