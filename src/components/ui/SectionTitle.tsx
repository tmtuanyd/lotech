interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  align = "left",
  dark = false,
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {label && (
        <div
          className="section-label"
          style={dark ? { color: "#F5A623" } : undefined}
        >
          {label}
        </div>
      )}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight"
        style={{ color: dark ? "white" : "var(--navy)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
          style={{ color: dark ? "rgba(255,255,255,0.68)" : "var(--text-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
