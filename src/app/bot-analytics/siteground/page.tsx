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
  Settings,
  FolderOpen,
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Key,
  Lock
} from "lucide-react"

export const metadata: Metadata = getPageMetadata('bot-analytics-siteground');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "SiteGround" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "site-tools", title: "Using Site Tools", level: 2 },
  { id: "ftp-method", title: "FTP/SFTP Method", level: 2 },
  { id: "file-manager", title: "File Manager Method", level: 2 },
  { id: "ssh-method", title: "SSH Method (Advanced)", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
]

export default function SiteGroundPage() {
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
              SiteGround Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              How to download server access logs from SiteGround WordPress hosting for AI bot analytics.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About SiteGround</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              SiteGround is a popular WordPress hosting provider known for its performance, security, and excellent 
              customer support. They offer Site Tools, a custom control panel that provides easy access to server 
              logs and advanced features, making it straightforward to download access logs for bot analytics.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Site Tools Panel</Badge>
              <Badge variant="secondary">WordPress Optimized</Badge>
              <Badge variant="secondary">24/7 Support</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                SiteGround provides multiple methods to access your server logs through their custom Site Tools 
                interface. Unlike traditional cPanel hosts, SiteGround has developed their own control panel that's 
                specifically optimized for WordPress hosting.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Advantage</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  SiteGround's Site Tools makes accessing logs straightforward with a dedicated Statistics section 
                  that includes raw access logs. The interface is modern and user-friendly, designed specifically 
                  for WordPress users.
                </p>
              </div>
            </div>
          </section>

          {/* Using Site Tools */}
          <section className="space-y-6 mb-12">
            <h2 id="site-tools" className="text-2xl font-bold tracking-tight">Method 1: Using Site Tools (Recommended)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                The easiest way to access your server logs on SiteGround is through their Site Tools interface:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Log into Your SiteGround Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Navigate to <Link href="https://my.siteground.com" target="_blank" className="text-[#0eca7b] hover:underline">
                        my.siteground.com
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
                    <h3 className="font-semibold mb-2">Access Site Tools</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In your hosting dashboard, locate your website and click on "Site Tools" to access the control panel.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to Statistics</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In Site Tools, go to Statistics → Access Logs. This section provides direct access to your 
                      server's raw access logs.
                    </p>
                    <Alert className="mt-3">
                      <Settings className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        SiteGround keeps access logs for the last 30 days. Download them regularly for historical analysis.
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
                    <h3 className="font-semibold mb-2">Generate and Download Logs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click "Generate" to create a downloadable log file. SiteGround will compile your access logs 
                      into a compressed file.
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground mb-2">The log file will include:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Visitor IP addresses</li>
                        <li>• User-Agent strings (crucial for bot identification)</li>
                        <li>• Request timestamps</li>
                        <li>• Accessed URLs</li>
                        <li>• Response codes</li>
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
                    <h3 className="font-semibold mb-2">Download the Log File</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once generated, click the download link to save the log file to your computer.
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

          {/* FTP Method */}
          <section className="space-y-6 mb-12">
            <h2 id="ftp-method" className="text-2xl font-bold tracking-tight">Method 2: FTP/SFTP Access</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                You can also access logs via FTP if you prefer using an FTP client like FileZilla:
              </p>
              
              <div className="space-y-6">
                {/* FTP Setup */}
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">Setting Up FTP Access</h4>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>In Site Tools, go to Site → FTP Accounts</li>
                    <li>Create a new FTP account or use existing credentials</li>
                    <li>Note your FTP hostname (usually your domain or server name)</li>
                    <li>Connect using port 21 for FTP or port 22 for SFTP</li>
                  </ol>
                </div>

                {/* Log Location */}
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">Finding the Logs</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Once connected, navigate to:
                  </p>
                  <div className="bg-muted p-3 rounded">
                    <code className="text-xs">/home/username/logs/</code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Look for files named like <code className="bg-muted px-1 rounded">yourdomain.com.access.log</code>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* File Manager Method */}
          <section className="space-y-6 mb-12">
            <h2 id="file-manager" className="text-2xl font-bold tracking-tight">Method 3: File Manager</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                SiteGround's File Manager provides direct browser-based access to your files:
              </p>
              
              <ol className="text-sm space-y-3 ml-6 list-decimal text-muted-foreground">
                <li>In Site Tools, go to Site → File Manager</li>
                <li>Navigate to the logs directory (usually <code className="bg-muted px-1 rounded">/home/username/logs/</code>)</li>
                <li>Right-click on the access log file</li>
                <li>Select "Download" to save it to your computer</li>
              </ol>

              <Alert className="mt-6">
                <FolderOpen className="h-4 w-4" />
                <AlertDescription>
                  The File Manager is convenient for quick downloads but may timeout with very large log files. 
                  Use FTP for files over 100MB.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* SSH Method */}
          <section className="space-y-6 mb-12">
            <h2 id="ssh-method" className="text-2xl font-bold tracking-tight">Method 4: SSH Access (Advanced)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                For advanced users, SiteGround provides SSH access on most hosting plans:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">Enabling SSH Access</h4>
                <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                  <li>Go to Site Tools → Devs → SSH Keys Manager</li>
                  <li>Generate a new SSH key pair</li>
                  <li>Add your public key for authentication</li>
                  <li>Enable SSH access for your account</li>
                </ol>
              </div>

              <div className="mt-4 rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">SSH Commands</h4>
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                  <code>{`# Connect to your server
ssh username@yourdomain.com -p 18765

# Navigate to logs directory
cd ~/logs/

# View recent log entries
tail -n 1000 yourdomain.com.access.log

# Compress logs for download
tar -czf logs.tar.gz *.log

# Download via SCP
scp -P 18765 username@yourdomain.com:~/logs/logs.tar.gz .`}</code>
                </pre>
                <Alert className="mt-3">
                  <Terminal className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    SiteGround uses a non-standard SSH port (18765) for security. Make sure to specify this port 
                    when connecting.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </section>

          {/* SiteGround Specific Features */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">SiteGround-Specific Features</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>SuperCacher:</strong> SiteGround's caching may affect bot detection. Ensure you're 
                    analyzing raw access logs, not cached responses.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Security Features:</strong> SiteGround's AI Anti-Bot system doesn't block legitimate 
                    search engine bots like ChatGPT-User or GPTBot.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Retention:</strong> Access logs are kept for 30 days. Set up regular downloads 
                    or use their backup service for longer retention.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Multiple Sites:</strong> Each site in your account has separate log files. Download 
                    logs for each domain you want to analyze.
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
                  <h4 className="font-medium mb-2">Can't find Access Logs in Statistics?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure your plan includes access to raw logs. Some starter plans may have limitations. 
                    Contact SiteGround support to verify your plan features.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Log files are empty or very small?</h4>
                  <p className="text-sm text-muted-foreground">
                    Check if your site is using Cloudflare. If so, you may need to access logs through 
                    Cloudflare instead, as traffic may not reach SiteGround's servers directly.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">FTP connection fails?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure you're using the correct hostname and port. SiteGround may use custom ports 
                    for security. Check Site Tools → Site → FTP Accounts for exact connection details.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">SSH access denied?</h4>
                  <p className="text-sm text-muted-foreground">
                    SSH is not available on all plans. Upgrade to GrowBig or higher, or use FTP/File Manager 
                    as alternatives.
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
              After downloading your SiteGround logs and uploading to Finseo Bot Analytics:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Monitor AI bot traffic patterns to your WordPress sites</li>
              <li>Identify which content attracts the most AI crawler attention</li>
              <li>Optimize your content strategy for better AI visibility</li>
              <li>Use SiteGround's speed optimization tools to improve bot crawl efficiency</li>
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