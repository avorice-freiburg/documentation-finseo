import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  Bot, 
  BarChart3, 
  Shield, 
  Upload, 
  Eye, 
  TrendingUp,
  Server,
  FileText,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Search,
  Globe,
  Zap
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "what-is-bot-analytics", title: "What is Bot Analytics?", level: 2 },
  { id: "quick-start", title: "Quick Start Guide", level: 2 },
  { id: "hosting-providers", title: "Supported Hosting Providers", level: 2 },
  { id: "ai-crawlers", title: "AI Search Engine Crawlers", level: 2 },
]

export default function BotAnalyticsPage() {
  return (
    <>
      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl mx-auto px-6 py-8 lg:py-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          
          {/* Header */}
          <div className="space-y-4 pb-8 md:pb-12">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Bot Analytics
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Track AI search engine bots visiting your website and measure your visibility in AI-powered search results.
            </p>
          </div>

          {/* Key Alert */}
          <Alert className="mb-8 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
            <Zap className="h-4 w-4 text-[#0eca7b]" />
            <AlertTitle className="text-[#0eca7b] dark:text-[#0eca7b]">AI Visibility is the New SEO</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Bot visits from ChatGPT, Perplexity, and other AI search engines are strong indicators of your content's 
              visibility in AI-powered search results. When users ask AI assistants questions, these bots visit your 
              site in real-time to fetch accurate, up-to-date information.
            </AlertDescription>
          </Alert>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Bot Analytics is a powerful feature that allows you to upload your server access logs to identify 
                and track visits from AI search engine bots. This data provides crucial insights into how visible 
                your content is in the new era of AI-powered search.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Bot visits from AI search engines like ChatGPT and Perplexity are real-time indicators that your 
                  content is being accessed to answer user queries. This is the new frontier of search visibility.
                </p>
              </div>
            </div>
          </section>

          {/* What is Bot Analytics */}
          <section className="space-y-6 mb-12">
            <h2 id="what-is-bot-analytics" className="text-2xl font-bold tracking-tight">What is Bot Analytics?</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Bot Analytics provides four core features to help you understand your AI search visibility:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Visibility Tracking</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monitor when AI bots visit your site, indicating your content appears in AI search results
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Performance Metrics</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track trends and patterns in AI bot traffic over time
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold">Privacy-First</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your server logs are anonymized before processing
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-[#ff6b35]" />
                    <h4 className="font-semibold">Detailed Analytics</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get insights on which AI platforms are accessing your content
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Start Guide */}
          <section className="space-y-6 mb-12">
            <h2 id="quick-start" className="text-2xl font-bold tracking-tight">Quick Start Guide</h2>
            <p className="text-muted-foreground">Get started with Bot Analytics in 3 simple steps</p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Download Your Server Logs</h4>
                  <p className="text-sm text-muted-foreground">
                    Access your hosting provider's control panel and download your access logs as a .txt file
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Upload to Finseo</h4>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <Link href="https://app.finseo.ai/bot-analytics" className="text-[#0eca7b] hover:underline">app.finseo.ai/bot-analytics</Link> and upload your log file
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  3
                </div>
                <div>
                  <h4 className="font-medium">View Your Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    See detailed insights about AI bot visits and your visibility in AI search results
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild>
                  <Link href="https://app.finseo.ai/bot-analytics" target="_blank">
                    <Upload className="mr-2 h-4 w-4" />
                    Go to Bot Analytics Dashboard
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Hosting Providers */}
          <section className="space-y-6 mb-12">
            <h2 id="hosting-providers" className="text-2xl font-bold tracking-tight">Supported Hosting Providers</h2>
            <p className="text-muted-foreground">
              Select your hosting provider for detailed instructions on accessing server logs
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* WordPress Hosts */}
              <Link href="/bot-analytics/siteground" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.siteground.com/favicon.ico" 
                        alt="SiteGround" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">SiteGround</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Popular WordPress host with Site Tools panel and easy log access
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/bluehost" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.google.com/s2/favicons?domain=bluehost.com&sz=64" 
                        alt="Bluehost" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Bluehost</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      WordPress.org recommended host with cPanel access
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/godaddy" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.google.com/s2/favicons?domain=godaddy.com&sz=64" 
                        alt="GoDaddy" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">GoDaddy</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Large hosting provider with varied log access by plan type
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/hostinger" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.hostinger.com/favicon.ico" 
                        alt="Hostinger" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Hostinger</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Budget-friendly hosting with hPanel and log access
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/raidboxes" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://raidboxes.io/favicon.ico" 
                        alt="Raidboxes" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Raidboxes</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      German managed WordPress hosting with dashboard log access
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/strato" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.google.com/s2/favicons?domain=strato.de&sz=64" 
                        alt="STRATO" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">STRATO</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      German hosting provider with 6-week log retention
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* CDN Providers */}
              <Link href="/bot-analytics/cloudflare" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.cloudflare.com/favicon.ico" 
                        alt="Cloudflare" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Cloudflare</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      CDN with enterprise log access via Logpull API
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/fastly" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.fastly.com/favicons/favicon-96x96.png" 
                        alt="Fastly" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Fastly</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      High-performance CDN with real-time log streaming
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* E-commerce Platforms */}
              <Link href="/bot-analytics/shopify" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://cdn.shopify.com/static/shopify-favicon.png" 
                        alt="Shopify" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Shopify</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      E-commerce platform with limited log access (Plus plans)
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/webflow" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://webflow.com/favicon.ico" 
                        alt="Webflow" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Webflow</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Visual builder with new Cloud runtime logs feature
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Control Panels */}
              <Link href="/bot-analytics/cpanel" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.google.com/s2/favicons?domain=cpanel.net&sz=64" 
                        alt="cPanel" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">cPanel</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Popular control panel with Raw Access logs feature
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bot-analytics/plesk" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-[#0eca7b]/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://www.plesk.com/favicon.ico" 
                        alt="Plesk" 
                        className="w-8 h-8 rounded"
                      />
                      <CardTitle className="text-lg group-hover:text-[#0eca7b] transition-colors">Plesk</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Windows & Linux control panel with log browser
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* AI Crawlers */}
          <section className="space-y-6 mb-12">
            <h2 id="ai-crawlers" className="text-2xl font-bold tracking-tight">AI Search Engine Crawlers</h2>
            <p className="text-muted-foreground">
              Understanding the bots that indicate your AI visibility
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">ChatGPT-User</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Triggered when users ask ChatGPT questions that require web search
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot
                  </code>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">OAI-SearchBot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Used to surface websites in ChatGPT's search results
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    OAI-SearchBot/1.0; +https://openai.com/searchbot
                  </code>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">GPTBot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Crawls content for training OpenAI's foundation models (can be blocked separately)
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.1; +https://openai.com/gptbot
                  </code>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">PerplexityBot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Perplexity AI's web crawler for real-time search results
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Claude-Web</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Anthropic's Claude AI web crawler for search queries
                  </p>
                </CardContent>
              </Card>
            </div>

                          <Alert className="mt-6 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
                <AlertTitle className="text-[#ff6b35]">Learn More</AlertTitle>
              <AlertDescription>
                For detailed information about OpenAI's crawlers and how to manage them, visit the{" "}
                <Link href="https://platform.openai.com/docs/bots" target="_blank" className="text-[#0eca7b] hover:underline">
                  official OpenAI bot documentation
                  <ExternalLink className="inline h-3 w-3 ml-1" />
                </Link>
              </AlertDescription>
            </Alert>
          </section>
        </div>
      </main>

      {/* Right sidebar - Table of Contents */}
      <aside className="hidden xl:block w-64 shrink-0 border-l">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-6">
          <TableOfContents items={tocItems} />
        </div>
      </aside>
    </>
  )
} 