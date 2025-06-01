'use client';

import React from 'react';
import { Building2, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, Lock, Database, Layers, Server, Briefcase, Monitor, Network, Cpu, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart, ResponsiveContainer } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Enterprise SEO performance metrics (realistic)
const enterprisePerformanceData = [
  { quarter: "Q1", keywordRankings: 1250, organicTraffic: 125, backlinks: 2500 },
  { quarter: "Q2", keywordRankings: 1850, organicTraffic: 185, backlinks: 4200 },
  { quarter: "Q3", keywordRankings: 2750, organicTraffic: 275, backlinks: 6800 },
  { quarter: "Q4", keywordRankings: 3800, organicTraffic: 380, backlinks: 9500 },
];

// Chart data for competitive analysis
const competitiveChartData = [
  { month: "Jan", audi: 68, tesla: 75 },
  { month: "Feb", audi: 72, tesla: 78 },
  { month: "Mar", audi: 75, tesla: 82 },
  { month: "Apr", audi: 78, tesla: 85 },
  { month: "May", audi: 82, tesla: 88 },
  { month: "Jun", audi: 85, tesla: 92 },
];

// Enterprise vs Standard SEO metrics
const seoComparisonData = [
  { metric: "Keyword Tracking", enterprise: 95, standard: 75 },
  { metric: "Reporting Speed", enterprise: 98, standard: 82 },
  { metric: "Data Accuracy", enterprise: 99, standard: 89 },
  { metric: "Analysis Depth", enterprise: 96, standard: 78 },
];

const chartConfig = {
  keywordRankings: { label: "Keyword Rankings", color: "#0eca7b" },
  organicTraffic: { label: "Organic Traffic Growth", color: "#0eca7b" },
  backlinks: { label: "Backlinks Built", color: "#0eca7b" },
  enterprise: { label: "Enterprise Plan", color: "#0eca7b" },
  standard: { label: "Standard Plan", color: "#94a3b8" },
  audi: { label: "Audi", color: "#f97316" },
  tesla: { label: "Tesla", color: "#22c55e" },
};

// Animated list items for enterprise features
const enterpriseFeatures = [
  {
    key: "enterprise-scale",
    icon: <Database className="h-5 w-5 text-[#0eca7b]" />,
    title: "Enterprise Scale",
    description: "Manage 50+ domains with 380K+ keywords"
  },
  {
    key: "security-compliance",
    icon: <Shield className="h-5 w-5 text-[#0eca7b]" />,
    title: "Security & Compliance",
    description: "SOC 2, GDPR, CCPA, ISO 27001 certified"
  },
  {
    key: "global-operations",
    icon: <Globe className="h-5 w-5 text-[#0eca7b]" />,
    title: "Global Operations",
    description: "Multi-region, multi-language optimization"
  },
  {
    key: "dedicated-support",
    icon: <Briefcase className="h-5 w-5 text-[#0eca7b]" />,
    title: "Dedicated Support",
    description: "24/7 enterprise support and CSM"
  }
];

