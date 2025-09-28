import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Link2, 
  TrendingUp,
  BarChart3,
  Globe,
  Shield,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
  Target
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Getting Started", href: "/" },
  { label: "Sources" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "automatic-extraction", title: "Automatic Source Extraction", level: 2 },
  { id: "source-analytics", title: "Source Analytics Dashboard", level: 2 },
  { id: "what-you-can-track", title: "What You Can Track", level: 2 },
  { id: "using-insights", title: "Using Source Insights", level: 2 },
]

export default function SourcesPage() {
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
              Source & Citation Tracking
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Monitor which sources AI systems cite when discussing your brand and track domain authority in AI responses.
            </p>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Sources are the websites, domains, and references that AI systems cite when answering questions. 
                Understanding which sources AI trusts provides crucial insights into your digital authority and 
                helps identify partnership and content opportunities.
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Link2 className="h-5 w-5 text-[#0eca7b]" />
                  <span className="font-semibold">Why Sources Matter</span>
                </div>
                <ul className="text-sm space-y-2 ml-8 list-disc text-muted-foreground">
                  <li>Understand which sites influence AI's knowledge about your industry</li>
                  <li>Identify high-authority domains to target for backlinks</li>
                  <li>Discover content gaps where you're not being cited</li>
                  <li>Track which of your pages AI systems reference most</li>
                  <li>Monitor competitor sources and citation patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Automatic Extraction */}
          <section className="space-y-6 mb-12">
            <h2 id="automatic-extraction" className="text-2xl font-bold tracking-tight">Automatic Source Extraction</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <Alert className="mb-6">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  <strong>Fully Automated!</strong> Finseo automatically extracts and analyzes all sources 
                  and domain mentions from AI responses. No configuration needed.
                </AlertDescription>
              </Alert>
              
              <p className="text-muted-foreground mb-6">
                Our source extraction system works continuously:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Citation Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      AI responses are scanned for URLs, domain mentions, and source references
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Domain Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Each source is analyzed for authority, relevance, and citation frequency
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
                      Track source citation patterns over time to identify trends
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 rounded-lg border bg-muted/50 p-4">
                <p className="text-sm font-medium mb-2">What counts as a source?</p>
                <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                  <li>• Direct URL citations (e.g., "According to example.com...")</li>
                  <li>• Domain mentions (e.g., "Wikipedia states...")</li>
                  <li>• Indirect references (e.g., "Industry reports show...")</li>
                  <li>• Your own domain when AI cites your content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Source Analytics Dashboard */}
          <section className="space-y-6 mb-12">
            <h2 id="source-analytics" className="text-2xl font-bold tracking-tight">Source Analytics Dashboard</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Access comprehensive source analytics at <code className="px-1.5 py-0.5 bg-muted rounded text-xs">app.finseo.ai/sources</code>:
              </p>
              
              {/* Image Placeholder */}
              <div className="rounded-lg border bg-muted/50 p-8 mb-6">
                <img 
                  src="/source.png" 
                  alt="Source Analytics Dashboard" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Top Sources</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Most frequently cited domains in your industry
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Citation Trends</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rising and declining source authority over time
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Your Domain</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    How often your content is cited as a source
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Content Types</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Which content formats AI prefers to cite
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What You Can Track */}
          <section className="space-y-6 mb-12">
            <h2 id="what-you-can-track" className="text-2xl font-bold tracking-tight">What You Can Track</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Comprehensive source tracking provides deep insights:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-4">Source Metrics</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Citation Frequency</p>
                        <p className="text-xs text-muted-foreground">
                          How often each domain is referenced
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Authority Score</p>
                        <p className="text-xs text-muted-foreground">
                          AI's trust level for each source
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Topic Relevance</p>
                        <p className="text-xs text-muted-foreground">
                          Which topics each source is cited for
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Geographic Patterns</p>
                        <p className="text-xs text-muted-foreground">
                          Source preferences by region
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Content Analysis</p>
                        <p className="text-xs text-muted-foreground">
                          Most cited pages and content types
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Competitive Intel</p>
                        <p className="text-xs text-muted-foreground">
                          Sources citing your competitors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Historical Distribution */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-5 w-5 text-[#0eca7b]" />
                    <span className="font-semibold">Historical Distribution</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Track how source citations change over time:
                  </p>
                  {/* Image Placeholder */}
                  <div className="rounded-lg border bg-muted/50 p-8">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground text-center">Historical Source Distribution Chart</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Visualize citation patterns monthly, quarterly, or yearly to identify trends
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Using Source Insights */}
          <section className="space-y-6 mb-12">
            <h2 id="using-insights" className="text-2xl font-bold tracking-tight">Using Source Insights</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Transform source data into actionable strategies:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#0eca7b]" />
                    Content Strategy
                  </h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Create content similar to frequently cited sources</li>
                    <li>Target content gaps where you're not being cited</li>
                    <li>Optimize existing content that AI occasionally cites</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Link2 className="h-4 w-4 text-[#0eca7b]" />
                    Link Building
                  </h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Prioritize backlinks from high-authority AI sources</li>
                    <li>Guest post on frequently cited domains</li>
                    <li>Build relationships with authoritative publishers</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#0eca7b]" />
                    Authority Building
                  </h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Study why certain sources are trusted by AI</li>
                    <li>Improve your domain's citation frequency</li>
                    <li>Create comprehensive, citable resources</li>
                  </ul>
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
                    <strong>Monitor Weekly:</strong> Check source trends weekly to catch emerging authorities.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Analyze Patterns:</strong> Look for common traits in highly cited sources.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Create Citable Content:</strong> Format content to be easily referenced by AI.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Build Relationships:</strong> Connect with frequently cited domain owners.
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
              After reviewing your sources:
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/getting-started/products">
                  Continue to Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/metrics">
                  View Metrics
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