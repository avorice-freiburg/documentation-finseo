"use client";

import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/config";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FooterSection() {
  const [mounted, setMounted] = useState(false);
  const tablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer id="footer" className="w-full pb-0 pt-10">
      {/* Logo Section - Top */}
      {/* <div className="flex flex-col items-center justify-center p-10 pb-6">
        <Link href="/" className="flex items-center gap-2 mb-4">
          <div className="w-16 h-16 md:w-20 md:h-20 relative">
            <img src="/finseo-light-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 dark:opacity-0" />
            <img src="/finseo-dark-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 opacity-0 dark:opacity-100" />
          </div>
        </Link>
      </div> */}

      {/* Footer Links - All links side by side */}
      <div className="px-10 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {siteConfig.footerLinks.map((column) =>
            column.links.map((link) => (
              <div
                key={link.id}
                className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
              >
                <Link href={link.url} className="hover:text-primary transition-colors">
                  {link.title}
                </Link>
                <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                  <ChevronRightIcon className="h-4 w-4 " />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-border/30 px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <img src="/finseo-light-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 dark:opacity-0" />
              <img src="/finseo-dark-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 opacity-0 dark:opacity-100" />
            </div>
          </Link>
          
          {/* Copyright on the right */}
          <p className="text-sm text-muted-foreground">
            © Finseo 2025. All rights reserved.
          </p>
        </div>
      </div>

{/* 
      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          {mounted && (
            <FlickeringGrid
              text={tablet ? "Finseo" : "Increase your Visibility"}
              fontSize={tablet ? 70 : 90}
              className="h-full w-full"
              squareSize={2}
              gridGap={tablet ? 2 : 3}
              color="#6B7280"
              maxOpacity={0.3}
              flickerChance={0.1}
            />
          )}
        </div>
      </div> */}
    </footer>
  );
}
