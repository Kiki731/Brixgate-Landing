import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourseBySlug, getOtherPrograms } from "@/lib/courses-data";
import {
  fetchProgram,
  fetchProgramCohorts,
  transformApiCohort,
  extractPractitioners,
  extractPractitionersFromProgram,
  extractProgramOverview,
  extractSkills,
  extractCurriculum,
  extractTools,
  extractProjects,
  extractTestimonials,
  extractProfessions,
  extractEligibility,
  extractHowToApplySteps,
  extractFAQs,
} from "@/lib/api";

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

// ISR — revalidate every 5 minutes so API changes propagate without a full rebuild
export const revalidate = 300;

// Pre-render all known slugs at build time
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

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

  // Local data — always available, used as fallback
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const otherPrograms = getOtherPrograms(slug);

  // ── Fetch API data in parallel ──────────────────────────────────────────────
  const [apiProgram, apiCohorts] = await Promise.all([
    fetchProgram(slug),
    fetchProgramCohorts(slug),
  ]);

  // ── Hero: API title / subtitle wins, local is fallback ──────────────────────
  const hero = {
    ...course.hero,
    ...(apiProgram && {
      title: apiProgram.title || course.hero.title,
      description: apiProgram.subtitle || course.hero.description,
    }),
  };

  // ── Program Overview ────────────────────────────────────────────────────────
  const programOverview =
    (apiProgram && extractProgramOverview(apiProgram)) ||
    course.programOverview;

  // ── Skills ──────────────────────────────────────────────────────────────────
  const skills =
    (apiProgram && extractSkills(apiProgram)) || course.skills;

  // ── Curriculum ──────────────────────────────────────────────────────────────
  const curriculum =
    (apiProgram && extractCurriculum(apiProgram)) || course.curriculum;

  // ── Tools ───────────────────────────────────────────────────────────────────
  const tools =
    (apiProgram && extractTools(apiProgram)) || course.tools;

  // ── Portfolio Projects ───────────────────────────────────────────────────────
  const portfolioProjects =
    (apiProgram && extractProjects(apiProgram)) || course.portfolioProjects;

  // ── Testimonials ─────────────────────────────────────────────────────────────
  const testimonials =
    (apiProgram && extractTestimonials(apiProgram)) || course.testimonials;

  // ── How To Apply ─────────────────────────────────────────────────────────────
  const howToApplySteps =
    (apiProgram && extractHowToApplySteps(apiProgram)) ||
    course.howToApply.steps;

  const professions =
    (apiProgram && extractProfessions(apiProgram)) ||
    course.howToApply.professions;

  const eligibility =
    (apiProgram && extractEligibility(apiProgram)) ||
    course.howToApply.eligibility;

  // ── FAQs ─────────────────────────────────────────────────────────────────────
  const faqs = (apiProgram && extractFAQs(apiProgram)) || course.faqs;

  // ── Cohorts ──────────────────────────────────────────────────────────────────
  const cohorts =
    apiCohorts.length > 0
      ? apiCohorts.map((c, i) => transformApiCohort(c, i))
      : course.cohorts;

  // ── Practitioners — program.partners.practitioners[] takes priority ───────────
  const programPractitioners = apiProgram ? extractPractitionersFromProgram(apiProgram) : null;
  const cohortPractitioners = extractPractitioners(apiCohorts);
  const practitioners =
    programPractitioners?.length
      ? programPractitioners
      : cohortPractitioners.length
      ? cohortPractitioners
      : course.practitioners;

  // Program ID for the checkout entity_id (passed via URL to the checkout page)
  const programId = apiProgram?.id ?? null;

  return (
    <main className="min-h-screen bg-white">
      <CourseNavbar />

      <CourseHero
        hero={hero}
        checkoutHref={`/checkout?program=${slug}${programId ? `&id=${programId}` : ""}`}
      />

      <TopicsTicker items={course.tickerTopics} />

      <CourseOverviewSection
        programOverview={programOverview}
        skills={skills}
        curriculum={curriculum}
        admission={course.admission}
        contact={course.contact}
        stats={course.hero.stats}
      />

      <ToolsUsed tools={tools} />

      <PricingSection />

      <HowToApply
        steps={howToApplySteps}
        professions={professions}
        eligibility={eligibility}
      />

      <PortfolioProjects projects={portfolioProjects} />

      {/* ProgramCohorts receives the slug so the Enroll CTA can link to checkout */}
      <ProgramCohorts cohorts={cohorts} slug={slug} programId={programId} />

      <OurPractitioners practitioners={practitioners} />

      <CourseTestimonials testimonials={testimonials} />

      <CourseFAQ faqs={faqs} />

      <OtherPrograms programs={otherPrograms} />

      <Footer />
    </main>
  );
}
