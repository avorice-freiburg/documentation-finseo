"use client";

import Link from "next/link";
import { ArrowRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { FooterSection } from "@/components/sections/footer-section";
import { SectionHeader } from "@/components/section-header";

export default function AffiliateProgram() {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://finseo.tolt.io/");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      {/* Hero Section - Minimalist styling without gradient */}
      <section id="hero" className="w-full relative">
        <div className="relative flex flex-col items-center w-full px-6 pb-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full bg-background"></div>
          </div>
          <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
              AFFILIATE PROGRAM
            </p>
            <div className="flex flex-col items-center justify-center gap-5">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Earn <span className="text-secondary">25% Revenue</span> for everyone you refer!
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Bring Friends or colleagues to Finseo.ai via your Link and earn a lifetime revenue of 25% of their subscription.
              </motion.p>
            </div>
            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              <Link
                href="https://finseo.tolt.io/"
                className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-md text-primary-foreground dark:text-secondary-foreground w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
              >
                Start Earning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Clean bento-style section */}
      <section id="how-it-works" className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            How It Works
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Simple steps to start earning with our affiliate program
          </p>
        </SectionHeader>

        <div className="border-x mx-5 md:mx-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            {[
              {
                id: 1,
                title: "Sign Up",
                description: "Create your free affiliate account in just 2 minutes"
              },
              {
                id: 2,
                title: "Share Your Link",
                description: "Promote Finseo to your audience with your unique link"
              },
              {
                id: 3,
                title: "Earn 30% Revenue",
                description: "Get lifetime commissions for every referred customer"
              }
            ].map((step) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-start justify-end min-h-[400px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                  <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
                    <div className="size-14 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-secondary text-2xl font-medium">{step.id}</span>
                    </div>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Details & Link - Similar to feature section */}
      <section id="commission" className="w-full">
        <div className="max-w-6xl mx-auto py-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Commission Details */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-medium tracking-tighter mb-4">Commission Structure</h3>
                <p className="text-muted-foreground">Our competitive affiliate program offers generous rewards for your referrals.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center">
                    <span className="text-secondary text-2xl font-medium">25%</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Lifetime Commission</h4>
                    <p className="text-muted-foreground text-sm">Earn recurring revenue as long as your referral remains a customer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center">
                    <span className="text-secondary text-2xl font-medium">30d</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Attribution Window</h4>
                    <p className="text-muted-foreground text-sm">Your referral link is valid for 30 days after the initial click</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center">
                    <span className="text-secondary text-2xl font-medium">$$$</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Monthly Payouts</h4>
                    <p className="text-muted-foreground text-sm">Get paid reliably every month via your preferred payment method</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Affiliate Link */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-medium tracking-tighter mb-4">Get Started Now</h3>
                <p className="text-muted-foreground">Join our affiliate program and start earning with your unique link.</p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg border border-border">
                <div className="text-sm text-muted-foreground mb-2">Your Affiliate Link:</div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-full bg-background p-3 rounded-md border border-border truncate">
                    https://finseo.tolt.io/
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="shrink-0 bg-secondary text-white h-9 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all"
                  >
                    {copied ? "Copied!" : "Copy Link"} 
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="https://finseo.tolt.io/"
                    className="bg-secondary text-white h-9 w-full rounded-md font-normal flex items-center justify-center hover:bg-secondary/90 transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]"
                  >
                    Sign Up as an Affiliate <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                  <p className="mt-4 text-sm text-muted-foreground text-center">
                    No fees or minimum requirements to join
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 