/**
 * Camada fina de eventos. Nenhum servico de analytics e carregado aqui.
 * Se um dia um provedor for contratado, basta implementar `dispatch`.
 */
export type AnalyticsEvent =
  | "hero_cta_click"
  | "demo_view"
  | "demo_scenario_change"
  | "offer_view"
  | "checkout_click"
  | "faq_open";

type Payload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, payload: Payload = {}): void {
  if (typeof window === "undefined") return;
  // dataLayer e o contrato mais neutro: funciona com GTM, e e inofensivo sem ele.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
