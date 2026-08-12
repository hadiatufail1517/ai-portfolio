import { useState } from "react";

export default function ScreenshotArea({ screenshots, projectId }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="detail-card">
        <p style={{ color: "var(--text-muted)", textAlign: "center", fontStyle: "italic" }}>
          Screenshots will be uploaded upon deployment.
        </p>
      </div>
    );
  }

  return (
    <div className="screenshots-grid">
      {screenshots.map((item) => {
        const imagePath = `/images/projects/${projectId}/${item.filename}`;
        const hasError = imageErrors[item.id];

        return (
          <div key={item.id} className="screenshot-card">
            <div className="screenshot-media-container">
              {!hasError ? (
                <img
                  src={imagePath}
                  alt={`${item.title} Preview`}
                  className="screenshot-img"
                  onError={() => handleImageError(item.id)}
                  loading="lazy"
                />
              ) : null}

              {hasError && (
                <div className="screenshot-placeholder">
                  <div className="placeholder-icon" aria-hidden="true">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <p className="placeholder-title">{item.title}</p>
                  <p className="placeholder-hint">
                    Drop screenshot in <code>public/images/projects/{projectId}/{item.filename}</code>
                  </p>
                </div>
              )}
            </div>

            <div className="screenshot-meta">
              <h4 className="screenshot-title">{item.title}</h4>
              <p className="screenshot-desc">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