export default function ForEnterprisePage() {
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
              <Building2 className="h-4 w-4" />
              Enterprise SEO
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            Enterprise SEO that scales with your organization
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Manage hundreds of domains, millions of keywords, and global SEO operations with AI-powered automation. 
            Enterprise-grade performance, security, and dedicated support that grows with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
              size="lg" 
              className="bg-secondary text-black font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Request Enterprise Demo
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              Custom pricing • Dedicated support • White-glove onboarding
            </span>
          </div>
        </div>
      </section>

      {/* Main Visualization Section */}
      <section className="w-full max-w-6xl mx-auto -mt-8 mb-16 z-10 px-6">
        <div className="rounded-xl bg-card shadow-xl border border-border overflow-hidden">
          <div className="p-4 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Enterprise Command Center</h3>
                <p className="text-sm text-muted-foreground hidden sm:block">Global SEO operations at scale</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">58 Domains Managed</span>
                <span className="sm:hidden">58 Domains</span>
              </div>
            </div>
            <div className="h-[300px] md:h-[350px] w-full relative rounded-lg border border-border overflow-hidden bg-gradient-to-br from-background to-muted/20">
              {/* Custom Enterprise SEO Command Center */}
              <div className="absolute inset-0 p-3 md:p-4">
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-foreground">Enterprise SEO Analytics</h4>
                      <p className="text-xs text-muted-foreground hidden md:block">Multi-client SEO performance dashboard</p>
                      <p className="text-xs text-muted-foreground md:hidden">Multi-client dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>

                {/* SEO Metrics Row - Responsive Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="bg-card rounded-lg p-2 md:p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Keywords</div>
                    <div className="text-sm md:text-lg font-bold text-secondary">3,847</div>
                    <div className="text-xs text-secondary/80 hidden md:block">tracked keywords</div>
                  </div>
                  <div className="bg-card rounded-lg p-2 md:p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Growth</div>
                    <div className="text-sm md:text-lg font-bold text-secondary">+47%</div>
                    <div className="text-xs text-secondary/80 hidden md:block">this quarter</div>
                  </div>
                  <div className="bg-card rounded-lg p-2 md:p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Backlinks</div>
                    <div className="text-sm md:text-lg font-bold text-secondary">9,234</div>
                    <div className="text-xs text-secondary/80 hidden md:block">high quality</div>
                  </div>
                  <div className="bg-card rounded-lg p-2 md:p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Speed</div>
                    <div className="text-sm md:text-lg font-bold text-secondary">94/100</div>
                    <div className="text-xs text-secondary/80 hidden md:block">avg score</div>
                  </div>
                </div>

                {/* Client SEO Performance Grid - Hide on mobile, show simplified version */}
                <div className="hidden md:grid md:grid-cols-3 gap-3">
                  {/* Client 1 */}
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">TC</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-foreground">TechCorp</div>
                          <div className="text-xs text-muted-foreground">E-commerce</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Keywords Top 10</span>
                        <span className="text-secondary font-medium">+23</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Organic Growth</span>
                        <span className="text-secondary font-medium">+45%</span>
                      </div>
                    </div>
                  </div>

                  {/* Client 2 */}
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">MS</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-foreground">MedSpa</div>
                          <div className="text-xs text-muted-foreground">Healthcare</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Domain Authority</span>
                        <span className="text-secondary font-medium">67 (+5)</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Backlinks</span>
                        <span className="text-secondary font-medium">+142</span>
                      </div>
                    </div>
                  </div>

                  {/* Client 3 */}
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">RL</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-foreground">RestaurantLLC</div>
                          <div className="text-xs text-muted-foreground">Food & Dining</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Page Speed</span>
                        <span className="text-secondary font-medium">89/100</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Local Rankings</span>
                        <span className="text-secondary font-medium">#3 avg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile simplified client list */}
                <div className="md:hidden space-y-2">
                  <div className="bg-card rounded-lg p-2 border border-border shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">TC</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium">TechCorp</div>
                          <div className="text-xs text-muted-foreground">+45% growth</div>
                        </div>
                      </div>
                      <div className="text-xs text-secondary font-medium">+23</div>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-2 border border-border shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">MS</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium">MedSpa</div>
                          <div className="text-xs text-muted-foreground">DA: 67 (+5)</div>
                        </div>
                      </div>
                      <div className="text-xs text-secondary font-medium">+142</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3" />
                    <span className="hidden sm:inline">SEO analysis: Real-time monitoring</span>
                    <span className="sm:hidden">Real-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-secondary text-white text-xs px-2 md:px-3 py-1 rounded-md hover:bg-secondary/90 transition-colors">
                      <span className="hidden sm:inline">SEO Report</span>
                      <span className="sm:hidden">Report</span>
                    </button>
                    <button className="bg-muted text-muted-foreground text-xs px-2 md:px-3 py-1 rounded-md hover:bg-muted/80 transition-colors hidden sm:block">
                      View Details
                    </button>
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
              Compare your SEO performance against competitors
            </h2>
            <p className="text-muted-foreground text-lg">
              Benchmark your enterprise SEO performance against industry leaders with detailed competitive analysis, 
              visibility tracking, and market share insights across all search channels.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Side-by-side competitive SEO analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time market share tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Keyword gap analysis and opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Enterprise-level competitive intelligence</span>
              </div>
            </div>
          </div>

          {/* Right Visualization - Overlapping Charts */}
          <div className="h-[400px] md:h-[500px] bg-card border border-border rounded-xl p-4 md:p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-medium">Competitive SEO Analysis</h3>
                <p className="text-sm text-muted-foreground hidden md:block">Enterprise visibility comparison</p>
              </div>
              <Users className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[340px] md:h-[392px] space-y-6 overflow-hidden">
              {/* Brand Headers */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center p-1">
                    <img
                      src="https://www.google.com/s2/favicons?domain=audi.com&sz=64"
                      alt="Audi favicon"
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const nextElement = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                    <span className="text-lg hidden">🚗</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Audi</div>
                    <div className="text-xs text-muted-foreground">85% visibility</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-muted-foreground">VS</div>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium text-sm text-right">Tesla</div>
                    <div className="text-xs text-muted-foreground text-right">92% visibility</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center p-1">
                    <img
                      src="https://www.google.com/s2/favicons?domain=tesla.com&sz=64"
                      alt="Tesla favicon"
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const nextElement = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                    <span className="text-lg hidden">⚡</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Area Charts Visualization */}
              <div className="relative h-60 md:h-80 bg-black/5 rounded-lg border border-border overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={competitiveChartData} margin={{ top: 20, right: 20, left: 20, bottom: 60 }}>
                    <defs>
                      <linearGradient id="fillAudi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="fillTesla" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      interval={0}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      domain={[60, 95]}
                      width={40}
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
                                      <img
                                        src={entry.dataKey === 'audi' 
                                          ? "https://www.google.com/s2/favicons?domain=audi.com&sz=16"
                                          : "https://www.google.com/s2/favicons?domain=tesla.com&sz=16"
                                        }
                                        alt={`${entry.dataKey} favicon`}
                                        width={12}
                                        height={12}
                                        className="w-3 h-3 object-contain"
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                      <div 
                                        className={`w-2 h-2 rounded-full ${
                                          entry.dataKey === 'audi' 
                                            ? 'bg-orange-500' 
                                            : 'bg-green-500'
                                        }`}
                                      ></div>
                                      <span className="text-xs font-medium text-gray-600">
                                        {entry.dataKey === 'audi' ? 'Audi' : 'Tesla'}
                                      </span>
                                    </div>
                                    <div className="text-right">
                                      <div className={`text-sm font-bold ${
                                        entry.dataKey === 'audi' ? 'text-orange-600' : 'text-green-600'
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
                                    <span className={`font-medium ${
                                      (payload[1].value as number) > (payload[0].value as number) ? 'text-green-600' : 'text-orange-600'
                                    }`}>
                                      {Math.abs((payload[1].value as number) - (payload[0].value as number))}%
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
                      dataKey="audi"
                      stroke="#f97316"
                      strokeWidth={3}
                      fill="url(#fillAudi)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="tesla"
                      stroke="#22c55e"
                      strokeWidth={3}
                      fill="url(#fillTesla)"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>

                {/* Elegant Chart Legend */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-xl px-6 py-3 shadow-lg">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://www.google.com/s2/favicons?domain=audi.com&sz=20"
                            alt="Audi favicon"
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-sm"></div>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-800">Audi</span>
                          <div className="text-xs text-gray-500">85% visibility</div>
                        </div>
                      </div>
                      
                      <div className="w-px h-8 bg-border"></div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://www.google.com/s2/favicons?domain=tesla.com&sz=20"
                            alt="Tesla favicon"
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-sm"></div>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-800">Tesla</span>
                          <div className="text-xs text-gray-500">92% visibility</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Values */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-border/50 rounded-xl p-3 shadow-lg">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Visibility Gap</div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">+7%</div>
                    <div className="text-xs text-muted-foreground">Tesla leads</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Enterprise Performance (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[350px] md:h-[400px] bg-card border border-border rounded-xl p-4 md:p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-medium">Enterprise Performance</h3>
                <p className="text-sm text-muted-foreground hidden md:block">Enterprise vs Standard plan metrics</p>
              </div>
              <Monitor className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[270px] md:h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={seoComparisonData} margin={{ top: 20, right: 20, left: 10, bottom: 40 }}>
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
                        const enterprise = payload.find(p => p.dataKey === 'enterprise')?.value;
                        const standard = payload.find(p => p.dataKey === 'standard')?.value;
                        const improvement = enterprise && standard ? (((enterprise as number) - (standard as number)) / (standard as number) * 100).toFixed(0) : 0;
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2 text-center">
                              {label}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3 min-w-[140px]">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">Enterprise Plan</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">{enterprise}%</span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                  <span className="text-sm text-gray-600">Standard Plan</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">{standard}%</span>
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
                  <Bar dataKey="enterprise" fill="#0eca7b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="standard" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pr-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Enterprise-grade SEO performance
            </h2>
            <p className="text-muted-foreground text-lg">
              Advanced SEO analytics, faster reporting, and deeper insights designed for enterprise teams 
              managing complex SEO campaigns across multiple clients and markets.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Track 10,000+ keywords vs 1,000 on standard plans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">5x faster SEO reporting and analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Advanced competitor analysis and market insights</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time SEO monitoring and alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Team Management (Left Content, Right Features) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Advanced SEO team management
            </h2>
            <p className="text-muted-foreground text-lg">
              Streamline SEO operations across your entire organization with advanced team management, 
              role-based access controls, and collaborative workflows designed for enterprise SEO teams.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Unlimited team members with role-based permissions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Granular access controls for sensitive SEO data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Globe className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Multi-region SEO campaign coordination</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Headphones className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Dedicated customer success manager</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[400px] bg-card border border-border rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Enterprise SEO Features</h3>
                <p className="text-sm text-muted-foreground">Advanced capabilities for SEO teams</p>
              </div>
              <Settings className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="space-y-2 h-[320px] overflow-hidden">
              <div className="bg-background border border-border rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground mb-1 text-sm">Advanced Tracking</h4>
                    <p className="text-xs text-muted-foreground">10,000+ keywords, unlimited competitors, comprehensive rank tracking</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground mb-1 text-sm">Enterprise Security</h4>
                    <p className="text-xs text-muted-foreground">SOC 2, GDPR compliant with enterprise-grade security controls</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground mb-1 text-sm">Global Operations</h4>
                    <p className="text-xs text-muted-foreground">Multi-region SEO, local search optimization, international campaigns</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Headphones className="h-4 w-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground mb-1 text-sm">Dedicated Support</h4>
                    <p className="text-xs text-muted-foreground">Priority support, dedicated success manager, custom training</p>
                  </div>
                </div>
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