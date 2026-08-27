# Análise do produto — `Simples_CBS_Convencional_vs_Hibrido_DASHBOARD.xlsx`

Auditoria feita diretamente sobre o arquivo (descompactação do OOXML e leitura
de fórmulas, validações, proteções, gráficos e metadados). **O arquivo não foi
modificado.**

Data da auditoria: 27/08/2026.
Metadados do arquivo: criado em 07/06/2026, última modificação em 26/08/2026,
gerado originalmente via `openpyxl` e editado no Microsoft Excel 16.

---

## 1. Estrutura do arquivo

Cinco abas, **nenhuma oculta**, nenhum intervalo nomeado além da área de
impressão de `Dados!A1:J52`. Não há macros (o arquivo é `.xlsx`, não `.xlsm`).

| # | Aba | Papel | Proteção |
|---|---|---|---|
| 1 | `Painel` | Saída: 4 indicadores, veredito em texto, 4 gráficos, resumo de premissas | `sheetProtection` presente, mas **sem** `sheet="1"` — a proteção não está ativa |
| 2 | `Dados` | Única aba de entrada | Idem — validações ativas, proteção de células não ativa |
| 3 | `Base_Dados` | Tabela dos Anexos I a V, faixas 1 a 6 | **Protegida** (`sheet="1"`, senha) |
| 4 | `Motor_Convencional` | Cálculo do DAS e da CBS embutida | **Protegida** (SHA-512, 100.000 iterações) |
| 5 | `Motor_Hibrido` | Débito, crédito, DAS reduzido e total híbrido | **Protegida** (SHA-512, 100.000 iterações) |

**Gráficos** (todos na aba `Painel`, alimentados por `Painel!B54:C64`):

| Gráfico | Tipo | Série |
|---|---|---|
| 1 | barras | Convencional × Híbrido |
| 2 | rosca | DAS reduzido × CBS a recolher |
| 3 | rosca | CBS que migra p/ fora × demais tributos do DAS |
| 4 | barras | Débito de CBS × Crédito de CBS |

**Validações de dados** (aba `Dados`):
- `C6` — lista fechada `"I,II,III,IV,V"`
- `C7`, `C9`, `C14:C18`, `C22:C28`, `C35:C39`, `F38`, `C40:C50` — decimal ≥ 0

---

## 2. O que o usuário precisa informar

**Bloco 1 — Premissas gerais (4 campos):**

| Célula | Campo |
|---|---|
| `C6` | Anexo do Simples (lista I a V) |
| `C7` | RBT12 — receita bruta dos 12 meses anteriores |
| `C8` | Exercício de referência |
| `C9` | Alíquota de referência da CBS (%) |

**Bloco 2 — Receita do mês (12 linhas):**

- Bloco A (5 linhas, `C14:C18`): tributado integralmente; + ICMS-ST;
  + PIS/Cofins monofásico; + ICMS-ST + monofásico; com retenção de ISS
- Bloco B (7 linhas, `C22:C28`): alíquota cheia; alíquota zero; reduções de
  30%, 40%, 50%, 60% e 70%

**Bloco 3 — Despesas da DRE (16 linhas, `C35:C50`)**, mais a alíquota do crédito
presumido em `F38`. Cada linha traz a regra de crédito descrita na coluna `E`.

---

## 3. Cadeia de cálculo (verificada célula a célula)

### Motor convencional

| Passo | Célula | Fórmula |
|---|---|---|
| Localiza a faixa pelo RBT12 | `C8` | `SUMPRODUCT` sobre `Base_Dados!A3:D32` |
| Alíquota nominal e parcela a deduzir | `C10`, `C11` | `INDEX/MATCH` pela chave `Anexo_Faixa` |
| Parcelas de CBS, ISS e ICMS na repartição | `C12`, `C14`, `C15` | `INDEX/MATCH` |
| **Alíquota efetiva global** | `C17` | `(RBT12 × alíq. nominal − dedução) ÷ RBT12` |
| % CBS na repartição | `C18` | `C12 + C13`, com `C13` fixado em 0 |
| **DAS total do mês** | `C21` | `Dados!H30` |
| **CBS dentro do DAS** | `C22` | `DAS × %CBS` |

Ajuste do DAS por situação tributária (`Dados!H14:H18`), citando LC 123/2006,
art. 18, §§ 1º e 4º:

- ICMS-ST → desconta a parcela de ICMS
- monofásico → desconta a parcela de PIS/Cofins
- ISS retido → desconta a parcela de ISS

### Motor híbrido

| Passo | Célula | Fórmula |
|---|---|---|
| Débito de CBS por linha de receita | `Dados!J14:J28` | `receita × alíq. CBS × fator da linha` |
| **Total do débito** | `C17` | `Dados!J30` |
| Créditos da DRE | `Dados!J35:J50` | `despesa × alíq. CBS × fator de crédito` |
| **Total de créditos** | `C19` | `Dados!J51` |
| **CBS a recolher** | `C21` | `MAX(0; débito − crédito)` |
| Saldo credor | `C22` | `MAX(0; crédito − débito)` |
| **DAS reduzido** | `C26` | `MAX(0; DAS − CBS embutida)` |
| **Total híbrido** | `C28` | `DAS reduzido + CBS a recolher` |

### Painel

`H7 = ABS(convencional − híbrido)`, `K7 = H7 ÷ convencional`, e `B10` monta a
frase de veredito com `IF` aninhado.

### Verificação independente

