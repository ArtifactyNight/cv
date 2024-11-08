import { GitHubIcon } from "@/components/icons";
import { DiscordLogo } from "@/images/logos";
import { Contact, ContactIcon, FacebookIcon } from "lucide-react";
import { RiDiscordLine, RiGithubLine } from "react-icons/ri";

export const RESUME_DATA = {
  name: "Kidsanaphon Kaeopha",
  initials: "Mr",
  location: "Nakhon Ratchasima, Thailand",
  locationLink: "https://www.google.com/maps/place/Nakhonratchasima",
  about:
    "Student aiming to be a Full-stack developer. Freelancer and gamer. Balancing studies, coding, and gaming. 🚀🎮",
  summary:
    "I'm a full-time student at Rajamangala University of Technology Isan, working towards becoming a Full-stack developer. Currently freelancing in development, and yes, I'm also a gamer. Balancing studies, work, and my passion for gaming keeps things interesting. It's all part of the journey to make my mark in the tech world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/53427253?v=4",
  personalWebsiteUrl: "https://nightkungz.me",
  contact: {
    email: "nightkungz@proton.me",
    tel: undefined,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ArtifactyNight",
        icon: RiGithubLine,
      },
      // {
      //   name: "Facebook",
      //   url: "https://www.facebook.com/NightKunGz/",
      //   icon: FacebookIcon,
      // },
      {
        name: "Discord",
        url: "https://discordapp.com/users/304952308893220864",
        icon: RiDiscordLine,
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
      description: "Making side projects and freelance work",
    },
    {
      company: "Mythic Development",
      link: "https://www.facebook.com/mythicdev",
      badges: ["Remote"],
      title: "Founder & Developer",
      start: "2022",
      end: "Now",
      description: "Creating and managing self projects",
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
      description: "A platform to sold roblox items",
      link: {
        label: "dzeezones.com",
        href: "https://dzeezones.com",
      },
    },
    {
      title: "Arcane Realms Store",
      techStack: ["Next.js", "Prisma", "Postgresql"],
      description: "A platform to sold minecraft digital items",
    },
    {
      title: "Lamalia Landing Page",
      techStack: ["Sveltekit"],
      description: "Landing page for Minecraft server",
      link: {
        label: "lamalia.net",
        href: "https://lamalia.net",
      },
    },
  ],
} as const;
