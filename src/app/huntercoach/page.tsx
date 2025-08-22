import { HuntercoachHeroSection } from "@/components/sections/huntercoach-hero-section";
import { HuntercoachCompanyShowcase } from "@/components/sections/huntercoach-company-showcase";
import { HuntercoachBentoSection } from "@/components/sections/huntercoach-bento-section";
import { HuntercoachFeatureSection } from "@/components/sections/huntercoach-feature-section";
import { HuntercoachTestimonialSection } from "@/components/sections/huntercoach-testimonial-section";
import { HuntercoachPricingSection } from "@/components/sections/huntercoach-pricing-section";
import { HuntercoachCTASection } from "@/components/sections/huntercoach-cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HuntercoachPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HuntercoachHeroSection />
      <HuntercoachCompanyShowcase /> 
      <HuntercoachBentoSection />
      <HuntercoachFeatureSection />
      <HuntercoachPricingSection />
      <HuntercoachCTASection />
      <FooterSection />
    </main>
  );
} 