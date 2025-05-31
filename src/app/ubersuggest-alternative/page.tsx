'use client';

import React from 'react';
import { Building2, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, Lock, Database, Layers, Server, Briefcase, Monitor, Network, Cpu, Headphones, Star, Search, Bot, FileText, Lightbulb, Rocket, Brain, Gauge, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart, Line, LineChart, Pie, PieChart, Cell } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Comparison data between Finseo and Ubersuggest
const comparisonData = [
  {
    feature: "Keyword Research",
    finseo: "Unlimited keyword research with AI-powered insights and competitor analysis",
    ubersuggest: "Limited monthly suggestions (20k-100k) with basic keyword data",
    advantage: "finseo"
  },
  {
    feature: "Rank Tracking",
    finseo: "Unlimited keyword tracking with real-time updates and AI insights",
    ubersuggest: "Limited tracked keywords (125-300) with daily updates only",
    advantage: "finseo"
  },
  {
    feature: "Site Audit",
    finseo: "Comprehensive technical SEO audits with unlimited page scans",
    ubersuggest: "Limited page scans (1k-10k) with weekly audits only",
    advantage: "finseo"
  },
  {
    feature: "Content Creation",
    finseo: "AI-powered content creation with articles, images, and optimization",
    ubersuggest: "No content creation - analysis and suggestions only",
    advantage: "finseo"
  },
  {
    feature: "Backlink Analysis",
    finseo: "Unlimited backlink analysis with link building opportunities",
    ubersuggest: "Limited backlink data (2k-10k) without building tools",
    advantage: "finseo"
  },
  {
    feature: "Team Collaboration",
    finseo: "Advanced team features with unlimited users and white-label options",
    ubersuggest: "Limited users (1-5) with basic collaboration features",
    advantage: "finseo"
  }
];

// Performance comparison data
const performanceData = [
  { metric: "Keyword Research", finseo: 98, ubersuggest: 72 },
  { metric: "Site Auditing", finseo: 95, ubersuggest: 68 },
  { metric: "Content Tools", finseo: 92, ubersuggest: 45 },
  { metric: "Team Features", finseo: 94, ubersuggest: 58 },
  { metric: "Value for Money", finseo: 96, ubersuggest: 62 },
];

