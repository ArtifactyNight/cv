import { cn } from "@/lib/utils"

const boldPattern = /\*\*([^*]+)\*\*/g

function parseBoldSegments(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = boldPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    nodes.push(
      <strong key={match.index} className="font-semibold text-foreground">
        {match[1]}
      </strong>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : [text]
}

type ProseTextProps = {
  children: string
  className?: string
  as?: "p" | "span"
}

/** Renders plain text with `**phrase**` shown as semibold emphasis. */
export function ProseText({ children, className, as: Tag = "p" }: ProseTextProps) {
  return <Tag className={cn(className)}>{parseBoldSegments(children)}</Tag>
}
