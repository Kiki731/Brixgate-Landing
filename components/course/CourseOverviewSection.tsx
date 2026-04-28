"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import type {
  CourseStat,
} from "@/lib/courses-data";

// ─── Types ────────────────────────────────────────────────────

export interface ProgramOverviewItem {
  title: string;
  description: string;
}

interface CurriculumData {
  title: string;
  description: string;
  items: string[];
}

interface Props {
  // Left column
  programOverview: {
    description: string;
    items: ProgramOverviewItem[];
  };
  skills: string[];
  curriculum: CurriculumData;

  // Right column sidebar
  admission: { deadline: string; subtitle: string };
  contact: { phone: string; email: string };
  stats: CourseStat[];
}

// ─── Left Column ─────────────────────────────────────────────

function ProgramOverviewCard({ overview }: { overview: Props["programOverview"] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2
          className="text-[#222] text-[26px] sm:text-[40px] font-medium tracking-[-0.05em]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Program Overview
        </h2>
        <p
          className="text-[#222] text-[16px] leading-normal"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          {overview.description}
        </p>
      </div>

      {/* What you'll learn card */}
      <div className="bg-[#f9f9f9] rounded-[12px] p-4 flex flex-col gap-4">
        <h3
          className="text-[#222] text-[20px] font-medium tracking-[-0.075em]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          What you&apos;ll learn
        </h3>

        <div className="bg-white border border-[#f4f4f4] rounded-[12px] p-6 flex flex-col gap-6">
          {overview.items.map((item, i) => (
            <div key={item.title}>
              <div className="flex gap-[10px] items-start">
                {/* purple tick */}
                <div className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#474dc1] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[#222] text-[18px] font-semibold leading-[24px]"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[#727272] text-[14px] leading-[24px]"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
              {/* divider between items */}
              {i < overview.items.length - 1 && (
                <div className="mt-6 border-t border-[#f0f0f0]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsCard({ skills }: { skills: string[] }) {
  return (
    <div className="bg-white border border-[#f4f4f4] rounded-[12px] p-6">
      <h2
        className="text-[#222] text-[22px] sm:text-[32px] font-medium tracking-[-0.05em] mb-5"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Skills you&apos;ll gain
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-[#f3f3ff] text-[#222] text-[14px] px-[10px] py-[4px] rounded-[50px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function CurriculumCard({ curriculum }: { curriculum: CurriculumData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState(false);
  const isOpen = (i: number) => expandAll || openIndex === i;

  return (
    <div id="curriculum" className="bg-white border border-[#f4f4f4] rounded-[12px] p-6 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2
          className="text-[#222] text-[22px] sm:text-[32px] font-medium tracking-[-0.05em]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {curriculum.title}
        </h2>
        <p
          className="text-[#727272] text-[15px] sm:text-[18px] leading-[1.625]"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          {curriculum.description}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {/* Header row */}
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-[#222] text-[14px] sm:text-[18px] font-semibold tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Content
          </span>
          <button
            onClick={() => { setExpandAll(!expandAll); setOpenIndex(null); }}
            className="text-[#474dc1] text-[16px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            {expandAll ? "Collapse all" : "Expand all"}
          </button>
        </div>

        {/* ── Each accordion is its own separate card ── */}
        <div className="flex flex-col gap-3">
          {curriculum.items.map((item, i) => (
            <div
              key={item}
              className="border border-[#e2e8f0] rounded-[8px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
            >
              <button
                className="w-full flex items-center justify-between gap-2 bg-[#fafafa] hover:bg-gray-50 transition-colors px-[18px] py-[13px] h-[70px]"
                onClick={() => { if (!expandAll) setOpenIndex(openIndex === i ? null : i); }}
              >
                <div className="flex items-center gap-2">
                  <ChevronDown
                    className={`w-4 h-4 text-[#474dc1] shrink-0 transition-transform ${isOpen(i) ? "rotate-180" : ""}`}
                  />
                  <span
                    className="text-[#031124] text-[14px] sm:text-[18px] font-semibold text-left"
                    style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              </button>
              {isOpen(i) && (
                <div className="px-[18px] py-4 bg-white border-t border-[#f4f4f4]">
                  <p className="text-[#475569] text-sm leading-relaxed">
                    Detailed module content coming soon.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Right Sidebar Cards ──────────────────────────────────────

function AdmissionCard({ admission }: { admission: Props["admission"] }) {
  return (
    <div className="bg-[#f7efff] rounded-[12px] p-6 flex flex-col gap-2">
      <p
        className="text-[#222] text-[20px] font-medium tracking-[-0.075em]"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {admission.deadline}
      </p>
      <p
        className="text-[#727272] text-[16px] leading-[24px]"
        style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
      >
        {admission.subtitle}
      </p>
    </div>
  );
}

const CONTACT_EMAILS = "brixgate@gmail.com,we@brixgate.com";

function ContactCard({ contact }: { contact: Props["contact"] }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Course Enquiry — BrixGate");
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || "Not provided"}\n\n` +
      `Sent from the BrixGate course contact form.`
    );

    window.open(
      `mailto:${CONTACT_EMAILS}?subject=${subject}&body=${body}`,
      "_self"
    );

    setSent(true);
    setTimeout(() => setSent(false), 8000);
  };

  return (
    <div className="bg-white border border-[#f2f2f2] rounded-[16px] shadow-[0px_0px_32.4px_0px_rgba(0,0,0,0.1)] p-3 flex flex-col gap-3">

      {/* ── Contact Us header — fully rounded standalone card ── */}
      <div className="bg-[#00435d] rounded-[12px] px-5 py-5 flex flex-col gap-2">
        <h3
          className="text-white text-[20px] sm:text-[28px] font-medium tracking-[-0.075em]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Contact Us
        </h3>
        <div
          className="text-white/90 text-[14px] flex flex-col gap-0.5"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          <span>📞 {contact.phone}</span>
          <span>✉️ {contact.email}</span>
        </div>
      </div>

      {/* ── Form — separate from the header card ── */}
      <div className="px-2 py-1 flex flex-col gap-4">
          {sent ? (
            <p className="text-[#16a34a] text-sm font-medium text-center py-4">
              ✓ Message received — we&apos;ll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[#222] text-[13px] font-medium"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  Full Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-[6px] h-[44px] px-3 text-[14px] text-[#222] focus:outline-none focus:ring-2 focus:ring-[#474dc1]/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[#222] text-[13px] font-medium"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-[6px] h-[44px] px-3 text-[14px] text-[#222] focus:outline-none focus:ring-2 focus:ring-[#474dc1]/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[#222] text-[13px] font-medium"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-[6px] h-[44px] px-3 text-[14px] text-[#727272] focus:outline-none focus:ring-2 focus:ring-[#474dc1]/30"
                />
              </div>
              <p
                className="text-[10px] text-[#727272]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                By clicking Contact Us, I agree to the{" "}
                <a href="#" className="text-[#474dc1] font-semibold">Terms of Use</a>{" "}
                and{" "}
                <a href="#" className="text-[#474dc1] font-semibold">Privacy Policy</a>.
              </p>
              <button
                type="submit"
                className="w-full bg-[#d51520] hover:bg-[#b8111e] transition-colors text-white font-medium text-[15px] h-[48px] rounded-[6px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Contact Us
              </button>
            </form>
          )}
        </div>
    </div>
  );
}

function CertificateCard() {
  return (
    <div className="bg-white border border-[#f2f2f2] rounded-[12px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] p-5 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3
          className="text-[#222] text-[22px] sm:text-[32px] font-medium tracking-[-0.075em] leading-tight"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Earn Professional Certificate
        </h3>
        <p
          className="text-[#727272] text-[16px] leading-normal"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          Awarded to professionals who complete the program and submit a passing capstone project.
          Verifiable. Shareable on LinkedIn. Tied to your actual artefact, not just attendance.
        </p>
      </div>
      {/* Certificate image */}
      <div className="relative w-full h-[230px] rounded-[12px] overflow-hidden border border-[#eee]">
        <Image
          src="/images/Certificates.png"
          alt="Brixgate Certificate of Achievement"
          fill
          className="object-fill"
          sizes="(max-width: 1280px) 33vw, 420px"
        />
      </div>
      {/* Bullets */}
      <ul
        className="flex flex-col gap-2 text-[#727272] text-[16px]"
        style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
      >
        {[
          "Issued by the Brixgate Expert Network",
          "Linked to your capstone project artefact",
          "Verifiable digital certificate",
          "LinkedIn-ready badge included",
        ].map((item) => (
          <li key={item} className="list-disc ml-6 leading-normal">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NeedAssistanceSidebar() {
  return (
    <div className="relative bg-[#00435d] rounded-[12px] min-h-[264px] overflow-hidden flex flex-col justify-between p-5">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/pattern 419.png"
          alt=""
          fill
          className="object-cover opacity-70"
          sizes="420px"
        />
      </div>

      {/* Decorative person image — top-right, larger */}
      <div className="absolute top-0 right-0 w-[160px] h-[280px] pointer-events-none">
        <Image
          src="/images/Group 1171276408.png"
          alt=""
          fill
          className="object-contain object-top"
          sizes="160px"
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col gap-2 max-w-[200px]">
        <h3
          className="text-white text-[20px] font-semibold tracking-[-0.075em]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Need Assistance?
        </h3>
        <p
          className="text-white/80 text-[14px] leading-[24px]"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          Contact our team for support with applications, program details, or any other inquiries.
        </p>
      </div>

      {/* CTA button */}
      <div className="relative z-10 mt-6">
        <a
          href="tel:+2347088093620"
          className="inline-flex items-center justify-center bg-white text-[#00435d] text-[14px] font-semibold px-5 py-2.5 rounded-[6px] hover:bg-gray-100 transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Talk to an Advisor
        </a>
      </div>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────

export default function CourseOverviewSection({
  programOverview,
  skills,
  curriculum,
  admission,
  contact,
}: Props) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* ── Left: 8 cols ───────────────────────────────── */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <ProgramOverviewCard overview={programOverview} />
            <SkillsCard skills={skills} />
            <CurriculumCard curriculum={curriculum} />
          </div>

          {/* ── Right: 4 cols (sticky sidebar) ─────────────── */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-[80px]">
            <AdmissionCard admission={admission} />
            <ContactCard contact={contact} />
            <CertificateCard />
            <NeedAssistanceSidebar />
          </div>

        </div>
      </div>
    </section>
  );
}
