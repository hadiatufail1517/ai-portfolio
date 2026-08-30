import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-wrapper">
        <Link to="/" className="navbar-brand" onClick={closeMenu} aria-label="Hadia Tufail Home">
          <div className="brand-badge">HT</div>
          <div className="brand-text-block">
            <span className="brand-name">Hadia Tufail</span>
            <span className="brand-role">Software Engineering</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta-btn">
            Let's Connect
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              end={link.path === "/"}
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary btn-sm"
            style={{ marginTop: "0.5rem", textAlign: "center" }}
            onClick={closeMenu}
          >
            Let's Connect
          </Link>
        </nav>
      )}
    </header>
  );
}
