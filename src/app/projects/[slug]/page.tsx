
import ProjectDetailPageUltra from '@/components/projects/project-detail-ultra';
import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return <ProjectDetailPageUltra project={project} />;
}
