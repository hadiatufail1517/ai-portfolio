import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-section">
          <h3 className="footer-title">Hadia Tufail</h3>
          <p className="footer-text">
            Software Engineering Student &amp; Aspiring Software Engineer building full-stack web applications and AI-driven software solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Featured Projects */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Featured Projects</h4>
          <ul className="footer-links">
            <li><Link to="/projects/ai-interview">AI Interview Platform</Link></li>
            <li><Link to="/projects/ai-capstone">AI Capstone</Link></li>
            <li><Link to="/projects/ai-capstone-setup">AI Capstone Setup (SE-Assist)</Link></li>
            <li><Link to="/projects/pharmacare">Pharmacare</Link></li>
            <li><Link to="/projects/bug-tracking">Bug Tracking System</Link></li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Connect</h4>
          <ul className="footer-links">
            <li>
              <a
                href="https://github.com/hadiatufail1517"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile &rarr;
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hadiatufayl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile &rarr;
              </a>
            </li>
          </ul>
          <Link to="/contact" className="footer-cta-btn">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Hadia Tufail. Software Engineering Portfolio. Built with React &amp; Vite.</p>
      </div>
    </footer>
  );
}
