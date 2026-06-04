import { Icon } from "@iconify/react"

import { Container } from "@/components/container"

export function InConstructionPage() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-3 px-4 text-center">
      <Icon
        icon="tabler:traffic-cone"
        className="size-6 text-muted-foreground"
        aria-hidden
      />
      <p
        role="status"
        className="font-mono text-xs leading-none text-muted-foreground"
      >
        In construction
      </p>
    </Container>
  )
}
