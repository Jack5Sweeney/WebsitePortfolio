import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectClientView from "../../components/ProjectClientView";
import { projects } from "../../data/projectData";
import Footer from "../../components/Footer";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects[params.slug];
  return {
    title: project ? `${project.title} | Jack Sweeney` : "Project Not Found",
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects[params.slug];
  if (!project) return notFound();
  return (
    <>
      <ProjectClientView {...project} />
      <Footer /> {/* ✅ Add footer only once here */}
    </>
  );
}
