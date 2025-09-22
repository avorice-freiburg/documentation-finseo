"use client";

import { useEffect } from "react";

export default function TermsConditionsPage() {
  useEffect(() => {
    // Force reload Iubenda script after component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.iubenda.com/iubenda.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div 
      className="w-full h-full overflow-auto bg-white"
      style={{ 
        width: '100vw', 
        height: '100vh',
        paddingTop: '80px',
        margin: 0,
        padding: 0,
        backgroundColor: 'white'
      }}
    >
      <div className="w-full bg-white" style={{ width: '100vw', margin: 0, padding: 0, backgroundColor: 'white' }}>
        <a href="https://www.iubenda.com/terms-and-conditions/81748432" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Terms and Conditions">Terms and Conditions</a>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`
        }} />
      </div>
    </div>
  );
} 