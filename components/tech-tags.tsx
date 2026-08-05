'use client';

import {
  BetterAuth,
  Cloudflare,
  CloudflareWorkers,
  Dart,
  Docker,
  DrizzleORM,
  Flutter,
  Gemini,
  Hono,
  MongoDB,
  Nextjs,
  PostgreSQL,
  Stripe,
  TailwindCSS,
  TypeScript,
  Vercel,
  Zod,
} from '@/components/langs';
import { cn } from '@/lib/utils';
import type { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** Techs with an icon component available in `components/langs`. */
const TECH_ICONS: Record<string, IconComponent> = {
  TypeScript,
  Dart,
  PostgreSQL,
  MongoDB,
  'Next.js': Nextjs,
  HonoJS: Hono,
  Docker,
  'Docker Compose': Docker,
  'Better Auth': BetterAuth,
  Flutter,
  'Tailwind CSS': TailwindCSS,
  Zod,
  'Drizzle ORM': DrizzleORM,
  'Cloudflare Workers': CloudflareWorkers,
  'Cloudflare R2': Cloudflare,
  Cloudflare,
  Stripe,
  Vercel,
  Gemini,
};

export function TechTags({
  techs,
  className,
}: {
  techs: string[];
  className?: string;
}) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-1.5', className)}>
      {techs.map((tech) => {
        const Icon = TECH_ICONS[tech];

        if (Icon) {
          return (
            <li key={tech} title={tech} className="flex size-5 items-center">
              <Icon className="size-full" />
            </li>
          );
        }

        return (
          <li
            key={tech}
            className="rounded-md border border-dashed border-neutral-300 bg-white/70 px-2 py-0.5 text-[11px] font-medium tracking-wide text-neutral-500 dark:border-neutral-700 dark:bg-neutral-950/50 dark:text-neutral-400"
            title="Icon pending — add to langs"
          >
            {tech}
          </li>
        );
      })}
    </ul>
  );
}
