import type { Metadata } from "next";
import { ProjectCard } from "@/components/Card";
import { PageTitle } from "@/components/Heading";
import { projectsList } from "@/data/projectsList";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="projects-component">
      <PageTitle id="section-p0" title="Projects" />

      <section className="container projects-grid">
        {projectsList.map((project, i) => (
          <ProjectCard {...project} key={i} />
        ))}
      </section>
    </div>
  );
}
