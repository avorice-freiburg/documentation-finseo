"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { useEffect } from "react";

// Declare Cal.com types
declare global {
  interface Window {
    Cal: any;
  }
}

export function BentoSection() {
  const { title, description, items } = siteConfig.bentoSection;

  useEffect(() => {
    // Load Cal.com script and initialize
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize Cal.com
      if (window.Cal) {
        window.Cal("init", "30min", {origin:"https://app.cal.com"});

        window.Cal.ns["30min"]("inline", {
          elementOrSelector:"#my-cal-inline-30min",
          config: {"layout":"month_view"},
          calLink: "finseo/30min",
        });

        window.Cal.ns["30min"]("ui", {
          "cssVarsPerTheme":{
            "light":{"cal-brand":"#0eca7b", "cal-bg-muted": "#131920"},
            "dark":{"cal-brand":"#0eca7b", "cal-bg-muted": "#131920"}
          },
          "hideEventTypeDetails":false,
          "layout":"month_view"
        });
      }
    };

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section
      id="bento"
      className="flex flex-col items-center justify-center w-full relative px-2 md:px-10"
    >
      <div className="border-x md:mx-10 relative">

        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            {title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {description}
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {items.map((item) => (
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
        
        {/* Closing Statement with Cal.com Widget */}
        <div className="flex flex-col items-center justify-center py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance leading-relaxed">
              It's not just about{" "}
              <span className="line-through text-red-500">keywords</span> anymore.{" "}
              <br className="hidden md:block" />
              It's about how{" "}
              <span className="text-secondary font-semibold">AI understands</span> and{" "}
              <span className="text-secondary font-semibold">recommends</span> your brand.
            </p>
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-balance">
              So? Let's talk!
            </p>
          </div>
          
          {/* Cal.com inline embed */}
          <div className="max-w-7xl mx-auto w-full px-4">
            <div className="w-full h-[600px] rounded-lg border border-border/30 overflow-hidden bg-background">
              <div style={{width:'100%',height:'100%',overflow:'scroll'}} id="my-cal-inline-30min"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
