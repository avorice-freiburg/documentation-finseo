import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Metrics", href: "/metrics" },
  { label: "Visibility" }
]

const tocItems = [
  { id: "what-is-visibility", title: "What is Visibility?", level: 2 },
  { id: "how-it-works", title: "How it Works", level: 2 },
  { id: "calculation-examples", title: "Calculation Examples", level: 2 },
  { id: "timeframe-considerations", title: "Timeframe Considerations", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
]

export default function VisibilityPage() {
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
              Visibility Metrics
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Track how often your brand appears in AI responses across different models and prompts.
            </p>
          </div>

          {/* What is Visibility */}
          <section className="space-y-6 mb-12">
            <h2 id="what-is-visibility" className="text-2xl font-bold tracking-tight">What is Visibility?</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Visibility is the percentage of AI responses where your brand appears when tracking specific prompts across multiple AI models. It's one of the most important metrics for understanding your brand's presence in AI-generated content.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  If you track 25 prompts across 4 AI models (ChatGPT, Perplexity, Claude, Google AI Overview), 
                  you can appear in up to 100 responses. If your brand appears in 50 of those responses, 
                  your visibility score is 50%.
                </p>
              </div>
            </div>
          </section>

          {/* Visualization */}
          <section className="space-y-6 mb-12">
            <div className="rounded-lg border bg-card p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl">📊</div>
                  <p className="text-sm text-muted-foreground">Visibility Dashboard Visualization</p>
                  <p className="text-xs text-muted-foreground">[Image placeholder - showing visibility percentages across models]</p>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section className="space-y-6 mb-12">
            <h2 id="how-it-works" className="text-2xl font-bold tracking-tight">How it Works</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Finseo tracks your brand mentions across multiple AI models and calculates visibility as a percentage:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Tracked Models</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• ChatGPT</li>
                    <li>• Perplexity</li>
                    <li>• Claude</li>
                    <li>• Google AI Overview</li>
                  </ul>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Formula</h4>
                  <div className="text-sm text-muted-foreground">
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      (Appearances / Total Possible) × 100
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Calculation Examples */}
          <section className="space-y-6 mb-12">
            <h2 id="calculation-examples" className="text-2xl font-bold tracking-tight">Calculation Examples</h2>
            
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Example 1: Single Day Tracking</h4>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground">Prompts tracked:</span>
                      <span className="ml-2 font-mono">25</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">AI models:</span>
                      <span className="ml-2 font-mono">4</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total possible responses:</span>
                      <span className="ml-2 font-mono">100</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Your brand appeared in:</span>
                      <span className="ml-2 font-mono">50</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-muted-foreground">Visibility:</span>
                    <span className="ml-2 font-mono text-secondary font-semibold">50% (50/100 × 100)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Example 2: 30-Day Timeframe</h4>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground">Daily responses:</span>
                      <span className="ml-2 font-mono">100</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Timeframe:</span>
                      <span className="ml-2 font-mono">30 days</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total possible responses:</span>
                      <span className="ml-2 font-mono">3,000</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Your brand appeared in:</span>
                      <span className="ml-2 font-mono">1,500</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-muted-foreground">Visibility:</span>
                    <span className="ml-2 font-mono text-secondary font-semibold">50% (1,500/3,000 × 100)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeframe Considerations */}
          <section className="space-y-6 mb-12">
            <h2 id="timeframe-considerations" className="text-2xl font-bold tracking-tight">Timeframe Considerations</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Visibility metrics are calculated based on the selected timeframe, allowing for accurate trend analysis:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Daily Calculation</h4>
                  <p className="text-sm text-muted-foreground">
                    Each day, your prompts are run across all selected AI models. The visibility percentage 
                    represents your appearance rate for that specific day.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Multi-Day Periods</h4>
                  <p className="text-sm text-muted-foreground">
                    For longer timeframes, we aggregate all possible responses across all days and calculate 
                    your overall visibility percentage. This provides a comprehensive view of your brand's 
                    presence over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="space-y-6 pb-16">
            <h2 id="best-practices" className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Track relevant prompts:</strong> Choose prompts that your target audience is likely to use when searching for solutions in your industry.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Monitor all models:</strong> Different AI models may have varying knowledge about your brand, so track across all available platforms.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Set realistic expectations:</strong> New brands may start with lower visibility scores. Focus on consistent improvement over time.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Compare with competitors:</strong> Use visibility metrics to understand your market position relative to competitors.</span>
                </li>
              </ul>
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