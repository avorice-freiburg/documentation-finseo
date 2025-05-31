'use client';

import React from 'react';
import { Building2, Users, TrendingUp, Zap, Shield, Clock, BarChart3, Eye, Target, Award, CheckCircle, ArrowRight, Settings, Globe, DollarSign, Lock, Database, Layers, Server, Briefcase, Monitor, Network, Cpu, Headphones, Star, Search, Bot, FileText, Lightbulb, Rocket, Upload, Heart, AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, Area, AreaChart, Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Updated comparison data to reflect Otterly's actual features from their website
const comparisonData = [
  {
    feature: "AI Platform Coverage",
    finseo: "ChatGPT, Claude, Gemini, Perplexity, Bing Chat + more",
    otterly: "Google AI Overviews, ChatGPT, Perplexity only",
    advantage: "Broader AI platform monitoring including Claude and Bing Chat"
  },
  {
    feature: "Traditional SEO Tools",
    finseo: "Complete SEO suite with keyword research, rank tracking, backlinks, technical SEO",
    otterly: "Not available - AI search focus only",
    advantage: "Full SEO toolkit beyond just AI search monitoring"
  },
  {
    feature: "Content Creation",
    finseo: "AI-powered articles, images, charts, and content optimization",
    otterly: "Not available - monitoring only",
    advantage: "Create optimized content, don't just monitor it"
  },
  {
    feature: "Keyword Research",
    finseo: "Traditional + conversational keywords with search intent analysis",
    otterly: "Basic conversational keyword suggestions",
    advantage: "Comprehensive keyword research for all search types"
  },
  {
    feature: "Brand Monitoring",
    finseo: "Brand mentions + sentiment + competitive analysis + alerts",
    otterly: "Brand mentions and sentiment tracking",
    advantage: "Advanced competitive intelligence and real-time alerts"
  },
  {
    feature: "Link Analysis",
    finseo: "AI citations + traditional backlinks + link building opportunities",
    otterly: "AI search link citations only",
    advantage: "Complete link ecosystem analysis and strategy"
  }
];

// Platform capabilities data for high-level UI comparison - fixed overflow
const platformCapabilities = [
  {
    category: "AI Platform Coverage",
    finseo: {
      platforms: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Bing Chat"],
      score: 95,
      description: "Complete multi-platform monitoring"
    },
    otterly: {
      platforms: ["Google AI", "ChatGPT", "Perplexity"],
      score: 60,
      description: "Limited to 3 platforms"
    }
  },
  {
    category: "Feature Scope",
    finseo: {
      features: ["AI Tracking", "SEO Suite", "Content Creation", "Analytics"],
      score: 90,
      description: "Complete SEO ecosystem"
    },
    otterly: {
      features: ["AI Search Monitoring"],
      score: 25,
      description: "Single focus area"
    }
  },
  {
    category: "Automation & Intelligence",
    finseo: {
      automations: ["Smart Discovery", "Auto-Analysis", "Competitor Intel"],
      score: 85,
      description: "Intelligent automation"
    },
    otterly: {
      automations: ["Weekly Reports"],
      score: 40,
      description: "Basic automation"
    }
  }
];

// Updated migration timeline - much shorter since Otterly has limited features
const migrationTimeline = [
  { step: 'Export Data', duration: '5 minutes', description: 'Download your tracking data from Otterly' },
  { step: 'Import to Finseo', duration: '10 minutes', description: 'Upload CSV and configure enhanced tracking' },
  { step: 'Setup Complete', duration: '15 minutes', description: 'Start tracking across all AI platforms' }
];

// Updated benefits to reflect the upgrade from limited to comprehensive
const benefits = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Complete SEO Platform",
    description: "Go beyond AI search monitoring to a full SEO suite with keyword research, content creation, and traditional search optimization."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Multi-Platform AI Coverage",
    description: "Track visibility across ChatGPT, Claude, Gemini, Bing Chat, and Perplexity - more platforms than Otterly."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Deep competitive intelligence and automated insights that go beyond basic monitoring reports."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Enterprise-Ready",
    description: "Built for agencies and teams with collaboration tools, white-label options, and advanced permissions."
  }
];

const chartConfig = {
  finseo: { label: "Finseo", color: "#0eca7b" },
  otterly: { label: "Otterly.ai", color: "#94a3b8" },
  progress: { label: "Migration Progress", color: "#0eca7b" },
};

