export type WorkItem = {
  name: string;
  description: string;
  href: string;
};

export type SocialLink = {
  icon: string;
  label: string;
  href: string;
};

export const profile = {
  name: "Kidsanaphon Kaeopha",
  handle: "@night",
  work: [
    {
      name: "cv",
      description: "Portfolio และ blog ส่วนตัว สร้างด้วย Astro",
      href: "/",
    },
    {
      name: "blog",
      description: "บทความภาษาไทยเกี่ยวกับการทำเว็บและเครื่องมือที่ใช้",
      href: "/writing",
    },
  ] satisfies WorkItem[],
  social: [
    {
      icon: "mdi:email",
      label: "Email",
      href: "mailto:kidsanaphon.ka@gmail.com",
    },
    {
      icon: "mdi:github-box",
      label: "GitHub",
      href: "https://github.com/ArtifactyNight",
    },
  ] satisfies SocialLink[],
  contactLine: "เปิดรับบทสนทนาเรื่องการทำเว็บ เครื่องมือ และ Astro",
} as const;
