import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  PlusCircle,
  Upload,
  Globe,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Lightbulb,
  Target
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Getting Started", href: "/" },
  { label: "Prompts" }
]

const tocItems = [
  { id: "what-are-prompts", title: "What are Prompts?", level: 2 },
  { id: "prompts-vs-keywords", title: "Prompts vs Keywords", level: 2 },
  { id: "creating-prompts", title: "Creating Prompts", level: 2 },
  { id: "bulk-upload", title: "Bulk Upload", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
]

export default function PromptsPage() {
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
              AI Search Prompts
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Create and manage prompts to track how AI systems respond to queries about your brand, products, and industry.
            </p>
          </div>

          {/* What are Prompts */}
          <section className="space-y-6 mb-12">
            <h2 id="what-are-prompts" className="text-2xl font-bold tracking-tight">What are Prompts?</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Prompts are the questions or queries that users type into AI chat systems. Unlike traditional 
                keywords, prompts are conversational, context-rich, and often include multiple concepts. 
                Finseo uses these prompts to simulate real user queries and track how AI systems respond.
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-5 w-5 text-[#0eca7b]" />
                  <span className="font-semibold">Why Track Prompts?</span>
                </div>
                <ul className="text-sm space-y-2 ml-8 list-disc text-muted-foreground">
                  <li>Understand how AI systems present your brand to users</li>
                  <li>Identify opportunities to improve AI visibility</li>
                  <li>Track competitive positioning in AI responses</li>
                  <li>Monitor sentiment and accuracy of AI-generated content</li>
                  <li>Discover which sources AI systems cite when mentioning you</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prompts vs Keywords */}
          <section className="space-y-6 mb-12">
            <h2 id="prompts-vs-keywords" className="text-2xl font-bold tracking-tight">Prompts vs Keywords</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Understanding the difference between traditional SEO keywords and AI prompts is crucial:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    Traditional Keywords
                  </h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Short, specific terms</li>
                    <li>• Focus on search volume</li>
                    <li>• Example: "CRM software"</li>
                    <li>• Match exact search terms</li>
                    <li>• Used for SEO ranking</li>
                  </ul>
                </div>
                
                <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/50">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-[#0eca7b]" />
                    AI Prompts
                  </h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Natural language questions</li>
                    <li>• Focus on user intent</li>
                    <li>• Example: "What's the best CRM for small businesses?"</li>
                    <li>• Conversational context</li>
                    <li>• Used for AI visibility</li>
                  </ul>
                </div>
              </div>
              
              <Alert className="mt-6">
                <Lightbulb className="h-4 w-4" />
                <AlertDescription>
                  <strong>Key Difference:</strong> While keywords target search engines, prompts target AI 
                  conversations. Think of prompts as the questions your customers actually ask.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Creating Prompts */}
          <section className="space-y-6 mb-12">
            <h2 id="creating-prompts" className="text-2xl font-bold tracking-tight">Creating Prompts</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Add prompts to your Finseo dashboard to start tracking AI visibility:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to AI Tracking</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Go to <code className="px-1.5 py-0.5 bg-muted rounded text-xs">app.finseo.ai/ai-tracking</code> in your dashboard.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Click Add Prompts</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click the "Add Prompts" button to open the prompt creation interface.
                    </p>
                    {/* Image Placeholder */}
                    <div className="rounded-lg border bg-muted/50 p-8 mb-4">
                      <img 
                        src="/addprompt.png" 
                        alt="Add Prompts Interface" 
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
                    <h3 className="font-semibold mb-2">Select Target Location</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Choose your target market (e.g., Germany, USA, UK). AI responses can vary by location.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">
                        <Globe className="h-3 w-3 mr-1" />
                        Germany
                      </Badge>
                      <Badge variant="secondary">
                        <Globe className="h-3 w-3 mr-1" />
                        USA
                      </Badge>
                      <Badge variant="secondary">
                        <Globe className="h-3 w-3 mr-1" />
                        UK
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Enter Your Prompts</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Add prompts one by one or paste multiple prompts. Think like your customers!
                    </p>
                    <div className="rounded-lg border bg-muted/50 p-4">
                      <p className="text-sm font-medium mb-2">Example Prompts:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• "What's the best [your product category] for small businesses?"</li>
                        <li>• "Compare [your brand] vs [competitor]"</li>
                        <li>• "How does [your product] help with [use case]?"</li>
                        <li>• "Recommend [product category] for [specific need]"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Save and Track</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click "Save Prompts" to start tracking. Results appear within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bulk Upload */}
          <section className="space-y-6 mb-12">
            <h2 id="bulk-upload" className="text-2xl font-bold tracking-tight">Bulk Upload via CSV</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                For large prompt lists, use our CSV bulk upload feature:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Upload className="h-5 w-5 text-[#0eca7b]" />
                  <span className="font-semibold">CSV Format</span>
                </div>
                <div className="bg-muted rounded p-4 mb-4">
                  <code className="text-sm">
                    prompt,location<br/>
                    "What's the best CRM for startups?",USA<br/>
                    "Compare Salesforce alternatives",UK<br/>
                    "Beste CRM Software für kleine Unternehmen",Germany
                  </code>
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• First column: The prompt text</li>
                  <li>• Second column: Target location code</li>
                  <li>• Include headers in first row</li>
                  <li>• UTF-8 encoding for international characters</li>
                </ul>
                {/* Image Placeholder */}
                <div className="rounded-lg border bg-muted/50 p-8 mt-4">
                  <img 
                    src="/csv.png" 
                    alt="CSV Upload Interface" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="space-y-6 mb-12">
            <h2 id="best-practices" className="text-2xl font-bold tracking-tight">Prompt Best Practices</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#0eca7b]" />
                    Types of Prompts to Include
                  </h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium mb-1">Comparison Prompts</p>
                      <p className="text-xs text-muted-foreground">
                        "Compare X vs Y" - Track competitive positioning
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Solution Prompts</p>
                      <p className="text-xs text-muted-foreground">
                        "Best tool for..." - Capture solution-seekers
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Feature Prompts</p>
                      <p className="text-xs text-muted-foreground">
                        "Does X have Y feature?" - Track feature visibility
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Use Case Prompts</p>
                      <p className="text-xs text-muted-foreground">
                        "How to do Z with..." - Monitor use case coverage
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Think Like Your Customer:</strong> Use natural language and real questions 
                        your customers would ask.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Include Variations:</strong> Add different phrasings of similar questions 
                        to capture more data.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Localize Prompts:</strong> Create location-specific prompts in local 
                        languages for better accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Start Broad, Then Specific:</strong> Begin with general industry prompts, 
                        then add specific brand/product prompts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Regular Updates:</strong> Add new prompts based on emerging trends and 
                        customer feedback.
                      </p>
                    </div>
                  </div>
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
              After creating your prompts, Finseo will automatically:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Run prompts across all selected models</li>
              <li>Extract competitors mentioned in responses</li>
              <li>Identify sources and citations</li>
              <li>Analyze sentiment and positioning</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/getting-started/competitors">
                  Continue to Competitors
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