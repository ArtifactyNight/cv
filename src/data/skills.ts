export type SkillCategory = {
  label: string;
  items: readonly string[];
};

export const skills = [
  {
    label: "Languages & Runtime",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Bun",
      "Python",
      "Java",
      "Kotlin",
      "C#",
      "Swift",
    ],
  },
  {
    label: "Frontend",
    items: ["Astro", "React", "Next.js", "TailwindCSS", "SvelteKit"],
  },
  {
    label: "Backend",
    items: ["Nest.js", "Hono", "Express", "Elysia.js"],
  },
  {
    label: "Database & ORM",
    items: ["PostgreSQL", "Prisma", "Redis", "MySQL", "MongoDB", "DrizzleORM"],
  },
  {
    label: "DevOps & Infrastructure",
    items: [
      "Docker",
      "Vercel",
      "Cloudflare",
      "GitHub Actions",
      "Nginx",
      "PM2",
      "Ubuntu",
      "Windows Server",
    ],
  },
] as const satisfies readonly SkillCategory[];
