import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Star,
  BarChart3,
  Eye,
  Target,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Users
} from "lucide-react"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('getting-started-competitors');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Getting Started", href: "/" },
  { label: "Competitors" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "automatic-extraction", title: "Automatic Extraction", level: 2 },
  { id: "competitor-dashboard", title: "Competitor Dashboard", level: 2 },
  { id: "key-competitors", title: "Selecting Key Competitors", level: 2 },
  { id: "what-you-can-track", title: "What You Can Track", level: 2 },
]

export default function CompetitorsPage() {
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
              Competitor Tracking
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Monitor how AI systems position your brand against competitors and track competitive dynamics in AI responses.
            </p>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Finseo automatically identifies and tracks competitors mentioned alongside your brand in AI responses. 
                This gives you unprecedented visibility into how AI systems compare and contrast your offerings with 
                others in your market.
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-[#0eca7b]" />
                  <span className="font-semibold">Why Track Competitors?</span>
                </div>
                <ul className="text-sm space-y-2 ml-8 list-disc text-muted-foreground">
                  <li>See how often you're mentioned vs competitors</li>
                  <li>Understand competitive positioning in AI responses</li>
                  <li>Track share of voice in AI recommendations</li>
                  <li>Identify competitive threats and opportunities</li>
                  <li>Monitor new entrants in your market</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Automatic Extraction */}
          <section className="space-y-6 mb-12">
            <h2 id="automatic-extraction" className="text-2xl font-bold tracking-tight">Automatic Extraction</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <Alert className="mb-6">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  <strong>No setup required!</strong> Finseo automatically extracts all competitors mentioned 
                  in AI responses to your prompts. You don't need to manually add competitors.
                </AlertDescription>
              </Alert>
              
              <p className="text-muted-foreground mb-6">
                Here's how our automatic competitor extraction works:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">AI Response Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Every AI response to your prompts is analyzed for brand mentions
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Competitor Identification</h3>
                    <p className="text-sm text-muted-foreground">
                      Brands mentioned alongside yours are flagged as potential competitors
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Historical Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Track competitor mentions over time to see trends and changes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-muted/50">
                <p className="text-sm">
                  <strong>Example:</strong> If you track "best CRM software", and AI responses mention 
                  "Salesforce, HubSpot, and YourBrand", all three are automatically tracked as competitors.
                </p>
              </div>
            </div>
          </section>

          {/* Competitor Dashboard */}
          <section className="space-y-6 mb-12">
            <h2 id="competitor-dashboard" className="text-2xl font-bold tracking-tight">Competitor Dashboard</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Access your competitor insights at <code className="px-1.5 py-0.5 bg-muted rounded text-xs">app.finseo.ai/competitors</code>:
              </p>
              
              {/* Image Placeholder */}
              <div className="rounded-lg border bg-muted/50 p-8 mb-6">
                <img 
                  src="/competitor.png" 
                  alt="Competitor Dashboard Overview" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Mention Frequency</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    See how often each competitor appears in AI responses
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Share of Voice</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your percentage of total mentions vs competitors
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Historical Trends</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track competitor visibility changes over time
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Position Analysis</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Where you rank when listed with competitors
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Competitors */}
          <section className="space-y-6 mb-12">
            <h2 id="key-competitors" className="text-2xl font-bold tracking-tight">Selecting Key Competitors</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                While all competitors are tracked automatically, you can select key competitors for focused analysis:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Review Auto-Detected Competitors</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Browse the full list of competitors Finseo has identified from AI responses.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Star Key Competitors</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click the star icon next to your main competitors to add them to your key competitor list.
                    </p>
                    {/* Image Placeholder */}
                    <div className="rounded-lg border bg-muted/50 p-8 mb-4">
                      <img 
                        src="/mylist.png" 
                        alt="Key Competitor Selection" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Create Comparison Charts</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Generate custom comparison tables and charts for your key competitors.
                    </p>
                    {/* Image Placeholder */}
                    <div className="rounded-lg border bg-muted/50 p-8 mb-4">
                      <img 
                        src="/competitor-comparison.png" 
                        alt="Comparison Charts" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <Alert className="mt-6 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
                <AlertTitle className="text-[#ff6b35]">Pro Tip</AlertTitle>
                <AlertDescription>
                  Focus on 3-5 key competitors for detailed tracking. Too many competitors can dilute insights.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* What You Can Track */}
          <section className="space-y-6 mb-12">
            <h2 id="what-you-can-track" className="text-2xl font-bold tracking-tight">What You Can Track</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Competitor tracking provides comprehensive insights:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">Metrics Available</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Mention Count</p>
                        <p className="text-xs text-muted-foreground">
                          Total times each competitor appears
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Co-occurrence Rate</p>
                        <p className="text-xs text-muted-foreground">
                          How often mentioned together with you
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Sentiment Comparison</p>
                        <p className="text-xs text-muted-foreground">
                          Positive/negative sentiment by brand
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Feature Comparisons</p>
                        <p className="text-xs text-muted-foreground">
                          Which features AI highlights for each
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Market Positioning</p>
                        <p className="text-xs text-muted-foreground">
                          How AI categorizes each competitor
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Trend Analysis</p>
                        <p className="text-xs text-muted-foreground">
                          Rising or declining visibility over time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Best Practices</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Regular Reviews:</strong> Check competitor data weekly to spot trends early.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Context Matters:</strong> Look at the context of mentions, not just counts.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Track New Entrants:</strong> Watch for new competitors appearing in results.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Benchmark Performance:</strong> Use competitor data to set realistic AI visibility goals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">Next Steps</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              After reviewing your competitors:
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/getting-started/sources">
                  Continue to Sources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/metrics/position">
                  View Position Metrics
                  <ArrowRight className="ml-2 h-4 w-4" />
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