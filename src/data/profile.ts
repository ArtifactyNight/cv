export type WorkItem = {
  name: string;
  description: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description?: string;
  href?: string;
};

export type SocialLink = {
  icon: string;
  label: string;
  href: string;
};

export const profile = {
  name: "Kidsanaphon Kaeopha",
  quote: {
    text: "Trifles make perfection, and perfection is no trifle.",
    author: "Michelangelo",
  },
  handle: "@night",
  experience: [
    {
      role: "Fullstack Developer",
      company: "RDCW",
      period: "ก.ย. 2023 ถึง ปัจจุบัน",
      description:
        "พัฒนาแพลตฟอร์ม e-commerce สำหรับลูกค้ารายใหญ่ที่มีผู้ใช้งานรวมกว่า 100,000 คน ตั้งแต่รับ Requirement ไปจนถึง Deployment ออกแบบสถาปัตยกรรมรองรับ 500+ daily active users โดยไม่มี downtime",
    },
    {
      role: "Fullstack Developer Internship",
      company: "MFEC Public Company Limited",
      period: "พ.ย. 2025 ถึง ก.พ. 2026",
      description:
        "พัฒนาแพลตฟอร์ม Request VM ภายในองค์กรด้วย Appsmith และระบบ billing แบบ multi-cloud ด้วย Nest.js",
    },
  ] satisfies ExperienceItem[],
  work: [
    {
      name: "cv",
      description: "Portfolio และ Blog ส่วนตัว สร้างด้วย Astro",
      href: "/",
    },
    {
      name: "hr-recruitment-pipeline",
      description: "เครื่องมือจัดการ Recruitment Pipeline ที่มี AI Assistant",
      href: "https://github.com/ArtifactyNight/hr-recruitment-pipeline",
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
    {
      icon: "mdi:linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kidsanaphon/",
    },
  ] satisfies SocialLink[],
  contactLine: "เปิดรับบทสนทนาเรื่องการทำเว็บ เครื่องมือ และ Astro",
} as const;
