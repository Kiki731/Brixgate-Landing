import type { Metadata } from "next";
import CourseNavbar from "@/components/course/CourseNavbar";
import CourseHero from "@/components/course/CourseHero";
import WhatYoullLearn from "@/components/course/WhatYoullLearn";
import SkillsGained from "@/components/course/SkillsGained";
import ProgramCurriculum from "@/components/course/ProgramCurriculum";
import WhoIsThisFor from "@/components/course/WhoIsThisFor";
import HowToApply from "@/components/course/HowToApply";
import PricingSection from "@/components/course/PricingSection";
import CourseTestimonials from "@/components/course/CourseTestimonials";
import CourseFAQ from "@/components/course/CourseFAQ";
import EnrollSection from "@/components/course/EnrollSection";

export const metadata: Metadata = {
  title: "AI in Cyber Security & Intelligence — BrixGate Cohort 1",
  description:
    "Master AI-powered threat detection, automated incident response, and intelligence-led security. Join BrixGate Cohort 1 — live online, 2 weeks, built for security professionals.",
};

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-white">
      <CourseNavbar />
      <CourseHero />
      <WhatYoullLearn />
      <SkillsGained />
      <ProgramCurriculum />
      <WhoIsThisFor />
      <HowToApply />
      <PricingSection />
      <CourseTestimonials />
      <CourseFAQ />
      <EnrollSection />
    </main>
  );
}
