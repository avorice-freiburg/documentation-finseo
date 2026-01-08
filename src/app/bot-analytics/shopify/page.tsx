import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import { 
  ShoppingCart, 
  Download, 
  Cloud,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Activity,
  BarChart3
} from "lucide-react"

export const metadata: Metadata = getPageMetadata('bot-analytics-shopify');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Shopify" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "shopify-plus", title: "Shopify Plus - Log Drains", level: 2 },
  { id: "cdn-method", title: "CDN/Reverse Proxy Method", level: 2 },
  { id: "choosing-method", title: "Choosing the Right Method", level: 2 },
  { id: "limitations", title: "Limitations & Considerations", level: 2 },
]

export default function ShopifyPage() {
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
              Shopify Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              How to access server logs from Shopify stores for AI bot analytics and <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracking</Link>.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Shopify</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Shopify is a complete commerce platform that lets anyone start, grow, manage, and scale a business. 
              As a fully managed SaaS platform, Shopify doesn't provide direct access to raw server logs. However, 
              there are alternative methods to obtain the data needed for bot analytics.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">SaaS Platform</Badge>
              <Badge variant="secondary">Limited Log Access</Badge>
              <Badge variant="secondary">Enterprise Options Available</Badge>
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
            <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
            <AlertTitle className="text-[#ff6b35]">Limited Native Access</AlertTitle>
            <AlertDescription>
              Standard Shopify plans don't provide access to raw server logs. The methods described below are 
              workarounds that require either Shopify Plus or additional services. Choose the method that best 
              fits your plan and technical requirements.
            </AlertDescription>
          </Alert>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Unlike traditional hosting providers, Shopify operates as a fully managed platform where server 
                infrastructure is abstracted away from merchants. This means standard access to server logs is 
                not available. However, there are two primary approaches to obtain the log data needed for bot analytics:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Shopify Plus Log Drains</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enterprise feature for streaming logs to external services like Splunk or Datadog
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cloud className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">CDN/Reverse Proxy</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use Cloudflare or Fastly in front of your domain to capture visitor logs
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Shopify Plus - Log Drains */}
          <section className="space-y-6 mb-12">
            <h2 id="shopify-plus" className="text-2xl font-bold tracking-tight">Method 1: Shopify Plus - Log Drains</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                If you're on Shopify Plus, you can enable log drains to ship logs to external monitoring services. 
                This provides comprehensive visibility into your store's traffic, including bot visits.
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Contact Shopify Plus Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Log drains are not self-service. Contact your Merchant Success Manager or Shopify Plus 
                      Support to request log drain configuration.
                    </p>
                    <Alert className="mt-3">
                      <Zap className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        Log drains are only available for Shopify Plus merchants and require support team activation.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Choose Your Log Destination</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Shopify Plus supports sending logs to various third-party services:
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg border bg-card p-3">
                        <h5 className="font-medium text-sm mb-1">Splunk</h5>
                        <p className="text-xs text-muted-foreground">Enterprise log analysis platform</p>
                      </div>
                      <div className="rounded-lg border bg-card p-3">
                        <h5 className="font-medium text-sm mb-1">Datadog</h5>
                        <p className="text-xs text-muted-foreground">Cloud monitoring service</p>
                      </div>
                      <div className="rounded-lg border bg-card p-3">
                        <h5 className="font-medium text-sm mb-1">New Relic</h5>
                        <p className="text-xs text-muted-foreground">Application performance monitoring</p>
                      </div>
                      <div className="rounded-lg border bg-card p-3">
                        <h5 className="font-medium text-sm mb-1">Custom HTTPS Endpoint</h5>
                        <p className="text-xs text-muted-foreground">Your own log collection service</p>
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
                    <h3 className="font-semibold mb-2">Configure Log Export</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Once enabled by Shopify support, you'll need to:
                    </p>
                    <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                      <li>Provide endpoint credentials to Shopify support</li>
                      <li>Specify which log types to export (access logs, error logs, etc.)</li>
                      <li>Configure retention and filtering rules in your destination service</li>
                      <li>Test the log flow to ensure data is being received</li>
                    </ol>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Export Logs for Bot Analytics</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      From your log aggregation service (Splunk, Datadog, etc.):
                    </p>
                    <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                      <li>Filter logs for the desired time period</li>
                      <li>Export as CSV or TXT format</li>
                      <li>Ensure the export includes User-Agent and IP information</li>
                    </ol>
                    <div className="mt-4">
                      <Button asChild>
                        <Link href="https://app.finseo.ai/bot-analytics" target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          Upload to Bot Analytics
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CDN/Reverse Proxy Method */}
          <section className="space-y-6 mb-12">
            <h2 id="cdn-method" className="text-2xl font-bold tracking-tight">Method 2: CDN/Reverse Proxy</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                For all Shopify plans (including non-Plus), you can use a CDN or reverse proxy service in front 
                of your custom domain to capture visitor logs. This is a popular workaround recommended by the 
                Shopify community for SEO, analytics, and fraud investigations.
              </p>
              
              <Alert className="mb-6">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  This method requires using a custom domain (not the default .myshopify.com domain) and 
                  routing traffic through a CDN provider.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                {/* Option 1: Cloudflare */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 1: Cloudflare</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Most popular choice for Shopify stores:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Add your custom domain to Cloudflare</li>
                    <li>Point your domain's A record to Shopify's IP (23.227.38.65)</li>
                    <li>Enable Cloudflare proxy (orange cloud)</li>
                    <li>Access logs via Cloudflare Analytics or Enterprise Log Access</li>
                  </ol>
                  <div className="mt-3">
                    <Link href="/bot-analytics/cloudflare" className="text-[#0eca7b] hover:underline text-sm">
                      See our Cloudflare guide for detailed instructions →
                    </Link>
                  </div>
                </div>

                {/* Option 2: Fastly */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 2: Fastly</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Enterprise CDN with advanced logging capabilities:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Create a Fastly service for your Shopify store</li>
                    <li>Configure Shopify as the origin</li>
                    <li>Set up real-time log streaming</li>
                    <li>Export logs from your configured endpoint</li>
                  </ol>
                  <div className="mt-3">
                    <Link href="/bot-analytics/fastly" className="text-[#0eca7b] hover:underline text-sm">
                      See our Fastly guide for detailed instructions →
                    </Link>
                  </div>
                </div>

                {/* Setup Requirements */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">CDN Setup Requirements</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>Custom Domain:</strong> You must own and control a custom domain 
                          (e.g., yourstore.com, not yourstore.myshopify.com)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>DNS Control:</strong> Ability to modify DNS records to point to 
                          the CDN provider
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>SSL Certificate:</strong> Ensure SSL is properly configured on 
                          both Shopify and CDN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Choosing the Right Method */}
          <section className="space-y-6 mb-12">
            <h2 id="choosing-method" className="text-2xl font-bold tracking-tight">Choosing the Right Method</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Select the approach based on your Shopify plan and technical requirements:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">Use Shopify Plus Log Drains if:</h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>You're on Shopify Plus</li>
                    <li>You need comprehensive server-side logs</li>
                    <li>You already use Splunk, Datadog, or New Relic</li>
                    <li>You want the most accurate bot detection data</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">Use CDN/Reverse Proxy if:</h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>You're on any Shopify plan (including Basic)</li>
                    <li>You use a custom domain</li>
                    <li>You want additional CDN benefits (performance, security)</li>
                    <li>You're comfortable with DNS configuration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations & Considerations */}
          <section className="space-y-6 mb-12">
            <h2 id="limitations" className="text-2xl font-bold tracking-tight">Limitations & Considerations</h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Shopify Analytics vs Raw Logs</h4>
                  <p className="text-sm text-muted-foreground">
                    Shopify's built-in analytics filter out bot traffic. Raw logs are essential for AI bot 
                    visibility analysis as they include all visitor data.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Checkout Process Limitations</h4>
                  <p className="text-sm text-muted-foreground">
                    The Shopify checkout process (checkout.shopify.com) bypasses custom domains and CDNs. 
                    Bot visits to checkout pages won't be captured via CDN methods.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">API and Admin Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Neither method captures API requests or admin panel access. These require separate 
                    monitoring solutions if needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cost Considerations</h4>
                  <p className="text-sm text-muted-foreground">
                    Log drains (Plus only) may incur costs from third-party services. CDN solutions often 
                    have free tiers but may charge for high traffic or log export features.
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
              After obtaining your Shopify logs through either method:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Monitor AI bot visits to your product pages using our <Link href="https://www.finseo.ai/bot-traffic" className="text-[#0eca7b] hover:underline" target="_blank">AI bot traffic analytics</Link></li>
              <li>Identify which products attract the most AI crawler attention</li>
              <li>Optimize your store's content for AI-powered shopping assistants</li>
              <li>Track the impact of SEO improvements with our <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracker</Link></li>
            </ul>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link href="/bot-analytics">
                  Back to Bot Analytics Overview
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/bot-analytics/cloudflare">
                  Cloudflare Setup Guide
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