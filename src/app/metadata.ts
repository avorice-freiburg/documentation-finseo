import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "AI SEO tools",
    "generative engine optimization",
    "GEO",
    "AI-powered SEO",
    "ChatGPT SEO",
    "Claude SEO",
    "AI search optimization",
    "keyword research",
    "rank tracking",
    "content generation",
    "AI article writer",
    "backlink checker",
    "on-page SEO",
    "white-label SEO",
    "agency SEO tools",
    "enterprise SEO",
    "SMB SEO",
    "AI visibility tracking",
    "search engine optimization",
    "Next.js",
    "TypeScript"
  ],
  authors: [
    {
      name: "Finseo",
      url: "https://www.finseo.ai",
    },
  ],
  creator: "Finseo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@finseo_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
