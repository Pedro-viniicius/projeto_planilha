"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PainelDashboard } from "@/components/landing/PainelDashboard";
import { CENARIOS } from "@/data/cenarios";
import { moeda, percentual } from "@/lib/format";
import { track } from "@/lib/analytics";

function Etapa({
  numero,
  titulo,
  descricao,
  children,
}: {
  numero: string;
  titulo: string;
  descricao: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-line bg-surface">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line px-5 py-4">
        <span className="tnum text-[0.75rem] font-semibold text-brand-600">{numero}</span>
        <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink-900">
          {titulo}
        </h3>
        <p className="w-full text-[0.8125rem] leading-relaxed text-ink-400 sm:w-auto sm:flex-1">
          {descricao}
        </p>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

function LinhaTabela({
  rotulo,
  regra,
  valor,
  destaque = false,
}: {
  rotulo: string;
  regra?: string;
  valor: string;
  destaque?: boolean;
}) {
  return (
    <tr className={destaque ? "border-t border-line-strong" : "border-t border-line"}>
      <th
        scope="row"
        className={`py-2 pr-3 text-left text-[0.875rem] font-normal ${
          destaque ? "font-semibold text-ink-900" : "text-ink-700"
        }`}
      >
        {rotulo}
      </th>
      <td className="hidden py-2 pr-3 text-[0.8125rem] text-ink-400 sm:table-cell">{regra ?? ""}</td>
      <td
        className={`tnum py-2 text-right text-[0.875rem] tabular-nums ${
          destaque ? "font-semibold text-ink-900" : "text-ink-700"
        }`}
      >
        {valor}
      </td>
    </tr>
  );
}

export function Demonstracao() {
  const [ativoId, setAtivoId] = useState(CENARIOS[0].id);
  const cenario = CENARIOS.find((c) => c.id === ativoId) ?? CENARIOS[0];
  const { entrada, resultado } = cenario;
  const secaoRef = useRef<HTMLDivElement>(null);
  const jaContado = useRef(false);

  useEffect(() => {
    const el = secaoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !jaContado.current) {
          jaContado.current = true;
          track("demo_view");
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const receitas = [...entrada.blocoA, ...entrada.blocoB];
  const creditosOrdenados = [...entrada.creditos].sort((a, b) => b.valor - a.valor);

  return (
    <Section id="demonstracao" tone="muted" labelledBy="demonstracao-titulo">
      <div ref={secaoRef}>
        <SectionHeading
          id="demonstracao-titulo"
          eyebrow="Demonstração"
          title="Dos dados de entrada ao painel, no mesmo arquivo"
          lead="Três empresas ilustrativas, calculadas com a mesma lógica da planilha. Repare que a resposta muda conforme a estrutura de custo — e não conforme o anexo."
        />

        <div
          role="tablist"
          aria-label="Empresas de exemplo"
          className="mt-8 flex flex-wrap gap-2"
        >
          {CENARIOS.map((c) => {
            const ativo = c.id === ativoId;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={ativo}
                aria-controls={`painel-${c.id}`}
                onClick={() => {
                  setAtivoId(c.id);
                  track("demo_scenario_change", { cenario: c.id });
                }}
                className={`min-h-11 w-full rounded-lg border px-4 py-2 text-left text-[0.875rem] font-medium transition-colors sm:w-auto ${
                  ativo
                    ? "border-brand-600 bg-brand-50 text-brand-700"
                    : "border-line bg-surface text-ink-500 hover:border-line-strong hover:text-ink-900"
                }`}
              >
                <span className="block text-ink-900">{c.nome}</span>
                <span className="block text-[0.75rem] font-normal text-ink-400">{c.resumo}</span>
              </button>
            );
          })}
        </div>

        <div
          id={`painel-${cenario.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${cenario.id}`}
          className="mt-6 grid gap-4 lg:grid-cols-2 lg:items-start"
        >
          <Etapa
            numero="01"
            titulo="Entradas"
            descricao="Premissas gerais e receita segregada por situação tributária."
          >
            <dl className="mb-4 grid grid-cols-2 gap-3">
              {[
                ["Anexo", `Anexo ${entrada.anexo}`],
                ["Faixa (pelo RBT12)", `Faixa ${resultado.faixa.faixa}`],
                ["RBT12", moeda(entrada.rbt12)],
                ["Alíquota de ref. da CBS", percentual(entrada.aliquotaCBS)],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-surface-muted px-3 py-2">
                  <dt className="text-[0.6875rem] uppercase tracking-[0.06em] text-ink-400">{k}</dt>
                  <dd className="tnum mt-0.5 text-[0.875rem] font-semibold text-ink-900">{v}</dd>
                </div>
              ))}
            </dl>

            <table className="w-full border-collapse">
              <caption className="sr-only">Receita do mês por situação tributária</caption>
              <tbody>
                {receitas.map((r) => (
                  <LinhaTabela key={r.rotulo} rotulo={r.rotulo} regra={r.regraCBS} valor={moeda(r.receita)} />
                ))}
                <LinhaTabela rotulo="Receita do mês" valor={moeda(resultado.receitaTotal)} destaque />
              </tbody>
            </table>
          </Etapa>

          <Etapa
            numero="02"
            titulo="Créditos de CBS pela DRE"
            descricao="Cada despesa carrega sua própria regra de crédito."
          >
            <table className="w-full border-collapse">
              <caption className="sr-only">Despesas e regra de crédito de CBS</caption>
              <tbody>
                {creditosOrdenados.map((c) => (
                  <LinhaTabela
                    key={c.rotulo}
                    rotulo={c.rotulo}
                    regra={c.regraCredito}
                    valor={moeda(c.valor * entrada.aliquotaCBS * c.fatorCredito)}
                  />
                ))}
                <LinhaTabela rotulo="Total de créditos de CBS" valor={moeda(resultado.creditoCBS)} destaque />
              </tbody>
            </table>
          </Etapa>
        </div>

        <div className="mt-4">
          <Etapa
            numero="03"
            titulo="Cálculo e comparação"
            descricao="Os dois motores rodam sobre exatamente os mesmos dados."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 flex items-center gap-2 text-[0.8125rem] font-semibold text-ink-900">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-[2px] bg-serie-convencional"
                  />
                  Simples convencional
                </p>
                <table className="w-full border-collapse">
                  <tbody>
                    <LinhaTabela
                      rotulo="Alíquota efetiva"
                      valor={percentual(resultado.aliquotaEfetivaGlobal)}
                    />
                    <LinhaTabela
                      rotulo="CBS dentro do DAS"
                      valor={moeda(resultado.cbsDentroDoDAS)}
                    />
                    <LinhaTabela rotulo="DAS do mês" valor={moeda(resultado.dasConvencional)} destaque />
                  </tbody>
                </table>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-2 text-[0.8125rem] font-semibold text-ink-900">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-[2px] bg-serie-hibrido" />
                  Regime híbrido
                </p>
                <table className="w-full border-collapse">
                  <tbody>
                    <LinhaTabela rotulo="DAS reduzido" valor={moeda(resultado.dasReduzido)} />
                    <LinhaTabela rotulo="CBS por fora" valor={moeda(resultado.cbsHibridaARecolher)} />
                    <LinhaTabela rotulo="Total do mês" valor={moeda(resultado.totalHibrido)} destaque />
                  </tbody>
                </table>
              </div>
            </div>
          </Etapa>
        </div>

        <div className="mt-4">
          <Etapa
            numero="04"
            titulo="Painel"
            descricao="O resultado do mês em quatro indicadores e quatro gráficos."
          >
            <PainelDashboard cenario={cenario} />
          </Etapa>
        </div>

        <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-400">
          Empresas fictícias, criadas apenas para demonstração. Os números acima foram gerados com a
          mesma sequência de cálculo das abas <code className="text-ink-500">Motor_Convencional</code>{" "}
          e <code className="text-ink-500">Motor_Hibrido</code> da planilha. A alíquota de
          referência da CBS é um campo que você define — ela não vem fixada no arquivo.
        </p>
      </div>
    </Section>
  );
}
