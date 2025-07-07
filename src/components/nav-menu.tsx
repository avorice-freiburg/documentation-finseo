"use client";

import * as React from "react";
import Link from "next/link";
import {
  Building2Icon,
  Users2Icon,
  UserIcon,
  FileTextIcon,
  MessagesSquareIcon,
  InfoIcon,
  BriefcaseIcon,
  MapIcon,
  PenToolIcon,
  FileEditIcon,
  BookOpenIcon,
  BellRingIcon,
  HelpCircleIcon,
  HandshakeIcon,
  BarChart3Icon,
  ImageIcon,
  LinkIcon,
  KeyIcon,
  ClipboardCheckIcon,
  EyeIcon,
  FileCode2Icon,
  ActivityIcon,
  RefreshCwIcon
} from "lucide-react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Custom navigation menu trigger style to remove background
const customNavigationMenuTriggerStyle = cn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
  "bg-transparent"
);

export function NavMenu() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="w-full justify-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Why Finseo</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="px-8 py-5 bg-background border-t border-border w-[680px]">
              <div className="flex justify-between relative">
                <div className="flex-1">
                  <h4 className="font-bold text-xs mb-1.5 text-primary uppercase tracking-wide flex items-center gap-2">
                    <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                      <UserIcon size={16} className="text-[#0eca7b]" />
                    </span>
                    For
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/for-agencies" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          For Agencies
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/for-enterprise" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          For Enterprises
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/for-smbs" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          For SMBs
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/for-entrepreneurs" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          For Entrepreneurs
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                <div className="w-px self-stretch bg-border mx-6"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-xs mb-1.5 text-primary uppercase tracking-wide flex items-center gap-2">
                    <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                      <Building2Icon size={16} className="text-[#0eca7b]" />
                    </span>
                    Company
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/careers" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          Careers
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/seo-ai-affiliate-program" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          Affiliate
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
                 <NavigationMenuItem>
           <NavigationMenuTrigger className="bg-transparent">Features</NavigationMenuTrigger>
           <NavigationMenuContent>
             <div className="px-8 py-5 bg-background border-t border-border w-[480px]">
              <div className="flex justify-between relative">
                <div className="flex-1">
                  <h4 className="font-bold text-xs mb-1.5 text-primary uppercase tracking-wide flex items-center gap-2">
                    <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                      <MapIcon size={16} className="text-[#0eca7b]" />
                    </span>
                    AI Analytics
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/ai-visibility-tracking" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          AI Visibility Tracking
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                <div className="w-px self-stretch bg-border mx-6"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-xs mb-1.5 text-primary uppercase tracking-wide flex items-center gap-2">
                    <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                      <BarChart3Icon size={16} className="text-[#0eca7b]" />
                    </span>
                    AI SEO
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/onpage-checker" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          Technical Analysis
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
                 <NavigationMenuItem>
           <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
           <NavigationMenuContent>
             <div className="px-8 py-5 bg-background border-t border-border w-[480px]">
              <div className="flex justify-between relative">
                <div className="flex-1">
                  <h4 className="font-bold text-xs mb-1.5 text-primary uppercase tracking-wide flex items-center gap-2">
                    <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                      <BookOpenIcon size={16} className="text-[#0eca7b]" />
                    </span>
                    Documentation
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/blog" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          Blog
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                
                <div className="w-px self-stretch bg-border mx-6"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-xs mb-1.5 text-primary uppercase tracking-wide flex items-center gap-2">
                    <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                      <HelpCircleIcon size={16} className="text-[#0eca7b]" />
                    </span>
                    Support
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/support" className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm leading-tight text-muted-foreground hover:text-primary transition-colors">
                          Contact Support
                          <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent")}>
            <Link href="pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent")}>
            <Link href="seo-ai-affiliate-program">Affiliate</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
