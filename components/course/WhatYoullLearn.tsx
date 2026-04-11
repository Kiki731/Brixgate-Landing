import { CheckCircle } from "lucide-react";

const outcomes = [
  {
    title: "Threat Detection with AI",
    description:
      "Build and deploy machine learning models that identify anomalies, intrusions, and zero-day threats in real time across network traffic and system logs.",
  },
  {
    title: "Automated Incident Response",
    description:
      "Design AI-powered playbooks that automatically triage, contain, and respond to security incidents — reducing response time from hours to seconds.",
  },
  {
    title: "Intelligence-Led Security",
    description:
      "Leverage large language models and AI agents to gather threat intelligence, analyze attack patterns, and generate actionable security reports.",
  },
];

export default function WhatYoullLearn() {
  return (
    <section className="pt-[100px] pb-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#727272] text-xs font-medium tracking-widest uppercase mb-3">
            Learning Outcomes
          </p>
          <h2 className="font-[family-name:var(--font-dm-sans)] font-medium text-[32px] lg:text-[40px] text-[#0f172a] leading-tight">
            What You&apos;ll Learn
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-7 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#e0f2fe] flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#0284c7]" />
              </div>
              <h3 className="font-semibold text-[#0f172a] text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
