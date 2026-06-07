// @ts-check
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from 'astro/config';

import icon from "astro-icon";
import rehypeAttrs from 'rehype-attr';

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://nightz.me",
  integrations: [mdx(), sitemap(), icon(), react(), sanity({
    projectId: import.meta.env.SANITY_PROJECT_ID,
  })],

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
      name: "IBM Plex Sans Thai",
      cssVariable: "--font-thai",
      subsets: ["thai"],
    },
    {
      provider: fontProviders.fontshare(),
      name: "Sentient",
      cssVariable: "--font-sentient",
      subsets: ["latin"],
    }
  ],

  adapter: vercel()
});