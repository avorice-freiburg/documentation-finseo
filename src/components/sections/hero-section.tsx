"use client";

import { AnimatedHeroDashboard } from "@/components/animated-hero-dashboard";
import { AnimatedAIHeading } from "@/components/animated-ai-heading";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Calendar } from "lucide-react";

function URLInputForm() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [faviconUrl, setFaviconUrl] = useState("");
  const [validDomain, setValidDomain] = useState("");

  // Domain validation regex - checks for valid domain patterns
  const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  
  const validateAndFormatURL = (input: string): string | null => {
    // Remove whitespace and convert to lowercase
    const cleanInput = input.trim().toLowerCase();
    
    if (!cleanInput) {
      setError("Please enter a website URL");
      return null;
    }

    // Remove protocol if present for validation
    const withoutProtocol = cleanInput.replace(/^https?:\/\//, '').replace(/^www\./, '');
    
    // Extract just the domain part (remove path, query params, etc.)
    const domainPart = withoutProtocol.split('/')[0].split('?')[0].split('#')[0];
    
    // Validate domain
    if (!domainRegex.test(domainPart)) {
      setError("Please enter a valid domain (e.g., example.com, shop.example.de)");
      return null;
    }

    // Return formatted URL with https prefix
    return `https://${domainPart}`;
  };

  const getFaviconUrl = (domain: string): string => {
    // Use Google's favicon service as a reliable fallback
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  };

  useEffect(() => {
    const cleanInput = url.trim().toLowerCase();
    if (!cleanInput) {
      setFaviconUrl("");
      setValidDomain("");
      return;
    }

    // Remove protocol if present for validation
    const withoutProtocol = cleanInput.replace(/^https?:\/\//, '').replace(/^www\./, '');
    const domainPart = withoutProtocol.split('/')[0].split('?')[0].split('#')[0];
    
    // Check if domain is valid
    if (domainRegex.test(domainPart)) {
      setValidDomain(domainPart);
      setFaviconUrl(getFaviconUrl(domainPart));
      setError("");
    } else {
      setFaviconUrl("");
      setValidDomain("");
    }
  }, [url]);

  useEffect(() => {
    // Cal element-click embed code
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "demo", {origin:"https://app.cal.com"});

      Cal.ns["demo"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#060607"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formattedURL = validateAndFormatURL(url);
    
    if (formattedURL) {
      // Encode the URL for use as a query parameter
      const encodedURL = encodeURIComponent(formattedURL);
      // Redirect to signup with the URL parameter
      window.location.href = `https://app.finseo.ai/signup?website=${encodedURL}`;
    } else {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    // Clear error when user starts typing
    if (error) setError("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                {faviconUrl ? (
                  <img
                    src={faviconUrl}
                    alt={`${validDomain} favicon`}
                    className="w-4 h-4 rounded-sm transition-all duration-300 ease-in-out"
                    onError={(e) => {
                      // Fallback to globe icon if favicon fails to load
                      e.currentTarget.style.display = 'none';
                      const globeIcon = e.currentTarget.nextElementSibling;
                      if (globeIcon) {
                        (globeIcon as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                ) : null}
                <Globe 
                  className={`w-4 h-4 text-muted-foreground transition-all duration-300 ease-in-out ${
                    faviconUrl ? 'opacity-0 absolute' : 'opacity-100'
                  }`}
                  style={{ display: faviconUrl ? 'none' : 'block' }}
                />
              </div>
              <Input
                type="text"
                placeholder="Enter your website (e.g., yoursite.com)"
                value={url}
                onChange={handleInputChange}
                className={`h-10 pl-10 pr-4 text-sm rounded-md border transition-colors ${
                  error 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                    : "border-border focus:border-secondary focus:ring-secondary/20"
                } bg-card`}
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-secondary h-10 px-6 text-sm font-normal tracking-wide rounded-md text-primary-foreground dark:text-secondary-foreground shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95 disabled:opacity-50"
            >
              {isLoading ? "..." : "Get Started"}
            </Button>
          </div>
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
        </div>
      </form>
      
      <div className="text-center">
        <button
          data-cal-link="team/finseo/demo"
          data-cal-namespace="demo"
          data-cal-config='{"layout":"month_view"}'
          className="text-sm font-medium hover:underline transition-colors cursor-pointer inline-flex items-center gap-1.5"
          style={{ color: '#0eca7b' }}
        >
          <Calendar className="w-4 h-4" />
          Get Demo
        </button>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 h-[600px] md:h-[800px] w-full bg-background rounded-b-xl"></div>
          <DotPattern
            className={cn(
              "absolute inset-0 h-[600px] md:h-[800px] w-full",
              "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
              "opacity-30"
            )}
          />
        </div>

        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-card rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero.badgeIcon}
            {hero.badge}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <AnimatedAIHeading />
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              See if AI talks about your brand, what it recommends - and what it doesn't. Track your visibility, monitor competitors, and get clear step by step actions to improve your presence in AI search.
            </p>
          </div>
          <URLInputForm />
        </div>
      </div>
      <AnimatedHeroDashboard />
    </section>
  );
}
