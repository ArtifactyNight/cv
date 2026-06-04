"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { Container } from "./container"

const navItems = [
  { label: "About", href: "/" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Playlists", href: "/playlists" },
  { label: "Contact", href: "/contact" },
] as const

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="h-16">
      <Container className="flex h-full items-center">
        <nav
          aria-label="Main"
          className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-2"
        >
          {navItems.map((item, index) => {
            const active = isNavActive(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hit-area-8 inline-flex items-baseline gap-2 rounded-sm text-base font-medium tracking-tight transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            )
          })}
        </nav>
      </Container>
    </header>
  )
}
