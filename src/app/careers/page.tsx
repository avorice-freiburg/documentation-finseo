"use client";

import Link from "next/link";
import { ArrowRight, Mail, Clock, MapPin, Briefcase, Code, LineChart, Megaphone, Rocket, Globe } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { FooterSection } from "@/components/sections/footer-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

interface JobPosition {
  id: number;
  title: string;
  type: string;
  location: string;
  icon: React.ReactNode;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  
  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: "Sales Manager",
      type: "Full-time",
      location: "Remote / Freiburg im Breisgau, Germany",
      icon: <Briefcase className="h-10 w-10 text-secondary" />,
      description: "Lead our sales team to drive growth and establish Finseo as the go-to AI-powered SEO solution in the market.",
      responsibilities: [
        "Develop and execute sales strategies to meet revenue targets",
        "Build and maintain relationships with key clients and partners",
        "Lead and mentor a team of sales representatives",
        "Collaborate with marketing to align strategies and messaging",
        "Analyze market trends and adjust sales approaches accordingly"
      ],
      requirements: [
        "5+ years of experience in B2B SaaS sales, preferably in SEO or marketing technology",
        "Proven track record of exceeding sales targets",
        "Strong leadership and communication skills",
        "Experience with CRM systems and sales analytics",
        "Understanding of SEO and AI technology landscape",
        "Fluent German and very good English skills required"
      ]
    },
    {
      id: 2,
      title: "Marketing Manager",
      type: "Full-time",
      location: "Remote / Freiburg im Breisgau, Germany",
      icon: <Megaphone className="h-10 w-10 text-secondary" />,
      description: "Drive our marketing strategy to position Finseo as the leading AI-powered SEO platform for businesses.",
      responsibilities: [
        "Develop and implement comprehensive marketing strategies",
        "Manage content creation, social media, and email marketing campaigns",
        "Collaborate with product teams to articulate feature benefits",
        "Analyze marketing metrics and optimize for growth",
        "Oversee brand consistency across all channels"
      ],
      requirements: [
        "4+ years of experience in B2B SaaS marketing",
        "Proven track record in digital marketing and campaign management",
        "Strong analytical skills and data-driven approach",
        "Experience with marketing automation tools",
        "Excellent writing and communication skills",
        "Fluent German and very good English skills required"
      ]
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      type: "Full-time",
      location: "Remote / Freiburg im Breisgau, Germany",
      icon: <Code className="h-10 w-10 text-secondary" />,
      description: "Join our engineering team to build and scale our AI-powered SEO platform using cutting-edge technologies.",
      responsibilities: [
        "Develop and maintain core features of our platform",
        "Collaborate with AI engineers to integrate machine learning models",
        "Optimize application performance and scalability",
        "Implement robust testing and quality assurance processes",
        "Participate in architecture and design decisions"
      ],
      requirements: [
        "3+ years of experience in full stack development",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud infrastructure (AWS/GCP/Azure)",
        "Understanding of database design and optimization",
        "Familiarity with AI/ML concepts is a plus",
        "Fluent German and very good English skills required"
      ]
    }
  ];

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
              <Briefcase className="h-4 w-4" />
              Careers
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium tracking-tighter mb-4">
            Join the <span className="text-secondary">Future</span> of AI-Powered SEO
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            We're on a mission to revolutionize how businesses optimize for both traditional and AI search. Come build the future with us.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">
            Why Join Finseo
          </h2>
          <p className="text-muted-foreground text-lg">
            Be part of a team that's changing the SEO landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              icon: <Rocket className="h-10 w-10 text-secondary" />,
              title: "Real Impact",
              description: "Directly shape our AI-powered SEO platform that helps businesses achieve measurable results in search visibility."
            },
            {
              id: 2,
              icon: <LineChart className="h-10 w-10 text-secondary" />,
              title: "Skills Development",
              description: "Expand your expertise with our dedicated learning budget and regular skills workshops on AI, SEO, and web technologies."
            },
            {
              id: 3,
              icon: <Globe className="h-10 w-10 text-secondary" />,
              title: "Work-Life Balance",
              description: "Enjoy flexible hours, 30 days of annual leave, and our quarterly team retreats in different European locations."
            }
          ].map((benefit) => (
            <div
              key={benefit.id}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-200"
            >
              <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">
            Open Positions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find your perfect role and apply today
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobPositions.map((job) => (
            <div
              key={job.id}
              className={`border border-border rounded-xl overflow-hidden transition-all ${selectedJob?.id === job.id ? 'bg-accent/30' : 'bg-card hover:bg-accent/10'}`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-full hidden md:flex">
                    {job.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-medium">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex items-center text-sm text-secondary">
                      <span>{selectedJob?.id === job.id ? 'Hide details' : 'View details'}</span>
                      <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${selectedJob?.id === job.id ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>

              {selectedJob?.id === job.id && (
                <div className="px-6 pb-6 pt-2 border-t border-border mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <div className="min-w-[20px] h-5 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <div className="min-w-[20px] h-5 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button asChild>
                      <a
                        href={`mailto:info@finseo.ai?subject=Application for ${job.title} Position&body=Dear Finseo Team,%0D%0A%0D%0AI'm writing to express my interest in the ${job.title} position.%0D%0A%0D%0A[Please include your experience and why you're interested in this role]%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                      >
                        Apply Now <Mail className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* General Application Section */}
      <section className="w-full bg-accent/20 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tighter mb-4">Don't see the right role?</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <Button asChild>
            <a
              href="mailto:info@finseo.ai?subject=General Application&body=Dear Finseo Team,%0D%0A%0D%0AI'm interested in exploring opportunities with Finseo.%0D%0A%0D%0A[Please include your experience and what type of role you're looking for]%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
            >
              Send General Application <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 