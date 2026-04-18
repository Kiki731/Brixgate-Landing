import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourseBySlug, getOtherPrograms } from "@/lib/courses-data";

import CourseNavbar from "@/components/course/CourseNavbar";
import CourseHero from "@/components/course/CourseHero";
import TopicsTicker from "@/components/course/TopicsTicker";
import CourseOverviewSection from "@/components/course/CourseOverviewSection";
import ToolsUsed from "@/components/course/ToolsUsed";
import PricingSection from "@/components/course/PricingSection";
import HowToApply from "@/components/course/HowToApply";
import PortfolioProjects from "@/components/course/PortfolioProjects";
import ProgramCohorts from "@/components/course/ProgramCohorts";
import CourseTestimonials from "@/components/course/CourseTestimonials";
import CourseFAQ from "@/components/course/CourseFAQ";
import OurPractitioners from "@/components/course/OurPractitioners";
import OtherPrograms from "@/components/course/OtherPrograms";
import Footer from "@/components/Footer";

// Pre-render all known course slugs at build time → fully static, CDN-cached
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

// Dynamic per-course metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.meta.title,
    description: course.meta.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const otherPrograms = getOtherPrograms(slug);

  return (
    <main className="min-h-screen bg-white">
      <CourseNavbar />

      {/* Hero + stats bar */}
      <CourseHero hero={course.hero} />

      {/* Scrolling topics ticker */}
      <TopicsTicker items={course.tickerTopics} />

      {/* 8:4 grid — Program Overview / Skills / Curriculum | Sidebar cards */}
      <CourseOverviewSection
        programOverview={course.programOverview}
        skills={course.skills}
        curriculum={course.curriculum}
        admission={course.admission}
        contact={course.contact}
        stats={course.hero.stats}
      />

      <ToolsUsed tools={course.tools} />
      <PricingSection />
      <HowToApply
        steps={course.howToApply.steps}
        professions={course.howToApply.professions}
        eligibility={course.howToApply.eligibility}
      />
      <PortfolioProjects projects={course.portfolioProjects} />
      <ProgramCohorts cohorts={course.cohorts} />
      <OurPractitioners practitioners={course.practitioners} />
      <CourseTestimonials testimonials={course.testimonials} />
      <CourseFAQ faqs={course.faqs} />
      <OtherPrograms programs={otherPrograms} />
      <Footer />
    </main>
  );
}
