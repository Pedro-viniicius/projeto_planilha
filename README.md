# Simples x Híbrido — página de vendas

Landing page do produto **Simples x Híbrido — Painel de Decisão CBS**, uma
ferramenta em Excel que compara o Simples Nacional convencional com o
recolhimento híbrido da CBS.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · lucide-react.
Sem dependências além dessas.

## Rodando

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Configuração

Copie `.env.example` para `.env.local`:

```
NEXT_PUBLIC_CHECKOUT_URL=   # URL do checkout; vazio = CTAs rolam até #oferta
NEXT_PUBLIC_SITE_URL=       # URL canônica, usada em metadata/sitemap/OG
```

Preço, ancoragem, garantia, licença e política de atualizações ficam todos em
`src/config/site.ts`. **Não espalhe esses valores pelos componentes.**

## Estrutura

```
src/
  app/            layout, página, ícone, imagem OG, robots, sitemap
  components/
    landing/      seções da página
    ui/           Section, Card, Cta, charts
  config/site.ts  configuração comercial (preço, checkout, licença, garantia)
  data/           tabela dos anexos, cenários de exemplo, FAQ
  lib/            engine (espelho da planilha), formatação, analytics
docs/
  product-analysis.md   auditoria da planilha
  offer-strategy.md     estratégia comercial e de preço
  bonus/                os quatro bônus reais entregues com o produto
```

## Sobre `src/lib/engine.ts`

Reproduz a lógica das abas `Motor_Convencional` e `Motor_Hibrido` da planilha,
**apenas** para gerar os três cenários de exemplo da seção de demonstração. Foi
conferido contra os valores do arquivo original. A planilha continua sendo a
fonte de verdade; qualquer alteração nela precisa ser refletida aqui.

## Antes de publicar

- [ ] Definir `NEXT_PUBLIC_CHECKOUT_URL` e `NEXT_PUBLIC_SITE_URL`
- [ ] Confirmar a política de licenciamento (`site.licenca`) — ver `docs/offer-strategy.md` §12
- [ ] Decidir a política de atualizações (`site.atualizacoes`) — §13
- [ ] Confirmar que o checkout suporta o reembolso de 7 dias — §11
- [ ] Converter os quatro bônus de `docs/bonus/` em PDF
- [ ] Ativar o parcelamento em `site.preco` só depois de confirmado no checkout
