import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "surface" | "muted" | "sunken";
  labelledBy?: string;
}

const tones = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  sunken: "bg-surface-sunken",
} as const;

export function Section({ id, children, className = "", tone = "surface", labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} border-t border-line ${className}`}
    >
      <div className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {children}
      </div>
    </section>
  );
}

interface HeadingProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ id, eyebrow, title, lead, align = "left" }: HeadingProps) {
  return (
    <header className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-balance text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-ink-900 sm:text-3xl lg:text-[2.1rem]"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-500 sm:text-[1.0625rem]">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
