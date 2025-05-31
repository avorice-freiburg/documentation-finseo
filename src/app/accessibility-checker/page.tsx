'use client';

import React, { useState } from 'react';
import { Accessibility, Eye, Keyboard, Volume2, MousePointer, Contrast, Type, Clock, Shield, CheckCircle, XCircle, AlertCircle, AlertTriangle, Users, Globe, FileText, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { FooterSection } from "@/components/sections/footer-section";
import Link from "next/link";
import Image from "next/image";

// Sample data for accessibility compliance chart
const complianceData = [45, 52, 58, 65, 72, 78, 85, 88, 92, 89, 94, 96, 98, 95, 97, 99, 98, 100, 99];
const complianceCounterValues = [45, 65, 78, 88, 96, 99];

// WCAG compliance checks
const wcagChecks = [
  { criterion: "1.1.1 Non-text Content", level: "A", status: "pass", score: 100, category: "Perceivable" },
  { criterion: "1.3.1 Info and Relationships", level: "A", status: "warning", score: 87, category: "Perceivable" },
  { criterion: "1.4.3 Contrast (Minimum)", level: "AA", status: "pass", score: 95, category: "Perceivable" },
  { criterion: "2.1.1 Keyboard", level: "A", status: "pass", score: 98, category: "Operable" },
  { criterion: "2.4.6 Headings and Labels", level: "AA", status: "warning", score: 82, category: "Operable" },
  { criterion: "3.1.1 Language of Page", level: "A", status: "pass", score: 100, category: "Understandable" }
];

// BFSG compliance areas
const bfsgAreas = [
  { area: "E-Commerce Platforms", compliance: 94, status: "compliant", deadline: "June 2025" },
  { area: "Banking Services", compliance: 98, status: "compliant", deadline: "June 2025" },
  { area: "Digital Services", compliance: 89, status: "warning", deadline: "June 2025" },
  { area: "Communication Services", compliance: 92, status: "compliant", deadline: "June 2025" }
];

// Color contrast issues
const contrastIssues = [
  { element: "Button text", ratio: "2.1:1", required: "4.5:1", status: "fail", location: "Header navigation" },
  { element: "Link color", ratio: "3.8:1", required: "4.5:1", status: "fail", location: "Footer links" },
  { element: "Body text", ratio: "7.2:1", required: "4.5:1", status: "pass", location: "Main content" },
  { element: "Form labels", ratio: "5.1:1", required: "4.5:1", status: "pass", location: "Contact form" },
  { element: "Error messages", ratio: "4.8:1", required: "4.5:1", status: "pass", location: "Form validation" }
];

// Keyboard navigation issues
const keyboardIssues = [
  { issue: "Missing focus indicators", severity: "High", element: "Dropdown menu", fix: "Add :focus styles" },
  { issue: "Tab order incorrect", severity: "Medium", element: "Modal dialog", fix: "Reorder tab indices" },
  { issue: "Keyboard trap", severity: "High", element: "Image carousel", fix: "Add escape mechanism" },
  { issue: "Skip link missing", severity: "Medium", element: "Main navigation", fix: "Add skip to content link" }
];

// Screen reader compatibility
const screenReaderIssues = [
  { issue: "Missing alt text", count: 12, severity: "High", type: "Images" },
  { issue: "Empty headings", count: 3, severity: "Medium", type: "Structure" },
  { issue: "Missing form labels", count: 5, severity: "High", type: "Forms" },
  { issue: "Unclear link text", count: 8, severity: "Medium", type: "Navigation" },
  { issue: "Missing ARIA labels", count: 15, severity: "Medium", type: "Interactive" }
];

// BFSG Animation Component
function BFSGComplianceAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-card to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-card to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-red-600 p-2 rounded-full z-30">
        <Shield className="h-8 w-8 text-white" />
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
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-green-600 rounded-full p-2 size-12">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-purple-600 rounded-full p-2 size-12">
              <Users className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={50} radius={120} speed={0.7}>
            <div className="flex items-center justify-center bg-orange-600 rounded-full p-2 size-12">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-teal-600 rounded-full p-2 size-12">
              <Keyboard className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-indigo-600 rounded-full p-2 size-12">
              <Volume2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-pink-600 rounded-full p-2 size-12">
              <Contrast className="h-6 w-6 text-white" />
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
              <Type className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-emerald-600 rounded-full p-2 size-12">
              <MousePointer className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-rose-600 rounded-full p-2 size-12">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-amber-600 rounded-full p-2 size-12">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-center bg-violet-600 rounded-full p-2 size-12">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

export default function AccessibilityCheckerPage() {
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
              <Accessibility className="h-4 w-4" />
              WCAG & BFSG Compliance Checker
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Comprehensive accessibility compliance testing
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Ensure your website meets WCAG 2.1 AA standards and German BFSG requirements. 
            Comprehensive testing for inclusive digital experiences and legal compliance.
          </p>
        </div>
      </section>

      {/* Section 1: WCAG Compliance Overview (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              WCAG 2.1 AA compliance testing
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive testing against Web Content Accessibility Guidelines 2.1 Level AA standards for maximum accessibility coverage.
            </p>
            
            {/* WCAG Principles */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm"><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <MousePointer className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm"><strong>Operable:</strong> Interface components must be operable by all users</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <FileText className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm"><strong>Understandable:</strong> Information and UI operation must be understandable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm"><strong>Robust:</strong> Content must be robust enough for various assistive technologies</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">WCAG 2.1 AA Compliance</h3>
                <p className="text-sm text-muted-foreground">Detailed criterion analysis</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <CheckCircle className="h-4 w-4" />
                94% Compliant
              </div>
            </div>
            
            <div className="h-[392px] space-y-3 overflow-hidden">
              {wcagChecks.map((check, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      check.status === "pass" ? "bg-green-500" :
                      check.status === "warning" ? "bg-orange-500" :
                      "bg-red-500"
                    }`}>
                      {check.status === "pass" ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : check.status === "warning" ? (
                        <AlertCircle className="h-4 w-4 text-white" />
                      ) : (
                        <XCircle className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{check.criterion}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                          check.level === "A" ? "bg-blue-100 text-blue-700" :
                          check.level === "AA" ? "bg-purple-100 text-purple-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {check.level}
                        </span>
                        <span>{check.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium">{check.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: German BFSG Compliance (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">BFSG Compliance Status</h3>
                <p className="text-sm text-muted-foreground">Barrierefreiheitsstärkungsgesetz</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>
            
            <div className="h-[392px] relative rounded-lg border border-border overflow-hidden bg-black/5">
              <BFSGComplianceAnimation />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              German BFSG compliance monitoring
            </h2>
            <p className="text-muted-foreground text-lg">
              Ensure compliance with the German Accessibility Enhancement Act (Barrierefreiheitsstärkungsgesetz) effective June 2025.
            </p>
            
            {/* BFSG Requirements */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <Globe className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">E-commerce platforms and digital services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Banking and financial services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Communication and media services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <FileText className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Digital documents and content</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-amber-600" />
                <span className="font-medium text-amber-800">Compliance Deadline</span>
              </div>
              <p className="text-sm text-amber-700">
                All covered services must be fully accessible by <strong>June 28, 2025</strong> according to BFSG requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Color Contrast Analysis (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Advanced color contrast analysis
            </h2>
            <p className="text-muted-foreground text-lg">
              Automated testing of color contrast ratios against WCAG AA and AAA standards for optimal readability.
            </p>
            
            {/* Contrast Standards */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Contrast className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">WCAG AA: 4.5:1 ratio for normal text</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Contrast className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">WCAG AA: 3:1 ratio for large text</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Contrast className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">WCAG AAA: 7:1 ratio for enhanced contrast</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Contrast Analysis</h3>
                <p className="text-sm text-muted-foreground">Color accessibility testing</p>
              </div>
              <Contrast className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-3 overflow-hidden">
              {contrastIssues.map((issue, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      issue.status === "pass" ? "bg-green-500" : "bg-red-500"
                    }`}>
                      {issue.status === "pass" ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : (
                        <XCircle className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{issue.element}</div>
                      <div className="text-xs text-muted-foreground">{issue.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      issue.status === "pass" ? "text-green-600" : "text-red-600"
                    }`}>
                      {issue.ratio}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Req: {issue.required}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Keyboard Navigation Testing (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Keyboard Navigation Issues</h3>
                <p className="text-sm text-muted-foreground">Interactive element testing</p>
              </div>
              <Keyboard className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={1800}>
                  {keyboardIssues.map((item, index) => (
                    <div key={index} className="w-full">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">{item.issue}</span>
                        <div className={`w-3 h-3 rounded-full ${
                          item.severity === "High" ? "bg-red-500" :
                          item.severity === "Medium" ? "bg-orange-500" :
                          "bg-blue-500"
                        }`}></div>
                      </div>
                      <div className="text-xs text-gray-400 mb-1">
                        Element: {item.element}
                      </div>
                      <div className="text-xs text-green-400">
                        Fix: {item.fix}
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
              Comprehensive keyboard navigation testing
            </h2>
            <p className="text-muted-foreground text-lg">
              Ensure all interactive elements are accessible via keyboard navigation for users who cannot use a mouse.
            </p>
            
            {/* Keyboard Testing Areas */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Keyboard className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Tab order and focus management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Visible focus indicators</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <MousePointer className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Keyboard shortcuts and access keys</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Keyboard trap detection and prevention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Screen Reader Compatibility (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Screen reader compatibility testing
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive testing for screen reader compatibility including NVDA, JAWS, and VoiceOver support.
            </p>
            
            {/* Screen Reader Testing */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Volume2 className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">ARIA labels and descriptions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <FileText className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Semantic HTML structure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Type className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Alternative text for images</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Form labels and instructions</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Screen Reader Issues</h3>
                <p className="text-sm text-muted-foreground">Assistive technology compatibility</p>
              </div>
              <Volume2 className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-3 overflow-hidden">
              {screenReaderIssues.map((issue, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      issue.severity === "High" ? "bg-red-500" :
                      issue.severity === "Medium" ? "bg-orange-500" :
                      "bg-blue-500"
                    }`}>
                      <span className="text-white font-bold text-xs">{issue.count}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{issue.issue}</div>
                      <div className="text-xs text-muted-foreground">{issue.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded ${
                      issue.severity === "High" ? "bg-red-100 text-red-700" :
                      issue.severity === "Medium" ? "bg-orange-100 text-orange-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {issue.severity}
                    </div>
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
              alt="Accessibility Checker CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Ensure Accessibility
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Link
                  href="https://app.finseo.ai/signup"
                  className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
                >
                  Start Accessibility Testing
                </Link>
                <span className="text-white text-sm">WCAG & BFSG compliant</span>
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