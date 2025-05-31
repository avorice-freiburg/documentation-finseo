'use client';

import React from 'react';
import { BookOpen, Bell, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FooterSection } from "@/components/sections/footer-section";

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center gap-10 py-16 relative min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 h-full w-full bg-background"></div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
              "opacity-20"
            )}
          />
        </div>
        
        <div className="text-center max-w-4xl mx-auto px-6 z-10 pt-16">
          <div className="mx-auto flex justify-center">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2 mb-6">
              <BookOpen className="h-4 w-4" />
              Finseo Blog
            </p>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-medium tracking-tighter mb-6">
            Coming Soon
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We're working on something amazing! Our blog will feature the latest insights on AI, SEO, 
            content creation, and digital marketing strategies.
          </p>

          {/* Coming Soon Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#0eca7b]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-[#0eca7b]" />
              </div>
              <h3 className="font-semibold mb-2">SEO Insights</h3>
              <p className="text-sm text-muted-foreground">
                Latest trends and strategies in search engine optimization
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#0eca7b]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-[#0eca7b]" />
              </div>
              <h3 className="font-semibold mb-2">AI Updates</h3>
              <p className="text-sm text-muted-foreground">
                How AI is transforming content creation and marketing
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#0eca7b]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bell className="h-6 w-6 text-[#0eca7b]" />
              </div>
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground">
                Real-world examples of successful SEO campaigns
              </p>
            </div>
          </div>

        </div>
      </section>

      <FooterSection />
    </main>
  );
} 