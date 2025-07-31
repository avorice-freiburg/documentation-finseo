import { AnimatedHeroDashboard } from "@/components/animated-hero-dashboard";
import { AnimatedAIHeading } from "@/components/animated-ai-heading";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6 pb-12">

        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero.badgeIcon}
            {hero.badge}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <AnimatedAIHeading />
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              See if AI talks about your brand, what it recommends - and what it doesn't. Track your visibility, monitor competitors, and get clear step by step actions to improve your presence in AI search.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <Link
              href={hero.cta.primary.href}
              className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-md text-primary-foreground dark:text-secondary-foreground w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
            >
              {hero.cta.primary.text}
            </Link>
            <button
              data-cal-link="finseo/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="h-10 flex items-center justify-center w-32 px-5 text-sm font-normal tracking-wide text-primary rounded-md transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80 cursor-pointer"
            >
              Get Demo
            </button>
          </div>
        </div>
      </div>
      <AnimatedHeroDashboard />
    </section>
  );
}
