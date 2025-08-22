"use client";

import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  Check, 
  X, 
  Target, 
  Users, 
  Bot, 
  Briefcase, 
  FileText, 
  Shield, 
  Zap,
  User,
  Building,
  Rocket,
  ArrowRight,
  Clock,
  Sparkles,
  Search,
  BarChart3,
  TrendingUp,
  HelpCircle,
  Calendar
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define feature structure
interface Feature {
  name: string;
  icon: any;
  value?: string;
  available: boolean;
  highlight?: boolean;
  primary?: boolean;
}

// German pricing structure matching the original
const pricingPlans = [
  {
    id: "creator",
    name: "Creator",
    monthlyPrice: "€99",
    yearlyPrice: "€79",
    period: "Monat",
    description: "Perfekt für Freelancer und kleine Unternehmen",
    suitableFor: "Ideal für Blogger, Freelancer und kleine Websites",
    href: "https://app.finseo.ai/signup",
    buttonText: "Jetzt starten",
    isPopular: false,
    actionType: 'checkout',
    features: [
      { 
        name: 'Websites', 
        icon: Target,
        value: '1',
        available: true,
        highlight: true,
        primary: true
      },
      { 
        name: 'Team-Mitglieder', 
        icon: Users,
        available: false,
        highlight: true 
      },
      { 
        name: 'KI-Such-Prompts', 
        icon: Bot,
        value: '25',
        available: true,
        highlight: true 
      },
      { 
        name: 'Konkurrenten KI-Rankings', 
        icon: Briefcase,
        available: true,
        highlight: true
      },
      { name: 'KI-Modelle', icon: Bot, available: true },
      { name: 'Updates', icon: Clock, value: 'Täglich', available: true },
      { name: 'KI-Recherche', icon: Sparkles, available: true },
      { name: 'KI-SEO-Audit', icon: Search, available: true },
      { name: 'Technische Analyse', icon: BarChart3, available: true },
      { name: 'Strukturierte Daten Generator', icon: TrendingUp, available: false },
      { name: 'Customer Success Manager', icon: User, available: false },
      { name: 'Kickoff Workshop', icon: Zap, available: false },
    ]
  },
  {
    id: "business",
    name: "Business", 
    monthlyPrice: "€299",
    yearlyPrice: "€239",
    period: "Monat",
    description: "Optimal für wachsende Unternehmen",
    suitableFor: "Perfekt für kleine Unternehmen, Agenturen und wachsende Websites",
    href: "https://app.finseo.ai/signup",
    buttonText: "Jetzt starten",
    isPopular: true,
    actionType: 'checkout',
    features: [
      { 
        name: 'Websites', 
        icon: Target,
        value: '1',
        available: true,
        highlight: true,
        primary: true
      },
      { 
        name: 'Team-Mitglieder', 
        icon: Users,
        value: '3',
        available: true,
        highlight: true 
      },
      { 
        name: 'KI-Such-Prompts', 
        icon: Bot,
        value: '150',
        available: true,
        highlight: true 
      },
      { 
        name: 'Konkurrenten KI-Rankings', 
        icon: Briefcase,
        available: true,
        highlight: true
      },
      { name: 'KI-Modelle', icon: Bot, available: true },
      { name: 'Updates', icon: Clock, value: 'Täglich', available: true },
      { name: 'KI-Recherche', icon: Sparkles, available: true },
      { name: 'KI-SEO-Audit', icon: Search, available: true },
      { name: 'Technische Analyse', icon: BarChart3, available: true },
      { name: 'Strukturierte Daten Generator', icon: TrendingUp, available: true },
      { name: 'Customer Success Manager', icon: User, available: false },
      { name: 'Kickoff Workshop', icon: Zap, available: false },
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom", 
    period: "",
    description: "Optimal für größere KMUs",
    suitableFor: "Perfekt für große Unternehmen mit unbegrenzten Bedürfnissen",
    href: "/contact",
    buttonText: "Demo buchen",
    isPopular: false,
    actionType: 'demo',
    features: [
      { 
        name: 'Websites', 
        icon: Target,
        value: 'Unbegrenzt',
        available: true,
        highlight: true,
        primary: true
      },
      { 
        name: 'Team-Mitglieder', 
        icon: Users,
        value: 'Unbegrenzt',
        available: true,
        highlight: true 
      },
      { 
        name: 'KI-Such-Prompts', 
        icon: Bot,
        value: 'Unbegrenzt',
        available: true,
        highlight: true 
      },
      { 
        name: 'Konkurrenten KI-Rankings', 
        icon: Briefcase,
        available: true,
        highlight: true
      },
      { name: 'KI-Modelle', icon: Bot, available: true },
      { name: 'Updates', icon: Clock, value: 'Täglich', available: true },
      { name: 'KI-Recherche', icon: Sparkles, available: true },
      { name: 'KI-SEO-Audit', icon: Search, available: true },
      { name: 'Technische Analyse', icon: BarChart3, available: true },
      { name: 'Strukturierte Daten Generator', icon: TrendingUp, available: true },
      { name: 'Customer Success Manager', icon: User, available: true },
      { name: 'Kickoff Workshop', icon: Zap, available: true },
    ]
  }
];

const agencyPlan = {
  id: "agency",
  name: "Agency",
  monthlyPrice: "€599", 
  yearlyPrice: "€479",
  period: "Monat",
  description: "Optimal für Agenturen",
  suitableFor: "Perfekt für Agenturen, E-Commerce-Seiten und wachsende Unternehmen",
  href: "/contact",
  buttonText: "Demo buchen",
  isPopular: false,
  actionType: 'demo',
  features: [
    { 
      name: 'Websites', 
      icon: Target,
      value: 'Custom',
      available: true,
      highlight: true,
      primary: true
    },
    { 
      name: 'Team-Mitglieder', 
      icon: Users,
      value: 'Custom',
      available: true,
      highlight: true 
    },
    { 
      name: 'KI-Such-Prompts verfolgt', 
      icon: Bot,
      value: 'Custom',
      available: true,
      highlight: true 
    },
    { 
      name: 'Konkurrenten KI-Rankings', 
      icon: Briefcase,
      available: true,
      highlight: true
    },
    { name: 'KI-Modelle', icon: Bot, available: true },
    { name: 'Updates', icon: Clock, value: 'Täglich', available: true },
    { name: 'KI-Recherche', icon: Sparkles, available: true },
    { name: 'KI-SEO-Audit', icon: Search, available: true },
    { name: 'Technische Analyse', icon: BarChart3, available: true },
    { name: 'Strukturierte Daten Generator', icon: TrendingUp, available: true },
    { name: 'Customer Success Manager', icon: User, available: true },
    { name: 'Kickoff Workshop', icon: Zap, available: false },
  ]
};

// German feature tooltips
const featureTooltips: Record<string, string> = {
  'Websites': 'Anzahl der Websites, die Sie verfolgen und optimieren können',
  'Team-Mitglieder': 'Kollegen zur Zusammenarbeit einladen',
  'KI-Such-Prompts verfolgt': 'Erfahren Sie, wie oft Sie angezeigt werden, wo Sie ranken und ob KI Sie empfiehlt.',
  'Updates': 'Wie oft Ihre Rankings aktualisiert werden',
  'Konkurrenten KI-Rankings': 'Sehen Sie, wie Ihre Konkurrenten in der KI-Suche abschneiden',
  'KI-Modelle': 'Verfolgung über verschiedene LLMs hinweg',
  'KI-Recherche': 'Entdecken Sie Keywords & Themen, die KI-Tools mit Ihrem Unternehmen verknüpfen',
  'KI-SEO-Audit': 'Lassen Sie Finseo Ihre Seite scannen, Probleme finden und Lösungen geben, die Sie direkt in Ihre Seite einfügen können',
  'Technische Analyse': 'SEO-Probleme auf Ihrer Website finden und beheben',
  'Strukturierte Daten Generator': 'Lassen Sie Finseo gültigen Schema-Code erstellen, damit KI & Google Ihre Seite besser verstehen',
  'Customer Success Manager': 'Persönlicher KI-Such-Experte für Onboarding & Strategie',
  'Kickoff Workshop': 'Geführte Session mit einem KI-Such-Experten für Setup & maximale Ergebnisse',
};

export function HuntercoachPricingSection() {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    // Cal.com popup embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});

      Cal.ns["30min"]("ui", {
        "cssVarsPerTheme":{
          "light":{"cal-brand":"#0eca7b"},
          "dark":{"cal-brand":"#0eca7b"}
        },
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    `;
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Function to determine if a plan should show "Book a Demo"
  const shouldShowBookDemo = (plan: any) => {
    return plan.actionType === 'demo';
  };

  // Function to render the appropriate button
  const renderPlanButton = (plan: any) => {
    const isBookDemo = shouldShowBookDemo(plan);
    
    if (isBookDemo) {
      return (
        <button
          data-cal-link="finseo/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view"}'
          className={cn(
            "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center cursor-pointer gap-2",
            plan.isPopular 
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {plan.buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      );
    }

    return (
      <Link
        href={plan.href}
        className={cn(
          "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2",
          plan.isPopular 
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {plan.buttonText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    );
  };

  return (
    <TooltipProvider delayDuration={0}>
      <section
        id="pricing"
        className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
      >
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            KI-Sichtbarkeits-Tool
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            🚀 Heute starten
          </p>
        </SectionHeader>

        {/* Billing Interval Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingInterval('monthly')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                billingInterval === 'monthly'
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monatlich
            </button>
            <button
              onClick={() => setBillingInterval('yearly')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all relative",
                billingInterval === 'yearly'
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Jährlich
              <span className="absolute -top-2 -right-6 bg-secondary text-secondary-foreground text-xs px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Main 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-0 px-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-2xl border p-6 shadow-sm transition-all duration-200",
                plan.isPopular 
                  ? "bg-secondary/5 border-secondary/20 ring-2 ring-secondary" 
                  : plan.id === 'creator'
                  ? "bg-white/2 border-gray-200/20 hover:shadow-md"
                  : plan.id === 'enterprise'
                  ? "bg-white/2 border-gray-200/20 hover:shadow-md"
                  : "bg-background border-border hover:shadow-md"
              )}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Beliebt
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-3">
                  {plan.id === 'creator' && <Rocket className="w-6 h-6 text-muted-foreground" />}
                  {plan.id === 'business' && <Briefcase className="w-6 h-6 text-muted-foreground" />}
                  {plan.id === 'enterprise' && <Building className="w-6 h-6 text-muted-foreground" />}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                
                <div className="mb-3">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-foreground">
                      {billingInterval === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground ml-1">/{plan.period}</span>
                    )}
                  </div>
                  {billingInterval === 'yearly' && plan.name !== 'Enterprise' && (
                    <p className="text-xs text-secondary mt-1">
                      Spare €{plan.name === 'Creator' ? '20' : '60'}/Monat
                    </p>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-2">
                          <feature.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{feature.name}</span>
                          <HelpCircle className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        {feature.available ? (
                          feature.value ? (
                            <span className="text-sm font-medium text-foreground">{feature.value}</span>
                          ) : feature.name === 'KI-Modelle' ? (
                            <div className="relative flex items-center -space-x-1">
                              <img src="/chatgpt.png" alt="ChatGPT" className="w-5 h-5 rounded-full bg-white border border-white shadow-sm" />
                              <img src="/claude.png" alt="Claude" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                              <img src="/perplexity.png" alt="Perplexity" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                              <img src="/gemini.png" alt="Gemini" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                              <div className="w-5 h-5 rounded-full bg-white border border-white shadow-sm flex items-center justify-center">
                                <img src="/google.webp" alt="Google AIO" className="w-3 h-3 rounded-full" />
                              </div>
                              <img src="/deepseek.png" alt="DeepSeek" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                            </div>
                          ) : (
                            <Check className="w-4 h-4 text-green-600" />
                          )
                        ) : (
                          <X className="w-4 h-4 text-destructive" />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side={plan.id === 'creator' ? "right" : "left"} 
                      className="!bg-white !text-gray-900 max-w-xs shadow-md border border-gray-200"
                    >
                      {featureTooltips[feature.name] || feature.name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* CTA Button */}
              {renderPlanButton(plan)}
            </div>
          ))}
        </div>

        {/* Agency Plan - Full Width with Theme Styling */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="relative bg-gradient-to-r from-secondary/5 to-secondary/10 border border-secondary/20 rounded-2xl p-4 md:p-8 transition-all duration-200 hover:shadow-md">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start">
              {/* Left Side - Details (1/4 width) */}
              <div className="w-full lg:w-1/4">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-secondary" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{agencyPlan.name}</h3>
                    <p className="text-muted-foreground text-sm">{agencyPlan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-sm text-muted-foreground mr-2">Ab</span>
                    <span className="text-2xl font-bold text-foreground">
                      {billingInterval === 'yearly' ? agencyPlan.yearlyPrice : agencyPlan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground ml-2">/{agencyPlan.period}</span>
                  </div>
                  {billingInterval === 'yearly' && (
                    <p className="text-sm text-secondary">
                      Spare €120/Monat mit jährlicher Abrechnung
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm mt-2">{agencyPlan.suitableFor}</p>
                </div>

                {/* CTA Button */}
                <button
                  data-cal-link="finseo/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view"}'
                  className="w-full py-3 text-sm transition-all duration-200 border-0 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md cursor-pointer"
                >
                  Demo buchen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Side - Features in 5x2 Grid (3/4 width) */}
              <div className="w-full lg:w-3/4">
                <h4 className="text-lg font-semibold text-foreground mb-4">Alles inklusive:</h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                  {agencyPlan.features.slice(0, 10).map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-center h-full">
                      <div className="flex flex-col items-center justify-between gap-2 p-3 bg-background/80 border border-border/50 rounded-lg h-full min-h-[102px] relative">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="absolute top-2 right-2">
                              <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="top" 
                            className="!bg-white !text-gray-900 max-w-xs shadow-md border border-gray-200"
                          >
                            {featureTooltips[feature.name] || feature.name}
                          </TooltipContent>
                        </Tooltip>
                        <feature.icon className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-muted-foreground text-center leading-tight">
                          {feature.name === 'Konkurrenten KI-Rankings' ? 'KI Konkurrenten' :
                           feature.name === 'Customer Success Manager' ? 'Success Manager' :
                           feature.name === 'Strukturierte Daten Generator' ? 'JSON Generator' :
                           feature.name === 'KI-Modelle' ? '' : feature.name}
                        </span>
                        {feature.available ? (
                          feature.value ? (
                            <span className="text-xs text-foreground font-medium">{feature.value}</span>
                          ) : feature.name === 'KI-Modelle' ? (
                            <div className="relative flex items-center -space-x-1">
                              <img src="/chatgpt.png" alt="ChatGPT" className="w-5 h-5 rounded-full bg-white border border-white shadow-sm" />
                              <img src="/claude.png" alt="Claude" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                              <img src="/perplexity.png" alt="Perplexity" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                              <img src="/gemini.png" alt="Gemini" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                              <div className="w-5 h-5 rounded-full bg-white border border-white shadow-sm flex items-center justify-center">
                                <img src="/google.webp" alt="Google AIO" className="w-3 h-3 rounded-full" />
                              </div>
                              <img src="/deepseek.png" alt="DeepSeek" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                            </div>
                          ) : (
                            <Check className="w-3 h-3 text-green-600" />
                          )
                        ) : (
                          <X className="w-3 h-3 text-destructive" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
} 