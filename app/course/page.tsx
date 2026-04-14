import type { Metadata } from "next";
import CourseNavbar from "@/components/course/CourseNavbar";
import CourseHero from "@/components/course/CourseHero";
import SkillsAndCurriculum from "@/components/course/SkillsAndCurriculum";
import CertificateSection from "@/components/course/CertificateSection";
import NeedAssistance from "@/components/course/NeedAssistance";
import ToolsUsed from "@/components/course/ToolsUsed";
import HowToApply from "@/components/course/HowToApply";
import PortfolioProjects from "@/components/course/PortfolioProjects";
import ProgramCohorts from "@/components/course/ProgramCohorts";
import CourseTestimonials from "@/components/course/CourseTestimonials";
import CourseFAQ from "@/components/course/CourseFAQ";
import OtherPrograms from "@/components/course/OtherPrograms";
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
      <SkillsAndCurriculum />
      <CertificateSection />
      <NeedAssistance />
      <ToolsUsed />
      <HowToApply />
      <PortfolioProjects />
      <ProgramCohorts />
      <CourseTestimonials />
      <CourseFAQ />
      <OtherPrograms />
      <EnrollSection />
    </main>
  );
}
