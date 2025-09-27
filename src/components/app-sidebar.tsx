"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronDown,
  Command,
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/",
        },
        {
          title: "Synonyms",
          url: "/getting-started/synonyms",
        },
        {
          title: "Models",
          url: "/getting-started/models",
        },
        {
          title: "Prompts",
          url: "/getting-started/prompts",
        },
        {
          title: "Competitors",
          url: "/getting-started/competitors",
        },
        {
          title: "Sources",
          url: "/getting-started/sources",
        },
        {
          title: "Products",
          url: "/getting-started/products",
        },
      ],
    },
    {
      title: "Metrics",
      url: "/metrics",
      icon: PieChart,
      items: [
        {
          title: "Overview",
          url: "/metrics",
        },
        {
          title: "Visibility",
          url: "/metrics/visibility",
        },
        {
          title: "Sentiment",
          url: "/metrics/sentiment",
        },
        {
          title: "Position",
          url: "/metrics/position",
        },
        {
          title: "Mentions",
          url: "/metrics/mentions",
        },
        {
          title: "Synonyms",
          url: "/metrics/synonyms",
        },
      ],
    },
    {
        title: "Bot Traffic",
        url: "/bot-analytics",
        icon: Bot,
        items: [
          {
            title: "Overview",
            url: "/bot-analytics",
          },
          {
            title: "SiteGround",
            url: "/bot-analytics/siteground",
          },
          {
            title: "Bluehost",
            url: "/bot-analytics/bluehost",
          },
          {
            title: "GoDaddy",
            url: "/bot-analytics/godaddy",
          },
          {
            title: "Hostinger",
            url: "/bot-analytics/hostinger",
          },
          {
            title: "Raidboxes",
            url: "/bot-analytics/raidboxes",
          },
          {
            title: "STRATO",
            url: "/bot-analytics/strato",
          },
          {
            title: "Cloudflare",
            url: "/bot-analytics/cloudflare",
          },
          {
            title: "Fastly",
            url: "/bot-analytics/fastly",
          },
          {
            title: "Shopify",
            url: "/bot-analytics/shopify",
          },
          {
            title: "Webflow",
            url: "/bot-analytics/webflow",
          },
          {
            title: "cPanel",
            url: "/bot-analytics/cpanel",
          },
          {
            title: "Plesk",
            url: "/bot-analytics/plesk",
          },
        ],
    },
    {
      title: "Human Traffic",
      url: "/human-traffic",
      icon: Users,
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "https://app.finseo.ai",
      icon: PieChart,
    },
    {
      name: "Website",
      url: "https://www.finseo.ai",
      icon: Frame,
    },
    {
      name: "Contact",
      url: "https://www.finseo.ai/contact",
      icon: AudioWaveform,
    },
  ],
}

export function AppSidebar({ className }: { className?: string }) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = React.useState<string[]>(() => {
    // Auto-expand sections that contain the current page
    return data.navMain
      .filter(item => 
        item.items?.some(subItem => pathname === subItem.url) || pathname === item.url
      )
      .map(item => item.title)
  })

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }
  
  return (
    <div className={cn("flex flex-col h-full py-4", className)}>
      {/* Platform section */}
      <div className="mb-2 px-4">
        <h4 className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Platform</h4>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        {data.navMain.map((item) => {
          const Icon = item.icon
          const isExpanded = expandedSections.includes(item.title)
          const isActive = pathname === item.url
          const hasActiveChild = item.items?.some(subItem => pathname === subItem.url)
          
          // If item has no sub-items, render as a link
          if (!item.items) {
            return (
              <div key={item.title} className="mb-1">
                <Link
                  href={item.url}
                  className={cn(
                    "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium transition-all",
                    "hover:bg-accent",
                    isActive && "text-foreground",
                    !isActive && "text-muted-foreground"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </div>
                </Link>
              </div>
            )
          }
          
          return (
            <div key={item.title} className="mb-1">
              <button
                onClick={() => item.items && toggleSection(item.title)}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium transition-all",
                  "hover:bg-accent",
                  (isActive || hasActiveChild) && "text-foreground",
                  !(isActive || hasActiveChild) && "text-muted-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {item.title}
                </div>
                {item.items && (
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                  />
                )}
              </button>
              
              {item.items && isExpanded && (
                <div className="mt-1 space-y-0.5 relative">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-border/50" />
                  {item.items.map((subItem) => {
                    const isSubActive = pathname === subItem.url
                    return (
                      <Link
                        key={subItem.title}
                        href={subItem.url}
                        className={cn(
                          "block rounded-md ml-6 px-2 py-1.5 text-sm transition-all relative",
                          "hover:bg-accent",
                          isSubActive 
                            ? "text-foreground font-medium" 
                            : "text-muted-foreground"
                        )}
                      >
                        {isSubActive && (
                          <div className="absolute -left-[15px] top-0 bottom-0 w-0.5 bg-secondary rounded-full" />
                        )}
                        {subItem.title}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Projects section */}
      <div className="mt-auto border-t pt-4 px-2">
        <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Application</h4>
        <div className="space-y-1">
          {data.projects.map((project) => {
            const Icon = project.icon
            return (
              <Link
                key={project.name}
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all",
                  "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {project.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
