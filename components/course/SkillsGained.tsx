const skills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Threat Detection",
  "Incident Response",
  "Network Security",
  "Penetration Testing",
  "Security Automation",
  "SIEM & Log Analysis",
  "Brainstorming",
  "Planning",
  "Risk Assessment",
  "AI Ethics",
];

export default function SkillsGained() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            Skills You&apos;ll Gain
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#f3f3ff] border border-[#e0e0ff] text-[#3b3baa] text-sm font-medium px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
