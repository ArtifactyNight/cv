const person = {
  firstName: "Kidsanaphon",
  lastName: "Kaeopha",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Thai"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ArtifactyNight",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kidsanaphon/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/nightsoeepy",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kidsanaphon.ka@proton.me",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack Developer</>,
  subline: (
    <>
      I'm Night!, a passionate fullstack developer crafting web experiences with
      Node.js.
      <br /> From Discord bots to Minecraft plugins, I love building tools that
      bring communities together.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I study full-time at Rajamangala University of Technology Isan. I want
        to be a Full-stack developer with a focus on modern web design. Right
        now, I work as a freelance developer, constantly learning and exploring
        new technologies to enhance my skills in both development and design.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "RDCW",
        timeframe: "2022 - Present",
        role: "Fullstack Developer",
        achievements: [
          <>
            Led development of client projects using Next.js, React and Node.js.
            Built responsive designs and RESTful APIs.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/cover-01.png",
            alt: "RDCW Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Mythic Development",
        timeframe: "2024 - Present",
        role: "Fullstack Developer",
        achievements: [
          <>
            Founded web development studio. Built projects with modern tech
            stack. Managed team and client relationships.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-02/cover-03.png",
            alt: "Mythic Development Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fastwork",
        timeframe: "2023 - 2024",
        role: "Fullstack Developer",
        achievements: [
          <>
            Provide freelance full-stack development services. Maintain 5-star
            rating with 100% client satisfaction.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-02/cover-02.png",
            alt: "Fastwork Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Rajamangala University of Technology Isan",
        description: <>Bachelor's Degree in Computer Science</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
