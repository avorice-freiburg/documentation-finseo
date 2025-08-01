"use client";

import * as React from "react";
import Link from "next/link";
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
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="w-full justify-center">
        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('bento')}
            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-card cursor-pointer")}
          >
            Why Finseo?
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('features')}
            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-card cursor-pointer")}
          >
            Features
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <button
            onClick={() => scrollToSection('pricing')}
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
