'use client';

import React from 'react';
import { Rocket, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, Lightbulb, Timer, Coffee, Briefcase, Layers, Cpu, Monitor, Network } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Time savings data
const timeSavingsData = [
  { task: "SEO Research", before: 8, after: 1, saved: 7 },
  { task: "Content Optimization", before: 6, after: 1, saved: 5 },
  { task: "Competitor Analysis", before: 4, after: 0.5, saved: 3.5 },
  { task: "Reporting", before: 3, after: 0, saved: 3 },
];

// Startup growth trajectory
const startupGrowthData = [
  { month: "Month 1", traffic: 1200, leads: 15, revenue: 2500 },
  { month: "Month 2", traffic: 2800, leads: 35, revenue: 5800 },
  { month: "Month 3", traffic: 4500, leads: 58, revenue: 12400 },
  { month: "Month 4", traffic: 7200, leads: 89, revenue: 18900 },
  { month: "Month 5", traffic: 11500, leads: 142, revenue: 28600 },
  { month: "Month 6", traffic: 18200, leads: 215, revenue: 45200 },
];

// Startup vs Enterprise comparison data
const startupVsEnterpriseData = [
  { metric: "Setup Time", startup: 95, enterprise: 45 },
  { metric: "Cost Efficiency", startup: 92, enterprise: 65 },
  { metric: "Speed to Market", startup: 88, enterprise: 55 },
  { metric: "Flexibility", startup: 90, enterprise: 70 },
];

// Competitive startup analysis data
const competitiveStartupData = [
  { month: "Jan", yourStartup: 45, competitor: 38 },
  { month: "Feb", yourStartup: 52, competitor: 42 },
  { month: "Mar", yourStartup: 61, competitor: 46 },
  { month: "Apr", yourStartup: 72, competitor: 49 },
  { month: "May", yourStartup: 85, competitor: 52 },
  { month: "Jun", yourStartup: 98, competitor: 55 },
];

// Bootstrap-friendly ROI data
const bootstrapROIData = [
  { month: "Month 1", investment: 29, returns: 85, roi: 193 },
  { month: "Month 2", investment: 29, returns: 240, roi: 727 },
  { month: "Month 3", investment: 29, returns: 450, roi: 1452 },
  { month: "Month 4", investment: 29, returns: 720, roi: 2383 },
  { month: "Month 5", investment: 29, returns: 1150, roi: 3866 },
  { month: "Month 6", investment: 29, returns: 1820, roi: 6176 },
];

const chartConfig = {
  before: { label: "Before Finseo", color: "#ef4444" },
  after: { label: "With Finseo", color: "#0eca7b" },
  saved: { label: "Time Saved", color: "#3b82f6" },
  traffic: { label: "Traffic", color: "#0eca7b" },
  leads: { label: "Leads", color: "#f97316" },
  revenue: { label: "Revenue", color: "#8b5cf6" },
  startup: { label: "Startup Plan", color: "#0eca7b" },
  enterprise: { label: "Enterprise Plan", color: "#94a3b8" },
  yourStartup: { label: "Your Startup", color: "#0eca7b" },
  competitor: { label: "Competitor", color: "#f97316" },
  investment: { label: "Investment", color: "#ef4444" },
  returns: { label: "Returns", color: "#0eca7b" },
  roi: { label: "ROI %", color: "#8b5cf6" },
};

// Animated list items for entrepreneur benefits
const entrepreneurBenefits = [
  {
    key: "time-freedom",
    icon: <Clock className="h-5 w-5 text-[#0eca7b]" />,
    title: "20+ Hours Saved Weekly",
    description: "Focus on building your product, not SEO tasks"
  },
  {
    key: "ai-automation",
    icon: <Zap className="h-5 w-5 text-[#0eca7b]" />,
    title: "AI-Powered Automation",
    description: "Set it and forget it SEO optimization"
  },
  {
    key: "bootstrap-friendly",
    icon: <DollarSign className="h-5 w-5 text-[#0eca7b]" />,
    title: "$29/month Bootstrap Plan",
    description: "Enterprise SEO power at startup prices"
  },
  {
    key: "quick-wins",
    icon: <TrendingUp className="h-5 w-5 text-[#0eca7b]" />,
    title: "Quick Wins",
    description: "See results in weeks, not months"
  },
  {
    key: "quick-setup",
    icon: <Zap className="h-5 w-5 text-[#0eca7b]" />,
    title: "5-Minute Setup",
    description: "From signup to first optimization in minutes"
  },
  {
    key: "scale-ready",
    icon: <TrendingUp className="h-5 w-5 text-[#0eca7b]" />,
    title: "Scales With You",
    description: "From MVP to unicorn on the same platform"
  }
];

