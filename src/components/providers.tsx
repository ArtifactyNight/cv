"use client"

import { gsap } from "gsap"
import { TransitionRouter } from "next-transition-router"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const tween = gsap.to("main", {
          opacity: 0,
          y: -8,
          duration: 0.2,
          onComplete: next,
        })
        return () => tween.kill()
      }}
      enter={(next) => {
        const tween = gsap.fromTo(
          "main",
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            onComplete: next,
          }
        )
        return () => tween.kill()
      }}
    >
      {children}
    </TransitionRouter>
  )
}
