"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"

// VisuallyHidden component for accessibility
const VisuallyHidden = ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    {...props}
    style={{
      position: 'absolute',
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    }}
  >
    {children}
  </span>
)

// Define all searchable pages
const allPages = [
  // Getting Started
  { title: "Introduction", href: "/", category: "Getting Started" },
  { title: "Synonyms", href: "/getting-started/synonyms", category: "Getting Started" },
  { title: "Models", href: "/getting-started/models", category: "Getting Started" },
  { title: "Prompts", href: "/getting-started/prompts", category: "Getting Started" },
  { title: "Competitors", href: "/getting-started/competitors", category: "Getting Started" },
  { title: "Sources", href: "/getting-started/sources", category: "Getting Started" },
  { title: "Products", href: "/getting-started/products", category: "Getting Started" },
  
  // Metrics
  { title: "Metrics Overview", href: "/metrics", category: "Metrics" },
  { title: "Sentiment Analysis", href: "/metrics/sentiment", category: "Metrics" },
  { title: "Visibility Tracking", href: "/metrics/visibility", category: "Metrics" },
  { title: "Position Tracking", href: "/metrics/position", category: "Metrics" },
  { title: "Mentions & Citations", href: "/metrics/mentions", category: "Metrics" },
  
  // Bot Traffic
  { title: "Bot Traffic Overview", href: "/bot-analytics", category: "Bot Traffic" },
  { title: "SiteGround", href: "/bot-analytics/siteground", category: "Bot Traffic" },
  { title: "Bluehost", href: "/bot-analytics/bluehost", category: "Bot Traffic" },
  { title: "GoDaddy", href: "/bot-analytics/godaddy", category: "Bot Traffic" },
  { title: "Hostinger", href: "/bot-analytics/hostinger", category: "Bot Traffic" },
  { title: "Raidboxes", href: "/bot-analytics/raidboxes", category: "Bot Traffic" },
  { title: "STRATO", href: "/bot-analytics/strato", category: "Bot Traffic" },
  { title: "Cloudflare", href: "/bot-analytics/cloudflare", category: "Bot Traffic" },
  { title: "Fastly", href: "/bot-analytics/fastly", category: "Bot Traffic" },
  { title: "Shopify", href: "/bot-analytics/shopify", category: "Bot Traffic" },
  { title: "Webflow", href: "/bot-analytics/webflow", category: "Bot Traffic" },
  { title: "cPanel", href: "/bot-analytics/cpanel", category: "Bot Traffic" },
  { title: "Plesk", href: "/bot-analytics/plesk", category: "Bot Traffic" },
  
  // Human Traffic
  { title: "Human Traffic Analytics", href: "/human-traffic", category: "Analytics" },
]

const recentPages = [
  { title: "Bot Traffic Overview", href: "/bot-analytics" },
  { title: "Sentiment Analysis", href: "/metrics/sentiment" },
  { title: "Human Traffic Analytics", href: "/human-traffic" },
  { title: "Cloudflare", href: "/bot-analytics/cloudflare" },
]

const popularPages = [
  { title: "Getting Started", href: "/" },
  { title: "Bot Traffic Overview", href: "/bot-analytics" },
  { title: "Visibility Tracking", href: "/metrics/visibility" },
  { title: "SiteGround", href: "/bot-analytics/siteground" },
  { title: "Human Traffic Analytics", href: "/human-traffic" },
]

export function SearchDialog() {
  const [open, setOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  const filteredPages = React.useMemo(() => {
    if (!searchValue) return []
    
    const searchLower = searchValue.toLowerCase()
    return allPages.filter(page => 
      page.title.toLowerCase().includes(searchLower) ||
      page.category.toLowerCase().includes(searchLower)
    )
  }, [searchValue])

  const handlePageClick = (href: string) => {
    setOpen(false)
    setSearchValue("")
    router.push(href)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-6 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground w-full max-w-md"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search documentation...</span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-2xl [&>button]:hidden max-w-2xl">
          <VisuallyHidden>
            <DialogTitle>Search Documentation</DialogTitle>
          </VisuallyHidden>
          <div className="border-b">
            <div className="flex items-center px-4">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Input
                placeholder="Search documentation..."
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="flex h-12 w-full rounded-none border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0"
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-[500px] overflow-y-auto p-4">
            {searchValue ? (
              <div className="space-y-2">
                {filteredPages.length > 0 ? (
                  <>
                    <p className="text-xs font-medium text-muted-foreground mb-2">SEARCH RESULTS</p>
                    <div className="space-y-1">
                      {filteredPages.map((page) => (
                        <button
                          key={page.href}
                          onClick={() => handlePageClick(page.href)}
                          className="flex w-full flex-col items-start rounded-md px-2 py-2 text-left hover:bg-accent"
                        >
                          <span className="text-sm font-medium">{page.title}</span>
                          <span className="text-xs text-muted-foreground">{page.category}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No results found for "{searchValue}"
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">RECENT</p>
                  <div className="space-y-1">
                    {recentPages.map((page) => (
                      <button
                        key={page.href}
                        onClick={() => handlePageClick(page.href)}
                        className="flex w-full items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">POPULAR</p>
                  <div className="space-y-1">
                    {popularPages.map((page) => (
                      <button
                        key={page.href}
                        onClick={() => handlePageClick(page.href)}
                        className="flex w-full items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 