/**
 * Tabela extraida da aba "Base_Dados" da planilha
 * `Simples_CBS_Convencional_vs_Hibrido_DASHBOARD.xlsx` (Anexos I a V, faixas 1 a 6).
 *
 * IMPORTANTE: esta copia existe apenas para reproduzir, nesta pagina, os cenarios
 * de exemplo exibidos na secao de demonstracao. A fonte de verdade e a planilha.
 *
 * Colunas originais: Anexo | Faixa | Lim. Inferior | Lim. Superior | Aliquota |
 * Ded. (R$) | IRPJ% | CSLL% | CBS | CPP | ICMS | IBS | IPI% | ISS | Chave
 *
 * A coluna "CBS" da planilha representa a parcela de PIS/Cofins na reparticao do
 * DAS — ou seja, a fatia do DAS que a CBS substitui.
 */
export type Anexo = "I" | "II" | "III" | "IV" | "V";

export interface FaixaSimples {
  anexo: Anexo;
  faixa: number;
  limiteInferior: number;
  limiteSuperior: number;
  aliquotaNominal: number;
  deducao: number;
  /** Parcela de PIS/Cofins (CBS) na reparticao do DAS. */
  pCBS: number;
  /** Parcela de ICMS na reparticao do DAS. */
  pICMS: number;
  /** Parcela de ISS na reparticao do DAS. */
  pISS: number;
}

