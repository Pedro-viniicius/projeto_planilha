# Estratégia de oferta — Simples x Híbrido

Baseada na auditoria em `docs/product-analysis.md`. Nenhuma afirmação comercial
aqui depende de funcionalidade que o arquivo não tenha.

---

## 1. Nome do produto

**Nomes avaliados internamente:**

| # | Nome | Avaliação |
|---|---|---|
| 1 | Simples x Híbrido — Painel de Decisão CBS | **Escolhido** |
| 2 | Simples x Híbrido 2027 | Boa busca, mas amarra o produto a um ano |
| 3 | Comparador CBS — Simples Nacional | Descritivo demais, sem tensão |
| 4 | Decisor CBS | Curto, mas promete decidir — risco jurídico |
| 5 | Painel Reforma Simples | Genérico; "Reforma" é amplo demais |

**Escolha: `Simples x Híbrido — Painel de Decisão CBS`**

- "Simples x Híbrido" carrega a tensão da decisão e é buscável
- "Painel de Decisão" posiciona como ferramenta, não como arquivo
- "CBS" delimita o escopo com honestidade (não promete IBS)
- Nome curto para uso corrente: **Simples x Híbrido**

## 2. Posicionamento

> **Ferramenta de apoio à decisão tributária para escritórios contábeis.**

Não é "uma planilha de Excel". O Excel é o formato de entrega; o produto é o
método de comparação e o painel de apresentação.

A hipótese comercial de que o cálculo tem valor percebido baixo e a decisão tem
valor percebido alto **se confirma** neste caso, por um motivo específico: o
resultado é contraintuitivo. Uma calculadora que devolve um número não resolve o
problema do contador — ele precisa saber **por que** deu aquilo e conseguir
mostrar ao cliente.

## 3. Cliente ideal

**Primário (≈80% da comunicação):** contadores e escritórios contábeis com
carteira de empresas do Simples Nacional, que vão precisar responder à mesma
pergunta dezenas de vezes.

**Secundário (≈20%):** consultores tributários e empresários do Simples que
querem entender a ordem de grandeza antes da conversa com o contador.

## 4. Dor central

O contador precisa responder "vale a pena recolher a CBS por fora?" para uma
carteira inteira. Hoje isso significa: montar uma planilha por cliente, procurar
a faixa na tabela do anexo, isolar manualmente a parcela de PIS/Cofins do DAS,
calcular o débito e o crédito à parte, e ainda encontrar um jeito de apresentar
o resultado. Nada disso é difícil isoladamente — é repetitivo, não padronizado e
difícil de revisar depois.

## 5. Resultado desejado

Chegar à reunião com o cliente com os dois cenários calculados sobre os mesmos
dados, a diferença em reais e em percentual, e a explicação do mecanismo
(débito × crédito) em uma tela só.

## 6. Promessa central

> **Compare o Simples convencional e o recolhimento híbrido da CBS no mesmo mês,
> com os mesmos dados, e apresente o resultado em um painel único.**

Verbos usados: comparar, simular, analisar, visualizar, apoiar, apresentar.
Verbos evitados: descobrir definitivamente, garantir, economizar.

## 7. Mecanismo

Dois motores de cálculo independentes leem a mesma aba de entrada:

1. **Motor convencional** — alíquota efetiva da faixa, DAS ajustado por situação
   tributária, e a parcela de CBS embutida no DAS.
2. **Motor híbrido** — débito de CBS sobre a receita segregada, menos o crédito
   das despesas da DRE, somado ao DAS reduzido.

A comparação é honesta por construção: os dois cenários partem das mesmas
entradas, e a diferença sai do próprio arquivo.

## 8. Diferenciais frente a alternativas gratuitas

| Alternativa | Limitação | O que a ferramenta faz |
|---|---|---|
| Calculadora online de Simples | Só o DAS; não modela o híbrido | Modela os dois regimes |
| Planilha genérica de reforma | Sem segregação por situação tributária | 12 situações de receita |
| Planilha feita internamente | Sem padrão, difícil de revisar | Estrutura fixa e repetível |
| Simulador de fornecedor de software | Preso ao sistema, sem transparência de premissas | Premissas visíveis e editáveis |

O diferencial mais defensável é a **segregação de receita e a DRE de créditos
pré-classificada**. É o que uma calculadora simples não faz.

## 9. Oferta

**O cliente recebe:**

1. A planilha `Simples x Híbrido` (.xlsx) — aba de entrada, dois motores de
   cálculo, base dos Anexos I a V, abas de cálculo protegidas
2. O painel de decisão — 4 indicadores, 4 gráficos, veredito em texto
3. **Guia de início rápido** (`docs/bonus/01-...`) — criado
4. **Checklist pré-simulação** (`docs/bonus/02-...`) — criado
5. **Guia de interpretação do painel** (`docs/bonus/03-...`) — criado
6. **Análise comentada de exemplo** (`docs/bonus/04-...`) — criada

Os quatro bônus **existem neste repositório** e devem ser convertidos em PDF
antes da entrega. Nenhum bônus anunciado é fictício.

## 10. Preço

| Item | Valor |
|---|---|
| **Ancoragem** | R$ 347 |
| **Preço de lançamento** | **R$ 197** |
| Parcelamento | **não exibir** até o checkout ser definido |

**Justificativa do R$ 197:**

*Puxa para cima:* profundidade real de cálculo (tabela completa dos 5 anexos,
12 situações de receita, 16 linhas de crédito); dois motores independentes;
painel pronto para apresentação; abas protegidas (uso por equipe); público B2B
com valor de recompra alto; tema quente e com janela de tempo; quatro materiais
de apoio.

