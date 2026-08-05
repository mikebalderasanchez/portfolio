'use client';

import { useDictionary } from '@/components/locale-provider';
import { Reveal } from '@/components/motion/reveal';
import { localizeProjects } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function FeaturedProjects() {
  const dictionary = useDictionary();
  const projects = localizeProjects(dictionary);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (projects.length < 2) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(id);
  }, [projects.length]);

  return (
    <Reveal className="mt-8">
      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {projects.map((project, i) => {
          const isDev = project.status === 'development';

          return (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group -mx-2 flex items-center gap-4 rounded-xl px-2 py-5 transition-colors hover:bg-neutral-100/60 sm:gap-5 sm:py-6 dark:hover:bg-neutral-900/40"
              >
                <div
                  className={cn(
                    'relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.03] sm:size-16',
                    project.color,
                  )}
                >
                  {project.src ? (
                    <div className="relative size-9 sm:size-10">
                      <Image
                        src={project.src}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="40px"
                      />
                    </div>
                  ) : (
                    <span className="text-base font-semibold text-white/90">
                      {project.name.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                      {isDev
                        ? dictionary.projectDetail.inDevelopment
                        : project.role}
                    </p>
                  </div>
                  <h3 className="mt-0.5 truncate text-lg font-semibold tracking-tight sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="mt-0.5 truncate text-sm text-neutral-500 dark:text-neutral-400">
                    {project.designation}
                  </p>
                </div>

                <IconArrowNarrowRight className="size-4 shrink-0 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex gap-1.5">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            aria-label={p.name}
            onClick={() => setActive(i)}
            className={cn(
              'h-1 rounded-full transition-all duration-300',
              i === active
                ? 'w-6 bg-primary'
                : 'w-1 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700',
            )}
          />
        ))}
      </div>
    </Reveal>
  );
}
