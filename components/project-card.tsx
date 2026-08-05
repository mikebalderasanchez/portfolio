'use client';

import { useDictionary } from '@/components/locale-provider';
import { TechTags } from '@/components/tech-tags';
import { type Project } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

function ProjectThumb({
  project,
  sizeClass,
  imgClass,
}: {
  project: Project;
  sizeClass: string;
  imgClass: string;
}) {
  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]',
        sizeClass,
        project.color,
      )}
    >
      {project.src ? (
        <div className={cn('relative', imgClass)}>
          <Image
            src={project.src}
            alt=""
            fill
            className="object-contain"
            sizes="48px"
          />
        </div>
      ) : (
        <span className="text-lg font-semibold text-white/90 sm:text-xl">
          {project.name.charAt(0)}
        </span>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
  className,
}: ProjectCardProps) {
  const { projectDetail } = useDictionary();
  const number = String(index + 1).padStart(2, '0');
  const isDev = project.status === 'development';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group block outline-none"
      >
        <article className="grid items-center gap-5 border-t border-neutral-200 py-8 transition-colors sm:grid-cols-[auto_1fr_auto] sm:gap-8 md:py-10 dark:border-neutral-800">
          <span className="text-xs font-medium tabular-nums tracking-[0.16em] text-neutral-400">
            {number}
          </span>

          <div className="flex min-w-0 items-center gap-5 sm:gap-6">
            <ProjectThumb
              project={project}
              sizeClass="size-16 sm:size-20"
              imgClass="size-11 sm:size-12"
            />

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                  {project.role}
                </p>
                {isDev ? (
                  <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
                    {projectDetail.inDevelopment}
                  </span>
                ) : null}
              </div>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                {project.name}
              </h2>
              <p className="mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
                {project.designation}
              </p>
              <div className="mt-3 hidden sm:block">
                <TechTags techs={project.techs} />
              </div>
            </div>
          </div>

          <IconArrowNarrowRight className="hidden size-5 shrink-0 text-neutral-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary sm:block" />
        </article>
      </Link>
    </motion.div>
  );
}
