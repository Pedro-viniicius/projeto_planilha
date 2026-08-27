import { Rosca, BarrasComparativas } from "@/components/ui/charts";
import { moeda, percentual } from "@/lib/format";
import type { Cenario } from "@/data/cenarios";
import { ANEXOS_LABEL } from "@/data/tabela-simples";

export const COR_CONVENCIONAL = "var(--color-serie-convencional)";
export const COR_HIBRIDO = "var(--color-serie-hibrido)";
export const COR_TERCIARIA = "var(--color-serie-terciaria)";

function Kpi({
  rotulo,
  valor,
  cor,
  destaque = false,
}: {
  rotulo: string;
  valor: string;
  cor?: string;
  destaque?: boolean;
}) {
  return (
    <div className="rounded-[10px] border border-line bg-surface px-4 py-3.5">
      <div className="flex items-center gap-1.5">
        {cor ? (
          <span aria-hidden="true" className="h-2 w-2 rounded-[2px]" style={{ backgroundColor: cor }} />
        ) : null}
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink-400">
          {rotulo}
        </p>
      </div>
      <p
        className={`tnum mt-1.5 whitespace-nowrap text-[1.1875rem] font-semibold tracking-[-0.02em] sm:text-[1.3125rem] ${
          destaque ? "text-brand-700" : "text-ink-900"
        }`}
      >
        {valor}
      </p>
    </div>
  );
}

export function VereditoBanner({ cenario }: { cenario: Cenario }) {
  const { resultado } = cenario;
  const hibridoVence = resultado.veredito === "hibrido";
  const texto =
    resultado.veredito === "empate"
      ? "Empate — os dois regimes custam o mesmo neste mês"
      : hibridoVence
        ? `Regime híbrido é mais vantajoso neste mês — diferença de ${moeda(resultado.diferenca)}`
        : `Simples convencional é mais vantajoso neste mês — diferença de ${moeda(resultado.diferenca)}`;

  return (
    <p
      className="flex items-start gap-2.5 rounded-[10px] border px-4 py-3 text-[0.875rem] font-medium leading-snug"
      style={{
        borderColor: hibridoVence ? "var(--color-brand-100)" : "#f0dcc4",
        backgroundColor: hibridoVence ? "var(--color-brand-50)" : "#fdf6ec",
        color: hibridoVence ? "var(--color-brand-900)" : "#7a3c06",
      }}
    >
      <span
        aria-hidden="true"
        className="mt-[5px] h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: hibridoVence ? COR_HIBRIDO : COR_CONVENCIONAL }}
      />
      {texto}
    </p>
  );
}

/**
 * Representação do painel da ferramenta em HTML, alimentada pelos mesmos
 * cálculos das abas Motor_Convencional e Motor_Hibrido. Não é uma captura de tela.
 */
export function PainelDashboard({ cenario, compacto = false }: { cenario: Cenario; compacto?: boolean }) {
  const { resultado, entrada } = cenario;

  return (
    <div className="@container/painel rounded-card border border-line bg-surface-muted p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
          Painel de decisão tributária
        </p>
        <p className="tnum text-[0.6875rem] text-ink-400">
          Anexo {entrada.anexo} · {ANEXOS_LABEL[entrada.anexo]} · faixa {resultado.faixa.faixa}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 @2xl/painel:grid-cols-4">
        <Kpi rotulo="Simples convencional" valor={moeda(resultado.dasConvencional)} cor={COR_CONVENCIONAL} />
        <Kpi rotulo="Regime híbrido" valor={moeda(resultado.totalHibrido)} cor={COR_HIBRIDO} />
        <Kpi rotulo="Diferença no mês" valor={moeda(resultado.diferenca)} destaque />
        <Kpi rotulo="Diferença (%)" valor={percentual(resultado.diferencaPercentual)} destaque />
      </div>

      <div className="mt-3">
        <VereditoBanner cenario={cenario} />
      </div>

      {compacto ? null : (
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="rounded-[10px] border border-line bg-surface p-5">
            <BarrasComparativas
              id="grafico-total"
              titulo="Total a pagar por regime (R$)"
              itens={[
                { rotulo: "Convencional", valor: resultado.dasConvencional, cor: COR_CONVENCIONAL },
                { rotulo: "Híbrido", valor: resultado.totalHibrido, cor: COR_HIBRIDO },
              ]}
            />
          </div>

          <div className="rounded-[10px] border border-line bg-surface p-5">
            <Rosca
              titulo="Composição do regime híbrido (R$)"
              total={resultado.totalHibrido}
              rotuloTotal="total híbrido"
              itens={[
                { rotulo: "DAS reduzido", valor: resultado.dasReduzido, cor: COR_HIBRIDO },
                { rotulo: "CBS por fora", valor: resultado.cbsHibridaARecolher, cor: COR_TERCIARIA },
              ]}
            />
          </div>

          <div className="rounded-[10px] border border-line bg-surface p-5">
            <Rosca
              titulo="Quanto do DAS é CBS hoje (R$)"
              total={resultado.dasConvencional}
              rotuloTotal="DAS convencional"
              itens={[
                { rotulo: "CBS (migra p/ fora)", valor: resultado.cbsDentroDoDAS, cor: COR_TERCIARIA },
                {
                  rotulo: "Demais tributos do DAS",
                  valor: resultado.dasConvencional - resultado.cbsDentroDoDAS,
                  cor: COR_CONVENCIONAL,
                },
              ]}
            />
          </div>

          <div className="rounded-[10px] border border-line bg-surface p-5">
            <BarrasComparativas
              id="grafico-debito-credito"
              titulo="CBS no híbrido: débito × crédito (R$)"
              itens={[
                { rotulo: "Débito de CBS", valor: resultado.debitoCBS, cor: COR_CONVENCIONAL },
                { rotulo: "Crédito de CBS", valor: resultado.creditoCBS, cor: COR_HIBRIDO },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
