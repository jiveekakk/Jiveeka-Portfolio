import {
  mobile,
  backend,
  creator,
  web,
  
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,

  carrent,
  jobit,
  tripguide,
  
  python,
  java,
  spring,
  richfield,
  simple,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Machine learning",
    icon: mobile,
  },
  {
    title: "Data Analysis",
    icon: backend,
  },
  {
    title: "Software Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "SIMPLYFAI Innovation PTY (LTD)",
    icon: simple,
    iconBg: "#383E56",
    date: "october 2024 - March 2025",
    points: [
      "Designed and implemented dynamic web scraping solutions using Puppeteer, generating detailed JSON outputs of interactive webpage elements.",
      "Verified and tested web scraping functionality across additional links, ensuring error-free and accurate data collection.",
      "Contributed to integrating and testing Large Language Models (LLMs) for enhanced system capabilities.",
      "Collaborated effectively on IT projects, delivering consistent, high-quality results aligned with client requirements.",
      "Debugging and Testing: Identifying and resolving bugs efficiently.",
      "Version Control: Familiarity with Git/GitHub for collaborative development.",
    ],
  },
  {
    title: "Junior Developer (Part-time)",
    company_name: "University Coding Lab",
    icon: richfield,
    iconBg: "#E6DEDD",
    date: "January 2023 - October 2023",
    points: [
      "Assisted in developing educational software tools for computer science students",
      "Created interactive coding tutorials and exercises",
      "Debugged and fixed issues in existing codebase",
      "Participated in code reviews and knowledge sharing sessions",
    ],
  },
  
];

const projects = [
  {
    name: "Web Scraper + LLM Integration",
    description:
      "An intelligent and customizable web scraping tool designed to extract structured data from dynamic websites. Built with Puppeteer and integrated with an LLM for enhanced element recognition, it efficiently generates detailed JSON outputs including unique XPaths, IDs, class names, and text content. Ideal for automating data collection and powering smart testing workflows.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Page",
    description:
      "A visually engaging and interactive portfolio inspired by the iconic Star Wars universe. This page showcases my projects, skills, and passion for software engineering through a sci-fi theme, featuring Star Wars-inspired design elements, animations, and content that reflect my creativity and technical expertise. Perfect for fans and recruiters alike, it combines fandom with professional presentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pharmacy Management System",
    description:
      "A robust and scalable pharmacy management system developed using Java and Spring Boot. This application streamlines inventory control, prescription handling, customer records, and sales tracking. It features a secure authentication system, responsive UI with Thymeleaf, and a MySQL/PostgreSQL backend for reliable data storage. Designed to improve efficiency for pharmacists while ensuring accurate and compliant medication management.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Thymeleaf",
        color: "pink-text-gradient",
      },
      {
        name: "Database",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
