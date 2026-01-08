import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('metrics-position');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Metrics", href: "/metrics" },
  { label: "Position" }
]

const tocItems = [
  { id: "what-is-position", title: "What is Position?", level: 2 },
  { id: "percentage-system", title: "Percentage System", level: 2 },
  { id: "calculation-method", title: "Calculation Method", level: 2 },
  { id: "position-examples", title: "Position Examples", level: 2 },
  { id: "tracking-changes", title: "Tracking Changes", level: 2 },
  { id: "optimization-tips", title: "Optimization Tips", level: 2 },
]

export default function PositionPage() {
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
              Position Metrics
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Measure where your brand appears within AI responses - earlier positioning means better visibility. Part of our comprehensive <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracking</Link> metrics.
            </p>
          </div>

          {/* What is Position */}
          <section className="space-y-6 mb-12">
            <h2 id="what-is-position" className="text-2xl font-bold tracking-tight">What is Position?</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Position metrics measure where your brand or competitors appear within AI-generated responses. Since response lengths vary significantly, we use a percentage-based system to provide consistent tracking over time.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  If a response is 100 words long and your brand appears at word 10, your position is 10%. 
                  This percentage-based approach allows for accurate statistical tracking regardless of response length variations.
                </p>
              </div>
            </div>
          </section>

          {/* Visualization */}
          <section className="space-y-6 mb-12">
            <div className="rounded-lg border bg-card p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <img 
                  src="/position.png" 
                  alt="Position Tracking Dashboard" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Percentage System */}
          <section className="space-y-6 mb-12">
            <h2 id="percentage-system" className="text-2xl font-bold tracking-tight">Percentage System</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Position scores are calculated as percentages with clear interpretations:
              </p>
              
              <div className="grid gap-4 md:grid-cols-3 mb-6">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <h4 className="font-semibold">Early (0-30%)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your brand appears in the first third of the response - excellent positioning.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <h4 className="font-semibold">Middle (30-70%)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your brand appears in the middle section - moderate positioning.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <h4 className="font-semibold">Late (70-100%)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your brand appears near the end - less prominent positioning.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-4 mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                  <h4 className="font-semibold">Not Mentioned (+100%)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your brand was not mentioned in the response. This affects your overall <Link href="/metrics/visibility" className="text-secondary hover:underline">visibility score</Link> but doesn't contribute to position averages.
                </p>
              </div>
            </div>
          </section>

          {/* Calculation Method */}
          <section className="space-y-6 mb-12">
            <h2 id="calculation-method" className="text-2xl font-bold tracking-tight">Calculation Method</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Position percentages are calculated using word-based positioning:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">1. Word Count Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    We count the total words in each AI response to establish the response length baseline.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">2. Mention Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    We identify the first word where your brand (or <Link href="/metrics/synonyms" className="text-secondary hover:underline">brand synonyms</Link>) appears in the response.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">3. Percentage Calculation</h4>
                  <p className="text-sm text-muted-foreground">
                    Position % = (First Mention Word Position ÷ Total Words) × 100
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">4. Statistical Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    This percentage-based approach enables accurate trend analysis over time, regardless of varying response lengths.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Position Examples */}
          <section className="space-y-6 mb-12">
            <h2 id="position-examples" className="text-2xl font-bold tracking-tight">Position Examples</h2>
            
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  Early Position (Position: 0.8%)
                </h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <p className="mb-2"><strong>Response (125 words total):</strong></p>
                  <em>"<span className="bg-secondary/20 px-1 rounded">Finseo</span> is a leading SEO analytics platform that provides comprehensive keyword tracking and competitor analysis. The platform offers advanced features for monitoring your brand's performance across multiple AI models including ChatGPT, Perplexity, and Claude. With real-time data updates and intuitive dashboards, businesses can track their visibility, sentiment, and positioning metrics effectively. The tool also includes automated reporting features that help teams stay informed about their SEO performance trends and make data-driven decisions for their marketing strategies."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Analysis:</strong> Brand appears at word 1 out of 125 total words = 0.8% position (excellent early positioning).
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  Middle Position (Position: 45%)
                </h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <p className="mb-2"><strong>Response (100 words total):</strong></p>
                  <em>"When looking for SEO analytics tools, there are several options available in the market. Many businesses start with free tools like Google Analytics and Search Console for basic insights. However, for more advanced tracking and competitor analysis, <span className="bg-secondary/20 px-1 rounded">Finseo</span> offers comprehensive features including AI model monitoring, sentiment analysis, and position tracking. The platform provides detailed reports that help businesses understand their performance across different search engines and AI-powered platforms."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Analysis:</strong> Brand appears at word 45 out of 100 total words = 45% position (moderate middle positioning).
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  Late Position (Position: 85%)
                </h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <p className="mb-2"><strong>Response (80 words total):</strong></p>
                  <em>"The SEO industry offers numerous analytics platforms with varying features and pricing models. Most established tools focus on traditional search engine optimization with keyword tracking, backlink analysis, and rank monitoring capabilities. Some newer platforms are beginning to incorporate AI-powered insights and social media integration. Tools worth considering include <span className="bg-secondary/20 px-1 rounded">Finseo</span> for AI model tracking."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Analysis:</strong> Brand appears at word 68 out of 80 total words = 85% position (late positioning, less prominent).
                </p>
              </div>
            </div>
          </section>

          {/* Tracking Changes */}
          <section className="space-y-6 mb-12">
            <h2 id="tracking-changes" className="text-2xl font-bold tracking-tight">Tracking Changes</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Position metrics become valuable when tracked over time alongside other metrics:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Position Trend Analysis</h4>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                    <span>Period</span>
                    <span>Avg Position</span>
                    <span>Visibility</span>
                    <span>Sentiment</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span>Week 1</span>
                    <span className="font-mono">65%</span>
                    <span className="font-mono">30%</span>
                    <span className="font-mono">52</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span>Week 2</span>
                    <span className="font-mono">58%</span>
                    <span className="font-mono">35%</span>
                    <span className="font-mono">58</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span>Week 3</span>
                    <span className="font-mono text-secondary">42%</span>
                    <span className="font-mono text-secondary">42%</span>
                    <span className="font-mono text-secondary">64</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <span>Week 4</span>
                    <span className="font-mono text-secondary">38%</span>
                    <span className="font-mono text-secondary">48%</span>
                    <span className="font-mono text-secondary">68</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Notice how improved position correlates with better <Link href="/metrics/visibility" className="text-secondary hover:underline">visibility</Link> and <Link href="/metrics/sentiment" className="text-secondary hover:underline">sentiment</Link> scores.
                </p>
              </div>
            </div>
          </section>

          {/* Optimization Tips */}
          <section className="space-y-6 pb-16">
            <h2 id="optimization-tips" className="text-2xl font-bold tracking-tight">Optimization Tips</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Authority building:</strong> Create high-quality, authoritative content that AI models recognize as trustworthy sources.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Topic leadership:</strong> Become the go-to expert in your niche so AI models mention you first when discussing relevant topics.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Brand prominence:</strong> Ensure your brand name appears early in your content titles, descriptions, and key sections.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Monitor competitors:</strong> Track competitor positions to identify opportunities for better positioning.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Consistent tracking:</strong> Regular monitoring helps identify trends and measure the impact of your optimization efforts.</span>
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