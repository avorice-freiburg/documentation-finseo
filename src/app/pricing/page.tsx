"use client";

import { useState } from "react";
import { Check, Bot, ArrowRight, Rocket, Briefcase, LineChart, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { FooterSection } from "@/components/sections/footer-section";

// Plan feature structure
interface Feature {
  name: string;
  value?: string;
  available: boolean;
  highlight?: boolean;
  primary?: boolean;
}

// Plan tier structure
interface Tier {
  name: string;
  id: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  suitableFor: string;
  popular?: boolean;
  features: Feature[];
  buttonColor: string;
}

// Format number with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Plan tiers
const tiers: Tier[] = [
  {
    name: "Creator",
    id: "tier-creator",
    monthlyPrice: "29",
    yearlyPrice: "19",
    description: "Best for individual creators",
    suitableFor: "Perfect for bloggers, freelancers, and small websites with up to 50 pages",
    buttonColor: "bg-accent text-primary",
    features: [
      { 
        name: "Credits per Month", 
        value: "75,000",
        available: true,
        highlight: true,
        primary: true
      },
      { 
        name: "Articles", 
        value: "20",
        available: true,
        highlight: true 
      },
      { 
        name: "Brand Voices", 
        value: "3",
        available: true,
        highlight: true 
      },
      { 
        name: "Global Summaries", 
        value: "25",
        available: true,
        highlight: true 
      },
      { 
        name: "Tracked Keywords", 
        value: "50",
        available: true,
        highlight: true 
      },
      { 
        name: "Site Audit Pages", 
        value: "100",
        available: true,
        highlight: true 
      },
      { name: "Whitelabel Reports", available: false, highlight: true },
      { name: "Global SEO Map", available: true },
      { name: "Daily tracking updates", available: true },
      { name: "Content Generator", available: true },
      { name: "SEO On-Page Check", available: true },
      { name: "Keyword Research", available: true },
      { name: "Chart Generator (Basic)", available: true },
      { name: "Chart Generator (Embed)", available: true },
      { name: "WordPress Integration", available: false },
      { name: "Webflow CMS Publishing", available: false },
      { name: "Priority Support", available: false },
    ],
  },
  {
    name: "Professional",
    id: "tier-professional",
    monthlyPrice: "49",
    yearlyPrice: "39",
    description: "Best for growing businesses",
    suitableFor: "Ideal for small businesses, agencies, and websites with up to 150 pages",
    popular: true,
    buttonColor: "bg-secondary text-white",
    features: [
      { 
        name: "Credits per Month", 
        value: "250,000",
        available: true,
        highlight: true,
        primary: true
      },
      { 
        name: "Articles", 
        value: "75",
        available: true,
        highlight: true 
      },
      { 
        name: "Brand Voices", 
        value: "5",
        available: true,
        highlight: true 
      },
      { 
        name: "Global Summaries", 
        value: "50",
        available: true,
        highlight: true 
      },
      { 
        name: "Tracked Keywords", 
        value: "250",
        available: true,
        highlight: true 
      },
      { 
        name: "Site Audit Pages", 
        value: "250",
        available: true,
        highlight: true 
      },
      { name: "Whitelabel Reports", available: true, highlight: true },
      { name: "Global SEO Map", available: true },
      { name: "Daily tracking updates", available: true },
      { name: "Content Generator", available: true },
      { name: "SEO On-Page Check", available: true },
      { name: "Keyword Research", available: true },
      { name: "Chart Generator (Basic)", available: true },
      { name: "Chart Generator (Embed)", available: true },
      { name: "WordPress Integration", available: true },
      { name: "Webflow CMS Publishing", available: true },
      { name: "Priority Support", available: false },
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    monthlyPrice: "99",
    yearlyPrice: "79",
    description: "Best for large organizations",
    suitableFor: "Perfect for larger businesses, e-commerce sites, and websites with up to 250 pages",
    buttonColor: "bg-primary text-primary-foreground",
    features: [
      { 
        name: "Credits per Month", 
        value: "1,000,000",
        available: true,
        highlight: true,
        primary: true
      },
      { 
        name: "Articles", 
        value: "200",
        available: true,
        highlight: true 
      },
      { 
        name: "Brand Voices", 
        value: "25",
        available: true,
        highlight: true 
      },
      { 
        name: "Global Summaries", 
        value: "100",
        available: true,
        highlight: true 
      },
      { 
        name: "Tracked Keywords", 
        value: "500",
        available: true,
        highlight: true 
      },
      { 
        name: "Site Audit Pages", 
        value: "1000",
        available: true,
        highlight: true 
      },
      { name: "Whitelabel Reports", available: true, highlight: true },
      { name: "Global SEO Map", available: true },
      { name: "Daily tracking updates", available: true },
      { name: "Content Generator", available: true },
      { name: "SEO On-Page Check", available: true },
      { name: "Keyword Research", available: true },
      { name: "Chart Generator (Basic)", available: true },
      { name: "Chart Generator (Embed)", available: true },
      { name: "WordPress Integration", available: true },
      { name: "Webflow CMS Publishing", available: true },
      { name: "Priority Support", available: true },
    ],
  },
];

interface TabsProps {
  activeTab: "yearly" | "monthly";
  setActiveTab: (tab: "yearly" | "monthly") => void;
  className?: string;
}

function PricingTabs({ activeTab, setActiveTab, className }: TabsProps) {
  return (
    <div
      className={cn(
        "relative flex w-fit items-center rounded-full border p-0.5 backdrop-blur-sm cursor-pointer h-9 flex-row bg-muted",
        className,
      )}
    >
      {["monthly", "yearly"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as "yearly" | "monthly")}
          className={cn(
            "relative z-[1] px-2 h-8 flex items-center justify-center cursor-pointer",
            {
              "z-0": activeTab === tab,
            },
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 rounded-full bg-white dark:bg-[#3F3F46] shadow-md border border-border"
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 25,
                velocity: 2,
              }}
            />
          )}
          <span
            className={cn(
              "relative block text-sm font-medium duration-200 shrink-0",
              activeTab === tab ? "text-primary" : "text-muted-foreground",
            )}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab === "yearly" && (
              <span className="ml-2 text-xs font-semibold text-secondary bg-secondary/15 py-0.5 w-[calc(100%+1rem)] px-1 rounded-full">
                -20%
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function PricingPage() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");
  
  const handleSubscription = (planTier: string) => {
    // Would normally connect to your payment gateway
    alert(`Starting subscription for ${planTier} plan`);
  };
  
  // Price display with animation
  const PriceDisplay = ({ tier }: { tier: Tier }) => {
    const price = billingInterval === "yearly" ? tier.yearlyPrice : tier.monthlyPrice;

    return (
      <motion.span
        key={price}
        className="text-4xl font-semibold"
        initial={{
          opacity: 0,
          x: billingInterval === "yearly" ? -10 : 10,
          filter: "blur(5px)",
        }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        ${price}
      </motion.span>
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <section className="w-full flex flex-col items-center justify-center gap-10 py-16">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Choose the plan that scales with your search optimization needs
          </p>
          
          <div className="mt-8 relative w-full flex justify-center">
            <PricingTabs
              activeTab={billingInterval}
              setActiveTab={setBillingInterval}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-6 mt-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "rounded-xl grid grid-rows-[auto_auto_1fr] relative h-fit",
                tier.popular
                  ? "md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-accent"
                  : "bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border",
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-b from-secondary/50 from-[1.92%] to-secondary to-[100%] text-white h-6 inline-flex w-fit items-center justify-center px-2 rounded-md text-sm shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex flex-col gap-4 p-4">
                <p className="text-sm">{tier.name}</p>
                <div className="flex items-baseline mt-2">
                  <PriceDisplay tier={tier} />
                  <span className="ml-2">
                    /{billingInterval === "yearly" ? "year" : "month"}
                  </span>
                </div>
                <p className="text-sm mt-2">{tier.description}</p>
                <p className="text-xs text-muted-foreground">{tier.suitableFor}</p>
              </div>

              <div className="flex flex-col gap-2 p-4">
                <a
                  href="https://app.finseo.ai/signup"
                  className={`h-10 w-full flex items-center justify-center text-sm font-normal tracking-wide rounded-md px-4 cursor-pointer transition-all ease-out active:scale-95 ${tier.buttonColor} shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]`}
                >
                  Subscribe Now
                </a>
              </div>
              <hr className="border-border dark:border-white/20" />
              <div className="p-4">
                {/* Primary highlighted feature (Credits) */}
                {tier.features
                  .filter(feature => feature.primary && feature.available)
                  .map((feature) => (
                    <div key={feature.name} className="flex items-center justify-between bg-accent p-3 rounded-lg mb-4">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Check className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-xs font-medium">
                          {feature.name}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-secondary">
                        {feature.value}
                      </span>
                    </div>
                  ))}
                
                {/* Highlighted features with values */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {tier.features
                    .filter(feature => feature.highlight && !feature.primary)
                    .map((feature) => (
                      <div key={feature.name} className="flex flex-col p-2 rounded-lg border border-border bg-background/50">
                        <div className="flex items-center mb-1">
                          <div className="mr-1 h-4 w-4 rounded-full bg-secondary/10 flex items-center justify-center">
                            {feature.available ? (
                              <Check className="h-2 w-2 text-secondary" />
                            ) : (
                              <div className="h-2 w-2 bg-muted-foreground/40 rounded-full" />
                            )}
                          </div>
                          <span className="text-xs font-medium text-primary">
                            {feature.name}
                          </span>
                        </div>
                        {feature.value && (
                          <span className="text-sm font-bold text-primary ml-5">
                            {feature.value}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
                
                {/* Other features */}
                <div className="space-y-2">
                  {tier.features
                    .filter(feature => !feature.highlight)
                    .map((feature) => (
                      <div key={feature.name} className="flex items-center group">
                        <div className="mr-2 h-4 w-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          {feature.available ? (
                            <Check className="h-2 w-2 text-secondary" />
                          ) : (
                            <div className="h-2 w-2 bg-muted-foreground/40 rounded-full" />
                          )}
                        </div>
                        <span className={cn(
                          "text-xs",
                          feature.available ? "text-primary" : "text-muted-foreground"
                        )}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* AI Rank Tracker section */}
        <div className="w-full max-w-6xl mx-auto px-6 mt-8">
          <div className="relative overflow-hidden rounded-xl bg-white p-8 md:p-10 border border-secondary/30 shadow-lg">
            <div className="absolute inset-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Content */}
                <div className="md:w-1/2">
                  <div className="inline-block bg-secondary/20 text-primary text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                    ADD-ON
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">AI Rank Tracker</h2>
                  <p className="text-muted-foreground mb-6">
                    Track your website's visibility in AI responses from ChatGPT, Claude, Perplexity and other AI platforms. Get insights into your AI rankings and improve your presence.
                  </p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="mr-3 h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-sm text-primary">Full tracking analytics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-3 h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-sm text-primary"><span className="font-medium">Daily tracking updates</span></span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-3 h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-sm text-primary">Support for all popular LLMs</span>
                    </div>
                  </div>
                  
                  {/* Supported LLMs */}
                  <div className="mb-6">
                    <h3 className="text-muted-foreground text-sm mb-3">Supported AI Models:</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg">
                        <img src="/chatgpt.png" alt="ChatGPT" className="h-5 w-5" />
                        <span className="text-sm text-primary">ChatGPT</span>
                      </div>
                      <div className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg">
                        <img src="/claude.png" alt="Claude" className="h-5 w-5" />
                        <span className="text-sm text-primary">Claude</span>
                      </div>
                      <div className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg">
                        <img src="/perplexity.png" alt="Perplexity" className="h-5 w-5" />
                        <span className="text-sm text-primary">Perplexity</span>
                      </div>
                      <div className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg">
                        <img src="/gemini.png" alt="Gemini" className="h-5 w-5" />
                        <span className="text-sm text-primary">Gemini</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pricing Cards */}
                <div className="md:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Rocket className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="font-medium text-primary">Starter</h3>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold text-primary">$14.99</span>
                          <span className="text-sm text-muted-foreground ml-1">/month</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">25 tracking prompts</p>
                      </div>
                      <a 
                        href="https://app.finseo.ai/signup"
                        className="w-full bg-[#0A2F2A] hover:bg-secondary hover:text-[#0A2F2A] text-white h-9 rounded-md transition-colors flex items-center justify-center"
                      >
                        Get started
                      </a>
                    </div>
                    
                    <div className="bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all relative">
                      <div className="absolute -top-2 right-2 bg-secondary text-white text-xs px-2 py-0.5 rounded-full">POPULAR</div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="font-medium text-primary">Professional</h3>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold text-primary">$39.99</span>
                          <span className="text-sm text-muted-foreground ml-1">/month</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">100 tracking prompts</p>
                      </div>
                      <a 
                        href="https://app.finseo.ai/signup"
                        className="w-full bg-[#0A2F2A] hover:bg-secondary hover:text-[#0A2F2A] text-white h-9 rounded-md transition-colors flex items-center justify-center"
                      >
                        Get started
                      </a>
                    </div>
                    
                    <div className="bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <LineChart className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="font-medium text-primary">Growth</h3>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold text-primary">$89.99</span>
                          <span className="text-sm text-muted-foreground ml-1">/month</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">250 tracking prompts</p>
                      </div>
                      <a 
                        href="https://app.finseo.ai/signup"
                        className="w-full bg-[#0A2F2A] hover:bg-secondary hover:text-[#0A2F2A] text-white h-9 rounded-md transition-colors flex items-center justify-center"
                      >
                        Get started
                      </a>
                    </div>
                    
                    <div className="bg-background rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Building className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="font-medium text-primary">Enterprise</h3>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold text-primary">$299.99</span>
                          <span className="text-sm text-muted-foreground ml-1">/month</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">1,000 tracking prompts</p>
                      </div>
                      <a 
                        href="https://app.finseo.ai/signup"
                        className="w-full bg-[#0A2F2A] hover:bg-secondary hover:text-[#0A2F2A] text-white h-9 rounded-md transition-colors flex items-center justify-center"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enterprise section */}
        <div className="w-full max-w-6xl mx-auto px-6 mt-8">
          <div className="p-8 rounded-xl bg-[#0A2F2A] text-white">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">Enterprise</h3>
                <p className="text-white/80 mb-4">
                  Custom solution for large organizations with advanced needs
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-secondary" />
                    <span>Unlimited credits</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-secondary" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-secondary" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-secondary" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-3xl font-medium mb-2">Custom pricing</div>
                <a
                  href="https://app.finseo.ai/signup"
                  className="h-10 px-4 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </main>
  );
} 