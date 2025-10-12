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
  Globe, 
  Download, 
  Code, 
  Shield,
  Cloud,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Key,
  Zap
} from "lucide-react"

export const metadata: Metadata = getPageMetadata('bot-analytics-cloudflare');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Cloudflare" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "enterprise-features", title: "Enterprise Features", level: 2 },
  { id: "alternative-methods", title: "Alternative Methods", level: 2 },
  { id: "cloudflare-workers", title: "Cloudflare Workers Solution", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
]

export default function CloudflarePage() {
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
              Cloudflare Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Access server logs from Cloudflare's global CDN network for comprehensive bot analytics.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Cloudflare</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Cloudflare is a global content delivery network (CDN) and security company that provides 
              DDoS protection, web application firewall, and performance optimization. Access to raw logs 
              requires an Enterprise plan or creative workarounds.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">CDN Provider</Badge>
              <Badge variant="secondary">Security Platform</Badge>
              <Badge variant="secondary">Global Network</Badge>
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
            <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
            <AlertTitle className="text-[#ff6b35]">Enterprise Feature</AlertTitle>
            <AlertDescription>
              Raw log access via Logpull API and Logpush is only available on Cloudflare Enterprise plans. 
              Free and Pro plans have limited analytics options. See alternative methods below.
            </AlertDescription>
          </Alert>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Cloudflare processes billions of requests daily through its global network. While they provide 
                excellent analytics dashboards, accessing raw server logs for detailed bot analysis requires 
                specific plan features or alternative approaches.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Cloudflare's edge servers process requests before they reach your origin server. This means 
                  Cloudflare logs capture bot traffic that your origin server might never see, providing a more 
                  complete picture of AI bot visits.
                </p>
              </div>
            </div>
          </section>

          {/* Enterprise Features */}
          <section className="space-y-6 mb-12">
            <h2 id="enterprise-features" className="text-2xl font-bold tracking-tight">Enterprise Features</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                For Enterprise customers, Cloudflare offers comprehensive log access:
              </p>
              
              <div className="space-y-4">
                {/* Logpull API */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 1: Logpull API</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Programmatically retrieve logs for a specific time range:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Generate API credentials in Cloudflare dashboard</li>
                    <li>Use the Logpull endpoint with your Zone ID</li>
                    <li>Specify time range (up to 1 hour per request)</li>
                    <li>Download logs in JSON or CSV format</li>
                  </ol>
                  <pre className="bg-muted p-3 rounded text-xs overflow-x-auto mt-3">
                    <code>{`curl -X GET "https://api.cloudflare.com/client/v4/zones/{zone_id}/logs/received" \\
  -H "X-Auth-Email: your@email.com" \\
  -H "X-Auth-Key: your-api-key"`}</code>
                  </pre>
                </div>

                {/* Logpush */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 2: Logpush</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Automatically push logs to your storage destination:
                  </p>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Configure destination (S3, GCS, Azure, etc.)</li>
                    <li>Set up real-time or batched delivery</li>
                    <li>Filter specific fields or events</li>
                    <li>Process logs with your own analytics tools</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild>
                  <Link href="https://developers.cloudflare.com/logs/" target="_blank">
                    View Cloudflare Logs Documentation
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Alternative Methods */}
          <section className="space-y-6 mb-12">
            <h2 id="alternative-methods" className="text-2xl font-bold tracking-tight">Alternative Methods</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                For non-Enterprise plans, consider these alternatives:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Analytics API</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Access aggregated data through GraphQL API (limited bot details)
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Firewall Events</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    View bot-related events in Security Analytics
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Origin Server Logs</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use your web server's logs (misses CDN-cached requests)
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Workers Analytics</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Custom logging with Cloudflare Workers (see below)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cloudflare Workers Solution */}
          <section className="space-y-6 mb-12">
            <h2 id="cloudflare-workers" className="text-2xl font-bold tracking-tight">Cloudflare Workers Solution</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Create a custom logging solution using Cloudflare Workers (available on all paid plans):
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">Implementation Steps:</h4>
                <ol className="text-sm space-y-3 ml-6 list-decimal">
                  <li>
                    <strong>Create a Worker</strong>
                    <p className="text-muted-foreground mt-1">Deploy a Worker that intercepts requests and logs bot user agents</p>
                  </li>
                  <li>
                    <strong>Store Logs</strong>
                    <p className="text-muted-foreground mt-1">Use Workers KV, Durable Objects, or external storage</p>
                  </li>
                  <li>
                    <strong>Filter Bot Traffic</strong>
                    <p className="text-muted-foreground mt-1">Identify AI bots by User-Agent patterns</p>
                  </li>
                  <li>
                    <strong>Export Data</strong>
                    <p className="text-muted-foreground mt-1">Create an endpoint to download logs for Bot Analytics</p>
                  </li>
                </ol>
                
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Workers have request limits. Consider sampling or batching for high-traffic sites.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Important Notes</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Rate Limits:</strong> Logpull API has rate limits. Plan your requests accordingly
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Data Retention:</strong> Logs are available for 72 hours (3 days) on Enterprise plans
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Format:</strong> Cloudflare logs include unique fields like edge location and cache status
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Privacy:</strong> Cloudflare can anonymize IPs in logs for GDPR compliance
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="space-y-6 mb-12">
            <h2 id="troubleshooting" className="text-2xl font-bold tracking-tight">Troubleshooting</h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">No access to Enterprise features?</h4>
                  <p className="text-sm text-muted-foreground">
                    Contact Cloudflare sales to discuss Enterprise plans, or implement the Workers solution 
                    for custom logging on any paid plan.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Missing bot traffic in analytics?</h4>
                  <p className="text-sm text-muted-foreground">
                    Check your Bot Management settings. Some bots might be blocked before logging. 
                    Review Firewall Rules and Bot Fight Mode settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">API authentication issues?</h4>
                  <p className="text-sm text-muted-foreground">
                    Use API Tokens instead of Global API Key for better security. Ensure your token 
                    has the necessary permissions for log access.
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
              Once you have access to Cloudflare logs, you can:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Track AI bot visits across your entire CDN-cached content</li>
              <li>See geographic distribution of AI bot traffic</li>
              <li>Analyze cache hit rates for bot requests</li>
              <li>Identify bot behavior patterns and optimize accordingly</li>
            </ul>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="https://app.finseo.ai/bot-analytics" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Upload to Bot Analytics
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/bot-analytics">
                  Back to Overview
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