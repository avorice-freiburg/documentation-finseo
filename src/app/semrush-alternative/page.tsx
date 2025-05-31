'use client';

import React from 'react';
import { Building2, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, Lock, Database, Layers, Server, Briefcase, Monitor, Network, Cpu, Headphones, Star, Search, Bot, FileText, Lightbulb, Rocket, Brain, Gauge, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart, Line, LineChart, Pie, PieChart, Cell } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Comparison data between Finseo and Semrush
const comparisonData = [
  {
    feature: "Pricing",
    finseo: "Transparent pricing starting at $29/month with all features included",
    semrush: "Complex pricing starting at $119/month with limited features",
    advantage: "finseo"
  },
  {
    feature: "AI Integration",
    finseo: "Native AI built into every tool with advanced automation",
    semrush: "Limited AI features as add-ons with extra costs",
    advantage: "finseo"
  },
  {
    feature: "User Experience",
    finseo: "Modern, intuitive interface designed for efficiency",
    semrush: "Complex, outdated interface with steep learning curve",
    advantage: "finseo"
  },
  {
    feature: "Team Collaboration",
    finseo: "Advanced team features with real-time collaboration",
    semrush: "Basic team functionality with limited collaboration",
    advantage: "finseo"
  },
  {
    feature: "Data Accuracy",
    finseo: "Real-time data with 99.9% accuracy guarantee",
    semrush: "Delayed data updates with accuracy issues",
    advantage: "finseo"
  },
  {
    feature: "Customer Support",
    finseo: "24/7 dedicated support with personal success manager",
    semrush: "Limited support with long response times",
    advantage: "finseo"
  }
];

// Performance comparison data
const performanceData = [
  { metric: "Value for Money", finseo: 98, semrush: 65 },
  { metric: "Ease of Use", finseo: 95, semrush: 68 },
  { metric: "AI Features", finseo: 96, semrush: 72 },
  { metric: "Data Accuracy", finseo: 99, semrush: 78 },
  { metric: "Support Quality", finseo: 97, semrush: 71 },
];

// Cost comparison over time
const costComparisonData = [
  { year: "Year 1", finseo: 348, semrush: 1428 },
  { year: "Year 2", finseo: 696, semrush: 2856 },
  { year: "Year 3", finseo: 1044, semrush: 4284 },
  { year: "Year 5", finseo: 1740, semrush: 7140 },
];

// Feature availability comparison
const featureAvailabilityData = [
  { feature: "Keyword Research", finseo: 100, semrush: 85 },
  { feature: "Competitor Analysis", finseo: 95, semrush: 90 },
  { feature: "Content Optimization", finseo: 98, semrush: 75 },
  { feature: "Technical SEO", finseo: 92, semrush: 80 },
  { feature: "Reporting", finseo: 96, semrush: 88 },
  { feature: "Team Features", finseo: 94, semrush: 70 },
];

// Benefits data
const benefits = [
  {
    icon: <DollarSign className="h-6 w-6 text-[#0eca7b]" />,
    title: "75% Cost Savings",
    description: "Get all the features you need at a fraction of Semrush's cost. Save over $5,000 annually while getting better results."
  },
  {
    icon: <Brain className="h-6 w-6 text-[#0eca7b]" />,
    title: "Native AI Integration",
    description: "Unlike Semrush's bolt-on AI features, Finseo has AI built into every tool for seamless automation and insights."
  },
  {
    icon: <Zap className="h-6 w-6 text-[#0eca7b]" />,
    title: "Modern Interface",
    description: "Enjoy a clean, intuitive interface that's easy to learn and use, unlike Semrush's complex and outdated design."
  },
  {
    icon: <Users className="h-6 w-6 text-[#0eca7b]" />,
    title: "Better Team Features",
    description: "Advanced collaboration tools and team management features that Semrush lacks or charges extra for."
  }
];

// Testimonials
const testimonials = [
  {
    name: "Alex Johnson",
    role: "SEO Director at MarketingPro",
    company: "MarketingPro",
    content: "We switched from Semrush to Finseo and saved $8,000 annually while getting better features and support. The AI automation is incredible.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Digital Marketing Manager",
    company: "TechGrowth",
    content: "Semrush was too expensive and complex. Finseo gives us everything we need at a fair price with much better user experience.",
    rating: 5
  },
  {
    name: "Robert Chen",
    role: "Head of SEO",
    company: "ScaleUp",
    content: "The migration from Semrush was seamless. Finseo's modern interface and AI features immediately improved our team's productivity.",
    rating: 5
  }
];

const chartConfig = {
  finseo: { label: "Finseo", color: "#0eca7b" },
  semrush: { label: "Semrush", color: "#94a3b8" },
  cost: { label: "Annual Cost", color: "#0eca7b" },
};

