import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import ScreenshotArea from "../components/ScreenshotArea";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="page-wrapper error-page">
        <div className="not-found-card" style={{ margin: "2rem auto" }}>
          <span className="error-badge">Not Found</span>
          <h1 className="not-found-title">Project Not Found</h1>
          <p className="not-found-text">
            The requested project case study does not exist or has an invalid route.
          </p>
          <Link to="/projects" className="btn btn-primary">
            &larr; Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper project-detail-page">
      {/* 11. TOP NAVIGATION: Back to Projects */}
      <div className="detail-top-nav">
        <Link to="/projects" className="btn-back">
          <span aria-hidden="true">&larr;</span> Back to All Projects
        </Link>
      </div>

      {/* 1. PROJECT HEADER */}
      <header className="project-header">
        <div className="project-category-tag">{project.category}</div>
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-lead">{project.shortDescription}</p>

        {/* 6. TECHNOLOGIES */}
        <div className="detail-tech-container">
          <h2 className="detail-tech-heading">Technologies Used</h2>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag tech-tag-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 10. GITHUB / LIVE DEMO LINKS */}
        <div className="project-links-box">
          <div className="link-item">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github btn-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub &rarr;
              </a>
            ) : (
              <span className="btn btn-outline btn-sm" style={{ cursor: "default", opacity: 0.8 }}>
                GitHub Repository: Configure in <code>projectsData.js</code>
              </span>
            )}
          </div>

          {project.liveUrl && (
            <div className="link-item">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Deployment &rarr;
              </a>
            </div>
          )}
        </div>
      </header>

      {/* 2. PROJECT OVERVIEW */}
      <section className="detail-section">
        <h2 className="section-title">Project Overview</h2>
        <div className="detail-card">
          <p>{project.overview}</p>
        </div>

        {/* 3. PROBLEM & 4. SOLUTION */}
        <div className="problem-solution-grid">
          <div className="sub-card problem-card">
            <h3 className="sub-card-title">
              <span className="icon-indicator problem-icon">!</span>
              The Problem
            </h3>
            <p>{project.problem}</p>
          </div>

          <div className="sub-card solution-card">
            <h3 className="sub-card-title">
              <span className="icon-indicator solution-icon">&#10003;</span>
              The Solution
            </h3>
            <p>{project.solution}</p>
          </div>
        </div>
      </section>

      {/* 5. KEY FEATURES */}
      <section className="detail-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-list-card">
          <ul className="features-list">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet" aria-hidden="true">&bull;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. SCREENSHOTS */}
      <section className="detail-section">
        <h2 className="section-title">Screenshots &amp; Interface Preview</h2>
        <p className="section-subtitle">
          UI preview and workflow demonstration.
        </p>
        <ScreenshotArea screenshots={project.screenshots} projectId={project.id} />
      </section>

      {/* 8. TECHNICAL IMPLEMENTATION */}
      <section className="detail-section">
        <h2 className="section-title">Technical Implementation</h2>
        <div className="detail-card">
          <p>{project.technicalImplementation}</p>
        </div>
      </section>

      {/* 9. CHALLENGES & LESSONS LEARNED */}
      <section className="detail-section">
        <h2 className="section-title">Challenges &amp; Lessons Learned</h2>
        <div className="detail-card challenges-card">
          <p>{project.challenges}</p>
        </div>
      </section>

      {/* 11. BOTTOM NAVIGATION */}
      <div className="detail-footer-nav">
        <Link to="/projects" className="btn btn-secondary">
          &larr; Back to All Projects
        </Link>
        <Link to="/contact" className="btn btn-primary">
          Discuss This Project
        </Link>
      </div>
    </div>
  );
}
