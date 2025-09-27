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
  Calendar,
  FolderOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Archive,
  Clock
} from "lucide-react"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Bot Analytics", href: "/bot-analytics" },
  { label: "STRATO" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "requirements", title: "Requirements", level: 2 },
  { id: "access-logs", title: "Accessing Your Logs", level: 2 },
  { id: "error-logs", title: "Error Logs", level: 2 },
  { id: "limitations", title: "Limitations", level: 2 },
]

export default function STRATOPage() {
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
              STRATO Server Log Access
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              How to download server access logs from STRATO hosting for AI bot analytics and visibility tracking.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">About STRATO</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              STRATO is one of Germany's largest hosting providers, offering web hosting, domains, and server solutions. 
              They provide access to server logs through their customer portal with up to 6 weeks of historical data, 
              making it suitable for tracking AI bot visits and analyzing your site's AI visibility.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">German Provider</Badge>
              <Badge variant="secondary">6 Weeks Log Retention</Badge>
              <Badge variant="secondary">Customer Portal Access</Badge>
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-[#ff6b35]/20 bg-[#ff6b35]/5 dark:bg-[#ff6b35]/10">
            <Clock className="h-4 w-4 text-[#ff6b35]" />
            <AlertTitle className="text-[#ff6b35]">Log Retention Period</AlertTitle>
            <AlertDescription>
              STRATO keeps logs for the last 6 weeks only. Older data is not available. Archive your logs regularly 
              if you need long-term AI bot traffic analysis.
            </AlertDescription>
          </Alert>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                STRATO provides straightforward access to server logs through their customer portal. The process is 
                simple and doesn't require technical knowledge, making it accessible for all users who want to 
                analyze their AI bot traffic.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Features</span>
                </div>
                <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                  <li>Direct download from customer portal</li>
                  <li>Date range selection for specific periods</li>
                  <li>Compressed log files for easy download</li>
                  <li>Separate error log access</li>
                  <li>No technical setup required</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="space-y-6 mb-12">
            <h2 id="requirements" className="text-2xl font-bold tracking-tight">Requirements</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Log file access is available based on your STRATO hosting plan:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Current Plans</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available from Hosting Basic and higher plans
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Archive className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Legacy Plans</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available from BasicWeb XL, PowerWeb Basic and higher
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Access Logs */}
          <section className="space-y-6 mb-12">
            <h2 id="access-logs" className="text-2xl font-bold tracking-tight">Accessing Your Logs</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Follow these steps to download your server logs from STRATO:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Log into STRATO Customer Portal</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Access the STRATO Kunden-Login with your credentials.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://www.strato.de/apps/CustomerService" target="_blank">
                        STRATO Login
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to Statistics</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Go to <strong>Datenbanken und Webspace → Statistik</strong> in the menu.
                    </p>
                    <Alert className="mt-3">
                      <FolderOpen className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        The menu structure might vary slightly depending on your STRATO interface version.
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
                    <h3 className="font-semibold mb-2">Select Date Range</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Enter your desired start date (Anfangsdatum) and end date (Enddatum) for the log data. 
                      Remember, only the last 6 weeks are available.
                    </p>
                    <div className="rounded-lg border bg-card p-4">
                      <Calendar className="h-4 w-4 text-[#0eca7b] mb-2" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Tip:</strong> Download logs weekly to maintain a complete archive for AI bot analysis.
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
                    <h3 className="font-semibold mb-2">Download Log File</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click the <strong>"Logfile Download"</strong> button next to the date selection. 
                      Your personal log file will be generated immediately and made available for download.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Extract the File</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      The log file comes as a ZIP archive. Extract it using any ZIP program (e.g., WinZip, 7-Zip). 
                      You can save it with any extension (.txt, .log, etc.).
                    </p>
                    <div className="rounded-lg border bg-muted p-4">
                      <p className="text-sm font-medium mb-2">Example log entry:</p>
                      <pre className="text-xs overflow-x-auto">
                        <code>{`65.54.188.59 - [01/Jan/2006:02:35:34 +0100] "GET /robots.txt HTTP/1.0" 200 54 "-" "msnbot/1.0 (+http://search.msn.com/msnbot.htm)"`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Upload to Bot Analytics</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload the extracted log file to Finseo Bot Analytics for AI crawler analysis.
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

          {/* Error Logs */}
          <section className="space-y-6 mb-12">
            <h2 id="error-logs" className="text-2xl font-bold tracking-tight">Error Logs</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                STRATO also provides error logs showing failed access attempts to your website:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">Accessing Error Logs</h4>
                <ol className="text-sm space-y-2 ml-6 list-decimal text-muted-foreground">
                  <li>In the customer portal, go to <strong>Datenbanken und Webspace → Statistik</strong></li>
                  <li>Select the <strong>Logfiles</strong> tab</li>
                  <li>Click <strong>"Error-Logfile anzeigen"</strong></li>
                  <li>Error logs from the last 5 days (max 100,000 entries) will display</li>
                </ol>
                
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Error logs help identify bot access issues. If legitimate AI crawlers are getting errors, 
                    you may be missing out on AI visibility.
                  </AlertDescription>
                </Alert>
              </div>

              <div className="mt-4 rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">Error Log Availability</h4>
                <div className="grid gap-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Current Plans:</strong> Available from Hosting Starter and higher
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <strong>Legacy Plans:</strong> Available from BasicWeb XL, PowerWeb Starter and higher
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="space-y-6 mb-12">
            <h2 id="limitations" className="text-2xl font-bold tracking-tight">STRATO-Specific Limitations</h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">6-Week Retention Only</h4>
                  <p className="text-sm text-muted-foreground">
                    STRATO only keeps logs for 6 weeks. This is shorter than many other providers. Set up a 
                    regular download schedule to maintain historical data for long-term AI visibility analysis.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Log Update Latency</h4>
                  <p className="text-sm text-muted-foreground">
                    Logs are updated with a 12-24 hour delay after the end of each day. This means yesterday's 
                    bot traffic may not be visible until later today.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Plan Restrictions</h4>
                  <p className="text-sm text-muted-foreground">
                    Not all STRATO plans include log access. Verify your plan includes this feature before 
                    attempting to download logs.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Large Error Logs</h4>
                  <p className="text-sm text-muted-foreground">
                    If your error log exceeds 100,000 entries, an archive is provided instead of the live view. 
                    This may indicate excessive bot errors that need attention.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Best Practices for STRATO</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Weekly Downloads:</strong> Due to the 6-week limit, download logs weekly to ensure 
                    you never lose data for AI bot analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Archive Locally:</strong> Store downloaded logs locally or in cloud storage for 
                    long-term AI visibility tracking and trend analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Monitor Error Logs:</strong> Check error logs regularly to ensure AI bots aren't 
                    encountering access issues that could hurt your visibility.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Use Log Analysis Tools:</strong> STRATO recommends using log file analysis programs 
                    as raw logs can be difficult to read. Bot Analytics handles this for you.
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
              After downloading your STRATO logs:
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Upload logs to Finseo Bot Analytics for AI crawler identification</li>
              <li>Set up a weekly download reminder to maintain complete records</li>
              <li>Monitor which AI bots visit your German-hosted content</li>
              <li>Track your visibility in AI search results over time</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link href="/bot-analytics">
                  Back to Bot Analytics Overview
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://www.strato.de/faq/hosting/wo-finde-ich-meine-logfiles/" target="_blank">
                  STRATO FAQ (German)
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