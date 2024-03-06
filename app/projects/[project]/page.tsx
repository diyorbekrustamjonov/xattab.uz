import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../data/data";
import Project from "./project";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/projects.png";

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.project;
  const project = projects.find(project => project.slug === slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`https://xattab.uz/projects/${project.slug}`),
    description: project.tagline,
    openGraph: {
      images:
        fallbackImage,
      url: `https://xattab.uz/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}


export default function Page({ params }: Props) {
  return (
    <div>
      <Project params={{
        project: params.project
      }} />
    </div>
  );
}
