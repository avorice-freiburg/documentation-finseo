"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export function NavMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSectionClick = (sectionId: string) => {
    // If we're on the homepage, scroll directly
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage with hash, then scroll after navigation
      router.push(`/#${sectionId}`);
    }
  };

  // Handle scrolling when page loads with hash
  React.useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.slice(1);
      // Wait a bit for the page to render
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [pathname]);

  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="w-full justify-center">
        <NavigationMenuItem>
          <button
            onClick={() => handleSectionClick('bento')}
            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-card cursor-pointer")}
          >
            Why Finseo?
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <button
            onClick={() => handleSectionClick('features')}
            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-card cursor-pointer")}
          >
            Features
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <button
            onClick={() => handleSectionClick('pricing')}
            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-card cursor-pointer")}
          >
            Pricing
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-card")}>
            <Link href="/seo-ai-affiliate-program">Affiliate</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-card")}>
            <Link href="/support">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