*Puxa para baixo:* escopo restrito à CBS (sem IBS); uma empresa e um mês por
arquivo; sem geração de relatório; sem fator R nem sublimite; entrega em Excel,
não em SaaS.

R$ 297+ exigiria multiempresa ou geração de relatório. Abaixo de R$ 147 o
produto seria lido como "planilha barata" e perderia a leitura de ferramenta
profissional. **R$ 197 posiciona no topo da faixa de planilha profissional sem
prometer o que o arquivo não entrega.**

*Sugestão de calendário:* manter R$ 197 no lançamento e reavaliar para R$ 247
quando (e se) forem entregues consolidação multiempresa ou exportação de
relatório.

## 11. Garantia

**7 dias, contados da compra.** Base: art. 49 do Código de Defesa do Consumidor
(direito de arrependimento em compras fora do estabelecimento comercial).

Já está publicada na página. **Confirme que a plataforma de checkout escolhida
suporta o reembolso nesse prazo antes de colocar a página no ar.**

## 12. Política de licenciamento — REQUER APROVAÇÃO DO RESPONSÁVEL

Valor configurado hoje em `src/config/site.ts` (`site.licenca`):

> "Licença de uso profissional individual — sem limite de empresas analisadas."
> Revenda e redistribuição não permitidas.

**Recomendação:**

| Modalidade | Escopo | Preço sugerido |
|---|---|---|
| Individual | 1 profissional, empresas ilimitadas da própria carteira | R$ 197 |
| Escritório | Até 10 profissionais do mesmo CNPJ | R$ 497 |

A licença de escritório **não está publicada** na página. Publique apenas depois
de decidir a política. Enquanto isso, a página fala de licença individual.

## 13. Política de atualizações — REQUER APROVAÇÃO DO RESPONSÁVEL

Hoje `site.atualizacoes.prometida = false`, e a página **não promete
atualizações**. O FAQ responde isso de forma explícita.

**Recomendação:** dado que a alíquota da CBS é uma entrada do usuário, o arquivo
não envelhece por mudança de alíquota — o que reduz a pressão por atualizações.
Se o objetivo for aumentar valor percebido, o compromisso mais defensável é
"atualizações da tabela dos anexos enquanto o produto for comercializado", e não
um prazo em meses. Ative mudando a flag em `src/config/site.ts`.

## 14. Objeções e respostas

| Objeção | Resposta usada na página |
|---|---|
| "Preciso saber Excel?" | Preenchimento em uma aba; motores protegidos |
| "Substitui minha análise?" | Não, e a página diz isso em três lugares |
| "Serve para o meu cliente?" | Anexos I a V, faixas 1 a 6 |
| "Calcula o IBS?" | **Não** — dito no FAQ e na metodologia |
| "Funciona no Google Sheets?" | Construído e testado no Excel; outros apps podem variar |
| "Posso usar em vários clientes?" | Sim, conforme a licença |
| "Vou receber atualizações?" | Não há política anunciada — dito com todas as letras |
| "É caro para uma planilha" | Seção "valor por análise": custo por empresa analisada |
| "E se não servir?" | Garantia de 7 dias |

## 15. Estratégia de CTA

Um único destino (`NEXT_PUBLIC_CHECKOUT_URL`), centralizado em
`src/config/site.ts`. Sem link de pagamento inventado: enquanto a variável não
for definida, os CTAs rolam até `#oferta` e um aviso visível informa isso.

| Posição | Rótulo | Evento |
|---|---|---|
| Header | "Acessar a ferramenta" | `checkout_click` |
| Hero (primário) | "Quero acessar a ferramenta" | `hero_cta_click` |
| Hero (secundário) | "Ver como funciona" → `#como-funciona` | `hero_cta_click` |
| Oferta | "Quero acessar a ferramenta" | `checkout_click` |
| CTA final | "Quero acessar a ferramenta" | `checkout_click` |

Eventos adicionais: `demo_view`, `demo_scenario_change`, `offer_view`, `faq_open`.
Nenhum serviço pago de analytics foi instalado — os eventos vão para `dataLayer`.

## 16. O que a página deliberadamente **não** faz

Sem depoimentos, nomes, empresas ou números de vendas inventados. Sem contador
regressivo, escassez fabricada ou selo de garantia falso. Sem promessa de
economia tributária. Sem parcelamento exibido antes de existir checkout.

## 17. Evolução futura do produto (apenas oportunidades)

**Curto prazo, sem sair do Excel:**
- Aba de consolidação com várias competências da mesma empresa
- Aba de resumo por carteira (uma linha por cliente)
- Cálculo do fator R para o Anexo V
- Modelo de relatório em uma página, pronto para imprimir

**Médio prazo — simulador web:**
Mesma lógica, entradas em formulário. Elimina a fricção do arquivo e abre a
porta para captura de leads (versão gratuita limitada → planilha paga).

**Longo prazo — SaaS para escritórios:**
Cadastro de clientes, simulações salvas, histórico por competência, painel
multiempresa ("quais clientes da carteira precisam de análise"), relatório em
PDF com a marca do escritório, licenças de equipe. Assinatura entre R$ 79 e
R$ 199/mês por escritório, conforme o número de empresas.

**Ordem de prioridade recomendada:** consolidação multiempresa em Excel →
relatório em PDF → simulador web → SaaS. A consolidação multiempresa é o próximo
salto real de valor percebido e é a que justificaria subir o preço.

**Nada disso está implementado. Não anunciar.**
