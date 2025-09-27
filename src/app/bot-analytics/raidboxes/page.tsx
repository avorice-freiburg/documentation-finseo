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
  Shield,
  Terminal,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Key,
  Globe
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "Raidboxes" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "prerequisites", title: "Prerequisites", level: 2 },
  { id: "step-by-step", title: "Step-by-Step Instructions", level: 2 },
  { id: "alternative-methods", title: "Alternative Methods", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
]

export default function RaidboxesPage() {
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
              Raidboxes Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Step-by-step guide to download server access logs from your Raidboxes hosting account.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About Raidboxes</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Raidboxes is a premium managed WordPress hosting provider based in Germany, known for its 
              performance-optimized infrastructure and developer-friendly features. They provide easy access 
              to server logs through their dashboard.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Managed WordPress</Badge>
              <Badge variant="secondary">EU-Based</Badge>
              <Badge variant="secondary">Developer-Friendly</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-4 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <p className="text-muted-foreground">
              Raidboxes provides SSH/SFTP access to download server logs. This guide covers multiple methods 
              to access your logs, from SSH command line to FileZilla FTP client.
            </p>
          </section>

          {/* Prerequisites */}
          <section className="space-y-4 mb-12">
            <h2 id="prerequisites" className="text-2xl font-bold tracking-tight">Prerequisites</h2>
            <Alert className="mb-4">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Raidboxes uses two-factor authentication for enhanced security. Have your authenticator app ready.
              </AlertDescription>
            </Alert>
            <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
              <li>Access to your Raidboxes dashboard</li>
              <li>SSH/SFTP access enabled for your Box</li>
              <li>SSH client (Terminal) or FTP client (FileZilla)</li>
            </ul>
          </section>

          {/* Step-by-Step Instructions */}
          <section className="space-y-6 mb-12">
            <h2 id="step-by-step" className="text-2xl font-bold tracking-tight">Step-by-Step Instructions</h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Log in to your Raidboxes Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Navigate to <Link href="https://my.raidboxes.io" target="_blank" className="text-[#0eca7b] hover:underline">
                      my.raidboxes.io
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
                  <h3 className="font-semibold mb-2">Navigate to Your Box</h3>
                  <p className="text-sm text-muted-foreground">
                    From the dashboard, click on your Box (website) to access its management panel.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Access Log Files via SSH/SFTP</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Raidboxes provides SSH/SFTP access to download server logs. You have two options:
                  </p>
                  
                  <div className="space-y-4">
                    {/* Option 1: SSH */}
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Terminal className="h-4 w-4" />
                          Option 1: Using SSH
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <ol className="text-sm space-y-2 ml-6 list-decimal">
                          <li>Enable SSH access in your Box settings under "SSH & SFTP"</li>
                          <li>Copy your SSH credentials (host, username, port)</li>
                          <li>Connect using terminal:</li>
                        </ol>
                        <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                          <code>ssh username@your-box.raidboxes.io -p 22</code>
                        </pre>
                        <p className="text-sm">4. Navigate to the logs directory:</p>
                        <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                          <code>cd /var/log/nginx/</code>
                        </pre>
                        <p className="text-sm">5. Download the access log:</p>
                        <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                          <code>scp access.log local-destination/</code>
                        </pre>
                      </CardContent>
                    </Card>

                    {/* Option 2: SFTP */}
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <FileText className="h-4 w-4" />
                          Option 2: Using SFTP/FileZilla
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="text-sm space-y-2 ml-6 list-decimal">
                          <li>Download and install <Link href="https://filezilla-project.org/" target="_blank" className="text-[#0eca7b] hover:underline">FileZilla</Link></li>
                          <li>Enable SFTP access in your Box settings</li>
                          <li>Create a new connection with your SFTP credentials</li>
                          <li>Navigate to <code className="bg-muted px-1 rounded text-xs">/var/log/nginx/</code></li>
                          <li>Download the <code className="bg-muted px-1 rounded text-xs">access.log</code> file</li>
                        </ol>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Upload to Finseo Bot Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Once you have your access.log file, upload it to Finseo:
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
          </section>

          {/* Alternative Methods */}
          <section className="space-y-4 mb-12">
            <h2 id="alternative-methods" className="text-2xl font-bold tracking-tight">Alternative Methods</h2>
            <Card>
              <CardHeader>
                <CardTitle>Request Logs from Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're unable to access logs directly, Raidboxes support can provide them:
                </p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li>Contact support through the dashboard chat</li>
                  <li>Request access logs for your specific time period</li>
                  <li>They typically respond within 24 hours</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Important Notes */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Important Notes</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Log Rotation:</strong> Raidboxes rotates logs daily. Older logs may be compressed 
                    as .gz files (e.g., access.log.1.gz)
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>File Format:</strong> Logs are in standard Apache/Nginx format, perfect for Bot Analytics
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Privacy:</strong> Raidboxes already anonymizes IP addresses in compliance with GDPR
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Download Size:</strong> Log files can be large. Ensure you have sufficient bandwidth
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="space-y-4 mb-12">
            <h2 id="troubleshooting" className="text-2xl font-bold tracking-tight">Troubleshooting</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Can't find SSH/SFTP settings?</h4>
                <p className="text-sm text-muted-foreground">
                  SSH/SFTP access might need to be enabled first. Go to your Box settings → "SSH & SFTP" → 
                  Enable access and set a password.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Permission denied errors?</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure you're using the correct credentials. The username is usually your Box ID 
                  (e.g., wp12345). Reset your SSH password if needed.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Need help?</h4>
                <p className="text-sm text-muted-foreground">
                  Raidboxes offers excellent support. Use the live chat in your dashboard or email 
                  support@raidboxes.io for assistance.
                </p>
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
              After uploading your logs to Finseo Bot Analytics, you'll be able to:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>See which AI bots are visiting your site</li>
              <li>Track your visibility in AI search results</li>
              <li>Monitor trends over time</li>
              <li>Identify opportunities to improve AI visibility</li>
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