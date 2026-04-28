import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import projectsData from "@/content/projects.json";
import type { Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore data science and machine learning projects by Shahabas K M — from NLP and computer vision to predictive analytics.",
};

const projects: Project[] = projectsData as Project[];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <AnimatedSection>
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of data science and machine learning projects I've built."
        />
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
