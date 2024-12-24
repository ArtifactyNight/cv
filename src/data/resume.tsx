import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { RiDiscordFill } from "react-icons/ri";
const skills = [
  // Cloud & Infrastructure
  {
    icon: "/icons/aws_light.svg",
    title: "AWS",
    link: "https://aws.amazon.com/",
  },
  {
    icon: "/icons/kubernetes.svg",
    title: "Kubernetes",
    link: "https://kubernetes.io/",
  },
  {
    icon: "/icons/docker.svg",
    title: "Docker",
    link: "https://www.docker.com/",
  },
  {
    icon: "/icons/pm2.svg",
    title: "PM2",
    link: "https://pm2.keymetrics.io/",
  },

  // Languages & Runtimes
  {
    icon: "/icons/bun.svg",
    title: "Bun",
    link: "https://bun.sh/",
  },
  {
    icon: "/icons/golang.svg",
    title: "Golang",
    link: "https://golang.org/",
  },
  {
    icon: "/icons/typescript.svg",
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },

  // Backend Frameworks
  {
    icon: "/icons/elysiajs.svg",
    title: "Elysia.js",
    link: "https://elysiajs.com/",
  },
  {
    icon: "/icons/expressjs.svg",
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: "/icons/hono.svg",
    title: "Hono",
    link: "https://hono.dev/",
  },
  {
    icon: "/icons/nestjs.svg",
    title: "NestJS",
    link: "https://nestjs.com/",
  },
  {
    icon: "/icons/trpc.svg",
    title: "tRPC",
    link: "https://trpc.io/",
  },

  // Frontend Frameworks & Libraries
  {
    icon: "/icons/nextjs_icon_dark.svg",
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    icon: "/icons/nuxt.svg",
    title: "Nuxt 3",
    link: "https://nuxt.com/",
  },
  {
    icon: "/icons/react.svg",
    title: "React",
    link: "https://react.dev/",
  },
  {
    icon: "/icons/svelte.svg",
    title: "SvelteKit",
    link: "https://svelte.dev/",
  },
  {
    icon: "/icons/vue.svg",
    title: "Vue",
    link: "https://vuejs.org/",
  },

  // UI Libraries & Tools
  {
    icon: "/icons/figma.svg",
    title: "Figma",
    link: "https://www.figma.com/",
  },
  {
    icon: "/icons/materialui.svg",
    title: "Material UI",
    link: "https://mui.com/",
  },
  {
    icon: "/icons/shadcn-ui.svg",
    title: "shadcn/ui",
    link: "https://ui.shadcn.com/",
  },
  {
    icon: "/icons/tailwindcss.svg",
    title: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },

  // State Management & Data Fetching
  {
    icon: "/icons/react-query.svg",
    title: "Tanstack Query",
    link: "https://tanstack.com/query/latest",
  },
  {
    icon: "/icons/redux.svg",
    title: "Redux Toolkit",
    link: "https://redux-toolkit.js.org/",
  },

  // Databases & ORMs
  {
    icon: "/icons/drizzle-orm_light.svg",
    title: "DrizzleORM",
    link: "https://orm.drizzle.team/",
  },
  {
    icon: "/icons/mysql.svg",
    title: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    icon: "/icons/postgresql.svg",
    title: "Postgresql",
    link: "https://www.postgresql.org/",
  },
  {
    icon: "/icons/prisma.svg",
    title: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    icon: "/icons/redis.svg",
    title: "Redis",
    link: "https://redis.io/",
  },

  // Backend as a Service & CMS
  {
    icon: "/icons/directus.svg",
    title: "Directus",
    link: "https://directus.io/",
  },
  {
    icon: "/icons/strapi.svg",
    title: "Strapi",
    link: "https://strapi.io/",
  },
  {
    icon: "/icons/supabase.svg",
    title: "Supabase",
    link: "https://supabase.com/",
  },

  // Development Tools
  {
    icon: "/icons/turborepo.svg",
    title: "Turborepo",
    link: "https://turborepo.org/",
  },
  {
    icon: "/icons/zod.svg",
    title: "Zod",
    link: "https://zod.dev/",
  },
];

export const DATA = {
  name: "Kidsanaphon Kaeophan",
  initials: "KK",
  url: "https://nightz.me",
  location: "Nakhon Ratchasima, Thailand",
  locationLink: "https://www.google.com/maps/place/Nakhon+Ratchasima",
  description:
    "Web developer who focused on modern web experiences. Full-stack enthusiast with an eye for clean design. ✨",
  summary:
    "I study full-time at Rajamangala University of Technology Isan. I want to be a Full-stack developer with a focus on modern web design. Right now, I work as a freelance developer, constantly learning and exploring new technologies to enhance my skills in both development and design.",
  avatarUrl: "https://avatars.githubusercontent.com/u/53427253?v=4",
  skills,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nightkungz@proton.me",
    tel: undefined,
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ArtifactyNight",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kidsanaphon/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discordapp.com/users/304952308893220864",
        icon: RiDiscordFill,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "RDCW",
      href: "https://rdcw.co.th/",
      badges: [],
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "/rdcw.png",
      start: "Sep 2021",
      end: "Now",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Rajamangala University of Technology Isan",
      href: "#",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/rmuti.png",
      start: "Jul 2021",
      end: "Now",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
