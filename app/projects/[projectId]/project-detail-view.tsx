'use client';

import { Button } from "@/components/animate-ui/components/buttons/button";
import { Footer } from "@/components/footer";
import { useDictionary } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { PageShell } from "@/components/page-shell";
import { TechTags } from "@/components/tech-tags";
import { Title } from "@/components/title";
import { localizeProject, projectBases } from "@/constants/projects";
import { cn } from "@/lib/utils";
import {
  IconArrowLeft,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export function ProjectDetailView() {
  const params = useParams<{ projectId: string }>();
  const dictionary = useDictionary();
  const project = localizeProject(params.projectId, dictionary);

  if (!project) {
    notFound();
  }

  const index = projectBases.findIndex((p) => p.id === project.id);
  const number = String(index + 1).padStart(2, "0");
  const prevBase = index > 0 ? projectBases[index - 1] : null;
  const nextBase =
    index < projectBases.length - 1 ? projectBases[index + 1] : null;
  const prev = prevBase ? localizeProject(prevBase.id, dictionary) : null;
  const next = nextBase ? localizeProject(nextBase.id, dictionary) : null;
  const t = dictionary.projectDetail;
  const isDev = project.status === "development";
  const showLinks = !isDev && (project.url || project.github);
  const showHighlights = !isDev && project.highlights.length > 0;

  return (
    <PageShell>
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-foreground"
      >
        <IconArrowLeft className="size-4" />
        {t.allProjects}
      </Link>

      <section className="grid items-start gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
        <Reveal>
          <div
            className={cn(
              "relative flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:size-32 md:size-36",
              project.color,
            )}
          >
            {project.src ? (
              <div className="relative size-16 sm:size-20">
                <Image
                  src={project.src}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>
            ) : (
              <span className="text-4xl font-semibold text-white/90">
                {project.name.charAt(0)}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-wrap items-center gap-3">
            <Title>{project.name}</Title>
            <span className="text-xs tabular-nums tracking-[0.14em] text-neutral-400">
              {number}
            </span>
            {isDev ? (
              <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
                {t.inDevelopment}
              </span>
            ) : null}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {project.designation}
          </h1>
          <p className="mt-3 text-xs font-medium tracking-[0.14em] text-primary uppercase">
            {project.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-300">
            {project.quote}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {!isDev ? <TechTags techs={project.techs} /> : null}
            {showLinks && project.url ? (
              <Button asChild size="sm">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <IconExternalLink className="size-4" />
                  {t.liveDemo}
                </a>
              </Button>
            ) : null}
            {showLinks && project.github ? (
              <Button asChild size="sm" variant="outline">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub className="size-4" />
                  {t.github}
                </a>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </section>

      {showHighlights ? (
        <section className="mt-16 border-t border-neutral-200 pt-10 md:mt-20 dark:border-neutral-800">
          <Reveal>
            <h2 className="text-xs font-medium tracking-[0.16em] text-neutral-900 uppercase dark:text-neutral-100">
              {t.highlights}
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {project.highlights.map((item, i) => (
              <Reveal key={item} delay={0.06 * i}>
                <li className="border-t border-neutral-200 pt-4 dark:border-neutral-800">
                  <span className="text-xs font-medium tabular-nums tracking-[0.14em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base dark:text-neutral-300">
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      ) : (
        <section className="mt-16 border-t border-neutral-200 pt-10 md:mt-20 dark:border-neutral-800">
          <Reveal>
            <h2 className="text-xs font-medium tracking-[0.16em] text-neutral-900 uppercase dark:text-neutral-100">
              {t.techStack}
            </h2>
            <div className="mt-5">
              <TechTags techs={project.techs} />
            </div>
          </Reveal>
        </section>
      )}

      {(prev || next) && (
        <nav className="mt-16 grid gap-4 border-t border-neutral-200 pt-10 sm:grid-cols-2 md:mt-20 dark:border-neutral-800">
          {prev ? (
            <Link
              href={`/projects/${prev.id}`}
              className="group flex items-center gap-4 rounded-xl py-1 transition-colors"
            >
              <div
                className={cn(
                  "relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                  prev.color,
                )}
              >
                {prev.src ? (
                  <div className="relative size-7">
                    <Image
                      src={prev.src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="28px"
                    />
                  </div>
                ) : (
                  <span className="text-sm font-semibold text-white/90">
                    {prev.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-medium tracking-[0.14em] text-neutral-400 uppercase">
                  <IconArrowNarrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                  {t.previous}
                </span>
                <p className="mt-0.5 font-semibold tracking-tight group-hover:text-primary">
                  {prev.name}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className="group flex items-center gap-4 rounded-xl py-1 transition-colors sm:justify-end"
            >
              <div className="text-left sm:text-right">
                <span className="inline-flex items-center gap-1 text-xs font-medium tracking-[0.14em] text-neutral-400 uppercase">
                  {t.next}
                  <IconArrowNarrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <p className="mt-0.5 font-semibold tracking-tight group-hover:text-primary">
                  {next.name}
                </p>
              </div>
              <div
                className={cn(
                  "relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                  next.color,
                )}
              >
                {next.src ? (
                  <div className="relative size-7">
                    <Image
                      src={next.src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="28px"
                    />
                  </div>
                ) : (
                  <span className="text-sm font-semibold text-white/90">
                    {next.name.charAt(0)}
                  </span>
                )}
              </div>
            </Link>
          ) : null}
        </nav>
      )}

      <Footer />
    </PageShell>
  );
}
