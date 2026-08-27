# Guia de início rápido — Simples x Híbrido

**Tempo estimado da primeira simulação: 10 a 15 minutos.**
Depois da primeira, o preenchimento costuma levar poucos minutos por empresa.

---

## Antes de começar

Abra o arquivo `Simples x Híbrido.xlsx` no Microsoft Excel.
Você vai ver cinco abas:

| Aba | O que é | Você edita? |
|---|---|---|
| **Painel** | O resultado do mês, em indicadores e gráficos | Não |
| **Dados** | A única aba de preenchimento | **Sim** |
| **Base_Dados** | Tabelas dos Anexos I a V do Simples | Não (protegida) |
| **Motor_Convencional** | Cálculo do DAS e da CBS dentro dele | Não (protegida) |
| **Motor_Hibrido** | Cálculo do débito, do crédito e do total híbrido | Não (protegida) |

> Guarde uma cópia limpa do arquivo original. Para cada empresa (ou cada competência)
> que quiser manter arquivada, salve o arquivo com outro nome.

---

## Passo 1 — Premissas gerais (bloco 1 da aba `Dados`)

| Campo | Onde encontrar |
|---|---|
| **Anexo do Simples (I a V)** | Enquadramento atual da empresa. É uma lista suspensa. |
| **RBT12** | Receita bruta acumulada dos 12 meses anteriores ao mês de apuração. |
| **Exercício de referência** | O ano da apuração. Campo informativo: aparece no painel. |
| **Alíquota de referência da CBS (%)** | A alíquota que você quer testar para aquele exercício. |

**Atenção:** a alíquota da CBS **não vem travada** no arquivo. Ela é uma premissa sua.
Se você quiser comparar dois cenários de alíquota, salve duas cópias do arquivo.

O RBT12 determina sozinho a faixa, a alíquota nominal e a parcela a deduzir.
Você não precisa procurá-los na tabela.

---

## Passo 2 — Receita do mês (blocos 2A e 2B)

Distribua **toda** a receita do mês entre as linhas. A soma das linhas precisa
bater com o faturamento do período.

**Bloco A — situações que alteram o DAS:**

| Linha | Use quando |
|---|---|
| Tributado integralmente | Receita comum, sem particularidade |
| + ICMS-ST | O ICMS já foi recolhido por substituição tributária |
| + PIS/Cofins monofásico | PIS/Cofins já recolhido na fonte (a CBS por fora fica zerada) |
| + ICMS-ST + monofásico | As duas situações na mesma receita |
| Com retenção de ISS | O ISS foi retido pelo tomador |

**Bloco B — situações que alteram só a CBS por fora:**
alíquota cheia, alíquota zero, ou reduções de 30%, 40%, 50%, 60% e 70%.

A coluna ao lado de cada linha descreve a regra de CBS aplicada. Confira se ela
corresponde à situação real da receita antes de lançar o valor.

---

## Passo 3 — Despesas da DRE (bloco 3)

Lance os valores do mês nas 16 linhas de despesa. Cada linha já traz a regra de
crédito de CBS que será aplicada:

- **Crédito integral (100%)** — estoque/CMV, energia, telefone, água, material de uso e consumo
- **Redução 30% → 70% da alíquota** — contabilidade, advocacia
- **Redução 70% → 30% da alíquota** — aluguel
- **Sem crédito** — folha, encargos, pró-labore
- **Crédito presumido** — informe a alíquota específica na célula ao lado

Despesas sem crédito **também devem ser lançadas**: elas não geram crédito, mas
manter a DRE completa evita que você esqueça uma conta ao revisar depois.

---

## Passo 4 — Leia o painel

Vá para a aba `Painel`. Ela já está atualizada. Você verá:

- **Simples convencional** — o DAS do mês
- **Regime híbrido** — DAS reduzido + CBS por fora
- **Diferença no mês** em reais e em percentual
- A frase que indica qual regime saiu à frente
- Quatro gráficos: total por regime, composição do híbrido, quanto do DAS é CBS
  hoje, e débito × crédito de CBS

---

## Erros comuns na primeira simulação

1. **Lançar a receita duas vezes** — uma no Bloco A e outra no Bloco B. Cada real
   de receita entra em uma linha só.
2. **Esquecer a folha de pagamentos** — ela não gera crédito, mas precisa estar lá
   para a DRE fazer sentido na revisão.
3. **Usar o faturamento do mês no lugar do RBT12** — o RBT12 é o acumulado dos
   12 meses **anteriores**.
4. **Assumir a alíquota da CBS sem conferir** — é uma premissa que você define.

---

Veja também: `02-checklist-pre-simulacao.md`, `03-guia-de-interpretacao.md`,
`04-analise-comentada-de-exemplo.md`.
