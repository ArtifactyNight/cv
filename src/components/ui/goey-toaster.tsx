"use client"

import type { GooeyToasterProps } from "goey-toast"
import { GooeyToaster as GooeyToasterPrimitive, gooeyToast } from "goey-toast"
import "goey-toast/styles.css"
import { useTheme } from "next-themes"

export type {
  GooeyPromiseData,
  GooeyToastAction,
  GooeyToastClassNames,
  GooeyToastOptions,
  GooeyToastTimings,
} from "goey-toast"
export { gooeyToast }
export type { GooeyToasterProps }

function GooeyToaster(props: GooeyToasterProps) {
  const { resolvedTheme } = useTheme()

  return (
    <GooeyToasterPrimitive
      position="bottom-right"
      theme={resolvedTheme as "light" | "dark"}
      {...props}
    />
  )
}

export { GooeyToaster }
