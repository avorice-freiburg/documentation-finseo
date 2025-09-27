import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Bot, 
  Settings,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Zap
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Getting Started", href: "/" },
  { label: "Models" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "available-models", title: "Available Models", level: 2 },
  { id: "activating-models", title: "Activating Models", level: 2 },
  { id: "model-limits", title: "Model Limits", level: 2 },
  { id: "model-prompt-connection", title: "Models & Prompts", level: 2 },
]

export default function ModelsPage() {
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
              AI Models Configuration
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Select which AI models to track for comprehensive visibility across different AI platforms.
            </p>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Finseo tracks your brand's visibility across multiple AI models. Each model represents a different 
                AI system (like ChatGPT, Claude, or Perplexity) that users interact with. By tracking multiple 
                models, you get a complete picture of your AI visibility landscape.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BrainCircuit className="h-5 w-5 text-[#0eca7b]" />
                  <span className="font-semibold">Model Tracking Benefits</span>
                </div>
                <ul className="text-sm space-y-2 ml-8 list-disc text-muted-foreground">
                  <li>Compare performance across different AI platforms</li>
                  <li>Identify which models favor your brand</li>
                  <li>Optimize content for specific AI systems</li>
                  <li>Track emerging AI platforms as they gain popularity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Available Models */}
          <section className="space-y-6 mb-12">
            <h2 id="available-models" className="text-2xl font-bold tracking-tight">Available Models</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Finseo currently supports tracking for the following AI models:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=openai.com&sz=64" 
                      alt="ChatGPT" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">ChatGPT</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    OpenAI's conversational AI assistant
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=google.com&sz=64" 
                      alt="AI Overviews" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">AI Overviews</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Google's AI-powered search summaries
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=google.com&sz=64" 
                      alt="AI Mode" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">AI Mode</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Google's conversational search mode
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64" 
                      alt="Perplexity" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">Perplexity</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI search with real-time web access
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64" 
                      alt="Gemini" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">Gemini</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Google's multimodal AI assistant
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=x.com&sz=64" 
                      alt="Grok" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">Grok</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    X's AI with real-time information
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=mistral.ai&sz=64" 
                      alt="Mistral" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">Mistral</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    European open-source AI models
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=deepseek.com&sz=64" 
                      alt="DeepSeek" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">DeepSeek</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced reasoning AI assistant
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=claude.ai&sz=64" 
                      alt="Claude" 
                      className="h-6 w-6 rounded"
                    />
                    <h4 className="font-semibold">Claude</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Anthropic's helpful AI assistant
                  </p>
                </div>
              </div>
              
              <Alert className="mt-6">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  New AI models are added regularly as they gain market adoption. Check back frequently for updates.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Activating Models */}
          <section className="space-y-6 mb-12">
            <h2 id="activating-models" className="text-2xl font-bold tracking-tight">Activating Models</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                To start tracking specific AI models:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to Models Page</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Go to <code className="px-1.5 py-0.5 bg-muted rounded text-xs">app.finseo.ai/models</code> in your dashboard.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Select Models to Track</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Toggle on the models you want to track. Each model shows its current status and capabilities.
                    </p>
                    {/* Image Placeholder */}
                    <div className="rounded-lg border bg-muted/50 p-8 mb-4">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <Settings className="h-16 w-16 text-muted-foreground/50" />
                        <p className="text-sm text-muted-foreground text-center">Models Selection Interface</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Save Configuration</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click "Save Changes" to activate your selected models. Tracking begins immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Model Limits */}
          <section className="space-y-6 mb-12">
            <h2 id="model-limits" className="text-2xl font-bold tracking-tight">Model Limits</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <Alert className="mb-6 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
                <AlertTitle className="text-[#ff6b35]">Default Limit</AlertTitle>
                <AlertDescription>
                  By default, you can track up to 3 AI models simultaneously. This covers the most popular 
                  AI platforms for most use cases.
                </AlertDescription>
              </Alert>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">Need More Models?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  If you need to track more than 3 models simultaneously:
                </p>
                <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
                  <li>Contact our sales team for enterprise plans</li>
                  <li>Get custom model limits based on your needs</li>
                  <li>Access beta models before general availability</li>
                </ul>
                <Button variant="outline" size="sm">
                  Contact Sales
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </section>

          {/* Model & Prompt Connection */}
          <section className="space-y-6 mb-12">
            <h2 id="model-prompt-connection" className="text-2xl font-bold tracking-tight">Models & Prompts Connection</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Models and prompts work together to provide comprehensive AI visibility tracking:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-5 w-5 text-[#0eca7b]" />
                  <span className="font-semibold">How It Works</span>
                </div>
                <ol className="text-sm space-y-3 ml-6 list-decimal text-muted-foreground">
                  <li>
                    <strong>Select Models:</strong> Choose which AI platforms to track (e.g., ChatGPT, Claude)
                  </li>
                  <li>
                    <strong>Create Prompts:</strong> Define search queries in the <Link href="/getting-started/prompts" className="text-[#0eca7b] hover:underline">Prompts section</Link>
                  </li>
                  <li>
                    <strong>Cross-Model Testing:</strong> Each prompt runs across all selected models
                  </li>
                  <li>
                    <strong>Compare Results:</strong> See how different models respond to the same prompts
                  </li>
                </ol>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-muted/50">
                <p className="text-sm">
                  <strong>Example:</strong> If you track ChatGPT, Claude, and Perplexity, and create 10 prompts, 
                  Finseo will run 30 queries (10 prompts × 3 models) to give you complete visibility data.
                </p>
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
                    <strong>Start with Major Players:</strong> Begin with ChatGPT, Claude, and Perplexity 
                    as they have the largest user bases.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Monitor Performance:</strong> After 2-4 weeks, review which models drive the 
                    most visibility for your brand.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Adjust as Needed:</strong> Swap out underperforming models for emerging 
                    platforms as the AI landscape evolves.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Consider Your Audience:</strong> Choose models based on where your target 
                    audience is most likely to search.
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
              After configuring your models:
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/getting-started/prompts">
                  Continue to Prompts
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