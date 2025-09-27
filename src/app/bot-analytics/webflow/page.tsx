import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Layout, 
  Download, 
  Cloud,
  Activity,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Terminal,
  FileText
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Webflow" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "webflow-cloud", title: "Webflow Cloud Runtime Logs", level: 2 },
  { id: "traditional-hosting", title: "Traditional Webflow Hosting", level: 2 },
  { id: "export-method", title: "Exported Sites Method", level: 2 },
  { id: "limitations", title: "Limitations & Considerations", level: 2 },
]

export default function WebflowPage() {
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
              Webflow Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              How to access server logs from Webflow sites for AI bot analytics and visibility tracking.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Webflow</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Webflow is a visual web development platform that combines design, CMS, and hosting. 
              With the introduction of Webflow Cloud, developers can now build full-stack applications 
              with server-side functionality and access runtime logs, though traditional Webflow hosting 
              has limited log access.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Visual Builder</Badge>
              <Badge variant="secondary">Webflow Cloud (New)</Badge>
              <Badge variant="secondary">Limited Traditional Logs</Badge>
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
            <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
            <AlertTitle className="text-[#ff6b35]">Different Approaches for Different Hosting</AlertTitle>
            <AlertDescription>
              Traditional Webflow hosting doesn't provide server log access. However, the new Webflow Cloud 
              platform offers runtime logs for full-stack applications. Choose the method below based on your 
              Webflow setup.
            </AlertDescription>
          </Alert>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Webflow offers different hosting options with varying levels of log access:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cloud className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Webflow Cloud (New)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full-stack apps with runtime logs showing server-side activity and bot visits
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Layout className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Traditional Hosting</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Static site hosting with no direct log access - requires workarounds
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Webflow Cloud Runtime Logs */}
          <section className="space-y-6 mb-12">
            <h2 id="webflow-cloud" className="text-2xl font-bold tracking-tight">Method 1: Webflow Cloud Runtime Logs</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                <Link href="https://developers.webflow.com/webflow-cloud/deployments#runtime-logs" target="_blank" className="text-[#0eca7b] hover:underline">
                  Webflow Cloud
                </Link> is Webflow's new platform for building full-stack applications. It provides runtime logs 
                that capture server-side activity, including AI bot visits.
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Set Up Webflow Cloud Project</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Create or migrate your project to Webflow Cloud:
                    </p>
                    <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                      <li>Navigate to Webflow Cloud dashboard</li>
                      <li>Connect your GitHub repository</li>
                      <li>Deploy your Next.js or Astro application</li>
                      <li>Configure environment settings</li>
                    </ol>
                    <Alert className="mt-3">
                      <GitBranch className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        Webflow Cloud currently supports Next.js and Astro frameworks with server-side capabilities.
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
                    <h3 className="font-semibold mb-2">Access Runtime Logs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      View your application's runtime logs:
                    </p>
                    <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                      <li>Click your project name to open Environments Dashboard</li>
                      <li>Click the environment name to open Deployment Dashboard</li>
                      <li>Select the "Runtime Logs" tab</li>
                      <li>View real-time server activity including bot visits</li>
                    </ol>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Export Logs for Analysis</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Runtime logs capture server-side activity including:
                    </p>
                    <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                      <li>Server-side function execution</li>
                      <li>API endpoint requests (showing bot User-Agents)</li>
                      <li>Application errors and exceptions</li>
                      <li>Console logs with request details</li>
                    </ul>
                    <Alert className="mt-3 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                      <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
                      <AlertDescription>
                        Currently, Webflow Cloud doesn't offer direct log export. You may need to copy logs 
                        manually or implement custom logging to external services.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Implement Custom Logging</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For better log management, implement custom logging in your app:
                    </p>
                    <div className="rounded-lg border bg-muted p-4">
                      <pre className="text-xs overflow-x-auto">
                        <code>{`// Example: Log bot visits to external service
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'];
  
  // Detect AI bots
  if (userAgent?.includes('GPTBot') || 
      userAgent?.includes('ChatGPT-User') ||
      userAgent?.includes('PerplexityBot')) {
    
    // Log to external service
    logToExternalService({
      timestamp: new Date(),
      userAgent,
      ip: req.headers['x-forwarded-for'],
      path: req.url
    });
  }
  
  // Your regular handler code...
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Traditional Webflow Hosting */}
          <section className="space-y-6 mb-12">
            <h2 id="traditional-hosting" className="text-2xl font-bold tracking-tight">Method 2: Traditional Webflow Hosting</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Traditional Webflow hosting serves static sites and doesn't provide server log access. 
                However, there are workarounds to track bot visits:
              </p>
              
              <div className="space-y-4">
                {/* CDN/Proxy Method */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 1: CDN/Reverse Proxy</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use a CDN in front of your custom domain:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Point your custom domain to Cloudflare or Fastly</li>
                    <li>Configure the CDN to proxy to your Webflow site</li>
                    <li>Access logs through the CDN provider</li>
                  </ol>
                  <div className="mt-3 flex gap-3">
                    <Link href="/bot-analytics/cloudflare" className="text-[#0eca7b] hover:underline text-sm">
                      See Cloudflare guide →
                    </Link>
                    <Link href="/bot-analytics/fastly" className="text-[#0eca7b] hover:underline text-sm">
                      See Fastly guide →
                    </Link>
                  </div>
                </div>

                {/* Analytics Integration */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 2: Analytics Integration</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use server-side analytics to track bots:
                  </p>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Implement server-side tracking (e.g., Plausible, Fathom)</li>
                    <li>Configure to log User-Agent strings</li>
                    <li>Export data for bot analysis</li>
                  </ul>
                  <Alert className="mt-3">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Note: Client-side analytics (like Google Analytics) won't capture most bot visits.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Custom Solution */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 3: Custom API Endpoint</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Create a logging endpoint using Webflow Logic (Beta) or external service:
                  </p>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Set up an API endpoint to receive page view data</li>
                    <li>Use JavaScript to send visitor data (limited to JS-enabled bots)</li>
                    <li>Store and analyze the collected data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Export Method */}
          <section className="space-y-6 mb-12">
            <h2 id="export-method" className="text-2xl font-bold tracking-tight">Method 3: Exported Sites</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                If you export your Webflow site and host it elsewhere, you gain full control over server logs:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Export Your Webflow Site</h3>
                    <p className="text-sm text-muted-foreground">
                      In Webflow Designer, go to Settings → Hosting → Download and export your site code.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Host on Traditional Server</h3>
                    <p className="text-sm text-muted-foreground">
                      Deploy to any hosting provider that offers log access (cPanel, Plesk, VPS, etc.)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Access Server Logs</h3>
                    <p className="text-sm text-muted-foreground">
                      Follow the guide for your chosen hosting provider to download and analyze logs.
                    </p>
                  </div>
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
                  <h4 className="font-medium mb-2">Webflow Cloud Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    Webflow Cloud only supports Next.js and Astro frameworks. Traditional Webflow sites 
                    built with the Designer cannot use Webflow Cloud runtime logs.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">CMS and Dynamic Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Bot visits to CMS-powered pages on traditional hosting are still served statically 
                    and won't generate server-side logs without a CDN or proxy.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Webflow Subdomain Limitation</h4>
                  <p className="text-sm text-muted-foreground">
                    Sites using Webflow subdomains (*.webflow.io) cannot use CDN proxies. You need a 
                    custom domain for CDN-based logging solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Export Limitations</h4>
                  <p className="text-sm text-muted-foreground">
                    Exported sites lose CMS functionality and automatic updates. This method is best 
                    for static sites that don't change frequently.
                  </p>
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
                    <strong>Webflow Cloud First:</strong> If building a new project, consider using 
                    Webflow Cloud with Next.js/Astro for native log access.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Custom Domain Required:</strong> For traditional sites, always use a custom 
                    domain to enable CDN proxy solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Implement Logging Early:</strong> Add custom logging logic during development 
                    rather than trying to retrofit it later.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Monitor Bot Patterns:</strong> AI bots often visit specific types of content. 
                    Use this insight to optimize your most visited pages.
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
              After implementing your chosen logging method:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Monitor which pages receive the most AI bot traffic</li>
              <li>Optimize content structure for AI comprehension</li>
              <li>Track the impact of Webflow's built-in SEO features on bot visibility</li>
              <li>Use insights to improve your content strategy</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link href="/bot-analytics">
                  Back to Bot Analytics Overview
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://developers.webflow.com/webflow-cloud" target="_blank">
                  Webflow Cloud Docs
                  <ExternalLink className="ml-2 h-3 w-3" />
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