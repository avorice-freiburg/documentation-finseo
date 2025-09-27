"use client"

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
  BarChart3,
  FolderOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Archive,
  MousePointer
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "cPanel" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "raw-access-logs", title: "Raw Access Logs Method", level: 2 },
  { id: "alternative-methods", title: "Alternative Methods", level: 2 },
  { id: "hosting-providers", title: "Common cPanel Hosts", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
]

export default function CPanelPage() {
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
              cPanel Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Step-by-step guide to download server access logs from any cPanel hosting environment.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About cPanel</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              cPanel is the most widely used web hosting control panel, providing an intuitive interface for 
              managing websites, domains, and server resources. It offers multiple methods to access server 
              logs, making it easy to download access logs for bot analytics.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Industry Standard</Badge>
              <Badge variant="secondary">User-Friendly</Badge>
              <Badge variant="secondary">Multiple Access Methods</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                cPanel provides several ways to access server logs, from direct download via "Raw Access Logs" 
                to FTP access and file manager tools. Most shared hosting providers using cPanel make server 
                logs easily accessible to users.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  cPanel's "Raw Access Logs" feature is specifically designed for downloading server logs, 
                  making it the most straightforward method for accessing the data needed for Bot Analytics.
                </p>
              </div>
            </div>
          </section>

          {/* Raw Access Logs Method */}
          <section className="space-y-6 mb-12">
            <h2 id="raw-access-logs" className="text-2xl font-bold tracking-tight">Raw Access Logs Method (Recommended)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                The easiest and most direct method using cPanel's built-in log access feature:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Log into cPanel</h3>
                    <p className="text-sm text-muted-foreground">
                      Access your cPanel dashboard using the login URL provided by your hosting provider 
                      (typically yourdomain.com/cpanel or yourdomain.com:2083).
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Find Raw Access Logs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In cPanel, look for the "Raw Access Logs" icon, typically located in the "Metrics" or "Logs" section:
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Section:</strong> Metrics, Logs, or Statistics</li>
                        <li>• <strong>Icon:</strong> Usually shows a document or chart symbol</li>
                        <li>• <strong>Alternative names:</strong> "Access Logs", "Log Files", or "Server Logs"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Select Your Domain</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Choose the domain you want to download logs for. You'll see a list of available log files:
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <ul className="text-sm space-y-1 font-mono text-muted-foreground">
                        <li>access-logs/yourdomain.com</li>
                        <li>access-logs/yourdomain.com-ssl_log</li>
                        <li>access-logs/yourdomain.com.processed</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">
                        Choose the main domain log (without -ssl_log or .processed suffix)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Download the Log File</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click on the log file link to download it directly to your computer. The file will typically be named something like:
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <code className="text-sm bg-muted px-2 py-1 rounded">yourdomain.com-access_log</code>
                      <p className="text-xs text-muted-foreground mt-2">
                        This file contains all the server access data you need for Bot Analytics
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Upload to Finseo Bot Analytics</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      After downloading your access log file:
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

          {/* Alternative Methods */}
          <section className="space-y-6 mb-12">
            <h2 id="alternative-methods" className="text-2xl font-bold tracking-tight">Alternative Methods</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                If Raw Access Logs isn't available, try these alternative approaches:
              </p>
              
              <div className="space-y-4">
                {/* Method 1: Archive & Download */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Archive className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 1: Archive & Download Logs</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Some cPanel installations offer an "Archive & Download" feature:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Go to "Metrics" → "Awstats" or "Webalizer"</li>
                    <li>Look for a "Download Logs" or "Raw Data" link</li>
                    <li>Select the time period you need</li>
                    <li>Download the archived log file</li>
                  </ol>
                </div>

                {/* Method 2: Awstats */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 2: Through Awstats</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Access logs via the Awstats statistics tool:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Open "Awstats" from the Metrics section</li>
                    <li>Click on your domain name</li>
                    <li>Look for "View raw log file" or similar option</li>
                    <li>Download or copy the log data</li>
                  </ol>
                  <Alert className="mt-3">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Awstats may only show processed data. Raw logs are better for comprehensive bot analysis.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Method 3: File Manager */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FolderOpen className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 3: File Manager</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Navigate to logs using cPanel's File Manager:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Open "File Manager" from the Files section</li>
                    <li>Navigate to common log directories:</li>
                  </ol>
                  <div className="ml-8 mt-2">
                    <ul className="text-xs font-mono space-y-1 text-muted-foreground">
                      <li>/logs/</li>
                      <li>/access-logs/</li>
                      <li>/var/log/</li>
                      <li>/home/username/logs/</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">3. Right-click on access log files and download</p>
                </div>

                {/* Method 4: FTP Access */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 4: FTP Access</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use FTP credentials to access logs directly via FileZilla or similar FTP clients. 
                    See our <Link href="/bot-analytics/wordpress-ftp" className="text-[#0eca7b] hover:underline">WordPress FTP guide</Link> for detailed instructions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Important cPanel Settings */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Important cPanel Settings</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Enable Raw Logs:</strong> Some hosts disable raw log generation by default. 
                    Check "Raw Access Logs" settings to enable if needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Retention:</strong> cPanel typically keeps logs for 30-90 days. 
                    Download regularly for historical analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Format:</strong> cPanel uses standard Apache Common Log Format, 
                    perfect for Bot Analytics processing.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Multiple Domains:</strong> If you host multiple domains, each will have 
                    separate log files in the Raw Access Logs section.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common cPanel Hosting Providers */}
          <section className="space-y-6 mb-12">
            <h2 id="hosting-providers" className="text-2xl font-bold tracking-tight">Common cPanel Hosting Providers</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Popular hosting providers that use cPanel:
              </p>
              
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">Bluehost</h4>
                  <p className="text-sm text-muted-foreground">Raw Access Logs in Metrics section</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">HostGator</h4>
                  <p className="text-sm text-muted-foreground">Access via Metrics → Raw Access Logs</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">GoDaddy</h4>
                  <p className="text-sm text-muted-foreground">Logs section in cPanel dashboard</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">InMotion Hosting</h4>
                  <p className="text-sm text-muted-foreground">Statistics → Raw Access Logs</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">A2 Hosting</h4>
                  <p className="text-sm text-muted-foreground">Metrics section with log downloads</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">SiteGround</h4>
                  <p className="text-sm text-muted-foreground">Site Tools → Statistics → Access Logs</p>
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
                  <h4 className="font-medium mb-2">Can't find Raw Access Logs?</h4>
                  <p className="text-sm text-muted-foreground">
                    Check different sections: Metrics, Logs, Statistics, or Advanced. Some hosts customize 
                    the cPanel layout. Contact support if you can't locate the feature.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Raw Access Logs is disabled?</h4>
                  <p className="text-sm text-muted-foreground">
                    Some shared hosting providers disable this feature. Contact support to request access 
                    or ask them to provide the logs directly.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Log files are empty?</h4>
                  <p className="text-sm text-muted-foreground">
                    This could mean logging is disabled, or your site hasn't received traffic yet. 
                    Check that your website is accessible and receiving visitors.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Download fails or times out?</h4>
                  <p className="text-sm text-muted-foreground">
                    Large log files may cause timeout issues. Try downloading during off-peak hours, 
                    or use FTP access for more reliable large file transfers.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Multiple log files for one domain?</h4>
                  <p className="text-sm text-muted-foreground">
                    You may see separate logs for HTTP and HTTPS traffic, or processed vs. raw logs. 
                    Download the main domain log without suffixes like "-ssl_log" for comprehensive data.
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
              After uploading your cPanel logs to Finseo Bot Analytics:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Track AI bot visits across all your cPanel-hosted domains</li>
              <li>Monitor which content attracts the most AI crawler attention</li>
              <li>Analyze patterns in bot behavior and visit frequency</li>
              <li>Optimize your content strategy for better AI search visibility</li>
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