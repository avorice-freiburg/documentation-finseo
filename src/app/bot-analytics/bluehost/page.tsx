import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Server, 
  Download, 
  FileText,
  Settings,
  FolderOpen,
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BarChart3,
  Gauge
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Bluehost" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "cpanel-method", title: "cPanel Method", level: 2 },
  { id: "wordpress-pro", title: "WordPress Pro Plans", level: 2 },
  { id: "awstats", title: "Using AWStats", level: 2 },
  { id: "ftp-method", title: "FTP Method", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
]

export default function BluehostPage() {
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
              Bluehost Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              How to download server access logs from Bluehost for AI bot analytics and visibility tracking.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Bluehost</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Bluehost is one of the most popular WordPress hosting providers, officially recommended by WordPress.org. 
              They offer cPanel-based hosting with good log access options, making it relatively easy to download 
              server logs for bot analytics across all their hosting plans.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">WordPress Recommended</Badge>
              <Badge variant="secondary">cPanel Access</Badge>
              <Badge variant="secondary">AWStats Included</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Bluehost provides multiple methods to access your server logs, making it one of the more accessible 
                hosts for bot analytics. All plans include cPanel access, which offers several ways to view and 
                download raw access logs.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Good News</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlike some hosts, Bluehost enables raw access logs by default on most plans. You can access 
                  them immediately through cPanel without needing to contact support or enable special features.
                </p>
              </div>
            </div>
          </section>

          {/* cPanel Method */}
          <section className="space-y-6 mb-12">
            <h2 id="cpanel-method" className="text-2xl font-bold tracking-tight">Method 1: cPanel Raw Access (Recommended)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                The easiest way to access your server logs on Bluehost is through cPanel:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Log into Bluehost</h3>
                    <p className="text-sm text-muted-foreground">
                      Visit <Link href="https://my.bluehost.com" target="_blank" className="text-[#0eca7b] hover:underline">
                        my.bluehost.com
                      </Link> and sign in with your account credentials.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Access cPanel</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click on "Advanced" in the left sidebar, or find the "cPanel" button in your hosting dashboard.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Find Raw Access Logs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In cPanel, scroll to the "Metrics" section and click on "Raw Access" or "Raw Access Logs".
                    </p>
                    <Alert className="mt-3">
                      <BarChart3 className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        If you can't find Raw Access, try looking under "Logs" section or use cPanel's search feature.
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
                    <h3 className="font-semibold mb-2">Download Your Domain's Logs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click on your domain name to download the access log. The file will be compressed (.gz format).
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground mb-2">Each log entry contains:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• IP address of the visitor/bot</li>
                        <li>• Date and time of access</li>
                        <li>• User-Agent string (identifies bots)</li>
                        <li>• Requested URL</li>
                        <li>• HTTP status code</li>
                        <li>• Bytes transferred</li>
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
                    <h3 className="font-semibold mb-2">Extract and Upload</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Extract the .gz file to get the raw log file, then upload it to Bot Analytics.
                    </p>
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
          </section>

          {/* WordPress Pro Plans */}
          <section className="space-y-6 mb-12">
            <h2 id="wordpress-pro" className="text-2xl font-bold tracking-tight">WordPress Pro Plans</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                If you're on Bluehost's WordPress Pro or WP Pro plans, you have additional options:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Gauge className="h-4 w-4 text-[#0eca7b]" />
                  <h4 className="font-semibold">Enhanced Dashboard</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  WordPress Pro plans include an enhanced dashboard with basic analytics. However, for detailed 
                  bot analysis, you'll still need to access raw logs through cPanel.
                </p>
                <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                  <li>Log into your Bluehost account</li>
                  <li>Navigate to "My Sites" → your website</li>
                  <li>Click "Admin" → "Advanced"</li>
                  <li>Access cPanel for raw log downloads</li>
                </ol>
              </div>
            </div>
          </section>

          {/* AWStats Method */}
          <section className="space-y-6 mb-12">
            <h2 id="awstats" className="text-2xl font-bold tracking-tight">Method 2: AWStats (Visual Analytics)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Bluehost includes AWStats, which provides visual analytics of your server logs:
              </p>
              
              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">Accessing AWStats</h4>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>In cPanel, find the "Metrics" section</li>
                    <li>Click on "AWStats"</li>
                    <li>Select your domain</li>
                    <li>View detailed statistics including bot visits</li>
                  </ol>
                  
                  <Alert className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      AWStats provides visual reports but doesn't allow raw log downloads. Use Method 1 for 
                      downloading logs to upload to Bot Analytics.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">AWStats Benefits</h4>
                  <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                    <li>Quick overview of bot traffic</li>
                    <li>Identifies top crawlers by User-Agent</li>
                    <li>Shows crawl frequency patterns</li>
                    <li>Useful for quick checks before detailed analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FTP Method */}
          <section className="space-y-6 mb-12">
            <h2 id="ftp-method" className="text-2xl font-bold tracking-tight">Method 3: FTP/File Manager</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                You can also access logs via FTP or cPanel's File Manager:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {/* File Manager */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FolderOpen className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">File Manager</h4>
                  </div>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Open cPanel → File Manager</li>
                    <li>Navigate to home directory</li>
                    <li>Look for "access-logs" folder</li>
                    <li>Download log files</li>
                  </ol>
                </div>

                {/* FTP */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">FTP Access</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Common log locations:</p>
                  <ul className="text-xs space-y-1 font-mono">
                    <li>/access-logs/</li>
                    <li>/logs/</li>
                    <li>/home/username/access-logs/</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="space-y-6 mb-12">
            <h2 id="best-practices" className="text-2xl font-bold tracking-tight">Bluehost Best Practices</h2>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">Log Management Tips</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Download Regularly:</strong> Bluehost keeps logs for about 3 months. Download 
                        monthly for complete historical data.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Check Multiple Domains:</strong> If you host multiple sites, each domain has 
                        separate log files. Download all relevant logs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Use Compression:</strong> Log files can be large. Keep them compressed until 
                        you're ready to upload to Bot Analytics.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Monitor Subdomains:</strong> Don't forget to check logs for subdomains like 
                        www, blog, or shop subdomains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">Performance Considerations</h4>
                <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                  <li>Download logs during off-peak hours for faster transfers</li>
                  <li>Use FTP with resume capability for very large files</li>
                  <li>Consider using SSH if available on your plan for command-line access</li>
                  <li>Archive old logs locally to free up server space</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Common Issues</h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Can't find Raw Access in cPanel?</h4>
                  <p className="text-sm text-muted-foreground">
                    Try searching for "Raw" in cPanel's search box. If still not found, it may be under 
                    a different section like "Logs" or "Statistics". Contact Bluehost support if needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Log files are empty?</h4>
                  <p className="text-sm text-muted-foreground">
                    This can happen if you're using Cloudflare or another CDN. Traffic may not be reaching 
                    Bluehost's servers directly. Check your CDN settings or access logs from the CDN provider.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Download fails or times out?</h4>
                  <p className="text-sm text-muted-foreground">
                    Large log files may timeout in the browser. Use FTP client with resume capability or 
                    try downloading during off-peak hours (late night/early morning).
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Missing bot visits?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure your .htaccess or security plugins aren't blocking legitimate bots. Check that 
                    User-Agents like "GPTBot" and "ChatGPT-User" are allowed.
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
              After downloading your Bluehost server logs:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Upload logs to Finseo Bot Analytics for detailed AI crawler analysis</li>
              <li>Identify which content attracts the most AI bot attention</li>
              <li>Track ChatGPT, Perplexity, and other AI search engine visits</li>
              <li>Optimize your content strategy based on AI visibility insights</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link href="/bot-analytics">
                  Back to Bot Analytics Overview
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://my.bluehost.com/cgi/help" target="_blank">
                  Bluehost Support
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