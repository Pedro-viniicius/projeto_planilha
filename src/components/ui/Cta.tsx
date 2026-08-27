"use client";

import type { ReactNode } from "react";
import { site } from "@/config/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";

interface CtaProps {
  children: ReactNode;
  event: AnalyticsEvent;
  local: string;
  variant?: "primary" | "secondary" | "inverso";
  href?: string;
  className?: string;
}

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_1px_2px_rgba(6,64,58,0.25)]",
  secondary:
    "border border-line-strong bg-surface text-ink-900 hover:border-ink-400 hover:bg-surface-muted",
  // Para uso sobre fundo escuro (CTA final).
  inverso: "bg-white text-ink-900 hover:bg-brand-50",
} as const;

export function Cta({ children, event, local, variant = "primary", href, className = "" }: CtaProps) {
  const destino = href ?? site.checkoutUrl;
  const externo = destino.startsWith("http");

  return (
    <a
      href={destino}
      onClick={() => track(event, { local })}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-[0.95rem] font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
