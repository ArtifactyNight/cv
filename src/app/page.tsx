import type { Metadata } from "next"

import { AboutPage } from "@/components/about-page"

export const metadata: Metadata = {
  title: "About",
  description:
    "Kidsanaphon Kaeopha — Fullstack Developer in Bangkok. Portfolio and contact.",
}

export default function Page() {
  return <AboutPage />
}
