import { cva } from "class-variance-authority"

export const linkVariants = cva("text-primary hover:text-primary/80", {
  variants: {
    variant: {
      default: "text-primary hover:text-primary/80",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})
