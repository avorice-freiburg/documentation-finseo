'use client';

import React from 'react';
import { Building, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, Store, MapPin, Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart, ResponsiveContainer } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import Link from "next/link";
import { Button } from '@/components/ui/button';

// ROI progression data
const roiProgressionData = [
  { month: "Month 1", investment: 99, returns: 350, roi: 254 },
  { month: "Month 2", investment: 99, returns: 680, roi: 587 },
  { month: "Month 3", investment: 99, returns: 1200, roi: 1112 },
  { month: "Month 4", investment: 99, returns: 1850, roi: 1768 },
  { month: "Month 5", investment: 99, returns: 2800, roi: 2727 },
  { month: "Month 6", investment: 99, returns: 3900, roi: 3838 },
];

// Local SEO performance data
const localSeoData = [
  { metric: "Local Visibility", before: 35, after: 89 },
  { metric: "Google My Business", before: 42, after: 94 },
  { metric: "Local Citations", before: 28, after: 85 },
  { metric: "Review Management", before: 31, after: 92 },
];

const chartConfig = {
  investment: { label: "Investment", color: "#ef4444" },
  returns: { label: "Returns", color: "#0eca7b" },
  roi: { label: "ROI %", color: "#3b82f6" },
  before: { label: "Before Finseo", color: "#ef4444" },
  after: { label: "With Finseo", color: "#0eca7b" },
};

// Animated list items for local SEO features
const localSeoFeatures = [
  {
    key: "local-visibility",
    icon: <MapPin className="h-5 w-5 text-[#0eca7b]" />,
    title: "Local Search Dominance",
    description: "Rank #1 for 'near me' searches in your area"
  },
  {
    key: "google-my-business",
    icon: <Star className="h-5 w-5 text-[#0eca7b]" />,
    title: "Google My Business Optimization",
    description: "Automated posting and review management"
  },
  {
    key: "local-citations",
    icon: <Globe className="h-5 w-5 text-[#0eca7b]" />,
    title: "Local Citations Building",
    description: "Get listed in 50+ local directories automatically"
  },
  {
    key: "competitor-tracking",
    icon: <Trophy className="h-5 w-5 text-[#0eca7b]" />,
    title: "Beat Local Competitors",
    description: "Monitor and outrank local competition"
  }
];

export default function ForSMBsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center gap-10 py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 h-[600px] md:h-[800px] w-full bg-background rounded-b-xl"></div>
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
              <Store className="h-4 w-4" />
              SEO for SMBs
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            Dominate local search and compete with big brands
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Level the playing field with AI-powered local SEO that gets you found by customers in your area. 
            Achieve 3838% ROI while outranking competitors 10x your size.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
              size="lg" 
              className="bg-secondary text-black font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Start Growing Locally
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              7-day free trial • Local SEO included • No setup fees
            </span>
          </div>
        </div>
      </section>

      {/* Main Visualization Section */}
      <section className="w-full max-w-6xl mx-auto -mt-8 mb-16 z-10 px-6">
        <div className="rounded-xl bg-card shadow-xl border border-border overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Local SEO Performance Tracker</h3>
                <p className="text-sm text-muted-foreground">Weekly ranking improvements</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <MapPin className="h-4 w-4" />
                Local Dominance
              </div>
            </div>
            <div className="h-[350px] w-full relative rounded-lg border border-border overflow-hidden flex items-center justify-center">
              <FourthBentoAnimation startAnimationDelay={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: ROI Demonstration (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              See real ROI from month one
            </h2>
            <p className="text-muted-foreground text-lg">
              Small businesses using Finseo achieve an average 3838% ROI within 6 months. 
              Watch your $99 monthly investment turn into $3,900 in returns through local customer acquisition.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <DollarSign className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Average $99 investment returns $3,900 monthly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Consistent month-over-month growth</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Local customer acquisition at scale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Predictable, sustainable revenue growth</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[350px] md:h-[400px] bg-card border border-border rounded-xl p-4 md:p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-medium">ROI Progression</h3>
                <p className="text-sm text-muted-foreground hidden md:block">Investment vs returns over 6 months</p>
              </div>
              <DollarSign className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[270px] md:h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={roiProgressionData} margin={{ top: 20, right: 20, left: 10, bottom: 40 }}>
                  <defs>
                    <linearGradient id="fillReturns" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0eca7b" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0eca7b" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="fillInvestment" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10 }} 
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    interval={0}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12 }} 
                    width={40}
                  />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        // Get the original data point to access all values
                        const dataPoint = roiProgressionData.find(d => d.month === label);
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2 text-center">
                              {label}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3 min-w-[140px]">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                  <span className="text-sm text-gray-600">Investment</span>
                                </div>
                                <span className="text-sm font-semibold text-red-600">
                                  ${dataPoint?.investment}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">Returns</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">
                                  ${dataPoint?.returns?.toLocaleString()}
                                </span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-border/30">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-500">ROI:</span>
                                  <span className="font-semibold text-blue-600">
                                    {dataPoint?.roi}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="investment"
                    stroke="#ef4444"
                    strokeWidth={2}
                    fill="url(#fillInvestment)"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="returns"
                    stroke="#0eca7b"
                    strokeWidth={3}
                    fill="url(#fillReturns)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Local SEO Features (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization - Animated List */}
          <div className="h-[400px] md:h-[500px] bg-card border border-border rounded-xl p-4 md:p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-medium">Local SEO Features</h3>
                <p className="text-sm text-muted-foreground hidden md:block">Dominate your local market</p>
              </div>
              <MapPin className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={4000}>
                  {localSeoFeatures.map((feature) => (
                    <div key={feature.key} className="w-full">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-white mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </AnimatedList>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pr-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Own your local market with AI-powered local SEO
            </h2>
            <p className="text-muted-foreground text-lg">
              Get found by customers in your area with advanced local SEO optimization. 
              From Google My Business to local citations, we handle everything automatically.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Rank #1 for "near me" searches in your area</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automated Google My Business optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Globe className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Get listed in 50+ local directories automatically</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Trophy className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Monitor and outrank local competitors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Local Performance Comparison (Left Content, Right Chart) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              89% local visibility improvement on average
            </h2>
            <p className="text-muted-foreground text-lg">
              SMBs using Finseo see dramatic improvements across all local SEO metrics. 
              From local search visibility to review management, our AI handles it all.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">89% local visibility improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">94% Google My Business optimization score</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Building className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">85% local citation completion rate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">92% review management efficiency</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[350px] md:h-[400px] bg-card border border-border rounded-xl p-4 md:p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-medium">Local SEO Performance</h3>
                <p className="text-sm text-muted-foreground hidden md:block">Before vs after Finseo implementation</p>
              </div>
              <Globe className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[270px] md:h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={localSeoData} margin={{ top: 20, right: 20, left: 10, bottom: 40 }}>
                  <XAxis 
                    dataKey="metric" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10 }} 
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    interval={0}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12 }} 
                    width={40}
                  />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const before = payload.find(p => p.dataKey === 'before')?.value;
                        const after = payload.find(p => p.dataKey === 'after')?.value;
                        const improvement = before && after ? (((after as number) - (before as number)) / (before as number) * 100).toFixed(0) : 0;
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2 text-center">
                              {label}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3 min-w-[140px]">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                  <span className="text-sm text-gray-600">Before</span>
                                </div>
                                <span className="text-sm font-semibold text-red-600">{before}%</span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">With Finseo</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">{after}%</span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-border/30">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-500">Improvement:</span>
                                  <span className="font-semibold text-green-600">+{improvement}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="before" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" fill="#0eca7b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <FooterSection />
    </main>
  );
} 