import { AppSidebar } from "@/components/app-sidebar"
import { DocsNavbar } from "@/components/sections/docs-navbar"
import { TableOfContents } from "@/components/table-of-contents"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import { ArrowRight, Bot, BarChart3, Users, Zap, Target, Globe } from "lucide-react"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('home');

const tocItems = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "what-is-ai-visibility", title: "What is AI Visibility?", level: 2 },
  { id: "getting-started", title: "Getting Started", level: 2 },
  { id: "key-features", title: "Key Features", level: 2 },
]

const breadcrumbItems = [
  { label: "Documentation" }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed top navigation */}
      <DocsNavbar />
      
      {/* 3-column layout */}
      <div className="flex-1 flex pt-14"> {/* pt-14 to account for fixed navbar height */}
        {/* Left sidebar */}
        <aside className="hidden md:block w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
            <AppSidebar />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl mx-auto px-6 py-8 lg:py-12">
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbItems} className="mb-6" />
            
            {/* Header */}
            <div className="space-y-4 pb-8 md:pb-12">
              <h1 id="welcome" className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                Welcome to Finseo Documentation
              </h1>
              <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                Track and optimize your visibility in AI-powered search results. Monitor how ChatGPT, Perplexity, 
                and other AI systems present your brand, products, and content.
              </p>
            </div>

            {/* Quick Start Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <Link href="/metrics" className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-md hover:border-[#0eca7b]/50 transition-all">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[#0eca7b]" />
                    <h3 className="font-semibold text-lg">AI Metrics</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track sentiment, visibility, position, and mentions across AI platforms.
                  </p>
                </div>
                <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 text-muted-foreground group-hover:text-[#0eca7b] transition-colors" />
              </Link>

              <Link href="/bot-analytics" className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-md hover:border-[#0eca7b]/50 transition-all">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-[#0eca7b]" />
                    <h3 className="font-semibold text-lg">Bot Traffic</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monitor AI crawler visits from ChatGPT, Perplexity, and other bots.
                  </p>
                </div>
                <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 text-muted-foreground group-hover:text-[#0eca7b] transition-colors" />
              </Link>

              <Link href="/human-traffic" className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-md hover:border-[#0eca7b]/50 transition-all">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#0eca7b]" />
                    <h3 className="font-semibold text-lg">Human Traffic</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Analyze real user visits from AI-powered search referrals.
                  </p>
                </div>
                <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 text-muted-foreground group-hover:text-[#0eca7b] transition-colors" />
              </Link>
            </div>

            {/* Documentation Content */}
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 id="introduction" className="text-2xl font-bold tracking-tight">Introduction</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground">
                    Finseo is the first comprehensive AI visibility platform that helps you understand and optimize 
                    how your brand, products, and content appear in AI-powered search results. As AI systems like 
                    ChatGPT, Perplexity, and Claude become primary information sources, tracking your AI visibility 
                    is as crucial as traditional SEO.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 id="what-is-ai-visibility" className="text-2xl font-bold tracking-tight">What is AI Visibility?</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    AI visibility refers to how often and how prominently your brand, products, or content appear 
                    in responses from AI-powered search and chat systems. Unlike traditional SEO, AI visibility tracks:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <Target className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <span><strong>Mentions:</strong> How often AI systems reference your brand or products</span>
                    </li>
                    <li className="flex gap-3">
                      <BarChart3 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <span><strong>Sentiment:</strong> Whether AI presents your brand positively or negatively</span>
                    </li>
                    <li className="flex gap-3">
                      <Zap className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <span><strong>Position:</strong> Where you rank in AI-generated lists and recommendations</span>
                    </li>
                    <li className="flex gap-3">
                      <Globe className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <span><strong>Context:</strong> How AI systems describe and categorize your offerings</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 id="getting-started" className="text-2xl font-bold tracking-tight">Getting Started</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground mb-6">
                    To effectively track your AI visibility, you need to set up several key components in Finseo:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Link href="/getting-started/synonyms" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-accent hover:border-[#0eca7b]/50 transition-all">
                      <div>
                        <h3 className="font-semibold">1. Synonyms</h3>
                        <p className="text-sm text-muted-foreground">Define brand variations and aliases</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-[#0eca7b] group-hover:translate-x-1 transition-all" />
                    </Link>
                    <Link href="/getting-started/models" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-accent hover:border-[#0eca7b]/50 transition-all">
                      <div>
                        <h3 className="font-semibold">2. Models</h3>
                        <p className="text-sm text-muted-foreground">Select AI models to track</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-[#0eca7b] group-hover:translate-x-1 transition-all" />
                    </Link>
                    <Link href="/getting-started/prompts" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-accent hover:border-[#0eca7b]/50 transition-all">
                      <div>
                        <h3 className="font-semibold">3. Prompts</h3>
                        <p className="text-sm text-muted-foreground">Create AI-specific search queries</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-[#0eca7b] group-hover:translate-x-1 transition-all" />
                    </Link>
                    <Link href="/getting-started/competitors" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-accent hover:border-[#0eca7b]/50 transition-all">
                      <div>
                        <h3 className="font-semibold">4. Competitors</h3>
                        <p className="text-sm text-muted-foreground">Track competitive positioning</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-[#0eca7b] group-hover:translate-x-1 transition-all" />
                    </Link>
                    <Link href="/getting-started/sources" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-accent hover:border-[#0eca7b]/50 transition-all">
                      <div>
                        <h3 className="font-semibold">5. Sources</h3>
                        <p className="text-sm text-muted-foreground">Monitor citation sources</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-[#0eca7b] group-hover:translate-x-1 transition-all" />
                    </Link>
                    <Link href="/getting-started/products" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-accent hover:border-[#0eca7b]/50 transition-all">
                      <div>
                        <h3 className="font-semibold">6. Products</h3>
                        <p className="text-sm text-muted-foreground">Track product mentions</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-[#0eca7b] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              </section>

              <section className="space-y-4 pb-16">
                <h2 id="key-features" className="text-2xl font-bold tracking-tight">Key Features</h2>
                <ul className="grid gap-3 text-muted-foreground">
                  <li className="flex gap-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0eca7b] mt-2" />
                    <span>Track visibility across ChatGPT, Claude, Perplexity, and more AI platforms</span>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0eca7b] mt-2" />
                    <span>Monitor sentiment analysis of AI responses about your brand</span>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0eca7b] mt-2" />
                    <span>Analyze competitive positioning in AI-generated recommendations</span>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0eca7b] mt-2" />
                    <span>Track AI bot visits to your website and content</span>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0eca7b] mt-2" />
                    <span>Measure human traffic from AI search referrals</span>
                  </li>
                  <li className="flex gap-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0eca7b] mt-2" />
                    <span>Historical tracking and trend analysis</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </main>

        {/* Right table of contents */}
        <aside className="hidden xl:block w-64 border-l">
          <div className="sticky top-14 p-6">
            <TableOfContents items={tocItems} />
          </div>
        </aside>
      </div>
    </div>
  );
}
