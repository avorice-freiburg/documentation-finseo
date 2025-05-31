'use client';

import React from 'react';
import { Building2, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, FileText, Mail, Palette, Monitor, MousePointer } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import Link from "next/link";

// White-label performance data
const whitelabelPerformanceData = [
  { metric: "Client Retention", withFinseo: 96, industry: 73 },
  { metric: "Report Efficiency", withFinseo: 89, industry: 45 },
  { metric: "Client Satisfaction", withFinseo: 94, industry: 76 },
  { metric: "Revenue Growth", withFinseo: 187, industry: 112 },
];

// Agency growth timeline
const agencyGrowthData = [
  { month: "Jan", clients: 12, revenue: 45000 },
  { month: "Feb", clients: 18, revenue: 67500 },
  { month: "Mar", clients: 25, revenue: 93750 },
  { month: "Apr", clients: 32, revenue: 120000 },
  { month: "May", clients: 41, revenue: 153750 },
  { month: "Jun", clients: 50, revenue: 187500 },
];

// Agency performance data for the bento animation
const agencyPerformanceData = [45, 52, 48, 61, 58, 67, 73, 69, 78, 82, 89, 94];
const agencyTooltipValues = [1200, 1350, 1180, 1520, 1430, 1680, 1850, 1720, 1980, 2100, 2280, 2450];

const chartConfig = {
  withFinseo: { label: "With Finseo", color: "#0eca7b" },
  industry: { label: "Industry Average", color: "#94a3b8" },
  clients: { label: "Clients", color: "#0eca7b" },
  revenue: { label: "Revenue", color: "#f97316" },
};

