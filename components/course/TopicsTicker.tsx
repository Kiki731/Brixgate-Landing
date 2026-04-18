const topics = [
  "AI threat detection",
  "SOC automation",
  "Penetration Testing with AI",
  "SIEM triage",
  "Cloud security & compliance",
  "Incident response",
  "Ethical hacking",
];

/** Seamless infinite marquee — duplicated set so the loop is invisible */
export default function TopicsTicker({ items = topics }: { items?: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="bg-white border-y border-[#ffffff] overflow-hidden h-[43px] flex items-center my-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((topic, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            {/* text with 4px padding on each side so gap to bullet = 4px */}
            <span
              className="text-[#222] text-[16px] leading-none shrink-0 px-[16px]"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 600 }}
            >
              {topic}
            </span>
            {/* bullet — mx-[4px] gives 4px on both sides → uniform 4px gap everywhere */}
            <span className="w-[8px] h-[8px] rounded-full bg-[#A855F7] shrink-0 mx-[4px]" />
          </span>
        ))}
      </div>
    </div>
  );
}
