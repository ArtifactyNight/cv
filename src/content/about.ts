import { Icon } from "@iconify/react"
import {
  Astro,
  Bun,
  Cloudflare,
  CloudflareWorkers,
  Csharp,
  Docker,
  DrizzleOrm,
  Elysiajs,
  Express,
  Figma,
  GithubActions,
  Go,
  Gsap,
  Hono,
  Java,
  Javascript,
  Mongodb,
  Mysql,
  Nestjs,
  Nextdotjs,
  Nginx,
  Nodedotjs,
  Pm2,
  Postgresql,
  Prisma,
  Python,
  React,
  Redis,
  Socketdotio,
  Sqlite,
  Svelte,
  Typescript,
  Ubuntu,
  Vercel,
  type SvgIconProps,
} from "@thesvg/react"
import { createElement, type ComponentType } from "react"

export type AboutExperience = {
  /** e.g. "2024 – Present" */
  period: string
  role: string
  company: string
  detail?: string
}

export type AboutProject = {
  title: string
  href: string
  description: string
}

export type AboutStackItem = {
  name: string
  icon: ComponentType<SvgIconProps>
  href: string
  /** Brand hex for hover (Simple Icons palette). */
  color: string
}

/**
 * Edit this file to update the About page. Sections with empty arrays or
 * strings are hidden until you add content.
 *
 * Photo: place an image in `public/` (e.g. `public/profile.jpg`) and set
 * `image` to `"/profile.jpg"`.
 */
export type AboutStackCategory = {
  label: string
  items: AboutStackItem[]
}

export type AboutContent = {
  name: string
  title: string
  location: string
  now: string
  availability: string | null
  image: string | null
  links: {
    email: string
    github: string
    linkedin: string
  }
  experience: AboutExperience[]
  projects: AboutProject[]
  stack: AboutStackCategory[]
}

function iconify(icon: string): ComponentType<SvgIconProps> {
  function IconifyStackIcon({ className }: SvgIconProps) {
    return createElement(Icon, { icon, className, "aria-hidden": true })
  }
  return IconifyStackIcon
}

const TailwindCss = iconify("simple-icons:tailwindcss")