export default function ForAgenciesPage() {
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
              SEO for Agencies
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            White-label SEO platform that scales your agency
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Deliver professional SEO services under your brand with automated reporting, 
            client management, and AI-powered insights. Trusted by 40,000+ agencies worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://app.finseo.ai/signup"
              className="bg-secondary text-black font-semibold text-sm h-12 px-8 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors"
            >
              Start Agency Trial
            </Link>
            <span className="text-sm text-muted-foreground">
              7-day free trial • White-label included • No setup fees
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
                <h3 className="text-lg font-medium">Agency Performance Dashboard</h3>
                <p className="text-sm text-muted-foreground">Real-time client performance metrics</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <BarChart3 className="h-4 w-4" />
                Live Data Visualization
              </div>
            </div>
            <div className="h-[350px] w-full relative rounded-lg border border-border overflow-hidden bg-gradient-to-br from-background to-muted/20">
              {/* Custom Agency Dashboard UI */}
              <div className="absolute inset-0 p-4">
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Agency Dashboard</h4>
                      <p className="text-xs text-muted-foreground">Managing 47 active clients</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Keyword Rankings</div>
                    <div className="text-lg font-bold text-secondary">2,847</div>
                    <div className="text-xs text-secondary/80">+156 this week</div>
                  </div>
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Organic Traffic</div>
                    <div className="text-lg font-bold text-blue-600">+47%</div>
                    <div className="text-xs text-blue-500">vs last month</div>
                  </div>
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Backlinks Built</div>
                    <div className="text-lg font-bold text-purple-600">1,234</div>
                    <div className="text-xs text-purple-500">+89 this month</div>
                  </div>
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">Page Speed Score</div>
                    <div className="text-lg font-bold text-orange-600">94/100</div>
                    <div className="text-xs text-orange-500">Avg. across clients</div>
                  </div>
                </div>

                {/* Client Cards Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Client 1 */}
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
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
                        <span className="text-secondary font-medium">↗ +23</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Organic Traffic</span>
                        <span className="text-blue-600 font-medium">+45%</span>
                      </div>
                    </div>
                  </div>

                  {/* Client 2 */}
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
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
                        <span className="text-purple-600 font-medium">+142</span>
                      </div>
                    </div>
                  </div>

                  {/* Client 3 */}
                  <div className="bg-card rounded-lg p-3 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
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
                        <span className="text-orange-600 font-medium">89/100</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Local Rankings</span>
                        <span className="text-blue-600 font-medium">#3 avg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Last updated: 2 min ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-secondary text-white text-xs px-3 py-1 rounded-md hover:bg-secondary/90 transition-colors">
                      Generate Reports
                    </button>
                    <button className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-md hover:bg-muted/80 transition-colors">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: White-Label Reporting (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Professional white-label reports that impress clients
            </h2>
            <p className="text-muted-foreground text-lg">
              Deliver branded SEO reports with your agency's identity. Custom logos, colors, domains, 
              and automated delivery that makes you look like the SEO expert you are.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Palette className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Complete branding customization with your logo and colors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automated report scheduling and delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Globe className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Custom domain hosting for your SEO platform</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <FileText className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Unlimited reports with no additional fees</span>
              </div>
            </div>
          </div>

          {/* Right Visualization - Detailed White-Label UI Customization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-medium">White-Label Customization Studio</h3>
                <p className="text-sm text-muted-foreground">Complete branding control</p>
              </div>
              <Award className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[430px] space-y-3 overflow-hidden">
              {/* Live Preview Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-2 flex items-center justify-between">
                  <span>LIVE PREVIEW</span>
                  <span className="text-green-600">✓ Auto-sync enabled</span>
                </div>
                <div className="bg-white border border-blue-200 rounded-md p-2 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">Your Agency</div>
                        <div className="text-xs text-gray-500">SEO Dashboard</div>
                      </div>
                    </div>
                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Live</div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-full"></div>
                    <div className="h-1.5 bg-blue-100 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Customization Controls */}
              <div className="space-y-3">
                {/* Logo & Branding - Compact */}
                <div className="bg-background border border-border rounded-lg p-3 hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Logo & Branding</span>
                    <MousePointer className="h-3 w-3 text-gray-400 ml-auto" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg border border-blue-200 flex items-center justify-center shadow-sm">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-700">Upload Your Logo</div>
                        <div className="text-xs text-gray-500">SVG, PNG up to 2MB</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="bg-gray-100 border border-dashed border-gray-300 rounded p-1 text-center cursor-pointer hover:bg-gray-50">
                        <div className="text-xs text-gray-500">Square</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-1 text-center cursor-pointer">
                        <div className="text-xs text-blue-600 font-medium">Current</div>
                      </div>
                      <div className="bg-gray-100 border border-dashed border-gray-300 rounded p-1 text-center cursor-pointer hover:bg-gray-50">
                        <div className="text-xs text-gray-500">Wide</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color Palette - Compact */}
                <div className="bg-background border border-border rounded-lg p-3 hover:border-purple-300 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                    <span className="text-sm font-medium">Color Palette</span>
                    <MousePointer className="h-3 w-3 text-gray-400 ml-auto" />
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-1">
                      <div className="space-y-1">
                        <div className="w-full h-6 bg-blue-500 rounded border border-gray-200 cursor-pointer hover:scale-105 transition-transform"></div>
                        <div className="text-xs text-center text-gray-600">Primary</div>
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-6 bg-blue-600 rounded border border-gray-200 cursor-pointer hover:scale-105 transition-transform"></div>
                        <div className="text-xs text-center text-gray-600">Secondary</div>
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-6 bg-blue-400 rounded border border-gray-200 cursor-pointer hover:scale-105 transition-transform"></div>
                        <div className="text-xs text-center text-gray-600">Accent</div>
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-6 bg-gray-100 rounded border border-gray-200 cursor-pointer hover:scale-105 transition-transform"></div>
                        <div className="text-xs text-center text-gray-600">Background</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Scheme:</span>
                      <span className="text-blue-600 font-medium">Professional Blue</span>
                    </div>
                    <div className="flex gap-1">
                      <button className="flex-1 bg-blue-50 text-blue-600 text-xs py-1 px-2 rounded border border-blue-200 hover:bg-blue-100 transition-colors">
                        Custom
                      </button>
                      <button className="flex-1 bg-gray-50 text-gray-600 text-xs py-1 px-2 rounded border border-gray-200 hover:bg-gray-100 transition-colors">
                        Presets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Client Management (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[400px] bg-card border border-border rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Agency Growth Metrics</h3>
                <p className="text-sm text-muted-foreground">Client and revenue progression</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                  Coming Soon
                </span>
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
            </div>
            
            <div className="h-[320px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart data={agencyGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="fillClients" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0eca7b" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0eca7b" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const clientsData = agencyGrowthData.find(d => d.month === label);
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2 text-center">
                              {label} 2024
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3 min-w-[140px]">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">Clients</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">
                                  {clientsData?.clients}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                  <span className="text-sm text-gray-600">Revenue</span>
                                </div>
                                <span className="text-sm font-semibold text-orange-600">
                                  ${clientsData?.revenue?.toLocaleString()}
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
                    dataKey="clients"
                    stroke="#0eca7b"
                    strokeWidth={3}
                    fill="url(#fillClients)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pr-4">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-medium tracking-tight">
                Streamlined client management at scale
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Handle multiple clients effortlessly with organized dashboards, automated workflows, 
              and transparent reporting that keeps clients informed and satisfied.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Manage 50+ clients from a single dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Settings className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Customizable access levels and permissions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automated project setup and onboarding</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time performance tracking and alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Performance Comparison (Left Content, Right Chart) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Outperform industry standards with AI automation
            </h2>
            <p className="text-muted-foreground text-lg">
              Agencies using Finseo achieve 96% client retention and 187% revenue growth compared to industry averages. 
              Our AI-powered platform delivers results that keep clients coming back.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Award className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">96% client retention vs 73% industry average</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">187% revenue growth with automated workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">89% reporting efficiency improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">94% client satisfaction with branded reports</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[400px] bg-card border border-border rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Performance Comparison</h3>
                <p className="text-sm text-muted-foreground">Finseo agencies vs industry average</p>
              </div>
              <Target className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[320px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart data={whitelabelPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const withFinseo = payload.find(p => p.dataKey === 'withFinseo')?.value;
                        const industry = payload.find(p => p.dataKey === 'industry')?.value;
                        const improvement = withFinseo && industry ? (((withFinseo as number) - (industry as number)) / (industry as number) * 100).toFixed(0) : 0;
                        return (
                          <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-3 shadow-lg">
                            <div className="text-sm font-medium text-gray-700 mb-2 text-center">
                              {label}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-3 min-w-[140px]">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                  <span className="text-sm text-gray-600">With Finseo</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">{withFinseo}%</span>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                  <span className="text-sm text-gray-600">Industry Avg</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">{industry}%</span>
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
                  <Bar dataKey="withFinseo" fill="#0eca7b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="industry" fill="#94a3b8" radius={[4, 4, 0, 0]} />
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