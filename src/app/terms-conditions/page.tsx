"use client";

import { FooterSection } from "@/components/sections/footer-section";
import Script from "next/script";

export default function TermsConditionsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
          
          <div className="space-y-8">
            <section>
              <div className="bg-card border border-border rounded-lg p-6">
                <a 
                  href="https://www.iubenda.com/terms-and-conditions/81748432" 
                  className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" 
                  title="Terms and Conditions"
                >
                  Terms and Conditions
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Iubenda Script for Terms & Conditions */}
      <Script id="iubenda-terms-script" strategy="afterInteractive">
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