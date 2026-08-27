import { Section, SectionHeading } from "@/components/ui/Section";

const antes = [
  "Uma planilha improvisada por cliente, cada uma com uma estrutura",
  "Alíquota efetiva e repartição do DAS conferidas manualmente na tabela do anexo",
  "Débito de CBS e crédito das despesas calculados em rascunho, à parte",
  "Dois cenários em arquivos diferentes — comparar exige alternar entre janelas",
  "Cada revisão recomeça do zero, porque nada está padronizado",
];

const depois = [
  "Um único arquivo, com a mesma estrutura para qualquer empresa do Simples",
  "Faixa, alíquota efetiva e repartição localizadas automaticamente pelo RBT12",
  "Débito e crédito de CBS calculados linha a linha, com a regra visível ao lado",
  "Os dois regimes no mesmo painel, com diferença em reais e em percentual",
  "Um formato repetível: mesma leitura, mesma ordem, mesma apresentação",
];

function Coluna({
  titulo,
  itens,
  tom,
}: {
  titulo: string;
  itens: string[];
  tom: "antes" | "depois";
}) {
  const isDepois = tom === "depois";
  return (
    <div
      className={`rounded-card border p-6 sm:p-7 ${
        isDepois
          ? "border-brand-100 bg-brand-50"
          : "border-line bg-surface"
      }`}
    >
      <h3
        className={`text-[0.75rem] font-semibold uppercase tracking-[0.14em] ${
          isDepois ? "text-brand-700" : "text-ink-400"
        }`}
      >
        {titulo}
      </h3>
      <ul className="mt-5 flex list-none flex-col gap-3.5 p-0">
        {itens.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={`mt-[3px] h-4 w-4 shrink-0 fill-none ${
                isDepois ? "stroke-brand-600" : "stroke-ink-400"
              }`}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isDepois ? <path d="M3 8.5 6.2 11.7 13 4.9" /> : <path d="M4.5 4.5 11.5 11.5M11.5 4.5 4.5 11.5" />}
            </svg>
            <span
              className={`text-[0.9375rem] leading-relaxed ${
                isDepois ? "text-brand-900" : "text-ink-500"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AntesDepois() {
  return (
    <Section id="antes-depois" labelledBy="antes-depois-titulo">
      <SectionHeading
        id="antes-depois-titulo"
        eyebrow="Antes e depois"
        title="A mesma análise, com um processo no lugar de um improviso"
        lead="O ganho não está em calcular mais rápido. Está em ter uma estrutura fixa que você repete em todo cliente e consegue revisar depois."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Coluna titulo="Sem a ferramenta" itens={antes} tom="antes" />
        <Coluna titulo="Com a ferramenta" itens={depois} tom="depois" />
      </div>
    </Section>
  );
}
