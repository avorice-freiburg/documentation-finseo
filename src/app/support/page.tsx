'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Mail, MessageSquare, CheckCircle, Send, AlertCircle, Clock, Users, Bot, Star, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { FooterSection } from "@/components/sections/footer-section";
import { Icons } from "@/components/icons";
import { AnimatePresence, motion, useInView } from "motion/react";

// Mock support tickets for the UI mockup
const mockTickets = [
  {
    id: "#12847",
    user: "Sarah Chen",
    subject: "Integration help needed",
    category: "Technical",
    status: "In Progress",
    priority: "High",
    time: "2 hours ago",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "#12846", 
    user: "Mike Johnson",
    subject: "Billing question about upgrade",
    category: "Billing",
    status: "Resolved",
    priority: "Medium",
    time: "4 hours ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "#12845",
    user: "Emma Wilson",
    subject: "Feature request for dashboard",
    category: "Feature",
    status: "Under Review",
    priority: "Low", 
    time: "1 day ago",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const supportStats = [
  { label: "Avg Response Time", value: "< 2 hours", icon: <Clock className="h-4 w-4" /> },
  { label: "Customer Satisfaction", value: "98%", icon: <Heart className="h-4 w-4" /> },
  { label: "Tickets Resolved", value: "1,247", icon: <CheckCircle className="h-4 w-4" /> },
  { label: "Active Support Agents", value: "12", icon: <Users className="h-4 w-4" /> }
];

// Custom Support Chat Animation Component
function SupportChatAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    } else {
      setShouldAnimate(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full p-4 flex flex-col items-center justify-center gap-5"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <motion.div
        className="max-w-md mx-auto w-full flex flex-col gap-2"
        animate={{
          y: shouldAnimate ? -75 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="flex items-end justify-end gap-3">
          <motion.div
            className="max-w-[280px] bg-secondary text-black p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.05)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <p className="text-sm">
              Hi! I'm having trouble setting up the WordPress integration. The API key seems to be working but I'm not seeing any content being generated. Can you help?
            </p>
          </motion.div>
          <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="User Avatar"
              className="size-8 rounded-full flex-shrink-0"
            />
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="flex items-center bg-background rounded-full size-10 flex-shrink-0 justify-center shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-border">
            <Icons.logo className="size-4" />
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!shouldAnimate ? (
                <motion.div
                  key="dots"
                  className="absolute left-0 top-0 bg-background p-4 rounded-2xl border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-2 h-2 bg-primary/50 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="response"
                  layout
                  className="absolute left-0 top-0 md:min-w-[300px] min-w-[220px] p-4 bg-accent border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <div className="space-y-3">
                    <p className="text-sm">
                      I'd be happy to help you with the WordPress integration! Let me walk you through a few troubleshooting steps:
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Check plugin activation status</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Verify API key permissions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Test connection in settings</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      If these steps don't resolve the issue, I can schedule a screen share session to help you directly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        <div className="text-center max-w-3xl mx-auto px-6 z-10 pt-16">
          <div className="mx-auto flex justify-center">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2 mb-6">
              <MessageSquare className="h-4 w-4" />
              Contact Support
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">
            Get help from our expert support team
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Our dedicated support team is here to help you succeed with Finseo. 
            Get quick answers to your questions and personalized assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="mailto:info@finseo.ai"
              className="bg-secondary text-black font-semibold text-sm h-12 px-8 rounded-md flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors"
            >
              Email Us Directly
            </Link>
            <span className="text-sm text-muted-foreground">
              Average response time: 2 hours
            </span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Support Chat Animation */}
          <div className="h-[600px] bg-card border border-border rounded-xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-medium">Live Support Chat</h3>
                <p className="text-sm text-muted-foreground">Real-time assistance from our team</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Online</span>
              </div>
            </div>
            
            <div className="h-[500px] relative">
              <SupportChatAnimation />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-4">
                Send us a message
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and our support team will get back to you as soon as possible.
              </p>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-medium text-green-900 dark:text-green-100">Message Sent Successfully!</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <h4 className="font-medium text-red-900 dark:text-red-100">Error Sending Message</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      There was an error sending your message. Please try again or email us directly at info@finseo.ai
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border border-border"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border border-border"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">Category *</Label>
                    <Select value={formData.category} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="bg-background border border-border">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Support</SelectItem>
                        <SelectItem value="technical">Technical Issues</SelectItem>
                        <SelectItem value="billing">Billing & Account</SelectItem>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border border-border"
                      placeholder="Brief description of your issue"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="min-h-[120px] bg-background border border-border"
                    placeholder="Please provide as much detail as possible about your question or issue..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-black hover:bg-secondary/90 font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Alternative Contact */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Need immediate assistance?
              </p>
              <Button variant="outline" className="border border-border" asChild>
                <Link href="mailto:info@finseo.ai">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us Directly
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
} 