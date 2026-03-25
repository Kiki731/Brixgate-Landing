"use client";
import Image from "next/image";
import { BookOpen, Users, ArrowRight, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { scrollToForm } from "@/lib/scrollToForm";

const courses = [
  {
    track: "AI for Professionals",
    title: "General AI",
    sessions: "42 sessions",
    rating: "4.9",
    lessons: "25 Lessons",
    students: "1000",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Rectangle 122.png",
  },
  {
    track: "AI for Professionals",
    title: "AI in Cyber Security & Intelligence",
    sessions: "142 sessions",
    rating: "4.9",
    lessons: "25 Lessons",
    students: "1000",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Rectangle 122.png",
  },
  {
    track: "AI for Beginners",
    title: "AI in Data Analytics & Intelligence",
    sessions: "142 sessions",
    rating: "4.9",
    duration: "2 Weeks",
    students: "1000",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Rectangle 122-1.png",
  },
  {
    track: "AI for Professionals",
    title: "Introduction to Machine Learning",
    sessions: "142 sessions",
    rating: "4.9",
    duration: "2 Weeks",
    students: "1000",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Rectangle 122-2.png",
  },
  {
    track: "AI for Professionals",
    title: "AI in Product Management",
    sessions: "142 sessions",
    rating: "4.9",
    duration: "2 Weeks",
    students: "1000",
    priceFree: "₦89,999",
    priceSale: "₦50,000",
    priceUSD: "$64.94",
    priceSaleUSD: "$36.08",
    image: "/images/Rectangle 122-3.png",
  },
];

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0 w-[289px] scroll-anim hover-lift">
      {/* Thumbnail */}
      <div className="relative h-[151px]">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
        {/* <span className="absolute top-2.5 left-2.5 bg-[#ff2949] text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1ed515]" />
          Live
        </span> */}
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="inline-flex items-center bg-[#0f172a] text-white text-[10px] font-semibold px-2 py-1 rounded mb-3 ">
          {course.track}
        </span>

        <h3 className="text-[#0f172a] font-semibold text-lg leading-snug mb-2 w-[224px]">{course.title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 fill-[#f59e0b]" viewBox="0 0 12 12">
              <path d="M6 0L7.34 4.11H11.66L8.16 6.65L9.51 10.76L6 8.22L2.49 10.76L3.84 6.65L0.34 4.11H4.66L6 0Z" />
            </svg>
            <span className="text-[#f59e0b] font-semibold text-xs">{course.rating}</span>
          </span>
          <span className="text-gray-300 text-base">·</span>
          <span className="text-[#727272] text-xs">{course.sessions}</span>
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
            {course.students} Students Capacity
          </span>
        </div>

        {/* Footer Row */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          {/* <span className="text-[#222] font-semibold text-sm">FREE</span> */}
          <button onClick={scrollToForm} className="bg-[#d51420] hover:bg-[#b8111e] transition-colors text-white text-sm font-medium px-3 py-1.5 rounded-md flex items-center gap-1">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const ref = useInView();
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

        {/* Course Cards — always horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {courses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </div>
    </div></section>
  );
}
