import { Section, SectionHeading } from "@/components/ui/Section";

const considera = [
  "Alíquota efetiva do Simples calculada por (RBT12 × alíquota nominal − parcela a deduzir) ÷ RBT12.",
  "Faixa e repartição do DAS localizadas a partir do anexo e do RBT12 informados (Anexos I a V, faixas 1 a 6).",
  "Ajuste do DAS por situação: ICMS-ST desconta a parcela de ICMS, monofásico desconta a parcela de PIS/Cofins e ISS retido desconta a parcela de ISS.",
  "CBS que hoje está dentro do DAS, obtida pela parcela de PIS/Cofins na repartição da faixa.",
  "Débito de CBS por fora, por linha de receita, com alíquota cheia, zero ou reduzida em 30%, 40%, 50%, 60% e 70%.",
  "Crédito de CBS sobre as despesas da DRE, com regra própria por linha (integral, reduzido ou sem crédito).",
  "Resultado híbrido como DAS reduzido + CBS a recolher, com saldo credor quando o crédito supera o débito.",
];

const naoConsidera = [
  "O IBS. A comparação é sobre a CBS; o imposto estadual/municipal não é apurado pela ferramenta.",
  "O cálculo do fator R. O anexo é informado por você, não deduzido do arquivo.",
  "Sublimite estadual de ICMS/ISS e seus efeitos sobre o recolhimento fora do DAS.",
  "Proporcionalização do RBT12 para empresas com menos de 12 meses de atividade.",
  "Projeção de vários meses, histórico ou acumulado anual — a apuração é do mês informado.",
  "O crédito que a empresa transfere ao cliente no regime híbrido, que é um fator comercial e não entra na conta.",
  "Emissão de guia, integração com sistema contábil ou geração automática de relatório em PDF.",
];

const premissas = [
  {
    titulo: "Alíquota de referência da CBS",
    texto:
      "É um campo que você preenche, não um número travado no arquivo. Isso permite testar a alíquota divulgada para o exercício que você estiver analisando — e refazer o teste quando ela mudar.",
  },
  {
    titulo: "Coluna de CBS na repartição",
    texto:
      "Na base de dados da planilha, a parcela identificada como CBS consolida PIS e Cofins — que são justamente os tributos substituídos pela CBS dentro do DAS.",
  },
  {
    titulo: "Legislação em transição",
    texto:
      "As regras de IBS e CBS ainda estão em regulamentação. Confira as premissas antes de usar o resultado em uma orientação a cliente.",
  },
];

function Lista({
  titulo,
  itens,
  tipo,
}: {
  titulo: string;
  itens: string[];
  tipo: "inclui" | "exclui";
}) {
  const inclui = tipo === "inclui";
  return (
    <div>
      <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
        {titulo}
      </h3>
      <ul className="mt-4 flex list-none flex-col gap-3 p-0">
        {itens.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-[7px] h-[3px] w-3 shrink-0 rounded-full"
              style={{
                backgroundColor: inclui ? "var(--color-brand-500)" : "var(--color-line-strong)",
              }}
            />
            <span className="text-[0.9063rem] leading-relaxed text-ink-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Metodologia() {
  return (
    <Section id="metodologia" tone="muted" labelledBy="metodologia-titulo">
      <SectionHeading
        id="metodologia-titulo"
        eyebrow="Metodologia"
        title="O que entra na conta — e o que fica de fora"
        lead="Uma ferramenta de apoio à decisão só é útil se o profissional souber exatamente onde ela começa e onde ela para. Este é o escopo real do arquivo."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <Lista titulo="A ferramenta calcula" itens={considera} tipo="inclui" />
        <Lista titulo="A ferramenta não calcula" itens={naoConsidera} tipo="exclui" />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {premissas.map((p) => (
          <div
            key={p.titulo}
            className="rounded-card border border-line bg-surface p-5"
          >
            <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink-900">
              {p.titulo}
            </h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-500">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-card border border-line bg-surface p-5">
        <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
          Referências citadas dentro do próprio arquivo
        </h3>
        <ul className="mt-3 flex list-none flex-col gap-2 p-0 text-[0.875rem] leading-relaxed text-ink-700 sm:flex-row sm:gap-8">
          <li>
            <strong className="font-semibold text-ink-900">LC 123/2006</strong>, art. 18, §§ 1º e 4º
            <span className="block text-ink-400">base do ajuste do DAS por situação tributária</span>
          </li>
          <li>
            <strong className="font-semibold text-ink-900">LC 214/2025</strong>, arts. 28 a 45
            <span className="block text-ink-400">base das regras de crédito de CBS</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
