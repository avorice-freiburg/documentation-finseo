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
  Zap, 
  Download, 
  Cloud,
  Activity,
  Settings,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Terminal,
  FileText
} from "lucide-react"

export const metadata: Metadata = getPageMetadata('bot-analytics-fastly');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Fastly" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "real-time-logging", title: "Real-Time Log Streaming", level: 2 },
  { id: "logging-endpoints", title: "Configure Logging Endpoints", level: 2 },
  { id: "export-logs", title: "Export Logs for Analysis", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
]

export default function FastlyPage() {
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
              Fastly CDN Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              How to set up and access real-time logs from Fastly CDN for AI bot analytics and visibility tracking.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Fastly</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Fastly is an edge cloud platform that provides content delivery network (CDN), edge computing, 
              and security services. It offers powerful real-time log streaming capabilities, making it ideal 
              for capturing detailed visitor data including AI bot traffic.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Enterprise CDN</Badge>
              <Badge variant="secondary">Real-Time Logging</Badge>
              <Badge variant="secondary">Edge Computing</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Fastly provides comprehensive real-time log streaming that captures all visitor data, including 
                AI bot traffic. Unlike traditional CDNs, Fastly allows instant configuration changes and provides 
                immediate visibility into all requests, making it perfect for bot analytics.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Advantage</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fastly's real-time logging streams data as it happens, allowing you to monitor AI bot visits 
                  live and export historical data on demand. This immediate visibility is crucial for tracking 
                  AI search engine behavior.
                </p>
              </div>
            </div>
          </section>

          {/* Real-Time Log Streaming */}
          <section className="space-y-6 mb-12">
            <h2 id="real-time-logging" className="text-2xl font-bold tracking-tight">Setting Up Real-Time Log Streaming</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Follow these steps to configure Fastly to stream logs for your website:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Create a Fastly Service</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Sign up for Fastly and create a new service for your domain:
                    </p>
                    <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                      <li>Log in to the <Link href="https://manage.fastly.com" target="_blank" className="text-[#0eca7b] hover:underline">Fastly control panel</Link></li>
                      <li>Click "Create Service"</li>
                      <li>Add your domain name</li>
                      <li>Configure your origin server (your website's hosting)</li>
                    </ol>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Configure Logging</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In your Fastly service configuration:
                    </p>
                    <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                      <li>Navigate to the "Logging" section</li>
                      <li>Click "Create Endpoint"</li>
                      <li>Choose your preferred logging destination</li>
                      <li>Configure the log format (ensure User-Agent and IP are included)</li>
                    </ol>
                    <Alert className="mt-3">
                      <Activity className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        For bot analytics, ensure your log format includes timestamp, client IP, user agent, 
                        request URL, and response status.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Update DNS Settings</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Point your domain to Fastly:
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground mb-2">Update your DNS records:</p>
                      <ul className="text-sm space-y-1 font-mono text-muted-foreground">
                        <li>CNAME: www → global.prod.fastly.net</li>
                        <li>A: @ → Fastly Anycast IPs (provided in dashboard)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Activate Configuration</h3>
                    <p className="text-sm text-muted-foreground">
                      Click "Activate" to deploy your configuration. Fastly will immediately start routing 
                      traffic and logging all requests, including AI bot visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Configure Logging Endpoints */}
          <section className="space-y-6 mb-12">
            <h2 id="logging-endpoints" className="text-2xl font-bold tracking-tight">Configure Logging Endpoints</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Fastly supports multiple logging endpoints. Choose the one that best fits your workflow:
              </p>
              
              <div className="space-y-4">
                {/* Amazon S3 */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Amazon S3</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Most popular for long-term storage and batch processing:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Create an S3 bucket for log storage</li>
                    <li>Configure IAM permissions for Fastly</li>
                    <li>Set up hourly or daily log rotation</li>
                    <li>Download logs via AWS CLI or S3 console</li>
                  </ol>
                </div>

                {/* Google Cloud Storage */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Google Cloud Storage</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Similar to S3 with Google Cloud integration:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Create a GCS bucket</li>
                    <li>Generate service account credentials</li>
                    <li>Configure in Fastly logging settings</li>
                    <li>Access via gsutil or Cloud Console</li>
                  </ol>
                </div>

                {/* HTTPS Endpoint */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">HTTPS Endpoint</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Stream logs to your own server or service:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Set up an HTTPS endpoint to receive logs</li>
                    <li>Configure authentication (optional)</li>
                    <li>Process logs in real-time</li>
                    <li>Store or forward as needed</li>
                  </ol>
                </div>

                {/* Syslog */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Syslog</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Traditional logging for existing infrastructure:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Configure your syslog server details</li>
                    <li>Set up TLS for secure transmission</li>
                    <li>Parse logs with your preferred tools</li>
                    <li>Export filtered logs as needed</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Log Format Configuration */}
          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold tracking-tight">Recommended Log Format</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Use this log format in Fastly to capture all necessary data for bot analytics:
              </p>
              
              <div className="rounded-lg border bg-muted p-4">
                <pre className="text-xs overflow-x-auto">
                  <code>{`{
  "timestamp": "%{begin:%Y-%m-%dT%H:%M:%S}t",
  "client_ip": "%{req.http.Fastly-Client-IP}V",
  "method": "%{req.method}V",
  "url": "%{req.url}V",
  "user_agent": "%{req.http.User-Agent}V",
  "status": "%{resp.status}V",
  "bytes": "%{resp.body_bytes_written}V",
  "time_elapsed": "%{time.elapsed.usec}V",
  "host": "%{req.http.host}V",
  "referer": "%{req.http.Referer}V"
}`}</code>
                </pre>
              </div>
              
              <Alert className="mt-4">
                <Settings className="h-4 w-4" />
                <AlertDescription>
                  This JSON format includes all fields needed to identify AI bot traffic. The User-Agent 
                  field is crucial for detecting bots like ChatGPT-User, GPTBot, and Perplexity.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Export Logs */}
          <section className="space-y-6 mb-12">
            <h2 id="export-logs" className="text-2xl font-bold tracking-tight">Export Logs for Analysis</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Once your logs are being collected, export them for Bot Analytics:
              </p>
              
              <div className="space-y-6">
                {/* From S3/GCS */}
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">From Cloud Storage (S3/GCS)</h4>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Access your storage bucket</li>
                    <li>Download log files for your desired date range</li>
                    <li>Combine multiple files if needed (they're usually hourly)</li>
                    <li>Convert from JSON to standard log format if required</li>
                  </ol>
                  <div className="mt-3">
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      aws s3 sync s3://your-bucket/logs/ ./local-logs/
                    </code>
                  </div>
                </div>

                {/* From HTTPS/Syslog */}
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">From HTTPS/Syslog Endpoints</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Export from your log aggregation system:
                  </p>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Query logs for the required time period</li>
                    <li>Filter by your Fastly service if needed</li>
                    <li>Export as CSV or TXT format</li>
                    <li>Ensure User-Agent and IP fields are included</li>
                  </ul>
                </div>

                {/* Upload to Bot Analytics */}
                <div className="mt-6 flex justify-center">
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
          </section>

          {/* Best Practices */}
          <section className="space-y-6 mb-12">
            <h2 id="best-practices" className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Retention:</strong> Configure appropriate retention periods in your 
                    storage endpoint. 30-90 days is typically sufficient for bot analytics.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Compression:</strong> Enable gzip compression for log files to reduce 
                    storage costs and transfer times.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Monitoring:</strong> Set up alerts for logging failures to ensure 
                    continuous data collection.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Testing:</strong> Use Fastly's real-time log tailing feature to verify 
                    logs are being captured correctly before relying on them for analytics.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Cost Management:</strong> Monitor your Fastly bandwidth usage and optimize 
                    caching rules to control costs while maintaining log accuracy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold tracking-tight">Advanced Features</h2>
            <div className="rounded-lg border bg-card p-6">
              <h4 className="font-semibold mb-3">Edge Computing with Compute@Edge</h4>
              <p className="text-sm text-muted-foreground mb-3">
                For advanced users, Fastly's Compute@Edge allows custom log processing:
              </p>
              <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                <li>Filter and enrich logs at the edge before streaming</li>
                <li>Add custom bot detection logic</li>
                <li>Aggregate data in real-time</li>
                <li>Route different log types to different endpoints</li>
              </ul>
              <Alert className="mt-3 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
                <AlertDescription>
                  Compute@Edge requires programming knowledge (Rust, JavaScript, or Go) and is 
                  best suited for enterprise implementations.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Next Steps */}
          <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">Next Steps</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              After setting up Fastly logging and uploading to Finseo Bot Analytics:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Monitor real-time AI bot traffic to your site</li>
              <li>Analyze which content attracts the most AI crawler attention</li>
              <li>Track bot behavior patterns and visit frequency</li>
              <li>Optimize your content strategy for AI search visibility</li>
              <li>Use Fastly's edge caching to improve bot crawl efficiency</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link href="/bot-analytics">
                  Back to Bot Analytics Overview
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://docs.fastly.com/en/guides/real-time-analytics" target="_blank">
                  Fastly Documentation
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