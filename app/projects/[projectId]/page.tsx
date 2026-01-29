"use client";

import { Footer } from "@/components/footer";
import { Stickers } from "@/components/stickers";
import { Title } from "@/components/title";
import { projects } from "@/constants/projects";
import { useParams } from "next/navigation";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="relative w-full">
        <div className="animate-fade-in mx-auto mt-24 mb-4 w-full rounded-2xl p-6 md:w-4xl md:px-4 md:py-8">
          <div className="md:px-8">
            <Title>Project Not Found</Title>
          </div>
          <section className="mt-8 flex flex-col items-start gap-6 md:flex-row md:gap-20 md:px-8">
            <p className="text-lg text-neutral-600">
              The project you are looking for does not exist.
            </p>
          </section>
          <Footer />
        </div>
        <Stickers />
      </main>
    );
  }

  return (
    <main className="relative w-full">
      <div className="animate-fade-in mx-auto mt-24 mb-4 w-full rounded-2xl p-6 md:w-4xl md:px-4 md:py-8">
        <div className="md:px-8">
          <Title>{project.name}</Title>
          <p className=" text-neutral-600 mt-2">
            {project.designation}
          </p>
        </div>

        <section className="mt-4 flex flex-col items-start gap-2 md:px-8">
          <p className="text-neutral-600">
            {project.quote}
          </p>
          <p className="text-neutral-600">Tech stack</p>
          <div className="mb-4 flex gap-2">
            {project.techs.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </div>
          <p className="text-neutral-600">Repositorio</p>
          <a href={project.github} className="text-blue-500 hover:underline">
            {project.github}
          </a>
        </section>
        <Footer />
      </div>
      <Stickers />
    </main>
  );
}
