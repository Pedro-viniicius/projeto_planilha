import { Section, SectionHeading } from "@/components/ui/Section";

const passos = [
  {
    titulo: "Informe as premissas",
    texto:
      "Anexo do Simples (I a V), RBT12 dos 12 meses anteriores, exercício de referência e a alíquota de referência da CBS que você quer testar.",
    detalhe: "4 campos",
  },
  {
    titulo: "Segregue a receita do mês",
    texto:
      "Distribua o faturamento entre as situações previstas: tributação integral, ICMS-ST, monofásico, ISS retido, alíquota zero e reduções de 30% a 70%.",
    detalhe: "12 linhas de receita",
  },
  {
    titulo: "Lance as despesas da DRE",
    texto:
      "Preencha CMV, aluguel, energia, contabilidade, folha e demais contas. Cada linha já vem com a regra de crédito de CBS aplicada.",
    detalhe: "16 linhas de despesa",
  },
  {
    titulo: "Leia o painel",
    texto:
      "O painel recalcula na hora: total por regime, diferença em reais e em percentual, composição do híbrido e a relação entre débito e crédito de CBS.",
    detalhe: "4 indicadores",
  },
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona" labelledBy="como-funciona-titulo">
      <SectionHeading
        id="como-funciona-titulo"
        eyebrow="Como funciona"
        title="Uma aba de entrada, um painel de saída"
        lead="Toda a digitação acontece na aba “Dados”. As abas de cálculo e a base de tabelas do Simples ficam protegidas — não há fórmula para você montar nem célula para arrastar."
      />

      <ol className="mt-10 grid list-none grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line p-0 md:grid-cols-2 lg:grid-cols-4">
        {passos.map((p, i) => (
          <li key={p.titulo} className="flex flex-col gap-3 bg-surface p-6">
            <div className="flex items-center justify-between">
              <span className="tnum grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-[0.8125rem] font-semibold text-brand-700">
                {i + 1}
              </span>
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink-400">
                {p.detalhe}
              </span>
            </div>
            <h3 className="text-[1rem] font-semibold tracking-[-0.01em] text-ink-900">
              {p.titulo}
            </h3>
            <p className="text-[0.9063rem] leading-relaxed text-ink-500">{p.texto}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
