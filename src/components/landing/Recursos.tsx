import { Section, SectionHeading } from "@/components/ui/Section";

const recursos = [
  {
    recurso: "Tabela dos Anexos I a V, faixas 1 a 6, embutida",
    beneficio:
      "Você digita o RBT12 e o anexo; a faixa, a alíquota nominal, a parcela a deduzir e a repartição do DAS são localizadas sozinhas.",
  },
  {
    recurso: "Receita segregada em 12 situações tributárias",
    beneficio:
      "ST, monofásico e ISS retido descontam do DAS a parcela correta da repartição, em vez de entrarem no bolo com a receita comum.",
  },
  {
    recurso: "Reduções de CBS de 30% a 70% e alíquota zero",
    beneficio:
      "Receitas com benefício deixam de ser aproximadas: cada faixa de redução tem sua própria alíquota efetiva de débito.",
  },
  {
    recurso: "DRE de créditos com 16 linhas de despesa pré-classificadas",
    beneficio:
      "Você não precisa decidir em cada lançamento se a despesa gera crédito integral, reduzido ou nenhum — a regra já vem escrita ao lado.",
  },
  {
    recurso: "Dois motores de cálculo independentes sobre os mesmos dados",
    beneficio:
      "A comparação é honesta por construção: convencional e híbrido leem exatamente as mesmas entradas.",
  },
  {
    recurso: "Painel com 4 indicadores e 4 gráficos",
    beneficio:
      "Total por regime, diferença em R$ e em %, composição do híbrido e relação débito × crédito, prontos para mostrar na tela.",
  },
  {
    recurso: "Leitura em texto do resultado do mês",
    beneficio:
      "O painel escreve qual regime saiu à frente e por quanto — útil para colar direto em um e-mail ou parecer.",
  },
  {
    recurso: "Abas de cálculo e base de dados protegidas",
    beneficio:
      "As fórmulas não são apagadas por engano durante o preenchimento, mesmo com o arquivo circulando pela equipe.",
  },
  {
    recurso: "Validação de dados nas células de entrada",
    beneficio:
      "O anexo é escolhido em lista e os valores só aceitam números não negativos, o que evita erro silencioso de digitação.",
  },
];

export function Recursos() {
  return (
    <Section id="recursos" labelledBy="recursos-titulo">
      <SectionHeading
        id="recursos-titulo"
        eyebrow="O que está dentro"
        title="Cada recurso existe para resolver um passo do seu trabalho"
        lead="Tudo listado aqui está no arquivo. Nada nesta seção descreve uma versão futura."
      />
      <ul className="mt-10 grid list-none grid-cols-1 gap-x-8 gap-y-7 p-0 md:grid-cols-2 lg:grid-cols-3">
        {recursos.map((r) => (
          <li key={r.recurso} className="border-t border-line pt-5">
            <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] text-ink-900">
              {r.recurso}
            </h3>
            <p className="mt-2 text-[0.9063rem] leading-relaxed text-ink-500">{r.beneficio}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
