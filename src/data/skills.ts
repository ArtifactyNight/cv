export type SkillCategory = {
  label: string;
  items: readonly string[];
};

export const skills = [
  {
    label: "Frontend Frameworks",
    items: ["React", "Next.js", "Astro", "SvelteKit", "Tailwind CSS"],
  },
  {
    label: "Backend Frameworks",
    items: ["Express", "Nest.js", "Hono", "Elysia.js"],
  },
  {
    label: "Languages & Runtime",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Bun",
      "Python",
      "Java",
      "C#",
    ],
  },
  {
    label: "Database & ORM",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "DrizzleORM"],
  },
  {
    label: "Real-time Communication",
    items: ["WebSocket", "Socket.IO", "EventStream"],
  },
  {
    label: "DevOps & Infrastructure",
    items: [
      "Docker",
      "PM2",
      "Nginx",
      "Vercel",
      "Cloudflare",
      "GitHub Actions",
      "Ubuntu",
      "Windows Server",
    ],
  },
] as const satisfies readonly SkillCategory[];
