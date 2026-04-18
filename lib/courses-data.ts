// ─── Types ────────────────────────────────────────────────────────────────────

export type CourseStat = { label: string; value: string };

export type CourseTool = { name: string; color: string };

export type CourseStep = { num: number; title: string; desc: string };

export type CourseProfession = { label: string; color: string };

export type CourseProject = { title: string; desc: string; image: string };

export type CourseCohort = {
  title: string;
  badge?: string;
  startDate: string;
  cohort: string;
  endDate: string;
  instructor: string;
  rating: string;
  duration: string;
  students: string;
  cta: string;
  ctaStyle: "text" | "button";
};

export type CourseTestimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  alumni: string;
  avatar: string;
};

export type CourseFAQItem = { q: string; a: string };

/** Lightweight card used in the "Other Programs" section */
export type CourseLink = { title: string; slug: string; image: string };

export type ProgramOverviewItem = { title: string; description: string };

export interface CourseData {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    category: string;
    title: string;
    description: string;
    heroImage: string;
    stats: CourseStat[];
  };
  /** Topics shown in the scrolling ticker below the hero */
  tickerTopics: string[];
  /** Program overview (left column, 8/12) */
  programOverview: {
    description: string;
    items: ProgramOverviewItem[];
  };
  /** Sidebar admission deadline card */
  admission: { deadline: string; subtitle: string };
  /** Sidebar contact info */
  contact: { phone: string; email: string };
  skills: string[];
  curriculum: {
    title: string;
    description: string;
    items: string[];
  };
  tools: CourseTool[];
  howToApply: {
    steps: CourseStep[];
    professions: CourseProfession[];
    eligibility: string[];
  };
  portfolioProjects: CourseProject[];
  cohorts: CourseCohort[];
  testimonials: CourseTestimonial[];
  faqs: CourseFAQItem[];
}

// ─── Course Data ───────────────────────────────────────────────────────────────

