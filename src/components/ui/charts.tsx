import { moeda, moedaCompacta } from "@/lib/format";

export interface SerieItem {
  rotulo: string;
  valor: number;
  cor: string;
}

/**
 * Barras horizontais para comparar poucas magnitudes.
 * Marcas finas, extremidade arredondada, valor rotulado diretamente,
 * eixo e grade recessivos. Rótulos de texto usam tinta, nunca a cor da série.
 */
export function BarrasComparativas({
  itens,
  titulo,
  id,
}: {
  itens: SerieItem[];
  titulo: string;
  id: string;
}) {
  const max = Math.max(...itens.map((i) => i.valor), 1);

  return (
    <figure className="m-0">
      <figcaption id={`${id}-titulo`} className="mb-4 text-sm font-medium text-ink-700">
        {titulo}
      </figcaption>
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {itens.map((item) => (
          <li key={item.rotulo}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="flex items-center gap-2 text-[0.8125rem] text-ink-500">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                  style={{ backgroundColor: item.cor }}
                />
                {item.rotulo}
              </span>
              <span className="tnum text-[0.9375rem] font-semibold text-ink-900">
                {moeda(item.valor)}
              </span>
            </div>
            <div
              className="h-2.5 w-full overflow-hidden rounded-full bg-surface-sunken"
              role="img"
              aria-label={`${item.rotulo}: ${moeda(item.valor)}`}
            >
              <div
                className="h-full rounded-full transition-[width] duration-500 ease-out"
                style={{ width: `${Math.max((item.valor / max) * 100, 1.5)}%`, backgroundColor: item.cor }}
              />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

/**
 * Rosca de duas fatias — parte/todo com apenas dois componentes,
 * com separador de 2px na cor da superfície e legenda com valores.
 */
export function Rosca({
  itens,
  titulo,
  total,
  rotuloTotal,
}: {
  itens: SerieItem[];
  titulo: string;
  total: number;
  rotuloTotal: string;
}) {
  const soma = itens.reduce((s, i) => s + i.valor, 0) || 1;
  const raio = 54;
  const circunferencia = 2 * Math.PI * raio;

  // Offsets calculados antes da renderizacao: cada fatia comeca onde a anterior termina.
  const fatias = itens.reduce<Array<SerieItem & { dash: string; offset: number }>>((acc, item) => {
    const inicio = acc.reduce((s, f) => s + f.valor / soma, 0);
    const fracao = item.valor / soma;
    // 2px de respiro entre fatias, na cor da superficie.
    const comprimento = Math.max(fracao * circunferencia - 2, 0);
    acc.push({
      ...item,
      dash: `${comprimento} ${circunferencia - comprimento}`,
      offset: -inicio * circunferencia,
    });
    return acc;
  }, []);

  return (
    <figure className="@container/rosca m-0">
      <figcaption className="mb-4 text-sm font-medium text-ink-700">{titulo}</figcaption>
      <div className="flex flex-col items-center gap-5 @md/rosca:flex-row">
        <svg viewBox="0 0 140 140" className="h-[132px] w-[132px] shrink-0" role="img" aria-label={titulo}>
          <title>{titulo}</title>
          <circle cx="70" cy="70" r={raio} fill="none" stroke="var(--color-surface-sunken)" strokeWidth="18" />
          {fatias.map((fatia) => (
            <circle
              key={fatia.rotulo}
              cx="70"
              cy="70"
              r={raio}
              fill="none"
              stroke={fatia.cor}
              strokeWidth="18"
              strokeDasharray={fatia.dash}
              strokeDashoffset={fatia.offset}
              transform="rotate(-90 70 70)"
            >
              <title>{`${fatia.rotulo}: ${moeda(fatia.valor)}`}</title>
            </circle>
          ))}
          <text
            x="70"
            y="66"
            textAnchor="middle"
            className="tnum fill-ink-900 text-[13px] font-semibold"
          >
            {moedaCompacta(total)}
          </text>
          <text x="70" y="82" textAnchor="middle" className="fill-ink-400 text-[8.5px]">
            {rotuloTotal}
          </text>
        </svg>
        <ul className="m-0 flex w-full list-none flex-col gap-2.5 p-0">
          {itens.map((item) => (
            <li key={item.rotulo} className="flex items-baseline justify-between gap-3">
              <span className="flex items-center gap-2 text-[0.8125rem] text-ink-500">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                  style={{ backgroundColor: item.cor }}
                />
                {item.rotulo}
              </span>
              <span className="tnum text-[0.875rem] font-semibold text-ink-900">
                {moeda(item.valor)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
