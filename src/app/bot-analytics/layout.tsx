import { AppSidebar } from "@/components/app-sidebar"
import { DocsNavbar } from "@/components/sections/docs-navbar"

export default function BotAnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed top navigation */}
      <DocsNavbar />
      
      {/* 3-column layout */}
      <div className="flex-1 flex pt-14">
        {/* Left sidebar */}
        <aside className="hidden md:block w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
            <AppSidebar />
          </div>
        </aside>

        {children}
      </div>
    </div>
  )
} 