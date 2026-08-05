import type { Dictionary } from "@/i18n/dictionaries/en";

export type ProjectId =
  | "medly"
  | "plannify"
  | "denest"
  | "fixcore"
  | "aaf"
  | "finance";

export type ProjectStatus = "shipped" | "development";

export type ProjectBase = {
  id: ProjectId;
  name: string;
  src?: string;
  color: string;
  techs: string[];
  status: ProjectStatus;
  github?: string;
  url?: string;
};

export type Project = ProjectBase & {
  quote: string;
  designation: string;
  role: string;
  highlights: string[];
};

/** Shared base languages across every project. */
const CORE = ["TypeScript", "SQL", "Dart"] as const;

export const projectBases: ProjectBase[] = [
  {
    id: "medly",
    name: "Medly",
    src: "/projects/medly.png",
    color: "bg-[#2B8FEC]",
    status: "shipped",
    techs: [
      ...CORE,
      "Next.js",
      "Vercel",
      "ElevenLabs",
      "HonoJS",
      "Better Auth",
      "MongoDB",
    ],
    url: "https://medly.interscode.com",
  },
  {
    id: "plannify",
    name: "Plannify",
    src: "/projects/plannify.png",
    color: "bg-[#000080]",
    status: "shipped",
    techs: [
      ...CORE,
      "PostgreSQL",
      "Better Auth",
      "Flutter",
      "HonoJS",
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "Drizzle ORM",
      "Cloudflare Workers",
      "Gemini",
    ],
    github: "https://github.com/interscode/plannify",
    url: "https://plannify.app",
  },
  {
    id: "denest",
    name: "Denest",
    src: "/projects/denest.png",
    color: "bg-[#773BFF]",
    status: "shipped",
    techs: [
      ...CORE,
      "Docker",
      "Docker Compose",
      "PostgreSQL",
      "Drizzle ORM",
      "Next.js",
    ],
  },
  {
    id: "fixcore",
    name: "FixCore",
    src: "/projects/fixcore.png",
    color: "bg-[#073EE9]",
    status: "shipped",
    techs: [
      ...CORE,
      "PostgreSQL",
      "Better Auth",
      "Flutter",
      "HonoJS",
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "Drizzle ORM",
      "Cloudflare R2",
      "Cloudflare Workers",
      "Stripe",
    ],
    url: "https://fix.aevocore.com",
  },
  {
    id: "aaf",
    name: "Always and Forever",
    src: "/projects/aaf.png",
    color: "bg-[#ff0000]",
    status: "development",
    techs: [
      ...CORE,
      "PostgreSQL",
      "Better Auth",
      "Flutter",
      "HonoJS",
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "Drizzle ORM",
      "Cloudflare R2",
      "Cloudflare Workers",
    ],
  },
  {
    id: "finance",
    name: "Finance",
    src: "/projects/finance.png",
    color: "bg-[#000090]",
    status: "development",
    techs: [
      ...CORE,
      "PostgreSQL",
      "Better Auth",
      "Flutter",
      "HonoJS",
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "Drizzle ORM",
      "Cloudflare Workers",
    ],
  },
];

export function localizeProjects(dictionary: Dictionary): Project[] {
  return projectBases.map((base) => ({
    ...base,
    ...dictionary.projects[base.id],
  }));
}

export function localizeProject(
  id: string,
  dictionary: Dictionary,
): Project | undefined {
  const base = projectBases.find((p) => p.id === id);
  if (!base) return undefined;
  return { ...base, ...dictionary.projects[base.id] };
}

/** Static list for generateStaticParams */
export const projects = projectBases;
