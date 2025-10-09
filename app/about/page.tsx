import { Footer } from "@/components/footer";
import { Title } from "@/components/title";
import Image from "next/image";
import { Stickers } from "@/components/stickers";
import { ExperienceTimeline } from "@/components/experince-timeline";

export default function About() {
  return (
    <main className="relative w-full">
      <div className="animate-fade-in mx-auto mt-24 mb-4 w-full rounded-2xl p-6 md:w-4xl md:px-4 md:py-8">
        <div className="md:px-8">
          <Title>About Me</Title>
        </div>
        <section className="mt-8 flex flex-col items-center gap-6 md:flex-row md:gap-20 md:px-8">
          <div>
            <h2 className="text-4xl font-bold">
              Hi! I'm Miguel Angel Balderas
            </h2>
            <p className="mt-2 text-lg text-neutral-600">
              I'm a passionate software engineer with over 2 years of experience
              in developing high-quality web and mobile applications. I love
              creating efficient, scalable, and user-friendly solutions that
              solve real-world problems.
            </p>
          </div>
          <Image
            src="/profile.jpg"
            alt="Profile image"
            width={250}
            height={250}
            className="w-full rounded-3xl border-8 border-neutral-200 object-cover md:w-auto"
          />
        </section>
        <div className="mt-12 md:px-8">
          <Title>Experience</Title>
        </div>
        <section className="relative mt-8 md:px-8">
          <ExperienceTimeline />
        </section>
        <Footer />
      </div>
      <Stickers />
    </main>
  );
}
