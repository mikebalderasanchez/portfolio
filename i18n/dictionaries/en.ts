export type ProjectCopy = {
  designation: string;
  quote: string;
  role: string;
  highlights: string[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    label: string;
    available: string;
    eyebrow: string;
    body: string;
    contact: string;
    resume: string;
  };
  home: {
    about: string;
    selectedWork: string;
    seeAll: string;
  };
  aboutSnapshot: {
    body: string;
    more: string;
    focus: { title: string; body: string }[];
  };
  aboutPage: {
    title: string;
    heading: string;
    body: string;
    howIWork: string;
    experience: string;
    steps: { step: string; title: string; body: string }[];
  };
  experience: {
    work: string;
    education: string;
    items: {
      id: number;
      title: string;
      company: string;
      duration: string;
      description: string;
      skills: string[];
      type: "work" | "education";
    }[];
  };
  projectsPage: {
    title: string;
    heading: string;
    body: string;
  };
  projectDetail: {
    allProjects: string;
    highlights: string;
    techStack: string;
    github: string;
    liveDemo: string;
    privateRepo: string;
    inDevelopment: string;
    previous: string;
    next: string;
    notFound: string;
  };
  footer: {
    follow: string;
    thanks: string;
  };
  products: {
    title: string;
    comingSoon: string;
  };
  projects: {
    medly: ProjectCopy;
    plannify: ProjectCopy;
    denest: ProjectCopy;
    fixcore: ProjectCopy;
    aaf: ProjectCopy;
    finance: ProjectCopy;
  };
};

const en: Dictionary = {
  meta: {
    title: "Mike Balderas — Software Engineering Student",
    description:
      "Portfolio of Miguel Angel Balderas — Software Engineering student with full-stack web experience building and maintaining production systems.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    label: "Software Engineering Student",
    available: "Available for work",
    eyebrow: "Full Stack · Web · Product",
    body: "Software Engineering student with experience building full-stack web apps and maintaining systems in production environments.",
    contact: "Contact Me",
    resume: "Resume",
  },
  home: {
    about: "About",
    selectedWork: "Selected work",
    seeAll: "See all →",
  },
  aboutSnapshot: {
    body: "I'm looking to join a team where I can contribute with my technical skills, keep growing professionally, and help deliver real product goals—from clear interfaces to reliable production systems.",
    more: "More about me →",
    focus: [
      {
        title: "Design",
        body: "User-centered interfaces with clear navigation and intentional UX/UI decisions.",
      },
      {
        title: "Product",
        body: "Defining value propositions, main flows, and the models that make a product work.",
      },
      {
        title: "Code",
        body: "Full-stack web development, API integration, and systems that stay healthy in production.",
      },
    ],
  },
  aboutPage: {
    title: "About me",
    heading: "Hi — I'm Miguel Angel Balderas",
    body: "Software Engineering student with experience in full-stack web development and maintaining systems in production. I build clear, user-centered interfaces, integrate APIs, and care about shipping software that stays reliable once it's live.",
    howIWork: "How I work",
    experience: "Experience",
    steps: [
      {
        step: "01",
        title: "Discovery",
        body: "Understand the problem, the people, and the constraints before drawing a single screen.",
      },
      {
        step: "02",
        title: "Design",
        body: "Shape hierarchy, flows, and visual tone so the product feels intentional—not bolted together.",
      },
      {
        step: "03",
        title: "Build",
        body: "Ship solid full-stack foundations with the same care for usability, integration, and production readiness.",
      },
    ],
  },
  experience: {
    work: "Work",
    education: "Education",
    items: [
      {
        id: 1,
        title: "Technical Support & Web Development",
        company: "DHISA Industrial Tools Distributor — Querétaro",
        duration: "Sep 2022 — Nov 2025",
        description:
          "Maintained and updated the corporate website for availability and correct operation. Administered business email accounts and provided technical support to collaborators, resolving incidents related to systems and equipment.",
        skills: ["Web", "Support", "Email Admin", "IT Ops"],
        type: "work",
      },
      {
        id: 2,
        title: "Software Engineering",
        company: "Autonomous University of Querétaro — Faculty of Informatics",
        duration: "Jul 2022 — Present",
        description:
          "Bachelor's in Software Engineering (9th semester), focused on development methodologies, algorithms, and system design.",
        skills: ["TypeScript", "Python", "Java", "SQL"],
        type: "education",
      },
    ],
  },
  projectsPage: {
    title: "Projects",
    heading: "Selected work from production systems and products in progress.",
    body: "Interfaces, APIs, and product flows shaped around real problems—with a few apps still under development.",
  },
  projectDetail: {
    allProjects: "All projects",
    highlights: "Highlights",
    techStack: "Tech stack",
    github: "GitHub",
    liveDemo: "Live site",
    privateRepo: "Private project — repo not public.",
    inDevelopment: "In development",
    previous: "Previous",
    next: "Next",
    notFound: "Project Not Found",
  },
  footer: {
    follow: "Follow me",
    thanks: "Thanks for stopping by — Miguel Angel Balderas",
  },
  products: {
    title: "Products",
    comingSoon: "Coming soon.",
  },
  projects: {
    medly: {
      designation: "Medical consultation system",
      quote:
        "Medly is a system for medical consultations. I built the full frontend with user-centered design and solid UX/UI practices for clear, intuitive navigation—and integrated it with REST services while collaborating on the API and business logic.",
      role: "Frontend & API collaboration",
      highlights: [
        "Complete frontend with user-centered design and clear navigation",
        "REST API integration for a consistent client–server data flow",
        "Collaboration on endpoints and core business logic of the system",
      ],
    },
    plannify: {
      designation: "School planner",
      quote:
        "Plannify is a school planner product. I designed the business model and main usage flows, developed the frontend and API integration, and helped model the database entities and relationships that support the system.",
      role: "Product design & full-stack development",
      highlights: [
        "Product value proposition and primary application flows",
        "Frontend development and seamless API communication",
        "Database modeling of entities and relationships for the system logic",
      ],
    },
    denest: {
      designation: "Density estimation system",
      quote:
        "Denest is a density estimation system. I built the entire frontend with a focus on visual clarity and performance, and configured CI/CD integration and deployment rules to automate releases and reduce production errors.",
      role: "Frontend & CI/CD",
      highlights: [
        "Full frontend prioritizing visual clarity and interface performance",
        "CI/CD rules configured to automate the deployment pipeline",
        "Fewer production errors through a more reliable release process",
      ],
    },
    fixcore: {
      designation: "The repair workshop platform that scales with you",
      quote:
        "FixCore helps repair shops run orders, inventory, payments, and technicians from one modern dashboard—built for electronics, automotive, watches, and more.",
      role: "Product design & full-stack development",
      highlights: [
        "End-to-end repair order workflows from intake to delivery",
        "Mobile experience for technicians updating jobs on the floor",
        "Inventory alerts, payments, multi-user roles, and live reports",
      ],
    },
    aaf: {
      designation: "The storehouse of your love story",
      quote:
        "Always and Forever is a mobile app in development for couples to preserve and relive shared memories—from everyday moments to milestones.",
      role: "UI/UX design & mobile development",
      highlights: [],
    },
    finance: {
      designation: "The simple way to manage your money",
      quote:
        "Finance is a mobile app in development to track income, expenses, and card payments in one place—with clear due dates and simpler money management.",
      role: "Product design & mobile development",
      highlights: [],
    },
  },
};

export default en;
