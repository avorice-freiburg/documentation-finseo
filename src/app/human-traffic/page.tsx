import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  MousePointer,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lock,
  Users,
  Eye
} from "lucide-react"
import Image from "next/image"

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Human Traffic" }
]

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "google-analytics", title: "Google Analytics Integration", level: 2 },
  { id: "connect-steps", title: "How to Connect", level: 2 },
  { id: "privacy-security", title: "Privacy & Security", level: 2 },
  { id: "insights", title: "AI Referral Insights", level: 2 },
]

export default function HumanTrafficPage() {
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
              Human Traffic Analytics
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Track and analyze human visitors from AI search engines like ChatGPT, Perplexity, and others 
              through our Google Analytics integration.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">Real User Insights</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              While Bot Traffic shows you when AI crawlers visit your site to gather information, Human Traffic 
              reveals when real users click through from AI search results. This complete picture helps you 
              understand your true AI visibility impact.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Google Analytics 4</Badge>
              <Badge variant="secondary">Privacy-First</Badge>
              <Badge variant="secondary">Real-Time Data</Badge>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6 mb-12">
            <h2 id="overview" className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Human Traffic analytics complements Bot Traffic data by showing you the actual human visitors who 
                arrive at your site through AI-powered search engines. This integration helps you measure the real 
                impact of your AI visibility efforts.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MousePointer className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Click-Through Traffic</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    See actual visitors who clicked links in ChatGPT, Perplexity, and other AI search results
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-[#0eca7b]" />
                    <h4 className="font-semibold">Conversion Tracking</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Measure how AI-referred visitors engage with your site and convert
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Google Analytics Integration */}
          <section className="space-y-6 mb-12">
            <h2 id="google-analytics" className="text-2xl font-bold tracking-tight">Google Analytics Integration</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Our Google Analytics integration provides a seamless way to visualize AI referral traffic without 
                compromising your data privacy. We process and display your analytics data in real-time without 
                storing any of it on our servers.
              </p>
              
              <Alert className="mb-6 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
                <Shield className="h-4 w-4 text-[#0eca7b]" />
                <AlertTitle className="text-[#0eca7b]">Privacy-First Approach</AlertTitle>
                <AlertDescription>
                  We don't save any of your Google Analytics data. The integration only processes and visualizes 
                  your data in real-time, ensuring complete privacy and compliance with data protection regulations.
                </AlertDescription>
              </Alert>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-3">What You'll See</h4>
                <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground">
                  <li>Referral traffic from ChatGPT (chat.openai.com)</li>
                  <li>Visitors from Perplexity AI (perplexity.ai)</li>
                  <li>Claude.ai and other AI assistant referrals</li>
                  <li>Trending AI sources and their traffic patterns</li>
                  <li>User behavior and engagement metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Connect Steps */}
          <section className="space-y-6 mb-12">
            <h2 id="connect-steps" className="text-2xl font-bold tracking-tight">How to Connect</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Connecting your Google Analytics takes just a few clicks through our secure OAuth process:
              </p>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Navigate to Human Traffic</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Go to <Link href="https://app.finseo.ai/ai-analytics" target="_blank" className="text-[#0eca7b] hover:underline">
                        app.finseo.ai/ai-analytics
                      </Link> in your Finseo dashboard.
                    </p>
                  </div>
                </div>

                {/* Step 2 with Image */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Click Connect</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Click the "Connect Google Analytics" button to start the integration process.
                    </p>
                    <div className="rounded-lg border bg-muted/50 p-8 mb-4">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <img 
                          src="https://www.google.com/s2/favicons?domain=analytics.google.com&sz=128" 
                          alt="Google Analytics" 
                          className="h-16 w-16"
                        />
                        <p className="text-sm text-muted-foreground text-center">Connect Analytics Screenshot</p>
                        <Button className="bg-[#0eca7b] hover:bg-[#0eca7b]/90">
                          Connect Google Analytics
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Complete OAuth Process</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      You'll be redirected to Google to authorize the connection. Select your Google Analytics 
                      account and grant read-only access.
                    </p>
                    <Alert className="mt-3">
                      <Lock className="h-4 w-4" />
                      <AlertDescription className="text-xs">
                        We only request read access to view your analytics data. We cannot modify your Google 
                        Analytics settings or data.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                {/* Step 4 with Analytics Preview */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0eca7b]/10 dark:bg-[#0eca7b]/20 flex items-center justify-center text-sm font-medium text-[#0eca7b]">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">View Your AI Referral Traffic</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Once connected, you'll see a beautiful visualization of your human traffic from AI sources.
                    </p>
                    <div className="rounded-lg border bg-muted/50 p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">ChatGPT</span>
                          <span className="text-sm text-muted-foreground">2,847 visits</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div className="bg-[#0eca7b] h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Perplexity</span>
                          <span className="text-sm text-muted-foreground">1,234 visits</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div className="bg-[#0eca7b] h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section className="space-y-6 mb-12">
            <h2 id="privacy-security" className="text-2xl font-bold tracking-tight">Privacy & Security</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="rounded-lg border bg-card p-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">No Data Storage</h4>
                      <p className="text-sm text-muted-foreground">
                        We don't save any of your Google Analytics data. All processing happens in real-time, 
                        and data is only visualized in your browser.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Lock className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Read-Only Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Our integration only requests read permissions. We cannot modify, delete, or add any 
                        data to your Google Analytics account.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Eye className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Transparent Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        We only process referral source data to identify AI-related traffic. No personal user 
                        data or behavior tracking is stored.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Revoke Anytime</h4>
                      <p className="text-sm text-muted-foreground">
                        You can disconnect the integration at any time from your Finseo dashboard or through 
                        your Google account settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Referral Insights */}
          <section className="space-y-6 mb-12">
            <h2 id="insights" className="text-2xl font-bold tracking-tight">AI Referral Insights</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Understanding human traffic from AI sources helps you measure the real impact of your AI visibility:
              </p>
              
              <div className="grid gap-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">ChatGPT Referrals</h4>
                  <p className="text-sm text-muted-foreground">
                    Track visitors who click through from ChatGPT conversations when your content is cited as a 
                    source or recommended by the AI.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Perplexity Citations</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor traffic from Perplexity AI when your content appears in search results and users 
                    click to read more.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Emerging AI Platforms</h4>
                  <p className="text-sm text-muted-foreground">
                    Stay ahead by tracking new AI search engines and assistants as they begin sending traffic 
                    to your site.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">Conversion Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Compare engagement metrics and conversion rates of AI-referred visitors versus traditional 
                    search traffic.
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
                    <strong>Regular Monitoring:</strong> Check your AI referral traffic weekly to spot trends 
                    and optimize content that's performing well.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Combine with Bot Traffic:</strong> Use both Bot Traffic and Human Traffic data for 
                    a complete picture of your AI visibility.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Track Conversions:</strong> Set up goals in Google Analytics to measure how 
                    AI-referred visitors convert compared to other sources.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0eca7b] mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Content Optimization:</strong> Focus on creating content that answers questions 
                    AI users are likely to ask.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="rounded-lg border bg-card p-6 border-[#0eca7b]/20 bg-[#0eca7b]/5 dark:bg-[#0eca7b]/10">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="h-5 w-5 text-[#0eca7b]" />
              <h3 className="text-lg font-semibold">Get Started</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to see your human traffic from AI search engines?
            </p>
            <ul className="text-sm space-y-2 ml-6 list-disc text-muted-foreground mb-4">
              <li>Connect your Google Analytics account in minutes</li>
              <li>View real-time AI referral traffic</li>
              <li>Track which AI platforms send the most valuable visitors</li>
              <li>Optimize your content strategy based on actual user data</li>
            </ul>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="https://app.finseo.ai/ai-analytics" target="_blank">
                  Connect Google Analytics
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/bot-analytics">
                  View Bot Traffic Docs
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