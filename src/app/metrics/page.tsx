import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('metrics');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Metrics" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "metric-types", title: "Metric Types", level: 2 },
  { id: "getting-started", title: "Getting Started", level: 2 },
]

export default function MetricsPage() {
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
              Metrics
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Understand how your brand performs across AI models with comprehensive tracking metrics.
            </p>
          </div>

          {/* Overview */}
          <section className="space-y-4 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                Finseo provides four core metrics to help you understand your brand's performance across AI models like ChatGPT, Perplexity, Claude, and Google AI Overview. Each metric offers unique insights into how AI systems perceive and present your brand.
              </p>
            </div>
          </section>

          {/* Metric Types */}
          <section className="space-y-6 mb-12">
            <h2 id="metric-types" className="text-2xl font-bold tracking-tight">Metric Types</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/metrics/visibility" className="group block">
                <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">Visibility</h3>
                      <p className="text-sm text-muted-foreground">
                        Track how often your brand appears in AI responses across different models and prompts.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Percentage-based metric
                      </div>
                    </div>
                    <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/metrics/sentiment" className="group block">
                <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">Sentiment</h3>
                      <p className="text-sm text-muted-foreground">
                        Analyze how AI models speak about your brand - positive, neutral, or negative.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        0-100 score (50 = neutral)
                      </div>
                    </div>
                    <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/metrics/position" className="group block">
                <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">Position</h3>
                      <p className="text-sm text-muted-foreground">
                        Measure where your brand appears within AI responses - earlier is better.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        0% best, 100% worst, +100% not mentioned
                      </div>
                    </div>
                    <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/metrics/mentions" className="group block">
                <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">Mentions</h3>
                      <p className="text-sm text-muted-foreground">
                        Count how frequently your brand or domain appears in responses.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Frequency-based tracking
                      </div>
                    </div>
                    <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Getting Started */}
          <section className="space-y-4 pb-16">
            <h2 id="getting-started" className="text-2xl font-bold tracking-tight">Getting Started</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                To start tracking metrics for your brand:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Set up your project with the prompts you want to track</li>
                <li>Configure your brand synonyms in <Link href="/getting-started/synonyms" className="text-secondary hover:underline">project settings</Link></li>
                <li>Select the AI models you want to monitor (ChatGPT, Perplexity, Claude, Google AI Overview)</li>
                <li>Wait for data collection to begin - metrics update regularly</li>
                <li>Analyze your performance across all four metric types</li>
              </ol>
            </div>
          </section>
        </div>
      </main>

      {/* Right table of contents */}
      <aside className="hidden xl:block w-64 border-l">
        <div className="sticky top-14 p-6">
          <TableOfContents items={tocItems} />
        </div>
      </aside>
    </>
  );
} 