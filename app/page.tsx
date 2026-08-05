'use client';

import { AboutSnapshot } from "@/components/about-snapshot";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { useDictionary } from "@/components/locale-provider";
import { PageShell } from "@/components/page-shell";
import { Title } from "@/components/title";
import Link from "next/link";

export default function Home() {
  const dictionary = useDictionary();

  return (
    <PageShell>
      <Hero />

      <section className="mt-24 md:mt-32">
        <Title>{dictionary.home.about}</Title>
        <AboutSnapshot />
      </section>

      <section className="mt-24 md:mt-32">
        <div className="flex items-end justify-between gap-4">
          <Title>{dictionary.home.selectedWork}</Title>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {dictionary.home.seeAll}
          </Link>
        </div>
        <FeaturedProjects />
      </section>

      <Footer />
    </PageShell>
  );
}
