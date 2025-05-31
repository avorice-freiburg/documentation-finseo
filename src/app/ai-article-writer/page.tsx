'use client';

import React, { useState } from 'react';
import { PenTool, FileText, Image as ImageIcon, BarChart3, Calendar, Zap, Globe, Search, Target, Users, Clock, Star, ArrowUp, Shield, Eye, ExternalLink, Settings, Upload, CheckCircle, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { FooterSection } from "@/components/sections/footer-section";
import Link from "next/link";
import Image from "next/image";

// Sample data for content generation progress
const contentGenerationData = [10, 25, 40, 55, 70, 85, 92, 96, 98, 100];
const generationSteps = ["Research", "Outline", "Writing", "Images", "Charts", "CTAs", "SEO", "Review"];

// Article structure elements
const articleStructure = [
  { element: "SEO Title", status: "completed", description: "Optimized for target keywords" },
  { element: "Meta Description", status: "completed", description: "Compelling search snippet" },
  { element: "Introduction", status: "completed", description: "Hook and value proposition" },
  { element: "H2: Main Topic 1", status: "completed", description: "Primary keyword focus" },
  { element: "AI-Generated Image", status: "completed", description: "Relevant visual content" },
  { element: "H2: Main Topic 2", status: "in-progress", description: "Secondary keyword target" },
  { element: "Data Chart", status: "pending", description: "Supporting statistics" },
  { element: "CTA Section", status: "pending", description: "Service promotion" },
  { element: "Conclusion", status: "pending", description: "Summary and next steps" }
];

// Publishing integrations
const publishingIntegrations = [
  { platform: "WordPress", logo: "/cms-logos/wordpress.png", status: "connected", description: "Via FinSEO Plugin" },
  { platform: "Webflow", logo: "/cms-logos/webflow.png", status: "connected", description: "Direct API integration" }
];

// Content calendar events
const calendarEvents = [
  { title: "SEO Best Practices 2024", date: "Jan 15", status: "scheduled", type: "article" },
  { title: "Link Building Strategies", date: "Jan 18", status: "draft", type: "guide" },
  { title: "Technical SEO Audit", date: "Jan 22", status: "research", type: "tutorial" },
  { title: "Content Marketing ROI", date: "Jan 25", status: "scheduled", type: "case-study" },
  { title: "AI in SEO Tools", date: "Jan 29", status: "idea", type: "article" }
];

// Keyword research integration
const keywordSuggestions = [
  { keyword: "AI content writing", volume: "High", difficulty: "Medium", intent: "Commercial" },
  { keyword: "automated article generation", volume: "Medium", difficulty: "Low", intent: "Informational" },
  { keyword: "SEO content tools", volume: "High", difficulty: "High", intent: "Commercial" },
  { keyword: "content marketing automation", volume: "Medium", difficulty: "Medium", intent: "Commercial" }
];

// AI Content Generation Animation Component
function AIContentGenerationAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-card to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-card to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30">
        <PenTool className="h-8 w-8 text-white" />
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
            <div className="flex items-center justify-center bg-blue-600 rounded-full p-2 size-12">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-green-600 rounded-full p-2 size-12">
              <Search className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-purple-600 rounded-full p-2 size-12">
              <Target className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={50} radius={120} speed={0.7}>
            <div className="flex items-center justify-center bg-orange-600 rounded-full p-2 size-12">
              <ImageIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-teal-600 rounded-full p-2 size-12">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-indigo-600 rounded-full p-2 size-12">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-pink-600 rounded-full p-2 size-12">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={50}
            radius={160}
            reverse
            speed={0.5}
          >
            <div className="flex items-center justify-center bg-cyan-600 rounded-full p-2 size-12">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-emerald-600 rounded-full p-2 size-12">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-rose-600 rounded-full p-2 size-12">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-amber-600 rounded-full p-2 size-12">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-violet-600 rounded-full p-2 size-12">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

export default function AIArticleWriterPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center gap-10 py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 h-[500px] md:h-[600px] w-full bg-background rounded-b-xl"></div>
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
              <PenTool className="h-4 w-4" />
              AI-Powered Content Creation
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Automated article writing with AI intelligence
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Generate well-researched, SEO-optimized articles with integrated images, charts, and CTAs. 
            Publish directly to WordPress, Webflow, and schedule content with our intelligent calendar.
          </p>
          
          {/* Signup Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://app.finseo.ai/signup"
              className="bg-secondary text-black font-semibold text-sm h-12 px-8 rounded-md flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors"
            >
              Start Writing with AI
            </Link>
            <span className="text-sm text-muted-foreground">
              7 day money back guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: AI Content Generation Process (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Intelligent content generation from research to publish
            </h2>
            <p className="text-muted-foreground text-lg">
              Our AI analyzes your topic, conducts research, and creates comprehensive articles with optimized structure and engaging content.
            </p>
            
            {/* Generation Process */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Search className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automated topic research and fact-checking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <FileText className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">SEO-optimized article structure generation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <ImageIcon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">AI-generated images and data visualizations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Strategic CTA placement and optimization</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">AI Content Generation</h3>
                <p className="text-sm text-muted-foreground">Automated writing process</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <Play className="h-4 w-4" />
                In Progress
              </div>
            </div>
            
            <div className="h-[392px] relative rounded-lg border border-border overflow-hidden bg-black/5">
              <AIContentGenerationAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Article Structure & SEO Optimization (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Article Structure</h3>
                <p className="text-sm text-muted-foreground">SEO-optimized content flow</p>
              </div>
              <FileText className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-2 overflow-hidden">
              {articleStructure.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.status === "completed" ? "bg-green-500" :
                      item.status === "in-progress" ? "bg-orange-500" :
                      "bg-gray-400"
                    }`}>
                      {item.status === "completed" ? (
                        <CheckCircle className="h-3 w-3 text-white" />
                      ) : item.status === "in-progress" ? (
                        <Clock className="h-3 w-3 text-white" />
                      ) : (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{item.element}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded ${
                    item.status === "completed" ? "bg-green-100 text-green-700" :
                    item.status === "in-progress" ? "bg-orange-100 text-orange-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {item.status === "completed" ? "Done" :
                     item.status === "in-progress" ? "Writing" : "Pending"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Optimized article structure with keyword integration
            </h2>
            <p className="text-muted-foreground text-lg">
              Every article follows SEO best practices with strategic keyword placement, proper heading hierarchy, and engaging content flow.
            </p>
            
            {/* Structure Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Search className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Integrated keyword research and optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <FileText className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Proper heading hierarchy (H1, H2, H3) structure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automatic internal linking from your sitemap</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Readability optimization and engagement metrics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Automated Media Integration (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              AI-generated images, charts, and CTAs
            </h2>
            <p className="text-muted-foreground text-lg">
              Enhance your articles with automatically generated visuals, data charts, and strategically placed call-to-actions.
            </p>
            
            {/* Media Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <ImageIcon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">AI-generated relevant images and graphics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Data visualization and infographic creation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Strategic CTA placement throughout content</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automated alt text and image optimization</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Media Integration</h3>
                <p className="text-sm text-muted-foreground">Automated visual content</p>
              </div>
              <ImageIcon className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-4 overflow-hidden">
              {/* Enhanced Article Preview */}
              <div className="bg-background border border-border rounded-xl p-6 space-y-4 shadow-lg">
                {/* Article Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-xs text-muted-foreground font-medium">AI-Generated Article</span>
                  </div>
                  <div className="h-3 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded w-3/4"></div>
                  <div className="h-2 bg-muted rounded w-1/2"></div>
                </div>

                {/* Hero Image */}
                <div className="h-28 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ImageIcon className="h-6 w-6" />
                    <span className="text-sm font-medium">AI-Generated Hero Image</span>
                  </div>
                </div>

                {/* Content Lines */}
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded w-full"></div>
                  <div className="h-2 bg-muted rounded w-5/6"></div>
                  <div className="h-2 bg-muted rounded w-4/5"></div>
                </div>

                {/* CTA Section */}
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-semibold text-secondary">Strategic CTA Placement</span>
                    </div>
                    <div className="h-2 bg-secondary/30 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>

                {/* Data Chart */}
                <div className="h-20 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-teal-500/20 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute bottom-2 left-2 w-1 h-8 bg-green-500/40 rounded"></div>
                    <div className="absolute bottom-2 left-5 w-1 h-12 bg-blue-500/40 rounded"></div>
                    <div className="absolute bottom-2 left-8 w-1 h-6 bg-teal-500/40 rounded"></div>
                    <div className="absolute bottom-2 left-11 w-1 h-10 bg-purple-500/40 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BarChart3 className="h-5 w-5" />
                    <span className="text-sm font-medium">Interactive Data Chart</span>
                  </div>
                </div>

                {/* Additional Content */}
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded w-full"></div>
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Publishing Integrations (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Publishing Integrations</h3>
                <p className="text-sm text-muted-foreground">One-click publishing</p>
              </div>
              <Globe className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-4 overflow-hidden">
              {/* Publishing Dashboard Mockup */}
              <div className="bg-black/5 border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">Publishing Dashboard</span>
                  </div>
                  <div className="text-xs text-muted-foreground">2 platforms connected</div>
                </div>

                {/* WordPress Integration */}
                <div className="flex items-center justify-between p-4 bg-background border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-background rounded-lg border border-border flex items-center justify-center p-1">
                      <Image
                        src="/cms-logos/wordpress.png"
                        alt="WordPress logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">WordPress</div>
                      <div className="text-xs text-muted-foreground">Via FinSEO Plugin</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Connected</span>
                  </div>
                </div>

                {/* Webflow Integration */}
                <div className="flex items-center justify-between p-4 bg-background border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-background rounded-lg border border-border flex items-center justify-center p-1">
                      <Image
                        src="/cms-logos/webflow.png"
                        alt="Webflow logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Webflow</div>
                      <div className="text-xs text-muted-foreground">Direct API integration</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Connected</span>
                  </div>
                </div>

                {/* Publishing Flow */}
                <div className="mt-6 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">One-Click Publishing</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <FileText className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-muted-foreground">Article</span>
                    </div>
                    <div className="flex-1 h-px bg-border mx-2 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-transparent"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                        <Globe className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-muted-foreground">Published</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Seamless publishing to WordPress and Webflow
            </h2>
            <p className="text-muted-foreground text-lg">
              Publish your AI-generated articles directly to your website with our WordPress plugin and Webflow integration.
            </p>
            
            {/* Publishing Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">WordPress plugin for direct publishing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Webflow API integration for seamless workflow</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Settings className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automatic formatting and SEO optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Upload className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Bulk publishing and content management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Content Calendar & Scheduling (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Smart content calendar and scheduling
            </h2>
            <p className="text-muted-foreground text-lg">
              Plan, schedule, and manage your content strategy with our intelligent publishing calendar and automated workflow.
            </p>
            
            {/* Calendar Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Visual content calendar with drag-and-drop</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Automated scheduling and publishing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Content gap analysis and suggestions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Team collaboration and approval workflows</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Content Calendar</h3>
                <p className="text-sm text-muted-foreground">January 2024 schedule</p>
              </div>
              <Calendar className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={1500}>
                  {calendarEvents.map((event, index) => (
                    <div key={index} className="w-full">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{event.title}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            event.status === "scheduled" ? "bg-green-500" :
                            event.status === "draft" ? "bg-orange-500" :
                            event.status === "research" ? "bg-blue-500" :
                            "bg-gray-400"
                          }`}></div>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                          {event.date}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span className="capitalize">{event.type}</span>
                        <span className={`capitalize ${
                          event.status === "scheduled" ? "text-green-500" :
                          event.status === "draft" ? "text-orange-500" :
                          event.status === "research" ? "text-blue-500" :
                          "text-gray-400"
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </AnimatedList>
              </div>
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
              alt="AI Article Writer CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Write Smarter
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Link
                  href="https://app.finseo.ai/signup"
                  className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
                >
                  Start AI Writing
                </Link>
                <span className="text-white text-sm">Intelligent content creation</span>
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