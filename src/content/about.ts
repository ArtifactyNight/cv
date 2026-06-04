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

/**
 * Edit this file to update the About page. Sections with empty arrays or
 * strings are hidden until you add content.
 *
 * Photo: place an image in `public/` (e.g. `public/profile.jpg`) and set
 * `image` to `"/profile.jpg"`.
 */
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
  stack: string[]
}

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
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
  ],
}
