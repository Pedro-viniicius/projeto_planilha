import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={`rounded-card border border-line bg-surface p-6 ${className}`}
    >
      {children}
    </Tag>
  );
}
