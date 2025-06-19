import { FaTelegram } from "react-icons/fa";
import { ResumeData, SkillItem } from "../types/resume";
import { RiDiscordFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

const skillsData: SkillItem[] = [
  // Cloud & Infrastructure
  {
    icon: "/svgs/aws_light.svg",
    title: "AWS",
    link: "https://aws.amazon.com/",
  },
  {
    icon: "/svgs/kubernetes.svg",
    title: "Kubernetes",
    link: "https://kubernetes.io/",
  },
  {
    icon: "/svgs/docker.svg",
    title: "Docker",
    link: "https://www.docker.com/",
  },
  {
    icon: "/svgs/pm2.svg",
    title: "PM2",
    link: "https://pm2.keymetrics.io/",
  },

  // Languages & Runtimes
  {
    icon: "/svgs/bun.svg",
    title: "Bun",
    link: "https://bun.sh/",
  },
  {
    icon: "/svgs/golang.svg",
    title: "Golang",
    link: "https://golang.org/",
  },
  {
    icon: "/svgs/typescript.svg",
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },

  // Backend Frameworks
  {
    icon: "/svgs/elysiajs.svg",
    title: "Elysia.js",
    link: "https://elysiajs.com/",
  },
  {
    icon: "/svgs/expressjs.svg",
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: "/svgs/hono.svg",
    title: "Hono",
    link: "https://hono.dev/",
  },
  {
    icon: "/svgs/nestjs.svg",
    title: "NestJS",
    link: "https://nestjs.com/",
  },
  {
    icon: "/svgs/trpc.svg",
    title: "tRPC",
    link: "https://trpc.io/",
  },

  // Frontend Frameworks & Libraries
  {
    icon: "/svgs/nextjs_icon_dark.svg",
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    icon: "/svgs/nuxt.svg",
    title: "Nuxt 3",
    link: "https://nuxt.com/",
  },
  {
    icon: "/svgs/react.svg",
    title: "React",
    link: "https://react.dev/",
  },
  {
    icon: "/svgs/svelte.svg",
    title: "SvelteKit",
    link: "https://svelte.dev/",
  },
  {
    icon: "/svgs/vue.svg",
    title: "Vue",
    link: "https://vuejs.org/",
  },

  // UI Libraries & Tools
  {
    icon: "/svgs/figma.svg",
    title: "Figma",
    link: "https://www.figma.com/",
  },
  {
    icon: "/svgs/materialui.svg",
    title: "Material UI",
    link: "https://mui.com/",
  },
  {
    icon: "/svgs/shadcn-ui.svg",
    title: "shadcn/ui",
    link: "https://ui.shadcn.com/",
  },
  {
    icon: "/svgs/tailwindcss.svg",
    title: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },

  // State Management & Data Fetching
  {
    icon: "/svgs/react-query.svg",
    title: "Tanstack Query",
    link: "https://tanstack.com/query/latest",
  },
  {
    icon: "/svgs/redux.svg",
    title: "Redux Toolkit",
    link: "https://redux-toolkit.js.org/",
  },

  // Databases & ORMs
  {
    icon: "/svgs/drizzle-orm_light.svg",
    title: "DrizzleORM",
    link: "https://orm.drizzle.team/",
  },
  {
    icon: "/svgs/mysql.svg",
    title: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    icon: "/svgs/postgresql.svg",
    title: "Postgresql",
    link: "https://www.postgresql.org/",
  },
  {
    icon: "/svgs/prisma.svg",
    title: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    icon: "/svgs/redis.svg",
    title: "Redis",
    link: "https://redis.io/",
  },

  // Backend as a Service & CMS
  {
    icon: "/svgs/directus.svg",
    title: "Directus",
    link: "https://directus.io/",
  },
  {
    icon: "/svgs/strapi.svg",
    title: "Strapi",
    link: "https://strapi.io/",
  },
  {
    icon: "/svgs/supabase.svg",
    title: "Supabase",
    link: "https://supabase.com/",
  },

  // Development Tools
  {
    icon: "/svgs/turborepo.svg",
    title: "Turborepo",
    link: "https://turborepo.org/",
  },
  {
    icon: "/svgs/zod.svg",
    title: "Zod",
    link: "https://zod.dev/",
  },
];

const softSkillsData: SkillItem[] = [
  {
    title: "Communication",
  },
  {
    title: "Problem Solving",
  },
  {
    title: "Time Management",
  },
  {
    title: "Agile Development",
  },
  {
    title: "Clean Code",
  },
  {
    title: "Self-Learning",
  },
];

export const RESUME_DATA: ResumeData = {
  name: "Kidsanaphon Kaeopha",
  initials: "Mr",
  location: "Nakhon Ratchasima, Thailand",
  locationLink: "https://www.google.com/maps/place/Nakhonratchasima",
  openToWork: true,
  about:
    "Web developer who focused on modern web experiences. Full-stack enthusiast with an eye for clean design. ✨",
  summary:
    "I study full-time at Rajamangala University of Technology Isan. I want to be a Full-stack developer with a focus on modern web design. Right now, I work as a freelance developer, constantly learning and exploring new technologies to enhance my skills in both development and design.",
  avatarUrl: "https://m1r.ai/VxFsA.png",
  personalWebsiteUrl: "https://kidsanaphon.vercel.app",
  contact: {
    email: "contact@nightz.me",
    tel: undefined,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ArtifactyNight",
        icon: RiGithubFill,
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/kidsanaphon/",
        icon: RiLinkedinFill,
      },
      {
        name: "Discord",
        url: "https://discordapp.com/users/304952308893220864",
        icon: RiDiscordFill,
      },
      {
        name: "Telegram",
        url: "https://t.me/nightsoeepy",
        icon: FaTelegram,
      },
    ],
  },
  education: [
    {
      school: "Rajamangala University of Technology Isan",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "Now",
    },
  ],
  work: [
    {
      company: "RDCW",
      link: "https://rdcw.co.th/",
      badges: ["Remote"],
      title: "Fullstack Developer",
      start: "2022",
      end: "Now",
      description:
        "Led development of client projects using Next.js, React and Node.js. Built responsive designs and E2E APIs.",
    },
    {
      company: "Mythic Development",
      link: "#",
      badges: ["Remote"],
      title: "CEO & Founder",
      start: "2022",
      end: "Now",
      description:
        "Owned web development studio. Built projects with modern tech stack. Managed team and client relationships.",
    },
    {
      company: "Fastwork",
      link: "https://fastwork.co/user/nightkungz",
      badges: ["Remote"],
      title: "FreelanceFullstack Developer",
      start: "2023",
      end: "Now",
      description:
        "Provide freelance full-stack development services. Maintain 5-star rating with 100% client satisfaction.",
    },
  ],
  skills: skillsData,
  softSkills: softSkillsData,
  projects: [
    {
      title: "Dzee Zones",
      techStack: ["Next.js", "Prisma", "MySQL"],
      description:
        "A platform to sell roblox contents. Made for Youtuber who have 2M subscribers.",
    },
    {
      title: "Arcane Realms",
      techStack: ["Next.js", "TailwindCSS", "Prisma", "Postgresql"],
      description: "A platform to sell minecraft digital items.",
    },
    {
      title: "Lamalia",
      techStack: ["Sveltekit", "TailwindCSS"],
      description: "Cool and Modern Landing page for Minecraft server,",
    },
    {
      title: "Blixy Portfolio",
      techStack: ["Next.js", "TailwindCSS", "framer-motion"],
      description: "A comission portfolio website.",
    },
    {
      title: "Botfin",
      techStack: ["Next.js", "TailwindCSS", "Prisma", "Postgresql", "Redis"],
      description: "A platform to manage or automation Forex bot.",
    },
    {
      title: "Overmine",
      techStack: [
        "Next.js",
        "TailwindCSS",
        "DrizzleORM",
        "MySql",
        "Postgresql",
      ],
      description: "Hand-crafted Minecraft server webstore.",
      link: {
        label: "Overmine",
        href: "https://store.overmine.online",
      },
    },
  ],
} as const;
