"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "/" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Playlists", href: "/playlists" },
] as const

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

const linkClassName =
  "hit-area-2 inline-flex items-baseline gap-2 rounded-sm text-base font-medium tracking-tight transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {navItems.map((item, index) => {
        const active = isNavActive(pathname, item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              linkClassName,
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
    </>
  )
}

export function SiteNav() {
  const pathname = usePathname()

  return (
    <aside className="hidden min-h-0 flex-col border-r border-border bg-muted md:flex">
      <div className="flex flex-1 flex-col justify-center px-8 py-10 lg:px-12">
        <nav aria-label="Main" className="flex flex-col gap-5">
          <NavLinks pathname={pathname} />
        </nav>
      </div>
    </aside>
  )
}
