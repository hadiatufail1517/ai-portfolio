import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { skillsData } from "../data/skillsData";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  useEffect(() => {
    document.title = "AI Portfolio | Hadia Tufail";
  }, []);
  // 5 featured projects
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="page-wrapper home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Software Engineering Student
          </div>
          <h1 className="hero-name">Hadia Tufail</h1>
          <p className="hero-role">Aspiring Software Engineer | AI &amp; Full-Stack Development</p>
          <p className="hero-bio">
            I build web applications and AI-powered software solutions using modern full-stack technologies.
          </p>

          <div className="hero-cta-group">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Subtle Developer Visual Card */}
        <div className="hero-visual-card">
          <div className="code-header">
            <div className="code-dots">
              <span className="code-dot dot-red"></span>
              <span className="code-dot dot-yellow"></span>
              <span className="code-dot dot-green"></span>
            </div>
            <span className="code-title">engineerProfile.js</span>
          </div>
          <div className="code-body">
            <div><span className="code-keyword">const</span> <span className="code-variable">engineer</span> = &#123;</div>
            <div style={{ paddingLeft: "1.25rem" }}>
              name: <span className="code-string">"Hadia Tufail"</span>,
            </div>
            <div style={{ paddingLeft: "1.25rem" }}>
              status: <span className="code-string">"Software Engineering Student"</span>,
            </div>
            <div style={{ paddingLeft: "1.25rem" }}>
              focus: [<span className="code-string">"Full-Stack MERN"</span>, <span className="code-string">"AI Systems"</span>],
            </div>
            <div style={{ paddingLeft: "1.25rem" }}>
              passion: <span className="code-string">"Scalable &amp; Intelligent Software"</span>,
            </div>
            <div style={{ paddingLeft: "1.25rem" }}>
              seekingOpportunities: <span className="code-keyword">true</span>
            </div>
            <div>&#125;;</div>
          </div>
        </div>
      </section>

      {/* 2. CORE FOCUS DOMAINS */}
      <section className="focus-section">
        <h2 className="section-title">Core Engineering Focus</h2>
        <p className="section-subtitle">
          Key software engineering domains and technologies I specialize in.
        </p>

        <div className="focus-grid">
          <div className="focus-card">
            <div className="focus-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Full-Stack Web Development</h3>
            <p>
              Designing end-to-end web applications with React, Node.js, Express, and MongoDB with secure token-based authentication and responsive user interfaces.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3>AI-Powered Solutions</h3>
            <p>
              Integrating machine learning, NLP, and AI APIs into practical software workflows, such as automated mock interview evaluation and SDLC requirements automation.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3>Backend Architecture &amp; Data</h3>
            <p>
              Developing structured REST APIs with Node.js and Express, implementing schema design with MongoDB, and configuring authentication with JWT and bcrypt.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="featured-section">
        <div className="section-header-flex">
          <div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Major full-stack and AI software engineering projects.</p>
          </div>
          <Link to="/projects" className="btn-view-all">
            View All 9 Projects &rarr;
          </Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={true} />
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL SKILLS SUMMARY */}
      <section className="skills-preview-section">
        <div className="section-header-flex">
          <div>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Languages, frameworks, and developer tools in my daily workflow.</p>
          </div>
          <Link to="/skills" className="btn-view-all">
            Explore Detailed Skill Matrix &rarr;
          </Link>
        </div>

        <div className="skills-grid">
          {skillsData.slice(0, 3).map((group, index) => (
            <div key={index} className="skill-category-card">
              <div className="category-header">
                <h3 className="category-title">{group.category}</h3>
                <p className="category-desc">{group.description}</p>
              </div>
              <div className="skill-pills-container">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    <span className="skill-dot" aria-hidden="true"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SHORT ABOUT & CONTACT CTA */}
      <section className="about-preview-section">
        <div className="about-cta-section">
          <h3>Ready to build something impactful together?</h3>
          <p>
            I am always open to discussing new software engineering opportunities, internships, and technical collaborations.
          </p>
          <div className="btn-group">
            <Link to="/projects" className="btn btn-secondary">
              Explore Projects
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
