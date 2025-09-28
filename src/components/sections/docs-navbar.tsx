"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, Calendar, ArrowRight } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AppSidebar } from "@/components/app-sidebar"
import { SearchDialog } from "@/components/search-dialog"
import { useEffect } from "react"

export function DocsNavbar() {
  useEffect(() => {
    // Cal.com popup embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "demo", {origin:"https://app.cal.com"});

      Cal.ns["demo"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#060607"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 items-center pl-4 sm:pl-6 lg:pl-8 pr-4">
        {/* Mobile menu */}
        <div className="mr-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[300px]">
              <AppSidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - moved further left */}
        <div className="flex items-center space-x-2 -ml-4">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/finseo-dark-logo.svg"
              alt="Finseo"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Search in the center */}
        <div className="flex-1 flex justify-center pl-36">
          <SearchDialog />
        </div>

        {/* Action buttons and Theme toggle */}
        <div className="ml-auto flex items-center gap-2">
          <Button 
            asChild 
            className="hidden sm:flex bg-[#0eca7b] hover:bg-[#0eca7b]/90 text-gray-900 border-0 rounded-sm"
            size="sm"
          >
            <Link href="https://app.finseo.ai/pricing" className="flex items-center gap-1">
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>

          {/* Book Demo button - hidden on mobile */}
          <button
            data-cal-link="team/finseo/demo"
            data-cal-namespace="demo"
            data-cal-config='{"layout":"month_view"}'
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-white hover:bg-gray-100 text-gray-900 rounded-sm transition-colors cursor-pointer"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book Demo
          </button>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 