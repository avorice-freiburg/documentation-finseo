import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";

export default function ImprintPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Imprint</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Responsible for the content of this website</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="mb-2"><strong>Online-Marketing David Mühlenweg</strong></p>
                <p className="mb-2">Eschholzstraße 90</p>
                <p className="mb-2">79115 Freiburg</p>
                <p className="mb-4">Germany</p>
                <p className="mb-2">E-Mail: <a href="mailto:info@finseo.ai" className="text-primary hover:underline">info@finseo.ai</a></p>
                <p>Sales tax ID no.: DE353027595</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Liability for content</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content of our website has been created with the utmost care. However, we accept no liability for 
                inaccuracies, incompleteness or lack of topicality of content for which we are not responsible. As a 
                service provider, we are responsible for the content of our website in accordance with the provisions 
                of general law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Liability for links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to external third-party websites over whose content we have no influence. 
                Therefore, we cannot accept any liability for the ongoing topicality, accuracy and completeness of this 
                linked, third-party content, as this content is outside our area of responsibility and we have no influence 
                on its future design. The respective provider or operator of the pages is always responsible for the content 
                of the linked pages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Copyright</h2>
              <p className="text-muted-foreground leading-relaxed">
                The texts, images, photos, videos and graphics on our website are generally protected by copyright. Any 
                unauthorized use (in particular the reproduction, editing or distribution) of this copyright-protected 
                content is therefore prohibited. If you intend to use this content or parts thereof, please contact us 
                in advance using the details above. If we are not ourselves the owner of the required copyright usage 
                rights, we will endeavor to arrange contact with the entitled party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Objection to advertising</h2>
              <p className="text-muted-foreground leading-relaxed">
                The use of contact data published within the scope of the imprint obligation by third parties for sending 
                unsolicited advertising and information material is hereby expressly prohibited. The operators of this 
                website expressly reserve the right to take legal action in the event of the unsolicited sending of 
                advertising information, for example by e-mail.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
} 