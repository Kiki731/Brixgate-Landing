import Image from "next/image";

export default function CertificateSection() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left: Text */}
          <div className="flex-1 flex flex-col gap-5">
            <h2
              className="text-[#222] text-[32px] font-medium tracking-[-0.05em] leading-tight"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Earn Professional Certificate
            </h2>
            <p
              className="text-[#475569] text-[16px] leading-relaxed max-w-[420px]"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
            >
              Awarded to professionals who complete the program and submit a
              passing capstone project. Verifiable. Shareable on LinkedIn. Tied
              to your actual artefact, not just attendance.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Issued by the Brixgate Expert Network",
                "Linked to your capstone project artefact",
                "Verifiable digital certificate",
                "LinkedIn-ready badge included",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[#475569] text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d51420] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Certificate image */}
          <div className="flex-none w-full lg:w-[400px]">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-4">
              <Image
                src="/images/Rectangle 152.png"
                alt="Brixgate Certificate of Achievement"
                width={400}
                height={280}
                className="w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
