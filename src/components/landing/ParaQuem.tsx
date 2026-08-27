import { Building2, Calculator, Scale, Store } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const publicos = [
  {
    icone: Calculator,
    titulo: "Contadores",
    texto:
      "Responde à pergunta que o cliente já começou a fazer, com um número de origem rastreável em vez de uma impressão.",
  },
  {
    icone: Building2,
    titulo: "Escritórios contábeis",
    texto:
      "Padroniza a análise entre os analistas da equipe: mesma aba de entrada, mesma sequência de cálculo, mesma leitura de painel.",
  },
  {
    icone: Scale,
    titulo: "Consultores tributários",
    texto:
      "Serve de base quantitativa para o parecer: o painel mostra o débito, o crédito e a diferença entre os regimes em um só lugar.",
  },
  {
    icone: Store,
    titulo: "Empresários do Simples",
    texto:
      "Permite entender a ordem de grandeza da decisão e chegar à conversa com o contador com as perguntas certas.",
  },
];

export function ParaQuem() {
  return (
    <Section id="para-quem" tone="muted" labelledBy="para-quem-titulo">
      <SectionHeading
        id="para-quem-titulo"
        eyebrow="Para quem é"
        title="Feita para quem repete essa análise várias vezes"
        lead="A ferramenta foi desenhada para uso profissional recorrente. Quem analisa uma empresa só também usa — mas o ganho aparece de verdade em quem tem carteira."
      />
      <ul className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {publicos.map(({ icone: Icone, titulo, texto }) => (
          <Card as="li" key={titulo} className="flex flex-col gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-brand-50 text-brand-700">
              <Icone aria-hidden="true" size={18} strokeWidth={1.8} />
            </span>
            <h3 className="text-[1rem] font-semibold tracking-[-0.01em] text-ink-900">{titulo}</h3>
            <p className="text-[0.9063rem] leading-relaxed text-ink-500">{texto}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
