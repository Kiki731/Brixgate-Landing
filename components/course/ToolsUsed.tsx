import Image from "next/image";
import type { CourseTool } from "@/lib/courses-data";

export default function ToolsUsed({ tools }: { tools: CourseTool[] }) {
  const hasImages = tools.some((t) => t.image);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-[#222] text-[32px] font-medium tracking-[-0.05em] mb-8"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Over {tools.length}+ Tools Used
        </h2>

        <div className="bg-white border border-[#f0f0f0] rounded-2xl shadow-sm p-6">
          {hasImages ? (
            /* Individual tool images — grid layout */
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-6 gap-y-8">
              {tools.map((tool) =>
                tool.image ? (
                  <div
                    key={tool.name}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={120}
                      height={75}
                      className="w-[75px] h-auto sm:w-[100px] lg:w-[120px] object-contain"
                      sizes="120px"
                    />
                  </div>
                ) : null
              )}
            </div>
          ) : (
            /* Fallback: single combined image (cyber security style) */
            <div className="flex items-center justify-center">
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
          )}
        </div>
      </div>
    </section>
  );
}
