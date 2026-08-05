'use client';

import { Button } from '@/components/animate-ui/components/buttons/button';
import {
  AmazonWebServices,
  Astro,
  BetterAuth,
  Bun,
  Cloudflare,
  CloudflareWorkers,
  CSharp,
  CSSNew,
  Dart,
  Docker,
  DrizzleORM,
  Expo,
  Figma,
  Flutter,
  Gemini,
  Git,
  GitHub,
  GoogleCloud,
  Hono,
  HTML5,
  Java,
  JavaScript,
  MongoDB,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Python,
  ReactLogo,
  Stripe,
  TailwindCSS,
  TypeScript,
  Vercel,
  Zod,
} from '@/components/langs';
import { useDictionary } from '@/components/locale-provider';
import { Title } from '@/components/title';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { SVGProps } from 'react';

type StickerIcon = (props: SVGProps<SVGSVGElement>) => React.ReactNode;

const STICKER_POOL: { id: string; Icon: StickerIcon }[] = [
  { id: 'ts', Icon: TypeScript },
  { id: 'react', Icon: ReactLogo },
  { id: 'figma', Icon: Figma },
  { id: 'next', Icon: Nextjs },
  { id: 'expo', Icon: Expo },
  { id: 'node', Icon: Nodejs },
  { id: 'github', Icon: GitHub },
  { id: 'docker', Icon: Docker },
  { id: 'python', Icon: Python },
  { id: 'aws', Icon: AmazonWebServices },
  { id: 'bun', Icon: Bun },
  { id: 'js', Icon: JavaScript },
  { id: 'html', Icon: HTML5 },
  { id: 'css', Icon: CSSNew },
  { id: 'git', Icon: Git },
  { id: 'gcp', Icon: GoogleCloud },
  { id: 'astro', Icon: Astro },
  { id: 'hono', Icon: Hono },
  { id: 'java', Icon: Java },
  { id: 'csharp', Icon: CSharp },
  { id: 'vercel', Icon: Vercel },
  { id: 'betterauth', Icon: BetterAuth },
  { id: 'mongodb', Icon: MongoDB },
  { id: 'postgres', Icon: PostgreSQL },
  { id: 'flutter', Icon: Flutter },
  { id: 'tailwind', Icon: TailwindCSS },
  { id: 'zod', Icon: Zod },
  { id: 'drizzle', Icon: DrizzleORM },
  { id: 'cfworkers', Icon: CloudflareWorkers },
  { id: 'cloudflare', Icon: Cloudflare },
  { id: 'gemini', Icon: Gemini },
  { id: 'stripe', Icon: Stripe },
  { id: 'dart', Icon: Dart },
];

const SLOT_COUNT = 6;
const CYCLE_MS = 2400;

const SLOTS = Array.from({ length: SLOT_COUNT }, (_, i) => {
  const angle = -12 + i * (360 / SLOT_COUNT);
  const radius = i % 2 === 0 ? 50 : 46;
  const rotate = i % 2 === 0 ? 10 : -12;
  return { angle, radius, rotate, delay: 0.08 * i };
});

function polar(angleDeg: number, radiusPct: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    left: `${50 + radiusPct * Math.cos(rad)}%`,
    top: `${50 + radiusPct * Math.sin(rad)}%`,
  };
}

function CyclingOrbit() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(STICKER_POOL.length / SLOT_COUNT);

  useEffect(() => {
    const id = setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [pageCount]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-md">
      <div className="absolute inset-[24%] rounded-4xl bg-white/40 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] dark:bg-neutral-950/30" />

      {SLOTS.map((slot, i) => {
        const index = (page * SLOT_COUNT + i) % STICKER_POOL.length;
        const sticker = STICKER_POOL[index];
        const pos = polar(slot.angle, slot.radius);
        const Icon = sticker.Icon;

        return (
          <div
            key={`slot-${i}`}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={pos}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`${sticker.id}-${page}`}
                initial={{ opacity: 0, scale: 0.55, rotate: slot.rotate - 18 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: slot.rotate,
                  y: [0, -4, 0],
                }}
                exit={{ opacity: 0, scale: 0.55, rotate: slot.rotate + 18 }}
                transition={{
                  opacity: { duration: 0.35, delay: i * 0.04 },
                  scale: { duration: 0.35, delay: i * 0.04 },
                  rotate: { duration: 0.35, delay: i * 0.04 },
                  y: {
                    duration: 3.8 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="rounded-2xl bg-white/90 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur-md dark:bg-neutral-900/90 dark:ring-white/10"
              >
                <Icon className="size-7 sm:size-8 md:size-9" />
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}

      <motion.div
        className="absolute inset-[28%] overflow-hidden rounded-[1.6rem] border-[5px] border-white shadow-2xl dark:border-neutral-800"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        <Image
          src="/profile.jpg"
          alt="Miguel Balderas"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, 380px"
          priority
        />
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { hero } = useDictionary();

  return (
    <section className="relative">
      <div className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-center sm:justify-between pt-0 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Title>{hero.label}</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-700" />
          </span>
          <span className="text-xs font-semibold tracking-wide text-emerald-800 uppercase">
            {hero.available}
          </span>
        </motion.div>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.05fr] md:gap-8 lg:gap-12">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-primary uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="text-[2.6rem] leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-[3.4rem]">
            Miguel
            <br />
            Balderas
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="mailto:mikebalderassanchez@gmail.com">{hero.contact}</a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="/CV_Miguel_Angel_Balderas.pdf" download>
                {hero.resume}
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <CyclingOrbit />
        </motion.div>
      </div>
    </section>
  );
}
