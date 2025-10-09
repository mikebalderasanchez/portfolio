import { Expo, GoogleCloud, ReactLogo, TypeScript } from "@/components/langs";
import { ReactNode } from "react";

export const projects: {
  id: string;
  quote: string;
  name: string;
  designation: string;
  src: string;
  color: string;
  techs: ReactNode[];
}[] = [
  {
    id: "plannify",
    quote:
      "Plannify is an app that simplifies your academic life. Just scan your school schedule and the app will help you manage tasks, projects, and exams, keeping you on track",
    name: "Plannify",
    designation: "Your school ally in the palm of your hand",
    src: "/projects/plannify.png",
    color: "bg-[#000080]",
    techs: [<ReactLogo key="react" />, <Expo key="expo" />, <TypeScript key="typescript" />, <GoogleCloud key="google-cloud" />],
  },
  {
    id: "aaf",
    quote:
      "Always and Forever is an app designed to preserve your most cherished memories as a couple. It’s the perfect digital space to collect and relive your shared journey, from the smallest moments to the biggest milestones",
    name: "Always and Forever",
    designation: "The storehouse of your love story",
    src: "/projects/aaf.png",
    color: "bg-[#ff0000]",
    techs: [<ReactLogo key="react" />, <Expo key="expo" />, <TypeScript key="typescript" />, <GoogleCloud key="google-cloud" />],
  },
  {
    id: "finance",
    quote:
      "Keep track of your income, expenses, and card payments in one place. View your due dates, schedule payments, and avoid debt without complications.",
    name: "Finance",
    designation: "The simple way to manage your money",
    src: "/projects/finance.png",
    color: "bg-[#000090]",
    techs: [<ReactLogo key="react" />, <Expo key="expo" />, <TypeScript key="typescript" />, <GoogleCloud key="google-cloud" />],
  },
];
