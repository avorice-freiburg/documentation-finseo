import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Package, 
  TrendingUp,
  BarChart3,
  Sparkles,
  Lock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShoppingBag,
  Tag,
  Target
} from "lucide-react"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('getting-started-products');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Getting Started", href: "/" },
  { label: "Products" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "tier-requirements", title: "Tier Requirements", level: 2 },
  { id: "automatic-extraction", title: "Automatic Product Extraction", level: 2 },
  { id: "product-analytics", title: "Product Analytics Dashboard", level: 2 },
  { id: "what-you-can-track", title: "What You Can Track", level: 2 },
  { id: "use-cases", title: "Use Cases", level: 2 },
]

export default function ProductsPage() {
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
              Product Mention Tracking
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Monitor and analyze specific product mentions in AI responses to understand market positioning and competitive dynamics. Part of our comprehensive <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracking</Link> platform.
            </p>
          </div>

          {/* Tier Requirements Alert */}
          <Alert className="mb-8 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
            <Lock className="h-4 w-4 text-[#ff6b35]" />
            <AlertTitle className="text-[#ff6b35]">Premium Feature</AlertTitle>
            <AlertDescription>
              Product tracking is available exclusively for <strong>Business</strong>, <strong>Enterprise</strong>, 
              and <strong>Agency</strong> tiers. Upgrade your plan to unlock this powerful feature.
            </AlertDescription>
          </Alert>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Product tracking goes beyond brand mentions to capture specific product names, models, and SKUs 
                mentioned in AI responses. This granular tracking helps you understand which of your products 
                AI systems recommend most frequently and in what contexts.
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-5 w-5 text-[#0eca7b]" />
                  <span className="font-semibold">Why Track Products?</span>
                </div>
                <ul className="text-sm space-y-2 ml-8 list-disc text-muted-foreground">
                  <li>Identify your most AI-visible products with our <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracker</Link></li>
                  <li>Track product-level competitive positioning</li>
                  <li>Understand which features AI highlights for each product</li>
                  <li>Monitor new product adoption in AI responses</li>
                  <li>Analyze product recommendation patterns</li>
                  <li>Track seasonal product visibility trends</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tier Requirements */}
          <section className="space-y-6 mb-12">
            <h2 id="tier-requirements" className="text-2xl font-bold tracking-tight">Tier Requirements</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Product tracking is a premium feature designed for businesses that need detailed product-level insights:
              </p>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/50">
                  <div className="flex items-center gap-2 mb-3">
                    <ShoppingBag className="h-5 w-5 text-[#0eca7b]" />
                    <h4 className="font-semibold">Business</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      Up to 100 products
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      Basic analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      Monthly reports
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-5 w-5 text-[#0eca7b]" />
                    <h4 className="font-semibold">Enterprise</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      Unlimited products
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      Real-time alerts
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-[#0eca7b]" />
                    <h4 className="font-semibold">Agency</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      Multi-client support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      White-label reports
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                      API access
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-center">
                  <strong>Not on a premium tier?</strong> 
                  <Link href="https://app.finseo.ai/pricing" className="text-[#0eca7b] hover:underline ml-1">
                    Upgrade your plan
                  </Link> to unlock product tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Automatic Extraction */}
          <section className="space-y-6 mb-12">
            <h2 id="automatic-extraction" className="text-2xl font-bold tracking-tight">Automatic Product Extraction</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <Alert className="mb-6">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  <strong>Fully Automated!</strong> Just like competitors and sources, Finseo automatically 
                  extracts all product mentions from AI responses. No manual configuration needed.
                </AlertDescription>
              </Alert>
              
              <p className="text-muted-foreground mb-6">
                Our advanced product detection system identifies:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Product Names</h3>
                    <p className="text-sm text-muted-foreground">
                      Specific product names and model numbers mentioned in responses
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Feature Associations</h3>
                    <p className="text-sm text-muted-foreground">
                      Which features and benefits AI associates with each product
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Context Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Use cases and scenarios where products are recommended
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 rounded-lg border bg-muted/50 p-4">
                <p className="text-sm font-medium mb-2">Examples of detected products:</p>
                <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                  <li>• "iPhone 15 Pro Max" → Specific model detection</li>
                  <li>• "Tesla Model Y" → Product line tracking</li>
                  <li>• "Adobe Creative Suite" → Software suite recognition</li>
                  <li>• "Nike Air Max 90" → Product variant identification</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Analytics Dashboard */}
          <section className="space-y-6 mb-12">
            <h2 id="product-analytics" className="text-2xl font-bold tracking-tight">Product Analytics Dashboard</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Access detailed product insights at <code className="px-1.5 py-0.5 bg-muted rounded text-xs">app.finseo.ai/products</code>:
              </p>
              
              {/* Image Placeholder */}
              <div className="rounded-lg border bg-muted/50 p-8 mb-6">
                <img 
                  src="/products.png" 
                  alt="Product Analytics Dashboard" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Product Rankings</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    See which products AI recommends most frequently
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Visibility Trends</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track product mention growth over time
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Feature Analysis</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Which features AI highlights for each product
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Category Performance</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Product performance by category and segment
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
                Product tracking provides granular insights into your product portfolio's AI visibility:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-4">Product Metrics</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Mention Frequency</p>
                        <p className="text-xs text-muted-foreground">
                          How often each product appears in AI responses
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Recommendation Context</p>
                        <p className="text-xs text-muted-foreground">
                          When and why AI recommends each product
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Feature Attribution</p>
                        <p className="text-xs text-muted-foreground">
                          Which features AI emphasizes per product
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Competitive Comparisons</p>
                        <p className="text-xs text-muted-foreground">
                          How products compare to competitor offerings
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Sentiment by Product</p>
                        <p className="text-xs text-muted-foreground">
                          Positive/negative sentiment per product
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Launch Impact</p>
                        <p className="text-xs text-muted-foreground">
                          Track new product adoption in AI systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Historical Tracking */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-5 w-5 text-[#0eca7b]" />
                    <span className="font-semibold">Historical Product Performance</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Track product visibility changes over time to identify:
                  </p>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Seasonal trends in product recommendations</li>
                    <li>Impact of product updates on AI visibility</li>
                    <li>Emerging vs declining products in AI responses</li>
                    <li>Market share shifts at the product level</li>
                  </ul>
                  {/* Image Placeholder */}
                  <div className="rounded-lg border bg-muted/50 p-8 mt-4">
                    <img 
                      src="/price.png" 
                      alt="Price Analysis - Distributed Price Ranges" 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6 mb-12">
            <h2 id="use-cases" className="text-2xl font-bold tracking-tight">Use Cases</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Product tracking enables powerful business strategies:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#0eca7b]" />
                    Product Development
                  </h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Identify features AI values most in your products</li>
                    <li>Discover gaps in your product line based on AI recommendations</li>
                    <li>Prioritize product improvements based on AI feedback</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-[#0eca7b]" />
                    Marketing Strategy
                  </h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Focus marketing on your most AI-visible products</li>
                    <li>Create content highlighting AI-favored features</li>
                    <li>Adjust messaging based on how AI describes products</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#0eca7b]" />
                    Inventory Planning
                  </h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Stock products that AI recommends frequently</li>
                    <li>Predict demand based on AI recommendation trends</li>
                    <li>Phase out products with declining AI visibility</li>
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
                    <strong>Regular Monitoring:</strong> Check product performance weekly to catch trends early.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Feature Optimization:</strong> Update product descriptions based on AI preferences.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Competitive Analysis:</strong> Compare product performance against competitors.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Launch Tracking:</strong> Monitor new product adoption in AI systems from day one.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">Setup Complete!</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              You've completed the Getting Started setup. Your AI visibility tracking is now active!
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Data collection begins immediately</li>
              <li>First insights available within 24-48 hours</li>
              <li>Full historical data builds over 2-4 weeks</li>
              <li>Product tracking activates after plan upgrade</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/metrics">
                  Explore Metrics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://app.finseo.ai/pricing" target="_blank">
                  Upgrade Plan
                  <Lock className="ml-2 h-4 w-4" />
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