export default function OtterlyAlternativePage() {
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
              <Star className="h-4 w-4" />
              #1 Otterly Alternative
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-6">
            The Complete Otterly Alternative:<br />
            <span className="text-secondary">Beyond Basic AI Tracking</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-3xl mx-auto">
            While Otterly only tracks ChatGPT visibility, Finseo provides comprehensive AI tracking across all platforms 
            plus a complete SEO suite. Get the full picture of your search performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
              Try the Best Otterly Alternative
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Compare Features
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Migration Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Migrate from Otterly Alternative in Minutes</h2>
          <p className="text-muted-foreground text-lg">
            Since Otterly only offers basic AI tracking, migration is quick and simple
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {migrationTimeline.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-secondary font-medium mb-2">{step.duration}</p>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Total migration time: ~30 minutes</span>
          </div>
        </div>
      </section>

      {/* Main Comparison Dashboard */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Teams Choose This Otterly Alternative</h2>
          <p className="text-muted-foreground text-lg">
            Compare Otterly's limited AI monitoring with Finseo's complete SEO platform
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
                        <Eye className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="font-semibold">Otterly Lite</div>
                      <div className="text-sm text-muted-foreground">$29/month</div>
                      <div className="text-xs text-muted-foreground mt-1">10 prompts</div>
                    </div>
                  </th>
                  <th className="text-center p-6 min-w-[140px]">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                        <Eye className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="font-semibold">Otterly Pro</div>
                      <div className="text-sm text-muted-foreground">$989/month</div>
                      <div className="text-xs text-muted-foreground mt-1">1,000 prompts</div>
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
                    <div className="text-sm">Google AI, ChatGPT, Perplexity</div>
                    <div className="text-xs text-muted-foreground mt-1">3 platforms</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Google AI, ChatGPT, Perplexity</div>
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

                {/* Keyword Research */}
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Keyword Research</div>
                        <div className="text-sm text-muted-foreground">Traditional + conversational keywords</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Basic conversational</div>
                    <div className="text-xs text-muted-foreground mt-1">Limited scope</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Basic conversational</div>
                    <div className="text-xs text-muted-foreground mt-1">Limited scope</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Advanced + traditional</div>
                    <div className="text-xs text-muted-foreground mt-1">Complete research</div>
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
                    <div className="text-sm">Weekly reports</div>
                    <div className="text-xs text-muted-foreground mt-1">Basic analytics</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Weekly reports</div>
                    <div className="text-xs text-muted-foreground mt-1">Basic analytics</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Real-time dashboards</div>
                    <div className="text-xs text-muted-foreground mt-1">Advanced insights</div>
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
                    <div className="text-sm">Unlimited users</div>
                    <div className="text-xs text-muted-foreground mt-1">Basic sharing</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm">Unlimited users</div>
                    <div className="text-xs text-muted-foreground mt-1">Basic sharing</div>
                  </td>
                  <td className="p-6 text-center bg-slate-50 dark:bg-slate-900/20 border-l-4 border-green-500">
                    <div className="text-sm font-medium">Advanced collaboration</div>
                    <div className="text-xs text-muted-foreground mt-1">White-label options</div>
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
                    <div className="text-sm font-medium">$29/month</div>
                    <div className="text-xs text-muted-foreground mt-1">AI monitoring only</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-sm font-medium">$989/month</div>
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
                <h4 className="font-semibold mb-1">Ready to upgrade from Otterly?</h4>
                <p className="text-sm text-muted-foreground">Get complete SEO platform + AI tracking for 91% less than Otterly Pro</p>
                <p className="text-xs text-muted-foreground mt-1">Finseo Professional ($49) + AI Rank Tracker ($39.99) = $89/month</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">Save $900/month</div>
                  <div className="text-xs text-muted-foreground">vs Otterly Pro</div>
                </div>
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Switch to Finseo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Rank Tracker Add-on Highlight */}
        

      </section>

      {/* Detailed Feature Comparison */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Otterly Alternative: Feature-by-Feature Comparison</h2>
          <p className="text-muted-foreground text-lg">
            See exactly what you gain by switching from Otterly's limited offering
          </p>
        </div>

        <div className="space-y-6">
          {comparisonData.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.feature}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Finseo</p>
                      <p className="text-muted-foreground text-sm">{item.finseo}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full mt-0.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Otterly</p>
                      <p className="text-muted-foreground text-sm">{item.otterly}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <p className="text-secondary font-medium text-sm">{item.advantage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
            <Image
              src="/agent-cta-background.png"
              alt="Otterly Alternative CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                The Best Otterly Alternative
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Button className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md">
                  Start Your Otterly Alternative
                </Button>
                <span className="text-white text-sm">Complete SEO platform beyond basic AI tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 