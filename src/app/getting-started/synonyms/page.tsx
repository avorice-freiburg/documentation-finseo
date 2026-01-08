import { Breadcrumbs } from "@/components/breadcrumbs"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { CheckCircle, XCircle } from "lucide-react"
import { generateMetadata as getPageMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getPageMetadata('getting-started-synonyms');

const breadcrumbItems = [
  { label: "Documentation", href: "/" },
  { label: "Getting Started", href: "/" },
  { label: "Synonyms" }
]

const tocItems = [
  { id: "what-are-synonyms", title: "What are Synonyms?", level: 2 },
  { id: "why-synonyms-matter", title: "Why Synonyms Matter", level: 2 },
  { id: "setting-up-synonyms", title: "Setting Up Synonyms", level: 2 },
  { id: "example-configuration", title: "Example Configuration", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
]

export default function SynonymsPage() {
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
              Brand Synonyms
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Configure brand name variations to ensure comprehensive tracking across all <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI visibility tracking</Link> metrics.
            </p>
          </div>

          {/* What are Synonyms */}
          <section className="space-y-6 mb-12">
            <h2 id="what-are-synonyms" className="text-2xl font-bold tracking-tight">What are Synonyms?</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Brand synonyms are alternative names, variations, or references that AI models might use when mentioning your brand. Setting up synonyms ensures that all variations are tracked together, providing accurate metrics across <Link href="/metrics/visibility" className="text-secondary hover:underline">visibility</Link>, <Link href="/metrics/mentions" className="text-secondary hover:underline">mentions</Link>, <Link href="/metrics/sentiment" className="text-secondary hover:underline">sentiment</Link>, and <Link href="/metrics/position" className="text-secondary hover:underline">position</Link> tracking.
              </p>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-semibold">Key Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Without proper synonym configuration, you might miss significant brand mentions. For example, if your brand is "Mercedes-Benz" but AI models also reference "Mercedes", "Benz", or "Daimler," those mentions won't be counted without synonym setup. Use our <Link href="https://www.finseo.ai/ai-visibility-tracking" className="text-[#0eca7b] hover:underline" target="_blank">AI brand visibility tracker</Link> to monitor all variations.
                </p>
              </div>
            </div>
          </section>

          {/* Visualization */}
          <section className="space-y-6 mb-12">
            <div className="rounded-lg border bg-card p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <img 
                  src="/synonyms.png" 
                  alt="Synonym Configuration Interface" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Why Synonyms Matter */}
          <section className="space-y-6 mb-12">
            <h2 id="why-synonyms-matter" className="text-2xl font-bold tracking-tight">Why Synonyms Matter</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                AI models use various ways to reference brands, and missing these variations can significantly impact your metrics:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <h4 className="font-semibold text-red-500">Without Synonyms</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-muted p-3 rounded">
                      <strong>Tracking:</strong> "Mercedes-Benz"
                    </div>
                    <div className="space-y-2">
                      <div>✅ "Mercedes-Benz released new models" - <em>Counted</em></div>
                      <div>❌ "Mercedes announced a partnership" - <em>Missed</em></div>
                      <div>❌ "Daimler's luxury division" - <em>Missed</em></div>
                      <div>❌ "Benz vehicles are known for quality" - <em>Missed</em></div>
                    </div>
                    <div className="pt-2 border-t text-red-600">
                      <strong>Result:</strong> 25% of actual mentions tracked
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <h4 className="font-semibold text-green-500">With Synonyms</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-muted p-3 rounded">
                      <strong>Tracking:</strong> "Mercedes-Benz", "Mercedes", "Benz", "Daimler"
                    </div>
                    <div className="space-y-2">
                      <div>✅ "Mercedes-Benz released new models" - <em>Counted</em></div>
                      <div>✅ "Mercedes announced a partnership" - <em>Counted</em></div>
                      <div>✅ "Daimler's luxury division" - <em>Counted</em></div>
                      <div>✅ "Benz vehicles are known for quality" - <em>Counted</em></div>
                    </div>
                    <div className="pt-2 border-t text-green-600">
                      <strong>Result:</strong> 100% of actual mentions tracked
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Setting Up Synonyms */}
          <section className="space-y-6 mb-12">
            <h2 id="setting-up-synonyms" className="text-2xl font-bold tracking-tight">Setting Up Synonyms</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Follow these steps to configure brand synonyms in your account settings:
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">1. Access Account Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <Link href="https://app.finseo.ai/account" target="_blank" className="text-secondary hover:underline">app.finseo.ai/account</Link> and go to "Brand Configuration" → "Synonyms"
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">2. Add Primary Brand Name</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter your main brand name as it most commonly appears. This will be the canonical name for all variations.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">3. Configure Synonyms</h4>
                  <p className="text-sm text-muted-foreground">
                    Add only distinct variations that wouldn't be caught by your primary brand name. Include abbreviations, alternative names, and parent company names.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">4. Test and Validate</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the preview feature to test how your synonyms will be detected in sample text before saving.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2">5. Save and Apply</h4>
                  <p className="text-sm text-muted-foreground">
                    Save your configuration. New synonym rules will apply to future tracking cycles (typically within 24 hours).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example Configuration */}
          <section className="space-y-6 mb-12">
            <h2 id="example-configuration" className="text-2xl font-bold tracking-tight">Example Configuration</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Here's a practical example of how to set up synonyms for a complex brand:
              </p>
              
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4">Mercedes-Benz Configuration</h4>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground">Primary Brand:</span>
                      <span className="ml-2 font-mono">Mercedes-Benz</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Domain:</span>
                      <span className="ml-2 font-mono">mercedes-benz.com</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-muted-foreground mb-2">Synonyms to track:</div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li><strong>Mercedes</strong> - Common shortened version</li>
                      <li><strong>Benz</strong> - Alternative short name</li>
                      <li><strong>Daimler</strong> - Parent company name</li>
                      <li><strong>Mercedes-Benz AG</strong> - Corporate entity</li>
                      <li><strong>Mercedes Benz</strong> - Version without hyphen</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-muted-foreground mb-2">What NOT to include:</div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>"Mercedes luxury cars" - Contains "Mercedes" already tracked</li>
                      <li>"Stuttgart-based Mercedes" - Contains "Mercedes" already tracked</li>
                      <li>"German automaker Mercedes" - Contains "Mercedes" already tracked</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Best Practices */}
          <section className="space-y-6 mb-12">
            <h2 id="best-practices" className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Be comprehensive:</strong> Include all possible variations, even uncommon ones. It's better to over-include than miss mentions.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Consider context:</strong> Add location-based references like "Silicon Valley-based Apple" or "Cupertino company" if relevant.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Include domains:</strong> Add your website domains and subdomains as synonyms to track URL mentions.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Regular updates:</strong> Review and update synonyms quarterly as your brand evolves or new variations emerge.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Test thoroughly:</strong> Use the preview feature to ensure your synonyms capture intended mentions without false positives.</span>
                </li>
                <li className="flex gap-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2" />
                  <span><strong>Case sensitivity:</strong> The system handles case variations automatically, so "apple" and "Apple" are treated the same.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="space-y-6 pb-16">
            <h2 id="troubleshooting" className="text-2xl font-bold tracking-tight">Troubleshooting</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">❓ My metrics seem low despite good brand recognition</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Likely cause:</strong> Missing synonym variations
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Review recent AI responses manually to identify how your brand is being referenced and add those variations to your synonyms list.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">❓ I'm seeing false positive mentions</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Likely cause:</strong> Overly broad synonym terms
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Remove generic terms that might match unrelated content. For example, avoid single common words like "apple" if you're not the Apple company.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">❓ Synonyms not taking effect</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Likely cause:</strong> Changes need processing time
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Synonym changes apply to new tracking cycles, typically within 24 hours. Historical data won't be retroactively updated.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h4 className="font-semibold mb-3">❓ Need help with complex brand structures</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Solution:</strong> For brands with subsidiaries or complex naming structures, contact support for guidance on optimal synonym configuration.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Right table of contents */}
      <aside className="hidden xl:block w-64 border-l">
        <div className="sticky top-14 p-6">
          <TableOfContents items={tocItems} />
        </div>
      </aside>
    </>
  );
} 