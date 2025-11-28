import { Button } from "@/components/animate-ui/components/buttons/button";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { products } from "@/constants/products";
import { projects } from "@/constants/projects";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Stickers } from "@/components/stickers";

export default function Home() {
  const cards = products.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="relative w-full">
      <div className="animate-fade-in mx-auto mt-12 md:mt-24 mb-4 w-full p-4 md:w-4xl md:px-4 md:py-8">
        <section className="md:px-4">
          <div className="mb-5 flex flex-col items-start justify-between md:mb-10 md:flex-row">
            <Title>Software Engineer</Title>
            <div className="ml-auto flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1">
              <span className="size-0 rounded-full bg-emerald-800 md:size-2" />
              <span className="text-xs font-semibold text-emerald-800 md:text-sm">
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                I'm Miguel Balderas
              </h2>
              <p className="text-lg text-neutral-600 md:text-lg">
                Full Stack Developer. Specialized in
                <br /> multiplatform application development
              </p>
              <div className="mt-6 flex gap-2 md:gap-4">
                <Button>Contact Me</Button>
                <Button variant="outline">Resume</Button>
              </div>
            </div>
            <div>
              <Image
                src="/profile.jpg"
                alt="Image profile"
                width={200}
                height={200}
                className="rounded-4xl border-8 border-neutral-200 object-cover md:size-64 size-64"
              />
            </div>
          </div>
        </section>
        <Section>
          <div className="flex items-center justify-between">
            <Title>Projects</Title>
            <Button variant="outline" asChild>
              <Link href="/projects">
                See all
                <IconArrowNarrowRight />
              </Link>
            </Button>
          </div>
          <AnimatedTestimonials testimonials={projects} autoplay />
        </Section>
        {/*<Section>
          <div className="flex items-center justify-between">
            <Title>Products</Title>
            <Button variant="outline" asChild>
              <Link href="/products">
                See all <IconArrowNarrowRight />
              </Link>
            </Button>
          </div>
          <Carousel items={cards} />
        </Section>*/}
        <Footer />
      </div>
      <Stickers />
    </main>
  );
}
