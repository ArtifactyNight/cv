// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from 'astro/config';
import { loadEnv } from "vite";

import icon from "astro-icon";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

import sanity from "@sanity/astro";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://nightz.me",
  integrations: [sitemap(), icon(), react(), sanity({
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET ?? "production",
    apiVersion: "2026-03-01",
    useCdn: false,
    studioBasePath: "/studio",
    studioRouterHistory: "hash",
    stega: { studioUrl: "/studio#" },
  })],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ["*"]
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