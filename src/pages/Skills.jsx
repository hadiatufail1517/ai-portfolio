import { skillsData } from "../data/skillsData";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div className="page-wrapper skills-page">
      <div className="page-header">
        <h1 className="page-title">Technical Skills &amp; Stack</h1>
        <p className="page-subtitle">
          Core programming languages, frameworks, database technologies, and developer tools applied across my software engineering projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillsData.map((categoryGroup, index) => (
          <section key={index} className="skill-category-card">
            <div className="category-header">
              <h2 className="category-title">{categoryGroup.category}</h2>
              <p className="category-desc">{categoryGroup.description}</p>
            </div>

            <div className="skill-pills-container">
              {categoryGroup.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-pill">
                  <span className="skill-dot" aria-hidden="true"></span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Practical Application Banner */}
      <section className="skills-application-box">
        <h3 className="app-box-title">Applied in Real Engineering Projects</h3>
        <p className="app-box-desc">
          Every technology listed here is actively used across my projects—from full-stack MERN architectures and secure REST APIs to AI-driven workflows and automation tools.
        </p>
        <Link to="/projects" className="btn btn-primary">
          See Skills in Action (Projects) &rarr;
        </Link>
      </section>
    </div>
  );
}
