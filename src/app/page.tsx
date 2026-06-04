"use client"

import { Container } from "@/components/container"
import { Icon } from "@iconify/react"

export default function Page() {
  return (
    <div className="space-y-4 py-8">
      <Container>
        <h1 className="text-2xl font-bold">Kidsanaphon Kaeopha</h1>
        <p className="text-sm text-muted-foreground">
          <Icon icon="tabler:map-pin" /> Bangkok, Thailand
        </p>
      </Container>
    </div>
  )
}
