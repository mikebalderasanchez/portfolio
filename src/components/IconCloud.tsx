import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[50rem] items-center justify-end overflow-hidden rounded-lg bg-background pb-20 pt-8 animate-entering">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
