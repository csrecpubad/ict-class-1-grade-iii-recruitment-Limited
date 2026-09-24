import type { ReactNode } from "react";

interface SectionCardProps {
  number: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SectionCard({
  number,
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <section className="form-section">
      <div className="section-header">
        <div className="section-number">
          {number}
        </div>

        <div>
          <h2>{title}</h2>

          {description && (
            <p>{description}</p>
          )}
        </div>
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}