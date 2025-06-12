'use client';

import React, { useState, useRef } from 'react';
import { Bot, LineChart, ArrowRight, Zap, Search, CheckCircle, Eye, BarChart, Target, Users, Clock, Star, Shield, Globe, TrendingUp, AlertTriangle, FileText, Settings, Play, Heart, Frown, Smile, Meh, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import { FooterSection } from "@/components/sections/footer-section";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Link from "next/link";
import Image from "next/image";

// Sample data for competitor comparison
const competitorData = [
  { 
    brand: "Mercedes-Benz", 
    visibility: 85, 
    mentions: 198, 
    sentiment: 78,
    favicon: "https://www.google.com/s2/favicons?domain=mercedes-benz.com&sz=64",
    color: "bg-orange-500",
    chartColor: "#f97316"
  },
  { 
    brand: "Porsche", 
    visibility: 72, 
    mentions: 142, 
    sentiment: 85,
    favicon: "https://www.google.com/s2/favicons?domain=porsche.com&sz=64",
    color: "bg-green-500",
    chartColor: "#22c55e"
  }
];

// Sentiment analysis data
const sentimentData = [
  { platform: "ChatGPT", positive: 78, neutral: 15, negative: 7, total: 45 },
  { platform: "Claude", positive: 82, neutral: 12, negative: 6, total: 38 },
  { platform: "Gemini", positive: 71, neutral: 20, negative: 9, total: 32 },
  { platform: "Perplexity", positive: 89, neutral: 8, negative: 3, total: 67 }
];

// Search intent data
const searchIntentData = [
  { intent: "Informational", percentage: 45, queries: 234, description: "Learning and research queries" },
  { intent: "Commercial", percentage: 32, queries: 167, description: "Product comparison and evaluation" },
  { intent: "Navigational", percentage: 15, queries: 78, description: "Brand and website searches" },
  { intent: "Transactional", percentage: 8, queries: 42, description: "Purchase and action-oriented" }
];

// Real-time mentions feed
const mentionsFeed = [
  { platform: "ChatGPT", query: "best SEO tools 2024", sentiment: "positive", intent: "commercial", time: "2 min ago" },
  { platform: "Perplexity", query: "how to improve website ranking", sentiment: "positive", intent: "informational", time: "5 min ago" },
  { platform: "Claude", query: "SEO software comparison", sentiment: "neutral", intent: "commercial", time: "8 min ago" },
  { platform: "Gemini", query: "digital marketing tools", sentiment: "positive", intent: "informational", time: "12 min ago" }
];

// Chart data for area charts
const chartData = [
  { month: "Jan", mercedes: 65, porsche: 58 },
  { month: "Feb", mercedes: 70, porsche: 62 },
  { month: "Mar", mercedes: 75, porsche: 68 },
  { month: "Apr", mercedes: 78, porsche: 70 },
  { month: "May", mercedes: 82, porsche: 69 },
  { month: "Jun", mercedes: 85, porsche: 72 },
];

const chartConfig = {
  mercedes: {
    label: "Mercedes-Benz",
    color: "#f97316",
  },
  porsche: {
    label: "Porsche", 
    color: "#22c55e",
  },
};

export default function AIVisibilityTrackingPage() {
  
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
        
        <div className="text-center max-w-3xl mx-auto px-6 z-10 pt-16">
          <div className="mx-auto flex justify-center">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2 mb-6">
              <Eye className="h-4 w-4" />
              AI Visibility Tracking
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            AI Visibility Tracking: Monitor Your Brand Across ChatGPT, Claude & AI Platforms
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Advanced AI visibility tracking tool to monitor your brand mentions across ChatGPT, Claude, Gemini, Perplexity and all major AI platforms. 
            Track AI search rankings, compare competitor visibility, analyze sentiment of AI responses, and understand search intent behind every mention. 
            Real-time AI platform monitoring with comprehensive analytics and reporting.
          </p>
          
          {/* Signup Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://app.finseo.ai/signup"
              className="bg-secondary text-black font-semibold text-sm h-12 px-8 rounded-md flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors"
            >
              Start AI Visibility Tracking
            </Link>
            <span className="text-sm text-muted-foreground">
              7 day money back guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Main Visualization Section - Keep existing bento animation */}
      <section className="w-full max-w-6xl mx-auto -mt-8 mb-16 z-10 px-6">
        <div className="rounded-xl bg-card shadow-xl border border-border overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">AI Platform Monitoring</h3>
                <p className="text-sm text-muted-foreground">Real-time visibility across LLMs</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <Play className="h-4 w-4" />
                Live Tracking
              </div>
            </div>
            <div className="h-[350px] w-full relative rounded-lg border border-border overflow-hidden flex items-center justify-center">
              <SecondBentoAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Competitor Comparison Charts (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              AI Visibility Tracking: Compare Your Brand Performance Against Competitors
            </h2>
            <p className="text-muted-foreground text-lg">
              See how your brand performs against competitors across all AI platforms with detailed comparison charts and competitive intelligence. 
              Combine with our <Link href="/keyword-research" className="text-primary hover:underline">AI keyword research tool</Link> for comprehensive SEO strategy.
            </p>
            
            {/* Comparison Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <BarChart className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Side-by-side visibility comparison charts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time competitive benchmarking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Market share analysis across platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Mention frequency and quality tracking</span>
              </div>
            </div>
          </div>

          {/* Right Visualization - Overlapping Charts */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Competitive Analysis</h3>
                <p className="text-sm text-muted-foreground">Visibility comparison charts</p>
              </div>
              <Users className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-6 overflow-hidden">
              {/* Brand Headers */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center p-1">
                    <img
                      src="https://www.google.com/s2/favicons?domain=porsche.com&sz=64"
                      alt="Porsche favicon"
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
                    <span className="text-lg hidden">🏎️</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Porsche</div>
                    <div className="text-xs text-muted-foreground">142 mentions</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-muted-foreground">VS</div>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium text-sm text-right">Mercedes-Benz</div>
                    <div className="text-xs text-muted-foreground text-right">198 mentions</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center p-1">
                    <img
                      src="https://www.google.com/s2/favicons?domain=mercedes-benz.com&sz=64"
                      alt="Mercedes-Benz favicon"
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
                </div>
              </div>

              {/* Overlapping Area Charts Visualization */}
              <div className="relative h-80 bg-black/5 rounded-lg border border-border overflow-hidden">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 60 }}>
                    <defs>
                      <linearGradient id="fillMercedes" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="fillPorsche" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
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
                      domain={[50, 90]}
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
                                        src={entry.dataKey === 'mercedes' 
                                          ? "https://www.google.com/s2/favicons?domain=mercedes-benz.com&sz=16"
                                          : "https://www.google.com/s2/favicons?domain=porsche.com&sz=16"
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
                                          entry.dataKey === 'mercedes' 
                                            ? 'bg-orange-500' 
                                            : 'bg-green-500'
                                        }`}
                                      ></div>
                                      <span className="text-xs font-medium text-gray-600">
                                        {entry.dataKey === 'mercedes' ? 'Mercedes' : 'Porsche'}
                                      </span>
                                    </div>
                                    <div className="text-right">
                                      <div className={`text-sm font-bold ${
                                        entry.dataKey === 'mercedes' ? 'text-orange-600' : 'text-green-600'
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
                                      (payload[1].value as number) > (payload[0].value as number) ? 'text-orange-600' : 'text-green-600'
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
                      dataKey="porsche"
                      stroke="#22c55e"
                      strokeWidth={3}
                      fill="url(#fillPorsche)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="mercedes"
                      stroke="#f97316"
                      strokeWidth={3}
                      fill="url(#fillMercedes)"
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
                          <img
                            src="https://www.google.com/s2/favicons?domain=porsche.com&sz=20"
                            alt="Porsche favicon"
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
                          <span className="text-sm font-semibold text-gray-800">Porsche</span>
                          <div className="text-xs text-gray-500">72% visibility</div>
                        </div>
                      </div>
                      
                      <div className="w-px h-8 bg-border"></div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://www.google.com/s2/favicons?domain=mercedes-benz.com&sz=20"
                            alt="Mercedes-Benz favicon"
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
                          <span className="text-sm font-semibold text-gray-800">Mercedes-Benz</span>
                          <div className="text-xs text-gray-500">85% visibility</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Values */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-border/50 rounded-xl p-3 shadow-lg">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Visibility Gap</div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">+13%</div>
                    <div className="text-xs text-muted-foreground">Mercedes leads</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sentiment Analysis (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Sentiment Analysis</h3>
                <p className="text-sm text-muted-foreground">How AI speaks about your brand</p>
              </div>
              <Heart className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-4 overflow-hidden">
              {sentimentData.map((platform, index) => (
                <div key={index} className="p-4 bg-background border border-border rounded-lg flex-shrink-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-secondary" />
                      <span className="font-medium text-sm">{platform.platform}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{platform.total} mentions</span>
                  </div>
                  
                  {/* Sentiment Breakdown */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Smile className="h-3 w-3 text-green-500" />
                        <span>Positive</span>
                      </div>
                      <span className="font-medium">{platform.positive}%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full" 
                        style={{ width: `${platform.positive}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Meh className="h-3 w-3 text-gray-500" />
                        <span>Neutral</span>
                      </div>
                      <span className="font-medium">{platform.neutral}%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-400 rounded-full" 
                        style={{ width: `${platform.neutral}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Frown className="h-3 w-3 text-red-500" />
                        <span>Negative</span>
                      </div>
                      <span className="font-medium">{platform.negative}%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500 rounded-full" 
                        style={{ width: `${platform.negative}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              AI Sentiment Analysis & Brand Visibility Tracking
            </h2>
            <p className="text-muted-foreground text-lg">
              Understand how AI platforms speak about your brand with detailed sentiment analysis across all mentions and responses.
            </p>
            
            {/* Sentiment Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Smile className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Positive, neutral, and negative sentiment tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <BarChart className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Platform-specific sentiment analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Sentiment trend analysis over time</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Competitor sentiment comparison</span>
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
              AI Platform Search Intent Analysis & Visibility Tracking
            </h2>
            <p className="text-muted-foreground text-lg">
              Analyze the search intent behind queries that mention your brand to understand user motivation and optimize your content strategy.
            </p>
            
            {/* Intent Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Search className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Informational, commercial, navigational, transactional</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Intent-based content optimization suggestions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <BarChart className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Query volume and intent distribution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Intent trend analysis and forecasting</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Search Intent Breakdown</h3>
                <p className="text-sm text-muted-foreground">User motivation analysis</p>
              </div>
              <Search className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-4 overflow-hidden">
              {searchIntentData.map((intent, index) => (
                <div key={index} className="p-4 bg-background border border-border rounded-lg flex-shrink-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        intent.intent === "Informational" ? "bg-blue-100" :
                        intent.intent === "Commercial" ? "bg-green-100" :
                        intent.intent === "Navigational" ? "bg-purple-100" :
                        "bg-orange-100"
                      }`}>
                        <Search className={`h-4 w-4 ${
                          intent.intent === "Informational" ? "text-blue-600" :
                          intent.intent === "Commercial" ? "text-green-600" :
                          intent.intent === "Navigational" ? "text-purple-600" :
                          "text-orange-600"
                        }`} />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{intent.intent}</div>
                        <div className="text-xs text-muted-foreground">{intent.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{intent.percentage}%</div>
                      <div className="text-xs text-muted-foreground">{intent.queries} queries</div>
                    </div>
                  </div>
                  
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        intent.intent === "Informational" ? "bg-blue-500" :
                        intent.intent === "Commercial" ? "bg-green-500" :
                        intent.intent === "Navigational" ? "bg-purple-500" :
                        "bg-orange-500"
                      }`}
                      style={{ width: `${intent.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-800 text-sm">Intent Insights</span>
                </div>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 45% informational queries suggest content opportunities</li>
                  <li>• 32% commercial intent shows purchase consideration</li>
                  <li>• Strong brand recognition with 15% navigational</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Real-time Mentions Feed (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Live Mentions Feed</h3>
                <p className="text-sm text-muted-foreground">Real-time brand mentions</p>
              </div>
              <Eye className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={3000}>
                  {mentionsFeed.map((mention, index) => (
                    <div key={index} className="w-full">
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          mention.sentiment === "positive" ? "bg-green-500" :
                          mention.sentiment === "neutral" ? "bg-gray-500" :
                          "bg-red-500"
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Bot className="h-3 w-3 text-secondary" />
                            <span className="font-medium text-sm">{mention.platform}</span>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              mention.sentiment === "positive" ? "bg-green-100 text-green-700" :
                              mention.sentiment === "neutral" ? "bg-gray-100 text-gray-700" :
                              "bg-red-100 text-red-700"
                            }`}>
                              {mention.sentiment}
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 mb-1">"{mention.query}"</div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>{mention.intent} intent</span>
                            <span>•</span>
                            <span>{mention.time}</span>
                          </div>
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
              Real-time AI Visibility Tracking & Monitoring Alerts
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay informed with instant notifications about new mentions, sentiment changes, and competitive movements across all AI platforms.
            </p>
            
            {/* Monitoring Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time mention detection and alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Instant sentiment analysis of new mentions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Search className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automatic search intent classification</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Customizable alert thresholds and notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Frequently Asked Questions About AI Visibility Tracking
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about monitoring your brand across AI platforms
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-3">What is AI visibility tracking?</h3>
            <p className="text-muted-foreground">
              AI visibility tracking is the process of monitoring how often and in what context your brand appears in AI platform responses like ChatGPT, Claude, Gemini, and Perplexity. It helps you understand your brand's presence in the new era of AI-powered search and conversation.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-3">Which AI platforms can I track?</h3>
            <p className="text-muted-foreground">
              Our AI visibility tracking tool monitors mentions across ChatGPT, Claude, Gemini, Perplexity, and other major AI platforms. We continuously add support for new AI platforms as they gain popularity.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-3">How does AI brand monitoring differ from traditional SEO tracking?</h3>
            <p className="text-muted-foreground">
              Traditional SEO tracking focuses on search engine rankings, while AI visibility tracking monitors how AI platforms mention and recommend your brand in conversational responses. This is crucial as more users rely on AI for research and recommendations.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-3">Can I track competitor performance in AI platforms?</h3>
            <p className="text-muted-foreground">
              Yes, our AI visibility tracking includes comprehensive competitor analysis. Monitor how competitors appear in AI responses, compare mention frequency, sentiment, and identify opportunities to improve your own AI visibility.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-3">What metrics does AI visibility tracking provide?</h3>
            <p className="text-muted-foreground">
              We track mention frequency, sentiment analysis, search intent classification, competitive positioning, and visibility trends over time. You'll also get alerts for significant changes in your AI platform presence.
            </p>
          </div>
        </div>
      </section>

      {/* Custom CTA Section */}
      <section id="cta" className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
            <Image
              src="/agent-cta-background.png"
              alt="AI Visibility Tracking Dashboard - Monitor Brand Mentions Across ChatGPT, Claude, and AI Platforms"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Dominate AI Search
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Link
                  href="https://app.finseo.ai/signup"
                  className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
                >
                  Start AI Visibility Tracking
                </Link>
                <span className="text-white text-sm">Complete AI platform monitoring</span>
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