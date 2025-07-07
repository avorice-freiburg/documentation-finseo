"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { 
  TrendingUp, 
  BarChart3, 
  Eye, 
  Globe, 
  Target, 
  Bot, 
  Zap, 
  ArrowUp, 
  ArrowDown,
  Users,
  Briefcase,
  FileText,
  Shield,
  User,
  ChevronUp,
  ChevronDown,
  Settings,
  Calendar,
  Filter,
  Sparkles,
  ChartLine,
  Building2,
  Search,
  Plus,
  RefreshCw,
  EyeOff,
  Trash2,
  Info,
  SmileIcon,
  Code,
  Database,
  CreditCard,
  LogOut,
  UserCog,
  Wrench,
  Scissors
} from "lucide-react";
import Image from "next/image";
import {
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Base data that gets transformed based on active metric
const baseCompetitorData = [
  { month: "Jan", visible: { yourBrand: 128, competitor: 95 }, mentions: { yourBrand: 342, competitor: 285 }, position: { yourBrand: 42, competitor: 35 }, findex: { yourBrand: 6.8, competitor: 5.2 } },
  { month: "Feb", visible: { yourBrand: 156, competitor: 118 }, mentions: { yourBrand: 298, competitor: 312 }, position: { yourBrand: 48, competitor: 39 }, findex: { yourBrand: 7.2, competitor: 5.8 } },
  { month: "Mar", visible: { yourBrand: 134, competitor: 142 }, mentions: { yourBrand: 415, competitor: 298 }, position: { yourBrand: 45, competitor: 43 }, findex: { yourBrand: 6.9, competitor: 6.1 } },
  { month: "Apr", visible: { yourBrand: 189, competitor: 126 }, mentions: { yourBrand: 278, competitor: 356 }, position: { yourBrand: 56, competitor: 41 }, findex: { yourBrand: 8.1, competitor: 5.9 } },
  { month: "May", visible: { yourBrand: 167, competitor: 134 }, mentions: { yourBrand: 523, competitor: 289 }, position: { yourBrand: 51, competitor: 48 }, findex: { yourBrand: 7.6, competitor: 6.4 } },
  { month: "Jun", visible: { yourBrand: 203, competitor: 156 }, mentions: { yourBrand: 367, competitor: 445 }, position: { yourBrand: 63, competitor: 45 }, findex: { yourBrand: 8.7, competitor: 6.2 } },
  { month: "Jul", visible: { yourBrand: 178, competitor: 189 }, mentions: { yourBrand: 612, competitor: 378 }, position: { yourBrand: 59, competitor: 52 }, findex: { yourBrand: 8.2, competitor: 7.1 } },
  { month: "Aug", visible: { yourBrand: 234, competitor: 167 }, mentions: { yourBrand: 434, competitor: 512 }, position: { yourBrand: 68, competitor: 49 }, findex: { yourBrand: 9.3, competitor: 6.8 } },
  { month: "Sep", visible: { yourBrand: 212, competitor: 198 }, mentions: { yourBrand: 789, competitor: 423 }, position: { yourBrand: 64, competitor: 58 }, findex: { yourBrand: 8.9, competitor: 7.5 } },
  { month: "Oct", visible: { yourBrand: 267, competitor: 223 }, mentions: { yourBrand: 543, competitor: 634 }, position: { yourBrand: 73, competitor: 61 }, findex: { yourBrand: 9.8, competitor: 7.8 } },
  { month: "Nov", visible: { yourBrand: 245, competitor: 241 }, mentions: { yourBrand: 678, competitor: 567 }, position: { yourBrand: 69, competitor: 65 }, findex: { yourBrand: 9.4, competitor: 8.2 } },
  { month: "Dec", visible: { yourBrand: 298, competitor: 256 }, mentions: { yourBrand: 834, competitor: 612 }, position: { yourBrand: 81, competitor: 67 }, findex: { yourBrand: 10.5, competitor: 8.6 } },
];

// Transform data based on active metric
const getChartData = (activeMetric: 'visible' | 'mentions' | 'position' | 'findex') => {
  return baseCompetitorData.map(item => ({
    month: item.month,
    yourBrand: item[activeMetric].yourBrand,
    competitor: item[activeMetric].competitor
  }));
};

// Static metrics - no more changing values
const staticMetrics = [
  { label: "AI Mentions", value: 1247, change: "+12%" },
  { label: "Visibility Score", value: 85, change: "+8%" },
  { label: "Brand Sentiment", value: 92, change: "+5%" },
  { label: "Competitor Gap", value: 23, change: "+15%" },
];

interface Metric {
  label: string;
  value: number;
  change: string;
}

// New sidebar navigation structure
const navigationSections = [
  {
    title: "Top AI Optimizations",
    items: [
      { icon: Wrench, label: "Technical Analysis", active: false },
      { icon: Bot, label: "AI SEO Audit", active: false },
      { icon: Scissors, label: "AI Structured Data", active: false },
    ]
  },
  {
    title: "Tracking", 
    items: [
      { icon: Sparkles, label: "AI Tracking", active: true },
      { icon: Users, label: "Competitors", active: false },
    ]
  },
  {
    title: "Account",
    items: [
      { icon: UserCog, label: "Account Settings", active: false },
      { icon: CreditCard, label: "Billing", active: false },
      { icon: Building2, label: "Team Workspace", active: false },
      { icon: LogOut, label: "Logout", active: false },
    ]
  }
];

// Sample tracking prompts data - expanded list
const samplePrompts = [
  {
    id: "1",
    prompt: "What are the best SEO tools for content optimization and keyword research?",
    model: "chatgpt",
    language: "English",
    status: "visible",
    position: 15,
    change: +3,
    lastChecked: "2024-01-15",
    visible: true,
    sentiment: 85,
    intent: ["I", "C"]
  },
  {
    id: "2", 
    prompt: "List the top 10 websites for digital marketing analytics and insights",
    model: "claude",
    language: "English", 
    status: "visible",
    position: 8,
    change: +5,
    lastChecked: "2024-01-15",
    visible: true,
    sentiment: 92,
    intent: ["I", "N"]
  },
  {
    id: "3",
    prompt: "What companies provide the best content marketing automation services?",
    model: "perplexity",
    language: "English",
    status: "not-visible",
    position: null,
    change: 0,
    lastChecked: "2024-01-15", 
    visible: false,
    sentiment: null,
    intent: ["C", "T"]
  },
  {
    id: "4",
    prompt: "Best AI-powered SEO platforms for enterprise businesses in 2024",
    model: "gemini",
    language: "English",
    status: "visible",
    position: 22,
    change: -2,
    lastChecked: "2024-01-15",
    visible: true,
    sentiment: 78,
    intent: ["I", "C"]
  },
  {
    id: "5",
    prompt: "Which tools offer the most comprehensive SEO analysis and reporting?",
    model: "deepseek",
    language: "English",
    status: "visible", 
    position: 12,
    change: +8,
    lastChecked: "2024-01-15",
    visible: true,
    sentiment: 88,
    intent: ["I"]
  },
  {
    id: "6",
    prompt: "How to improve website ranking with AI-powered SEO strategies?",
    model: "chatgpt",
    language: "Spanish",
    status: "visible",
    position: 18,
    change: +2,
    lastChecked: "2024-01-15",
    visible: true,
    sentiment: 82,
    intent: ["T", "N"]
  },
];

// Helper function to get last 7 days status for demo - static pattern
const getLast7DaysStatus = (promptId: string) => {
  // Generate consistent pattern based on prompt ID for demo
  const seed = promptId.charCodeAt(0);
  
  return Array(7).fill(0).map((_, index) => {
    const value = (seed + index * 3) % 10;
    const isGain = value > 5; // ~50% of changes are gains
    return isGain ? 'gained' : 'lost';
  });
};

// Language display component - only show flag
const LanguageDisplay = ({ languageCode }: { languageCode: string }) => {
  const getFlag = (lang: string) => {
    switch (lang) {
      case "English": return "🇬🇧";
      case "Spanish": return "🇪🇸";
      case "French": return "🇫🇷";
      case "German": return "🇩🇪";
      case "Italian": return "🇮🇹";
      case "Portuguese": return "🇵🇹";
      default: return "🌐";
    }
  };
  
  return (
    <div className="flex items-center justify-center">
      <span className="text-lg">{getFlag(languageCode)}</span>
    </div>
  );
};

// Format metric values consistently
const formatMetricValue = (value: number, label: string): string => {
  if (label === "AI Mentions") {
    return value.toLocaleString();
  }
  return value.toString();
};

// Metrics data for the tabs
const metricsData = {
  visible: { value: 156, change: "+12%", increasing: true },
  mentions: { value: 2847, change: "+8%", increasing: true },
  position: { value: 15.2, change: "+5%", increasing: false }, // Lower position is better
  findex: { value: 8.7, change: "+23%", increasing: true }
};

export function AnimatedHeroDashboard() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterModel, setFilterModel] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [activeMetric, setActiveMetric] = useState<'visible' | 'mentions' | 'position' | 'findex'>('position');

  // Only start component after hydration - no model cycling needed
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter prompts based on search and filters
  const filteredPrompts = samplePrompts.filter(prompt => {
    const matchesSearch = searchQuery === "" || 
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModel = filterModel === "all" || prompt.model === filterModel;
    const matchesStatus = filterStatus === "all" || prompt.status === filterStatus;
    
    return matchesSearch && matchesModel && matchesStatus;
  });

  // Render visibility status badge
  const renderVisibilityStatus = (prompt: any) => {
    // Special case for first prompt - show gained status
    if (prompt.id === "1") {
      return (
        <div className="flex items-center rounded-full text-xs py-0.5 px-2 font-medium bg-blue-50 text-blue-700 border border-blue-100">
          <TrendingUp className="h-2.5 w-2.5 mr-1" />
          <span>Gained</span>
        </div>
      );
    }
    
    if (prompt.status === "visible") {
      return (
        <div className="flex items-center rounded-full text-xs py-0.5 px-2 font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
          <Eye className="h-2.5 w-2.5 mr-1" />
          <span>Visible</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center rounded-full text-xs py-0.5 px-2 font-medium bg-red-50 text-red-700 border border-red-100">
          <EyeOff className="h-2.5 w-2.5 mr-1" />
          <span>Not visible</span>
        </div>
      );
    }
  };

  if (!mounted) {
    // Return static version for SSR to match initial hydration
    return (
      <div className="w-full max-w-7xl mx-auto bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
        <div className="flex">
          {/* Modern Sidebar */}
          <div className="w-64 border-r border-gray-200 bg-white p-4">
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                  <img src="/findex.jpg" alt="Finseo" className="w-6 h-6 rounded-sm" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Finseo.ai</div>
                  <div className="text-xs text-gray-500">Dashboard</div>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="space-y-6">
              {navigationSections.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {section.title}
                  </h4>
                  <div className="space-y-1">
                    {section.items.map((item, index) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                          item.active 
                            ? "bg-gray-900 text-white" 
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Chart and table placeholder */}
            <div className="p-6 bg-gray-50/30 space-y-6">
              <div className="h-[400px] bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Loading chart...</div>
                </div>
              </div>
              <div className="h-[300px] bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Loading tracking table...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden relative z-20">
      <div className="flex">
        {/* Modern Sidebar - Hidden on mobile/tablet */}
        <div className="hidden lg:block w-64 border-r border-gray-200 bg-white p-4">
          <div className="space-y-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <img src="/findex.jpg" alt="Finseo" className="w-6 h-6 rounded-sm" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Finseo.ai</div>
                <div className="text-xs text-gray-500">Dashboard</div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-6">
            {navigationSections.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {section.title}
                </h4>
                <div className="space-y-1">
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 cursor-pointer ${
                        item.active 
                          ? "bg-gray-900 text-white shadow-sm" 
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + sectionIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Content - Chart and Table in single column */}
          <div className="p-0 lg:p-0 bg-gray-50/30 space-y-4 lg:space-y-6 overflow-y-auto">
            {/* Chart with Metrics Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-0"
            >
              <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
                {/* Chart Header with Metrics Tabs */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-2 lg:p-4 border-b border-gray-200 gap-4">
                  <div className="lg:flex-shrink-0">
                    <h3 className="text-lg font-semibold text-gray-900">AI Visibility Analytics</h3>
                    <p className="text-sm text-gray-600 hidden lg:block">Track your performance across AI platforms</p>
                  </div>
                  
                  {/* Metrics Tabs - Hidden on mobile */}
                  <div className="hidden lg:flex border border-gray-200 rounded-lg overflow-hidden w-full lg:w-auto">
                    <button
                      onClick={() => setActiveMetric('visible')}
                      className={`px-4 py-2 text-sm font-medium border-r border-gray-200 transition-colors ${
                        activeMetric === 'visible' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-semibold">Visible</span>
                          <div className={`flex items-center text-xs ${metricsData.visible.increasing ? 'text-green-600' : 'text-red-600'}`}>
                            {metricsData.visible.increasing ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                            <span>{metricsData.visible.change}</span>
                          </div>
                        </div>
                        <div className="text-lg font-bold">{metricsData.visible.value}</div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveMetric('mentions')}
                      className={`px-4 py-2 text-sm font-medium border-r border-gray-200 transition-colors ${
                        activeMetric === 'mentions' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-semibold">Mentions</span>
                          <div className={`flex items-center text-xs ${metricsData.mentions.increasing ? 'text-green-600' : 'text-red-600'}`}>
                            {metricsData.mentions.increasing ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                            <span>{metricsData.mentions.change}</span>
                          </div>
                        </div>
                        <div className="text-lg font-bold">{metricsData.mentions.value.toLocaleString()}</div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveMetric('position')}
                      className={`px-4 py-2 text-sm font-medium border-r border-gray-200 transition-colors ${
                        activeMetric === 'position' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-semibold">Position</span>
                          <div className={`flex items-center text-xs ${!metricsData.position.increasing ? 'text-green-600' : 'text-red-600'}`}>
                            {!metricsData.position.increasing ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                            <span>{metricsData.position.change}</span>
                          </div>
                        </div>
                        <div className="text-lg font-bold">{metricsData.position.value}%</div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveMetric('findex')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeMetric === 'findex' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-semibold">Findex</span>
                          <div className={`flex items-center text-xs ${metricsData.findex.increasing ? 'text-green-600' : 'text-red-600'}`}>
                            {metricsData.findex.increasing ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                            <span>{metricsData.findex.change}</span>
                          </div>
                        </div>
                        <div className="text-lg font-bold">{metricsData.findex.value}</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Brand Headers */}
                <div className="flex items-center justify-between mb-4 lg:mb-6 px-3 lg:px-6 pt-4 lg:pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center p-1">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">YB</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">Your Brand</div>
                      <div className="text-xs text-gray-500">85% visibility</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-400">VS</div>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-sm text-right text-gray-900">Top Competitor</div>
                      <div className="text-xs text-gray-500 text-right">70% visibility</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center p-1">
                      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">TC</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart - Responsive Height */}
                <div className="relative h-[250px] lg:h-[350px] bg-gray-50/50 rounded-lg border border-gray-100 overflow-hidden mx-3 lg:mx-6 pb-2">
                  <ResponsiveContainer width="100%" height="100%">
                    {(activeMetric === 'visible' || activeMetric === 'mentions') ? (
                      // Bar Chart for Visible and Mentions
                                             <BarChart 
                         data={getChartData(activeMetric).map(item => ({
                           ...item,
                           yourValue: item.yourBrand,
                           competitorValue: item.competitor,
                         }))} 
                         margin={{ top: 20, right: 10, left: 10, bottom: 40 }}
                      >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          interval={0}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          width={50}
                          label={{ 
                            value: activeMetric === 'visible' ? 'Count' : 'Mentions', 
                            angle: -90, 
                            position: 'insideLeft' 
                          }}
                        />
                        <ChartTooltip 
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg p-3 shadow-lg">
                                  <div className="text-xs font-medium text-gray-700 mb-2 text-center">
                                    {label} 2024
                                  </div>
                                  <div className="space-y-1">
                                    {payload.map((entry, index) => (
                                      <div key={index} className="flex items-center justify-between gap-4 min-w-[160px]">
                                        <div className="flex items-center gap-2">
                                          <div 
                                            className={`w-3 h-3 rounded-sm ${
                                              entry.dataKey === 'yourValue' 
                                                ? 'bg-green-500' 
                                                : 'bg-amber-500'
                                            }`}
                                          ></div>
                                          <span className="text-xs font-medium text-gray-600">
                                            {entry.dataKey === 'yourValue' ? 'Your Brand' : 'Competitor'}
                                          </span>
                                        </div>
                                        <div className="text-right">
                                          <div className={`text-sm font-bold ${
                                            entry.dataKey === 'yourValue' ? 'text-green-600' : 'text-amber-600'
                                          }`}>
                                            {entry.value}{activeMetric === 'visible' ? '' : ' mentions'}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                          cursor={{ fill: "rgba(0,0,0,0.1)" }}
                        />
                        <Bar
                          dataKey="yourValue"
                          fill="#10b981"
                          radius={[4, 4, 0, 0]}
                          name="Your Brand"
                        />
                        <Bar
                          dataKey="competitorValue"
                          fill="#f59e0b"
                          radius={[4, 4, 0, 0]}
                          name="Competitor"
                        />
                      </BarChart>
                    ) : (
                      // Area Chart for Position and Findex
                                             <AreaChart 
                         data={getChartData(activeMetric).map(item => ({
                           ...item,
                           yourValue: item.yourBrand,
                           competitorValue: item.competitor,
                         }))} 
                         margin={{ top: 20, right: 10, left: 10, bottom: 40 }}
                      >
                        <defs>
                          <linearGradient id="fillYourBrand" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="fillCompetitor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          interval={0}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          width={50}
                                                     domain={activeMetric === 'position' ? [30, 90] : activeMetric === 'findex' ? [0, 12] : ['auto', 'auto']}
                          label={{ 
                            value: activeMetric === 'position' ? 'Position %' : 'Findex Score', 
                            angle: -90, 
                            position: 'insideLeft' 
                          }}
                        />
                        <ChartTooltip 
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg p-3 shadow-lg">
                                  <div className="text-xs font-medium text-gray-700 mb-2 text-center">
                                    {label} 2024
                                  </div>
                                  <div className="space-y-1">
                                    {payload.map((entry, index) => (
                                      <div key={index} className="flex items-center justify-between gap-4 min-w-[160px]">
                                        <div className="flex items-center gap-2">
                                          <div 
                                            className={`w-3 h-3 rounded-full ${
                                              entry.dataKey === 'yourValue' 
                                                ? 'bg-green-500' 
                                                : 'bg-amber-500'
                                            }`}
                                          ></div>
                                          <span className="text-xs font-medium text-gray-600">
                                            {entry.dataKey === 'yourValue' ? 'Your Brand' : 'Competitor'}
                                          </span>
                                        </div>
                                        <div className="text-right">
                                          <div className={`text-sm font-bold ${
                                            entry.dataKey === 'yourValue' ? 'text-green-600' : 'text-amber-600'
                                          }`}>
                                            {activeMetric === 'position' ? `${entry.value}%` : typeof entry.value === 'number' ? entry.value.toFixed(1) : entry.value}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  {payload.length === 2 && payload[0]?.value !== undefined && payload[1]?.value !== undefined && (
                                    <div className="mt-2 pt-2 border-t border-gray-200">
                                      <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-400">Gap:</span>
                                        <span className="font-medium text-green-600">
                                          {activeMetric === 'position' 
                                            ? `+${Math.abs((payload[0].value as number) - (payload[1].value as number)).toFixed(1)}%`
                                            : `+${Math.abs((payload[0].value as number) - (payload[1].value as number)).toFixed(2)}`
                                          }
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            }
                            return null;
                          }}
                          cursor={{ stroke: '#e5e7eb', strokeWidth: 1, strokeDasharray: '3 3' }}
                        />
                        <Area
                          type="monotone"
                          dataKey="competitorValue"
                          stroke="#f59e0b"
                          strokeWidth={2}
                          fill="url(#fillCompetitor)"
                          name="Competitor"
                        />
                        <Area
                          type="monotone"
                          dataKey="yourValue"
                          stroke="#10b981"
                          strokeWidth={2}
                          fill="url(#fillYourBrand)"
                          name="Your Brand"
                        />
                      </AreaChart>
                    )}
                  </ResponsiveContainer>
                  
                  {/* Chart Legend */}
                  <div className="flex justify-center gap-4 lg:gap-6 -mt-6 px-3 lg:px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <span className="text-xs font-medium text-gray-600">Your Brand</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                      <span className="text-xs font-medium text-gray-600">Top Competitor</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Tracking Prompts Table - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="hidden lg:block space-y-6"
            >
              {/* Tracking Table */}
              <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50 border-b border-gray-200">
                      <TableHead className="font-semibold text-gray-900 min-w-[200px] lg:min-w-[300px]">Prompt</TableHead>
                      <TableHead className="font-semibold text-gray-900 min-w-[80px]">Model</TableHead>
                      <TableHead className="font-semibold text-gray-900 min-w-[60px]">Language</TableHead>
                      <TableHead className="font-semibold text-gray-900 min-w-[60px]">Intent</TableHead>
                      <TableHead className="font-semibold text-gray-900 w-24 lg:w-32">Status</TableHead>
                      <TableHead className="font-semibold text-gray-900 min-w-[120px]">Position</TableHead>
                      <TableHead className="font-semibold text-gray-900 text-center min-w-[100px]">Last 7 Days</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPrompts.map((prompt) => (
                      <TableRow key={prompt.id} className="hover:bg-gray-50/50 border-b border-gray-100">
                        <TableCell className="max-w-[300px]">
                          <div className="truncate text-gray-900" title={prompt.prompt}>
                            {prompt.prompt}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {prompt.model === 'claude' ? (
                              <>
                                <img src="/claude.png" alt="Claude" className="h-5 w-5" />
                                <span className="text-sm text-gray-900">Claude</span>
                              </>
                            ) : prompt.model === 'perplexity' ? (
                              <>
                                <img src="/perplexity.png" alt="Perplexity" className="h-5 w-5" />
                                <span className="text-sm text-gray-900">Perplexity</span>
                              </>
                            ) : prompt.model === 'gemini' ? (
                              <>
                                <img src="/gemini.png" alt="Gemini" className="h-5 w-5" />
                                <span className="text-sm text-gray-900">Gemini</span>
                              </>
                            ) : prompt.model === 'deepseek' ? (
                              <>
                                <img src="/deepseek.png" alt="DeepSeek" className="h-5 w-5" />
                                <span className="text-sm text-gray-900">DeepSeek</span>
                              </>
                            ) : (
                              <>
                                <img src="/chatgpt.png" alt="ChatGPT" className="h-5 w-5" />
                                <span className="text-sm text-gray-900">ChatGPT</span>
                              </>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <LanguageDisplay languageCode={prompt.language} />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {prompt.intent.length > 0 ? (
                              <div className="flex gap-1">
                                {prompt.intent.map((intent, index) => (
                                  <div 
                                    key={index}
                                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-semibold ${
                                      intent === 'I' ? 'bg-blue-100 text-blue-600' :
                                      intent === 'N' ? 'bg-purple-100 text-purple-600' :
                                      intent === 'T' ? 'bg-green-100 text-green-600' :
                                      intent === 'C' ? 'bg-amber-100 text-amber-600' :
                                      'bg-gray-100 text-gray-600'
                                    }`}
                                    title={
                                      intent === 'I' ? 'Informational' :
                                      intent === 'N' ? 'Navigational' :
                                      intent === 'T' ? 'Transactional' :
                                      intent === 'C' ? 'Commercial' : intent
                                    }
                                  >
                                    {intent}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-slate-400 text-xs">-</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {renderVisibilityStatus(prompt)}
                        </TableCell>
                        <TableCell>
                          {prompt.visible && prompt.position ? (
                            <div className="flex flex-col w-full">
                              <div className="flex items-center gap-2">
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative">
                                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 w-full" />
                                  <div 
                                    className="absolute inset-y-0 w-1 bg-white border border-slate-800"
                                    style={{ left: `${prompt.position}%` }}
                                  />
                                </div>
                                <div className="flex items-center gap-0.5 whitespace-nowrap">
                                  <span className="text-xs font-medium text-gray-900">{prompt.position}%</span>
                                  <span className={`text-xs ${
                                    prompt.change > 0 ? 'text-green-600' : 
                                    prompt.change < 0 ? 'text-red-600' : 'text-gray-500'
                                  }`}>
                                    ({prompt.change > 0 ? '+' : ''}{prompt.change})
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <span className="text-slate-500 text-sm">Not visible</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1 justify-center">
                            {getLast7DaysStatus(prompt.id).map((status, index) => (
                              <div 
                                key={index}
                                className={`w-3 h-3 rounded ${
                                  status === 'gained' ? 'bg-green-500' : 'bg-red-500'
                                }`}
                                title={`${index === 0 ? 'Today' : `${index} days ago`}: ${
                                  status === 'gained' ? 'Position gained' : 'Position lost'
                                }`}
                              />
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </div>

                {filteredPrompts.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 lg:py-12 px-4">
                    <Search className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No prompts found</h3>
                    <p className="text-gray-600 text-center mb-4">
                      {searchQuery || filterModel !== "all" || filterStatus !== "all" 
                        ? "Try adjusting your search or filters" 
                        : "Add your first tracking prompt to get started"}
                    </p>
                    <Button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Prompt
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 