export const aboutContent: AboutContent = {
  name: "Kidsanaphon Kaeopha",
  title: "Fullstack Developer",
  location: "Bangkok, Thailand",

  now: "Building product-facing web apps with TypeScript, React, and Next.js. Most of my time goes to UI polish, API design, and shipping small features end to end.",

  availability: null,

  image: null,

  links: {
    email: "hello@kidsanaphon.dev",
    github: "https://github.com/kidsanaphon",
    linkedin: "https://www.linkedin.com/in/kidsanaphon",
  },

  experience: [
    {
      period: "2023 – Present",
      role: "Fullstack Developer",
      company: "Northline Studio",
      detail:
        "Owns the customer dashboard: React front end, Node APIs, and Postgres. Cut time-to-ship for internal tools by standardizing on a shared component kit.",
    },
    {
      period: "2021 – 2023",
      role: "Frontend Engineer",
      company: "Wavepay",
      detail:
        "Shipped the merchant onboarding flow and design-system primitives used across three product surfaces.",
    },
    {
      period: "2019 – 2021",
      role: "Software Engineer",
      company: "Bangkok Digital Labs",
      detail:
        "Maintained legacy PHP services while migrating checkout to a Next.js + headless CMS stack.",
    },
  ],

  projects: [
    {
      title: "cv",
      href: "https://github.com/kidsanaphon/cv",
      description:
        "This site: Next.js App Router, Tailwind v4, typed content, and route transitions with GSAP.",
    },
    {
      title: "Shelfmark",
      href: "https://github.com/kidsanaphon/shelfmark",
      description:
        "Personal reading tracker with full-text search and OPDS export. Go API, SQLite, and a minimal React UI.",
    },
    {
      title: "shiftboard",
      href: "https://github.com/kidsanaphon/shiftboard",
      description:
        "Team shift planner with drag-and-drop scheduling and Slack reminders for open slots.",
    },
  ],

  stack: [
    {
      label: "Frontend",
      items: [
        {
          name: "React",
          icon: React,
          href: "https://react.dev",
          color: "#61DAFB",
        },
        {
          name: "Next.js",
          icon: Nextdotjs,
          href: "https://nextjs.org",
          color: "#000000",
        },
        {
          name: "Astro",
          icon: Astro,
          href: "https://astro.build",
          color: "#FF5D01",
        },
        {
          name: "SvelteKit",
          icon: Svelte,
          href: "https://svelte.dev",
          color: "#FF3E00",
        },
        {
          name: "Tailwind CSS",
          icon: TailwindCss,
          href: "https://tailwindcss.com",
          color: "#06B6D4",
        },
      ],
    },
    {
      label: "Backend",
      items: [
        {
          name: "Express",
          icon: Express,
          href: "https://expressjs.com",
          color: "#000000",
        },
        {
          name: "NestJS",
          icon: Nestjs,
          href: "https://nestjs.com",
          color: "#E0234E",
        },
        {
          name: "Hono",
          icon: Hono,
          href: "https://hono.dev",
          color: "#E36002",
        },
        {
          name: "Elysia",
          icon: Elysiajs,
          href: "https://elysiajs.com",
          color: "#8B5CF6",
        },
        {
          name: "Cloudflare Workers",
          icon: CloudflareWorkers,
          href: "https://workers.cloudflare.com",
          color: "#F38020",
        },
      ],
    },
    {
      label: "Languages & Runtimes",
      items: [
        {
          name: "TypeScript",
          icon: Typescript,
          href: "https://www.typescriptlang.org",
          color: "#3178C6",
        },
        {
          name: "JavaScript",
          icon: Javascript,
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          color: "#F7DF1E",
        },
        {
          name: "Node.js",
          icon: Nodedotjs,
          href: "https://nodejs.org",
          color: "#5FA04E",
        },
        {
          name: "Bun",
          icon: Bun,
          href: "https://bun.sh",
          color: "#000000",
        },
        {
          name: "Python",
          icon: Python,
          href: "https://www.python.org",
          color: "#3776AB",
        },
        {
          name: "Go",
          icon: Go,
          href: "https://go.dev",
          color: "#00ADD8",
        },
        {
          name: "Java",
          icon: Java,
          href: "https://www.java.com",
          color: "#007396",
        },
        {
          name: "C#",
          icon: Csharp,
          href: "https://www.csharp.net",
          color: "#999999",
        },
      ],
    },
    {
      label: "Data",
      items: [
        {
          name: "PostgreSQL",
          icon: Postgresql,
          href: "https://www.postgresql.org",
          color: "#4169E1",
        },
        {
          name: "MySQL",
          icon: Mysql,
          href: "https://www.mysql.com",
          color: "#4479A1",
        },
        {
          name: "MongoDB",
          icon: Mongodb,
          href: "https://www.mongodb.com",
          color: "#47A248",
        },
        {
          name: "Redis",
          icon: Redis,
          href: "https://redis.io",
          color: "#FF4438",
        },
        {
          name: "Prisma",
          icon: Prisma,
          href: "https://www.prisma.io",
          color: "#2D3748",
        },
        {
          name: "Drizzle ORM",
          icon: DrizzleOrm,
          href: "https://orm.drizzle.team",
          color: "#C5F74F",
        },
        {
          name: "SQLite",
          icon: Sqlite,
          href: "https://www.sqlite.org",
          color: "#003B57",
        },
      ],
    },
    {
      label: "Real-time",
      items: [
        {
          name: "Socket.IO",
          icon: Socketdotio,
          href: "https://socket.io",
          color: "#010101",
        },
      ],
    },
    {
      label: "DevOps",
      items: [
        {
          name: "Docker",
          icon: Docker,
          href: "https://www.docker.com",
          color: "#2496ED",
        },
        {
          name: "PM2",
          icon: Pm2,
          href: "https://pm2.keymetrics.io",
          color: "#2B037A",
        },
        {
          name: "Nginx",
          icon: Nginx,
          href: "https://nginx.org",
          color: "#009639",
        },
        {
          name: "Vercel",
          icon: Vercel,
          href: "https://vercel.com",
          color: "#000000",
        },
        {
          name: "Cloudflare",
          icon: Cloudflare,
          href: "https://www.cloudflare.com",
          color: "#F38020",
        },
        {
          name: "GitHub Actions",
          icon: GithubActions,
          href: "https://github.com/features/actions",
          color: "#2088FF",
        },
        {
          name: "Ubuntu",
          icon: Ubuntu,
          href: "https://ubuntu.com",
          color: "#E95420",
        },
      ],
    },
    {
      label: "Tools",
      items: [
        {
          name: "Figma",
          icon: Figma,
          href: "https://www.figma.com",
          color: "#F24E1E",
        },
        {
          name: "GSAP",
          icon: Gsap,
          href: "https://gsap.com",
          color: "#88CE02",
        },
      ],
    },
  ],
}
