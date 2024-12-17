import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kidsanaphon Kaeopha - cv",
  description: "Student & Freelancer",
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
    description: "Student & Freelancer",
    type: "website",
    locale: "en_US",
    siteName: "Kidsanaphon Kaeopha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidsanaphon Kaeopha - cv",
    description: "Student & Freelancer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const font = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: font.style.fontFamily }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
