// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://www.example.com",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Sans Thai",
      cssVariable: "--font-thai",
      subsets: ["thai"],
    }
  ]
});