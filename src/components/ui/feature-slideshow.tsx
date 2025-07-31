"use client";

import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "motion/react";
import { Search, BarChart, Bot, CheckCircle, Globe, Target } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

import { cn } from "@/lib/utils";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between p-3 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "overflow-hidden text-[15px] font-medium data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="p-3">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

type FeatureItem = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
};
type FeatureProps = {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right" | "top" | "bottom";
  lineColor?: string;
  featureItems: FeatureItem[];
};

export const Feature = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  lineColor = "bg-neutral-500 dark:bg-white",
  featureItems,
}: FeatureProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [previousIndex, setPreviousIndex] = useState<number>(-1);

  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };

  // interval for changing images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % featureItems.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) %
        featureItems.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          featureItems.length - 1
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [featureItems.length]);

  // Handle image transition
  useEffect(() => {
    if (currentIndex !== previousIndex) {
      setImageLoaded(false);
      setPreviousIndex(currentIndex);
    }
  }, [currentIndex, previousIndex]);

  // Replace the existing image rendering section with this optimized version
  const renderMedia = () => {
    const currentItem = featureItems[currentIndex];
    if (!currentItem) return null;

    // Chart data for visualizations
    const keywordTrendData = [
      { month: "Jan", volume: 8500, difficulty: 42, cpc: 2.80 },
      { month: "Feb", volume: 9200, difficulty: 45, cpc: 3.10 },
      { month: "Mar", volume: 10800, difficulty: 48, cpc: 3.40 },
      { month: "Apr", volume: 11500, difficulty: 46, cpc: 3.20 },
      { month: "May", volume: 12500, difficulty: 45, cpc: 3.20 },
      { month: "Jun", volume: 13200, difficulty: 44, cpc: 3.15 }
    ];

    const rankingTrendData = [
      { week: "W1", google: 12, chatgpt: 8, claude: 15, perplexity: 6 },
      { week: "W2", google: 10, chatgpt: 7, claude: 12, perplexity: 5 },
      { week: "W3", google: 8, chatgpt: 6, claude: 10, perplexity: 4 },
      { week: "W4", google: 6, chatgpt: 5, claude: 8, perplexity: 3 },
      { week: "W5", google: 4, chatgpt: 4, claude: 6, perplexity: 3 },
      { week: "W6", google: 3, chatgpt: 3, claude: 5, perplexity: 2 }
    ];

    const contentPerformanceData = [
      { type: "Articles", generated: 45, published: 42, seoScore: 94 },
      { type: "Meta Tags", generated: 128, published: 125, seoScore: 98 },
      { type: "Schema", generated: 67, published: 64, seoScore: 96 },
      { type: "Images", generated: 89, published: 85, seoScore: 92 }
    ];

    const backlinkGrowthData = [
      { month: "Jan", totalLinks: 1850, newLinks: 45, lostLinks: 12 },
      { month: "Feb", totalLinks: 1920, newLinks: 78, lostLinks: 8 },
      { month: "Mar", totalLinks: 2050, newLinks: 142, lostLinks: 12 },
      { month: "Apr", totalLinks: 2180, newLinks: 156, lostLinks: 26 },
      { month: "May", totalLinks: 2320, newLinks: 168, lostLinks: 28 },
      { month: "Jun", totalLinks: 2450, newLinks: 148, lostLinks: 18 }
    ];

    const chartConfig = {
      volume: { label: "Search Volume", color: "#0ea5e9" },
      difficulty: { label: "Difficulty", color: "#f59e0b" },
      cpc: { label: "CPC", color: "#10b981" },
      google: { label: "Google", color: "#3b82f6" },
      chatgpt: { label: "ChatGPT", color: "#10b981" },
      claude: { label: "Claude", color: "#f59e0b" },
      perplexity: { label: "Perplexity", color: "#8b5cf6" },
      totalLinks: { label: "Total Links", color: "#0ea5e9" },
      newLinks: { label: "New Links", color: "#10b981" },
      lostLinks: { label: "Lost Links", color: "#ef4444" }
    };

    // Create detailed UI mockups for each feature
    if (currentItem.id === 1) {
      // AI Visibility Tracking Mockup
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-background via-background/95 to-secondary/10 rounded-xl border border-border/30 p-4 overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">AI Visibility Dashboard</h3>
                <p className="text-sm text-muted-foreground">Live tracking across AI platforms</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </div>
          </motion.div>

          {/* AI Platform Cards */}
          <div className="relative z-10 grid grid-cols-2 gap-2 mb-3">
            {[
              { name: "ChatGPT", visible: true, mentions: 47, icon: "/chatgpt.png" },
              { name: "Claude", visible: true, mentions: 23, icon: "/claude.png" },
              { name: "Perplexity", visible: false, mentions: 8, icon: "/perplexity.png" },
              { name: "Gemini", visible: true, mentions: 31, icon: "/gemini.png" }
            ].map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg p-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <img src={platform.icon} alt={platform.name} className="w-3.5 h-3.5 rounded-full" />
                    <span className="text-xs font-medium truncate">{platform.name}</span>
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full ${platform.visible ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-foreground">{platform.mentions}</span>
                  <span className="text-xs text-muted-foreground">mentions</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visibility Chart Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 bg-background/30 backdrop-blur-sm border border-border/20 rounded-lg p-3 h-32"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-medium text-foreground">Visibility Trend (7 days)</div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                <span className="text-xs text-muted-foreground">Mentions</span>
              </div>
            </div>
            <div className="relative h-20">
              <div className="absolute inset-0 flex items-end justify-between px-1">
                {[65, 72, 68, 85, 78, 82, 89].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    className="bg-green-500 w-3 rounded-t opacity-90 relative z-20"
                  ></motion.div>
                ))}
              </div>
              {/* Chart baseline */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-border/30"></div>
            </div>
            {/* Day labels */}
            <div className="flex justify-between px-1 mt-1">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <span key={i} className="text-xs text-muted-foreground text-center w-3">{day.slice(0, 1)}</span>
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    if (currentItem.id === 2) {
      // AI Brand Analysis Mockup
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-background via-background/95 to-secondary/10 rounded-xl border border-border/30 p-4 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/5 rounded-full blur-xl"></div>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">AI Brand Monitor</h3>
                <p className="text-sm text-muted-foreground">How AI talks about your brand</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-orange-600 font-medium">Analyzing</span>
              </div>
            </div>
          </motion.div>

          {/* AI Sentiment Analysis */}
          <div className="relative z-10 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Overall Sentiment</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-bold text-green-600">Positive</span>
                </div>
              </div>
              
              {/* Sentiment bar */}
              <div className="w-full bg-background/50 rounded-full h-2 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-green-500 h-2 rounded-full"
                ></motion.div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">78%</div>
                  <div className="text-xs text-muted-foreground">Positive</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-500">18%</div>
                  <div className="text-xs text-muted-foreground">Neutral</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-500">4%</div>
                  <div className="text-xs text-muted-foreground">Negative</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent AI Mentions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10 bg-background/30 backdrop-blur-sm border border-border/20 rounded-lg p-3"
          >
            <div className="text-sm font-medium mb-3 text-foreground">Recent AI Mentions</div>
            <div className="space-y-2">
              {[
                { ai: "ChatGPT", context: "Best SEO tools recommendation", sentiment: "positive", icon: "/chatgpt.png" },
                { ai: "Claude", context: "AI optimization platforms", sentiment: "positive", icon: "/claude.png" },
                { ai: "Perplexity", context: "Search engine ranking tools", sentiment: "neutral", icon: "/perplexity.png" }
              ].map((mention, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center justify-between bg-background/40 p-2 rounded"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <img src={mention.icon} alt={mention.ai} className="w-4 h-4 rounded-full" />
                    <div className="flex-1">
                      <div className="text-xs font-medium">{mention.ai}</div>
                      <div className="text-xs text-muted-foreground truncate">{mention.context}</div>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    mention.sentiment === 'positive' ? 'bg-green-500' : 
                    mention.sentiment === 'negative' ? 'bg-red-500' : 'bg-gray-400'
                  }`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    if (currentItem.id === 3) {
      // Prompt Discovery Mockup
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-background via-background/95 to-secondary/10 rounded-xl border border-border/30 p-4 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
          <div className="absolute top-8 left-8 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 bg-secondary/10 rounded-full blur-lg"></div>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Prompt Discovery</h3>
                <p className="text-sm text-muted-foreground">Key prompts for your business</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Scanning</span>
              </div>
            </div>
          </motion.div>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 mb-3"
          >
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-green-600 z-10" />
              <input
                type="text"
                placeholder="Search relevant prompts..."
                className="w-full h-8 pl-7 pr-2 bg-background/80 border border-border/50 rounded-lg text-xs text-foreground"
                defaultValue="AI SEO tools"
              />
            </div>
          </motion.div>

          {/* Discovered Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 space-y-3"
          >
            <div className="text-xs font-medium text-foreground mb-2">High-Impact Prompts</div>
            {[
              { 
                prompt: "What are the best AI SEO tools?", 
                impact: "high",
                mentions: "You appear in 6/10 responses"
              },
              { 
                prompt: "How to optimize for AI search?", 
                impact: "medium",
                mentions: "You appear in 3/10 responses"
              },
              { 
                prompt: "Top SEO automation platforms", 
                impact: "high",
                mentions: "Not mentioned"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg p-2 mb-2"
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-foreground mb-0.5 truncate">"{item.prompt}"</div>
                    <div className="text-xs text-muted-foreground truncate">{item.mentions}</div>
                  </div>
                  <div className="flex items-center gap-1 ml-2">
                    <div className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                      item.impact === 'high' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    }

    if (currentItem.id === 4) {
      // AI Optimization Recommendations Mockup
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-background via-background/95 to-secondary/10 rounded-xl border border-border/30 p-4 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
          <div className="absolute top-6 right-6 w-28 h-28 bg-orange-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-6 left-6 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">AI Optimization</h3>
                <p className="text-sm text-muted-foreground">Clear recommendations</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-orange-600 font-medium">Optimizing</span>
              </div>
            </div>
          </motion.div>

          {/* Priority Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 mb-4"
          >
            <div className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Optimization Score</span>
                <span className="text-2xl font-bold text-orange-600">73/100</span>
              </div>
              <div className="w-full bg-background/50 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "73%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-orange-500 h-2 rounded-full"
                ></motion.div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">Good progress! 27 points to maximize visibility</div>
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10 space-y-3"
          >
            <div className="text-sm font-medium text-foreground mb-3">Priority Actions</div>
            {[
              {
                action: "Add structured data markup to key pages",
                impact: "High",
                effort: "Medium",
                priority: 1
              },
              {
                action: "Include citations and sources on content pages",
                impact: "High", 
                effort: "Low",
                priority: 2
              },
              {
                action: "Optimize homepage for 'AI SEO tools' queries",
                impact: "Medium",
                effort: "Medium", 
                priority: 3
              }
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg p-3"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {rec.priority}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground mb-2">{rec.action}</div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">Impact:</span>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          rec.impact === 'High' 
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {rec.impact}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">Effort:</span>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          rec.effort === 'Low' 
                            ? 'bg-green-100 text-green-700'
                            : rec.effort === 'Medium'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {rec.effort}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    }

    // Fallback for any other items
    if (currentItem.image) {
      return (
        <div className="relative aspect-auto h-full w-full overflow-hidden rounded-xl border border-neutral-300/50 bg-gray-200 p-1">
          <motion.img
            key={currentItem.image}
            src={currentItem.image}
            alt={currentItem.title}
            className="aspect-auto h-full w-full rounded-lg object-cover"
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              filter: imageLoaded ? "blur(0px)" : "blur(5px)",
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      );
    }

    if (currentItem.video) {
      return (
        <video
          preload="auto"
          src={currentItem.video}
          className="aspect-auto h-full w-full rounded-lg object-cover"
          autoPlay
          loop
          muted
          playsInline // Better mobile support
        />
      );
    }

    return (
      <div className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1" />
    );
  };

  return (
    <div ref={ref} className="w-full">
      <div className="flex w-full flex-col items-center justify-center max-w-7xl mx-auto">
        <div className="grid h-full grid-cols-5 gap-x-10 px-10 md:px-20 items-center w-full">
          <div
            className={`col-span-3 w-full h-full hidden lg:flex md:items-center ${
              ltr ? "md:order-2 md:justify-end" : "justify-start"
            }`}
          >
            <Accordion.Root
              className="w-full h-full flex flex-col gap-8"
              type="single"
              defaultValue={`item-${currentIndex}`}
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
            >
              {featureItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className={cn(
                    "relative data-[state=open]:bg-card data-[state=open]:border data-[state=open]:border-border rounded-lg data-[state=closed]:rounded-none data-[state=closed]:border-0",
                    "data-[state=open]:shadow-[0px_0px_1px_0px_rgba(0,0,0,0.16),0px_1px_2px_-0.5px_rgba(0,0,0,0.16)]"
                  )}
                  value={`item-${index}`}
                >
                  <div
                    className={cn(
                      "absolute overflow-hidden rounded-lg transition-opacity",
                      "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                      "bg-neutral-300/50 dark:bg-neutral-300/30",
                      {
                        "bottom-0 top-0 h-full w-0.5 left-0":
                          linePosition === "left",
                        "bottom-0 top-0 h-full w-0.5 right-0":
                          linePosition === "right",
                        "left-0 right-0 top-0 h-0.5 w-full":
                          linePosition === "top",
                        "left-0 right-0 bottom-0 h-0.5 w-full":
                          linePosition === "bottom",
                      }
                    )}
                    data-state={currentIndex === index ? "open" : "closed"}
                  >
                    <div
                      className={cn(
                        "absolute transition-all ease-linear",
                        lineColor,
                        {
                          "left-0 top-0 w-full": ["left", "right"].includes(
                            linePosition
                          ),
                          "left-0 top-0 h-full": ["top", "bottom"].includes(
                            linePosition
                          ),
                        },
                        currentIndex === index
                          ? ["left", "right"].includes(linePosition)
                            ? "h-full"
                            : "w-full"
                          : ["left", "right"].includes(linePosition)
                          ? "h-0"
                          : "w-0"
                      )}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : "0s",
                      }}
                    />
                  </div>
                  <AccordionTrigger className="font-semibold text-lg tracking-tight text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-medium">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          <div
            className={`col-span-5 h-[350px] min-h-[200px] w-full lg:col-span-2 lg:h-auto lg:max-w-[400px] lg:max-h-[400px] lg:aspect-square lg:mx-auto ${
              ltr && "md:order-1"
            }`}
          >
            {renderMedia()}
          </div>

          <ul
            ref={carouselRef}
            className="col-span-5 flex snap-x flex-nowrap overflow-x-auto [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden snap-mandatory"
            style={{
              padding: "50px calc(50%)",
            }}
          >
            {featureItems.map((item, index) => (
              <a
                key={item.id}
                className="card relative grid h-full max-w-64 shrink-0 items-start justify-center p-3 bg-background border-l last:border-r border-t border-b first:rounded-tl-xl last:rounded-tr-xl"
                onClick={() => setCurrentIndex(index)}
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div
                  className={cn(
                    "absolute overflow-hidden rounded-lg transition-opacity",
                    "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                    "bg-neutral-300/50 dark:bg-neutral-300/30",
                    {
                      "bottom-0 top-0 h-full w-0.5 left-0":
                        linePosition === "left",
                      "bottom-0 top-0 h-full w-0.5 right-0":
                        linePosition === "right",
                      "left-0 right-0 top-0 h-0.5 w-full":
                        linePosition === "top",
                      "left-0 right-0 bottom-0 h-0.5 w-full":
                        linePosition === "bottom",
                    }
                  )}
                  data-state={currentIndex === index ? "open" : "closed"}
                >
                  <div
                    className={cn(
                      "absolute transition-all ease-linear",
                      lineColor,
                      {
                        "left-0 top-0 w-full": ["left", "right"].includes(
                          linePosition
                        ),
                        "left-0 top-0 h-full": ["top", "bottom"].includes(
                          linePosition
                        ),
                      },
                      currentIndex === index
                        ? ["left", "right"].includes(linePosition)
                          ? "h-full"
                          : "w-full"
                        : ["left", "right"].includes(linePosition)
                        ? "h-0"
                        : "w-0"
                    )}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="mx-0 max-w-sm text-balance text-sm font-medium leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