export const TABELA_SIMPLES: FaixaSimples[] = [
  { anexo: "I", faixa: 1, limiteInferior: 0, limiteSuperior: 180000, aliquotaNominal: 0.04, deducao: 0, pCBS: 0.1533, pICMS: 0.34, pISS: 0 },
  { anexo: "I", faixa: 2, limiteInferior: 180000.01, limiteSuperior: 360000, aliquotaNominal: 0.073, deducao: 5940, pCBS: 0.1533, pICMS: 0.34, pISS: 0 },
  { anexo: "I", faixa: 3, limiteInferior: 360000.01, limiteSuperior: 720000, aliquotaNominal: 0.095, deducao: 13860, pCBS: 0.1533, pICMS: 0.335, pISS: 0 },
  { anexo: "I", faixa: 4, limiteInferior: 720000.01, limiteSuperior: 1800000, aliquotaNominal: 0.107, deducao: 22500, pCBS: 0.1533, pICMS: 0.335, pISS: 0 },
  { anexo: "I", faixa: 5, limiteInferior: 1800000.01, limiteSuperior: 3600000, aliquotaNominal: 0.143, deducao: 87300, pCBS: 0.1533, pICMS: 0.335, pISS: 0 },
  { anexo: "I", faixa: 6, limiteInferior: 3600000.01, limiteSuperior: 4800000, aliquotaNominal: 0.189, deducao: 378000, pCBS: 0.3402, pICMS: 0, pISS: 0 },

  { anexo: "II", faixa: 1, limiteInferior: 0, limiteSuperior: 180000, aliquotaNominal: 0.045, deducao: 0, pCBS: 0.1385, pICMS: 0.32, pISS: 0 },
  { anexo: "II", faixa: 2, limiteInferior: 180000.01, limiteSuperior: 360000, aliquotaNominal: 0.078, deducao: 5940, pCBS: 0.1385, pICMS: 0.32, pISS: 0 },
  { anexo: "II", faixa: 3, limiteInferior: 360000.01, limiteSuperior: 720000, aliquotaNominal: 0.1, deducao: 13860, pCBS: 0.1385, pICMS: 0.32, pISS: 0 },
  { anexo: "II", faixa: 4, limiteInferior: 720000.01, limiteSuperior: 1800000, aliquotaNominal: 0.112, deducao: 22500, pCBS: 0.1385, pICMS: 0.32, pISS: 0 },
  { anexo: "II", faixa: 5, limiteInferior: 1800000.01, limiteSuperior: 3600000, aliquotaNominal: 0.147, deducao: 85500, pCBS: 0.1385, pICMS: 0.32, pISS: 0 },
  { anexo: "II", faixa: 6, limiteInferior: 3600000.01, limiteSuperior: 4800000, aliquotaNominal: 0.299, deducao: 720000, pCBS: 0.2522, pICMS: 0, pISS: 0 },

  { anexo: "III", faixa: 1, limiteInferior: 0, limiteSuperior: 180000, aliquotaNominal: 0.06, deducao: 0, pCBS: 0.1543, pICMS: 0, pISS: 0.335 },
  { anexo: "III", faixa: 2, limiteInferior: 180000.01, limiteSuperior: 360000, aliquotaNominal: 0.112, deducao: 9360, pCBS: 0.1691, pICMS: 0, pISS: 0.32 },
  { anexo: "III", faixa: 3, limiteInferior: 360000.01, limiteSuperior: 720000, aliquotaNominal: 0.135, deducao: 17640, pCBS: 0.1641, pICMS: 0, pISS: 0.325 },
  { anexo: "III", faixa: 4, limiteInferior: 720000.01, limiteSuperior: 1800000, aliquotaNominal: 0.16, deducao: 35640, pCBS: 0.1641, pICMS: 0, pISS: 0.325 },
  { anexo: "III", faixa: 5, limiteInferior: 1800000.01, limiteSuperior: 3600000, aliquotaNominal: 0.21, deducao: 125640, pCBS: 0.1543, pICMS: 0, pISS: 0.335 },
  { anexo: "III", faixa: 6, limiteInferior: 3600000.01, limiteSuperior: 4800000, aliquotaNominal: 0.329, deducao: 648000, pCBS: 0.1929, pICMS: 0, pISS: 0 },

  { anexo: "IV", faixa: 1, limiteInferior: 0, limiteSuperior: 180000, aliquotaNominal: 0.045, deducao: 0, pCBS: 0.2126, pICMS: 0, pISS: 0.445 },
  { anexo: "IV", faixa: 2, limiteInferior: 180000.01, limiteSuperior: 360000, aliquotaNominal: 0.09, deducao: 8100, pCBS: 0.2473, pICMS: 0, pISS: 0.4 },
  { anexo: "IV", faixa: 3, limiteInferior: 360000.01, limiteSuperior: 720000, aliquotaNominal: 0.102, deducao: 12420, pCBS: 0.2374, pICMS: 0, pISS: 0.4 },
  { anexo: "IV", faixa: 4, limiteInferior: 720000.01, limiteSuperior: 1800000, aliquotaNominal: 0.14, deducao: 39780, pCBS: 0.2275, pICMS: 0, pISS: 0.4 },
  { anexo: "IV", faixa: 5, limiteInferior: 1800000.01, limiteSuperior: 3600000, aliquotaNominal: 0.22, deducao: 183780, pCBS: 0.2176, pICMS: 0, pISS: 0.4 },
  { anexo: "IV", faixa: 6, limiteInferior: 3600000.01, limiteSuperior: 4800000, aliquotaNominal: 0.329, deducao: 828000, pCBS: 0.247, pICMS: 0, pISS: 0 },

  { anexo: "V", faixa: 1, limiteInferior: 0, limiteSuperior: 180000, aliquotaNominal: 0.155, deducao: 0, pCBS: 0.1696, pICMS: 0, pISS: 0.14 },
  { anexo: "V", faixa: 2, limiteInferior: 180000.01, limiteSuperior: 360000, aliquotaNominal: 0.18, deducao: 4500, pCBS: 0.1696, pICMS: 0, pISS: 0.17 },
  { anexo: "V", faixa: 3, limiteInferior: 360000.01, limiteSuperior: 720000, aliquotaNominal: 0.195, deducao: 9900, pCBS: 0.1795, pICMS: 0, pISS: 0.19 },
  { anexo: "V", faixa: 4, limiteInferior: 720000.01, limiteSuperior: 1800000, aliquotaNominal: 0.205, deducao: 17100, pCBS: 0.1894, pICMS: 0, pISS: 0.21 },
  { anexo: "V", faixa: 5, limiteInferior: 1800000.01, limiteSuperior: 3600000, aliquotaNominal: 0.23, deducao: 62100, pCBS: 0.1696, pICMS: 0, pISS: 0.235 },
  { anexo: "V", faixa: 6, limiteInferior: 3600000.01, limiteSuperior: 4800000, aliquotaNominal: 0.304, deducao: 540000, pCBS: 0.1978, pICMS: 0, pISS: 0 },
];

export const ANEXOS_LABEL: Record<Anexo, string> = {
  I: "Comércio",
  II: "Indústria",
  III: "Serviços c/ ISS",
  IV: "Serviços s/ CPP",
  V: "Serviços fator-r",
};
