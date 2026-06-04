import type { AboutStackCategory, AboutStackItem } from "@/content/about"
import { cn } from "@/lib/utils"

const linkFocus =
  "rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function StackItem({ item }: { item: AboutStackItem }) {
  const StackIcon = item.icon

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--stack-brand": item.color } as React.CSSProperties}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors",
        "hover:text-(--stack-brand) focus-visible:text-(--stack-brand)",
        linkFocus
      )}
    >
      <StackIcon
        className="size-3.5 shrink-0 text-foreground/50 transition-colors group-hover:text-(--stack-brand) group-focus-visible:text-(--stack-brand)"
        aria-hidden
      />
      <span>{item.name}</span>
      <span className="sr-only">, opens in new tab</span>
    </a>
  )
}

export function StackSection({
  categories,
  className,
}: {
  categories: AboutStackCategory[]
  className?: string
}) {
  const visible = categories.filter((c) => c.items.length > 0)
  if (visible.length === 0) return null

  return (
    <ul className={cn("flex flex-col gap-6", className)}>
      {visible.map((category) => (
        <li
          key={category.label}
          className="flex flex-col gap-2 sm:grid sm:grid-cols-[5.5rem_1fr] sm:items-start sm:gap-x-5"
        >
          <p className="text-sm leading-snug text-muted-foreground">
            {category.label}
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-2.5">
            {category.items.map((item) => (
              <li key={item.name}>
                <StackItem item={item} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
