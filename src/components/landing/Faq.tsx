"use client";

import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { track } from "@/lib/analytics";
import { PERGUNTAS_FAQ } from "@/data/faq";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-titulo">
      <SectionHeading
        id="faq-titulo"
        eyebrow="Dúvidas"
        title="O que costuma ser perguntado antes da compra"
      />
      <div className="mt-10 border-t border-line">
        {PERGUNTAS_FAQ.map((item) => (
          <details
            key={item.p}
            className="group border-b border-line"
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open) {
                track("faq_open", { pergunta: item.p });
              }
            }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[0.9375rem] font-medium text-ink-900 marker:content-none sm:text-[1rem]">
              {item.p}
              <ChevronDown
                aria-hidden="true"
                size={18}
                strokeWidth={1.8}
                className="shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="max-w-3xl pb-5 text-[0.9375rem] leading-relaxed text-ink-500">
              {item.r}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
