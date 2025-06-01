"use client";

import { FooterSection } from "@/components/sections/footer-section";
import Script from "next/script";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <a 
                  href="https://www.iubenda.com/privacy-policy/81748432" 
                  className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" 
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Cookie Policy</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <a 
                  href="https://www.iubenda.com/privacy-policy/81748432/cookie-policy" 
                  className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" 
                  title="Cookie Policy"
                >
                  Cookie Policy
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Iubenda Script for embedding */}
      <Script id="iubenda-privacy-script" strategy="afterInteractive">
        {`
          (function (w,d) {
            var loader = function () {
              var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
              s.src="https://cdn.iubenda.com/iubenda.js"; 
              tag.parentNode.insertBefore(s,tag);
            }; 
            if(w.addEventListener){
              w.addEventListener("load", loader, false);
            } else if(w.attachEvent){
              w.attachEvent("onload", loader);
            } else {
              w.onload = loader;
            }
          })(window, document);
        `}
      </Script>

      <FooterSection />
    </main>
  );
} 