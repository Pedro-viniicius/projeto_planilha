import { Cta } from "@/components/ui/Cta";
import { site } from "@/config/site";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#demonstracao", label: "Demonstração" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-shell items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#topo" className="flex items-center gap-2.5 font-semibold tracking-[-0.01em]">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-[7px] bg-brand-600 text-[0.65rem] font-bold text-white"
          >
            S×H
          </span>
          <span className="hidden text-[0.95rem] text-ink-900 min-[380px]:inline">{site.nome}</span>
        </a>

        <nav aria-label="Seções da página" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.875rem] text-ink-500 transition-colors hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Cta event="checkout_click" local="header" className="px-4 py-2 text-[0.85rem]">
          <span className="sm:hidden">Acessar</span>
          <span className="hidden sm:inline">Acessar a ferramenta</span>
        </Cta>
      </div>
    </header>
  );
}
