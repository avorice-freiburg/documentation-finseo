import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('metrics-mentions');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Metrics", href: "/metrics" },
  { label: "Mentions" }
]

const tocItems = [
  { id: "what-are-mentions", title: "What are Mentions?", level: 2 },
  { id: "tracking-system", title: "Tracking System", level: 2 },
  { id: "brand-variations", title: "Brand Variations", level: 2 },
  { id: "mention-examples", title: "Mention Examples", level: 2 },
  { id: "frequency-analysis", title: "Frequency Analysis", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
]

export default function MentionsPage() {
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
              Mentions Metrics
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Track how frequently your brand or domain appears in AI responses across all models with our <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI brand visibility tracker</Link>.
            </p>
          </div>

          {/* What are Mentions */}
          <section className="space-y-6 mb-12">
            <h2 id="what-are-mentions" className="text-2xl font-bold tracking-tight">What are Mentions?</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Mentions measure how often your brand name or domain appears in AI responses when tracking specific prompts. This metric provides insights into your brand's frequency and recognition across different AI models.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  If your brand has multiple name variations (like "Apple" vs "Apple Inc." vs "Apple Computer"), 
                  you need to configure <Link href="/metrics/synonyms" className="text-secondary hover:underline">brand synonyms</Link> in your project settings to track all variations accurately.
                </p>
              </div>
            </div>
          </section>

          {/* Visualization */}
          <section className="space-y-6 mb-12">
            <div className="rounded-lg border bg-card p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <img 
                  src="/mentions.png" 
                  alt="Mentions Tracking Dashboard" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Tracking System */}
          <section className="space-y-6 mb-12">
            <h2 id="tracking-system" className="text-2xl font-bold tracking-tight">Tracking System</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Our mention tracking system monitors multiple types of brand references:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Brand Names</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Direct mentions of your brand name in any context within AI responses.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Examples: "Finseo", "Finseo AI", "Finseo Platform"
                  </div>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Domain References</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Mentions of your website domain or URL in responses.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Examples: "finseo.ai", "www.finseo.ai", "app.finseo.ai"
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Multiple Mentions Per Response</h4>
                  <p className="text-sm text-muted-foreground">
                    If your brand is mentioned multiple times within a single AI response, each mention is counted separately. 
                    This affects your total mention count but not your <Link href="/metrics/visibility" className="text-secondary hover:underline">visibility percentage</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Variations */}
          <section className="space-y-6 mb-12">
            <h2 id="brand-variations" className="text-2xl font-bold tracking-tight">Brand Variations</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Many brands have multiple name variations that AI models might use. Setting up synonyms ensures comprehensive tracking:
              </p>
              
              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-4">Example: Automotive Brand</h4>
                  <div className="space-y-3 text-sm">
                    <div><strong>Primary Brand:</strong> "Mercedes-Benz"</div>
                    <div><strong>Synonyms to track:</strong></div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Mercedes</li>
                      <li>Benz</li>
                      <li>Daimler</li>
                      <li>Mercedes-Benz AG</li>
                      <li>Mercedes Benz (without hyphen)</li>
                      <li>Stuttgart-based Mercedes</li>
                      <li>German luxury automaker Mercedes</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-4">Example: Service Business</h4>
                  <div className="space-y-3 text-sm">
                    <div><strong>Primary Brand:</strong> "McDonald's"</div>
                    <div><strong>Synonyms to track:</strong></div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>McDonalds</li>
                      <li>McDonald's Corporation</li>
                      <li>Mickey D's</li>
                      <li>Golden Arches</li>
                      <li>McD's</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-secondary"></div>
                    <h4 className="font-semibold">Configure Your Synonyms</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Set up your brand variations in <Link href="/metrics/synonyms" className="text-secondary hover:underline">project settings</Link> to ensure accurate mention tracking across all possible name variations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mention Examples */}
          <section className="space-y-6 mb-12">
            <h2 id="mention-examples" className="text-2xl font-bold tracking-tight">Mention Examples</h2>
            
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Single Mention Response</h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <em>"For comprehensive SEO analytics, <span className="bg-secondary/20 px-1 rounded">Finseo</span> offers advanced tracking capabilities including AI model monitoring and competitor analysis."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Mention Count:</strong> 1 (single brand mention)
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Multiple Mentions Response</h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <em>"<span className="bg-secondary/20 px-1 rounded">Finseo</span> provides excellent SEO analytics tools. You can sign up at <span className="bg-secondary/20 px-1 rounded">finseo.ai</span> to access their dashboard. Many users prefer <span className="bg-secondary/20 px-1 rounded">Finseo's</span> AI-powered insights over traditional tools."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Mention Count:</strong> 3 (brand name + domain + possessive form)
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Synonym Variations</h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <em>"<span className="bg-secondary/20 px-1 rounded">Mercedes-Benz</span> released new electric vehicles this year. <span className="bg-secondary/20 px-1 rounded">Mercedes</span> continues to innovate in the luxury automotive sector, with <span className="bg-secondary/20 px-1 rounded">Daimler</span> leading sustainable mobility trends."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Mention Count:</strong> 3 (all variations tracked as same brand with proper synonym setup)
                </p>
              </div>
            </div>
          </section>

          {/* Frequency Analysis */}
          <section className="space-y-6 mb-12">
            <h2 id="frequency-analysis" className="text-2xl font-bold tracking-tight">Frequency Analysis</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Mention frequency provides insights into brand recognition and AI model familiarity:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Weekly Mention Analysis</h4>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-5 gap-4 font-semibold border-b pb-2">
                    <span>Model</span>
                    <span>Responses</span>
                    <span>Mentions</span>
                    <span>Avg/Response</span>
                    <span>Visibility</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <Link href="https://www.finseo.ai/ai-visibility-tracking/chatgpt" className="text-[#0eca7b] hover:underline" target="_blank">ChatGPT</Link>
                    <span className="font-mono">25</span>
                    <span className="font-mono">18</span>
                    <span className="font-mono">0.72</span>
                    <span className="font-mono text-secondary">60%</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <Link href="https://www.finseo.ai/ai-visibility-tracking/claude" className="text-[#0eca7b] hover:underline" target="_blank">Claude</Link>
                    <span className="font-mono">25</span>
                    <span className="font-mono">22</span>
                    <span className="font-mono">0.88</span>
                    <span className="font-mono text-secondary">68%</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <Link href="https://www.finseo.ai/ai-visibility-tracking/perplexity" className="text-[#0eca7b] hover:underline" target="_blank">Perplexity</Link>
                    <span className="font-mono">25</span>
                    <span className="font-mono">15</span>
                    <span className="font-mono">0.60</span>
                    <span className="font-mono">48%</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <span>Google AI</span>
                    <span className="font-mono">25</span>
                    <span className="font-mono">12</span>
                    <span className="font-mono">0.48</span>
                    <span className="font-mono">40%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Higher mention frequency often correlates with better <Link href="/metrics/visibility" className="text-secondary hover:underline">visibility</Link> and <Link href="/metrics/position" className="text-secondary hover:underline">positioning</Link> metrics.
                </p>
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
                  <span><strong>Complete synonym setup:</strong> Configure all possible brand name variations in your <Link href="/metrics/synonyms" className="text-secondary hover:underline">project settings</Link> for comprehensive tracking.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Monitor brand consistency:</strong> Ensure your brand name is used consistently across all your content and communications.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Track domain mentions:</strong> Include your website domain in synonym tracking to capture URL-based references.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Analyze patterns:</strong> Look for trends in mention frequency across different AI models to identify strengths and opportunities.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Content optimization:</strong> Create content that naturally encourages AI models to mention your brand multiple times in relevant contexts.</span>
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