import { Geist, Geist_Mono, Roboto_Slab } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
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
        "font-sans",
        robotoSlab.variable
      )}
    >
      <body>
        <Providers>
          <ThemeProvider>
            <SiteHeader />
            <main>{children}</main>
            <GooeyToaster position="bottom-center" />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
