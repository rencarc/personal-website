import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLanguage,
  FaLinkedin,
  FaNode,
  FaReact,
  FaFileAlt
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import {
  SiC,
  SiDjango,
  SiExpress,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Zhen Xu",
  facts: [
    "I debug my sleep with console.log",
    "I optimize my coffee intake like an API call",
    "I run npm install more than I run outside"
  ],
  subtitle: "Full-stack Developer",
  tagline: "I love turning ideas into real web applications — one line of code at a time.",
  bigHeading: {
    black: "Hi, I'm",
    blue: "Zhen Xu"
  },
  about: "I'm a full-stack developer currently pursuing a Master's in Computer and Systems Sciences at Stockholm University. With a strong foundation in web development and product design, I enjoy building intuitive and scalable applications. My previous experience as an international trade manager gives me a unique perspective on product strategy and global collaboration.",
  location: "Stockholm, Sweden",
  image: "/assets/1732138470916.jpg",
  education: [
    {
      degree: "Master of Science",
      major: "Computer and Systems Sciences",
      school: "Stockholm University",
      duration: "August 2023 – June 2025",
      achievements: ["Specialization in Information Security"],
    },
    {
      degree: "SFI D",
      major: "Professional Swedish Language",
      school: "Cuben Utbildning",
      duration: "March 2024 – March 2025",
      achievements: ["Completed SFI Level D with strong professional Swedish communication skills"],
    }
  ],
  experience: [
    {
      company: "Hebei Better Refined Gift and Craft Co., Ltd.",
      location: "Hebei, China",
      position: "International Trade Manager",
      duration: "Mar 2019 – Aug 2023",
      bullets: [
        "Led product development for EU/US markets, achieving over $300K+ annual sales",
        "Managed international retail networks",
        "Designed Facebook marketing strategies and optimized e-commerce operations"
      ],
    }
  ],
  projects: [
    {
      name: "Swedish Vocabulary Platform",
      description: "A full-stack vocabulary learning app for Swedish learners, featuring an intuitive interface for adding and learning new words. Users can input Swedish words, their English translations, and example sentences to build their vocabulary effectively.",
      contribution: "Developed full frontend and backend, implemented CRUD API with Axios, and created a clean user interface focused on the learning experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JavaScript"],
      links: [
        {
          name: "Live Demo",
          uri: "https://lucent-kelpie-cd3d04.netlify.app/",
        }
      ],
      image: "/assets/Swedish Vocabulary Platform.png",
    },
    {
      name: "Social Media Platform",
      description: "A modern social media application with real-time features, authentication, and media sharing capabilities. Users can create profiles, share posts, interact with others, and enjoy a seamless social networking experience.",
      contribution: "Built the entire application from scratch, implementing features like user authentication, media uploads, real-time updates, and responsive design.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Clerk", "UploadThing"],
      links: [
        {
          name: "Live Demo",
          uri: "https://fullstack-socially.vercel.app/",
        }
      ],
      image: "/assets/Social Media Platform.png",
    },
    {
      name: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and experience. Features a clean design, smooth animations, and full accessibility support.",
      contribution: "Built the entire website from scratch using React.js, TypeScript, and Chakra UI, with focus on performance and user experience.",
      technologies: ["React", "TypeScript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "https://croissant.one",
        }
      ],
      image: "/assets/croissant.svg",
    }
  ],
  skills: {
    "Frontend": [
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      }
    ],
    "Backend": [
      {
        name: "Node.js",
        icon: FaNode,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Django",
        icon: SiDjango,
      },
      {
        name: "Python",
        icon: SiPython,
      }
    ],
    "Database": [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      }
    ],
    "DevOps & Cloud": [
      {
        name: "Git",
        icon: FaGit,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      }
    ],
    "Other": [
      {
        name: "Bash/Shell",
        icon: SiGnubash,
      },
      {
        name: "English (Fluent)",
        icon: FaLanguage,
      },
      {
        name: "Swedish (Intermediate)",
        icon: FaLanguage,
      }
    ]
  },
  social: [
    {
      name: "Resume",
      icon: FaFileAlt,
      uri: "/CV_ZHEN XU.pdf",
      hover: {
        bg: ["brand.50", "brand.900"],
        color: "brand.500"
      }
    },
    {
      name: "GitHub",
      icon: FaGithub,
      uri: "https://github.com/rencarc",
      hover: {
        bg: ["brand.50", "brand.900"],
        color: "brand.500"
      }
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/zhenxu00/",
      hover: {
        bg: ["brand.50", "brand.900"],
        color: "brand.500"
      }
    }
  ],
  contact: {
    email: "xzhen6684@gmail.com"
  },
} as IMe;
