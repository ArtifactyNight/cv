import { Container } from "@/components/container"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default function NotFound() {
  return (
    <Container className="my-32 space-y-4 text-center">
      <div>
        <p className="text-sm text-muted-foreground tabular-nums">404</p>
        <p className="mt-2 text-foreground">Page not found.</p>
      </div>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        <Icon icon="tabler:corner-down-left" />
        Back Home
      </Link>
    </Container>
  )
}
