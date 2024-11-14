import { RiDiscordLine, RiGithubLine } from "react-icons/ri";
import { ResumeData } from "../types/resume";
import { FaDiscord, FaGithub } from "react-icons/fa";

export const RESUME_DATA: ResumeData = {
  name: "Kidsanaphon Kaeopha",
  initials: "Mr",
  location: "Nakhon Ratchasima, Thailand",
  locationLink: "https://www.google.com/maps/place/Nakhonratchasima",
  about:
    "Next.js developer focused on modern web experiences. Full-stack enthusiast with an eye for clean design. ✨",
  summary:
    "I study full-time at Rajamangala University of Technology Isan. I want to be a Full-stack developer. Right now, I work as a freelance developer and enjoy playing games in my free time. I try to balance my time between studying, working, and gaming. This is how I grow and learn to become better in technology.",
  avatarUrl: "https://m1r.ai/jiEq.jpg",
  personalWebsiteUrl: "https://nightkungz.me",
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
      description: "Making side projects and commission work",
    },
    {
      company: "Mythic Development",
      link: "#",
      badges: ["Remote"],
      title: "Founder & Developer",
      start: "2022",
      end: "Now",
      description: "Creating and managing self projects with passions",
    },
    {
      company: "Fastwork Freelancer",
      link: "https://fastwork.co/user/nightkungz",
      badges: ["Remote"],
      title: "Fullstack Developer",
      start: "2023",
      end: "Now",
      description: "Freelancer at Fastwork",
    },
  ],
  skills: [
    "TypeScript",
    "Next.js",
    "Nuxt 3",
    "Svelte",
    "TailwindCSS",
    "shadcn/ui",
    "Redux Toolkit",
    "React Query",
    "Zustand",
    "Nest.js",
    "Elysia.js",
    "Prisma",
    "DrizzleORM",
    "MySQL",
    "Postgresql",
    "Golang",
    "Supabase",
    "Docker",
    "Kubernetes",
  ],
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
      title: "Arcane Realms Store",
      techStack: ["Next.js", "TailwindCSS", "Prisma", "Postgresql"],
      description: "A platform to sell minecraft digital items.",
    },
    {
      title: "Lamalia Landing Page",
      techStack: ["Sveltekit", "TailwindCSS"],
      description: "Cool and Modern Landing page for Minecraft server,",
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
