import { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

export const pageMetadata: Record<string, PageMetadata> = {
  // Main Pages
  home: {
    title: "Finseo - AI-Powered SEO Tools for Next-Gen Search Optimization",
    description: "Optimize your content for Google, ChatGPT, Claude & AI platforms. Advanced keyword research, rank tracking, content generation & SEO tools. Start free today!",
    keywords: ["AI SEO tools", "generative engine optimization", "ChatGPT SEO", "AI content optimization", "keyword research", "rank tracking"]
  },
  
  pricing: {
    title: "Finseo Pricing - Affordable AI SEO Tools & Plans",
    description: "Choose the perfect Finseo plan for your business. From $29/month with AI content generation, keyword tracking, and multi-platform optimization. Start free trial!",
    keywords: ["SEO pricing", "AI SEO plans", "affordable SEO tools", "SEO software pricing", "content generation pricing"]
  },

  about: {
    title: "About Finseo - The Future of AI-Powered SEO",
    description: "Learn about Finseo's mission to revolutionize SEO with AI. Discover how we're helping businesses optimize for both traditional and generative search engines.",
    keywords: ["about Finseo", "AI SEO company", "SEO innovation", "generative search optimization", "SEO technology"]
  },

  // Company Pages
  "for-agencies": {
    title: "Finseo for Agencies - White-Label AI SEO Tools & Reports",
    description: "Scale your agency with Finseo's white-label SEO tools. Multi-client dashboards, automated reports, and AI-powered optimization for agencies. Get started today!",
    keywords: ["SEO agency tools", "white-label SEO", "agency SEO software", "multi-client SEO", "SEO agency dashboard"]
  },

  "for-enterprise": {
    title: "Finseo for Enterprise - Generative Engine Optimization (GEO)",
    description: "Enterprise-grade generative engine optimization (GEO) for large organizations. Advanced AI SEO tools, custom integrations, and dedicated support. Contact us!",
    keywords: ["enterprise SEO", "generative engine optimization", "GEO enterprise", "large scale SEO", "enterprise AI tools"]
  },

  "for-smbs": {
    title: "Finseo for Small & Medium Businesses - Affordable AI SEO",
    description: "Grow your SMB with Finseo's affordable AI SEO tools. Easy-to-use keyword research, content optimization, and rank tracking designed for small businesses.",
    keywords: ["SMB SEO tools", "small business SEO", "affordable SEO software", "SMB marketing tools", "small business optimization"]
  },

  "for-entrepreneurs": {
    title: "Finseo for Entrepreneurs - Bootstrap Your SEO Success",
    description: "Perfect SEO tools for entrepreneurs and startups. AI-powered content creation, keyword research, and optimization tools to grow your business from day one.",
    keywords: ["entrepreneur SEO", "startup SEO tools", "bootstrap SEO", "entrepreneur marketing", "startup optimization"]
  },

  careers: {
    title: "Careers at Finseo - Join the Future of AI SEO",
    description: "Join Finseo's innovative team building the future of AI-powered SEO. Explore career opportunities in AI, machine learning, and search optimization.",
    keywords: ["Finseo careers", "AI SEO jobs", "machine learning careers", "SEO company jobs", "tech careers"]
  },

  // Feature Pages
  "ai-visibility-tracking": {
    title: "AI Visibility Tracking - Monitor Brand Rankings Across ChatGPT, Claude & AI Platforms",
    description: "Track your brand mentions and visibility across ChatGPT, Claude, Gemini, and Perplexity. Monitor AI search results, analyze competitor performance, track sentiment, and understand search intent behind every mention. Real-time AI platform monitoring with competitive analysis.",
    keywords: ["AI visibility tracking", "AI rank tracking", "ChatGPT ranking", "AI platform monitoring", "generative search tracking", "brand mention tracking", "AI search monitoring", "Claude visibility", "Gemini tracking", "Perplexity monitoring", "AI sentiment analysis", "competitor AI analysis"]
  },

  "ai-article-writer": {
    title: "AI Article Writer - Generate SEO-Optimized Content Instantly",
    description: "Create high-quality, SEO-optimized articles with our AI article writer. Generate content for blogs, websites, and marketing campaigns in minutes.",
    keywords: ["AI article writer", "AI content generator", "SEO content creation", "automated writing", "AI blog writer"]
  },

  "keyword-research": {
    title: "AI Keyword Research Tool - Find High-Impact Keywords",
    description: "Discover profitable keywords with our AI-powered keyword research tool. Analyze search volume, competition, and AI platform opportunities across 115+ languages.",
    keywords: ["keyword research tool", "AI keyword research", "SEO keyword finder", "keyword analysis", "search volume tool"]
  },

  "backlink-checker": {
    title: "Backlink Checker - Analyze Your Link Profile & Competitors",
    description: "Comprehensive backlink analysis tool. Check your backlinks, analyze competitors, find link opportunities, and monitor your link profile health.",
    keywords: ["backlink checker", "link analysis tool", "competitor backlinks", "link building tool", "backlink monitor"]
  },

  "onpage-checker": {
    title: "On-Page SEO Checker - Complete Website SEO Analysis",
    description: "Comprehensive on-page SEO analysis tool. Check meta tags, content optimization, technical SEO, and get actionable recommendations to improve rankings.",
    keywords: ["on-page SEO checker", "SEO analysis tool", "website SEO audit", "technical SEO checker", "SEO optimization tool"]
  },

  "accessibility-checker": {
    title: "Website Accessibility Checker - WCAG Compliance Tool",
    description: "Ensure your website meets accessibility standards with our comprehensive checker. WCAG compliance analysis, automated testing, and detailed reports.",
    keywords: ["accessibility checker", "WCAG compliance", "website accessibility", "accessibility audit", "ADA compliance tool"]
  },

  // Chart Generator Pages
  "ai-chart-generator": {
    title: "AI Chart Generator - Create Beautiful Charts & Visualizations",
    description: "Generate stunning charts and data visualizations with AI. Create pie charts, line graphs, bar charts, and more from simple text descriptions. Free to use!",
    keywords: ["AI chart generator", "data visualization tool", "chart maker", "graph generator", "AI data charts"]
  },

  "pie-chart-generator": {
    title: "AI Pie Chart Generator - Create Pie Charts Instantly",
    description: "Generate beautiful pie charts with AI. Simply describe your data and create professional pie charts for presentations, reports, and websites. Free tool!",
    keywords: ["pie chart generator", "AI pie chart", "pie chart maker", "data visualization", "chart creator"]
  },

  "line-chart-generator": {
    title: "AI Line Chart Generator - Create Line Graphs Instantly",
    description: "Create professional line charts and graphs with AI. Perfect for showing trends, time series data, and comparisons. Generate line charts from text descriptions.",
    keywords: ["line chart generator", "AI line graph", "trend chart maker", "time series visualization", "line graph creator"]
  },

  "pareto-chart-generator": {
    title: "AI Pareto Chart Generator - 80/20 Analysis Charts",
    description: "Generate Pareto charts for 80/20 analysis with AI. Identify the most important factors in your data with professional Pareto diagrams and visualizations.",
    keywords: ["Pareto chart generator", "80/20 analysis", "Pareto diagram", "quality analysis chart", "AI Pareto chart"]
  },

  // Alternative Pages
  "ubersuggest-alternative": {
    title: "Best Ubersuggest Alternative - Finseo AI SEO Tools",
    description: "Looking for an Ubersuggest alternative? Finseo offers advanced AI-powered keyword research, content optimization, and rank tracking at competitive prices.",
    keywords: ["Ubersuggest alternative", "keyword research alternative", "SEO tool alternative", "Ubersuggest competitor", "better than Ubersuggest"]
  },

  "semrush-alternative": {
    title: "Best SEMrush Alternative - Affordable AI SEO Platform",
    description: "Discover a powerful SEMrush alternative with Finseo. Get advanced SEO features, AI-powered insights, and better pricing for your digital marketing needs.",
    keywords: ["SEMrush alternative", "SEO platform alternative", "digital marketing tools", "SEMrush competitor", "affordable SEO software"]
  },

  "peec-ai-alternative": {
    title: "Best Peec AI Alternative - Advanced AI SEO Optimization",
    description: "Find a superior Peec AI alternative with Finseo. Advanced generative engine optimization, AI content creation, and comprehensive SEO tools.",
    keywords: ["Peec AI alternative", "AI SEO alternative", "generative engine optimization", "AI content optimization", "GEO tools"]
  },

  "otterly-ai-alternative": {
    title: "Best Otterly AI Alternative - AI-Powered SEO Tools",
    description: "Discover a powerful Otterly AI alternative. Finseo provides advanced AI SEO tools, content optimization, and rank tracking for better search visibility.",
    keywords: ["Otterly AI alternative", "AI SEO tools", "search optimization", "AI marketing tools", "content optimization"]
  },

  // Integration Pages
  "integrations/wordpress": {
    title: "WordPress SEO Integration - Finseo Plugin & Tools",
    description: "Seamlessly integrate Finseo with WordPress. Optimize your WordPress site with AI-powered SEO tools, content generation, and automated optimization.",
    keywords: ["WordPress SEO", "WordPress integration", "WordPress SEO plugin", "WordPress optimization", "WordPress AI tools"]
  },

  "integrations/webflow": {
    title: "Webflow SEO Integration - Finseo CMS Publishing",
    description: "Connect Finseo with Webflow for seamless content publishing and SEO optimization. Automate your Webflow SEO workflow with AI-powered tools.",
    keywords: ["Webflow SEO", "Webflow integration", "Webflow CMS", "Webflow optimization", "Webflow publishing"]
  },

  // Resource Pages
  blog: {
    title: "Finseo Blog - AI SEO Insights & Digital Marketing Tips",
    description: "Stay updated with the latest AI SEO trends, digital marketing strategies, and search optimization insights. Expert tips for better online visibility.",
    keywords: ["SEO blog", "AI SEO insights", "digital marketing blog", "search optimization tips", "SEO strategies"]
  },

  support: {
    title: "Finseo Support - Help Center & Customer Service",
    description: "Get help with Finseo's AI SEO tools. Access our knowledge base, tutorials, and contact our support team for assistance with your SEO optimization.",
    keywords: ["Finseo support", "SEO help", "customer service", "SEO tutorials", "help center"]
  },

  "seo-ai-affiliate-program": {
    title: "Finseo Affiliate Program - Earn 30% Commission on AI SEO Tools",
    description: "Join Finseo's affiliate program and earn 25% commission. Promote the best AI SEO tools and generate passive income with our affiliate program.",
    keywords: ["SEO affiliate program", "AI tools affiliate", "Finseo affiliate", "SEO commission", "affiliate marketing"]
  },

  // Legal Pages
  "terms-conditions": {
    title: "Terms & Conditions - Finseo AI SEO Platform",
    description: "Read Finseo's terms and conditions for using our AI-powered SEO tools and services. Legal terms, usage policies, and service agreements.",
    keywords: ["terms and conditions", "Finseo terms", "service agreement", "usage policy", "legal terms"]
  },

  "privacy-policy": {
    title: "Privacy Policy - Finseo Data Protection & Security",
    description: "Learn how Finseo protects your data and privacy. Our comprehensive privacy policy covers data collection, usage, and security measures.",
    keywords: ["privacy policy", "data protection", "Finseo privacy", "data security", "GDPR compliance"]
  },

  imprint: {
    title: "Imprint - Finseo Legal Information & Contact Details",
    description: "Legal information and contact details for Finseo. Company information, registered address, and legal compliance details.",
    keywords: ["imprint", "legal information", "company details", "contact information", "legal compliance"]
  },

  // Utility Pages
  "indexnow-submit": {
    title: "IndexNow Submit Tool - Instant Search Engine Indexing",
    description: "Submit your URLs to search engines instantly with IndexNow. Fast indexing for Bing, Yandex, and other search engines. Free IndexNow submission tool.",
    keywords: ["IndexNow", "instant indexing", "search engine submission", "URL indexing", "IndexNow tool"]
  }
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pageKey: string): PageMetadata {
  return pageMetadata[pageKey] || pageMetadata.home;
}

// Helper function to generate full metadata object
export function generateMetadata(pageKey: string, customMetadata?: Partial<PageMetadata>): Metadata {
  const baseMetadata = getPageMetadata(pageKey);
  const metadata = { ...baseMetadata, ...customMetadata };
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      siteName: 'Finseo',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
} 