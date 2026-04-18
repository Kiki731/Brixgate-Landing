import Image from "next/image";
import type { CourseTool } from "@/lib/courses-data";

export default function ToolsUsed({ tools }: { tools: CourseTool[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-[32px] font-medium tracking-[-0.05em] mb-8"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Over {tools.length}+ Tools Used
        </h2>

        <div className="bg-white border border-[#f0f0f0] rounded-2xl shadow-sm p-6 flex items-center justify-center">
          <Image
            src="/images/AI Images.png"
            alt="AI tools used in this program"
            width={1138}
            height={358}
            className="w-[70%] h-auto"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