export const courses: CourseData[] = [
  {
    slug: "ai-in-cyber-security",
    meta: {
      title: "AI in Cyber Security & Intelligence — BrixGate Cohort 1",
      description:
        "Master AI-powered threat detection, automated incident response, and intelligence-led security. Join BrixGate Cohort 1 — live online, 2 weeks, built for security professionals.",
    },
    hero: {
      category: "Artificial Intelligence",
      title: "AI in Cyber Security",
      description:
        "A 3-week intensive for working cybersecurity professionals. Use AI to detect threats faster, automate your workflows, and operate at a level manual analysis cannot match.",
      heroImage: "/images/photo_5960941581084855491_y 1.png",
      stats: [
        { label: "Application Closes", value: "30 Apr, 2026" },
        { label: "Cohort Start Date", value: "2 May, 2026" },
        { label: "Program Duration", value: "2 weeks" },
        { label: "Learning Format", value: "Live, Online classes" },
      ],
    },
    tickerTopics: [
      "AI threat detection",
      "SOC automation",
      "Penetration Testing with AI",
      "SIEM triage",
      "Cloud security & compliance",
      "Incident response",
      "Ethical hacking",
    ],
    programOverview: {
      description:
        "Every week builds on the last — from AI foundations through to a working AI-augmented security toolkit you deploy immediately.",
      items: [
        {
          title: "AI Foundations for Cybersecurity",
          description:
            "Understand how LLMs and AI systems operate in security contexts. Explore AI-driven threat intelligence platforms, prompt engineering for security analysis, and the data security implications of using AI with sensitive operational data.",
        },
        {
          title: "AI-Augmented Attack & Defence",
          description:
            "Hands-on AI-assisted penetration testing, SIEM triage, and SOC automation. Log analysis, vulnerability scanning, and real-time incident detection. Ethical hacking exercises using AI recon and payload generation. Build automated detection pipelines from scratch.",
        },
        {
          title: "Build Your AI Security Toolkit",
          description:
            "Apply everything to your specific role. Build a working AI-integrated workflow: an incident response playbook, compliance automation dashboard, or custom threat detection model. Present your capstone. Leave with a portfolio artefact and your certificate.",
        },
      ],
    },
    admission: {
      deadline: "Admission deadline: 30th April",
      subtitle: "Hurry now and click the application button",
    },
    contact: {
      phone: "+234 7088093620",
      email: "we@brixgate.com",
    },
    skills: [
      "Automate triage & threat detection",
      "Smarter recon, faster engagements",
      "Build AI-native security operations",
      "Enforce compliance at scale",
      "AI-assisted forensics & triage",
      "Automate compliance workflows",
    ],
    curriculum: {
      title: "Program Curriculum",
      description:
        "Every week builds on the last — from AI foundations through to a working AI-augmented security toolkit you deploy immediately.",
      items: [
        "Introduction to AI & Cybersecurity Fundamentals",
        "Threat Intelligence with Machine Learning",
        "AI-Powered Intrusion Detection & Response",
        "Penetration Testing Augmented with AI",
        "Continuous Integration and Security Automation (CI/CS)",
      ],
    },
    tools: [
      { name: "Ollama", color: "#000000" },
      { name: "Splunk", color: "#000000" },
      { name: "Metasploit", color: "#2563eb" },
      { name: "Burp Suite", color: "#f97316" },
      { name: "AI Threat Intel", color: "#7c3aed" },
      { name: "GRC Automation", color: "#16a34a" },
      { name: "IR Playbooks", color: "#dc2626" },
      { name: "ChatGPT", color: "#10b981" },
      { name: "IBM Security", color: "#1d4ed8" },
      { name: "ElasticSecurity", color: "#0ea5e9" },
      { name: "CrowdStrike", color: "#ef4444" },
      { name: "Darktrace", color: "#f59e0b" },
      { name: "Palo Alto", color: "#dc2626" },
    ],
    howToApply: {
      steps: [
        { num: 1, title: "Submit Application", desc: "Fill in your application by providing your details." },
        { num: 2, title: "Reserve your seat", desc: "Select the course that fits your goals." },
        { num: 3, title: "Start Learning", desc: "Begin your Brixgate learning journey." },
      ],
      professions: [
        { label: "Security Analyst", color: "bg-[#e0f2fe] text-[#0369a1]" },
        { label: "Penetration Testers", color: "bg-[#fce7f3] text-[#9d174d]" },
        { label: "SOC Engineers", color: "bg-[#f0fdf4] text-[#166534]" },
        { label: "Cloud Security Engineers", color: "bg-[#fef9c3] text-[#854d0e]" },
        { label: "Incidence Responders", color: "bg-[#fff7ed] text-[#9a3412]" },
        { label: "GRC Professionals", color: "bg-[#f0fdf4] text-[#14532d]" },
      ],
      eligibility: [
        "Experienced cybersecurity professional",
        "Interest in using AI in cybersecurity",
        "Problem-solving mindset",
      ],
    },
    portfolioProjects: [
      {
        title: "Phishing Email Detection Model",
        desc: "Train an AI-based system to identify suspicious phishing emails using patterns, keywords, and sender behavior.",
        image: "/images/Background+Shadow 4.png",
      },
      {
        title: "Malware Classification Project",
        desc: "Use machine learning techniques to categorize and identify different types of malware threats.",
        image: "/images/Background+Shadow 3.png",
      },
      {
        title: "Network Threat Monitoring Dashboard",
        desc: "Build a dashboard that helps monitor unusual network activity and security alerts in real time.",
        image: "/images/Background+Shadow 2.png",
      },
      {
        title: "AI-Powered Intrusion Detection Concept",
        desc: "Work on a security model designed to detect unauthorized access attempts using intelligent pattern recognition.",
        image: "/images/Background+Shadow.png",
      },
    ],
    cohorts: [
      {
        title: "AI in Cyber Security April 2026",
        startDate: "Ongoing",
        cohort: "April Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Rectangle 152.png",
        rating: "4.9",
        duration: "3 weeks",
        students: "312 students",
        cta: "Ongoing Program",
        ctaStyle: "text",
      },
      {
        title: "AI in Cyber Security April 2026",
        badge: "Limited Seats",
        startDate: "30 Apr 2026",
        cohort: "April Cohort",
        endDate: "15 Apr 2026",
        instructor: "/images/Rectangle 153.png",
        rating: "4.9",
        duration: "3 weeks",
        students: "100 students enrolled",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
      {
        title: "AI in Cyber Security March 2026",
        startDate: "2 Mar 2026",
        cohort: "March Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Rectangle 154.png",
        rating: "4.9",
        duration: "3 weeks",
        students: "312 students",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
    ],
    testimonials: [
      {
        name: "Adeyemi Oluremi",
        role: "Penetration Tester",
        location: "Lagos, Nigeria",
        quote:
          "I went in sceptical about whether AI could fit into a penetration testing workflow. Three weeks later I had a working setup and my recon time dropped by more than half. The local setup is the most useful thing — no data leaving our environment.",
        rating: 4.9,
        alumni: "3k",
        avatar: "/images/Background 1.png",
      },
      {
        name: "Emeka Davis",
        role: "SOC Engineer",
        location: "Abuja, Nigeria",
        quote:
          "Finally a program that treats us like professionals. No hand-holding, no basics I already know. Straight into applying AI to real security problems. I built an IR playbook in Week 3 that my team is actually using right now.",
        rating: 4.9,
        alumni: "6k",
        avatar: "/images/Background 2.png",
      },
      {
        name: "Wale Adams",
        role: "Cloud Security Engineer",
        location: "Port-Harcourt, Nigeria",
        quote:
          "The SIEM triage section alone justified the enrollment fee. We went from 400 daily alerts to a manageable queue of about 30 that actually need human attention. That's the kind of shift that changes how a team operates.",
        rating: 4.9,
        alumni: "2.5k",
        avatar: "/images/Student Image.png",
      },
    ],
    faqs: [
      {
        q: "Do I need to already work in cybersecurity?",
        a: "Yes — this program is designed for working cybersecurity professionals who want to augment their skills with AI. You should already have a foundational understanding of security concepts like networks, threat types, and basic tooling. We don't teach cybersecurity basics; we teach you how AI changes what you can do with what you already know.",
      },
      {
        q: 'What does "Live Instructor-Led" mean exactly?',
        a: "Every session runs live online via video — not pre-recorded. You'll interact directly with the instructor, ask questions in real time, and work through exercises with your cohort. Sessions are also recorded so you can review them, but the primary experience is live.",
      },
      {
        q: "Will I need to pay for AI tools on top of the fee?",
        a: "No. The program is structured around tools with free tiers or open-source options. Ollama (local AI), open-source SIEM setups, and free-tier ChatGPT are used throughout. Where a paid tool is demonstrated, a free alternative is always provided.",
      },
      {
        q: "Is the certificate recognised by employers?",
        a: "The certificate is issued by Brixgate and tied to a verifiable capstone project. It's designed to be portfolio-evidence, not just a participation badge. Increasingly, employers in security value demonstrated capability over credentials — the project artefact is the real differentiator.",
      },
      {
        q: "Can my company pay on my behalf?",
        a: "Yes. We can issue an invoice to your company or employer. Contact us at we@brixgate.com with your company's billing details and we'll arrange it. Corporate group enrollments (3+ seats) also receive a discount.",
      },
    ],
  },

  // ── Add future courses here ──────────────────────────────────────────────────
  // { slug: "ai-in-data-analytics", meta: { ... }, hero: { ... }, ... },
  // { slug: "ai-in-product-management", ... },
  // { slug: "ai-in-devops-cloud", ... },
];

// ─── All program links (used by OtherPrograms section) ────────────────────────
export const courseLinks: CourseLink[] = [
  {
    title: "AI in Cyber Security & Intelligence",
    slug: "ai-in-cyber-security",
    image: "/images/Cloud and DevOps.jpeg",
  },
  {
    title: "AI in Data Analytics & Intelligence",
    slug: "ai-in-data-analytics",
    image: "/images/Data Analytics.jpeg",
  },
  {
    title: "AI in Product Management",
    slug: "ai-in-product-management",
    image: "/images/Product Management.jpeg",
  },
  {
    title: "AI in DevOps & Cloud Computing",
    slug: "ai-in-devops-cloud",
    image: "/images/Cloud and DevOps.jpeg",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCourseBySlug(slug: string): CourseData | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getOtherPrograms(currentSlug: string): CourseLink[] {
  return courseLinks.filter((c) => c.slug !== currentSlug);
}
