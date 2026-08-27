# Análise comentada de exemplo

Percurso completo de uma simulação, número a número. A empresa é **fictícia** e
usa os dados de exemplo que já acompanham a planilha.

---

## A empresa

| Premissa | Valor |
|---|---|
| Anexo | I (Comércio) |
| RBT12 | R$ 720.000,00 |
| Exercício de referência | 2027 |
| Alíquota de referência da CBS | 8,80% |

---

## Passo 1 — A faixa e a alíquota efetiva

Com RBT12 de R$ 720.000,00 no Anexo I, a planilha localiza a **faixa 3**
(de R$ 360.000,01 a R$ 720.000,00), com alíquota nominal de **9,50%** e parcela
a deduzir de **R$ 13.860,00**.

```
Alíquota efetiva = (720.000,00 × 9,50% − 13.860,00) ÷ 720.000,00
                 = (68.400,00 − 13.860,00) ÷ 720.000,00
                 = 54.540,00 ÷ 720.000,00
                 = 7,575%
```

Na mesma faixa, a repartição do DAS destina **15,33%** a PIS/Cofins — que é
exatamente a parcela que a CBS substitui.

---

## Passo 2 — A receita do mês

| Linha | Valor | Regra de CBS |
|---|---:|---|
| Tributado integralmente | R$ 35.000,00 | alíquota cheia |
| Com retenção de ISS | R$ 5.000,00 | alíquota cheia (ISS já retido) |
| Tributada integralmente (Bloco B) | R$ 40.000,00 | alíquota cheia |
| **Receita do mês** | **R$ 80.000,00** | |

**DAS ajustado por linha.** No Anexo I a parcela de ISS na repartição é zero,
então a linha com ISS retido não sofre desconto:

```
35.000,00 × 7,575%              = R$ 2.651,25
 5.000,00 × 7,575% × (1 − 0)    = R$   378,75
40.000,00 × 7,575%              = R$ 3.030,00
                          DAS   = R$ 6.060,00
```

**Quanto disso é CBS hoje:**

```
6.060,00 × 15,33% = R$ 928,99
```

Ou seja: dos R$ 6.060,00 do DAS, **R$ 928,99 é a CBS embutida** — 1,16% da
receita do mês.

---

## Passo 3 — O débito de CBS no regime híbrido

Toda a receita está com alíquota cheia:

```
80.000,00 × 8,80% = R$ 7.040,00
```

Repare no salto: a CBS sai de **R$ 928,99 embutida** para **R$ 7.040,00 de
débito bruto**. É por isso que o crédito das despesas é decisivo.

---

## Passo 4 — Os créditos da DRE

| Despesa | Valor | Regra | Alíq. efetiva | Crédito |
|---|---:|---|---:|---:|
| Estoque / CMV | R$ 50.000,00 | integral | 8,80% | R$ 4.400,00 |
| Aluguel | R$ 5.000,00 | redução 70% | 2,64% | R$ 132,00 |
| Contabilidade | R$ 1.500,00 | redução 30% | 6,16% | R$ 92,40 |
| Advocacia / jurídico | R$ 1.000,00 | redução 30% | 6,16% | R$ 61,60 |
| Energia elétrica | R$ 800,00 | integral | 8,80% | R$ 70,40 |
| Telefone / internet | R$ 500,00 | integral | 8,80% | R$ 44,00 |
| Material de uso e consumo | R$ 300,00 | integral | 8,80% | R$ 26,40 |
| Água / saneamento | R$ 200,00 | integral | 8,80% | R$ 17,60 |
| Folha de pagamentos | R$ 8.000,00 | sem crédito | — | R$ 0,00 |
| Encargos sociais | R$ 2.000,00 | sem crédito | — | R$ 0,00 |
| Pró-labore | R$ 3.000,00 | sem crédito | — | R$ 0,00 |
| **Total de créditos** | | | | **R$ 4.844,40** |

Note que R$ 13.000,00 de despesa (folha, encargos e pró-labore) não produzem
nenhum crédito. É esse bloco que costuma decidir o resultado.

---

## Passo 5 — O resultado

```
CBS a recolher por fora = 7.040,00 − 4.844,40 = R$ 2.195,60
DAS reduzido            = 6.060,00 −   928,99 = R$ 5.131,00
Total no regime híbrido = 5.131,00 + 2.195,60 = R$ 7.326,60
```

| Cenário | Total do mês |
|---|---:|
| Simples convencional | R$ 6.060,00 |
| Regime híbrido | R$ 7.326,60 |
| **Diferença** | **R$ 1.266,60 (20,90%)** |

**Leitura do painel:** neste mês, o Simples convencional é mais vantajoso, com
diferença de R$ 1.266,60.

---

## Por que deu esse resultado

A empresa tem R$ 80.000,00 de receita e R$ 59.300,00 de despesas creditáveis
(CMV + aluguel + serviços + utilidades). O ponto de virada, aqui, seria:

```
Crédito necessário = 7.040,00 − 928,99 = R$ 6.111,01
Base creditável    = 6.111,01 ÷ 8,80%  = R$ 69.443,00
```

Ou seja: seria preciso **R$ 69.443,00 de base creditável** — cerca de **87% da
receita** — para os dois regimes empatarem. Com a estrutura atual, o híbrido não
compensa.

Se o CMV desta mesma empresa subisse de R$ 50.000,00 para R$ 67.000,00 (uma
margem bem mais apertada), o resultado se inverteria.

---

## O que fazer com essa conclusão

1. **Rode outra competência.** Um mês com compra de estoque grande muda o quadro.
2. **Registre a premissa.** A alíquota de 8,80% é sua, não do arquivo.
3. **Considere o que ficou fora:** o IBS, o crédito transferido ao cliente, o
   sublimite estadual e o custo operacional de apurar a CBS por fora.
4. **Documente.** Salve o arquivo como `SxH_<empresa>_<AAAA-MM>.xlsx`.

---

> Empresa e valores fictícios, usados apenas para demonstração. Os resultados
> devem ser avaliados pelo profissional responsável, considerando a legislação
> vigente e as particularidades da empresa.
