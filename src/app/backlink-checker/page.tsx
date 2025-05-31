'use client';

import React, { useState } from 'react';
import { Link as LinkIcon, Globe, TrendingUp, MapPin, Calendar, AlertTriangle, CheckCircle, XCircle, BarChart3, PieChart, Users, Clock, Star, ArrowUp, Shield, Zap, Eye, ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { AnimatedList } from "@/components/ui/animated-list";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { FooterSection } from "@/components/sections/footer-section";
import Link from "next/link";
import Image from "next/image";

// Sample data for backlink growth chart
const backlinkGrowthData = [120, 135, 142, 158, 175, 189, 205, 218, 235, 242, 258, 275, 289, 305, 318, 335, 352, 368, 385];
const backlinkCounterValues = [120, 158, 189, 235, 275, 335, 385];

// Domain authority distribution
const domainAuthorityData = [
  { range: "0-10", count: 45, percentage: 18, color: "bg-red-500" },
  { range: "11-20", count: 62, percentage: 25, color: "bg-orange-500" },
  { range: "21-40", count: 78, percentage: 31, color: "bg-yellow-500" },
  { range: "41-60", count: 42, percentage: 17, color: "bg-green-500" },
  { range: "61-80", count: 18, percentage: 7, color: "bg-blue-500" },
  { range: "81-100", count: 5, percentage: 2, color: "bg-purple-500" }
];

// Link types breakdown
const linkTypesData = [
  { type: "DoFollow", count: 187, percentage: 74, status: "good" },
  { type: "NoFollow", count: 63, percentage: 25, status: "neutral" },
  { type: "Sponsored", count: 3, percentage: 1, status: "neutral" }
];

// Backlink placement analysis
const placementData = [
  { placement: "Content Body", count: 142, percentage: 56, quality: "high" },
  { placement: "Navigation", count: 38, percentage: 15, quality: "high" },
  { placement: "Footer", count: 45, percentage: 18, quality: "medium" },
  { placement: "Sidebar", count: 18, percentage: 7, quality: "medium" },
  { placement: "Comments", count: 7, percentage: 3, quality: "low" },
  { placement: "Author Bio", count: 3, percentage: 1, quality: "medium" }
];

// Geographic distribution
const geoData = [
  { country: "United States", flag: "🇺🇸", count: 89, percentage: 35 },
  { country: "United Kingdom", flag: "🇬🇧", count: 42, percentage: 17 },
  { country: "Germany", flag: "🇩🇪", count: 35, percentage: 14 },
  { country: "Canada", flag: "🇨🇦", count: 28, percentage: 11 },
  { country: "Australia", flag: "🇦🇺", count: 22, percentage: 9 },
];

// Recent backlinks activity
const recentBacklinks = [
  { domain: "techcrunch.com", da: 94, type: "DoFollow", placement: "Content", firstSeen: "2024-01-15", status: "active" },
  { domain: "forbes.com", da: 92, type: "DoFollow", placement: "Content", firstSeen: "2024-01-12", status: "active" },
  { domain: "mashable.com", da: 87, type: "NoFollow", placement: "Navigation", firstSeen: "2024-01-10", status: "active" },
  { domain: "entrepreneur.com", da: 85, type: "DoFollow", placement: "Content", firstSeen: "2024-01-08", status: "active" },
  { domain: "businessinsider.com", da: 83, type: "DoFollow", placement: "Footer", firstSeen: "2024-01-05", status: "broken" }
];

// Broken backlinks
const brokenBacklinks = [
  { domain: "oldtech.com", da: 45, lastSeen: "2023-12-20", error: "404 Not Found", placement: "Content" },
  { domain: "blogsite.net", da: 32, lastSeen: "2023-12-18", error: "Domain Expired", placement: "Sidebar" },
  { domain: "newsportal.org", da: 28, lastSeen: "2023-12-15", error: "503 Service Unavailable", placement: "Footer" },
  { domain: "reviewsite.co", da: 38, lastSeen: "2023-12-12", error: "Redirect Loop", placement: "Content" }
];

// Competitor comparison
const competitorData = [
  { competitor: "competitor1.com", backlinks: 1250, domains: 420, da: 68 },
  { competitor: "competitor2.com", backlinks: 890, domains: 315, da: 62 },
  { competitor: "your-site.com", backlinks: 753, domains: 253, da: 58 },
  { competitor: "competitor3.com", backlinks: 645, domains: 198, da: 54 }
];

// Geographic Backlinks Animation Component
function GeographicBacklinksAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-card to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-card to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30">
        <Globe className="h-8 w-8 text-white" />
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
            <div className="flex items-center justify-center bg-blue-600 rounded-full p-2 size-12 text-lg">
              🇺🇸
            </div>
            <div className="flex items-center justify-center bg-red-600 rounded-full p-2 size-12 text-lg">
              🇬🇧
            </div>
            <div className="flex items-center justify-center bg-yellow-600 rounded-full p-2 size-12 text-lg">
              🇩🇪
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={50} radius={120} speed={0.7}>
            <div className="flex items-center justify-center bg-red-500 rounded-full p-2 size-12 text-lg">
              🇨🇦
            </div>
            <div className="flex items-center justify-center bg-green-600 rounded-full p-2 size-12 text-lg">
              🇦🇺
            </div>
            <div className="flex items-center justify-center bg-blue-500 rounded-full p-2 size-12 text-lg">
              🇫🇷
            </div>
            <div className="flex items-center justify-center bg-orange-600 rounded-full p-2 size-12 text-lg">
              🇪🇸
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={50}
            radius={160}
            reverse
            speed={0.5}
          >
            <div className="flex items-center justify-center bg-purple-600 rounded-full p-2 size-12 text-lg">
              🇮🇹
            </div>
            <div className="flex items-center justify-center bg-pink-600 rounded-full p-2 size-12 text-lg">
              🇯🇵
            </div>
            <div className="flex items-center justify-center bg-teal-600 rounded-full p-2 size-12 text-lg">
              🇧🇷
            </div>
            <div className="flex items-center justify-center bg-indigo-600 rounded-full p-2 size-12 text-lg">
              🇰🇷
            </div>
            <div className="flex items-center justify-center bg-emerald-600 rounded-full p-2 size-12 text-lg">
              🇮🇳
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

export default function BacklinkCheckerPage() {
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
              <LinkIcon className="h-4 w-4" />
              Advanced Backlink Analysis
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Comprehensive backlink intelligence and monitoring
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Analyze your backlink profile with advanced metrics including domain authority, link types, 
            geographic distribution, and competitor insights for strategic link building.
          </p>
          
          {/* Signup Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://app.finseo.ai/signup"
              className="bg-secondary text-white font-semibold text-sm h-12 px-8 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors"
            >
              Start Free Backlink Analysis
            </Link>
            <span className="text-sm text-muted-foreground">
              No credit card required • 7-day free trial
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: Backlink Growth & Domain Authority (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Track backlink growth and domain authority
            </h2>
            <p className="text-muted-foreground text-lg">
              Monitor your backlink acquisition over time and analyze the quality distribution based on domain authority scores.
            </p>
            
            
            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time backlink discovery and monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Domain authority analysis and scoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Historical backlink growth tracking</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Backlink Growth Trend</h3>
                <p className="text-sm text-muted-foreground">Monthly acquisition rate</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <ArrowUp className="h-4 w-4" />
                +12% Growth
              </div>
            </div>
            
            <div className="h-[392px] w-full relative rounded-lg border border-border overflow-hidden bg-black/5">
              <ThirdBentoAnimation 
                data={backlinkGrowthData} 
                toolTipValues={backlinkCounterValues} 
                color="#0eca7b"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Link Types & Quality Analysis (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Link Types Distribution</h3>
                <p className="text-sm text-muted-foreground">DoFollow vs NoFollow analysis</p>
              </div>
              <PieChart className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-4 overflow-hidden">
              {/* Link Types Breakdown */}
              <div className="space-y-3">
                {linkTypesData.map((link, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${
                        link.status === "good" ? "bg-green-500" :
                        link.status === "neutral" ? "bg-blue-500" :
                        "bg-orange-500"
                      }`}></div>
                      <span className="font-medium text-sm">{link.type}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{link.count}</div>
                      <div className="text-xs text-muted-foreground">{link.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Domain Authority Distribution */}
              <div className="mt-6">
                <h4 className="font-medium text-sm mb-3">Domain Authority Distribution</h4>
                <div className="space-y-2">
                  {domainAuthorityData.map((da, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-xs w-12">{da.range}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${da.color}`}
                          style={{width: `${da.percentage}%`}}
                        ></div>
                      </div>
                      <span className="text-xs w-8">{da.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Analyze link types and quality metrics
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive analysis of your backlink portfolio including DoFollow/NoFollow ratios and domain authority distribution.
            </p>
            
            {/* Quality Insights */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">74% DoFollow links for maximum SEO value</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">High-quality domains (DA 40+) represent 26% of portfolio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Spam score monitoring and toxic link detection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Link velocity and acquisition pattern analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Backlink Placement Analysis (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Backlink placement and context analysis
            </h2>
            <p className="text-muted-foreground text-lg">
              Understand where your backlinks are placed on referring pages and their contextual relevance for maximum SEO impact.
            </p>
            
            {/* Placement Quality */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Eye className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Content body placements for highest authority transfer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <LinkIcon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Navigation and footer link analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Search className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Contextual relevance and anchor text optimization</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Placement Distribution</h3>
                <p className="text-sm text-muted-foreground">Link location analysis</p>
              </div>
              <LinkIcon className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] space-y-3 overflow-hidden">
              {placementData.map((placement, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      placement.quality === "high" ? "bg-green-500" :
                      placement.quality === "medium" ? "bg-orange-500" :
                      "bg-red-500"
                    }`}>
                      <span className="text-white font-bold text-xs">{placement.count}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{placement.placement}</div>
                      <div className="text-xs text-muted-foreground capitalize">{placement.quality} quality</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{placement.percentage}%</div>
                    <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                      <div 
                        className={`h-1 rounded-full ${
                          placement.quality === "high" ? "bg-green-500" :
                          placement.quality === "medium" ? "bg-orange-500" :
                          "bg-red-500"
                        }`}
                        style={{width: `${placement.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Geographic Distribution (Right Content, Left Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Geographic Distribution</h3>
                <p className="text-sm text-muted-foreground">Backlinks by country</p>
              </div>
              <Globe className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] relative rounded-lg border border-border overflow-hidden bg-black/5">
              <GeographicBacklinksAnimation />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Global backlink distribution analysis
            </h2>
            <p className="text-muted-foreground text-lg">
              Understand the geographic spread of your backlinks for international SEO strategy and market penetration insights.
            </p>
            
            {/* Geographic Breakdown */}
            <div className="space-y-3">
              {geoData.slice(0, 6).map((country, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{country.flag}</span>
                    <span className="font-medium text-sm">{country.country}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{country.count}</div>
                    <div className="text-xs text-muted-foreground">{country.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Recent Activity & Broken Links (Left Content, Right Visualization) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 pl-4">
            <h2 className="text-3xl font-medium tracking-tight">
              Monitor recent activity and broken links
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with newly discovered backlinks and identify broken links that need immediate attention for link equity preservation.
            </p>
            
            {/* Monitoring Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Real-time backlink discovery notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Broken link detection and alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">First seen and last seen tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Link status monitoring and health checks</span>
              </div>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="h-[500px] bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Recent Backlink Activity</h3>
                <p className="text-sm text-muted-foreground">Latest discoveries and issues</p>
              </div>
              <Calendar className="h-5 w-5 text-secondary" />
            </div>
            
            <div className="h-[392px] flex items-center justify-center overflow-hidden">
              <div className="w-full max-h-full overflow-hidden">
                <AnimatedList className="w-full" delay={2000}>
                  {recentBacklinks.map((backlink, index) => (
                    <div key={index} className="w-full">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm truncate">{backlink.domain}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            backlink.status === "active" ? "bg-green-500" : "bg-red-500"
                          }`}></div>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                          DA {backlink.da}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>{backlink.type} • {backlink.placement}</span>
                        <span>{backlink.firstSeen}</span>
                      </div>
                      {backlink.status === "broken" && (
                        <div className="text-xs text-red-400">
                          ⚠️ Link broken - needs attention
                        </div>
                      )}
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
              alt="Backlink Checker CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Boost Your Rankings
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Link
                  href="https://app.finseo.ai/signup"
                  className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
                >
                  Start Backlink Analysis
                </Link>
                <span className="text-white text-sm">Comprehensive link intelligence</span>
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