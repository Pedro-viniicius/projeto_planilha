import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const pontos = [
  {
    titulo: "Uma decisão que não existia antes",
    texto:
      "A LC 214/2025 abriu para as empresas do Simples a possibilidade de recolher a CBS fora do DAS, no regime não cumulativo. É uma escolha nova, com efeito diferente em cada empresa da carteira.",
  },
  {
    titulo: "O resultado não é intuitivo",
    texto:
      "Dentro do DAS, a CBS é uma fatia pequena da alíquota efetiva. Fora dele, incide cheia sobre a receita e depende do crédito das despesas. Duas empresas do mesmo anexo podem ter respostas opostas.",
  },
  {
    titulo: "A conta muda linha a linha",
    texto:
      "Substituição tributária, monofásico, ISS retido, alíquota zero e reduções de 30% a 70% alteram tanto o DAS quanto o débito de CBS — e cada uma de um jeito diferente.",
  },
  {
    titulo: "Falta um formato para apresentar",
    texto:
      "Depois de fazer a conta, ainda é preciso mostrar ao cliente de onde veio o número. Uma planilha improvisada por empresa dificulta comparar, revisar e explicar.",
  },
];

export function Contexto() {
  return (
    <Section id="contexto" tone="muted" labelledBy="contexto-titulo">
      <SectionHeading
        id="contexto-titulo"
        eyebrow="O contexto"
        title="Você já sabe quais clientes da sua carteira precisam dessa análise?"
        lead="A transição para IBS e CBS coloca uma pergunta nova na mesa de todo escritório contábil que atende empresas do Simples Nacional. Ela não se responde por regra geral — se responde empresa por empresa."
      />

      <ul className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
        {pontos.map((p, i) => (
          <Card as="li" key={p.titulo} className="flex flex-col gap-2">
            <span className="tnum text-[0.75rem] font-semibold text-brand-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-900">
              {p.titulo}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-ink-500">{p.texto}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
