"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    // Set first item as active initially
    if (items.length > 0 && !activeId) {
      setActiveId(items[0].id)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Check if we're at the bottom of the page
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10

        if (isAtBottom && items.length > 0) {
          // If at bottom, activate the last item
          setActiveId(items[items.length - 1].id)
          return
        }

        // Find the first intersecting entry that's visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting)
        
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio and position to get the most prominent heading
          const sortedEntries = visibleEntries.sort((a, b) => {
            // Prioritize entries with higher intersection ratio
            if (a.intersectionRatio !== b.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio
            }
            // If ratios are equal, prioritize the one higher up on the page
            return a.boundingClientRect.top - b.boundingClientRect.top
          })
          
          setActiveId(sortedEntries[0].target.id)
        }
      },
      { 
        rootMargin: "-10% 0% -80% 0%",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    // Also listen for scroll events to handle edge cases
    const handleScroll = () => {
      const isAtTop = window.scrollY < 100
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10

      if (isAtTop && items.length > 0) {
        setActiveId(items[0].id)
      } else if (isAtBottom && items.length > 0) {
        setActiveId(items[items.length - 1].id)
      }
    }

    const headings = document.querySelectorAll("h2, h3")
    headings.forEach((heading) => {
      observer.observe(heading)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items, activeId])

  return (
    <nav className="space-y-1">
      <p className="font-medium text-sm mb-4">On this page</p>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.id)
                if (element) {
                  const offsetTop = element.offsetTop - 80 // Account for fixed header
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  })
                  setActiveId(item.id)
                }
              }}
              className={cn(
                "flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-md text-muted-foreground hover:text-foreground transition-all",
                activeId === item.id && "bg-accent text-foreground font-medium"
              )}
            >
              {activeId === item.id && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
              )}
              <span className={cn(activeId !== item.id && "ml-4")}>
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 