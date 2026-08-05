'use client';

import { Footer } from "@/components/footer";
import { ExperienceTimeline } from "@/components/experince-timeline";
import { useDictionary } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { PageShell } from "@/components/page-shell";
import { Title } from "@/components/title";
import Image from "next/image";

export default function About() {
  const dictionary = useDictionary();
  const { aboutPage } = dictionary;

  return (
    <PageShell>
      <Title>{aboutPage.title}</Title>

      <section className="mt-10 grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {aboutPage.heading}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            {aboutPage.body}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[1.75rem] border-[6px] border-white shadow-xl dark:border-neutral-800">
            <Image
              src="/profile.jpg"
              alt="Miguel Angel Balderas"
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </div>
        </Reveal>
      </section>

      <section className="mt-20 md:mt-28">
        <Title>{aboutPage.howIWork}</Title>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {aboutPage.steps.map((item, i) => (
            <Reveal key={item.step} delay={0.08 * i}>
              <div className="border-t border-neutral-200 pt-5 dark:border-neutral-800">
                <span className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <Title>{aboutPage.experience}</Title>
        <div className="relative mt-10">
          <ExperienceTimeline />
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}
