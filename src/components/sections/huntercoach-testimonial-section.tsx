"use client";

import { SectionHeader } from "@/components/section-header";
import { huntercoachConfig } from "@/lib/huntercoach-config";
import { motion } from "motion/react";

export function HuntercoachTestimonialSection() {
  const { testimonials } = huntercoachConfig;

  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full relative px-4 md:px-10">
      <div className="border-x md:mx-10 relative w-full">
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            Das sagen unsere Kunden
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Echte Erfahrungen von echten Unternehmen
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 hover:border-border transition-all duration-300"
            >
              {/* Quote content */}
              <div className="space-y-4">
                <div className="text-muted-foreground leading-relaxed">
                  {testimonial.description}
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-foreground">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Quote icon */}
              <div className="absolute top-4 right-6 text-secondary/20 group-hover:text-secondary/30 transition-colors">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                </svg>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 