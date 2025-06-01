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
      // Comprehensive Keyword Intelligence Dashboard
      return (
        <div className="aspect-auto h-full w-full rounded-xl border border-border bg-card p-3 md:p-4 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm md:text-base font-medium">Keyword Research</h3>
              <p className="text-xs text-muted-foreground">AI-powered insights</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto lg:h-[260px]">
            {/* Left Side - Search and Metrics */}
            <div className="space-y-3 order-1">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter keyword..."
                  className="w-full h-8 md:h-10 px-3 bg-background border border-border rounded-lg text-xs md:text-sm"
                  defaultValue="SEO tools"
                />
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-background p-2 md:p-3 rounded-lg text-center">
                  <div className="text-sm md:text-lg font-bold text-blue-600">12.5K</div>
                  <div className="text-xs text-muted-foreground">Volume</div>
                </div>
                <div className="bg-background p-2 md:p-3 rounded-lg text-center">
                  <div className="text-sm md:text-lg font-bold text-orange-600">45</div>
                  <div className="text-xs text-muted-foreground">Difficulty</div>
                </div>
                <div className="bg-background p-2 md:p-3 rounded-lg text-center">
                  <div className="text-sm md:text-lg font-bold text-green-600">$2.40</div>
                  <div className="text-xs text-muted-foreground">CPC</div>
                </div>
              </div>

              {/* Keywords List */}
              <div className="space-y-1.5 lg:block hidden">
                {[
                  { keyword: "SEO tools", volume: "12.5K", difficulty: 45 },
                  { keyword: "keyword research", volume: "8.9K", difficulty: 38 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-background p-2 rounded-lg">
                    <span className="text-xs font-medium truncate flex-1">{item.keyword}</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span>{item.volume}</span>
                      <span className="text-muted-foreground">{item.difficulty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Chart */}
            <div className="bg-background border border-border rounded-lg p-2 order-2">
              <div className="text-xs font-medium mb-2">Search Trend</div>
              <div className="h-[120px] md:h-[180px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={keywordTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <defs>
                      <linearGradient id="fillVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: '#6b7280' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: '#6b7280' }}
                      domain={[8000, 14000]}
                    />
                    <ChartTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-2 shadow-lg">
                              <div className="text-xs font-medium text-gray-700">{label}</div>
                              <div className="text-sm font-bold text-blue-600">
                                {payload[0]?.value?.toLocaleString()}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      fill="url(#fillVolume)"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentItem.id === 2) {
      // Multi-Platform Rank Tracking Dashboard
      return (
        <div className="aspect-auto h-full w-full rounded-xl border border-border bg-card p-3 md:p-4 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm md:text-base font-medium">Rank Tracking</h3>
              <p className="text-xs text-muted-foreground">Multi-platform monitoring</p>
            </div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="hidden sm:inline">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto lg:h-[260px]">
            {/* Left Side - Platforms and Rankings */}
            <div className="space-y-3 order-1">
              {/* Platform Tabs */}
              <div className="flex gap-1 overflow-x-auto">
                {["Google", "Bing", "Yahoo"].map((platform, i) => (
                  <button
                    key={platform}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs rounded-lg whitespace-nowrap ${
                      i === 0 ? "bg-blue-500 text-white" : "bg-background text-muted-foreground border border-border"
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>

              {/* Rankings */}
              <div className="space-y-1.5">
                {[
                  { keyword: "SEO tools", rank: 3, change: "+2" },
                  { keyword: "keyword research", rank: 7, change: "-1" },
                  { keyword: "backlink checker", rank: 12, change: "+5" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-background p-2 rounded-lg">
                    <span className="text-xs md:text-sm font-medium truncate flex-1">{item.keyword}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-lg font-bold">#{item.rank}</span>
                      <span className={`text-xs ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Chart */}
            <div className="bg-background border border-border rounded-lg p-2 order-2">
              <div className="text-xs font-medium mb-2">Ranking Progress</div>
              <div className="h-[120px] md:h-[180px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <LineChart data={rankingTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <XAxis 
                      dataKey="week" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: '#6b7280' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: '#6b7280' }}
                      domain={[0, 16]}
                      reversed={true}
                    />
                    <ChartTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-2 shadow-lg">
                              <div className="text-xs font-medium text-gray-700">{label}</div>
                              <div className="text-sm font-bold text-blue-600">#{payload[0]?.value}</div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="google"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 2 }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentItem.id === 3) {
      // AI-Powered Content Creation Interface
      return (
        <div className="aspect-auto h-full w-full rounded-xl border border-border bg-card p-3 md:p-4 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm md:text-base font-medium">AI Content Generator</h3>
              <p className="text-xs text-muted-foreground">Smart content creation</p>
            </div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto lg:h-[260px]">
            {/* Left Side - Input and Settings */}
            <div className="space-y-3 order-1">
              {/* Content Type Selector */}
              <div className="flex gap-1 overflow-x-auto">
                {["Article", "Meta", "Schema"].map((type, i) => (
                  <button
                    key={type}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs rounded-lg whitespace-nowrap ${
                      i === 0 ? "bg-purple-500 text-white" : "bg-background text-muted-foreground border border-border"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Input Field */}
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Topic</label>
                <input
                  type="text"
                  placeholder="Enter your topic..."
                  className="w-full h-8 md:h-10 px-3 bg-background border border-border rounded-lg text-xs md:text-sm"
                  defaultValue="Best SEO practices 2024"
                />
              </div>

              {/* AI Settings */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-background p-2 rounded-lg">
                  <div className="text-xs text-muted-foreground">Tone</div>
                  <div className="text-xs md:text-sm font-medium">Professional</div>
                </div>
                <div className="bg-background p-2 rounded-lg">
                  <div className="text-xs text-muted-foreground">Length</div>
                  <div className="text-xs md:text-sm font-medium">1500 words</div>
                </div>
              </div>

              {/* Generate Button */}
              <button className="w-full bg-purple-500 text-white py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-purple-600 transition-colors">
                Generate Content
              </button>
            </div>

            {/* Right Side - Preview */}
            <div className="bg-background border border-border rounded-lg p-2 order-2">
              <div className="text-xs font-medium mb-2">Content Preview</div>
              <div className="h-[120px] md:h-[180px] overflow-hidden">
                <div className="text-xs text-muted-foreground leading-relaxed space-y-2">
                  <div className="font-medium text-primary">Best SEO Practices for 2024</div>
                  <div>Discover the latest SEO strategies that drive organic traffic and improve search rankings...</div>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <span className="text-xs text-purple-600">AI is writing...</span>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="text-xs text-green-600">✓ SEO Score: 94/100</div>
                    <div className="text-xs text-blue-600">✓ Readability: Grade 8</div>
                    <div className="text-xs text-orange-600">✓ Keywords: 12 optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentItem.id === 4) {
      // Backlink Analysis & Strategy Dashboard
      return (
        <div className="aspect-auto h-full w-full rounded-xl border border-border bg-card p-3 md:p-4 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm md:text-base font-medium">Backlink Analysis</h3>
              <p className="text-xs text-muted-foreground">Link building insights</p>
            </div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto lg:h-[260px]">
            {/* Left Side - Metrics and Links */}
            <div className="space-y-3 order-1">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-background p-2 md:p-3 rounded-lg text-center">
                  <div className="text-sm md:text-lg font-bold text-blue-600">2.4K</div>
                  <div className="text-xs text-muted-foreground">Total Links</div>
                </div>
                <div className="bg-background p-2 md:p-3 rounded-lg text-center">
                  <div className="text-sm md:text-lg font-bold text-green-600">67</div>
                  <div className="text-xs text-muted-foreground">DR Score</div>
                </div>
              </div>

              {/* Recent Backlinks */}
              <div>
                <div className="text-xs text-muted-foreground mb-2">Recent Backlinks</div>
                <div className="space-y-1.5">
                  {[
                    { domain: "techcrunch.com", dr: "92", type: "dofollow" },
                    { domain: "searchengineland.com", dr: "85", type: "dofollow" },
                    { domain: "moz.com", dr: "91", type: "nofollow" }
                  ].map((link, i) => (
                    <div key={i} className={`flex items-center justify-between bg-background p-2 rounded-lg ${i > 0 ? 'hidden lg:flex' : ''}`}>
                      <span className="text-xs md:text-sm font-medium truncate flex-1">{link.domain}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                          DR {link.dr}
                        </span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          link.type === 'dofollow' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {link.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Growth Chart */}
            <div className="bg-background border border-border rounded-lg p-2 order-2">
              <div className="text-xs font-medium mb-2">Link Growth</div>
              <div className="h-[120px] md:h-[180px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={backlinkGrowthData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <defs>
                      <linearGradient id="fillTotalLinks" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: '#6b7280' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: '#6b7280' }}
                      domain={[1800, 2500]}
                    />
                    <ChartTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-lg p-2 shadow-lg">
                              <div className="text-xs font-medium text-gray-700">{label}</div>
                              <div className="text-sm font-bold text-orange-600">
                                {payload[0]?.value?.toLocaleString()} links
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="totalLinks"
                      stroke="#f97316"
                      strokeWidth={2}
                      fill="url(#fillTotalLinks)"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>
          </div>
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
            className={`col-span-2 w-full h-full hidden lg:flex md:items-center ${
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
            className={`col-span-5 h-[350px] min-h-[200px] w-auto lg:col-span-3 ${
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
