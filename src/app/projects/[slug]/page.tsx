import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectClientView from "../../components/ProjectClientView";
import { getAllProjects } from "../../data/projectData";
import Footer from "../../components/Footer";

// ✅ Optional: Static generation
export async function generateStaticParams() {
  const projects = getAllProjects();
  return Object.keys(projects).map((slug) => ({ slug }));
}

// ✅ Metadata - now async and awaits params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // ✅ await params first
  const projects = getAllProjects();
  const project = projects[slug];
  return {
    title: project ? `${project.title} | Jack Sweeney` : "Project Not Found",
  };
}

// ✅ Main page function - now async and awaits params
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ await params first
  const project = getAllProjects()[slug];
  if (!project) return notFound();

  return (
    <>
      <ProjectClientView {...project} />
      <Footer />
    </>
  );
}