A lógica foi reimplementada em TypeScript (`src/lib/engine.ts`) e reproduz
**exatamente** os valores do arquivo com os dados de exemplo que o acompanham:

| Saída | Planilha | Reimplementação |
|---|---:|---:|
| Alíquota efetiva global | 7,575% | 7,575% |
| DAS convencional | 6.060,00 | 6.060,00 |
| CBS dentro do DAS | 928,998 | 928,998 |
| Débito de CBS | 7.040,00 | 7.040,00 |
| Crédito de CBS | 4.844,40 | 4.844,40 |
| Total híbrido | 7.326,602 | 7.326,602 |
| Diferença | 1.266,602 (20,90%) | 1.266,602 (20,90%) |

---

## 4. Funcionalidade **verificada** (está no arquivo)

1. Tabela completa dos Anexos I a V, faixas 1 a 6, com alíquota nominal, parcela
   a deduzir e repartição por tributo.
2. Localização automática de faixa a partir de anexo + RBT12.
3. Cálculo da alíquota efetiva do Simples.
4. Ajuste do DAS por ICMS-ST, monofásico e ISS retido.
5. Isolamento da parcela de CBS (PIS + Cofins) embutida no DAS.
6. Débito de CBS por fora, com alíquota cheia, zero ou reduzida em cinco níveis.
7. Créditos de CBS sobre 16 linhas de despesa, com regra própria por linha,
   incluindo crédito presumido com alíquota informada.
8. Cálculo do DAS reduzido, da CBS a recolher e do total no regime híbrido.
9. Saldo credor quando o crédito supera o débito.
10. Painel com 4 indicadores, veredito em texto e 4 gráficos.
11. Resumo das premissas usadas, exibido no painel.
12. Proteção com senha das três abas de cálculo/base.
13. Validação de dados nas células de entrada.

## 5. Funcionalidade **inexistente** (não anunciar)

1. **Cálculo do IBS.** A coluna `IBS` existe em `Base_Dados!L`, mas **nenhuma
   fórmula da pasta a referencia**. A ferramenta trata apenas da CBS.
2. **Fator R.** O Anexo V é selecionado manualmente.
3. **Sublimite estadual** de ICMS/ISS e seus efeitos.
4. **Proporcionalização do RBT12** para empresas com menos de 12 meses.
5. **Multi-competência.** A apuração é de um único mês; não há histórico,
   acumulado nem projeção anual.
6. **Multiempresa.** Uma empresa por arquivo; análises adicionais exigem cópias.
7. **Relatório em PDF**, emissão de guia ou integração com sistema contábil.
8. **Macros / automação.** Não há VBA.
9. **Crédito transferido ao cliente** no regime híbrido — fator comercial
   relevante que não entra na conta.

## 6. Observações técnicas relevantes

- A coluna rotulada `CBS` em `Base_Dados` consolida **PIS + Cofins** da
  repartição do DAS. Coerente: são os tributos substituídos pela CBS.
  `Motor_Convencional!C13` (% PIS) está fixado em 0 justamente por isso.
- A repartição da tabela reserva uma parcela pequena à coluna `IBS`
  (0,17% a 0,27% conforme anexo/faixa), reduzindo proporcionalmente a linha de
  ICMS/ISS. É uma premissa embutida pelo autor, não uma alíquota oficial.
- A alíquota de referência da CBS **é uma entrada do usuário**, não um valor
  travado. Isso é um acerto de projeto: o arquivo não envelhece quando a
  alíquota divulgada muda.
- A proteção de `Painel` e `Dados` está declarada, mas sem o atributo
  `sheet="1"` — na prática essas duas abas não estão bloqueadas. As três abas
  que realmente importam proteger (base e motores) estão.

## 7. Conclusão estrutural sobre o produto

Com uma alíquota de referência da CBS na casa de 8,8%, o regime híbrido só passa
à frente quando a base creditável se aproxima de **85% a 87% da receita**. Isso
não é um defeito do arquivo — é o mecanismo real: dentro do DAS a CBS custa
cerca de 1% a 3% da receita; fora dele, incide cheia e depende do crédito.

Esse é justamente o argumento mais forte do produto: **o resultado não é
intuitivo, e o ponto de virada precisa ser calculado empresa por empresa.**

## 8. Usuário-alvo

Contadores e escritórios contábeis que atendem carteiras de empresas do Simples
Nacional. O valor cresce com o número de empresas analisadas: a estrutura é fixa
e repetível.

Público secundário: empresários do Simples que querem entender a ordem de
grandeza antes de conversar com o contador.

## 9. Pontos mais fortes

1. Segregação de receita por situação tributária — é o que separa a ferramenta
   de uma calculadora simples.
2. DRE de créditos com regra pré-classificada por linha.
3. Dois motores independentes lendo as mesmas entradas.
4. Painel pronto para apresentação, com veredito escrito.
5. Abas de cálculo protegidas: sobrevive ao uso por uma equipe.

## 10. Limitações a comunicar com clareza

Escopo restrito à CBS; um mês e uma empresa por arquivo; fator R e sublimite
fora do escopo; alíquota da CBS é premissa do usuário; legislação em transição.

## 11. Oportunidades de diferenciação

- Assumir a posição de **ferramenta de decisão**, não de planilha.
- Explicitar o escopo (o que calcula e o que não calcula) como argumento de
  credibilidade — a maioria dos concorrentes não faz isso.
- Usar o gráfico **débito × crédito** como imagem-síntese do mecanismo.
- Materiais de apoio (guia, checklist, interpretação, exemplo comentado)
  transformam o arquivo em um método de trabalho.
