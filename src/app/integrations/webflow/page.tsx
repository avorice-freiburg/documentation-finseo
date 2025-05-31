'use client';

import React from 'react';
import { Key, Copy, Settings, CheckCircle, ExternalLink, ArrowRight, Zap, FileText, BarChart3, Image, Link as LinkIcon, Globe, Clock, Shield, Code, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FooterSection } from "@/components/sections/footer-section";

const steps = [
  {
    id: 1,
    title: "Generate Webflow API Token",
    description: "Create an API token in your Webflow dashboard with full permissions",
    icon: <Key className="h-6 w-6 text-[#0eca7b]" />,
    details: [
      "Go to your Webflow Account Settings",
      "Navigate to Integrations > API Access",
      "Click 'Generate new token'",
      "Set all permissions to 'Read and write'",
      "Copy your API token securely"
    ],
    action: "Generate API Token",
    actionUrl: "https://webflow.com/dashboard/account/integrations"
  },
  {
    id: 2,
    title: "Get Your Site ID",
    description: "Copy your Webflow site ID from your site settings or URL",
    icon: <Copy className="h-6 w-6 text-[#0eca7b]" />,
    details: [
      "Open your Webflow site dashboard",
      "Go to Site Settings > General",
      "Copy the Site ID from the settings",
      "Alternatively, find it in your site URL",
      "Keep this ID for the next step"
    ],
    action: "Get Site ID",
    actionUrl: "https://webflow.com/dashboard"
  },
  {
    id: 3,
    title: "Connect to Finseo",
    description: "Paste your API token and Site ID into Finseo to establish the connection",
    icon: <Settings className="h-6 w-6 text-[#0eca7b]" />,
    details: [
      "Log into your Finseo dashboard",
      "Navigate to Settings > Integrations",
      "Select Webflow integration",
      "Paste your API token and Site ID",
      "Test connection and start creating!"
    ],
    action: "Connect to Finseo",
    actionUrl: "https://app.finseo.ai/integrations"
  }
];

const permissions = [
  { name: "Assets", description: "View and manage assets and folders", access: "Read and write" },
  { name: "Authorized user", description: "View information about the authorized user", access: "Read-only" },
  { name: "CMS", description: "View and manage CMS Collections and Items", access: "Read and write" },
  { name: "Comments", description: "View and manage comments", access: "Read and write" },
  { name: "Components", description: "View and manage site components", access: "Read and write" },
  { name: "Ecommerce", description: "View and manage an Ecommerce store", access: "Read and write" },
  { name: "Forms", description: "View and manage site forms and submissions", access: "Read and write" },
  { name: "Pages", description: "View and manage page data", access: "Read and write" },
  { name: "Sites", description: "View and manage site data and publishing", access: "Read and write" },
  { name: "Site activity", description: "View historical site activity data", access: "Read-only" },
  { name: "Site config", description: "View and manage site configuration", access: "Read and write" },
  { name: "User Accounts", description: "View and manage site users and access groups", access: "Read and write" }
];

const features = [
  {
    icon: <FileText className="h-5 w-5" />,
    title: "CMS Content Management",
    description: "Automatically publish AI-generated content directly to your Webflow CMS"
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "SEO Optimization",
    description: "Optimize meta tags, descriptions, and content structure for better search rankings"
  },
  {
    icon: <Image className="h-5 w-5" />,
    title: "Asset Management",
    description: "Upload and manage AI-generated images directly to your Webflow assets"
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Dynamic Collections",
    description: "Populate your CMS collections with AI-generated content automatically"
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Custom Fields",
    description: "Map AI content to your custom CMS fields and maintain your site structure"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Multi-site Support",
    description: "Connect multiple Webflow sites to a single Finseo account"
  }
];

const benefits = [
  {
    icon: <Clock className="h-5 w-5 text-green-600" />,
    title: "Instant Publishing",
    description: "Publish content directly to your live site"
  },
  {
    icon: <Zap className="h-5 w-5 text-blue-600" />,
    title: "No Manual Upload",
    description: "Skip the copy-paste workflow entirely"
  },
  {
    icon: <Shield className="h-5 w-5 text-purple-600" />,
    title: "Secure API Connection",
    description: "Enterprise-grade security for your content"
  }
];

export default function WebflowIntegrationPage() {
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
                <path d="M12.5 2C13.3 2 14 2.7 14 3.5V11H21.5C22.3 11 23 11.7 23 12.5S22.3 14 21.5 14H14V21.5C14 22.3 13.3 23 12.5 23S11 22.3 11 21.5V14H3.5C2.7 14 2 13.3 2 12.5S2.7 11 3.5 11H11V3.5C11 2.7 11.7 2 12.5 2Z"/>
              </svg>
              Webflow Integration
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            Finseo AI Content<br />
            <span className="text-[#0eca7b]">Webflow Integration</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Seamlessly connect Finseo with your Webflow site to automatically publish AI-generated content 
            directly to your CMS. No more manual copying and pasting - just pure automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-secondary text-white font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://webflow.com/dashboard/account/integrations" target="_blank">
                <Key className="mr-2 h-4 w-4" />
                Create API Token
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Get Started with Finseo
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Direct CMS Publishing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Secure API Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Multi-site Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Setup Process */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Connect Webflow in 3 Simple Steps</h2>
          <p className="text-muted-foreground text-lg">
            Set up the Webflow integration in under 5 minutes
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
                  <Link href={step.actionUrl} target={step.id !== 3 ? "_blank" : undefined}>
                    {step.action}
                    {step.id !== 3 && <ExternalLink className="ml-2 h-4 w-4" />}
                    {step.id === 3 && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Permissions Guide */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Required API Permissions</h2>
          <p className="text-muted-foreground text-lg">
            Set these permissions when generating your Webflow API token
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">API Token Configuration</h3>
            <p className="text-muted-foreground">
              When creating your API token, ensure you set the following permissions for full Finseo functionality:
            </p>
          </div>

          <div className="grid gap-3">
            {permissions.map((permission, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{permission.name}</h4>
                  <p className="text-xs text-muted-foreground">{permission.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    permission.access === 'Read and write' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {permission.access}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-1">Important Note</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  API tokens expire after 365 consecutive days of inactivity. Make sure to use your integration 
                  regularly or regenerate tokens as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Webflow Integration Features</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to automate your Webflow content workflow
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

      {/* Benefits Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-[#0eca7b]/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Webflow Users Choose Finseo</h2>
            <p className="text-muted-foreground text-lg">
              Streamline your content workflow with direct Webflow integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-secondary text-white font-semibold px-8 hover:bg-secondary/90"
              asChild
            >
              <Link href="https://app.finseo.ai/signup">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      <FooterSection />
    </main>
  );
} 