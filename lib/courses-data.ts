// ─── Types ────────────────────────────────────────────────────────────────────

export type CourseStat = { label: string; value: string };

export type CourseTool = { name: string; color: string; image?: string };

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

export type CoursePractitioner = {
  role: string;
  name: string;
  experience: string;
  bio: string;
  expertise: string;
  sessions: string;
  photo: string;
};

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
  practitioners: CoursePractitioner[];
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
    practitioners: [
      {
        role: "Senior Instructor, Cyber Security & Intelligence",
        name: "Adewale Johnson",
        experience: "9+ Years",
        bio: "Adewale Johnson is an experienced cybersecurity practitioner and instructor with a strong background in digital defense, threat monitoring, and operational security. Over the years, he has supported organizations in strengthening their cyber posture, identifying system weaknesses, and responding to evolving digital threats.",
        expertise: "Threat Intelligence • Security Monitoring • Vulnerability Management • Incident Response • Cyber Defense Operations",
        sessions: "Over 1,200 live sessions taken",
        photo: "/images/Pract 1.png",
      },
      {
        role: "Lead Instructor, AI & Machine Learning Security",
        name: "Practitioner 2",
        experience: "7+ Years",
        bio: "An experienced AI and machine learning security expert with deep expertise in building secure intelligent systems and deploying ethical, scalable AI solutions across enterprise environments.",
        expertise: "Machine Learning • Deep Learning • NLP • Computer Vision • MLOps",
        sessions: "Over 800 live sessions taken",
        photo: "/images/Pract 2.png",
      },
      {
        role: "Senior Instructor, Cloud Security & Compliance",
        name: "Practitioner 3",
        experience: "10+ Years",
        bio: "A seasoned cloud security architect with extensive experience in enterprise compliance frameworks, cloud-native security patterns, and DevSecOps methodologies across multi-cloud environments.",
        expertise: "AWS Security • Azure Sentinel • Cloud Compliance • DevSecOps • Zero Trust",
        sessions: "Over 950 live sessions taken",
        photo: "/images/Pract 3.png",
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

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-in-devops-cloud",
    meta: {
      title: "AI in DevOps & Cloud Computing — BrixGate Cohort 1",
      description:
        "Master AI-powered infrastructure automation, intelligent CI/CD pipelines, and cloud cost optimisation. Join BrixGate Cohort 1 — live online, 2 weeks, built for DevOps and cloud professionals.",
    },
    hero: {
      category: "Artificial Intelligence",
      title: "AI in DevOps & Cloud Computing",
      description:
        "A 2-week intensive for DevOps professionals. Use AI to uncover insights, automate workflows, and make faster, smarter decisions.",
      heroImage: "/images/AI in DevOps & CC certificate.png",
      stats: [
        { label: "Application Closes", value: "30 Apr, 2026" },
        { label: "Cohort Start Date", value: "2 May, 2026" },
        { label: "Program Duration", value: "2 weeks" },
        { label: "Learning Format", value: "Live, Online classes" },
      ],
    },
    tickerTopics: [
      "Machine Learning",
      "Data Collection & Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization & Storytelling",
      "Statistical Analysis",
      "Cloud Analytics",
      "Kubernetes & Docker",
    ],
    programOverview: {
      description:
        "A 2-week intensive for DevOps and cloud professionals. Use AI to automate infrastructure, optimize deployments, and manage cloud systems with intelligence and speed beyond traditional DevOps practices.",
      items: [
        {
          title: "Infrastructure Engineering With AI",
          description:
            "Understand how AI integrates with modern DevOps pipelines and cloud environments. Learn infrastructure concepts, CI/CD basics, and how AI enhances cloud monitoring, scaling, and automation.",
        },
        {
          title: "Architecture, Cost, and Documentation",
          description:
            "Use AI to optimize deployments, detect system issues, automate incident response, and improve cloud performance. Work with real-world DevOps workflows powered by intelligent automation tools.",
        },
        {
          title: "Build Your AI DevOps Toolkit",
          description:
            "Apply your skills to design and deploy AI-augmented cloud pipelines, automated monitoring systems, and intelligent infrastructure solutions. Deliver a capstone project ready for real-world use.",
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
      "Cloud Computing (AWS, Azure, GCP fundamentals)",
      "Linux System Administration & Networking Basics",
      "DevOps Tooling & Workflow Automation",
      "Infrastructure as Code (Terraform, Ansible)",
      "Monitoring, Logging & Observability (Prometheus, Grafana)",
      "Site Reliability Engineering (SRE) Principles",
    ],
    curriculum: {
      title: "Program Curriculum",
      description:
        "Every week builds on the last — from AI-assisted infrastructure engineering through to a fully deployed, AI-augmented DevOps toolkit.",
      items: [
        "Week 1: Infrastructure Engineering with AI",
        "AI-generated Terraform: from brief to reviewed module",
        "AI-assisted misconfiguration scanning with Checkov & IAM policy analysis",
        "Debugging cloud deployments using AI — from error message to applied fix",
        "Week 2: Architecture, Cost & Documentation",
        "Log analysis and incident triage using AI with Ollama",
      ],
    },
    tools: [
      { name: "Ollama", color: "#000000", image: "/images/image 206.png" },
      { name: "Copilot", color: "#7c3aed", image: "/images/image 221.png" },
      { name: "ChatGPT", color: "#10b981", image: "/images/image 208.png" },
      { name: "Warp", color: "#0369a1", image: "/images/image 223.png" },
      { name: "Claude", color: "#f97316", image: "/images/Logo.svg.png" },
      { name: "GitHub", color: "#1a1a1a", image: "/images/image 220.png" },
      { name: "DeepSeek", color: "#2563eb", image: "/images/image 222.png" },
      { name: "Mistral AI", color: "#e85d04", image: "/images/image 215.png" },
      { name: "PagerDuty", color: "#16a34a", image: "/images/image 224.png" },
      { name: "Datadog", color: "#f59e0b", image: "/images/image 225.png" },
    ],
    howToApply: {
      steps: [
        { num: 1, title: "Submit Application", desc: "Fill in your application by providing your details." },
        { num: 2, title: "Reserve your seat", desc: "Select the course that fits your goals." },
        { num: 3, title: "Start Learning", desc: "Begin your Brixgate learning journey." },
      ],
      professions: [
        { label: "DevOps Engineers", color: "bg-[#e0f2fe] text-[#0369a1]" },
        { label: "Cloud Engineers", color: "bg-[#fce7f3] text-[#9d174d]" },
        { label: "Site Reliability Engineers (SREs) ", color: "bg-[#f0fdf4] text-[#166534]" },
        { label: "Software Engineers", color: "bg-[#fef9c3] text-[#854d0e]" },
        { label: "IT Operations Specialist", color: "bg-[#fff7ed] text-[#9a3412]" },
        { label: "Infrastructure Engineers", color: "bg-[#f5f3ff] text-[#5b21b6]" },
      ],
      eligibility: [
        "Experienced DevOps professional",
        "Interest in using  AI in DevOps & cloud computing",
        "Problem-solving mindset",
      ],
    },
    portfolioProjects: [
      {
        title: "AI-Powered CI/CD Pipeline",
        desc: "Automate testing, deployment, and rollback decisions using AI to build a smarter, self-healing delivery pipeline.",
        image: "/images/Devops @1.png",
      },
      {
        title: "Cloud Cost Optimization System",
        desc: "Analyze and reduce cloud spending using AI insights to identify waste, right-size resources, and forecast costs.",
        image: "/images/Devops @2.png",
      },
      {
        title: "Intelligent Incident Response System",
        desc: "Detect and resolve infrastructure issues automatically using AI-driven alerting and remediation workflows.",
        image: "/images/Devops @3.png",
      },
      {
        title: "AI-Based Log Monitoring Dashboard",
        desc: "Analyze logs in real time to detect anomalies, predict failures, and surface actionable insights automatically.",
        image: "/images/Devops @4.png",
      },
    ],
    cohorts: [
      {
        title: "AI in DevOps & Cloud Computing April 2026",
        startDate: "Ongoing",
        cohort: "April Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Pract@4.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "312 students",
        cta: "Ongoing Program",
        ctaStyle: "text",
      },
      {
        title: "AI in DevOps & Cloud Computing April 2026",
        badge: "Limited Seats",
        startDate: "30 Apr 2026",
        cohort: "April Cohort",
        endDate: "15 Apr 2026",
        instructor: "/images/Pract@5.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "100 students enrolled",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
      {
        title: "AI in DevOps & Cloud Computing March 2026",
        startDate: "2 Mar 2026",
        cohort: "March Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Pract@6.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "312 students",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
    ],
    practitioners: [
      {
        role: "Lead Instructor, Cloud Engineering & AI Operations",
        name: "Adewale Johnson",
        experience: "9+ Years",
        bio: "Adewale is a seasoned DevOps engineer and cloud architect with a strong focus on integrating AI into modern infrastructure. With years of experience building scalable systems, he helps organizations automate workflows, improve deployment efficiency, and enhance system reliability using intelligent tools.",
        expertise: "DevOps Automation • AI in Infrastructure • Cloud Architecture (AWS & Azure) • CI/CD Pipelines • Infrastructure as Code (IaC) • System Reliability Engineering",
        sessions: "Over 1,000 live sessions taken",
        photo: "/images/Pract 1.png",
      },
      {
        role: "Senior Instructor, Cloud Security & Architecture",
        name: "Ibrahim Adams",
        experience: "8+ Years",
        bio: "An experienced cloud security architect with deep expertise in designing secure, high-availability cloud systems for fintech and SaaS platforms across global markets.",
        expertise: "Kubernetes & Container Orchestration • Cloud Security • AWS & GCP • Microservices • High Availability Architecture",
        sessions: "Over 750 live sessions taken",
        photo: "/images/Pract 2.png",
      },
      {
        role: "Instructor, Site Reliability Engineering",
        name: "Chioma Nwankwo",
        experience: "7+ Years",
        bio: "A dedicated Site Reliability Engineer with a track record of building resilient, self-healing systems. Specializes in monitoring, alerting, and intelligent incident response at scale.",
        expertise: "Site Reliability Engineering • Prometheus & Grafana • Incident Management • On-call Automation • Observability",
        sessions: "Over 600 live sessions taken",
        photo: "/images/Pract 3.png",
      },
    ],
    testimonials: [
      {
        name: "Tonye Dokubo",
        role: "Cloud Engineer",
        location: "Lagos, Nigeria",
        quote:
          "This program gave me a strong foundation in cloud architecture and DevOps automation. I was able to confidently design scalable AWS infrastructure and implement CI/CD pipelines in my role almost immediately.",
        rating: 4.9,
        alumni: "3k",
        avatar: "/images/Background10.png",
      },
      {
        name: "Ugochukwu Agu",
        role: "Site Reliability Engineer",
        location: "Abuja, Nigeria",
        quote:
          "The hands-on labs in Kubernetes, monitoring, and infrastructure as code were incredibly practical. It reflects real production environments and improved how I manage system reliability at scale.",
        rating: 4.9,
        alumni: "6k",
        avatar: "/images/Background11.png",
      },
      {
        name: "Kehinde Kolapo",
        role: "DevOps Engineer",
        location: "Port-Harcourt, Nigeria",
        quote:
          "What I valued most was the focus on real-world workflows. From Docker to Terraform, everything was industry-aligned. I now deploy and manage cloud systems with much greater speed and confidence.",
        rating: 4.9,
        alumni: "2.5k",
        avatar: "/images/Background12.png",
      },
    ],
    faqs: [
      {
        q: "Do I need to already work in DevOps & Cloud Computing?",
        a: "Yes, this program is designed for working DevOps and cloud professionals who want to integrate AI into their existing workflows. You should already have a basic understanding of cloud concepts, CI/CD, or infrastructure tooling. We don't teach DevOps basics; we teach you how AI changes what you can do with what you already know.",
      },
      {
        q: 'What does "Live Instructor-Led" mean exactly?',
        a: "Sessions are delivered live via video with a Brixgate-vetted practitioner. They are recorded so you can rewatch, but live attendance is expected. The practitioner is available for questions during and between sessions.",
      },
      {
        q: "Will I need to pay for AI tools on top of the fee?",
        a: "The practitioner will confirm the final toolkit before the cohort starts. Where possible, tools that are free and open-source or locally deployable will be prioritised to avoid additional costs and data security concerns. Any tools that require paid licenses will be communicated in advance.",
      },
      {
        q: "Is the certificate recognised by employers?",
        a: "The certificate is issued by Brixgate and is tied to your capstone project artefact, which demonstrates practical applied ability rather than mere attendance. Brixgate is actively building its recognition as the standard for AI-ready professionals across Africa.",
      },
      {
        q: "Can my company pay on my behalf?",
        a: "Yes. Brixgate can issue an invoice for corporate payments. Reach out before enrolling if your finance team requires a purchase order or formal invoice.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-in-data-analytics",
    meta: {
      title: "AI in Data Analytics & Intelligence — BrixGate Cohort 1",
      description:
        "A 2-week intensive for data professionals. Use AI to uncover insights, automate workflows, and make faster, smarter decisions with real data.",
    },
    hero: {
      category: "Artificial Intelligence",
      title: "AI in Data Analytics",
      description:
        "A 2-week intensive for data professionals. Use AI to uncover insights, automate workflows, and make faster, smarter decisions.",
      heroImage: "/images/photo_5980954187358997712_y 1.png",
      stats: [
        { label: "Application Closes", value: "30 Apr, 2026" },
        { label: "Cohort Start Date", value: "2 May, 2026" },
        { label: "Program Duration", value: "2 weeks" },
        { label: "Learning Format", value: "Live, Online classes" },
      ],
    },
    tickerTopics: [
      "AI-powered analytics",
      "SQL & data querying",
      "Data visualization",
      "Predictive modeling",
      "Python for analytics",
      "Power BI & Tableau",
      "Statistical analysis",
      "Machine learning",
      "Dashboard automation",
      "ETL pipelines",
    ],
    programOverview: {
      description:
        "Each week builds on the last — from AI foundations to a practical AI-powered analytics toolkit you can apply immediately.",
      items: [
        {
          title: "AI Foundations for Data Analytics",
          description:
            "Understand how AI and modern data systems work in analytics environments. Explore data pipelines, prompt engineering for analysis, and how to handle, secure, and prepare data for AI-driven insights.",
        },
        {
          title: "AI-Driven Data Analysis & Insights",
          description:
            "Work hands-on with AI to automate data cleaning, exploration, and visualization. Perform advanced analytics, uncover patterns, build predictive models, and generate real-time insights using AI-powered tools.",
        },
        {
          title: "Build Your AI Analytics Toolkit",
          description:
            "Apply your learning to real-world scenarios. Create an AI-augmented analytics workflow — such as an automated dashboard, predictive model, or reporting system. Deliver a capstone project and leave with a portfolio-ready solution.",
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
      "Data Analysis & Interpretation",
      "SQL for Data Querying & Management",
      "Data Visualization (Power BI, Tableau)",
      "Python for Data Analytics (Pandas, NumPy)",
      "Statistical Analysis & Probability",
      "Machine Learning for Predictive Analytics",
    ],
    curriculum: {
      title: "Program Curriculum",
      description:
        "A hands-on, industry-focused curriculum designed to take you from fundamentals to real-world AI-powered analytics in just 3 weeks.",
      items: [
        "Week 1: AI Foundations for Data Analytics",
        "AI-assisted data collection, cleaning, and pipeline setup",
        "Prompt engineering for data summarization and pattern exploration",
        "Week 2: AI-Driven Data Analysis & Insights",
        "Automated visualization and anomaly detection using AI tools",
        "Predictive modeling and reporting with Python, Power BI, and Tableau",
        "Week 3: Build Your AI Analytics Toolkit",
        "Capstone: AI-augmented dashboard or predictive model",
      ],
    },
    tools: [
      { name: "Ollama", color: "#000000", image: "/images/image 206.png" },
      { name: "Llama 3", color: "#0668E1", image: "/images/image 214.png" },
      { name: "Copilot", color: "#7c3aed", image: "/images/image 227.png" },
      { name: "Mistral AI", color: "#e85d04", image: "/images/image 215.png" },
      { name: "Claude", color: "#f97316", image: "/images/Logo.svg.png" },
      { name: "GitHub", color: "#1a1a1a", image: "/images/image 220.png" },
      { name: "Power BI", color: "#f59e0b", image: "/images/image 226.png" },
      { name: "Tableau", color: "#0369a1", image: "/images/image 228.png" },
      { name: "Canva AI", color: "#10b981", image: "/images/image 211.png" },
      { name: "Julius", color: "#6366f1", image: "/images/image 229.png" },
    ],
    howToApply: {
      steps: [
        { num: 1, title: "Submit Application", desc: "Fill in your application by providing your details." },
        { num: 2, title: "Reserve your seat", desc: "Select the course that fits your goals." },
        { num: 3, title: "Start Learning", desc: "Begin your Brixgate learning journey." },
      ],
      professions: [
        { label: "Data Analysts", color: "bg-[#e0f2fe] text-[#0369a1]" },
        { label: "Product Managers", color: "bg-[#fce7f3] text-[#9d174d]" },
        { label: "Finance & Risk Analysts", color: "bg-[#f0fdf4] text-[#166534]" },
        { label: "Business Intelligence (BI) Analysts", color: "bg-[#fef9c3] text-[#854d0e]" },
        { label: "Data Scientists", color: "bg-[#fff7ed] text-[#9a3412]" },
        { label: "Operations & Strategy Analysts", color: "bg-[#f5f3ff] text-[#5b21b6]" },
      ],
      eligibility: [
        "Experienced data analyst professional",
        "Interest in using AI in data analytics & intelligence",
        "Problem-solving mindset",
      ],
    },
    portfolioProjects: [
      {
        title: "Sales Performance Dashboard",
        desc: "Build an interactive dashboard that tracks revenue, trends, and regional performance.",
        image: "/images/Background+Shadow04.png",
      },
      {
        title: "Customer Churn Prediction Model",
        desc: "Use AI to identify customers likely to leave and suggest retention strategies.",
        image: "/images/Background+Shadow05.png",
      },
      {
        title: "Marketing Campaign Analysis",
        desc: "Analyze campaign data to measure ROI, engagement, and conversion rates.",
        image: "/images/Background+Shadow06.png",
      },
      {
        title: "Financial Fraud Detection Analysis",
        desc: "Detect unusual transaction patterns using anomaly detection techniques.",
        image: "/images/Background+Shadow07.png",
      },
    ],
    cohorts: [
      {
        title: "AI in Data Analytics & Intelligence April 2026",
        startDate: "Ongoing",
        cohort: "April Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Pract@7.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "312 students",
        cta: "Ongoing Program",
        ctaStyle: "text",
      },
      {
        title: "AI in Data Analytics & Intelligence April 2026",
        badge: "Limited Seats",
        startDate: "30 Apr 2026",
        cohort: "April Cohort",
        endDate: "15 Apr 2026",
        instructor: "/images/Pract@8.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "100 students enrolled",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
      {
        title: "AI in Data Analytics & Intelligence March 2026",
        startDate: "2 Mar 2026",
        cohort: "March Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Pract@9.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "312 students",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
    ],
    practitioners: [
      {
        role: "Lead Instructor, Data Analytics & AI Intelligence",
        name: "Adewale Johnson",
        experience: "8+ Years",
        bio: "An accomplished data analytics professional with extensive experience turning complex datasets into clear, actionable insights. Has worked with organizations across fintech, retail, and healthcare to build AI-powered reporting systems and predictive models that drive real business decisions.",
        expertise: "Data Analysis & Visualization • Python (Pandas, NumPy) • SQL & Database Management • Power BI & Tableau • Machine Learning for Analytics • AI-Driven Forecasting",
        sessions: "Over 900 live sessions taken",
        photo: "/images/Pract 1.png",
      },
      {
        role: "Senior Instructor, Business Intelligence & Data Engineering",
        name: "Modupe Aluko",
        experience: "7+ Years",
        bio: "A seasoned BI analyst and data engineer with deep expertise in building scalable data pipelines, ETL workflows, and enterprise-grade reporting solutions across major industry verticals.",
        expertise: "Business Intelligence • ETL Pipelines • Data Warehousing • Power BI & Tableau • SQL & NoSQL Databases",
        sessions: "Over 700 live sessions taken",
        photo: "/images/Pract 4.png",
      },
      {
        role: "Instructor, Predictive Analytics & Machine Learning",
        name: "Chioma Nwankwo",
        experience: "6+ Years",
        bio: "A dedicated data scientist specializing in predictive analytics and applied machine learning, helping professionals unlock forecasting power with practical AI tools and hands-on methodology.",
        expertise: "Predictive Modeling • Machine Learning • Statistical Analysis • Python (Scikit-learn) • AI-Assisted Analytics",
        sessions: "Over 500 live sessions taken",
        photo: "/images/Pract 3.png",
      },
    ],
    testimonials: [
      {
        name: "Tobiloba Olabode",
        role: "Senior Product Manager",
        location: "Lagos, Nigeria",
        quote:
          "Before this program, I struggled to translate raw data into business decisions. The Data Analytics & Intelligence training gave me the confidence to build dashboards, interpret trends, and influence product strategy with real insights.",
        rating: 4.9,
        alumni: "3k",
        avatar: "/images/Background13.png",
      },
      {
        name: "Nkemdilim Nwabueze",
        role: "Business Intelligence Analyst",
        location: "Abuja, Nigeria",
        quote:
          "The hands-on approach and real-world projects made all the difference. I was able to immediately apply what I learned in Power BI and predictive analytics to client reporting. This program bridges the gap between theory and industry expectations.",
        rating: 4.9,
        alumni: "6k",
        avatar: "/images/Background14.png",
      },
      {
        name: "Ayibaemi Amakiri",
        role: "Data Engineer",
        location: "Port-Harcourt, Nigeria",
        quote:
          "What stood out for me was the depth in data engineering and analytics systems. From ETL pipelines to real-time data processing, the curriculum reflects real industry challenges. I now build more scalable and efficient data solutions with confidence.",
        rating: 4.9,
        alumni: "2.5k",
        avatar: "/images/Background15.png",
      },
    ],
    faqs: [
      {
        q: "Do I need to already work in data analytics?",
        a: "Yes — this program is designed for working data professionals who want to integrate AI into their existing workflows. You should already have a basic understanding of data concepts like spreadsheets, basic SQL, or reporting tools. We don't teach analytics basics; we teach you how AI changes what you can do with what you already know.",
      },
      {
        q: 'What does "Live Instructor-Led" mean exactly?',
        a: "Every session runs live online via video — not pre-recorded. You'll interact directly with the instructor, ask questions in real time, and work through exercises with your cohort. Sessions are also recorded so you can review them, but the primary experience is live.",
      },
      {
        q: "Will I need to pay for AI tools on top of the fee?",
        a: "No. The program is structured around tools with free tiers or open-source options. Ollama (local AI), Python, Power BI free tier, and Tableau Public are used throughout. Where a paid tool is demonstrated, a free alternative is always provided.",
      },
      {
        q: "Is the certificate recognised by employers?",
        a: "The certificate is issued by Brixgate and tied to a verifiable capstone project. It's designed to be portfolio-evidence, not just a participation badge. Employers in the data analytics space increasingly value demonstrated capability over credentials — the project artefact is the real differentiator.",
      },
      {
        q: "Can my company pay on my behalf?",
        a: "Yes. We can issue an invoice to your company or employer. Contact us at we@brixgate.com with your company's billing details and we'll arrange it. Corporate group enrollments (3+ seats) also receive a discount.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-in-product-management",
    meta: {
      title: "AI in Product Management — BrixGate Cohort 1",
      description:
        "A 2-week intensive for product professionals. Use AI to make smarter product decisions, automate workflows, and build data-driven products more effectively.",
    },
    hero: {
      category: "Artificial Intelligence",
      title: "AI in Product Management",
      description:
        "A 2-week intensive for product professionals. Use AI to make smarter product decisions, automate workflows, and build data-driven products more effectively.",
      heroImage: "/images/photo_5980954187358997710_y 1.png",
      stats: [
        { label: "Application Closes", value: "30 Apr, 2026" },
        { label: "Cohort Start Date", value: "2 May, 2026" },
        { label: "Program Duration", value: "2 weeks" },
        { label: "Learning Format", value: "Live, Online classes" },
      ],
    },
    tickerTopics: [
      "Data-driven product strategy",
      "User behavior analysis",
      "A/B testing & experimentation",
      "Product roadmap planning with AI",
      "Prompt engineering for PMs",
      "Customer insight generation",
      "AI-powered analytics",
      "Go-to-market strategy",
      "Feature prioritization",
      "Product lifecycle management",
    ],
    programOverview: {
      description:
        "Every week builds on the last — from AI foundations through to a working AI-augmented product management toolkit you deploy immediately.",
      items: [
        {
          title: "AI Foundations for Product Management",
          description:
            "Understand how AI fits into product development. Learn core concepts, data-driven thinking, user insights, and how to leverage AI for product discovery and strategy.",
        },
        {
          title: "AI-Driven Product Execution",
          description:
            "Use AI to analyze user behavior, prioritize features, generate insights, and streamline product workflows. Apply AI across the product lifecycle — from ideation to launch.",
        },
        {
          title: "Build Your AI Product Toolkit",
          description:
            "Design and implement AI-powered product strategies, automate decision-making processes, and deliver a capstone project that showcases real-world product impact.",
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
      "Data-driven product strategy",
      "User behavior analysis & product analytics",
      "Experimentation & A/B testing",
      "Product roadmap planning with AI",
      "Prompt engineering for product tasks",
      "Customer insight generation from data",
    ],
    curriculum: {
      title: "Program Curriculum",
      description:
        "Every week builds on the last — from AI foundations through to a working AI-augmented product management toolkit you deploy immediately.",
      items: [
        "Week 1: AI Foundations for Product Management",
        "AI-assisted product discovery, user research, and insight generation",
        "Prompt engineering for product specs and PRD drafting",
        "Week 2: AI-Driven Product Execution",
        "AI-powered feature prioritization and roadmap planning",
        "User behavior analysis and A/B test design using AI tools",
        "Week 3: Build Your AI Product Toolkit",
        "Capstone: AI-augmented product strategy or go-to-market plan",
      ],
    },
    tools: [
      { name: "Gamma", color: "#6366f1", image: "/images/gamma_logo.svg.png" },
      { name: "Ollama", color: "#000000", image: "/images/image 206.png" },
      { name: "Marvin", color: "#f59e0b", image: "/images/image 210.png" },
      { name: "ChatGPT", color: "#10b981", image: "/images/image 208.png" },
      { name: "Claude", color: "#f97316", image: "/images/Logo.svg.png" },
      { name: "Notion", color: "#000000", image: "/images/notion_logo.svg.png" },
      { name: "Perplexity", color: "#0ea5e9", image: "/images/image 205.png" },
      { name: "Beautiful.ai", color: "#7c3aed", image: "/images/beautifulai_logo.svg.png" },
      { name: "Dovetail", color: "#dc2626", image: "/images/dovetail_logo.svg.png" },
    ],
    howToApply: {
      steps: [
        { num: 1, title: "Submit Application", desc: "Fill in your application by providing your details." },
        { num: 2, title: "Reserve your seat", desc: "Select the course that fits your goals." },
        { num: 3, title: "Start Learning", desc: "Begin your Brixgate learning journey." },
      ],
      professions: [
        { label: "Product Managers", color: "bg-[#e0f2fe] text-[#0369a1]" },
        { label: "Associate Product Managers", color: "bg-[#fce7f3] text-[#9d174d]" },
        { label: "Growth Managers", color: "bg-[#f0fdf4] text-[#166534]" },
        { label: "Product Owners", color: "bg-[#fef9c3] text-[#854d0e]" },
        { label: "Business Analysts", color: "bg-[#fff7ed] text-[#9a3412]" },
        { label: "Startup Founders", color: "bg-[#f5f3ff] text-[#5b21b6]" },
      ],
      eligibility: [
        "Experienced Product Management professional",
        "Interest in using AI in Product Management",
        "Problem-solving mindset",
      ],
    },
    portfolioProjects: [
      {
        title: "AI-Powered Product Roadmap Tool",
        desc: "Prioritize features using data and predictive insights to build a smarter, AI-informed product roadmap.",
        image: "/images/PM@01.png",
      },
      {
        title: "User Behavior Analytics Dashboard",
        desc: "Analyze product usage and engagement trends to surface actionable insights for product decisions.",
        image: "/images/PM@02.png",
      },
      {
        title: "Customer Feedback Intelligence System",
        desc: "Use AI to analyze reviews and support tickets to identify product improvements and opportunities.",
        image: "/images/PM@03.png",
      },
      {
        title: "AI-Driven Go-To-Market Strategy Plan",
        desc: "Build a launch strategy using data-backed insights, competitor analysis, and AI-generated positioning.",
        image: "/images/PM@04.png",
      },
    ],
    cohorts: [
      {
        title: "AI in Product Management April 2026",
        startDate: "Ongoing",
        cohort: "April Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Pract@10.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "312 students",
        cta: "Ongoing Program",
        ctaStyle: "text",
      },
      {
        title: "AI in Product Management April 2026",
        badge: "Limited Seats",
        startDate: "30 Apr 2026",
        cohort: "April Cohort",
        endDate: "15 Apr 2026",
        instructor: "/images/Pract@11.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "100 students enrolled",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
      {
        title: "AI in Product Management March 2026",
        startDate: "2 Mar 2026",
        cohort: "March Cohort",
        endDate: "15 Mar 2026",
        instructor: "/images/Pract@11.png",
        rating: "4.9",
        duration: "2 weeks",
        students: "312 students",
        cta: "Enrol Now",
        ctaStyle: "button",
      },
    ],
    practitioners: [
      {
        role: "Lead Instructor, AI Product Strategy & Management",
        name: "Modupe Aluko",
        experience: "8+ Years",
        bio: "An accomplished product strategist with extensive experience leading cross-functional teams and building AI-integrated product workflows. Has helped companies across fintech, SaaS, and e-commerce ship products faster using data-driven methods and intelligent automation.",
        expertise: "Product Strategy & Roadmapping • AI-Assisted Product Discovery • User Research & Behavior Analytics • A/B Testing & Experimentation • Go-to-Market Execution",
        sessions: "Over 850 live sessions taken",
        photo: "/images/Pract 4.png",
      },
      {
        role: "Senior Instructor, Growth & Product Analytics",
        name: "Ibrahim Adams",
        experience: "7+ Years",
        bio: "A growth-focused product manager with deep expertise in analytics, experimentation, and AI-powered decision-making. Specialized in building data pipelines that inform product priorities and accelerate feature development cycles.",
        expertise: "Growth Product Management • Product Analytics • Experimentation & A/B Testing • Feature Prioritization • Customer Insight Generation",
        sessions: "Over 650 live sessions taken",
        photo: "/images/Pract 2.png",
      },
      {
        role: "Instructor, AI Tools & Product Automation",
        name: "Chioma Nwankwo",
        experience: "6+ Years",
        bio: "A product operations specialist focused on AI-powered workflow automation and tooling for modern product teams. Helps PMs move faster, write clearer specs, and ship better products using the latest AI productivity stack.",
        expertise: "Product Operations • AI Workflow Automation • PRD Writing with AI • Prompt Engineering for PMs • Roadmap Planning Tools",
        sessions: "Over 480 live sessions taken",
        photo: "/images/Pract 3.png",
      },
    ],
    testimonials: [
      {
        name: "Amara Okafor",
        role: "Product Manager",
        location: "Lagos, Nigeria",
        quote:
          "This program completely changed how I make product decisions. I now rely on data and AI instead of guesswork — my roadmaps are sharper and my stakeholder conversations are far more confident.",
        rating: 4.9,
        alumni: "3k",
        avatar: "/images/Background7.png",
      },
      {
        name: "Daniel Mensah",
        role: "Growth Product Lead",
        location: "Abuja, Nigeria",
        quote:
          "The hands-on projects made it easy to apply AI directly to my workflow. I've become twice as efficient — from writing PRDs to running experiments. This is the most practical PM program I've taken.",
        rating: 4.9,
        alumni: "6k",
        avatar: "/images/Background8.png",
      },
      {
        name: "Tunde Balogun",
        role: "Associate Product Manager",
        location: "Port-Harcourt, Nigeria",
        quote:
          "I went from basic product knowledge to confidently using AI tools for analytics, roadmaps, and strategy. The instructors are real practitioners — not theorists — and it shows in every session.",
        rating: 4.9,
        alumni: "2.5k",
        avatar: "/images/Background9.png",
      },
    ],
    faqs: [
      {
        q: "Do I need to already work in product management?",
        a: "Yes — this program is designed for working product professionals who want to integrate AI into their existing workflows. You should already have a basic understanding of product concepts like user stories, roadmaps, or sprint planning. We don't teach PM basics; we teach you how AI changes what you can do with what you already know.",
      },
      {
        q: 'What does "Live Instructor-Led" mean exactly?',
        a: "Every session runs live online via video — not pre-recorded. You'll interact directly with the instructor, ask questions in real time, and work through exercises with your cohort. Sessions are also recorded so you can review them, but the primary experience is live.",
      },
      {
        q: "Will I need to pay for AI tools on top of the fee?",
        a: "No. The program is structured around tools with free tiers or open-source options. Ollama (local AI), Notion free tier, free-tier ChatGPT, and Gamma free plan are used throughout. Where a paid tool is demonstrated, a free alternative is always provided.",
      },
      {
        q: "Is the certificate recognised by employers?",
        a: "The certificate is issued by Brixgate and tied to a verifiable capstone project. It's designed to be portfolio-evidence, not just a participation badge. Employers in the product space increasingly value demonstrated capability over credentials — the project artefact is the real differentiator.",
      },
      {
        q: "Can my company pay on my behalf?",
        a: "Yes. We can issue an invoice to your company or employer. Contact us at we@brixgate.com with your company's billing details and we'll arrange it. Corporate group enrollments (3+ seats) also receive a discount.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-in-software-engineering",
    meta: {
      title: "AI in Software Engineering — BrixGate",
      description:
        "A hands-on intensive for software engineers. Use AI to write better code faster, automate testing, and ship production-ready software with AI-augmented workflows.",
    },
    hero: {
      category: "Artificial Intelligence",
      title: "AI in Software Engineering",
      description:
        "A hands-on intensive for software engineers. Use AI to write better code faster, automate testing, and ship production-ready software with AI-augmented workflows.",
      heroImage: "/images/photo_5960941581084855491_y 1.png",
      stats: [
        { label: "Application Closes", value: "TBA" },
        { label: "Cohort Start Date", value: "TBA" },
        { label: "Program Duration", value: "3 weeks" },
        { label: "Learning Format", value: "Live, Online classes" },
      ],
    },
    programOverview: { description: "", items: [] },
    skills: [],
    curriculum: { title: "Program Curriculum", description: "", items: [] },
    tools: [],
    portfolioProjects: [],
    testimonials: [],
    howToApply: { steps: [], professions: [], eligibility: [] },
    faqs: [],
    cohorts: [],
    practitioners: [],
    tickerTopics: [],
    admission: { deadline: "TBA", subtitle: "" },
    contact: { phone: "+234 7088093620", email: "we@brixgate.com" },
  },
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
