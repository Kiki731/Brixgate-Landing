// ─── Base URL ─────────────────────────────────────────────────────────────────
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.brixgate.com/api/v1";

// Images are served from the API host root (not under /api/v1)
const API_HOST = API_BASE.replace(/\/api\/v1\/?$/, "");

function resolveApiImage(path: string | undefined | null): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${API_HOST}/${path}`;
}

// ─── Raw API types (snake_case — matches actual response) ──────────────────────

export interface ApiInstructor {
  id: number;
  name: string;
  title?: string;
  biography?: string;
  expertise?: string;
  years_of_experience?: number;
  profile_image_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
}

export interface ApiCohort {
  id: number;
  program_id: number;
  title: string;
  description?: string;
  admission_period?: string;
  start_date: string;
  end_date: string;
  duration: string;
  learning_format?: string;
  frequency?: string;
  /** OPEN | CLOSED | UPCOMING | ACTIVE */
  status: string;
  max_students: number;
  enrolled_students_count: number;
  average_rating?: number;
  instructors: ApiInstructor[];
}

// Nested object types inside ApiProgram fields
interface ApiSkillsField {
  title?: string;
  description?: string;
  skills: string[];
}

interface ApiOutcomeItem {
  title: string;
  description: string;
  index?: number;
}

interface ApiOutcomesField {
  title?: string;
  description?: string;
  outcomes: ApiOutcomeItem[];
}

interface ApiCurriculumDetail {
  title: string;
  description?: string;
  index?: number;
}

interface ApiCurriculumEntry {
  header: string;
  details?: ApiCurriculumDetail[];
}

interface ApiKeyFeaturesField {
  title?: string;
  description?: string;
  curriculum: ApiCurriculumEntry[];
}

interface ApiToolItem {
  name: string;
  logo?: string;
}

interface ApiToolsField {
  header_text?: string;
  background_image?: string;
  tools: ApiToolItem[];
}

interface ApiProjectItem {
  title: string;
  description: string;
  image?: string;
}

interface ApiProjectsField {
  title?: string;
  description?: string;
  footnote?: string;
  projects: ApiProjectItem[];
}

interface ApiTestimonyItem {
  name: string;
  title?: string;
  location?: string;
  image?: string;
  rating?: number;
  testimony: string;
}

interface ApiTestimonialsField {
  title?: string;
  description?: string;
  testimonies: ApiTestimonyItem[];
}

interface ApiAudienceField {
  title?: string;
  description?: string;
  audience: string[];
}

interface ApiApplicationStep {
  step_name?: string;
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  index?: number;
}

interface ApiApplicationProcessField {
  title?: string;
  description?: string;
  steps: ApiApplicationStep[];
}

interface ApiFAQItem {
  title: string;
  description: string;
  index?: number;
}

interface ApiFAQsField {
  title?: string;
  description?: string;
  faqs: ApiFAQItem[];
}

interface ApiIncludesSummaryField {
  title?: string;
  description?: string;
  footnote?: string;
  items: string[];
  materials?: string[];
}

export interface ApiProgram {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  level?: string;
  duration?: string;
  status?: string;
  main_price?: number;
  final_price?: number;
  discounted_amount?: number;
  discounted_percent?: number;
  skills?: ApiSkillsField;
  outcomes?: ApiOutcomesField;
  key_features?: ApiKeyFeaturesField;
  tools?: ApiToolsField;
  projects?: ApiProjectsField;
  testimonials?: ApiTestimonialsField;
  audience?: ApiAudienceField;
  eligibility?: ApiAudienceField;
  application_process?: ApiApplicationProcessField;
  faqs?: ApiFAQsField;
  includes_summary?: ApiIncludesSummaryField;
  images?: { main_program_image?: string };
  sample_certificate_url?: string;
}

// ─── Fetch Helpers ─────────────────────────────────────────────────────────────

// Complex fields the API serialises as JSON strings
const JSON_PROGRAM_FIELDS = [
  "skills",
  "outcomes",
  "key_features",
  "tools",
  "projects",
  "testimonials",
  "audience",
  "eligibility",
  "application_process",
  "faqs",
  "includes_summary",
  "images",
] as const;

function safeParseJson(str: unknown): unknown {
  if (typeof str !== "string") return str;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

function parseApiProgramFields(raw: Record<string, unknown>): ApiProgram {
  const result = { ...raw };
  for (const field of JSON_PROGRAM_FIELDS) {
    if (typeof result[field] === "string") {
      result[field] = safeParseJson(result[field] as string);
    }
  }
  return result as unknown as ApiProgram;
}

/** Full program details. Returns null on any failure so callers can fall back. */
export async function fetchProgram(slug: string): Promise<ApiProgram | null> {
  try {
    const res = await fetch(`${API_BASE}/programs/${slug}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const raw = json?.data?.program;
    if (!raw) return null;
    return parseApiProgramFields(raw);
  } catch {
    return null;
  }
}

