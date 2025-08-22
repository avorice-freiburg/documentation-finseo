"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { huntercoachConfig } from "@/lib/huntercoach-config";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function HuntercoachHeroSection() {
  const { hero } = huntercoachConfig;

  return (
    <section className="flex flex-col items-center justify-center w-full relative px-4 md:px-10 py-12 md:py-20">
      {/* Background with dot pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 h-full w-full bg-background"></div>
        <DotPattern
          className={cn(
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "opacity-30"
          )}
        />
      </div>
      
      <div className="border-x md:mx-10 relative w-full max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={hero.image}
                  alt="Martin Jäger - Huntercoach"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Huntercoach Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20"
                >
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://www.google.com/s2/favicons?domain=huntercoach.de&sz=32" 
                        alt="Huntercoach Favicon" 
                        className="w-4 h-4"
                      />
                      <span className="text-gray-700 font-medium">Empfohlen von huntercoach.de</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Badge */}
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              {hero.badgeIcon}
              {hero.badge}
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight"
              >
                {hero.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance"
              >
                {hero.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="text-base px-8 py-6 text-black" style={{ backgroundColor: '#0eca7b' }}>
                <Link href={hero.cta.primary.href}>
                  {hero.cta.primary.text}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                <Link href={hero.cta.secondary.href}>
                  {hero.cta.secondary.text}
                </Link>
              </Button>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
} 