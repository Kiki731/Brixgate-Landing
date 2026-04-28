"use client";
import Image from "next/image";
import { BookOpen, Users, ArrowRight, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { scrollToForm } from "@/lib/scrollToForm";

const courses = [
  {
    track: "AI for Professionals",
    title: "AI in Software Engineering",
    sessions: "42 sessions",
    rating: "4.9",
    lessons: "25 Lessons",
    students: "1000 Students Capacity",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Development.jpeg",
  },
  {
    track: "AI for Professionals",
    title: "AI in Cyber Security & Intelligence",
    sessions: "142 sessions",
    rating: "4.9",
    lessons: "25 Lessons",
    students: "1,200 Students",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Cybersecurity.jpeg",
  },
  {
    track: "AI for Beginners",
    title: "AI in Data Analytics",
    sessions: "142 sessions",
    rating: "4.9",
    duration: "2 Weeks",
    students: "1,200 Students",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Data Analytics.jpeg",
  },
  {
    track: "AI for Professionals",
    title: "AI in Cloud & DevOps",
    sessions: "142 sessions",
    rating: "4.9",
    duration: "2 Weeks",
    students: "1,200 Students",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Cloud and DevOps.jpeg",
  },
  {
    track: "AI for Professionals",
    title: "AI in Product Management",
    sessions: "142 sessions",
    rating: "4.9",
    duration: "2 Weeks",
    students: "1,200 Students",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Product Management.jpeg",
  },
  {
    track: "AI for Professionals",
    title: "AI in Product Design",
    sessions: "142 sessions",
    rating: "4.9",
    duration: "2 Weeks",
    students: "1,200 Students",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Product Design.png",
  }
];

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0 w-[289px] scroll-anim hover-lift h-full flex flex-col">
      {/* Thumbnail */}
      <div className="relative h-[151px] flex-shrink-0">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
        {/* <span className="absolute top-2.5 left-2.5 bg-[#ff2949] text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1ed515]" />
          Live
        </span> */}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span className="inline-flex items-center bg-[#0f172a] text-white text-[10px] font-semibold px-2 py-1 rounded mb-3 self-start">
          {course.track}
        </span>

        <h3 className="text-[#0f172a] font-semibold text-lg leading-snug mb-2 w-[224px]">{course.title}</h3>

        <div className="flex items-center gap-2 mb-3">
          {/* <span className="flex items-center gap-1">
            <svg className="w-3 h-3 fill-[#f59e0b]" viewBox="0 0 12 12">
              <path d="M6 0L7.34 4.11H11.66L8.16 6.65L9.51 10.76L6 8.22L2.49 10.76L3.84 6.65L0.34 4.11H4.66L6 0Z" />
            </svg>
            <span className="text-[#f59e0b] font-semibold text-xs">{course.rating}</span>
          </span>
          <span className="text-gray-300 text-base">·</span> */}
          {/* <span className="text-[#727272] text-xs">{course.sessions}</span> */}
        </div>

        {/* Pricing */}
        {/* <div className="flex items-center gap-2 text-xs mb-2">
          <span className="text-[#222] font-semibold">{course.priceFree}</span>
          <span className="text-[#ff2949] font-semibold text-sm">{course.priceSale}</span>
          <span className="text-gray-300">|</span>
          <span className="text-[#222] font-semibold">{course.priceUSD}</span>
          <span className="text-[#ff2949] font-semibold text-sm">{course.priceSaleUSD}</span>
        </div> */}

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-[#222] mb-4">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {course.lessons}
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            1000 Students Capacity
          </span>
        </div>
        <div>
        <span className="flex items-center gap-1">
            <svg className="w-3 h-3 fill-[#f59e0b]" viewBox="0 0 12 12">
              <path d="M6 0L7.34 4.11H11.66L8.16 6.65L9.51 10.76L6 8.22L2.49 10.76L3.84 6.65L0.34 4.11H4.66L6 0Z" />
            </svg>
            <span className="text-[#f59e0b] font-semibold text-xs">{course.rating}</span>
          </span>
        </div>

        {/* Footer Row — mt-auto pushes it to bottom regardless of content height */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
          {/* <span className="text-[#222] font-semibold text-sm">FREE</span> */}
          <button onClick={scrollToForm} className="bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white text-sm font-medium px-3 py-1.5 rounded-md flex items-center gap-1">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

const DOT_COUNT = 4;

export default function CoursesSection() {
  const ref = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Map scroll progress 0→1 linearly across DOT_COUNT dots
  // so the last dot always activates at the true end of scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const index = maxScroll > 0
      ? Math.round((scrollLeft / maxScroll) * (DOT_COUNT - 1))
      : 0;
    setActiveIndex(index);
  };

  const scrollTo = (i: number) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    scrollRef.current.scrollTo({
      left: (i / (DOT_COUNT - 1)) * maxScroll,
      behavior: "smooth",
    });
    setActiveIndex(i);
  };

  return (
    <section id="courses-section" className="py-16 bg-white"><div ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 scroll-anim">
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[24px] lg:text-4xl text-[#0f172a] leading-tight">
            Explore Our New Courses
          </h2>
          <p className="text-[#222] text-[14px] lg:text-xl mt-2 max-w-[600px]">
            We don&apos;t just teach AI,we prepare you to use it where it matters.
          </p>
        </div>

        {/* Sub header row */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[#4749c1] font-semibold text-xl">New courses</span>
        </div>

        {/* Course Cards
            - pt-3 pb-5: padding so hover-lift (translateY -4px) isn't clipped by overflow-y-hidden
            - snap-proximity: lighter snap — feels responsive, not sticky
            - touch-action pan-x: locks touch to horizontal only, kills vertical shakiness */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-proximity pt-3 pb-5"
          style={{ touchAction: "pan-x" }}
        >
          {courses.map((c) => (
            <div key={c.title} className="snap-start flex-shrink-0 self-stretch">
              <CourseCard course={c} />
            </div>
          ))}
        </div>

        {/* 4 dot indicators — mapped linearly to scroll progress */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Scroll to position ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-5 h-2 bg-[#4749c1]"
                  : "w-2 h-2 bg-[#d1d5db] hover:bg-[#4749c1]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div></section>
  );
}
