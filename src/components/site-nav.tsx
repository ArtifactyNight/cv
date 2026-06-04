"use client"

import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

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

const linkClassName =
  "hit-area-2 inline-flex items-baseline gap-2 rounded-sm text-base font-medium tracking-tight transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function NavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string
  onNavigate?: () => void
}) {
  return (
    <>
      {navItems.map((item, index) => {
        const active = isNavActive(pathname, item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
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

function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex h-14 shrink-0 items-center border-b border-border px-4 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button variant="outline" size="icon-sm" aria-label="Open menu" />
          }
        >
          <MenuIcon data-icon="inline-start" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-muted">
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <nav aria-label="Main" className="flex flex-col gap-5 px-2 pt-10">
            <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function DesktopNav({ pathname }: { pathname: string }) {
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

export function SiteNav() {
  const pathname = usePathname()

  return (
    <div className="min-h-0 md:contents">
      <MobileNav pathname={pathname} />
      <DesktopNav pathname={pathname} />
    </div>
  )
}
