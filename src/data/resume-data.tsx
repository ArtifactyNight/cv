import { FaDiscord, FaGithub } from "react-icons/fa";
import { ResumeData, SkillItem } from "../types/resume";

const skillsData: SkillItem[] = [
  {
    icon: "/svgs/typescript.svg",
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
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
    icon: "/svgs/svelte.svg",
    title: "SvelteKit",
    link: "https://svelte.dev/",
  },
  {
    icon: "/svgs/materialui.svg",
    title: "Material UI",
    link: "https://mui.com/",
  },
  {
    icon: "/svgs/tailwindcss.svg",
    title: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: "/svgs/shadcn-ui.svg",
    title: "shadcn/ui",
    link: "https://ui.shadcn.com/",
  },
  {
    icon: "/svgs/redux.svg",
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: "/svgs/react-query.svg",
    title: "React Query",
    link: "https://tanstack.com/query/latest",
  },
  {
    icon: "/svgs/trpc.svg",
    title: "tRPC",
    link: "https://trpc.io/",
  },
  {
    icon: "/svgs/elysiajs.svg",
    title: "Elysia.js",
    link: "https://elysiajs.com/",
  },
  {
    icon: "/svgs/prisma.svg",
    title: "Prisma",
    link: "https://www.prisma.io/",
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
    icon: "/svgs/supabase.svg",
    title: "Supabase",
    link: "https://supabase.com/",
  },
  {
    icon: "/svgs/kubernetes.svg",
    title: "Kubernetes",
    link: "https://kubernetes.io/",
  },
  {
    icon: "/svgs/figma.svg",
    title: "Figma",
    link: "https://www.figma.com/",
  },
  {
    icon: "/svgs/framer.svg",
    title: "Framer",
    link: "https://www.framer.com/",
  },
];

export const RESUME_DATA: ResumeData = {
  name: "Kidsanaphon Kaeopha (Night)",
  initials: "Mr.",
  location: "Nakhon Ratchasima, Thailand",
  locationLink: "https://www.google.com/maps/place/Nakhonratchasima",
  about:
    "Web developer who focused on modern web experiences. Full-stack enthusiast with an eye for clean design. ✨",
  summary:
    "I study full-time at Rajamangala University of Technology Isan. I want to be a Full-stack developer with a focus on modern web design. Right now, I work as a freelance developer, constantly learning and exploring new technologies to enhance my skills in both development and design.",
  avatarUrl: "https://m1r.ai/VxFsA.png",
  personalWebsiteUrl: "https://kidsanaphon.vercel.app",
  contact: {
    email: "nightkungz@proton.me",
    tel: undefined,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ArtifactyNight",
        icon: FaGithub,
      },
      {
        name: "Discord",
        url: "https://discordapp.com/users/304952308893220864",
        icon: FaDiscord,
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
      start: "2021",
      end: "Now",
      description: "Making side projects and commission work.",
    },
    {
      company: "Mythic Development",
      link: "#",
      badges: ["Remote"],
      title: "Founder & Developer",
      start: "2022",
      end: "Now",
      description: "Creating and managing self projects with passions.",
    },
    {
      company: "Fastwork",
      link: "https://fastwork.co/user/nightkungz",
      badges: ["Remote"],
      title: "Fullstack Developer",
      start: "2023",
      end: "Now",
      description: "Freelancer at Fastwork",
    },
  ],
  skills: skillsData,
  projects: [
    {
      title: "Dzee Zones",
      techStack: ["Next.js", "Prisma", "MySQL"],
      description: "A platform to sell roblox contents.",
      link: {
        label: "dzeezones.com",
        href: "https://dzeezones.com",
      },
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
      link: {
        label: "Blixy Portfolio",
        href: "https://nightkungz-blixy.vercel.app/en/",
      },
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
    },
  ],
} as const;
