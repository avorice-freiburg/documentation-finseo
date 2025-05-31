import { SectionHeader } from "@/components/section-header";
import { SocialProofTestimonials } from "@/components/testimonial-scroll";
import { siteConfig } from "@/lib/config";

export function TestimonialSection() {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Real Results from Finseo Users
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          See how our AI-powered SEO platform is helping businesses increase visibility, 
          traffic, and conversions across traditional and AI search platforms.
        </p>
      </SectionHeader>
      <SocialProofTestimonials testimonials={testimonials} />
    </section>
  );
}
