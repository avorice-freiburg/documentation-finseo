'use client';

import React from 'react';
import { Building2, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, Lock, Database, Layers, Server, Briefcase, Monitor, Network, Cpu, Headphones, Star, Search, Bot, FileText, Lightbulb, Rocket, Brain, Gauge, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart, Line, LineChart, Pie, PieChart, Cell } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Comparison data between Finseo and Peec
const comparisonData = [
  {
    feature: "SEO Automation",
    finseo: "Complete SEO automation with 50+ automated workflows",
    peec: "Limited automation focused only on content optimization",
    advantage: "finseo"
  },
  {
    feature: "Keyword Research",
    finseo: "Advanced keyword research with competitor analysis and trends",
    peec: "Basic keyword suggestions without competitive insights",
    advantage: "finseo"
  },
  {
    feature: "Content Strategy",
    finseo: "AI-powered content strategy with SEO optimization built-in",
    peec: "Content optimization without strategic planning",
    advantage: "finseo"
  },
  {
    feature: "Technical SEO",
    finseo: "Comprehensive technical SEO audits and monitoring",
    peec: "Limited technical SEO capabilities",
    advantage: "finseo"
  },
  {
    feature: "Reporting & Analytics",
    finseo: "Enterprise-grade reporting with custom dashboards",
    peec: "Basic reporting with limited customization",
    advantage: "finseo"
  },
  {
    feature: "Team Collaboration",
    finseo: "Advanced team features with role-based access and workflows",
    peec: "Basic team functionality without advanced permissions",
    advantage: "finseo"
  }
];

// Performance comparison data
const performanceData = [
  { metric: "SEO Tools", finseo: 95, peec: 68 },
  { metric: "Automation", finseo: 92, peec: 71 },
  { metric: "Analytics", finseo: 96, peec: 74 },
  { metric: "User Experience", finseo: 94, peec: 72 },
  { metric: "Value for Money", finseo: 98, peec: 65 },
];

// Feature coverage comparison
const featureCoverageData = [
  { name: "Finseo Coverage", value: 95, color: "#0eca7b" },
  { name: "Peec Coverage", value: 65, color: "#94a3b8" },
];

// ROI comparison data
const roiData = [
  { month: "Month 1", finseo: 15, peec: 8 },
  { month: "Month 3", finseo: 35, peec: 18 },
  { month: "Month 6", finseo: 65, peec: 32 },
  { month: "Month 12", finseo: 120, peec: 58 },
];

