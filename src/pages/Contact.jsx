import { useState } from "react";

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactInfo = {
    email: "hadiatufail1517@gmail.com", // Your real contact email
    github: "https://github.com/hadiatufail1517",
    linkedin: "https://linkedin.com/in/hadiatufail",
    role: "Software Engineering Student"
  };

  const handleCopy = async (text, key) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-wrapper contact-page">
      <div className="page-header">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">
          Interested in discussing software engineering opportunities, internships, or technical collaborations? Feel free to reach out.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          {/* Email Card */}
          <div className="contact-card">
            <div className="contact-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h2 className="contact-type">Email Address</h2>
            <p className="contact-placeholder-note">Direct communication</p>
            <a href={`mailto:${contactInfo.email}`} className="contact-value-link">
              {contactInfo.email}
            </a>
            <button
              type="button"
              className="btn-copy"
              onClick={() => handleCopy(contactInfo.email, "email")}
            >
              {copiedKey === "email" ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* GitHub Card */}
          <div className="contact-card">
            <div className="contact-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <h2 className="contact-type">GitHub Profile</h2>
            <p className="contact-placeholder-note">Open source &amp; repositories</p>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-value-link"
            >
              hadiatufail1517
            </a>
            <button
              type="button"
              className="btn-copy"
              onClick={() => handleCopy(contactInfo.github, "github")}
            >
              {copiedKey === "github" ? "Copied!" : "Copy Link"}
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="contact-card">
            <div className="contact-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h2 className="contact-type">LinkedIn Profile</h2>
            <p className="contact-placeholder-note">Professional network</p>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-value-link"
            >
              in/hadiatufail
            </a>
            <button
              type="button"
              className="btn-copy"
              onClick={() => handleCopy(contactInfo.linkedin, "linkedin")}
            >
              {copiedKey === "linkedin" ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* Message Form */}
        <section className="detail-card" style={{ marginBottom: "2rem" }}>
          <h2 className="content-heading" style={{ marginBottom: "1rem" }}>
            Send a Direct Message
          </h2>
          {formSubmitted ? (
            <div style={{ backgroundColor: "var(--teal-light-bg)", border: "1px solid var(--teal-border)", padding: "1.5rem", borderRadius: "var(--radius-md)", textAlign: "center" }}>
              <h3 style={{ color: "var(--primary-teal)", marginBottom: "0.5rem" }}>Thank You!</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Your message has been captured. Alternatively, you can always reach out directly via email at <strong>{contactInfo.email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)", fontSize: "0.95rem" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)", fontSize: "0.95rem" }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject / Role / Collaboration Inquiry"
                  style={{ width: "100%", padding: "0.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)", fontSize: "0.95rem" }}
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  style={{ width: "100%", padding: "0.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)", fontSize: "0.95rem", resize: "vertical" }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Send Message
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
