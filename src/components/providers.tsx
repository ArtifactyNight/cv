"use client"

import { gsap } from "gsap"
import { TransitionRouter } from "next-transition-router"

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return false
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        if (prefersReducedMotion()) {
          gsap.set("main", { opacity: 0 })
          next()
          return () => {}
        }

        const tween = gsap.to("main", {
          opacity: 0,
          y: -8,
          duration: 0.2,
          ease: "power2.out",
          onComplete: next,
        })
        return () => tween.kill()
      }}
      enter={(next) => {
        if (prefersReducedMotion()) {
          gsap.set("main", { opacity: 1, y: 0 })
          next()
          return () => {}
        }

        const tween = gsap.fromTo(
          "main",
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
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
