import { useState, useEffect } from "react";
 
export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me | Hadia Tufail";
  }, []);
  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");

  const contactInfo = {
    email: "hadiatufail1517@gmail.com", // Your real contact email
    github: "https://github.com/hadiatufail1517",
    linkedin: "https://www.linkedin.com/in/hadiatufayl/",
    role: "Software Engineering Student"
  };

  const handleCopy = async (text, key) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textInput = document.createElement("textarea");
        textInput.value = text;
        textInput.style.position = "fixed";
        textInput.style.left = "-999999px";
        document.body.appendChild(textInput);
        textInput.focus();
        textInput.select();
        document.execCommand("copy");
        textInput.remove();
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
    if (status === "success" || status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    // Sanitize and trim inputs
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    let hasError = false;
    const newErrors = { name: "", email: "", message: "" };

    if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      hasError = true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }
    if (trimmedMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      setStatus("error");
      setStatusMessage("Please fix the validation errors below.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "fc5c9d52-b65d-4f6c-9d20-e2b426414bdf";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: "New Portfolio Contact Message",
          from_name: "Portfolio Contact Form"
        })
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please check your key configuration and try again.");
      }
    } catch (err) {
      console.error("Contact Form Submission Error:", err);
      setStatus("error");
      setStatusMessage("Failed to send message. Please check your network connection and try again.");
    }
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
              in/hadiatufayl
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
          {statusMessage && (
            <div
              style={{
                backgroundColor: status === "success" ? "var(--teal-light-bg)" : "#FEF2F2",
                border: `1px solid ${status === "success" ? "var(--teal-border)" : "#FCA5A5"}`,
                color: status === "success" ? "var(--primary-teal)" : "#B91C1C",
                padding: "1rem 1.25rem",
                borderRadius: "var(--radius-md)",
                marginBottom: "1.5rem",
                fontSize: "0.95rem"
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                {status === "success" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                )}
                <span>{statusMessage}</span>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
             <div className="contact-form-grid-2">
              <div>
                <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  disabled={status === "submitting"}
                  value={formData.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "var(--radius-md)",
                    border: errors.name ? "1px solid #DC2626" : "1px solid var(--border-color)",
                    fontSize: "0.95rem",
                    backgroundColor: status === "submitting" ? "var(--bg-subtle)" : "var(--bg-card)",
                    cursor: status === "submitting" ? "not-allowed" : "auto"
                  }}
                />
                {errors.name && (
                  <span style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: "0.25rem", display: "block" }}>
                    {errors.name}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  disabled={status === "submitting"}
                  value={formData.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "var(--radius-md)",
                    border: errors.email ? "1px solid #DC2626" : "1px solid var(--border-color)",
                    fontSize: "0.95rem",
                    backgroundColor: status === "submitting" ? "var(--bg-subtle)" : "var(--bg-card)",
                    cursor: status === "submitting" ? "not-allowed" : "auto"
                  }}
                />
                {errors.email && (
                  <span style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: "0.25rem", display: "block" }}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows="4"
                disabled={status === "submitting"}
                value={formData.message}
                onChange={(e) => handleFieldChange("message", e.target.value)}
                placeholder="Write your message here..."
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-md)",
                  border: errors.message ? "1px solid #DC2626" : "1px solid var(--border-color)",
                  fontSize: "0.95rem",
                  resize: "vertical",
                  backgroundColor: status === "submitting" ? "var(--bg-subtle)" : "var(--bg-card)",
                  cursor: status === "submitting" ? "not-allowed" : "auto"
                }}
              ></textarea>
              {errors.message && (
                <span style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: "0.25rem", display: "block" }}>
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting" || status === "success"}
              style={{
                alignSelf: "flex-start",
                transition: "all var(--transition-fast)",
                pointerEvents: (status === "success" || status === "submitting") ? "none" : "auto",
                backgroundColor: status === "submitting" ? "var(--text-muted)" : status === "success" ? "#10B981" : status === "error" ? "#EF4444" : "var(--primary-teal)",
                borderColor: status === "submitting" ? "var(--border-color)" : status === "success" ? "#10B981" : status === "error" ? "#EF4444" : "transparent",
                color: "var(--text-inverse)"
              }}
            >
              {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Try Again" : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
