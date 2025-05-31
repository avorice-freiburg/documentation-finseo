'use client';

import React, { useState } from 'react';
import { Search, Check, TrendingUp, Globe, PieChart, BarChart3, KeyRound, Target, Users, Clock, Star, ArrowUp, Shield, Zap, Eye, Code, Image as ImageIcon, Accessibility, FileText, AlertTriangle, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { FooterSection } from "@/components/sections/footer-section";
import Link from "next/link";
import Image from "next/image";

// Sample data for performance chart
const performanceData = [45, 52, 48, 65, 72, 78, 85, 88, 92, 89, 94, 96, 98, 95, 97, 99, 98, 100, 99];
const performanceCounterValues = [45, 52, 65, 78, 88, 96];

// Sample SEO issues for animated list
const seoIssues = [
  { issue: "Missing meta description", severity: "High", page: "/products", status: "error" },
  { issue: "Image alt text missing", severity: "Medium", page: "/about", status: "warning" },
  { issue: "H1 tag duplicate", severity: "High", page: "/blog", status: "error" },
  { issue: "Page speed slow", severity: "Medium", page: "/contact", status: "warning" },
  { issue: "Schema markup invalid", severity: "Low", page: "/services", status: "info" }
];

// Sample accessibility audit data
const accessibilityAudit = [
  { check: "Color contrast ratio", status: "pass", score: 98 },
  { check: "Keyboard navigation", status: "pass", score: 95 },
  { check: "Screen reader compatibility", status: "warning", score: 87 },
  { check: "Focus indicators", status: "pass", score: 92 },
  { check: "ARIA labels", status: "warning", score: 89 }
];

// Schema validation animation component
function SchemaValidationAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-card to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-card to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30">
        <Code className="h-8 w-8 text-white" />
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
            <div className="flex items-center justify-center bg-green-500 rounded-full p-2 size-12">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-blue-500 rounded-full p-2 size-12">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-purple-500 rounded-full p-2 size-12">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={50} radius={120} speed={0.7}>
            <div className="flex items-center justify-center bg-orange-500 rounded-full p-2 size-12">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-red-500 rounded-full p-2 size-12">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-teal-500 rounded-full p-2 size-12">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-pink-500 rounded-full p-2 size-12">
              <Users className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={50}
            radius={160}
            reverse
            speed={0.5}
          >
            <div className="flex items-center justify-center bg-indigo-500 rounded-full p-2 size-12">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-yellow-500 rounded-full p-2 size-12">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-cyan-500 rounded-full p-2 size-12">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-emerald-500 rounded-full p-2 size-12">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-rose-500 rounded-full p-2 size-12">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

export default function OnPageCheckerPage() {
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
              <Shield className="h-4 w-4" />
              Advanced On-Page SEO Checker
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Comprehensive on-page SEO analysis in seconds
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Analyze every aspect of your website's on-page SEO with our advanced checker. 
            From meta tags to performance, accessibility, and schema validation - get actionable insights instantly.
          </p>
        </div>
      </section>

      {/* Section 1: Meta Tags & Title Analysis (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Perfect your meta tags and titles
            </h2>
            <p className="text-muted-foreground text-lg">
              Analyze title tags, meta descriptions, and header structure for optimal search engine visibility and click-through rates.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time title tag length optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Meta description quality scoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Header hierarchy validation (H1-H6)</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Meta Tags Analysis</h3>
                <p className="text-sm text-muted-foreground">Title & description optimization</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <CheckCircle className="h-4 w-4" />
                92% Score
              </div>
            </div>
            
            <div className="h-[392px] space-y-4 overflow-hidden">
              {/* Title Tag Preview */}
              <div className="bg-black/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">TITLE TAG</span>
                  <span className="text-xs text-green-500">52/60 chars</span>
                </div>
                <div className="text-sm font-medium text-white-600 mb-1">
                  Best SEO Tools for Content Optimization | FinSEO
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-1 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>

              {/* Meta Description Preview */}
              <div className="bg-black/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">META DESCRIPTION</span>
                  <span className="text-xs text-green-500">148/160 chars</span>
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Discover powerful SEO tools for content optimization. Analyze keywords, track rankings, and boost your search visibility with AI-powered insights.
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-1 rounded-full" style={{width: '93%'}}></div>
                </div>
              </div>

              {/* Headers Structure */}
              <div className="bg-black/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground">HEADER STRUCTURE</span>
                  <span className="text-xs text-green-500">Valid</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 bg-blue-500 text-white text-center rounded">H1</div>
                    <span>SEO Tools for Content Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="w-8 bg-green-500 text-white text-center rounded">H2</div>
                    <span>Keyword Research Features</span>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <div className="w-8 bg-orange-500 text-white text-center rounded">H3</div>
                    <span>Advanced Analytics</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="w-8 bg-green-500 text-white text-center rounded">H2</div>
                    <span>Content Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Performance & PageSpeed (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">PageSpeed Performance</h3>
                <p className="text-sm text-muted-foreground">Google PageSpeed integration</p>
              </div>
              <Zap className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] w-full relative rounded-lg border border-border overflow-hidden bg-black/5">
              <ThirdBentoAnimation 
                data={performanceData} 
                toolTipValues={performanceCounterValues} 
                color="#0eca7b"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Optimize performance with Google PageSpeed
            </h2>
            <p className="text-muted-foreground text-lg">
              Real-time performance analysis using Google PageSpeed Insights API. Get actionable recommendations to improve Core Web Vitals.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Core Web Vitals monitoring (LCP, FID, CLS)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Mobile and desktop performance scores</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Resource optimization recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Schema Validation (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Validate schema markup with Schema.org
            </h2>
            <p className="text-muted-foreground text-lg">
              Ensure your structured data is properly implemented and validated against Schema.org standards for rich snippets.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Schema.org validation and testing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Rich snippets preview and optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">JSON-LD, Microdata, and RDFa support</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Schema Validation</h3>
                <p className="text-sm text-muted-foreground">Structured data analysis</p>
              </div>
              <Code className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] relative rounded-lg border border-border overflow-hidden bg-black/5">
              <SchemaValidationAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: SEO Issues Detection (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">SEO Issues Detected</h3>
                <p className="text-sm text-muted-foreground">Real-time issue monitoring</p>
              </div>
              <AlertTriangle className="h-5 w-5 text-orange-500" />
            </div>
            
            <div className="h-[392px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={1500}>
                  {seoIssues.map((item, index) => (
                    <div key={index} className="w-full">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">{item.issue}</span>
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === "error" ? "bg-red-500" :
                          item.status === "warning" ? "bg-orange-500" :
                          "bg-blue-500"
                        }`}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Page: {item.page}</span>
                        <span className={`px-2 py-0.5 rounded ${
                          item.severity === "High" ? "bg-red-900 text-red-300" :
                          item.severity === "Medium" ? "bg-orange-900 text-orange-300" :
                          "bg-blue-900 text-blue-300"
                        }`}>
                          {item.severity}
                        </span>
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
              Detect and fix SEO issues instantly
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive scanning for duplicate content, broken links, missing alt tags, and other critical SEO issues.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Duplicate content detection and analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Broken links and resource validation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Image optimization and alt text analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Accessibility Checker (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Ensure accessibility compliance
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive accessibility auditing using Google's accessibility checker and WCAG guidelines for inclusive web experiences.
            </p>
            
            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">WCAG 2.1 AA compliance checking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Color contrast and readability analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Keyboard navigation and screen reader testing</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Accessibility Audit</h3>
                <p className="text-sm text-muted-foreground">WCAG compliance check</p>
              </div>
              <Accessibility className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] flex flex-col justify-center space-y-4 overflow-hidden">
              {accessibilityAudit.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/5 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.status === "pass" ? "bg-green-500" :
                      item.status === "warning" ? "bg-orange-500" :
                      "bg-red-500"
                    }`}>
                      {item.status === "pass" ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : item.status === "warning" ? (
                        <AlertCircle className="h-4 w-4 text-white" />
                      ) : (
                        <XCircle className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{item.check}</div>
                      <div className="text-xs text-muted-foreground">Score: {item.score}%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.score >= 90 ? "bg-green-500" :
                          item.score >= 70 ? "bg-orange-500" :
                          "bg-red-500"
                        }`}
                        style={{width: `${item.score}%`}}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{item.score}%</span>
                  </div>
                </div>
              ))}
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
              alt="On-Page SEO Checker CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Perfect Your SEO
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Link
                  href="https://app.finseo.ai/signup"
                  className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
                >
                  Start Your On-Page Analysis
                </Link>
                <span className="text-white text-sm">7-day money back guarantee</span>
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