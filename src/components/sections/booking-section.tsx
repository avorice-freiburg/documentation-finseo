"use client";

import { useEffect } from "react";

export function BookingSection() {
  useEffect(() => {
    // Cal.com embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});

      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view"},
        calLink: "finseo/30min",
      });

      Cal.ns["30min"]("ui", {
        "cssVarsPerTheme":{"light":{"cal-brand":"#0eca7b"}},
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    `;
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Book a Demo Call
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a 30-minute demo to see how Finseo can help grow your business
          </p>
        </div>
        
        <div className="w-full h-[600px] rounded-lg overflow-hidden">
          <div 
            style={{width: '100%', height: '100%', overflow: 'scroll'}} 
            id="my-cal-inline-30min"
          />
        </div>
      </div>
    </section>
  );
} 