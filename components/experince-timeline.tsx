"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  type: "work" | "education" | "project";
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "TI Lead / Fullstack Developer",
    company: "DHISA Industrial Tools Distributor S.A. de C.V.",
    duration: "2024 - Present",
    description:
      "Overseeing IT operations and leading a team of developers to build and maintain fullstack applications. Implementing best practices for code quality and deployment.",
    skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    type: "work",
  },
  {
    id: 2,
    title: "Junior Fullstack Developer",
    company: "DHISA Industrial Tools Distributor S.A. de C.V.",
    duration: "2022 - 2024",
    description:
      "Developed and maintained web applications, contributing to both frontend and backend codebases. Worked closely with cross-functional teams to deliver high-quality software solutions.",
    skills: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
    type: "work",
  },
  {
    id: 3,
    title: "Software Engineer Degree",
    company: "Autonomous University of Queretaro",
    duration: "2022 - Present",
    description:
      "Bachelor in Software Engineering, focusing on software development methodologies, algorithms, and system design.",
    skills: ["Java", "Python", "Data Structures", "Algorithms"],
    type: "education",
  },
];

export function ExperienceTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress based on timeline position
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const startOffset = viewportHeight * 0.8;
      const endOffset = viewportHeight * 0.8;

      let progress = 0;
      if (timelineTop < startOffset) {
        const scrolled = startOffset - timelineTop;
        const totalScrollDistance = timelineHeight + startOffset - endOffset;
        progress = Math.min(scrolled / totalScrollDistance, 1);
      }

      setScrollProgress(Math.max(0, progress));

      // Check which items are visible
      const newVisibleItems = new Set<number>();
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top < viewportHeight * 0.8 &&
            rect.bottom > viewportHeight * 0.2
          ) {
            newVisibleItems.add(index);
          }
        }
      });
      setVisibleItems(newVisibleItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute top-0 bottom-0 left-8 flex justify-center">
        {/* Background line */}
        <div className="bg-border h-full w-2 rounded-full" />
        {/* Progress line */}
        <div
          className="bg-primary absolute top-0 w-2 rounded-full transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Timeline Items */}
      <div ref={timelineRef} className="space-y-12 pl-20">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="relative"
          >
            {/*<div
              className={`border-background absolute top-6 -left-[4.625rem] z-10 h-3 w-3 rounded-full border-2 transition-all duration-500 ${
                visibleItems.has(index)
                  ? "bg-primary shadow-primary/25 border-primary scale-125 shadow-lg"
                  : "bg-muted border-muted scale-100"
              }`}
            />*/}

            {/* Experience Card */}
            <Card
              className={`hover:bg-accent/5 bg-transparent transition-all duration-700 hover:shadow-lg ${
                visibleItems.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-60"
              }`}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-foreground mb-1 text-xl font-bold">
                      {experience.title}
                    </h3>
                    <p className="text-primary mb-2 text-lg font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        experience.type === "work" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {experience.type}
                    </Badge>
                    <span className="text-muted-foreground text-sm font-medium">
                      {experience.duration}
                    </span>
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed text-pretty">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground text-xs transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
