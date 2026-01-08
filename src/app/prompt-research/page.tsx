import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import { 
  Search,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  BarChart3,
  Sparkles,
  Target,
  Database,
  Zap
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = getPageMetadata('prompt-research');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Prompt Research" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "how-it-works", title: "How It Works", level: 2 },
  { id: "methodology", title: "Methodology", level: 2 },
  { id: "commercial-focus", title: "Commercial Focus", level: 2 },
  { id: "use-cases", title: "Use Cases", level: 2 },
]

export default function PromptResearchPage() {
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
              Prompt Research
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Discover high-value commercial prompts where your brand or product can appear in AI search results across <Link href="https://www.finseo.ai/ai-visibility-tracking/chatgpt" className="text-[#0eca7b] hover:underline" target="_blank">ChatGPT</Link>, <Link href="https://www.finseo.ai/ai-visibility-tracking/perplexity" className="text-[#0eca7b] hover:underline" target="_blank">Perplexity</Link>, <Link href="https://www.finseo.ai/ai-visibility-tracking/claude" className="text-[#0eca7b] hover:underline" target="_blank">Claude</Link>, and <Link href="https://www.finseo.ai/ai-visibility-tracking/gemini" className="text-[#0eca7b] hover:underline" target="_blank">Gemini</Link>.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">Smart Prompt Discovery</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Generate high-transactional commercial prompts with estimated search volumes for each AI model. 
              Focus on prompts where your brand, products, and services are most likely to appear in AI responses.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">ChatGPT</Badge>
              <Badge variant="secondary">Perplexity</Badge>
              <Badge variant="secondary">Claude</Badge>
              <Badge variant="secondary">Gemini</Badge>
              <Badge variant="secondary">Commercial Intent</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Prompt Research helps you understand what people might use for prompts in AI platforms and identifies 
                high-value commercial opportunities where your brand, products, or services can gain visibility. Unlike 
                traditional keyword research, this focuses on transactional queries where purchase intent is highest. 
                Learn more about <Link href="https://www.finseo.ai/prompt-research" className="text-[#0eca7b] hover:underline" target="_blank">AI prompt research and discovery</Link>.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Commercial Prompts</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focus on high-intent transactional prompts where users are actively seeking products and solutions
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Volume Estimates</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get estimated search volumes across all major <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracking</Link> platforms
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="space-y-6 mb-12">
            <h2 id="how-it-works" className="text-2xl font-bold tracking-tight">How It Works</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Our prompt research technology transforms traditional search data into actionable AI prompt insights:
              </p>
              
              {/* Visual Flow */}
              <div className="rounded-lg border bg-card p-6 mb-6">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center">
                      <Database className="h-5 w-5 text-[#0eca7b]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">Google Keyword Data</h4>
                      <p className="text-xs text-muted-foreground">
                        We start with Google's known keyword search volume data
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="pl-5">
                    <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-[#0eca7b]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">AI Model Distribution</h4>
                      <p className="text-xs text-muted-foreground">
                        Volume is distributed across AI models based on estimated usage patterns
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="pl-5">
                    <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-[#0eca7b]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">Prompt Transformation</h4>
                      <p className="text-xs text-muted-foreground">
                        Keywords are transformed into natural prompts users would ask AI models
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="pl-5">
                    <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-[#0eca7b]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">Commercial Prompts with Volume</h4>
                      <p className="text-xs text-muted-foreground">
                        High-intent prompts with estimated search volume per AI model
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="space-y-6 mb-12">
            <h2 id="methodology" className="text-2xl font-bold tracking-tight">Methodology</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Since LLM providers don't publish exact prompt volume metrics, we use a sophisticated estimation approach:
              </p>
              
              <Alert className="mb-6">
                <Search className="h-4 w-4" />
                <AlertTitle>Keyword-to-Prompt Translation</AlertTitle>
                <AlertDescription className="text-xs">
                  AI search queries work by breaking prompts into keyword components. When you ask ChatGPT "What's the best 
                  CRM for real estate?", it searches for concepts like "CRM", "real estate", "best". This means we can 
                  reverse-engineer volume estimates from known keyword data.
                </AlertDescription>
              </Alert>


            </div>
          </section>

          {/* Commercial Focus */}
          <section className="space-y-6 mb-12">
            <h2 id="commercial-focus" className="text-2xl font-bold tracking-tight">Commercial Focus</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <Alert className="mb-6 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
                <Target className="h-4 w-4 text-[#0eca7b]" />
                <AlertTitle className="text-[#0eca7b]">High-Intent Transactional Prompts</AlertTitle>
                <AlertDescription>
                  We focus exclusively on commercial, transactional prompts where users show purchase intent. 
                  Informational queries are filtered out to maximize ROI on your optimization efforts.
                </AlertDescription>
              </Alert>

              <div className="grid gap-4">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Product Comparisons</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    "Best project management software for agencies" - Users comparing solutions
                  </p>
                  <Badge variant="outline" className="text-xs">High Commercial Intent</Badge>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Purchase Decisions</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    "Which CRM should I buy for my startup?" - Ready-to-purchase users
                  </p>
                  <Badge variant="outline" className="text-xs">High Commercial Intent</Badge>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Recommendations</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    "Recommend affordable email marketing tools" - Actively seeking suggestions
                  </p>
                  <Badge variant="outline" className="text-xs">High Commercial Intent</Badge>
                </div>

                <div className="rounded-lg border border-muted bg-muted/30 p-4 opacity-60">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                    <h4 className="font-semibold line-through">Informational Queries</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    "What is project management?" - Filtered out (low brand visibility potential)
                  </p>
                  <Badge variant="outline" className="text-xs">Excluded</Badge>
                </div>
              </div>
            </div>
          </section>


          {/* Use Cases */}
          <section className="space-y-6 mb-12">
            <h2 id="use-cases" className="text-2xl font-bold tracking-tight">Use Cases</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="grid gap-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Identify Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover high-volume commercial prompts where your brand should appear but currently doesn't
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Prioritize Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Focus your optimization efforts on prompts with the highest estimated search volumes
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Track Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor your brand's visibility across specific high-intent prompts over time with our <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracker</Link>
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Competitive Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    See which prompts your competitors dominate using <Link href="https://www.finseo.ai/" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility monitoring</Link> and find gaps to exploit
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Next Steps */}
          <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">Start Researching Prompts</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to discover high-value commercial prompts for your brand?
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Generate commercial prompts with purchase intent</li>
              <li>Get estimated search volumes for ChatGPT, Perplexity, Claude & Gemini</li>
              <li>Focus on prompts where your brand can appear</li>
              <li>Track performance and optimize over time</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild className="bg-[#0eca7b] hover:bg-[#0eca7b]/90">
                <Link href="https://app.finseo.ai/prompt-research" target="_blank">
                  Open Prompt Research
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/metrics">
                  View Metrics Docs
                </Link>
              </Button>
            </div>
          </div>
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