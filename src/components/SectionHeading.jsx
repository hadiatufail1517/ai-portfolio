export default function SectionHeading({ title, subtitle, badge, align = "center" }) {
  return (
    <div className={`page-header ${align === "left" ? "text-left" : ""}`}>
      {badge && <span className="hero-badge">{badge}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
