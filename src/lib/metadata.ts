import { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

export const pageMetadata: Record<string, PageMetadata> = {
  // Documentation Home
  home: {
    title: "Finseo Documentation - AI Visibility Tracking Guide",
    description: "Complete guide to tracking and optimizing your visibility across AI-powered search platforms. Learn how to monitor ChatGPT, Claude, Perplexity, and more with Finseo's AI analytics.",
    keywords: ["Finseo documentation", "AI visibility tracking", "ChatGPT analytics", "AI search monitoring", "bot analytics guide", "AI metrics tracking"]
  },
  
  // Getting Started Pages
  "getting-started-synonyms": {
    title: "Brand Synonyms Setup - Finseo Documentation",
    description: "Learn how to configure brand name variations and synonyms in Finseo to ensure comprehensive tracking across all AI visibility metrics.",
    keywords: ["brand synonyms", "Finseo setup", "brand variations", "AI tracking configuration", "synonym setup"]
  },
  
  "getting-started-models": {
    title: "AI Models Configuration - Finseo Documentation",
    description: "Configure which AI models to track in Finseo. Monitor ChatGPT, Claude, Gemini, Perplexity, and other AI platforms for brand visibility.",
    keywords: ["AI models", "ChatGPT tracking", "Claude monitoring", "Perplexity analytics", "AI platform selection"]
  },
  
  "getting-started-prompts": {
    title: "Prompt Research & Setup - Finseo Documentation",
    description: "Create effective AI search queries and prompts to track your brand visibility. Learn best practices for prompt optimization in Finseo.",
    keywords: ["prompt research", "AI search queries", "prompt optimization", "search intent tracking", "query configuration"]
  },
  
  "getting-started-competitors": {
    title: "Competitor Tracking Setup - Finseo Documentation",
    description: "Monitor competitive positioning in AI search results. Learn how to track competitors and analyze comparative brand performance.",
    keywords: ["competitor tracking", "competitive analysis", "AI competitor monitoring", "brand comparison", "competitive positioning"]
  },
  
  "getting-started-sources": {
    title: "Source Tracking Configuration - Finseo Documentation",
    description: "Monitor which sources AI platforms cite when mentioning your brand. Track citation patterns and source attribution.",
    keywords: ["source tracking", "citation monitoring", "AI sources", "content attribution", "reference tracking"]
  },
  
  "getting-started-products": {
    title: "Product Tracking Setup - Finseo Documentation",
    description: "Configure product-level tracking to monitor how AI platforms mention and recommend your products and services.",
    keywords: ["product tracking", "product mentions", "AI recommendations", "product visibility", "service tracking"]
  },
  
  // Metrics Pages
  "metrics": {
    title: "AI Metrics Overview - Finseo Documentation",
    description: "Comprehensive guide to Finseo's AI visibility metrics including sentiment, position, mentions, and visibility tracking across AI platforms.",
    keywords: ["AI metrics", "visibility tracking", "brand analytics", "AI performance metrics", "tracking dashboard"]
  },
  
  "metrics-sentiment": {
    title: "Sentiment Analysis - Finseo Documentation",
    description: "Track sentiment analysis of AI responses about your brand. Monitor whether AI platforms present your brand positively or negatively.",
    keywords: ["sentiment analysis", "brand sentiment", "AI sentiment tracking", "positive mentions", "negative feedback"]
  },
  
  "metrics-visibility": {
    title: "Visibility Tracking - Finseo Documentation",
    description: "Monitor your overall visibility across AI platforms. Track how often and how prominently your brand appears in AI responses.",
    keywords: ["visibility tracking", "brand visibility", "AI presence", "mention frequency", "visibility metrics"]
  },
  
  "metrics-position": {
    title: "Position Tracking - Finseo Documentation",
    description: "Track where your brand ranks in AI-generated lists and recommendations. Monitor competitive positioning across AI platforms.",
    keywords: ["position tracking", "ranking analysis", "AI rankings", "list position", "recommendation tracking"]
  },
  
  "metrics-mentions": {
    title: "Mentions Tracking - Finseo Documentation",
    description: "Track and analyze brand mentions across AI platforms. Monitor mention frequency, context, and patterns in AI responses.",
    keywords: ["mention tracking", "brand mentions", "AI citations", "mention analysis", "reference tracking"]
  },
  
  "metrics-synonyms": {
    title: "Synonym Performance Metrics - Finseo Documentation",
    description: "Analyze which brand synonyms and variations are most frequently used by AI platforms in their responses.",
    keywords: ["synonym tracking", "brand variations", "name usage", "synonym performance", "variation analytics"]
  },
  
  // Bot Analytics Pages
  "bot-analytics": {
    title: "Bot Traffic Analytics - Finseo Documentation",
    description: "Monitor AI crawler and bot visits to your website. Track ChatGPT, Claude, Perplexity, and other AI bot traffic patterns.",
    keywords: ["bot analytics", "crawler tracking", "AI bot traffic", "website crawling", "bot monitoring"]
  },
  
  "bot-analytics-cloudflare": {
    title: "Cloudflare Bot Analytics Setup - Finseo Documentation",
    description: "Configure AI bot tracking for Cloudflare-hosted websites. Monitor AI crawler activity through Cloudflare integration.",
    keywords: ["Cloudflare setup", "bot tracking Cloudflare", "Cloudflare integration", "crawler monitoring"]
  },
  
  "bot-analytics-shopify": {
    title: "Shopify Bot Analytics Setup - Finseo Documentation",
    description: "Track AI bot visits on your Shopify store. Configure bot analytics for e-commerce AI visibility monitoring.",
    keywords: ["Shopify bot tracking", "Shopify analytics", "e-commerce bot monitoring", "Shopify integration"]
  },
  
  "bot-analytics-webflow": {
    title: "Webflow Bot Analytics Setup - Finseo Documentation",
    description: "Set up AI bot tracking for Webflow websites. Monitor AI crawler activity on your Webflow site.",
    keywords: ["Webflow bot tracking", "Webflow integration", "Webflow analytics", "bot monitoring Webflow"]
  },
  
  "bot-analytics-cpanel": {
    title: "cPanel Bot Analytics Setup - Finseo Documentation",
    description: "Configure AI bot tracking on cPanel-hosted websites. Monitor AI crawler logs and traffic patterns.",
    keywords: ["cPanel bot tracking", "cPanel setup", "server log analysis", "cPanel integration"]
  },
  
  "bot-analytics-plesk": {
    title: "Plesk Bot Analytics Setup - Finseo Documentation",
    description: "Set up AI bot monitoring for Plesk-hosted websites. Track AI crawler activity through Plesk logs.",
    keywords: ["Plesk bot tracking", "Plesk integration", "Plesk analytics", "bot monitoring Plesk"]
  },
  
  "bot-analytics-bluehost": {
    title: "Bluehost Bot Analytics Setup - Finseo Documentation",
    description: "Configure AI bot tracking for Bluehost-hosted websites. Monitor AI crawler visits on your Bluehost site.",
    keywords: ["Bluehost bot tracking", "Bluehost setup", "Bluehost integration", "bot monitoring"]
  },
  
  "bot-analytics-godaddy": {
    title: "GoDaddy Bot Analytics Setup - Finseo Documentation",
    description: "Set up AI bot tracking for GoDaddy-hosted websites. Monitor AI crawler activity on your GoDaddy site.",
    keywords: ["GoDaddy bot tracking", "GoDaddy integration", "GoDaddy analytics", "bot monitoring"]
  },
  
  "bot-analytics-hostinger": {
    title: "Hostinger Bot Analytics Setup - Finseo Documentation",
    description: "Configure AI bot tracking for Hostinger-hosted websites. Track AI crawler visits and patterns.",
    keywords: ["Hostinger bot tracking", "Hostinger setup", "Hostinger integration", "bot monitoring"]
  },
  
  "bot-analytics-siteground": {
    title: "SiteGround Bot Analytics Setup - Finseo Documentation",
    description: "Set up AI bot monitoring for SiteGround-hosted websites. Track AI crawler activity through SiteGround.",
    keywords: ["SiteGround bot tracking", "SiteGround integration", "SiteGround analytics", "bot monitoring"]
  },
  
  "bot-analytics-raidboxes": {
    title: "Raidboxes Bot Analytics Setup - Finseo Documentation",
    description: "Configure AI bot tracking for Raidboxes WordPress hosting. Monitor AI crawler visits on your WordPress site.",
    keywords: ["Raidboxes bot tracking", "Raidboxes WordPress", "WordPress bot monitoring", "Raidboxes integration"]
  },
  
  "bot-analytics-strato": {
    title: "Strato Bot Analytics Setup - Finseo Documentation",
    description: "Set up AI bot tracking for Strato-hosted websites. Monitor AI crawler activity on your Strato site.",
    keywords: ["Strato bot tracking", "Strato integration", "Strato analytics", "bot monitoring Strato"]
  },
  
  "bot-analytics-fastly": {
    title: "Fastly Bot Analytics Setup - Finseo Documentation",
    description: "Configure AI bot tracking for Fastly CDN. Monitor AI crawler activity through Fastly edge logs.",
    keywords: ["Fastly bot tracking", "Fastly CDN", "CDN bot monitoring", "Fastly integration"]
  },
  
  // Human Traffic
  "human-traffic": {
    title: "Human Traffic Analytics - Finseo Documentation",
    description: "Analyze real user visits from AI-powered search referrals. Track human traffic from ChatGPT, Perplexity, and AI search platforms.",
    keywords: ["human traffic", "AI referrals", "user visits", "traffic analytics", "AI search traffic"]
  },
  
  // Prompt Research
  "prompt-research": {
    title: "Prompt Research Tools - Finseo Documentation",
    description: "Discover and analyze effective prompts for AI visibility. Research what queries drive AI mentions of your brand.",
    keywords: ["prompt research", "query analysis", "search intent", "prompt discovery", "AI queries"]
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

  "keyword-research": {
    title: "AI Keyword Research Tool - Find High-Impact Keywords",
    description: "Discover profitable keywords with our AI-powered keyword research tool. Analyze search volume, competition, and AI platform opportunities across 115+ languages.",
    keywords: ["keyword research tool", "AI keyword research", "SEO keyword finder", "keyword analysis", "search volume tool"]
  },


  "onpage-checker": {
    title: "On-Page SEO Checker - Complete Website SEO Analysis",
    description: "Comprehensive on-page SEO analysis tool. Check meta tags, content optimization, technical SEO, and get actionable recommendations to improve rankings.",
    keywords: ["on-page SEO checker", "SEO analysis tool", "website SEO audit", "technical SEO checker", "SEO optimization tool"]
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