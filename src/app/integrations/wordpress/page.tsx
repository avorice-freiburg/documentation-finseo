'use client';

import React from 'react';
import { Download, Copy, Settings, CheckCircle, ExternalLink, Play, ArrowRight, Zap, FileText, BarChart3, Image, Link as LinkIcon, Globe, Clock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FooterSection } from "@/components/sections/footer-section";

const steps = [
  {
    id: 1,
    title: "Install the WordPress Plugin",
    description: "Download and install the official Finseo AI Blog Writer plugin from WordPress",
    icon: <Download className="h-6 w-6 text-[#0eca7b]" />,
    details: [
      "Visit the WordPress plugin directory",
      "Search for 'Finseo AI Blog Writer'",
      "Click 'Install Now' and activate the plugin",
      "Compatible with WordPress 5.0+ and PHP 7.4+"
    ],
    action: "Install Plugin",
    actionUrl: "https://wordpress.org/plugins/finseo-ai-blog-writer/"
  },
  {
    id: 2,
    title: "Get Your API Credentials",
    description: "Copy your API key and domain from your Finseo dashboard to connect the plugin",
    icon: <Copy className="h-6 w-6 text-[#0eca7b]" />,
    details: [
      "Log into your Finseo dashboard",
      "Navigate to Settings > Integrations",
      "Copy your API key and domain URL",
      "Keep these credentials secure and private"
    ],
    action: "Get API Key",
    actionUrl: "https://app.finseo.ai/integrations"
  },
  {
    id: 3,
    title: "Configure & Start Creating",
    description: "Paste your credentials into the WordPress plugin settings and start generating",
    icon: <Settings className="h-6 w-6 text-[#0eca7b]" />,
    details: [
      "Go to Settings > Finseo AI Writer in WordPress",
      "Paste your API key and domain",
      "Test the connection",
      "Start creating AI-powered content!"
    ],
    action: "Configure Plugin",
    actionUrl: "#configuration"
  }
];

const features = [
  {
    icon: <FileText className="h-5 w-5" />,
    title: "AI-Powered Content Generation",
    description: "Create engaging blog posts automatically using advanced AI technology"
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "SEO Optimization",
    description: "Every article is optimized for search engines with proper meta descriptions and titles"
  },
  {
    icon: <Image className="h-5 w-5" />,
    title: "Automated Image Generation",
    description: "AI-generated images to complement your content with proper SEO optimization"
  },
  {
    icon: <LinkIcon className="h-5 w-5" />,
    title: "Smart Internal Linking",
    description: "Automatically add relevant internal links to your existing content"
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Chart Generation",
    description: "Create data visualizations with a single click to make content more engaging"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Multi-language Support",
    description: "Generate content in multiple languages including English, German, and Spanish"
  }
];

const benefits = [
  {
    icon: <Clock className="h-5 w-5 text-green-600" />,
    title: "Save 80% Time",
    description: "Reduce content creation time dramatically"
  },
  {
    icon: <Zap className="h-5 w-5 text-blue-600" />,
    title: "Eliminate Writer's Block",
    description: "Never run out of content ideas again"
  },
  {
    icon: <Shield className="h-5 w-5 text-purple-600" />,
    title: "Maintain Brand Voice",
    description: "Consistent tone and style across all content"
  }
];

export default function WordPressIntegrationPage() {
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
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.469 6.825c.84 1.537.84 3.413.84 7.166 0 3.752 0 5.629-.84 7.166a6.8 6.8 0 0 1-2.963 2.963c-1.537.84-3.414.84-7.166.84s-5.629 0-7.166-.84a6.8 6.8 0 0 1-2.963-2.963c-.84-1.537-.84-3.414-.84-7.166 0-3.753 0-5.63.84-7.166A6.8 6.8 0 0 1 4.174 3.86C5.71 3.02 7.588 3.02 11.34 3.02s5.629 0 7.166.84a6.8 6.8 0 0 1 2.963 2.965ZM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
              </svg>
              WordPress Integration
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            Finseo AI Blog Writer<br />
            <span className="text-[#0eca7b]">WordPress Plugin</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Transform your WordPress site into an AI-powered content creation machine. Generate high-quality, 
            SEO-optimized blog posts with just a few clicks, all while maintaining your unique brand voice.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-secondary text-white font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://wordpress.org/plugins/finseo-ai-blog-writer/" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Install WordPress Plugin
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Get Free API Key
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>5/5 Stars on WordPress.org</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>WordPress 5.0+ Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Free to Install</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Setup Process */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Started in 3 Simple Steps</h2>
          <p className="text-muted-foreground text-lg">
            Set up the Finseo WordPress plugin in under 5 minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#0eca7b] to-transparent z-0" 
                     style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0eca7b]/10 rounded-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[#0eca7b] font-medium mb-1">Step {step.id}</div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-[#0eca7b] text-white hover:bg-[#0eca7b]/90"
                  asChild
                >
                  <Link href={step.actionUrl} target={step.id === 1 ? "_blank" : undefined}>
                    {step.action}
                    {step.id === 1 && <ExternalLink className="ml-2 h-4 w-4" />}
                    {step.id !== 1 && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plugin Features */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features Built for WordPress</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to create engaging, SEO-optimized content directly in WordPress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#0eca7b]/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 