export default function ForEntrepreneursPage() {
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
              <Rocket className="h-4 w-4" />
              SEO for Entrepreneurs
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            Bootstrap your way to SEO dominance
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Stop competing on features. Win on visibility. Get enterprise-level SEO results 
            with AI automation that works 24/7, starting at just $29/month. Perfect for bootstrapped founders.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-secondary text-black font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Start Bootstrap Plan
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              7-day free trial • $29/month • No credit card required
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
                <h3 className="text-lg font-medium">Startup Growth Command Center</h3>
                <p className="text-sm text-muted-foreground">Real-time SEO performance tracking</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <TrendingUp className="h-4 w-4" />
                6,176% ROI Average
              </div>
            </div>
            <div className="h-[350px] w-full relative rounded-lg border border-border overflow-hidden">
              {/* Custom Startup Dashboard */}
              <div className="absolute inset-0 p-6">
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">SEO Performance Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Real-time optimization tracking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-secondary">Live</span>
                    </div>
                  </div>
                </div>

                {/* Key SEO Metrics Row */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-background/60 rounded-lg p-4 border border-border/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Keywords Tracked</div>
                      <Target className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">2,847</div>
                    <div className="text-xs text-secondary font-medium">+342 this month</div>
                  </div>
                  <div className="bg-background/60 rounded-lg p-4 border border-border/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Avg Position</div>
                      <BarChart3 className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">12.4</div>
                    <div className="text-xs text-secondary font-medium">-2.1 improved</div>
                  </div>
                  <div className="bg-background/60 rounded-lg p-4 border border-border/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Page Speed</div>
                      <Zap className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">94</div>
                    <div className="text-xs text-secondary font-medium">+8 optimized</div>
                  </div>
                  <div className="bg-background/60 rounded-lg p-4 border border-border/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Last Crawl</div>
                      <Clock className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">2h</div>
                    <div className="text-xs text-secondary font-medium">ago</div>
                  </div>
                </div>

                {/* SEO Performance Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Rankings Metric */}
                  <div className="bg-background/60 rounded-lg p-4 border border-border/30 group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                          <Target className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">Rankings</div>
                          <div className="text-xs text-muted-foreground">Top 10 Performance</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Top 3 Keywords</span>
                        <span className="text-sm font-bold text-secondary">127</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Top 10 Keywords</span>
                        <span className="text-sm font-bold text-secondary">847</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical SEO Metric */}
                  <div className="bg-background/60 rounded-lg p-4 border border-border/30 group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                          <Settings className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">Technical</div>
                          <div className="text-xs text-muted-foreground">Site Health</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Core Web Vitals</span>
                        <span className="text-sm font-bold text-secondary">98%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Issues Fixed</span>
                        <span className="text-sm font-bold text-secondary">24</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Optimization Metric */}
                  <div className="bg-background/60 rounded-lg p-4 border border-border/30 group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                          <Award className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">Content</div>
                          <div className="text-xs text-muted-foreground">Optimization Score</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Pages Optimized</span>
                        <span className="text-sm font-bold text-secondary">156</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Avg Score</span>
                        <span className="text-sm font-bold text-secondary">87%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Competitive Analysis (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Outrank competitors with AI-powered SEO
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't let bigger companies dominate search results. Level the playing field with AI automation 
              that gives your startup the SEO power of a Fortune 500 company at bootstrap prices.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Compete with companies 100x your size</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">AI finds gaps competitors miss</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Faster iteration cycles than enterprise teams</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time competitive intelligence</span>
              </div>
            </div>
          </div>

          {/* Right Visualization - Overlapping Charts */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Startup vs Competitor</h3>
                <p className="text-sm text-muted-foreground">SEO visibility comparison</p>
              </div>
              <Users className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-6 overflow-hidden">
              {/* Brand Headers */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <Rocket className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Your Startup</div>
                    <div className="text-xs text-muted-foreground">98% visibility</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-muted-foreground">VS</div>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium text-sm text-right">Competitor</div>
                    <div className="text-xs text-muted-foreground text-right">55% visibility</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 border border-border flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Overlapping Area Charts Visualization */}
              <div className="relative h-80 bg-black/5 rounded-lg border border-border overflow-hidden">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={competitiveStartupData} margin={{ top: 20, right: 20, left: 20, bottom: 60 }}>
                    <defs>
                      <linearGradient id="fillYourStartup" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0eca7b" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0eca7b" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="fillCompetitor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      domain={[30, 100]}
                    />
                    <ChartTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-2 shadow-lg">
                              <div className="text-xs font-medium text-gray-700 mb-1 text-center">
                                {label} 2024
                              </div>
                              <div className="space-y-1">
                                {payload.map((entry, index) => (
                                  <div key={index} className="flex items-center justify-between gap-2 min-w-[140px]">
                                    <div className="flex items-center gap-1.5">
                                      <div className={`w-2 h-2 rounded-full ${
                                        entry.dataKey === 'yourStartup' ? 'bg-green-500' : 'bg-orange-500'
                                      }`}></div>
                                      <span className="text-xs font-medium text-gray-600">
                                        {entry.dataKey === 'yourStartup' ? 'Your Startup' : 'Competitor'}
                                      </span>
                                    </div>
                                    <div className="text-right">
                                      <div className={`text-sm font-bold ${
                                        entry.dataKey === 'yourStartup' ? 'text-green-600' : 'text-orange-600'
                                      }`}>
                                        {entry.value}%
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {payload.length === 2 && payload[0]?.value !== undefined && payload[1]?.value !== undefined && (
                                <div className="mt-1 pt-1 border-t border-border/30">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-400">Gap:</span>
                                    <span className="font-medium text-green-600">
                                      +{Math.abs((payload[0].value as number) - (payload[1].value as number))}%
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        }
                        return null;
                      }}
                      cursor={{ stroke: '#e5e7eb', strokeWidth: 1, strokeDasharray: '3 3' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="competitor"
                      stroke="#f97316"
                      strokeWidth={3}
                      fill="url(#fillCompetitor)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="yourStartup"
                      stroke="#0eca7b"
                      strokeWidth={3}
                      fill="url(#fillYourStartup)"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ChartContainer>

                {/* Elegant Chart Legend */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-xl px-6 py-3 shadow-lg">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-green-600" />
                          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-sm"></div>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-800">Your Startup</span>
                          <div className="text-xs text-gray-500">98% visibility</div>
                        </div>
                      </div>
                      
                      <div className="w-px h-8 bg-border"></div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-orange-600" />
                          <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-sm"></div>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-800">Competitor</span>
                          <div className="text-xs text-gray-500">55% visibility</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Values */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-border/50 rounded-xl p-3 shadow-lg">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Visibility Lead</div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">+43%</div>
                    <div className="text-xs text-muted-foreground">You're winning</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bootstrap ROI (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Bootstrap ROI Calculator</h3>
                <p className="text-sm text-muted-foreground">$29/month investment returns</p>
              </div>
              <DollarSign className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart data={bootstrapROIData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="fillReturns" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0eca7b" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0eca7b" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const roiData = bootstrapROIData.find(d => d.month === label);
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
                                  ${roiData?.investment}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">Returns</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">
                                  ${roiData?.returns}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                  <span className="text-sm text-gray-600">ROI</span>
                                </div>
                                <span className="text-sm font-semibold text-purple-600">
                                  {roiData?.roi}%
                                </span>
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
                    dataKey="returns"
                    stroke="#0eca7b"
                    strokeWidth={3}
                    fill="url(#fillReturns)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              6,176% ROI in 6 months with $29/month
            </h2>
            <p className="text-muted-foreground text-lg">
              Every dollar you invest in Finseo returns $62 in organic revenue. 
              That's the power of AI-driven SEO that works around the clock to grow your startup.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <DollarSign className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">$29/month → $1,820/month in 6 months</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Average 6,176% ROI for bootstrap startups</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Compound growth that accelerates over time</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">No contracts, cancel anytime, keep your results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Startup vs Enterprise (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Why startups choose Finseo over enterprise solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Enterprise SEO tools are built for big teams with big budgets. Finseo is built for founders 
              who need enterprise results with startup speed and bootstrap budgets.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">5-minute setup vs 3-month enterprise implementations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <DollarSign className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">$29/month vs $50,000+ enterprise contracts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">AI automation vs manual processes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Scales from MVP to unicorn seamlessly</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Startup vs Enterprise</h3>
                <p className="text-sm text-muted-foreground">Why startups win with Finseo</p>
              </div>
              <Rocket className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart data={startupVsEnterpriseData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const startup = payload.find(p => p.dataKey === 'startup')?.value;
                        const enterprise = payload.find(p => p.dataKey === 'enterprise')?.value;
                        const advantage = startup && enterprise ? (startup as number) - (enterprise as number) : 0;
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2 text-center">
                              {label}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3 min-w-[140px]">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">Startup Plan</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">{startup}%</span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                  <span className="text-sm text-gray-600">Enterprise</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">{enterprise}%</span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-border/30">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-500">Advantage:</span>
                                  <span className="font-semibold text-green-600">+{advantage}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="startup" fill="#0eca7b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="enterprise" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Entrepreneur Benefits (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization - Animated List */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Bootstrap Benefits</h3>
                <p className="text-sm text-muted-foreground">Why founders love Finseo</p>
              </div>
              <Rocket className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[420px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={3500}>
                  {entrepreneurBenefits.map((benefit) => (
                    <div key={benefit.key} className="w-full">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex-shrink-0 mt-1">
                          {benefit.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-white mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-300">{benefit.description}</p>
                        </div>
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
              Built for founders who bootstrap and hustle
            </h2>
            <p className="text-muted-foreground text-lg">
              We get it. You're building something amazing with limited resources. 
              Finseo gives you enterprise-level SEO power without the enterprise price tag or complexity.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <DollarSign className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Bootstrap-friendly $29/month (less than a dinner)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">5-minute setup, no technical knowledge required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">No contracts, cancel anytime, keep your results</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Scales from side project to billion-dollar company</span>
              </div>
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