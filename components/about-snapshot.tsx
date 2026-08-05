'use client';

import { useDictionary } from '@/components/locale-provider';
import { Reveal } from '@/components/motion/reveal';
import Link from 'next/link';

export function AboutSnapshot() {
  const { aboutSnapshot } = useDictionary();

  return (
    <div className="mt-8 space-y-10">
      <Reveal>
        <p className="max-w-2xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
          {aboutSnapshot.body}
        </p>
        <Link
          href="/about"
          className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {aboutSnapshot.more}
        </Link>
      </Reveal>

      <div className="grid gap-0 sm:grid-cols-3">
        {aboutSnapshot.focus.map((item, i) => (
          <Reveal key={item.title} delay={0.08 * i}>
            <div className="border-t border-neutral-200 py-6 pr-6 sm:border-t-0 sm:border-l sm:border-neutral-200 sm:py-0 sm:pl-6 sm:first:border-l-0 sm:first:pl-0 dark:border-neutral-800">
              <span className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