// Benefits data
const benefits = [
  {
    icon: <Search className="h-6 w-6 text-[#0eca7b]" />,
    title: "Unlimited Keyword Research",
    description: "Unlike Ubersuggest's monthly limits, Finseo provides unlimited keyword research with AI-powered insights and competitive analysis."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-[#0eca7b]" />,
    title: "Advanced Analytics",
    description: "Go beyond Ubersuggest's basic reporting with real-time dashboards, predictive analytics, and custom insights."
  },
  {
    icon: <Bot className="h-6 w-6 text-[#0eca7b]" />,
    title: "AI Content Creation",
    description: "Create optimized content with AI while Ubersuggest only provides analysis - no content creation capabilities."
  },
  {
    icon: <Users className="h-6 w-6 text-[#0eca7b]" />,
    title: "Enterprise-Ready",
    description: "Built for teams with unlimited users and advanced collaboration, unlike Ubersuggest's user limitations."
  }
];

const chartConfig = {
  finseo: { label: "Finseo", color: "#0eca7b" },
  ubersuggest: { label: "Ubersuggest", color: "#94a3b8" },
};

export default function UbersuggestAlternativePage() {
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
              <Search className="h-4 w-4" />
              #1 Ubersuggest Alternative
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            The Best Ubersuggest Alternative:<br />
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            While Ubersuggest limits your keyword research and tracking, Finseo provides the most comprehensive Ubersuggest alternative with unlimited features, 
            AI-powered content creation, and advanced team collaboration at a better price.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-secondary text-white font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Try the Best Ubersuggest Alternative
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              7-day free trial • Unlimited features • Better value guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* Main Comparison Dashboard */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Teams Choose This Ubersuggest Alternative</h2>
          <p className="text-muted-foreground text-lg">
            Compare Ubersuggest's limited features with Finseo's unlimited SEO platform
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
                        <Search className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="font-semibold">Ubersuggest Individual</div>
                      <div className="text-sm text-muted-foreground">€29/month</div>
                      <div className="text-xs text-muted-foreground mt-1">1 website</div>
                    </div>
                  </th>
                  <th className="text-center p-6 min-w-[140px]">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                        <Search className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="font-semibold">Ubersuggest Enterprise</div>
                      <div className="text-sm text-muted-foreground">€99/month</div>
                      <div className="text-xs text-muted-foreground mt-1">8-15 websites</div>
                    </div>
                  </th>
                  <th className="text-center p-6 min-w-[140px] bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-2">
                        <Rocket className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div className="font-semibold">Finseo Professional</div>
                      <div className="text-sm text-muted-foreground">$49/month</div>
                      <div className="text-xs text-muted-foreground mt-1">Unlimited websites</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Keyword Research */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Keyword Research</div>
                        <div className="text-sm text-muted-foreground">Monthly keyword suggestions</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">20,000 suggestions</div>
                    <div className="text-xs text-muted-foreground mt-1">Monthly limit</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">100,000 suggestions</div>
                    <div className="text-xs text-muted-foreground mt-1">Monthly limit</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Unlimited suggestions</div>
                    <div className="text-xs text-muted-foreground mt-1">No monthly limits</div>
                  </td>
                </tr>

                {/* Rank Tracking */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Rank Tracking</div>
                        <div className="text-sm text-muted-foreground">Tracked keywords per project</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">125 keywords</div>
                    <div className="text-xs text-muted-foreground mt-1">Daily updates</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">300 keywords</div>
                    <div className="text-xs text-muted-foreground mt-1">Daily updates</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Unlimited keywords</div>
                    <div className="text-xs text-muted-foreground mt-1">Real-time updates</div>
                  </td>
                </tr>

                {/* Site Audit */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Site Audit</div>
                        <div className="text-sm text-muted-foreground">Pages scanned per audit</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">1,000 pages</div>
                    <div className="text-xs text-muted-foreground mt-1">Weekly scans</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">10,000 pages</div>
                    <div className="text-xs text-muted-foreground mt-1">Weekly scans</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Unlimited pages</div>
                    <div className="text-xs text-muted-foreground mt-1">On-demand scans</div>
                  </td>
                </tr>

                {/* Content Creation */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">AI Content Creation</div>
                        <div className="text-sm text-muted-foreground">Articles, images, optimization</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Not available</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Not available</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Full AI suite</div>
                  </td>
                </tr>

                {/* Team Users */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Team Collaboration</div>
                        <div className="text-sm text-muted-foreground">Users and collaboration features</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">1 user</div>
                    <div className="text-xs text-muted-foreground mt-1">No collaboration</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">5 users</div>
                    <div className="text-xs text-muted-foreground mt-1">Basic sharing</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Unlimited users</div>
                    <div className="text-xs text-muted-foreground mt-1">Advanced collaboration</div>
                  </td>
                </tr>

                {/* Backlink Analysis */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Backlink Analysis</div>
                        <div className="text-sm text-muted-foreground">Backlinks analyzed</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">2,000 backlinks</div>
                    <div className="text-xs text-muted-foreground mt-1">Analysis only</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">10,000 backlinks</div>
                    <div className="text-xs text-muted-foreground mt-1">Analysis only</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Unlimited backlinks</div>
                    <div className="text-xs text-muted-foreground mt-1">Analysis + building tools</div>
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
                    <div className="text-sm font-medium">€29/month (~$31)</div>
                    <div className="text-xs text-muted-foreground mt-1">Limited features</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm font-medium">€99/month (~$106)</div>
                    <div className="text-xs text-muted-foreground mt-1">Higher limits</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-bold">$49/month</div>
                    <div className="text-xs text-muted-foreground mt-1">Unlimited everything</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="p-6 bg-gradient-to-r from-secondary/5 to-secondary/10 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold mb-1">Ready to upgrade from Ubersuggest?</h4>
                <p className="text-sm text-muted-foreground">Get unlimited SEO features for 54% less than Ubersuggest Enterprise</p>
                <p className="text-xs text-muted-foreground mt-1">No monthly limits • Unlimited users • AI content creation included</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">Save $57/month</div>
                  <div className="text-xs text-muted-foreground">vs Ubersuggest Enterprise</div>
                </div>
                <Button className="bg-green-600 text-white hover:bg-green-700" asChild>
                  <Link href="https://app.finseo.ai/signup">
                    Switch to Finseo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
            Why teams are upgrading from Ubersuggest to Finseo
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            While Ubersuggest limits your keyword research and tracking, Finseo provides unlimited features, 
            AI-powered content creation, and advanced team collaboration at a better price.
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
              See how Finseo's unlimited SEO platform compares to Ubersuggest's limited features across all key areas.
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
                      <span className="text-muted-foreground">{item.ubersuggest}</span>
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
                <p className="text-sm text-muted-foreground">Finseo vs Ubersuggest across key performance indicators</p>
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
                        const ubersuggest = payload.find(p => p.dataKey === 'ubersuggest')?.value;
                        const improvement = finseo && ubersuggest ? (((finseo as number) - (ubersuggest as number)) / (ubersuggest as number) * 100).toFixed(0) : 0;
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
                                  <span className="text-sm text-gray-600">Ubersuggest</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">{ubersuggest}%</span>
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
                  <Bar dataKey="ubersuggest" fill="#94a3b8" radius={[4, 4, 0, 0]} />
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
              alt="Ubersuggest Alternative CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Best Ubersuggest Alternative
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Button className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md" asChild>
                  <Link href="https://app.finseo.ai/signup">
                    Start Your Ubersuggest Alternative
                  </Link>
                </Button>
                <span className="text-white text-sm">Unlimited SEO features without restrictions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 