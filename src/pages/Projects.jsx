import { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full-Stack", "AI & ML", "Systems & Tools"];

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  const filterMatchesCategory = (project, cat) => {
    if (cat === "All") return true;
    if (cat === "Full-Stack") return project.category.includes("Full-Stack") || project.category.includes("Web");
    if (cat === "AI & ML") return project.category.includes("AI") || project.category.includes("Machine Learning") || project.category.includes("NLP");
    if (cat === "Systems & Tools") return project.category.includes("Tools") || project.category.includes("Fundamentals") || project.category.includes("Systems");
    return true;
  };

  const filteredFeatured = featuredProjects.filter((p) => filterMatchesCategory(p, selectedCategory));
  const filteredOther = otherProjects.filter((p) => filterMatchesCategory(p, selectedCategory));

  return (
    <div className="page-wrapper projects-page">
      <div className="page-header">
        <h1 className="page-title">Featured &amp; Engineering Projects</h1>
        <p className="page-subtitle">
          A showcase of full-stack web applications, AI tools, and software systems built with modern engineering practices.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`btn btn-sm ${selectedCategory === cat ? "btn-primary" : "btn-outline"}`}
            onClick={() => setSelectedCategory(cat)}
            style={{ borderRadius: "var(--radius-full)", padding: "0.45rem 1rem" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Projects Section */}
      {filteredFeatured.length > 0 && (
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
              Featured Projects
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "1rem" }}>
              Core portfolio projects with full case-study breakdowns.
            </p>
          </div>

          <div className="projects-grid">
            {filteredFeatured.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={true} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects Section */}
      {filteredOther.length > 0 && (
        <section>
          <div style={{ marginBottom: "1.5rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "2rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
              Additional Software &amp; AI Projects
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "1rem" }}>
              Supporting applications, utilities, and foundational coursework repositories.
            </p>
          </div>

          <div className="projects-grid">
            {filteredOther.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={false} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
