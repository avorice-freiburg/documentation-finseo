"use client";

import { SectionHeader } from "@/components/section-header";
import { huntercoachConfig } from "@/lib/huntercoach-config";

export function HuntercoachBentoSection() {
  const { bentoSection } = huntercoachConfig;

  return (
    <section
      id="bento"
      className="flex flex-col items-center justify-center w-full relative px-2 md:px-10"
    >
      <div className="border-x md:mx-10 relative">
        <div className="border-b w-full h-full p-10 md:p-14">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              {bentoSection.title}
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              {bentoSection.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {bentoSection.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px] group"
            >
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>
              <div className="flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Closing Statement */}
        <div className="flex flex-col items-center justify-center py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance leading-relaxed">
              Es geht nicht mehr nur um{" "}
              <span className="line-through text-red-500">Keywords</span>.{" "}
              <br className="hidden md:block" />
              Es geht darum, wie{" "}
              <span className="text-secondary font-semibold">KI deine Marke versteht</span> und{" "}
              <span className="text-secondary font-semibold">empfiehlt</span>.
            </p>
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance mt-4">
              Bereit, deine KI-Sichtbarkeit zu steigern?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 