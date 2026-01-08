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
  FileText,
  Settings,
  FolderOpen,
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MousePointer,
  Shield
} from "lucide-react"

export const metadata: Metadata = getPageMetadata('bot-analytics-godaddy');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "GoDaddy" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "cpanel-method", title: "cPanel Method", level: 2 },
  { id: "managed-wordpress", title: "Managed WordPress Hosting", level: 2 },
  { id: "ftp-method", title: "FTP/SFTP Method", level: 2 },
  { id: "vps-dedicated", title: "VPS & Dedicated Servers", level: 2 },
  { id: "limitations", title: "Limitations", level: 2 },
]

export default function GoDaddyPage() {
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
              GoDaddy Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              How to access server logs from GoDaddy hosting for AI bot analytics and <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracking</Link>.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About GoDaddy</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              GoDaddy is one of the world's largest domain registrars and web hosting companies. They offer various 
              hosting solutions including shared hosting with cPanel, Managed WordPress hosting, and VPS options. 
              Access to server logs varies significantly based on your hosting plan.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Multiple Hosting Types</Badge>
              <Badge variant="secondary">cPanel/Plesk</Badge>
              <Badge variant="secondary">Managed WordPress</Badge>
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
            <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
            <AlertTitle className="text-[#ff6b35]">Plan-Specific Access</AlertTitle>
            <AlertDescription>
              GoDaddy's log access varies greatly by hosting type. Managed WordPress hosting has limited log access, 
              while cPanel-based hosting provides more options. VPS and dedicated servers offer full access.
            </AlertDescription>
          </Alert>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                GoDaddy offers different hosting products with varying levels of server log access:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Shared Hosting (cPanel)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full access to raw logs through cPanel interface and FTP
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Managed WordPress</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Limited access - logs available through File Manager or SFTP only
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* cPanel Method */}
          <section className="space-y-6 mb-12">
            <h2 id="cpanel-method" className="text-2xl font-bold tracking-tight">Method 1: cPanel (Shared Hosting)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                If you have GoDaddy's Linux Hosting with cPanel, accessing logs is straightforward:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Access Your GoDaddy Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Sign in to your GoDaddy account at <Link href="https://www.godaddy.com" target="_blank" className="text-[#0eca7b] hover:underline">
                        godaddy.com
                      </Link> and navigate to your products.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Open cPanel</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In your hosting dashboard, click "Manage" next to your hosting plan, then click "cPanel Admin".
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to Raw Access</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      In cPanel, look for the "Metrics" section and click on "Raw Access" or "Raw Access Logs".
                    </p>
                    <Alert className="mt-3">
                      <Settings className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        If Raw Access is not visible, it may need to be enabled. Contact GoDaddy support to activate it.
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
                    <h3 className="font-semibold mb-2">Download Your Logs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click on your domain name to download the compressed log file. The file will be in .gz format.
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground mb-2">Log files contain:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Visitor IP addresses</li>
                        <li>• User-Agent strings (for bot identification)</li>
                        <li>• Access timestamps</li>
                        <li>• Requested URLs</li>
                        <li>• HTTP status codes</li>
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
                      Extract the .gz file on your computer to get the .log file, then upload to Bot Analytics.
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

          {/* Managed WordPress Method */}
          <section className="space-y-6 mb-12">
            <h2 id="managed-wordpress" className="text-2xl font-bold tracking-tight">Method 2: Managed WordPress Hosting</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                GoDaddy's Managed WordPress hosting has limited log access. Here's what's available:
              </p>
              
              <Alert className="mb-6 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
                <AlertCircle className="h-4 w-4 text-[#ff6b35]" />
                <AlertDescription>
                  Managed WordPress hosting does NOT provide raw Apache/Nginx access logs through the dashboard. 
                  You'll need to use SFTP or contact support for log access.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                {/* File Manager Method */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FolderOpen className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 1: File Manager</h4>
                  </div>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>Go to your GoDaddy products page</li>
                    <li>Click "Manage All" next to Managed WordPress</li>
                    <li>Select "Settings" for your website</li>
                    <li>Under "Tools", click "File Browser"</li>
                    <li>Look for log files in the root directory or contact support for location</li>
                  </ol>
                </div>

                {/* SFTP Method */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 2: SFTP Access</h4>
                  </div>
                  <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                    <li>In your site settings, find "SSH/SFTP login"</li>
                    <li>Click "Change" to create new credentials</li>
                    <li>Use FileZilla with the provided hostname, username, and password</li>
                    <li>Connect on port 22 (SFTP)</li>
                    <li>Navigate to find log files (location varies)</li>
                  </ol>
                </div>

                {/* Support Request */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MousePointer className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Option 3: Contact Support</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you can't find logs via the above methods, contact GoDaddy support and request your 
                    raw access logs. They can provide them or guide you to the correct location.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FTP Method */}
          <section className="space-y-6 mb-12">
            <h2 id="ftp-method" className="text-2xl font-bold tracking-tight">Method 3: FTP/SFTP (All Plans)</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                For any GoDaddy hosting plan with FTP access:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">FTP Setup</h4>
                <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                  <li>Access your hosting control panel</li>
                  <li>Look for "FTP Accounts" or "FTP Users"</li>
                  <li>Create or note existing FTP credentials</li>
                  <li>Connect using FileZilla or similar FTP client</li>
                </ol>
                
                <div className="mt-4 p-3 bg-muted rounded">
                  <p className="text-sm font-medium mb-2">Common log locations:</p>
                  <ul className="text-xs space-y-1 font-mono">
                    <li>/logs/</li>
                    <li>/var/log/</li>
                    <li>/home/username/logs/</li>
                    <li>/statistics/logs/</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* VPS & Dedicated */}
          <section className="space-y-6 mb-12">
            <h2 id="vps-dedicated" className="text-2xl font-bold tracking-tight">VPS & Dedicated Servers</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Full root access on VPS and dedicated servers allows complete log access:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">SSH Access</h4>
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                  <code>{`# Connect via SSH
ssh root@your-server-ip

# Navigate to Apache logs
cd /var/log/apache2/
# or for Nginx
cd /var/log/nginx/

# View recent entries
tail -n 1000 access.log

# Compress for download
tar -czf logs.tar.gz *.log

# Download via SCP
scp root@server-ip:/var/log/apache2/logs.tar.gz .`}</code>
                </pre>
              </div>

              <Alert className="mt-4">
                <Terminal className="h-4 w-4" />
                <AlertDescription>
                  With root access, you can also install log analysis tools directly on the server for 
                  real-time bot monitoring.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Limitations */}
          <section className="space-y-6 mb-12">
            <h2 id="limitations" className="text-2xl font-bold tracking-tight">GoDaddy-Specific Limitations</h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Managed WordPress Restrictions</h4>
                  <p className="text-sm text-muted-foreground">
                    Raw server logs are not readily available in the dashboard. You must use SFTP or contact 
                    support, which can slow down your analytics workflow.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Log Rotation</h4>
                  <p className="text-sm text-muted-foreground">
                    GoDaddy rotates logs frequently. Download them regularly to maintain historical data for 
                    bot traffic analysis.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Shared Hosting Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    On busy shared servers, log files can be very large. Consider downloading during off-peak 
                    hours or using FTP resume features.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Security Features</h4>
                  <p className="text-sm text-muted-foreground">
                    GoDaddy's firewall may block some bot traffic. Ensure legitimate AI crawlers like GPTBot 
                    and ChatGPT-User are whitelisted in your security settings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Best Practices for GoDaddy</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Choose the Right Plan:</strong> If bot analytics is important, consider cPanel 
                    hosting or VPS for easier log access.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Enable Logging:</strong> Some plans require you to enable raw access logs. Check 
                    your hosting settings or contact support.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Regular Downloads:</strong> Set up a weekly schedule to download logs before they're 
                    rotated or deleted.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Monitor File Sizes:</strong> GoDaddy may limit file download sizes. Split large 
                    logs or use command-line tools for better performance.
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
              After downloading your GoDaddy server logs:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Upload logs to Finseo Bot Analytics for AI crawler analysis</li>
              <li>Identify which pages receive the most <Link href="https://www.finseo.ai/bot-traffic" className="text-[#0eca7b] hover:underline" target="_blank">AI bot traffic</Link></li>
              <li>Optimize your content for better <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility</Link></li>
              <li>Consider upgrading your hosting plan if you need better log access</li>
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