"use client";

import { useEffect, useRef } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Cta } from "@/components/ui/Cta";
import { site, CTA_PRIMARIO } from "@/config/site";
import { track } from "@/lib/analytics";

const itens = [
  {
    titulo: "A planilha Simples x Híbrido (.xlsx)",
    texto: "Aba de entrada, dois motores de cálculo e a base dos Anexos I a V — abas de cálculo protegidas.",
  },
  {
    titulo: "Painel de decisão",
    texto: "4 indicadores, 4 gráficos e a leitura em texto de qual regime saiu à frente no mês.",
  },
  {
    titulo: "Guia de início rápido",
    texto: "O caminho completo do primeiro preenchimento até a leitura do painel, em uma página.",
  },
  {
    titulo: "Checklist pré-simulação",
    texto: "Tudo o que precisa estar em mãos antes de abrir o arquivo, para não simular com dado incompleto.",
  },
  {
    titulo: "Guia de interpretação do painel",
    texto: "O que cada indicador significa, o que faz o resultado virar e quais erros de leitura evitar.",
  },
  {
    titulo: "Análise comentada de exemplo",
    texto: "Uma empresa modelo percorrida do zero, com a explicação de cada número que aparece no painel.",
  },
];

export function Oferta() {
  const ref = useRef<HTMLDivElement>(null);
  const contado = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !contado.current) {
          contado.current = true;
          track("offer_view");
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const precoFormatado = (v: number) =>
    v.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <Section id="oferta" labelledBy="oferta-titulo">
      <div ref={ref}>
        <SectionHeading
          id="oferta-titulo"
          align="center"
          eyebrow="A oferta"
          title="Simples x Híbrido — Painel de Decisão CBS"
          lead="Pagamento único. Sem assinatura, sem login, sem dependência de plataforma: o arquivo fica com você."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="rounded-card border border-line bg-surface p-6 sm:p-7">
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
              Você recebe
            </h3>
            <ul className="mt-5 flex list-none flex-col gap-4 p-0">
              {itens.map((item) => (
                <li key={item.titulo} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50">
                    <Check aria-hidden="true" size={13} strokeWidth={2.5} className="text-brand-700" />
                  </span>
                  <span>
                    <span className="block text-[0.9375rem] font-medium text-ink-900">
                      {item.titulo}
                    </span>
                    <span className="block text-[0.875rem] leading-relaxed text-ink-500">
                      {item.texto}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-card border-2 border-brand-600 bg-brand-50 p-6 sm:p-7">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
              Investimento
            </p>

            <p className="mt-4 text-[0.9375rem] text-ink-500">
              De{" "}
              <span className="tnum line-through decoration-ink-400">
                R$ {precoFormatado(site.preco.ancora)}
              </span>{" "}
              por
            </p>
            <p className="tnum mt-1 text-[2.75rem] font-semibold leading-none tracking-[-0.03em] text-brand-900">
              R$ {precoFormatado(site.preco.atual)}
            </p>
            <p className="mt-2 text-[0.875rem] text-ink-500">
              Pagamento único, acesso vitalício ao arquivo.
            </p>

            {site.preco.mostrarParcelamento && site.preco.parcelas ? (
              <p className="tnum mt-1 text-[0.875rem] text-ink-500">
                ou {site.preco.parcelas.quantidade}× de R${" "}
                {site.preco.parcelas.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>
            ) : null}

            <Cta event="checkout_click" local="oferta" className="mt-6 w-full">
              {CTA_PRIMARIO}
            </Cta>

            {site.garantia.ativa ? (
              <p className="mt-5 flex items-start gap-2.5 text-[0.8125rem] leading-relaxed text-brand-900">
                <ShieldCheck aria-hidden="true" size={16} strokeWidth={1.8} className="mt-px shrink-0" />
                <span>
                  Garantia de {site.garantia.dias} dias. Se a ferramenta não servir para o seu trabalho,
                  peça o reembolso dentro do prazo — conforme o {site.garantia.base}.
                </span>
              </p>
            ) : null}

            <p className="mt-4 border-t border-brand-100 pt-4 text-[0.75rem] leading-relaxed text-ink-500">
              {site.formato}
              <br />
              {site.licenca.texto}
            </p>

            {!site.checkoutConfigurado ? (
              <p className="mt-4 rounded-lg border border-dashed border-line-strong bg-surface px-3 py-2 text-[0.6875rem] leading-relaxed text-ink-400">
                Checkout ainda não configurado. Defina a variável{" "}
                <code className="text-ink-500">NEXT_PUBLIC_CHECKOUT_URL</code> para ativar os
                botões de compra.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
