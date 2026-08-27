/**
 * Reproducao fiel da logica de calculo das abas "Dados", "Motor_Convencional" e
 * "Motor_Hibrido" da planilha, usada apenas para gerar os cenarios de exemplo
 * exibidos na secao de demonstracao desta pagina.
 *
 * Cada passo abaixo corresponde a uma celula da planilha (referencia no comentario).
 */
import { TABELA_SIMPLES, type Anexo, type FaixaSimples } from "@/data/tabela-simples";

/** Linha do BLOCO A — receitas que compoem a base do DAS convencional (Dados!B14:B18). */
export interface LinhaBlocoA {
  rotulo: string;
  receita: number;
  /** Regra da CBS por fora aplicada a linha. */
  regraCBS: string;
  /** Fator aplicado sobre a aliquota de referencia da CBS. */
  fatorCBS: number;
  /** Quais parcelas da reparticao sao descontadas do DAS. */
  descontos: Array<"icms" | "cbs" | "iss">;
}

/** Linha do BLOCO B — receitas com reducao de CBS (Dados!B22:B28). */
export interface LinhaBlocoB {
  rotulo: string;
  receita: number;
  regraCBS: string;
  fatorCBS: number;
}

/** Linha da DRE de creditos de CBS (Dados!B35:B50). */
export interface LinhaCredito {
  rotulo: string;
  valor: number;
  regraCredito: string;
  fatorCredito: number;
}

export interface EntradaCenario {
  anexo: Anexo;
  /** Receita bruta dos 12 meses anteriores (Dados!C7). */
  rbt12: number;
  /** Aliquota de referencia da CBS para o exercicio (Dados!C9). */
  aliquotaCBS: number;
  blocoA: LinhaBlocoA[];
  blocoB: LinhaBlocoB[];
  creditos: LinhaCredito[];
}

export interface ResultadoCenario {
  faixa: FaixaSimples;
  /** Motor_Convencional!C17 */
  aliquotaEfetivaGlobal: number;
  /** Motor_Convencional!C18 — parcela de PIS/Cofins (CBS) na reparticao. */
  percentualCBSNaReparticao: number;
  /** Motor_Convencional!C19 */
  aliquotaEfetivaCBS: number;
  receitaTotal: number;
  /** Motor_Convencional!C21 — DAS do mes no regime convencional. */
  dasConvencional: number;
  /** Motor_Convencional!C22 */
  cbsDentroDoDAS: number;
  /** Motor_Hibrido!C17 */
  debitoCBS: number;
  /** Motor_Hibrido!C19 */
  creditoCBS: number;
  /** Motor_Hibrido!C21 */
  cbsHibridaARecolher: number;
  /** Motor_Hibrido!C22 */
  saldoCredor: number;
  /** Motor_Hibrido!C26 */
  dasReduzido: number;
  /** Motor_Hibrido!C28 */
  totalHibrido: number;
  /** Painel!H7 */
  diferenca: number;
  /** Painel!K7 */
  diferencaPercentual: number;
  /** Painel!B10 */
  veredito: "hibrido" | "convencional" | "empate";
}

/** Motor_Convencional!C8 — SUMPRODUCT que localiza a faixa pelo RBT12. */
function encontrarFaixa(anexo: Anexo, rbt12: number): FaixaSimples {
  const faixa = TABELA_SIMPLES.find(
    (f) => f.anexo === anexo && f.limiteInferior <= rbt12 && f.limiteSuperior >= rbt12,
  );
  if (!faixa) {
    throw new Error(`Faixa nao encontrada para o Anexo ${anexo} com RBT12 ${rbt12}`);
  }
  return faixa;
}

export function calcularCenario(entrada: EntradaCenario): ResultadoCenario {
  const faixa = encontrarFaixa(entrada.anexo, entrada.rbt12);

  // Motor_Convencional!C17 — (RBT12 x aliquota nominal - deducao) / RBT12
  const aliquotaEfetivaGlobal =
    (entrada.rbt12 * faixa.aliquotaNominal - faixa.deducao) / entrada.rbt12;

  // Motor_Convencional!C18 — a planilha soma %CBS + %PIS, com %PIS fixado em 0
  // porque a coluna "CBS" da Base_Dados ja consolida PIS + Cofins.
  const percentualCBSNaReparticao = faixa.pCBS;
  const aliquotaEfetivaCBS = aliquotaEfetivaGlobal * percentualCBSNaReparticao;

  const percentualPorDesconto = { icms: faixa.pICMS, cbs: faixa.pCBS, iss: faixa.pISS };

  // Dados!H14:H18 — DAS ajustado por linha (LC 123/2006, Art. 18, §§ 1o e 4o)
  const dasBlocoA = entrada.blocoA.reduce((total, linha) => {
    const abatimento = linha.descontos.reduce((s, d) => s + percentualPorDesconto[d], 0);
    return total + linha.receita * aliquotaEfetivaGlobal * (1 - abatimento);
  }, 0);

  // Dados!H22:H28 — bloco B entra integralmente no DAS
  const dasBlocoB = entrada.blocoB.reduce(
    (total, linha) => total + linha.receita * aliquotaEfetivaGlobal,
    0,
  );

  const dasConvencional = dasBlocoA + dasBlocoB; // Dados!H30 / Motor_Convencional!C21
  const cbsDentroDoDAS = dasConvencional * percentualCBSNaReparticao; // Motor_Convencional!C22

  // Dados!J14:J28 — debito de CBS por fora
  const debitoCBS =
    entrada.blocoA.reduce((t, l) => t + l.receita * entrada.aliquotaCBS * l.fatorCBS, 0) +
    entrada.blocoB.reduce((t, l) => t + l.receita * entrada.aliquotaCBS * l.fatorCBS, 0);

  // Dados!J35:J50 — creditos de CBS da DRE (Arts. 28-45, LC 214/2025)
  const creditoCBS = entrada.creditos.reduce(
    (t, l) => t + l.valor * entrada.aliquotaCBS * l.fatorCredito,
    0,
  );

  const cbsHibridaARecolher = Math.max(0, debitoCBS - creditoCBS); // Motor_Hibrido!C21
  const saldoCredor = Math.max(0, creditoCBS - debitoCBS); // Motor_Hibrido!C22
  const dasReduzido = Math.max(0, dasConvencional - cbsDentroDoDAS); // Motor_Hibrido!C26
  const totalHibrido = dasReduzido + cbsHibridaARecolher; // Motor_Hibrido!C28

  const receitaTotal =
    entrada.blocoA.reduce((t, l) => t + l.receita, 0) +
    entrada.blocoB.reduce((t, l) => t + l.receita, 0);

  const diferenca = Math.abs(dasConvencional - totalHibrido); // Painel!H7
  const diferencaPercentual = dasConvencional === 0 ? 0 : diferenca / dasConvencional; // Painel!K7

  const veredito: ResultadoCenario["veredito"] =
    totalHibrido < dasConvencional
      ? "hibrido"
      : totalHibrido > dasConvencional
        ? "convencional"
        : "empate";

  return {
    faixa,
    aliquotaEfetivaGlobal,
    percentualCBSNaReparticao,
    aliquotaEfetivaCBS,
    receitaTotal,
    dasConvencional,
    cbsDentroDoDAS,
    debitoCBS,
    creditoCBS,
    cbsHibridaARecolher,
    saldoCredor,
    dasReduzido,
    totalHibrido,
    diferenca,
    diferencaPercentual,
    veredito,
  };
}
