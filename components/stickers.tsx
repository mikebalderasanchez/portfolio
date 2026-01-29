import {
  AmazonWebServices,
  CSharp,
  CSSNew,
  Docker,
  Expo,
  Git,
  GoogleCloud,
  HTML5,
  Java,
  JavaScript,
  Python,
  ReactLogo,
  TypeScript,
  GitHub,
  Bun,
  Nodejs,
  Figma,
  Hono,
  Nextjs,
  Astro,
} from "@/components/langs";

export function Stickers() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <TypeScript key="typescript" className="absolute -top-20 -left-40 hidden size-14 rotate-12 animate-[fade-in_.5s_ease-in_forwards] drop-shadow md:block" />
      <JavaScript key="javascript" className="absolute hidden size-14 -rotate-12 animate-[fade-in_.7s_ease-in_forwards] drop-shadow md:block" />
      <ReactLogo key="react" className="absolute top-20 -left-40 hidden size-14 -rotate-12 animate-[fade-in_.9s_ease-in_forwards] drop-shadow md:block" />
      <HTML5 key="html5" className="absolute top-40 hidden size-14 rotate-12 animate-[fade-in_1.1s_ease-in_forwards] drop-shadow md:block" />
      <CSSNew key="css" className="absolute top-60 -left-40 hidden size-14 rotate-12 animate-[fade-in_1.3s_ease-in_forwards] drop-shadow md:block" />
      <GitHub key="github" className="absolute top-80 hidden size-14 -rotate-12 animate-[fade-in_1.5s_ease-in_forwards] drop-shadow md:block" />
      <GoogleCloud key="google-cloud" className="absolute top-100 -left-40 hidden size-14 -rotate-12 animate-[fade-in_1.7s_ease-in_forwards] drop-shadow md:block" />
      <Figma key="figma" className="absolute top-120 hidden size-14 rotate-12 animate-[fade-in_1.9s_ease-in_forwards] drop-shadow md:block" />
      <Bun key="bun" className="absolute top-140 -left-40 hidden size-14 rotate-12 animate-[fade-in_2.1s_ease-in_forwards] drop-shadow md:block" />
      <Hono key="hono" className="absolute top-160 hidden size-14 rotate-12 animate-[fade-in_2.3s_ease-in_forwards] drop-shadow md:block" />


      <Python key="python" className="absolute -top-20 -right-40 hidden size-14 -rotate-12 animate-[fade-in_.5s_ease-in_forwards] drop-shadow md:block" />
      <Expo key="expo" className="absolute right-0 hidden size-14 -rotate-12 animate-[fade-in_.7s_ease-in_forwards] drop-shadow md:block" />
      <Java key="java" className="absolute top-20 -right-40 hidden size-14 rotate-12 animate-[fade-in_.9s_ease-in_forwards] drop-shadow md:block" />
      <CSharp key="csharp" className="absolute right-0 top-40 hidden size-14 rotate-12 animate-[fade-in_1.1s_ease-in_forwards] drop-shadow md:block" />
      <Docker key="docker" className="absolute top-60 -right-40 hidden size-14 -rotate-12 animate-[fade-in_1.3s_ease-in_forwards] drop-shadow md:block" />
      <Git key="git" className="absolute right-0 top-80 hidden size-14 -rotate-12 animate-[fade-in_1.5s_ease-in_forwards] drop-shadow md:block" />
      <AmazonWebServices key="aws" className="absolute top-100 -right-40 hidden size-14 rotate-12 animate-[fade-in_1.7s_ease-in_forwards] drop-shadow md:block" />
      <Nodejs key="nodejs" className="absolute top-120 right-0 hidden size-14 -rotate-12 animate-[fade-in_1.9s_ease-in_forwards] drop-shadow md:block" />
      <Nextjs key="nextjs" className="absolute top-140 -right-40 hidden size-14 -rotate-12 animate-[fade-in_2.1s_ease-in_forwards] drop-shadow md:block" />
      <Astro key="astro" className="absolute top-160 right-0 hidden size-14 -rotate-12 animate-[fade-in_2.3s_ease-in_forwards] drop-shadow md:block" />
    </div>
  );
}