// Benefits data
const benefits = [
  {
    icon: <Brain className="h-6 w-6 text-[#0eca7b]" />,
    title: "Advanced AI Automation",
    description: "While Peec offers basic automation, Finseo provides comprehensive AI-powered workflows that handle complex SEO tasks automatically."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-[#0eca7b]" />,
    title: "Complete SEO Suite",
    description: "Unlike Peec's limited toolset, Finseo offers a comprehensive SEO platform with 50+ tools and integrations."
  },
  {
    icon: <Gauge className="h-6 w-6 text-[#0eca7b]" />,
    title: "Superior Performance",
    description: "Finseo delivers 40% better results than Peec with faster processing, better accuracy, and more comprehensive insights."
  },
  {
    icon: <Users className="h-6 w-6 text-[#0eca7b]" />,
    title: "Enterprise-Ready",
    description: "Built for teams with advanced collaboration, role management, and enterprise security features that Peec lacks."
  }
];

// Testimonials
const testimonials = [
  {
    name: "David Kim",
    role: "SEO Manager at TechStart",
    company: "TechStart",
    content: "We switched from Peec to Finseo and saw immediate improvements. The automation capabilities are far more advanced and the results speak for themselves.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Director",
    company: "GrowthCo",
    content: "Peec was too limited for our needs. Finseo's comprehensive platform and better automation helped us scale our SEO efforts effectively.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Head of Marketing",
    company: "ScaleUp",
    content: "The migration from Peec was smooth, and Finseo's advanced features immediately improved our SEO performance and team productivity.",
    rating: 5
  }
];

const chartConfig = {
  finseo: { label: "Finseo", color: "#0eca7b" },
  peec: { label: "Peec.ai", color: "#94a3b8" },
  coverage: { label: "Feature Coverage", color: "#0eca7b" },
};

export default function PeecAlternativePage() {
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
              <Brain className="h-4 w-4" />
              Superior Peec.ai Alternative
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            The Best Peec AI Alternative:<br />
            <span className="text-secondary">Advanced SEO Automation Platform</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            While Peec offers basic SEO automation, Finseo provides the most comprehensive Peec AI alternative with advanced AI, 
            complete toolset, and enterprise features that deliver 40% better results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-secondary text-white font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Try the Best Peec AI Alternative
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              7-day free trial • Better results guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* Main Comparison Dashboard */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Teams Choose This Peec.ai Alternative</h2>
          <p className="text-muted-foreground text-lg">
            Compare Peec's limited AI monitoring with Finseo's complete SEO platform
          </p>
        </div>

        {/* Pricing & Feature Comparison Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Pricing & Feature Comparison</h3>
                <p className="text-muted-foreground">See what you get with each platform</p>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Better Value</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-medium">Features</th>
                  <th className="text-center p-6 min-w-[140px]">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                        <Brain className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="font-semibold">Peec Starter</div>
                      <div className="text-sm text-muted-foreground">€89/month</div>
                      <div className="text-xs text-muted-foreground mt-1">25 prompts</div>
                    </div>
                  </th>
                  <th className="text-center p-6 min-w-[140px]">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                        <Brain className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="font-semibold">Peec Enterprise</div>
                      <div className="text-sm text-muted-foreground">€499/month</div>
                      <div className="text-xs text-muted-foreground mt-1">300+ prompts</div>
                    </div>
                  </th>
                  <th className="text-center p-6 min-w-[140px] bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-2">
                        <Rocket className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div className="font-semibold">Finseo Professional</div>
                      <div className="text-sm text-muted-foreground">$49/month</div>
                      <div className="text-xs text-muted-foreground mt-1">+ AI Rank Tracker $39.99</div>
                      <div className="text-xs font-medium">= $89/month total</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* AI Platform Coverage */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">AI Platform Coverage</div>
                        <div className="text-sm text-muted-foreground">Platforms monitored</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">ChatGPT, Perplexity, Google AI</div>
                    <div className="text-xs text-muted-foreground mt-1">3 platforms</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">ChatGPT, Perplexity, Google AI</div>
                    <div className="text-xs text-muted-foreground mt-1">3 platforms</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">All AI platforms + Claude, Bing Chat, Gemini</div>
                    <div className="text-xs text-muted-foreground mt-1">6+ platforms (via AI Rank Tracker add-on)</div>
                  </td>
                </tr>

                {/* Traditional SEO */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Traditional SEO Tools</div>
                        <div className="text-sm text-muted-foreground">Keyword research, rank tracking, backlinks</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Not included</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Not included</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Full SEO suite</div>
                  </td>
                </tr>

                {/* Content Creation */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">AI Content Creation</div>
                        <div className="text-sm text-muted-foreground">Articles, images, charts</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Monitoring only</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Monitoring only</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Full creation suite</div>
                  </td>
                </tr>

                {/* SEO Automation */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">SEO Automation</div>
                        <div className="text-sm text-muted-foreground">Automated workflows and optimization</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Basic automation</div>
                    <div className="text-xs text-muted-foreground mt-1">Limited workflows</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Basic automation</div>
                    <div className="text-xs text-muted-foreground mt-1">Limited workflows</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">50+ automated workflows</div>
                    <div className="text-xs text-muted-foreground mt-1">Complete automation</div>
                  </td>
                </tr>

                {/* Analytics & Reporting */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Analytics & Reporting</div>
                        <div className="text-sm text-muted-foreground">Dashboards and insights</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Basic reports</div>
                    <div className="text-xs text-muted-foreground mt-1">Email support</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Advanced reports</div>
                    <div className="text-xs text-muted-foreground mt-1">Phone + Slack support</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Enterprise dashboards</div>
                    <div className="text-xs text-muted-foreground mt-1">Custom analytics</div>
                  </td>
                </tr>

                {/* Team Features */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Team Collaboration</div>
                        <div className="text-sm text-muted-foreground">Multi-user access, white-label</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Unlimited seats</div>
                    <div className="text-xs text-muted-foreground mt-1">Basic sharing</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Unlimited seats</div>
                    <div className="text-xs text-muted-foreground mt-1">Advanced features</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Enterprise collaboration</div>
                    <div className="text-xs text-muted-foreground mt-1">White-label + roles</div>
                  </td>
                </tr>

                {/* Value Summary */}
                <tr className="bg-muted/20">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Value Summary</div>
                        <div className="text-sm text-muted-foreground">What you get for your money</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm font-medium">€89/month (~$95)</div>
                    <div className="text-xs text-muted-foreground mt-1">AI monitoring only</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm font-medium">€499/month (~$535)</div>
                    <div className="text-xs text-muted-foreground mt-1">AI monitoring only</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-bold">$89/month</div>
                    <div className="text-xs text-muted-foreground mt-1">Complete SEO platform</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="p-6 bg-gradient-to-r from-secondary/5 to-secondary/10 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold mb-1">Ready to upgrade from Peec.ai?</h4>
                <p className="text-sm text-muted-foreground">Get complete SEO platform + AI tracking for 83% less than Peec Enterprise</p>
                <p className="text-xs text-muted-foreground mt-1">Finseo Professional ($49) + AI Rank Tracker ($39.99) = $89/month</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">Save $446/month</div>
                  <div className="text-xs text-muted-foreground">vs Peec Enterprise</div>
                </div>
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Switch to Finseo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Why teams are upgrading from Peec to Finseo
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            While Peec offers basic SEO automation, Finseo provides advanced AI capabilities, 
            comprehensive tools, and enterprise features that deliver superior results.
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

      {/* Detailed Comparison Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium tracking-tight">
              Comprehensive feature comparison
            </h2>
            <p className="text-muted-foreground text-lg">
              See how Finseo's advanced SEO platform compares to Peec's limited automation capabilities across all key areas.
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
                      <span className="text-muted-foreground">{item.peec}</span>
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
                <h3 className="text-lg font-medium">Performance Metrics</h3>
                <p className="text-sm text-muted-foreground">Finseo vs Peec across key performance indicators</p>
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
                        const peec = payload.find(p => p.dataKey === 'peec')?.value;
                        const improvement = finseo && peec ? (((finseo as number) - (peec as number)) / (peec as number) * 100).toFixed(0) : 0;
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
                                  <span className="text-sm text-gray-600">Peec</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">{peec}%</span>
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
                  <Bar dataKey="peec" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
            <Image
              src="/agent-cta-background.png"
              alt="Peec AI Alternative CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Your Best Peec AI Alternative
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Button className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md">
                  Start Your Peec AI Alternative
                </Button>
                <span className="text-white text-sm">Advanced SEO automation beyond basic tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 