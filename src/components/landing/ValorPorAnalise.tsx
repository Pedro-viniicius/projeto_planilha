import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/config/site";

export function ValorPorAnalise() {
  const preco = site.preco.atual;
  const faixas = [5, 20, 50];

  return (
    <Section id="valor" tone="muted" labelledBy="valor-titulo">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
        <SectionHeading
          id="valor-titulo"
          eyebrow="Valor por análise"
          title="O custo se dilui na segunda empresa da carteira"
          lead="A ferramenta é um ativo de trabalho, não um material de consumo. Cada nova empresa analisada usa a mesma estrutura, sem custo adicional."
        />

        <div className="rounded-card border border-line bg-surface p-6 sm:p-7">
          <table className="w-full border-collapse">
            <caption className="mb-4 text-left text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
              Custo por empresa analisada
            </caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="pb-2 text-left text-[0.8125rem] font-medium text-ink-500">
                  Empresas da carteira analisadas
                </th>
                <th scope="col" className="pb-2 text-right text-[0.8125rem] font-medium text-ink-500">
                  Custo por análise
                </th>
              </tr>
            </thead>
            <tbody>
              {faixas.map((n) => (
                <tr key={n} className="border-b border-line last:border-0">
                  <th scope="row" className="tnum py-3 text-left text-[0.9375rem] font-normal text-ink-700">
                    {n} empresas
                  </th>
                  <td className="tnum py-3 text-right text-[0.9375rem] font-semibold text-ink-900">
                    R$ {(preco / n).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-400">
            Divisão simples do preço pelo número de empresas analisadas com o mesmo arquivo. Não é
            projeção de faturamento nem estimativa de economia tributária — esses valores dependem de
            cada empresa e da sua política comercial.
          </p>
        </div>
      </div>
    </Section>
  );
}
