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
  User
} from "lucide-react";
import React, { useEffect, useState } from "react";

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

// New pricing structure
const pricingPlans = [
  {
    name: "Creator",
    monthlyPrice: "€99",
    yearlyPrice: "€79",
    period: "month",
    description: "Perfect for freelancers and small businesses",
    href: "https://app.finseo.ai/signup",
    buttonText: "Start Free Trial",
    isPopular: false,
    actionType: 'checkout'
  },
  {
    name: "Business", 
    monthlyPrice: "€299",
    yearlyPrice: "€239",
    period: "month",
    description: "Best for agencies and growing businesses",
    href: "https://app.finseo.ai/signup",
    buttonText: "Start Free Trial",
    isPopular: true,
    actionType: 'checkout'
  },
  {
    name: "Agency",
    monthlyPrice: "€599", 
    yearlyPrice: "€479",
    period: "month",
    description: "Best for agencies and heavy users",
    href: "https://app.finseo.ai/signup",
    buttonText: "Get a Demo",
    isPopular: true,
    actionType: 'demo'
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom", 
    period: "",
    description: "Best for enterprise and unlimited usage",
    href: "/contact",
    buttonText: "Get a Demo",
    isPopular: true,
    actionType: 'demo'
  }
];

const featureCategories: FeatureCategory[] = [
  {
    name: "AI SEO Features",
    features: [
      {
        name: "Projects",
        icon: Target,
        values: ["1 project", "1 project", "10 projects", "Unlimited projects"],
        subtitle: "Organize work"
      },
      {
        name: "Workspace Access",
        icon: Users,
        values: ["No workspace", "3 users", "5 users", "Unlimited users"],
        subtitle: "Team collaboration"
      },
      {
        name: "AI Rank Tracker",
        icon: Bot,
        values: ["20 prompts", "150 prompts", "300 prompts", "Unlimited prompts"],
        subtitle: "AI platform rank"
      },
      {
        name: "AI Competitor Analysis",
        icon: Briefcase,
        values: [true, true, true, true],
        subtitle: "Beat competition"
      },
      {
        name: "AI SEO Audit",
        icon: Shield,
        values: [true, true, true, true],
        subtitle: "Smart insights"
      },
      {
        name: "AI Prompt Research",
        icon: FileText,
        values: [true, true, true, true],
        subtitle: "AI optimization"
      },
      {
        name: "Customer Success Manager",
        icon: User,
        values: [false, false, true, true],
        subtitle: "Expert guidance"
      },
      {
        name: "Kickoff Workshop",
        icon: Zap,
        values: [false, false, false, true],
        subtitle: "Professional onboarding"
      }
    ]
  }
];

export function PricingSection() {
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
          "dark":{"cal-brand":"#fafafa"}
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
  const renderPlanButton = (plan: any, isInHeader: boolean = false) => {
    const isBookDemo = shouldShowBookDemo(plan);
    
    if (isBookDemo) {
      return (
        <button
          data-cal-link="finseo/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view"}'
          className={cn(
            "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center cursor-pointer",
            (plan.isPopular && plan.name === "Enterprise")
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {plan.buttonText}
        </button>
      );
    }

    return (
      <Link
        href={plan.href}
        className={cn(
          "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center",
          (plan.isPopular && plan.name === "Enterprise")
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {plan.buttonText}
      </Link>
    );
  };

  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          All-Inclusive AI SEO Tools
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          🚀 Start Your 7-Day Free Trial - No hidden costs. Fair-use limits designed for intensive business use.
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
            Monthly
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
            Yearly
            <span className="absolute -top-2 -right-6 bg-secondary text-secondary-foreground text-xs px-1.5 py-0.5 rounded-full">
              -20%
            </span>
          </button>
        </div>
      </div>

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
                  {pricingPlans.map((plan, index) => (
                    <th key={plan.name} className={cn(
                      "w-1/5 px-4 py-4 text-center relative",
                      (plan.isPopular && plan.name === "Enterprise") ? "bg-gradient-to-b from-secondary/5 to-secondary/10" : "bg-background",
                      index % 2 === 1 && "bg-muted/30"
                    )}>
                      <div className="flex flex-col items-center gap-2">

                        <div className="flex items-center justify-center gap-2 mt-2">
                          <span className="font-bold text-lg text-foreground">{plan.name}</span>
                        </div>
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-bold text-foreground">
                            {billingInterval === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          {plan.period && (
                            <span className="text-sm text-muted-foreground ml-1">/{plan.period}</span>
                          )}
                        </div>
                        {billingInterval === 'yearly' && plan.name !== 'Enterprise' && (
                          <p className="text-xs text-secondary mt-1">
                            Save €{plan.name === 'Creator' ? '20' : plan.name === 'Business' ? '60' : '120'}/month
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground text-center px-2">{plan.description}</p>
                        {renderPlanButton(plan, true)}
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
                    <tr className={cn(
                      "bg-muted/50",
                      categoryIndex === 0 && "bg-gradient-to-r from-secondary/20 to-secondary/10"
                    )}>
                      <td colSpan={5} className="px-6 py-3 font-medium text-foreground text-left text-sm border-b border-border">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "w-1 h-4 rounded-full",
                            categoryIndex === 0 ? "bg-secondary" : "bg-secondary"
                          )}></div>
                          <span className={cn(
                            categoryIndex === 0 && "font-bold text-secondary"
                          )}>
                            {category.name}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Category Features */}
                    {category.features.map((feature, featureIndex) => (
                      <tr key={feature.name} className={cn(
                        "hover:bg-muted/30 transition-colors border-b border-border/50",
                        featureIndex === category.features.length - 1 && categoryIndex !== featureCategories.length - 1 && "border-b-2 border-border",
                        categoryIndex === 0 && "bg-secondary/5"
                      )}>
                        <td className="px-6 py-3">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <feature.icon className={cn(
                                "h-4 w-4",
                                categoryIndex === 0 ? "text-secondary" : "text-secondary"
                              )} />
                              <span className={cn(
                                "text-foreground font-medium text-sm",
                                categoryIndex === 0 && "font-semibold"
                              )}>{feature.name}</span>
                            </div>
                            {feature.subtitle && (
                              <span className={cn(
                                "text-xs ml-6",
                                categoryIndex === 0 ? "text-secondary/80 font-medium" : "text-muted-foreground"
                              )}>{feature.subtitle}</span>
                            )}
                          </div>
                        </td>
                        {feature.values.map((value, tierIndex) => (
                          <td key={tierIndex} className={cn(
                            "px-4 py-3 text-center",
                            tierIndex % 2 === 1 && "bg-muted/30",
                            categoryIndex === 0 && "bg-secondary/5"
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
                                <span className="text-sm font-semibold text-foreground">
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
                  {pricingPlans.map((plan, index) => (
                    <td key={plan.name} className={cn(
                      "px-4 py-4 text-center",
                      index % 2 === 1 && "bg-muted/30"
                    )}>
                      {renderPlanButton(plan, false)}
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
