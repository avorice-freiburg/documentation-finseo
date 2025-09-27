"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AppSidebar } from "@/components/app-sidebar"
import { SearchDialog } from "@/components/search-dialog"

export function DocsNavbar() {
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
        <div className="flex-1 flex justify-center">
          <SearchDialog />
        </div>

        {/* Theme toggle on the far right */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 