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
  Server, 
  Download, 
  FileText, 
  Activity,
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MousePointer,
  BarChart3
} from "lucide-react"

export const metadata: Metadata = getPageMetadata('bot-analytics-hostinger');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Hostinger" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "step-by-step", title: "Step-by-Step Instructions", level: 2 },
  { id: "download-methods", title: "Download Methods", level: 2 },
  { id: "built-in-analytics", title: "Built-in Analytics", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
]

export default function HostingerPage() {
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
              Hostinger Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Step-by-step guide to download server access logs from your Hostinger hosting account for <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracking</Link>.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Hostinger</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Hostinger is one of the world's leading web hosting providers, offering affordable hosting solutions 
              with a user-friendly hPanel. They provide access logs through their Analytics section, though raw 
              log file download may require additional steps.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Affordable Hosting</Badge>
              <Badge variant="secondary">hPanel Interface</Badge>
              <Badge variant="secondary">Global Infrastructure</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Hostinger provides multiple ways to access server logs through their hPanel interface. While they 
                offer built-in analytics, accessing raw log files for comprehensive bot analysis requires using 
                their File Manager, FTP access, or contacting support.
              </p>
              <Alert className="border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                <Activity className="h-4 w-4 text-[#ff6b35]" />
                <AlertDescription>
                  Hostinger's Analytics section shows processed data. For raw log files needed by Bot Analytics, 
                  you'll need to use one of the download methods described below.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Step-by-Step Instructions */}
          <section className="space-y-6 mb-12">
            <h2 id="step-by-step" className="text-2xl font-bold tracking-tight">Step-by-Step Instructions</h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Log in to hPanel</h3>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <Link href="https://hpanel.hostinger.com" target="_blank" className="text-blue-600 hover:underline">
                      hpanel.hostinger.com
                    </Link> and sign in with your Hostinger account credentials.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Access Website Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Click on "Websites" in the top menu, then click "Dashboard" next to the website you want to analyze.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Check Analytics Section</h3>
                  <p className="text-sm text-muted-foreground">
                    Navigate to the "Analytics" section in your website's dashboard. Here you can view access logs data.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Download Raw Logs</h3>
                  <p className="text-sm text-muted-foreground">
                    To access raw server logs, choose one of the methods in the next section.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Download Methods */}
          <section className="space-y-6 mb-12">
            <h2 id="download-methods" className="text-2xl font-bold tracking-tight">Download Methods</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Choose one of these methods to download your raw server logs:
              </p>
              
              <div className="space-y-4">
                {/* Method 1: File Manager */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MousePointer className="h-4 w-4 text-blue-600" />
                    <h4 className="font-semibold">Method 1: Using hPanel File Manager</h4>
                  </div>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Go to "Files" → "File Manager" in hPanel</li>
                    <li>Navigate to the logs directory (usually in <code className="bg-muted px-1 rounded text-xs">/logs</code> or <code className="bg-muted px-1 rounded text-xs">/access-logs</code>)</li>
                    <li>Look for files like <code className="bg-muted px-1 rounded text-xs">access.log</code> or <code className="bg-muted px-1 rounded text-xs">domain.com-access.log</code></li>
                    <li>Right-click and download the log file</li>
                  </ol>
                  <Alert className="mt-3">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Note: The exact location may vary. If you can't find logs, contact Hostinger support.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Method 2: FTP */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold">Method 2: Using FTP/FileZilla</h4>
                  </div>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Find your FTP credentials in hPanel under "Files" → "FTP Accounts"</li>
                    <li>Download and install <Link href="https://filezilla-project.org/" target="_blank" className="text-blue-600 hover:underline">FileZilla</Link></li>
                    <li>Connect using your FTP credentials</li>
                    <li>Navigate to the logs directory</li>
                    <li>Download the access log files</li>
                  </ol>
                </div>

                {/* Method 3: SSH */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold">Method 3: Using SSH (Premium Plans)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    SSH access is available on Business and Cloud hosting plans:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Enable SSH in hPanel under "Advanced" → "SSH Access"</li>
                    <li>Connect via terminal: <code className="bg-muted px-1 rounded text-xs">ssh username@server-ip -p 65002</code></li>
                    <li>Navigate to logs: <code className="bg-muted px-1 rounded text-xs">cd ~/logs</code></li>
                    <li>Download using scp or view with cat/less</li>
                  </ol>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild>
                  <Link href="https://app.finseo.ai/bot-analytics" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Upload to Bot Analytics
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Built-in Analytics */}
          <section className="space-y-6 mb-12">
            <h2 id="built-in-analytics" className="text-2xl font-bold tracking-tight">Using Hostinger's Built-in Analytics</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                While Hostinger's Analytics section doesn't provide raw logs for download, it does show:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">Access logs</h4>
                  <p className="text-sm text-muted-foreground">Recent HTTP requests with details</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">Error logs</h4>
                  <p className="text-sm text-muted-foreground">4xx and 5xx errors</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">Visitor analytics</h4>
                  <p className="text-sm text-muted-foreground">Traffic patterns and sources</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">Bot detection</h4>
                  <p className="text-sm text-muted-foreground">Some bot traffic is visible here</p>
                </div>
              </div>
              <Alert className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  For comprehensive AI bot analytics, you'll need the raw log files. The built-in analytics 
                  may not show all bot user agents or provide exportable data.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Important Notes */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Important Notes</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Availability:</strong> Hostinger typically keeps logs for 7-30 days depending on your plan
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>File Location:</strong> Log files might be in <code className="bg-muted px-1 rounded text-xs">/logs</code>, 
                    <code className="bg-muted px-1 rounded text-xs">/access-logs</code>, or 
                    <code className="bg-muted px-1 rounded text-xs">/home/username/logs</code>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Support:</strong> If you can't find log files, contact Hostinger's 24/7 live chat support
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
                  <h4 className="font-medium mb-2">Can't find log files?</h4>
                  <p className="text-sm text-muted-foreground">
                    Log file access may depend on your hosting plan. Shared hosting plans might have limited access. 
                    Contact support to request your logs.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">FTP connection issues?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure you're using the correct FTP server (usually ftp.yourdomain.com), port 21, and your 
                    FTP account credentials (not your Hostinger login).
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Need raw log access?</h4>
                  <p className="text-sm text-muted-foreground">
                    Use Hostinger's live chat and specifically request "raw Apache/Nginx access logs" for bot analysis. 
                    They can often provide these via support ticket.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="rounded-lg border bg-card p-6 border-green-200 bg-green-50/50 dark:bg-green-950/20">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold">Next Steps</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              After uploading your logs to Finseo Bot Analytics, you'll gain insights into:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>AI search engine bot visits (<Link href="https://www.finseo.ai/ai-visibility-tracking/chatgpt" className="text-[#0eca7b] hover:underline" target="_blank">ChatGPT</Link>, <Link href="https://www.finseo.ai/ai-visibility-tracking/perplexity" className="text-[#0eca7b] hover:underline" target="_blank">Perplexity</Link>, etc.)</li>
              <li>Your content's <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">visibility in AI-powered searches</Link></li>
              <li>Traffic patterns from different AI platforms</li>
              <li>Opportunities to optimize for AI visibility</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/bot-analytics">
                Back to Bot Analytics Overview
              </Link>
            </Button>
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