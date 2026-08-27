import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Contexto } from "@/components/landing/Contexto";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { Demonstracao } from "@/components/landing/Demonstracao";
import { AntesDepois } from "@/components/landing/AntesDepois";
import { ParaQuem } from "@/components/landing/ParaQuem";
import { Recursos } from "@/components/landing/Recursos";
import { Metodologia } from "@/components/landing/Metodologia";
import { Oferta } from "@/components/landing/Oferta";
import { ValorPorAnalise } from "@/components/landing/ValorPorAnalise";
import { Faq } from "@/components/landing/Faq";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Rodape } from "@/components/landing/Rodape";
import { PERGUNTAS_FAQ } from "@/data/faq";
import { site } from "@/config/site";

/** Dados estruturados: produto + perguntas frequentes. */
function DadosEstruturados() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: site.nomeCompleto,
      description: site.descricaoCurta,
      category: "Software de apoio à decisão tributária",
      offers: {
        "@type": "Offer",
        price: site.preco.atual,
        priceCurrency: site.preco.moeda,
        availability: "https://schema.org/InStock",
        ...(site.checkoutConfigurado ? { url: site.checkoutUrl } : {}),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PERGUNTAS_FAQ.map((item) => ({
        "@type": "Question",
        name: item.p,
        acceptedAnswer: { "@type": "Answer", text: item.r },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <DadosEstruturados />
      <Header />
      <main id="conteudo">
        <Hero />
        <Contexto />
        <ComoFunciona />
        <Demonstracao />
        <AntesDepois />
        <ParaQuem />
        <Recursos />
        <Metodologia />
        <Oferta />
        <ValorPorAnalise />
        <Faq />
        <CtaFinal />
      </main>
      <Rodape />
    </>
  );
}
