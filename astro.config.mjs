// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from 'astro/config';

import icon from "astro-icon";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://nightz.me",
  output: "static",
  redirects: {
    "/work": "/",
  },
  integrations: [sitemap(), icon(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
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
