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
export const aboutContent = {
  name: "Kidsanaphon Kaeopha",
  title: "Fullstack Developer",
  location: "Bangkok, Thailand",

  /** One sentence on what you are focused on right now. */
  now: "",

  /** e.g. "Open to full-time roles" — shown under the hero when set. */
  availability: "",

  /** Path under `public/`, or null to hide the photo. */
  image: null as string | null,

  links: {
    email: "",
    github: "",
    linkedin: "",
  },

  experience: [
    // {
    //   period: "2024 – Present",
    //   role: "Fullstack Developer",
    //   company: "Company name",
    //   detail: "What you built or owned, in one line.",
    // },
  ] satisfies AboutExperience[],

  projects: [
    // {
    //   title: "Project name",
    //   href: "https://github.com/you/project",
    //   description: "One line on what it is and your role.",
    // },
  ] satisfies AboutProject[],

  /** Tools you want recruiters to see first. Rendered as a single mono line. */
  stack: [
    // "TypeScript",
    // "React",
    // "Next.js",
  ] satisfies string[],
} as const