/** Cohort list for a program. Returns [] on any failure. */
export async function fetchProgramCohorts(slug: string): Promise<ApiCohort[]> {
  try {
    const res = await fetch(`${API_BASE}/programs/${slug}/cohorts`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data?.cohorts ?? [];
  } catch {
    return [];
  }
}

/** All published programs (for the landing-page card list). */
export async function fetchPrograms(): Promise<ApiProgram[]> {
  try {
    const res = await fetch(`${API_BASE}/programs?size=50`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data?.programs ?? json?.programs ?? [];
  } catch {
    return [];
  }
}

// ─── Utilities ─────────────────────────────────────────────────────────────────

/** Format an ISO date string as "12 April 2026". */
export function formatApiDate(dateStr: string | undefined): string {
  if (!dateStr) return "TBA";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// ─── Local types imported for transformer return types ─────────────────────────
import type {
  CourseCohort,
  CoursePractitioner,
  ProgramOverviewItem,
  CourseTool,
  CourseProject,
  CourseTestimonial,
  CourseFAQItem,
  CourseStep,
  CourseProfession,
} from "@/lib/courses-data";

// Profession color palette — cycles for however many audience items the API returns
const PROFESSION_COLORS: string[] = [
  "bg-[#e0f2fe] text-[#0369a1]",
  "bg-[#fce7f3] text-[#9d174d]",
  "bg-[#f0fdf4] text-[#166534]",
  "bg-[#fef9c3] text-[#854d0e]",
  "bg-[#fff7ed] text-[#9a3412]",
  "bg-[#f3f0ff] text-[#5b21b6]",
  "bg-[#fdf2f8] text-[#701a75]",
  "bg-[#ecfdf5] text-[#065f46]",
];

// ─── Section transformers ──────────────────────────────────────────────────────

/** outcomes → programOverview items */
export function extractProgramOverview(
  program: ApiProgram
): { description: string; items: ProgramOverviewItem[] } | null {
  const o = program.outcomes;
  if (!o || !o.outcomes?.length) return null;
  return {
    description: o.description ?? program.subtitle ?? program.description ?? "",
    items: o.outcomes.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  };
}

/** skills.skills[] → string[] */
export function extractSkills(program: ApiProgram): string[] | null {
  const s = program.skills;
  if (!s || !s.skills?.length) return null;
  return s.skills;
}

/** key_features.curriculum[] → curriculum data */
export function extractCurriculum(
  program: ApiProgram
): { title: string; description: string; items: string[] } | null {
  const kf = program.key_features;
  if (!kf || !kf.curriculum?.length) return null;
  return {
    title: kf.title ?? "Program Curriculum",
    description: kf.description ?? "",
    items: kf.curriculum.map((entry) => entry.header),
  };
}

/** tools.tools[] → CourseTool[]
 *  Returns null when logos are relative paths (auth-gated) so callers fall back to local. */
export function extractTools(program: ApiProgram): CourseTool[] | null {
  const t = program.tools;
  if (!t || !t.tools?.length) return null;
  // Only use API tools when at least one logo is a full public URL
  const hasPublicLogos = t.tools.some((tool) => tool.logo?.startsWith("http"));
  if (!hasPublicLogos) return null;
  return t.tools.map((tool) => ({
    name: tool.name,
    color: "#000000",
    image: tool.logo?.startsWith("http") ? tool.logo : undefined,
  }));
}

// Local project image fallbacks (index-matched to the typical 4-project layout)
const PROJECT_IMAGE_FALLBACKS = [
  "/images/Background+Shadow 4.png",
  "/images/Background+Shadow 3.png",
  "/images/Background+Shadow 2.png",
  "/images/Background+Shadow.png",
];

/** projects.projects[] → CourseProject[]
 *  Uses local image fallbacks when API project images are auth-gated relative paths. */
export function extractProjects(program: ApiProgram): CourseProject[] | null {
  const p = program.projects;
  if (!p || !p.projects?.length) return null;
  return p.projects.map((proj, i) => {
    const resolvedImage = proj.image?.startsWith("http")
      ? proj.image
      : PROJECT_IMAGE_FALLBACKS[i % PROJECT_IMAGE_FALLBACKS.length];
    return {
      title: proj.title,
      desc: proj.description,
      image: resolvedImage,
    };
  });
}

/** testimonials.testimonies[] → CourseTestimonial[] */
export function extractTestimonials(
  program: ApiProgram
): CourseTestimonial[] | null {
  const t = program.testimonials;
  if (!t || !t.testimonies?.length) return null;
  return t.testimonies.map((item) => ({
    name: item.name,
    role: item.title ?? "",
    location: item.location ?? "",
    quote: item.testimony,
    rating: item.rating ?? 5,
    alumni: "BrixGate",
    avatar: resolveApiImage(item.image) ?? "/images/Pract 1.png",
  }));
}

/** audience.audience[] → CourseProfession[] */
export function extractProfessions(
  program: ApiProgram
): CourseProfession[] | null {
  const a = program.audience;
  if (!a || !a.audience?.length) return null;
  return a.audience.map((label, i) => ({
    label,
    color: PROFESSION_COLORS[i % PROFESSION_COLORS.length],
  }));
}

/** eligibility.audience[] → string[] */
export function extractEligibility(program: ApiProgram): string[] | null {
  const e = program.eligibility;
  if (!e || !e.audience?.length) return null;
  return e.audience;
}

/** application_process.steps[] → CourseStep[] */
export function extractHowToApplySteps(
  program: ApiProgram
): CourseStep[] | null {
  const ap = program.application_process;
  if (!ap || !ap.steps?.length) return null;
  return ap.steps.map((step, i) => ({
    num: (step.index ?? i) + 1,
    title: step.title,
    desc: step.description ?? "",
  }));
}

/** faqs.faqs[] → CourseFAQItem[] */
export function extractFAQs(program: ApiProgram): CourseFAQItem[] | null {
  const f = program.faqs;
  if (!f || !f.faqs?.length) return null;
  return f.faqs.map((item) => ({
    q: item.title,
    a: item.description,
  }));
}

/** includes_summary.items[] → string[] */
export function extractPricingFeatures(program: ApiProgram): string[] | null {
  const s = program.includes_summary;
  if (!s || !s.items?.length) return null;
  return s.items;
}

// ─── Cohort / Instructor transformers ─────────────────────────────────────────

export function transformApiInstructor(
  inst: ApiInstructor
): CoursePractitioner {
  return {
    role: inst.title ?? "Instructor",
    name: inst.name,
    experience:
      inst.years_of_experience != null
        ? `${inst.years_of_experience} Years`
        : "N/A",
    bio: inst.biography ?? "",
    expertise: inst.expertise ?? "",
    sessions: "0 Sessions",
    photo:
      resolveApiImage(inst.profile_image_url) ?? "/images/Pract 1.png",
  };
}

export function extractPractitioners(
  cohorts: ApiCohort[]
): CoursePractitioner[] {
  const seen = new Set<number>();
  const practitioners: CoursePractitioner[] = [];
  for (const cohort of cohorts) {
    for (const inst of cohort.instructors ?? []) {
      if (!seen.has(inst.id)) {
        seen.add(inst.id);
        practitioners.push(transformApiInstructor(inst));
      }
    }
  }
  return practitioners;
}

export function transformApiCohort(
  cohort: ApiCohort,
  index: number
): CourseCohort {
  const instructor = cohort.instructors?.[0];
  const isOpen =
    cohort.status === "OPEN" ||
    cohort.status === "ACTIVE" ||
    cohort.status === "UPCOMING";

  return {
    title: cohort.title,
    badge: isOpen ? "Open" : undefined,
    startDate: formatApiDate(cohort.start_date),
    cohort: `${index + 1}`,
    endDate: formatApiDate(cohort.end_date),
    instructor:
      resolveApiImage(instructor?.profile_image_url) ??
      "/images/Pract 1.png",
    rating:
      cohort.average_rating != null
        ? cohort.average_rating.toFixed(1)
        : "4.9",
    duration: cohort.duration ?? "8 Weeks",
    students: `${cohort.enrolled_students_count ?? 0} / ${cohort.max_students ?? 0} Students`,
    cta: isOpen ? "Enroll Now" : "Join Waitlist",
    ctaStyle: isOpen ? "button" : "text",
  };
}
