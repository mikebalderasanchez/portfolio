'use client';

import { useDictionary } from '@/components/locale-provider';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

export function ExperienceTimeline() {
  const { experience } = useDictionary();

  return (
    <ol className="relative space-y-14">
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-px bg-neutral-200 md:left-[9px] dark:bg-neutral-800"
      />

      {experience.items.map((item, index) => (
        <li key={item.id} className="relative pl-8 md:pl-10">
          <span
            aria-hidden
            className={cn(
              'absolute top-2 left-0 flex size-[15px] items-center justify-center rounded-full md:size-[19px]',
              'bg-[#f8f8ff] dark:bg-neutral-950',
            )}
          >
            <span
              className={cn(
                'size-2 rounded-full md:size-2.5',
                item.type === 'work' ? 'bg-primary' : 'bg-neutral-400',
              )}
            />
          </span>

          <Reveal delay={index * 0.08} className="pb-20 last:pb-0 md:pb-24">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                  {item.type === 'work'
                    ? experience.work
                    : experience.education}
                </p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {item.company}
                </p>
              </div>
              <time className="shrink-0 text-sm font-medium tabular-nums text-neutral-400">
                {item.duration}
              </time>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {item.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {item.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-xs font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
