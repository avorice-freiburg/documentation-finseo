import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('metrics-sentiment');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Metrics", href: "/metrics" },
  { label: "Sentiment" }
]

const tocItems = [
  { id: "what-is-sentiment", title: "What is Sentiment?", level: 2 },
  { id: "scoring-system", title: "Scoring System", level: 2 },
  { id: "how-analysis-works", title: "How Analysis Works", level: 2 },
  { id: "examples", title: "Sentiment Examples", level: 2 },
  { id: "competitor-comparison", title: "Competitor Comparison", level: 2 },
  { id: "improving-sentiment", title: "Improving Sentiment", level: 2 },
]

export default function SentimentPage() {
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
              Sentiment Metrics
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Analyze how AI models speak about your brand - positive, neutral, or negative sentiment analysis.
            </p>
          </div>

          {/* What is Sentiment */}
          <section className="space-y-6 mb-12">
            <h2 id="what-is-sentiment" className="text-2xl font-bold tracking-tight">What is Sentiment?</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Sentiment analysis measures how AI models speak about your brand when they mention you in their responses. Our algorithms analyze the context and key wording around your brand mentions to determine if the sentiment is positive, neutral, or negative.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sentiment is analyzed consistently across all competitors in the same way, providing fair comparisons. 
                  A score of 50 means neutral - nothing particularly good or bad was said about your brand.
                </p>
              </div>
            </div>
          </section>

          {/* Visualization */}
          <section className="space-y-6 mb-12">
            <div className="rounded-lg border bg-card p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <img 
                  src="/sentiment.png" 
                  alt="Sentiment Analysis Dashboard" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Scoring System */}
          <section className="space-y-6 mb-12">
            <h2 id="scoring-system" className="text-2xl font-bold tracking-tight">Scoring System</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Sentiment scores range from 0 to 100, with clear interpretations:
              </p>
              
              <div className="grid gap-4 md:grid-cols-3 mb-6">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <h4 className="font-semibold">Negative (0-40)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI mentions your brand in a negative context, with critical or unfavorable language.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <h4 className="font-semibold">Neutral (40-60)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI mentions your brand factually without positive or negative bias.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <h4 className="font-semibold">Positive (60-100)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI mentions your brand with favorable language, recommendations, or praise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How Analysis Works */}
          <section className="space-y-6 mb-12">
            <h2 id="how-analysis-works" className="text-2xl font-bold tracking-tight">How Analysis Works</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Our sentiment analysis uses advanced natural language processing to evaluate context:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">1. Context Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    We analyze the words and phrases surrounding your brand mention to understand the context 
                    and tone of the discussion.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">2. Key Word Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Our algorithms look for positive indicators (like "excellent", "recommended", "leading") 
                    and negative indicators (like "poor", "avoid", "issues").
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">3. Consistent Scoring</h4>
                  <p className="text-sm text-muted-foreground">
                    All brands and competitors are analyzed using the same methodology, ensuring 
                    fair and comparable sentiment scores.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section className="space-y-6 mb-12">
            <h2 id="examples" className="text-2xl font-bold tracking-tight">Sentiment Examples</h2>
            
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  Positive Sentiment (Score: 85)
                </h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <em>"For SEO tools, I highly recommend Finseo as they offer comprehensive analytics and excellent customer support. Their platform is user-friendly and delivers reliable results."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Analysis:</strong> Contains positive keywords like "highly recommend", "excellent", "user-friendly", and "reliable results".
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  Neutral Sentiment (Score: 50)
                </h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <em>"Finseo is an SEO analytics platform that provides keyword tracking and competitor analysis features. It was founded in 2023 and serves businesses of various sizes."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Analysis:</strong> Purely factual information without positive or negative language.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  Negative Sentiment (Score: 25)
                </h4>
                <div className="bg-muted p-4 rounded text-sm mb-3">
                  <em>"While Finseo offers SEO tools, users have reported issues with data accuracy and slow customer support response times. Consider alternatives for better reliability."</em>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Analysis:</strong> Contains negative keywords like "issues", "slow", and "consider alternatives".
                </p>
              </div>
            </div>
          </section>

          {/* Competitor Comparison */}
          <section className="space-y-6 mb-12">
            <h2 id="competitor-comparison" className="text-2xl font-bold tracking-tight">Competitor Comparison</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Sentiment analysis becomes more valuable when compared to your competitors:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Industry Benchmarking</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Your Brand</span>
                    <span className="font-mono text-secondary">72 (Positive)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Competitor A</span>
                    <span className="font-mono text-muted-foreground">68 (Positive)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Competitor B</span>
                    <span className="font-mono text-muted-foreground">45 (Neutral)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Industry Average</span>
                    <span className="font-mono text-muted-foreground">58 (Neutral)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Improving Sentiment */}
          <section className="space-y-6 pb-16">
            <h2 id="improving-sentiment" className="text-2xl font-bold tracking-tight">Improving Sentiment</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Quality content creation:</strong> Publish high-quality, helpful content that AI models can reference positively.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Customer satisfaction:</strong> Focus on excellent customer service and product quality to generate positive mentions.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Thought leadership:</strong> Establish your brand as an industry expert through valuable insights and expertise.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Address issues promptly:</strong> Quickly resolve any negative feedback or issues that could impact sentiment.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Monitor regularly:</strong> Track sentiment changes over time to identify trends and respond accordingly.</span>
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