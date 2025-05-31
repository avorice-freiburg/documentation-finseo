'use client';

import React, { useState } from 'react';
import { Search, Check, TrendingUp, Globe, PieChart, BarChart3, KeyRound, Target, Users, Clock, Star, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { FooterSection } from "@/components/sections/footer-section";
import Link from "next/link";
import Image from "next/image";

// Sample data for the third bento animation
const keywordChartData = [10, 25, 15, 30, 35, 40, 45, 50, 45, 60, 55, 75, 70, 75, 85, 90, 85, 95, 100];
const keywordCounterValues = [3578, 4982, 5721, 6893, 8245, 9120];

// Sample keyword insights for animated list
const keywordInsights = [
  { keyword: "AI content optimization", volume: "18.2K", difficulty: "Medium", trend: "+24%" },
  { keyword: "SEO automation tools", volume: "12.7K", difficulty: "High", trend: "+18%" },
  { keyword: "Content strategy AI", volume: "9.4K", difficulty: "Low", trend: "+31%" },
  { keyword: "Machine learning SEO", volume: "7.8K", difficulty: "Medium", trend: "+15%" },
  { keyword: "NLP content analysis", volume: "5.2K", difficulty: "High", trend: "+22%" }
];

// Global Keyword Research Animation Component
function GlobalKeywordAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-card to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-card to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30">
        <Globe className="h-8 w-8 text-white" />
      </div>
      
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center">
          <OrbitingCircles
            index={0}
            iconSize={50}
            radius={80}
            reverse
            speed={1}
          >
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇺🇸</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇬🇧</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇩🇪</div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={50} radius={120} speed={0.7}>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇫🇷</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇯🇵</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇨🇦</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇦🇺</div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={50}
            radius={160}
            reverse
            speed={0.5}
          >
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇪🇸</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇮🇹</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇧🇷</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇰🇷</div>
            <div className="flex items-center justify-center bg-white rounded-full p-1 size-12 text-lg">🇮🇳</div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

export default function KeywordResearchPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center gap-10 py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 h-[500px] md:h-[600px] w-full bg-background rounded-b-xl"></div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
              "opacity-0"
            )}
          />
        </div>
        
        <div className="text-center max-w-3xl mx-auto px-6 z-10 pt-16">
          <div className="mx-auto flex justify-center">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2 mb-6">
              <Search className="h-4 w-4" />
              Advanced Keyword Research
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Discover high-impact keywords that drive traffic
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Comprehensive data-driven keyword research to optimize content for maximum visibility, 
            engagement, and conversion with our advanced research technology.
          </p>
        </div>
      </section>

      {/* Section 1: Keyword Visibility Trends (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Track keyword visibility across all search engines
            </h2>
            <p className="text-muted-foreground text-lg">
              Monitor your keyword performance with real-time data from Google, Bing, Yahoo, and other major search platforms.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">98.7% data accuracy across all platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">24/7 real-time monitoring and alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">150M+ keywords tracked globally</span>
              </div>
            </div>
          </div>

          {/* Right Visualization - Fixed overflow issues */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Monthly Visibility Growth</h3>
                <p className="text-sm text-muted-foreground">Keyword performance trends</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <ArrowUp className="h-4 w-4" />
                +23.5%
              </div>
            </div>
            <div className="h-[392px] w-full relative rounded-lg border border-border overflow-hidden bg-black/5">
              <ThirdBentoAnimation 
                data={keywordChartData} 
                toolTipValues={keywordCounterValues} 
                color="#0eca7b"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Real-time Keyword Discovery (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization - Fixed overflow issues */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Live Keyword Insights</h3>
                <p className="text-sm text-muted-foreground">Real-time discoveries</p>
              </div>
              <Search className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={1500}>
                  {keywordInsights.map((item, index) => (
                    <div key={index} className="w-full">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">{item.keyword}</span>
                        <span className="text-xs text-green-400">{item.trend}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Vol: {item.volume}</span>
                        <span className={`px-2 py-0.5 rounded ${
                          item.difficulty === "Low" ? "bg-green-900 text-green-300" :
                          item.difficulty === "Medium" ? "bg-yellow-900 text-yellow-300" :
                          "bg-red-900 text-red-300"
                        }`}>
                          {item.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </AnimatedList>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Discover trending keywords in real-time
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay ahead of the competition with AI-powered keyword discovery that identifies emerging trends and opportunities.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">AI-powered trend detection and analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">500+ new keyword suggestions daily</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Smart difficulty scoring and competition analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Search Intent Analysis (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Decode user search intent
            </h2>
            <p className="text-muted-foreground text-lg">
              Understand what users really want when they search for your keywords and create content that matches their intent.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">95% accuracy in intent classification</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">4 intent categories with detailed insights</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Content strategy recommendations included</span>
              </div>
            </div>
          </div>

          {/* Right Visualization - Fixed overflow issues with larger chart */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Search Intent Breakdown</h3>
                <p className="text-sm text-muted-foreground">User behavior analysis</p>
              </div>
              <PieChart className="h-5 w-5 text-secondary" />
            </div>
            
            {/* Donut Chart Mockup - Larger size */}
            <div className="h-[392px] flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-56 h-56 mb-6 flex-shrink-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Donut segments - Fixed to fill 100% of circle */}
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#0eca7b" strokeWidth="20" 
                          strokeDasharray="286 440" strokeDashoffset="0" opacity="0.9" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#3b82f6" strokeWidth="20" 
                          strokeDasharray="110 440" strokeDashoffset="-286" opacity="0.9" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="20" 
                          strokeDasharray="31 440" strokeDashoffset="-396" opacity="0.9" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#ef4444" strokeWidth="20" 
                          strokeDasharray="13 440" strokeDashoffset="-427" opacity="0.9" />
                  
                  {/* Center text */}
                  <text x="100" y="95" textAnchor="middle" className="text-base font-bold fill-current">Search</text>
                  <text x="100" y="115" textAnchor="middle" className="text-base font-bold fill-current">Intent</text>
                </svg>
              </div>

              {/* Intent legend - Better spacing */}
              <div className="grid grid-cols-2 gap-3 text-sm flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0eca7b] flex-shrink-0"></div>
                  <span>Informational 65%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#3b82f6] flex-shrink-0"></div>
                  <span>Commercial 25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b] flex-shrink-0"></div>
                  <span>Navigational 7%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444] flex-shrink-0"></div>
                  <span>Transactional 3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Competitor Analysis (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization - Fixed overflow issues */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Competitor Rankings</h3>
                <p className="text-sm text-muted-foreground">Top 5 ranking domains</p>
              </div>
              <BarChart3 className="h-5 w-5 text-secondary" />
            </div>
            
            {/* Competitor ranking visualization */}
            <div className="h-[392px] flex flex-col justify-center space-y-3 overflow-hidden">
              {[
                { domain: "contentoptimizer.ai", position: 1, change: "+2", traffic: "45.2K" },
                { domain: "seoai.tools", position: 2, change: "0", traffic: "38.7K" },
                { domain: "rankgenius.com", position: 3, change: "-1", traffic: "32.1K" },
                { domain: "optimizepress.com", position: 4, change: "+3", traffic: "28.9K" },
                { domain: "aicontentpro.com", position: 5, change: "-1", traffic: "24.3K" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                      {item.position}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-xs truncate">{item.domain}</div>
                      <div className="text-xs text-muted-foreground">{item.traffic} traffic</div>
                    </div>
                  </div>
                  <div className={`text-xs font-medium flex-shrink-0 ${
                    item.change.startsWith("+") 
                      ? "text-green-500" 
                      : item.change === "0"
                      ? "text-gray-500"
                      : "text-red-500"
                  }`}>
                    {item.change === "0" ? "—" : item.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Outrank your competition
            </h2>
            <p className="text-muted-foreground text-lg">
              Analyze competitor strategies, identify gaps in their approach, and discover opportunities to surpass their rankings.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">10M+ domains analyzed for competitive insights</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time ranking updates and position tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">AI-driven gap analysis and opportunity identification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Global Keyword Research (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Research keywords globally
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover keyword opportunities across 195 countries and 50+ languages with localized search volume data.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">195 countries with localized search data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">50+ languages supported for international SEO</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">99.9% location accuracy for geo-targeting</span>
              </div>
            </div>
          </div>

          {/* Right Visualization - Fixed overflow issues */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Global Reach</h3>
                <p className="text-sm text-muted-foreground">Worldwide keyword coverage</p>
              </div>
              <Globe className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] relative rounded-lg border border-border overflow-hidden bg-black/5">
              <GlobalKeywordAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA Section */}
      <section id="cta" className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
            <Image
              src="/agent-cta-background.png"
              alt="Keyword Research CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Dominate Search Results
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Link
                  href="https://app.finseo.ai/signup"
                  className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
                >
                  Start Your Keyword Research Today
                </Link>
                <span className="text-white text-sm">7-day money back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <FooterSection />
    </main>
  );
} 