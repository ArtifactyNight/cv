import { IconType } from "react-icons";

type Social = {
  name: string;
  url: string;
  icon: IconType;
};

type ContactInfo = {
  email: string | undefined;
  tel: string | undefined;
  social: Social[];
};

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
};

type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export type SkillItem = {
  icon?: string;
  title: string;
  link: string;
};

export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: ContactInfo;
  education: Education[];
  work: WorkExperience[];
  skills: SkillItem[];
  projects: Project[];
};
