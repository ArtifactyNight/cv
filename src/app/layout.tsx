import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kidsanaphon Kaeopha",
  description: "a random enthusiastic, perfectionist guy that can code",
  keywords: [
    "NightKunGz",
    "Kidsanaphon Kaeopha",
    "Developer",
    "Freelancer",
    "Student",
    "Portfolio",
    "CV",
  ],
  authors: [{ name: "Kidsanaphon Kaeopha" }],
  creator: "Kidsanaphon Kaeopha",
  openGraph: {
    title: "Kidsanaphon Kaeopha - cv",
    description: "Just a Typescript enjoyer guy 😳",
    type: "website",
    locale: "en_US",
    siteName: "Kidsanaphon Kaeopha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidsanaphon Kaeopha - cv",
    description: "Just a Typescript enjoyer guy 😳",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serif = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const sansSerif = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(sansSerif.className, sansSerif.variable, serif.variable)}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
