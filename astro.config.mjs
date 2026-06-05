// @ts-check
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from 'astro/config';

import icon from "astro-icon";
import rehypeAttrs from 'rehype-attr';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://nightz.me",
  integrations: [mdx(), sitemap(), icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["*"]
  },
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeAttrs],
    })
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Schibsted Grotesk",
      cssVariable: "--font-schibsted-grotesk",
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans Thai",
      cssVariable: "--font-thai",
      subsets: ["thai"],
    },
    {
      provider: fontProviders.google(),
      name: "Google Sans",
      cssVariable: "--font-google-sans",
      subsets: ["thai"],
    },
    {
      provider: fontProviders.fontshare(),
      name: "Sentient",
      cssVariable: "--font-sentient",
      subsets: ["latin"],
    }
  ]
});