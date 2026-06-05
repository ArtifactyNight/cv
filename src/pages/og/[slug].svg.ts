import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { readFile } from "fs/promises";
import { join } from "path";
import satori from "satori";

// Colors from the design system (resolved oklch → hex)
const C = {
  bg: "#FAFAF5", // olive-50
  ink: "#292820", // olive-900
  muted: "#726A4D", // olive-600
  accent: "#978F66", // primary
};

// process.cwd() is the project root during Astro build
const FONT_DIR = join(process.cwd(), "src/assets/fonts");

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { title: post.data.title, pubDate: post.data.pubDate },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, pubDate } = props as { title: string; pubDate: Date };

  const [fontRegular, fontBold, thaiRegular, thaiBold] = await Promise.all([
    readFile(join(FONT_DIR, "SchibstedGrotesk-Regular.ttf")),
    readFile(join(FONT_DIR, "SchibstedGrotesk-Bold.ttf")),
    readFile(join(FONT_DIR, "NotoSansThai-Regular.ttf")),
    readFile(join(FONT_DIR, "NotoSansThai-Bold.ttf")),
  ]);

  const dateStr = format(pubDate, "d MMM yyyy", { locale: th });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const element: any = {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: C.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "64px",
        fontFamily: "'Schibsted Grotesk', 'Noto Sans Thai'",
        position: "relative",
      },
      children: [
        // Title
        {
          type: "div",
          props: {
            style: {
              fontSize: "50px",
              fontWeight: 700,
              color: C.ink,
              lineHeight: 1.15,
              marginBottom: "20px",
              maxWidth: "920px",
            },
            children: title,
          },
        },
        // Date
        {
          type: "div",
          props: {
            style: {
              fontSize: "22px",
              fontWeight: 400,
              color: C.muted,
              letterSpacing: "0.02em",
            },
            children: dateStr,
          },
        },
      ],
    },
  };

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Schibsted Grotesk",
        data: fontRegular,
        weight: 400,
        style: "normal",
      },
      {
        name: "Schibsted Grotesk",
        data: fontBold,
        weight: 700,
        style: "normal",
      },
      {
        name: "Noto Sans Thai",
        data: thaiRegular,
        weight: 400,
        style: "normal",
      },
      { name: "Noto Sans Thai", data: thaiBold, weight: 700, style: "normal" },
    ],
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
