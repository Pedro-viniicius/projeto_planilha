import { Cta } from "@/components/ui/Cta";
import { PainelDashboard } from "@/components/landing/PainelDashboard";
import { CENARIO_COMERCIO } from "@/data/cenarios";
import { CTA_PRIMARIO, CTA_SECUNDARIO } from "@/config/site";

const marcadores = [
  "Anexos I a V, faixas 1 a 6",
  "Receita segregada por situação tributária",
  "Créditos de CBS a partir da DRE",
];

export function Hero() {
  return (
    <div id="topo" className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-[0.55]" />

      <div className="relative mx-auto w-full max-w-shell px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="rise">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-500">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Ferramenta de apoio à decisão para escritórios contábeis
            </p>

            <h1 className="text-balance text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink-900 sm:text-[2.75rem] lg:text-[3.05rem]">
              Simples convencional ou recolhimento híbrido da CBS?
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-ink-500 sm:text-[1.125rem]">
              Uma calculadora em Excel que compara, no mesmo mês e com os mesmos dados, quanto a
              empresa pagaria mantendo a CBS dentro do DAS e quanto pagaria recolhendo a CBS por fora,
              com crédito sobre as despesas. O painel mostra os dois cenários lado a lado.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {marcadores.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-700">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="mt-[3px] h-4 w-4 shrink-0 fill-none stroke-brand-600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8.5 6.2 11.7 13 4.9" />
                  </svg>
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta event="hero_cta_click" local="hero">
                {CTA_PRIMARIO}
              </Cta>
              <Cta event="hero_cta_click" local="hero_secundario" variant="secondary" href="#como-funciona">
                {CTA_SECUNDARIO}
              </Cta>
            </div>

            <p className="mt-5 text-[0.8125rem] leading-relaxed text-ink-400">
              Arquivo .xlsx com abas de cálculo protegidas. Você preenche apenas as células de entrada.
            </p>
          </div>

          <div className="rise lg:pt-2" style={{ animationDelay: "90ms" }}>
            <PainelDashboard cenario={CENARIO_COMERCIO} compacto />
            <p className="mt-3 text-[0.75rem] leading-relaxed text-ink-400">
              Representação do painel da ferramenta, gerada com os dados de exemplo que acompanham a
              planilha. Empresa ilustrativa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