export default function SemrushAlternativePage() {
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
              <Crown className="h-4 w-4" />
              Better Than Semrush
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            The affordable Semrush alternative with better AI
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Get all the SEO tools you need at 75% less cost than Semrush. Modern interface, 
            native AI integration, and better team features - without the complexity and high prices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-secondary text-white font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Start Free Trial
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              No credit card required • Save $5,000+ annually • Better features
            </span>
          </div>
        </div>
      </section>

      {/* Main Comparison Dashboard */}
      <section className="w-full max-w-6xl mx-auto -mt-8 mb-16 z-10 px-6">
        <div className="rounded-xl bg-card shadow-xl border border-border overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Cost & Value Comparison</h3>
                <p className="text-sm text-muted-foreground">Finseo vs Semrush pricing and feature analysis</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <DollarSign className="h-4 w-4" />
                75% Cost Savings
              </div>
            </div>
            <div className="h-[400px] w-full relative rounded-lg border border-border overflow-hidden bg-gradient-to-br from-background to-muted/20">
              {/* Custom Comparison Dashboard */}
              <div className="absolute inset-0 p-4">
                {/* Header with Logos */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <Crown className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Finseo</h4>
                      <p className="text-xs text-muted-foreground">Modern SEO Platform</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground">VS</div>
                  <div className="flex items-center gap-3">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground text-right">Semrush</h4>
                      <p className="text-xs text-muted-foreground text-right">Legacy SEO Tool</p>
                    </div>
                    <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Pricing Comparison */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary mb-1">$29</div>
                      <div className="text-xs text-muted-foreground mb-2">per month</div>
                      <div className="text-xs text-secondary font-medium">All Features Included</div>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-muted-foreground mb-1">$119</div>
                      <div className="text-xs text-muted-foreground mb-2">per month</div>
                      <div className="text-xs text-muted-foreground">Limited Features</div>
                    </div>
                  </div>
                </div>

                {/* Feature Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {/* AI Features */}
                  <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">AI Features</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-xs text-secondary">Finseo Wins</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Finseo</span>
                        <span className="text-secondary font-medium">Native AI</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Semrush</span>
                        <span className="text-muted-foreground">Add-on AI</span>
                      </div>
                    </div>
                  </div>

                  {/* User Experience */}
                  <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">User Experience</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-xs text-secondary">Finseo Wins</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Finseo</span>
                        <span className="text-secondary font-medium">Modern & Clean</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Semrush</span>
                        <span className="text-muted-foreground">Complex & Outdated</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Savings Highlight */}
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg p-4 border border-secondary/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary mb-1">Save $5,400 Annually</div>
                    <div className="text-xs text-muted-foreground">Get better features at 75% less cost</div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Award className="h-3 w-3" />
                    <span>Better value, features, and support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-secondary text-white text-xs px-4 py-2 hover:bg-secondary/90">
                      Switch to Finseo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Why teams are switching from Semrush to Finseo
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Semrush is expensive, complex, and outdated. Finseo offers modern AI-powered SEO tools 
            at a fraction of the cost with better user experience and team features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[400px] bg-card border border-border rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">5-Year Cost Comparison</h3>
                <p className="text-sm text-muted-foreground">Total cost of ownership over time</p>
              </div>
              <DollarSign className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[320px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart data={costComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="fillFinseo" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0eca7b" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0eca7b" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="fillSemrush" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const finseo = payload.find(p => p.dataKey === 'finseo')?.value;
                        const semrush = payload.find(p => p.dataKey === 'semrush')?.value;
                        const savings = semrush && finseo ? (semrush as number) - (finseo as number) : 0;
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2">
                              {label}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">Finseo</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">${finseo}</span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                  <span className="text-sm text-gray-600">Semrush</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">${semrush}</span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-border/30">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-500">You Save:</span>
                                  <span className="font-semibold text-green-600">${savings}</span>
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
                    dataKey="semrush"
                    stroke="#94a3b8"
                    strokeWidth={3}
                    fill="url(#fillSemrush)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="finseo"
                    stroke="#0eca7b"
                    strokeWidth={3}
                    fill="url(#fillFinseo)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium tracking-tight">
              Save $5,400 annually vs Semrush
            </h2>
            <p className="text-muted-foreground text-lg">
              Semrush's high pricing adds up quickly. With Finseo, you get all the features you need 
              at a fraction of the cost, with better AI integration and user experience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-medium">
                  1Y
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Year 1 Savings</h4>
                  <p className="text-xs text-muted-foreground">Immediate cost reduction</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-secondary">$1,080</div>
                  <div className="text-xs text-muted-foreground">75% less than Semrush</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-medium">
                  3Y
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">3 Year Savings</h4>
                  <p className="text-xs text-muted-foreground">Compound savings</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-secondary">$3,240</div>
                  <div className="text-xs text-muted-foreground">Enough for a new hire</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-medium">
                  5Y
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">5 Year Savings</h4>
                  <p className="text-xs text-muted-foreground">Long-term value</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-secondary">$5,400</div>
                  <div className="text-xs text-muted-foreground">Significant budget savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium tracking-tight">
              Better features at a better price
            </h2>
            <p className="text-muted-foreground text-lg">
              Compare Finseo's comprehensive feature set against Semrush's expensive and complex offering. 
              Get more value with modern AI integration and intuitive design.
            </p>
            
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{item.feature}</h4>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-secondary">Finseo</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-foreground">{item.finseo}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item.semrush}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Performance Comparison</h3>
                <p className="text-sm text-muted-foreground">Finseo vs Semrush across key metrics</p>
              </div>
              <BarChart3 className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[420px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const finseo = payload.find(p => p.dataKey === 'finseo')?.value;
                        const semrush = payload.find(p => p.dataKey === 'semrush')?.value;
                        const improvement = finseo && semrush ? (((finseo as number) - (semrush as number)) / (semrush as number) * 100).toFixed(0) : 0;
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2 text-center">
                              {label}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3 min-w-[140px]">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">Finseo</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">{finseo}%</span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                  <span className="text-sm text-gray-600">Semrush</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">{semrush}%</span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-border/30">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-500">Advantage:</span>
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
                  <Bar dataKey="finseo" fill="#0eca7b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="semrush" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
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