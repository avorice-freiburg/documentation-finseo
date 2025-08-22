"use client";

import { SectionHeader } from "@/components/section-header";
import { huntercoachConfig } from "@/lib/huntercoach-config";
import { motion } from "motion/react";
import { Settings, Users, Zap, Brain } from "lucide-react";

const featureIcons = [
  { id: 1, icon: Brain },
  { id: 2, icon: Zap },
  { id: 3, icon: Users },
  { id: 4, icon: Settings },
];

export function HuntercoachFeatureSection() {
  const { featureSection } = huntercoachConfig;

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center w-full relative px-4 md:px-10"
    >
      <div className="border-x md:mx-10 relative w-full">
        <div className="border-b w-full h-full p-10 md:p-14">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              {featureSection.title}
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              {featureSection.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {featureSection.items.map((item, index) => {
            const IconComponent = featureIcons.find(icon => icon.id === item.id)?.icon || Brain;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-border transition-all duration-300 p-8"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 