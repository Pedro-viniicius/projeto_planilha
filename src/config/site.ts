/**
 * Ponto unico de configuracao comercial da pagina.
 * Nao espalhe URL de checkout, preco ou termos por componentes.
 */

const checkoutEnv = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();

export const site = {
  nome: "Simples x Híbrido",
  nomeCompleto: "Simples x Híbrido — Painel de Decisão CBS",
  descricaoCurta:
    "Compare, mês a mês, o Simples Nacional convencional e o recolhimento híbrido da CBS para empresas do Simples.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://exemplo.com.br",

  /**
   * Quando NEXT_PUBLIC_CHECKOUT_URL nao esta definida, os CTAs rolam ate a secao
   * de oferta. Nenhum link de pagamento e inventado.
   */
  checkoutUrl: checkoutEnv || "#oferta",
  checkoutConfigurado: Boolean(checkoutEnv),

  preco: {
    ancora: 347,
    atual: 197,
    moeda: "BRL",
    /**
     * Parcelamento so deve ser exibido depois que o checkout for definido e o
     * numero de parcelas confirmado. Ate la, permanece desligado.
     */
    mostrarParcelamento: false,
    parcelas: null as { quantidade: number; valor: number } | null,
  },

  garantia: {
    ativa: true,
    dias: 7,
    /**
     * Base: direito de arrependimento em compras fora do estabelecimento
     * comercial (art. 49 do Código de Defesa do Consumidor).
     */
    base: "art. 49 do Código de Defesa do Consumidor",
  },

  /**
   * Política de licenciamento — valor padrão RECOMENDADO em docs/offer-strategy.md.
   * Confirme com o responsável pelo produto antes de publicar.
   */
  licenca: {
    texto: "Licença de uso profissional individual — sem limite de empresas analisadas.",
    revendaPermitida: false,
  },

  /**
   * Política de atualizações — ainda NÃO aprovada comercialmente.
   * Enquanto `prometida` for false, a página não promete atualizações futuras.
   */
  atualizacoes: {
    prometida: false,
  },

  formato: "Arquivo .xlsx (Microsoft Excel), entrega digital imediata após a compra.",
} as const;

export const CTA_PRIMARIO = "Quero acessar a ferramenta";
export const CTA_SECUNDARIO = "Ver como funciona";
