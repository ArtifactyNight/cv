import { JetBrains_Mono, Poppins, Source_Serif_4 } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import { GooeyToaster } from "@/components/ui/goey-toaster"
import "./globals.css"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
})

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const fontMono = JetBrains_Mono({
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
        sourceSerif.variable
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
