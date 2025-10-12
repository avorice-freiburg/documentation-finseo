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
  Search,
  FolderOpen,
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Settings,
  Eye
} from "lucide-react"

export const metadata: Metadata = getPageMetadata('bot-analytics-plesk');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Plesk" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "log-browser", title: "Log Browser Method", level: 2 },
  { id: "alternative-methods", title: "Alternative Methods", level: 2 },
  { id: "log-management", title: "Plesk Log Management", level: 2 },
  { id: "hosting-providers", title: "Common Plesk Hosts", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
]

export default function PleskPage() {
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
              Plesk Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Step-by-step guide to download server access logs from Plesk hosting environments.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Plesk</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Plesk is a cross-platform web hosting control panel that runs on both Windows and Linux servers. 
              It provides comprehensive log management features, including a built-in Log Browser for easy 
              access to server logs and analytics data.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Cross-Platform</Badge>
              <Badge variant="secondary">Enterprise-Grade</Badge>
              <Badge variant="secondary">Built-in Log Browser</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Plesk offers multiple methods to access server logs, with the Log Browser being the most 
                user-friendly option. Unlike cPanel, Plesk provides more granular control over log management 
                and retention settings, making it excellent for detailed bot analytics.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Plesk's Log Browser allows you to view, filter, and download logs directly from the web 
                  interface, with advanced filtering options that can help isolate bot traffic before download.
                </p>
              </div>
            </div>
          </section>

          {/* Log Browser Method */}
          <section className="space-y-6 mb-12">
            <h2 id="log-browser" className="text-2xl font-bold tracking-tight">Log Browser Method (Recommended)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                The most straightforward method using Plesk's built-in Log Browser:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Log into Plesk Panel</h3>
                    <p className="text-sm text-muted-foreground">
                      Access your Plesk control panel using the URL provided by your hosting provider 
                      (typically yourdomain.com:8443 or a custom URL).
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to Your Domain</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      From the main dashboard, click on the domain you want to analyze. This will take you 
                      to the domain's management panel.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Access Log Browser</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Look for "Log Browser" in the Statistics section or sidebar. The exact location may vary 
                      based on your Plesk version and theme:
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• <strong>Statistics</strong> → "Log Browser"</li>
                        <li>• <strong>Logs</strong> → "Web Server Logs"</li>
                        <li>• <strong>Websites & Domains</strong> → "Log Browser"</li>
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
                    <h3 className="font-semibold mb-2">Select Access Logs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In the Log Browser, you'll see different types of logs. Select "Access Log" for web server traffic:
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• <strong>Access Log:</strong> All HTTP/HTTPS requests (what you need)</li>
                        <li>• <strong>Error Log:</strong> Server errors only</li>
                        <li>• <strong>Bandwidth Log:</strong> Traffic usage statistics</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">
                        Choose "Access Log" for comprehensive bot analytics data
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
                    <h3 className="font-semibold mb-2">Configure Date Range</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Set the date range for the logs you want to download. You can select:
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Today's logs for recent activity</li>
                        <li>• Last 7 days for weekly analysis</li>
                        <li>• Custom date range for specific periods</li>
                        <li>• All available logs for comprehensive analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Download the Log File</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click "Download" or "Export" to save the log file to your computer. Plesk typically provides 
                      the file in standard Apache log format.
                    </p>
                    <Alert className="mt-3 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                      <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
                      <AlertDescription>
                        Large log files may take time to generate. Plesk will often email you a download link 
                        for very large files.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                {/* Step 7 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    7
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
                If Log Browser isn't available or you prefer other methods:
              </p>
              
              <div className="space-y-4">
                {/* Method 1: Log Rotation */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 1: Log Rotation Settings</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Access logs through Plesk's log rotation system:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Go to "Websites & Domains" → "Log Rotation"</li>
                    <li>Configure log retention settings</li>
                    <li>Enable "Compress rotated logs" for storage efficiency</li>
                    <li>Access archived logs from the file system</li>
                  </ol>
                </div>

                {/* Method 2: File Manager */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FolderOpen className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 2: File Manager</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Navigate to logs using Plesk's File Manager:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Go to "Files" → "File Manager"</li>
                    <li>Navigate to log directories:</li>
                  </ol>
                  <div className="ml-8 mt-2">
                    <ul className="text-xs font-mono space-y-1 text-muted-foreground">
                      <li><strong>Linux:</strong> /var/www/vhosts/domain.com/logs/</li>
                      <li><strong>Windows:</strong> C:\inetpub\vhosts\domain.com\logs\</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">3. Download access_log or access.log files</p>
                </div>

                {/* Method 3: FTP/SFTP */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 3: FTP/SFTP Access</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use FTP credentials to access logs directly:
                  </p>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Create FTP account in "Websites & Domains" → "FTP Access"</li>
                    <li>Connect via FileZilla or similar FTP client</li>
                    <li>Navigate to /logs/ directory</li>
                    <li>Download access log files</li>
                  </ol>
                </div>

                {/* Method 4: SSH Access */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Method 4: SSH Access (Linux)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    For Linux-based Plesk servers with SSH access:
                  </p>
                  <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                    <code>{`# Connect via SSH
ssh username@your-server.com

# Navigate to logs
cd /var/www/vhosts/yourdomain.com/logs/

# View recent entries
tail -n 1000 access_log > recent.log

# Download via SCP
scp access_log local-destination/`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Plesk Log Management Features */}
          <section className="space-y-6 mb-12">
            <h2 id="log-management" className="text-2xl font-bold tracking-tight">Plesk Log Management Features</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Plesk offers advanced log management capabilities:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Real-time Log Viewer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    View live log entries as they happen, useful for monitoring bot activity in real-time
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Advanced Filtering</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Filter logs by IP, user agent, status code, or time range before downloading
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Custom Log Formats</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Configure custom log formats to include specific data fields for analysis
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Automatic Archiving</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Set up automatic log rotation and compression to manage storage efficiently
                  </p>
                </div>
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
                    <strong>Windows vs Linux:</strong> Log file locations and formats differ between 
                    Windows and Linux Plesk installations. Check your server type.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Formats:</strong> Plesk supports both Apache Common Log Format and 
                    Combined Log Format, both work well with Bot Analytics.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Retention Settings:</strong> Configure log retention in "Log Rotation" 
                    settings to keep logs longer for historical analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Multiple Domains:</strong> Each domain has separate log files. 
                    Repeat the process for each domain you want to analyze.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Plesk Hosting Providers */}
          <section className="space-y-6 mb-12">
            <h2 id="hosting-providers" className="text-2xl font-bold tracking-tight">Common Plesk Hosting Providers</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Popular hosting providers that use Plesk:
              </p>
              
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">1&1 IONOS</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive Plesk hosting with full log access</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">OVHcloud</h4>
                  <p className="text-sm text-muted-foreground">European hosting with Plesk panel</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">Media Temple</h4>
                  <p className="text-sm text-muted-foreground">Premium hosting with Plesk management</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">Liquid Web</h4>
                  <p className="text-sm text-muted-foreground">Managed hosting with Plesk options</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">InterServer</h4>
                  <p className="text-sm text-muted-foreground">Affordable VPS with Plesk panel</p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-1">WebHostingPad</h4>
                  <p className="text-sm text-muted-foreground">Shared and VPS hosting with Plesk</p>
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
                  <h4 className="font-medium mb-2">Can't find Log Browser?</h4>
                  <p className="text-sm text-muted-foreground">
                    Log Browser location varies by Plesk version. Try "Statistics", "Logs", or "Websites & Domains". 
                    Some hosting providers may disable this feature.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Permission denied accessing logs?</h4>
                  <p className="text-sm text-muted-foreground">
                    Your Plesk user role may not have log access permissions. Contact your hosting provider 
                    to enable log access or upgrade your plan.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Log files are missing or empty?</h4>
                  <p className="text-sm text-muted-foreground">
                    Check if logging is enabled for your domain. Go to "Websites & Domains" → "Apache & nginx Settings" 
                    and ensure "Access log" is enabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Different log formats on Windows vs Linux?</h4>
                  <p className="text-sm text-muted-foreground">
                    Windows Plesk uses IIS logs by default, while Linux uses Apache/nginx. Both formats work 
                    with Bot Analytics, but file locations and names differ.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Large files causing download timeouts?</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the date range filter to download smaller chunks, or enable email delivery for large 
                    log files in the Log Browser settings.
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
              After uploading your Plesk logs to Finseo Bot Analytics:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Analyze AI bot traffic across all your Plesk-managed domains</li>
              <li>Leverage Plesk's detailed logging for comprehensive bot insights</li>
              <li>Track bot behavior patterns across different server configurations</li>
              <li>Optimize your content strategy based on detailed access patterns</li>
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