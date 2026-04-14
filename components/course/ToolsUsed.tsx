const tools = [
  { name: "Ollama", color: "#000" },
  { name: "Splunk", color: "#000" },
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
];

export default function ToolsUsed() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-[32px] font-medium tracking-[-0.05em] mb-8"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Over 12+ Tools Used
        </h2>

        <div className="bg-white border border-[#f0f0f0] rounded-2xl p-8 shadow-sm">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 text-[#222] text-[15px] font-medium"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                <span
                  className="w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                  style={{ background: tool.color }}
                >
                  {tool.name.slice(0, 2).toUpperCase()}
                </span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
