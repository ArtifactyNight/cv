import { FaTelegram } from "react-icons/fa";
import { RiDiscordFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { ResumeData, SkillItem } from "../types/resume";

const skillsData: SkillItem[] = [
  // Cloud & Infrastructure
  {
    icon: "https://svgl.app/library/aws_light.svg",
    title: "AWS",
    link: "https://aws.amazon.com/",
  },
  {
    icon: "https://svgl.app/library/kubernetes.svg",
    title: "Kubernetes",
    link: "https://kubernetes.io/",
  },
  {
    icon: "https://svgl.app/library/docker.svg",
    title: "Docker",
    link: "https://www.docker.com/",
  },
  {
    icon: "https://svgl.app/library/pm2.svg",
    title: "PM2",
    link: "https://pm2.keymetrics.io/",
  },

  // Languages & Runtimes
  {
    icon: "https://svgl.app/library/bun.svg",
    title: "Bun",
    link: "https://bun.sh/",
  },
  {
    icon: "https://svgl.app/library/golang.svg",
    title: "Golang",
    link: "https://golang.org/",
  },
  {
    icon: "https://svgl.app/library/typescript.svg",
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },

  // Backend Frameworks
  {
    icon: "https://svgl.app/library/elysiajs.svg",
    title: "Elysia.js",
    link: "https://elysiajs.com/",
  },
  {
    icon: "https://svgl.app/library/expressjs.svg",
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: "https://svgl.app/library/hono.svg",
    title: "Hono",
    link: "https://hono.dev/",
  },
  {
    icon: "https://svgl.app/library/nestjs.svg",
    title: "NestJS",
    link: "https://nestjs.com/",
  },
  {
    icon: "https://svgl.app/library/trpc.svg",
    title: "tRPC",
    link: "https://trpc.io/",
  },

  // Frontend Frameworks & Libraries
  {
    icon: "https://svgl.app/library/nextjs_icon_dark.svg",
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    icon: "https://svgl.app/library/nuxt.svg",
    title: "Nuxt 3",
    link: "https://nuxt.com/",
  },
  {
    icon: "https://svgl.app/library/react_light.svg",
    title: "React",
    link: "https://react.dev/",
  },
  {
    icon: "https://svgl.app/library/svelte.svg",
    title: "SvelteKit",
    link: "https://svelte.dev/",
  },
  {
    icon: "https://svgl.app/library/vue.svg",
    title: "Vue",
    link: "https://vuejs.org/",
  },

  // UI Libraries & Tools
  {
    icon: "https://svgl.app/library/figma.svg",
    title: "Figma",
    link: "https://www.figma.com/",
  },
  {
    icon: "https://svgl.app/library/tailwindcss.svg",
    title: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: "https://svgl.app/library/sass.svg",
    title: "SCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: "https://svgl.app/library/materialui.svg",
    title: "Material UI",
    link: "https://mui.com/",
  },
  {
    icon: "https://svgl.app/library/shadcn-ui.svg",
    title: "shadcn/ui",
    link: "https://ui.shadcn.com/",
  },

  // State Management & Data Fetching
  {
    icon: "https://svgl.app/library/tanstack.svg",
    title: "Tanstack",
    link: "https://tanstack.com/",
  },

  // Databases & ORMs
  {
    icon: "https://svgl.app/library/drizzle-orm_light.svg",
    title: "DrizzleORM",
    link: "https://orm.drizzle.team/",
  },
  {
    icon: "https://svgl.app/library/prisma.svg",
    title: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    icon: "https://svgl.app/library/mysql.svg",
    title: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    icon: "https://svgl.app/library/postgresql.svg",
    title: "Postgresql",
    link: "https://www.postgresql.org/",
  },

  {
    icon: "https://svgl.app/library/redis.svg",
    title: "Redis",
    link: "https://redis.io/",
  },

  {
    icon: "https://svgl.app/library/supabase.svg",
    title: "Supabase",
    link: "https://supabase.com/",
  },

  // Development Tools
  {
    icon: "https://svgl.app/library/turborepo.svg",
    title: "Turborepo",
    link: "https://turborepo.org/",
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
  name: "Kidsanaphon (Night) Kaeopha",
  initials: "Mr",
  location: "Nakhon Ratchasima, Thailand",
  locationLink: "https://www.google.com/maps/place/Nakhonratchasima",
  openToWork: true,
  about: "Full-stack developer enthusiast with an eye for clean design. ✨",
  summary:
    "An indie Full-stack developer with a focus on modern web design. Right now, I work as a freelance developer, constantly learning and exploring new technologies to enhance my skills in both development and design.",
  avatarUrl: "https://m1r.ai/VxFsA.png",
  personalWebsiteUrl: "https://kidsanaphon.vercel.app",
  contact: {
    email: "hi@nightz.me",
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
      company: "MFEC Public Company Limited",
      link: "https://www.mfec.co.th/",
      badges: ["Internship"],
      title: "Fullstack Intern",
      start: "2025",
      end: "2026",
      description: [
        "Developed low-code solutions using Appsmith and Supabase",
        "Collaborated with team to deliver internal tools efficiently",
        "Integrated APIs and automated workflows for business processes",
      ],
    },
    {
      company: "RDCW",
      link: "https://rdcw.co.th/",
      badges: [],
      title: "Fullstack Developer",
      start: "2023",
      end: "Now",
      description: [
        "Led development of client projects using Next.js, React and Node.js",
        "Built responsive designs and E2E APIs",
        "Maintained and updated existing systems",
      ],
    },
    {
      company: "Fastwork",
      link: "https://fastwork.co/user/nightkungz",
      badges: [],
      title: "Fullstack Developer",
      start: "2024",
      end: "Now",
      description: [
        "Provide freelance full-stack development services",
        "Maintain 5-star rating with 100% client satisfaction",
        "Handle projects from design to deployment",
      ],
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
