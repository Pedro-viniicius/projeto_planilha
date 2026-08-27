import { site } from "@/config/site";

/**
 * Perguntas frequentes. Vive fora do componente client para poder alimentar
 * tambem o JSON-LD renderizado no servidor.
 */
export const PERGUNTAS_FAQ = [
  {
    p: "Preciso dominar Excel para usar?",
    r: "Não. Todo o preenchimento acontece em uma única aba, nas células de entrada. As abas de cálculo e a base de tabelas do Simples estão protegidas, então não há fórmula para montar nem intervalo para arrastar.",
  },
  {
    p: "A ferramenta substitui a análise do contador?",
    r: "Não, e não foi feita para isso. Ela organiza o cálculo e apresenta os dois cenários lado a lado. A decisão continua sendo do profissional responsável, que precisa considerar a legislação vigente e as particularidades da empresa.",
  },
  {
    p: "Para quais empresas ela serve?",
    r: "Empresas optantes pelo Simples Nacional enquadradas nos Anexos I a V, faixas 1 a 6. Você informa o anexo e o RBT12, e a faixa é localizada automaticamente.",
  },
  {
    p: "Funciona para todos os anexos?",
    r: "Sim, os cinco anexos estão na base de dados com as seis faixas cada. O que a ferramenta não faz é calcular o fator R: no Anexo V, o enquadramento é informado por você.",
  },
  {
    p: "O cálculo é automático?",
    r: "Sim. Assim que você preenche as células de entrada, os dois motores recalculam e o painel é atualizado. Não há botão para apertar nem macro para habilitar.",
  },
  {
    p: "Ela calcula o IBS também?",
    r: "Não. A comparação é sobre a CBS — quanto ela representa dentro do DAS hoje e quanto seria recolhida por fora, com crédito sobre as despesas. O IBS não é apurado pela ferramenta.",
  },
  {
    p: "Posso usar para vários clientes?",
    r: `Sim. ${site.licenca.texto} Na prática, você salva uma cópia do arquivo para cada empresa ou para cada competência que quiser guardar. A revenda ou redistribuição do arquivo não é permitida.`,
  },
  {
    p: "Vou receber atualizações?",
    r: site.atualizacoes.prometida
      ? "Sim, atualizações estão incluídas na compra."
      : "A compra dá acesso à versão atual do arquivo. Não há, hoje, uma política de atualizações futuras anunciada — se ela for criada, será comunicada de forma explícita, sem promessa vaga aqui.",
  },
  {
    p: "Como recebo o produto?",
    r: `${site.formato} Você baixa o arquivo e ele fica com você — não depende de conexão nem de login para continuar funcionando.`,
  },
  {
    p: "Funciona no Excel? E no Google Sheets ou LibreOffice?",
    r: "O arquivo foi construído e testado no Microsoft Excel (formato .xlsx) e é onde ele funciona como esperado. Outros aplicativos de planilha costumam abrir arquivos .xlsx, mas a formatação, a proteção das abas e a renderização dos gráficos podem variar — por isso a recomendação é usar o Excel.",
  },
  {
    p: "Preciso instalar alguma coisa?",
    r: "Não. É um arquivo .xlsx comum, sem macro e sem complemento. Basta abrir no Excel.",
  },
  {
    p: "Existe garantia?",
    r: site.garantia.ativa
      ? `Sim. Você tem ${site.garantia.dias} dias para pedir o reembolso caso a ferramenta não sirva para o seu trabalho, conforme o ${site.garantia.base}.`
      : "Consulte as condições no checkout.",
  },
];
