import { Cta } from "@/components/ui/Cta";
import { CTA_PRIMARIO } from "@/config/site";

export function CtaFinal() {
  return (
    <section aria-labelledby="cta-final-titulo" className="border-t border-line bg-ink-900">
      <div className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-100">
            Para fechar
          </p>
          <h2
            id="cta-final-titulo"
            className="text-balance text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.1rem]"
          >
            A comparação já é complexa. A forma de apresentá-la não precisa ser.
          </h2>
          <p className="mt-4 text-pretty text-[1.0625rem] leading-relaxed text-[#b9c8cb]">
            Quando o cliente perguntar se vale a pena recolher a CBS por fora, a resposta pode ser um
            painel com os dois cenários, o débito, o crédito e a diferença do mês — em vez de uma conta
            refeita às pressas. É exatamente isso que a ferramenta entrega.
          </p>
          <div className="mt-8">
            <Cta event="checkout_click" local="cta_final" variant="inverso">
              {CTA_PRIMARIO}
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
