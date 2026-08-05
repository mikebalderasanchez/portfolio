import { ProjectDetailView } from "./project-detail-view";
import { localizeProject, projectBases } from "@/constants/projects";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ projectId: string }>;
};

export function generateStaticParams() {
  return projectBases.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { projectId } = await params;
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const project = localizeProject(projectId, dictionary);
  if (!project) return { title: dictionary.projectDetail.notFound };
  return {
    title: `${project.name} — Miguel Balderas`,
    description: project.designation,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { projectId } = await params;
  const exists = projectBases.some((p) => p.id === projectId);
  if (!exists) notFound();

  return <ProjectDetailView />;
}
