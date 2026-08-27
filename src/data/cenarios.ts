import { calcularCenario, type EntradaCenario, type ResultadoCenario } from "@/lib/engine";
import type { Anexo } from "@/data/tabela-simples";

export interface Cenario {
  id: string;
  nome: string;
  resumo: string;
  entrada: EntradaCenario;
  resultado: ResultadoCenario;
}

/** Rotulos de regra de credito exatamente como aparecem na coluna E da aba "Dados". */
const CREDITO_INTEGRAL = { regraCredito: "Crédito integral (100%)", fatorCredito: 1 };
const CREDITO_RED_30 = { regraCredito: "Redução 30% → 70% da alíq.", fatorCredito: 0.7 };
const CREDITO_RED_70 = { regraCredito: "Redução 70% → 30% da alíq.", fatorCredito: 0.3 };
const SEM_CREDITO = { regraCredito: "Não onerada — sem crédito", fatorCredito: 0 };

function montar(
  id: string,
  nome: string,
  resumo: string,
  anexo: Anexo,
  rbt12: number,
  aliquotaCBS: number,
  entrada: Omit<EntradaCenario, "anexo" | "rbt12" | "aliquotaCBS">,
): Cenario {
  const completa: EntradaCenario = { anexo, rbt12, aliquotaCBS, ...entrada };
  return { id, nome, resumo, entrada: completa, resultado: calcularCenario(completa) };
}

/**
 * Cenário 1 — reproduz exatamente os dados de exemplo que já acompanham a planilha
 * (aba "Dados", Anexo I, RBT12 de R$ 720.000, alíquota de referência da CBS de 8,8%).
 */
export const CENARIO_COMERCIO = montar(
  "comercio",
  "Comércio varejista",
  "Anexo I · faixa 3 · margem de compra relevante",
  "I",
  720_000,
  0.088,
  {
    blocoA: [
      { rotulo: "Tributado integralmente", receita: 35_000, regraCBS: "Alíq. cheia", fatorCBS: 1, descontos: [] },
      { rotulo: "Com retenção de ISS", receita: 5_000, regraCBS: "Alíq. cheia (ISS já retido)", fatorCBS: 1, descontos: ["iss"] },
    ],
    blocoB: [
      { rotulo: "Tributada integralmente — CBS alíquota cheia", receita: 40_000, regraCBS: "Alíq. cheia (sem redução)", fatorCBS: 1 },
    ],
    creditos: [
      { rotulo: "Estoque / CMV", valor: 50_000, ...CREDITO_INTEGRAL },
      { rotulo: "Aluguel", valor: 5_000, ...CREDITO_RED_70 },
      { rotulo: "Contabilidade", valor: 1_500, ...CREDITO_RED_30 },
      { rotulo: "Advocacia / Jurídico", valor: 1_000, ...CREDITO_RED_30 },
      { rotulo: "Energia elétrica", valor: 800, ...CREDITO_INTEGRAL },
      { rotulo: "Telefone / Internet", valor: 500, ...CREDITO_INTEGRAL },
      { rotulo: "Água / Saneamento", valor: 200, ...CREDITO_INTEGRAL },
      { rotulo: "Material de uso e consumo", valor: 300, ...CREDITO_INTEGRAL },
      { rotulo: "Folha de pagamentos", valor: 8_000, ...SEM_CREDITO },
      { rotulo: "Encargos sociais (INSS / FGTS)", valor: 2_000, ...SEM_CREDITO },
      { rotulo: "Pró-labore", valor: 3_000, ...SEM_CREDITO },
    ],
  },
);

/**
 * Cenário 2 — empresa fictícia. Distribuidora de baixa margem: o custo creditável
 * se aproxima da receita, que é a condição em que o regime híbrido passa à frente.
 */
export const CENARIO_DISTRIBUIDORA = montar(
  "distribuidora",
  "Distribuidora de alimentos",
  "Anexo I · faixa 4 · margem baixa, CMV elevado",
  "I",
  1_500_000,
  0.088,
  {
    blocoA: [
      { rotulo: "Tributado integralmente", receita: 120_000, regraCBS: "Alíq. cheia", fatorCBS: 1, descontos: [] },
    ],
    blocoB: [
      { rotulo: "Tributada integralmente — CBS alíquota cheia", receita: 30_000, regraCBS: "Alíq. cheia (sem redução)", fatorCBS: 1 },
    ],
    creditos: [
      { rotulo: "Estoque / CMV", valor: 128_000, ...CREDITO_INTEGRAL },
      { rotulo: "Frete e embalagem", valor: 4_000, ...CREDITO_INTEGRAL },
      { rotulo: "Energia elétrica", valor: 3_000, ...CREDITO_INTEGRAL },
      { rotulo: "Aluguel do centro de distribuição", valor: 6_000, ...CREDITO_RED_70 },
      { rotulo: "Contabilidade", valor: 2_200, ...CREDITO_RED_30 },
      { rotulo: "Folha de pagamentos", valor: 14_000, ...SEM_CREDITO },
      { rotulo: "Encargos sociais (INSS / FGTS)", valor: 3_800, ...SEM_CREDITO },
    ],
  },
);

/** Cenário 3 — empresa fictícia, prestadora de serviços intensiva em folha (Anexo III). */
export const CENARIO_SERVICOS = montar(
  "servicos",
  "Agência de serviços",
  "Anexo III · faixa 4 · custo concentrado em folha",
  "III",
  900_000,
  0.088,
  {
    blocoA: [
      { rotulo: "Tributado integralmente", receita: 60_000, regraCBS: "Alíq. cheia", fatorCBS: 1, descontos: [] },
      { rotulo: "Com retenção de ISS", receita: 15_000, regraCBS: "Alíq. cheia (ISS já retido)", fatorCBS: 1, descontos: ["iss"] },
    ],
    blocoB: [],
    creditos: [
      { rotulo: "Aluguel", valor: 6_500, ...CREDITO_RED_70 },
      { rotulo: "Contabilidade", valor: 1_800, ...CREDITO_RED_30 },
      { rotulo: "Telefone / Internet", valor: 1_200, ...CREDITO_INTEGRAL },
      { rotulo: "Energia elétrica", valor: 900, ...CREDITO_INTEGRAL },
      { rotulo: "Material de uso e consumo", valor: 600, ...CREDITO_INTEGRAL },
      { rotulo: "Folha de pagamentos", valor: 32_000, ...SEM_CREDITO },
      { rotulo: "Encargos sociais (INSS / FGTS)", valor: 9_000, ...SEM_CREDITO },
      { rotulo: "Pró-labore", valor: 8_000, ...SEM_CREDITO },
    ],
  },
);

export const CENARIOS: Cenario[] = [CENARIO_COMERCIO, CENARIO_DISTRIBUIDORA, CENARIO_SERVICOS];
