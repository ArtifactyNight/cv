import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-4xl px-4", className)} {...props}>
      {children}
    </div>
  )
}
