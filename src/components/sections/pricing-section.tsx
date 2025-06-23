"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { 
  Check, 
  X, 
  Search, 
  FileText, 
  Target, 
  LineChart, 
  TrendingUp, 
  Bot, 
  Shield, 
  BarChart3, 
  Image, 
  MapPin, 
  Link as LinkIcon 
} from "lucide-react";
import React from "react";

// Define feature structure with categories
interface Feature {
  name: string;
  icon: any;
  values: (string | boolean)[];
  subtitle?: string;
}

interface FeatureCategory {
  name: string;
  features: Feature[];
}

const featureCategories: FeatureCategory[] = [
  {
    name: "SEO & Content Operations",
    features: [
      {
        name: "Keyword Research",
        icon: Search,
        values: ["150 searches", "750 searches", "2,000 searches", "Unlimited searches"]
      },
      {
        name: "Article Generator", 
        icon: FileText,
        values: ["5 articles", "20 articles", "50 articles", "Unlimited articles"]
      },
      {
        name: "Site Audit",
        icon: Target,
        values: ["10 audits", "50 audits", "100 audits", "Unlimited audits"]
      },
      {
        name: "Global Summary",
        icon: LineChart,
        values: ["4 summaries", "20 summaries", "50 summaries", "Unlimited summaries"]
      },
      {
        name: "Ranking Keywords",
        icon: TrendingUp,
        values: ["50 runs", "200 runs", "500 runs", "Unlimited runs"]
      }
    ]
  },
  {
    name: "AI SEO Features", 
    features: [
      {
        name: "Rank Tracker",
        icon: Bot,
        values: ["20 keywords", "150 keywords", "300 keywords", "Unlimited keywords"]
      },
      {
        name: "Competitor Analysis",
        icon: Target,
        values: [true, true, true, true]
      },
      {
        name: "AI SEO Audit",
        icon: Shield,
        values: ["40 audits", "100 audits", "Custom audits", "Unlimited audits"]
      },
      {
        name: "Prompt Research",
        icon: Search,
        values: ["50 researches", "200 researches", "500 researches", "Unlimited researches"]
      }
    ]
  },
  {
    name: "Content Creation",
    features: [
      {
        name: "Chart Generator",
        icon: BarChart3,
        values: ["50 charts", "200 charts", "300 charts", "Unlimited charts"]
      },
      {
        name: "Image Generator",
        icon: Image,
        values: ["20 images", "100 images", "250 images", "Unlimited images"]
      }
    ]
  },
  {
    name: "Local SEO & Backlinks",
    features: [
      {
        name: "Local SEO Maps",
        icon: MapPin,
        values: ["200 points", "1,000 points", "5,000 points", "Unlimited points"]
      },
      {
        name: "Backlink Explorer",
        icon: LinkIcon,
        values: ["25 searches", "200 searches", "500 searches", "Unlimited searches"]
      },
      {
        name: "Backlink Summary",
        icon: FileText,
        values: ["25 summaries", "200 summaries", "500 summaries", "Unlimited summaries"]
      },
      {
        name: "Keyword Overlap",
        icon: Target,
        values: ["25 analyses", "100 analyses", "250 analyses", "Unlimited analyses"]
      }
    ]
  },
  {
    name: "Premium Features",
    features: [
      {
        name: "Whitelabel Reports",
        subtitle: "Professional branding",
        icon: Shield,
        values: [false, true, true, true]
      },
      {
        name: "Priority Support",
        subtitle: "24/7 premium support",
        icon: Bot,
        values: [false, false, true, true]
      },
      {
        name: "Article Integration",
        subtitle: "Webflow & WordPress publishing",
        icon: FileText,
        values: [false, true, true, true]
      }
    ]
  }
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {siteConfig.pricing.title}
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          {siteConfig.pricing.description}
        </p>
      </SectionHeader>

      {/* Comprehensive Feature Comparison Table */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="bg-background rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="border-b border-border">
                  <th className="w-1/5 px-6 py-4 text-left font-semibold text-sm text-foreground bg-muted/50">
                    Features
                  </th>
                  {siteConfig.pricing.pricingItems.map((tier, index) => (
                    <th key={tier.name} className={cn(
                      "w-1/5 px-4 py-4 text-center relative",
                      tier.isPopular ? "bg-gradient-to-b from-secondary/5 to-secondary/10" : "bg-background",
                      index % 2 === 1 && "bg-muted/30"
                    )}>
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <span className="font-bold text-lg text-foreground">{tier.name}</span>
                        </div>
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-bold text-foreground">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-sm text-muted-foreground ml-1">/{tier.period}</span>
                          )}
                        </div>
                        <Link
                          href={tier.href}
                          className={cn(
                            "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center",
                            tier.isPopular
                              ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          {tier.buttonText}
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Feature Categories */}
              <tbody>
                {featureCategories.map((category, categoryIndex) => (
                  <React.Fragment key={category.name}>
                                         {/* Category Header */}
                     <tr className="bg-muted/50">
                       <td colSpan={5} className="px-6 py-3 font-medium text-foreground text-left text-sm border-b border-border">
                         <div className="flex items-center gap-2">
                           <div className="w-1 h-4 bg-secondary rounded-full"></div>
                           {category.name}
                         </div>
                       </td>
                     </tr>

                                         {/* Category Features */}
                     {category.features.map((feature, featureIndex) => (
                       <tr key={feature.name} className={cn(
                         "hover:bg-muted/30 transition-colors border-b border-border/50",
                         featureIndex === category.features.length - 1 && categoryIndex !== featureCategories.length - 1 && "border-b-2 border-border"
                       )}>
                         <td className="px-6 py-3">
                           <div className="flex flex-col">
                             <div className="flex items-center gap-2">
                               <feature.icon className="h-4 w-4 text-secondary" />
                               <span className="text-foreground font-medium text-sm">{feature.name}</span>
                             </div>
                             {feature.subtitle && (
                               <span className="text-xs text-muted-foreground ml-6">{feature.subtitle}</span>
                             )}
                           </div>
                         </td>
                         {feature.values.map((value, tierIndex) => (
                           <td key={tierIndex} className={cn(
                             "px-4 py-3 text-center",
                             tierIndex % 2 === 1 && "bg-muted/30"
                           )}>
                             {typeof value === 'boolean' ? (
                               <div className="flex items-center justify-center">
                                 {value ? (
                                   <Check className="h-4 w-4 text-green-600" />
                                 ) : (
                                   <X className="h-4 w-4 text-destructive" />
                                 )}
                               </div>
                             ) : (
                               <div className="flex flex-col items-center">
                                 <span className="text-lg font-semibold text-foreground">
                                   {value.split(' ')[0]}
                                 </span>
                                 {value.split(' ').slice(1).length > 0 && (
                                   <span className="text-xs text-muted-foreground">
                                     {value.split(' ').slice(1).join(' ')}
                                   </span>
                                 )}
                               </div>
                             )}
                           </td>
                         ))}
                       </tr>
                     ))}
                  </React.Fragment>
                ))}

                                 {/* Final CTA Row */}
                 <tr className="bg-gradient-to-r from-muted/50 to-background border-t-2 border-secondary/20">
                   <td className="px-6 py-4 font-medium text-foreground text-sm">
                     Ready to get started?
                   </td>
                   {siteConfig.pricing.pricingItems.map((tier, index) => (
                     <td key={tier.name} className={cn(
                       "px-4 py-4 text-center",
                       index % 2 === 1 && "bg-muted/30"
                     )}>
                       <Link
                         href={tier.href}
                         className={cn(
                           "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center",
                           tier.isPopular
                             ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                             : "bg-primary text-primary-foreground hover:bg-primary/90"
                         )}
                       >
                         {tier.buttonText}
                       </Link>
                     </td>
                   ))}
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
