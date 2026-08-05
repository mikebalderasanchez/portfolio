'use client';

import { Footer } from "@/components/footer";
import { useDictionary } from "@/components/locale-provider";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";
import { PageShell } from "@/components/page-shell";
import { Title } from "@/components/title";
import { localizeProjects } from "@/constants/projects";

export default function Projects() {
  const dictionary = useDictionary();
  const projects = localizeProjects(dictionary);

  return (
    <PageShell>
      <Title>{dictionary.projectsPage.title}</Title>
      <Reveal>
        <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          {dictionary.projectsPage.heading}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          {dictionary.projectsPage.body}
        </p>
      </Reveal>

      <section className="mt-10 md:mt-14">
        <div className="border-b border-neutral-200 dark:border-neutral-800">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}
