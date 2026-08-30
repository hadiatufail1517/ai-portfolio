import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | Hadia Tufail";
  }, []);
  return (
    <div className="page-wrapper not-found-page">
      <div className="not-found-card">
        <div className="error-badge">404 Error</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          The page you are looking for does not exist, has been removed, or has an invalid URL.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
