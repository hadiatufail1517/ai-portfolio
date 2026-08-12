import { Link } from "react-router-dom";

export default function About() {
  const areasOfInterest = [
    {
      title: "Full-Stack Web Engineering",
      desc: "Architecting modular, maintainable client-server applications with React, Node.js, Express.js, and MongoDB with clean REST API contracts."
    },
    {
      title: "AI & NLP Integration",
      desc: "Leveraging Python, NLP, and modern AI APIs to build automated systems like real-time interview evaluation and software requirement processing."
    },
    {
      title: "Backend Services & Security",
      desc: "Building secure authentication pipelines with JWT, bcrypt password hashing, input validation, and structured database modeling."
    },
    {
      title: "Software Quality & Architecture",
      desc: "Applying object-oriented design principles, clean code practices, version control standards, and iterative development methodologies."
    }
  ];

  return (
    <div className="page-wrapper about-page">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Software engineering student, full-stack developer, and AI enthusiast.
        </p>
      </div>

      {/* 1. Background & Overview */}
      <section className="about-section">
        <h2 className="content-heading">Background &amp; Who I Am</h2>
        <div className="text-card">
          <p>
            Hello! I am <strong>Hadia Tufail</strong>, a Software Engineering student and aspiring software engineer with a focus on full-stack web development and AI-powered applications.
          </p>
          <p>
            Throughout my software engineering coursework and independent development, I have concentrated on understanding how complex systems are architected, developed, and maintained. I enjoy building software that solves practical problems—ranging from mock interview platforms and bug trackers to AI-driven requirement generation assistants.
          </p>
        </div>
      </section>

      {/* 2. What I Build */}
      <section className="about-section">
        <h2 className="content-heading">What I Build</h2>
        <div className="text-card">
          <p>
            My projects primarily center on modern full-stack web applications and AI tools. I work across the entire lifecycle:
          </p>
          <ul className="learning-list">
            <li>
              <strong>Modern Frontend Applications:</strong> Responsive, accessible, and reactive user interfaces built with React, JavaScript, HTML5, and CSS.
            </li>
            <li>
              <strong>Scalable REST APIs:</strong> Modular server backends engineered with Node.js and Express.js implementing controller-based routing and middleware.
            </li>
            <li>
              <strong>Database Persistence:</strong> Structured database schemas and queries using MongoDB (Mongoose) and Firebase.
            </li>
            <li>
              <strong>AI &amp; Automation Pipelines:</strong> Integrating NLP models, Python scripts, and AI APIs into full-stack web workflows.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Areas of Interest */}
      <section className="about-section">
        <h2 className="content-heading">Areas of Interest &amp; Specialization</h2>
        <div className="areas-grid">
          {areasOfInterest.map((area, index) => (
            <div key={index} className="area-card">
              <h3 className="area-title">{area.title}</h3>
              <p className="area-desc">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education */}
      <section className="about-section">
        <h2 className="content-heading">Education</h2>
        <div className="education-card">
          <h3 className="edu-degree">Bachelor of Science in Software Engineering</h3>
          <p className="edu-status">Undergraduate Software Engineering Student</p>
          <p className="edu-desc">
            Coursework and focus areas include Data Structures &amp; Algorithms, Object-Oriented Software Engineering, Database Systems, Web Engineering, Software Requirement Engineering, and Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* 5. Current Learning & Goals */}
      <section className="about-section">
        <h2 className="content-heading">Current Learning &amp; Technical Growth</h2>
        <div className="text-card">
          <ul className="learning-list">
            <li>
              <strong>Advanced Cloud &amp; Microservices:</strong> Deepening understanding of containerization with Docker and deployment pipelines.
            </li>
            <li>
              <strong>AI System Scalability:</strong> Optimizing token usage, latency handling, and prompt engineering for real-time AI web applications.
            </li>
            <li>
              <strong>Test-Driven Development:</strong> Implementing comprehensive unit and integration testing to ensure software reliability.
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="about-cta-section">
        <h3>Explore My Work or Connect</h3>
        <p>Take a deep dive into my projects or reach out to discuss potential software engineering roles and internships.</p>
        <div className="btn-group">
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
