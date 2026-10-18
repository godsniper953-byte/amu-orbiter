import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [selected, setSelected] = useState<ProjectCategory>("All");
  const visibleProjects = selected === "All"
    ? projects
    : projects.filter((project) => project.category === selected);

  return (
    <section className="section projects-section" id="activities" aria-labelledby="activities-title">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading
            titleId="activities-title"
            eyebrow="Things we could make"
            title="The beginning of something."
            description="A glimpse at the kinds of ideas this community can bring to life. These are creative concepts, not completed club projects."
          />
          <span className="projects-status"><span className="status-dot" /> SAMPLE IDEAS · NOT COMPLETED PROJECTS</span>
        </div>
        <div className="project-controls" aria-label="Filter ideas by category">
          <span className="filter-label">BROWSE BY</span>
          <div className="project-filters" role="group" aria-label="Project category">
            {projectCategories.map((category) => (
              <button
                className={`filter-button${selected === category ? " active" : ""}`}
                key={category}
                type="button"
                aria-pressed={selected === category}
                onClick={() => setSelected(category)}
              >{category}</button>
            ))}
          </div>
          <span className="project-count">{String(visibleProjects.length).padStart(2, "0")} IDEAS</span>
        </div>
        <div className="projects-grid" aria-live="polite" aria-relevant="additions removals">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.index}>
              <div className={`project-art ${project.tone}`} aria-hidden="true">
                <span className="art-index">CONCEPT {project.index}</span>
                <span className="art-orbit"><i /></span>
                <span className="art-word">{project.title.split(" ").slice(0, 2).join("\n")}</span>
                <span className="art-corner">{project.index}</span>
              </div>
              <div className="project-info">
                <div><span className="project-category">{project.category} <span>·</span> Sample idea</span><h3>{project.title}</h3></div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </div>
            </article>
          ))}
          {visibleProjects.length === 0 && <p className="projects-empty">No ideas in this category yet.</p>}
        </div>
        <div className="projects-disclaimer"><span>✳</span> All gallery content is illustrative. Real activities and project work will be added when available.</div>
      </div>
    </section>
  );
}
