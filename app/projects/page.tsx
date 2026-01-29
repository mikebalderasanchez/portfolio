import { Footer } from "@/components/footer";
import { Title } from "@/components/title";
import { Stickers } from "@/components/stickers";
import { projects } from "@/constants/projects";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="relative w-full">
      <div className="relative mx-auto max-w-6xl">
        <Stickers />
      </div>
      <div className="animate-fade-in mx-auto mt-24 mb-4 w-full rounded-2xl p-6 md:w-4xl">
        <div className="md:px-8">
          <Title>My projects</Title>
        </div>
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 px-0 md:px-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.name}>
              <Card className="gap-2 overflow-hidden bg-transparent p-0 transition-transform hover:scale-105">
                <div className={`${project.color} w-full p-0`}>
                  <Image
                    src={project.src}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="mx-auto size-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <CardTitle className="mb-2 text-lg">{project.name}</CardTitle>
                  <div className="mb-4 flex gap-2">
                    {project.techs.map((tech, index) => (
                      <div key={index}>{tech}</div>
                    ))}
                  </div>
                  <CardDescription>{project.designation}</CardDescription>
                </div>
              </Card>
            </Link>
          ))}
        </section>
        <Footer />
      </div>
    </main>
  );
}
