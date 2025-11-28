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
    <>
      <TypeScript key="typescript" className="fixed top-10 left-10 hidden size-14 rotate-12 animate-[fade-in_.5s_ease-in_forwards] drop-shadow md:block" />
      <JavaScript key="javascript" className="fixed top-30 left-50 hidden size-14 -rotate-12 animate-[fade-in_.7s_ease-in_forwards] drop-shadow md:block" />
      <ReactLogo key="react" className="fixed top-50 left-10 hidden size-14 -rotate-12 animate-[fade-in_.9s_ease-in_forwards] drop-shadow md:block" />
      <HTML5 key="html5" className="fixed top-70 left-50 hidden size-14 rotate-12 animate-[fade-in_1.1s_ease-in_forwards] drop-shadow md:block" />
      <CSSNew key="css" className="fixed top-90 left-20 hidden size-14 rotate-12 animate-[fade-in_1.3s_ease-in_forwards] drop-shadow md:block" />
      <GitHub key="github" className="fixed top-110 left-50 hidden size-14 -rotate-12 animate-[fade-in_1.5s_ease-in_forwards] drop-shadow md:block" />
      <GoogleCloud key="google-cloud" className="fixed top-130 left-10 hidden size-14 -rotate-12 animate-[fade-in_1.7s_ease-in_forwards] drop-shadow md:block" />
      <Figma key="figma" className="fixed top-150 left-50 hidden size-14 rotate-12 animate-[fade-in_1.9s_ease-in_forwards] drop-shadow md:block" />
      <Bun key="bun" className="fixed top-170 left-20 hidden size-14 rotate-12 animate-[fade-in_2.1s_ease-in_forwards] drop-shadow md:block" />
      <Hono key="hono" className="fixed top-190 left-50 hidden size-14 rotate-12 animate-[fade-in_2.3s_ease-in_forwards] drop-shadow md:block" />
      <Python key="python" className="fixed top-10 right-50 hidden size-14 -rotate-12 animate-[fade-in_.5s_ease-in_forwards] drop-shadow md:block" />
      <Expo key="expo" className="fixed top-30 right-10 hidden size-14 -rotate-12 animate-[fade-in_.7s_ease-in_forwards] drop-shadow md:block" />
      <Java key="java" className="fixed top-50 right-50 hidden size-14 rotate-12 animate-[fade-in_.9s_ease-in_forwards] drop-shadow md:block" />
      <CSharp key="csharp" className="fixed top-70 right-30 hidden size-14 rotate-12 animate-[fade-in_1.1s_ease-in_forwards] drop-shadow md:block" />
      <Docker key="docker" className="fixed top-90 right-50 hidden size-14 -rotate-12 animate-[fade-in_1.3s_ease-in_forwards] drop-shadow md:block" />
      <Git key="git" className="fixed top-110 right-10 hidden size-14 -rotate-12 animate-[fade-in_1.5s_ease-in_forwards] drop-shadow md:block" />
      <AmazonWebServices key="aws" className="fixed top-130 right-50 hidden size-14 rotate-12 animate-[fade-in_1.7s_ease-in_forwards] drop-shadow md:block" />
      <Nodejs key="nodejs" className="fixed top-150 right-30 hidden size-14 -rotate-12 animate-[fade-in_1.9s_ease-in_forwards] drop-shadow md:block" />
      <Nextjs key="nextjs" className="fixed top-170 right-50 hidden size-14 -rotate-12 animate-[fade-in_2.1s_ease-in_forwards] drop-shadow md:block" />
      <Astro key="astro" className="fixed top-190 right-10 hidden size-14 -rotate-12 animate-[fade-in_2.3s_ease-in_forwards] drop-shadow md:block" />
    </>
  );
}
