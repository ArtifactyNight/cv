import { Geist, Geist_Mono, Roboto_Slab } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import { GooeyToaster } from "@/components/ui/goey-toaster"
import "./globals.css"

const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-serif" })

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-serif",
        robotoSlab.variable
      )}
    >
      <body>
        <ThemeProvider>
          {children}
          <GooeyToaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
