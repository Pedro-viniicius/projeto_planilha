import { site } from "@/config/site";

export function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-shell px-5 py-12 sm:px-8">
        <div className="rounded-card border border-line bg-surface-muted p-5 sm:p-6">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
            Aviso técnico
          </h2>
          <p className="mt-3 max-w-3xl text-[0.875rem] leading-relaxed text-ink-500">
            Esta ferramenta tem caráter de apoio à simulação e à análise comparativa. Os resultados
            dependem integralmente dos dados informados e das premissas adotadas, entre elas a alíquota
            de referência da CBS, que é definida pelo usuário. As regras de IBS e CBS ainda estão em
            regulamentação e podem ser alteradas. Os números produzidos devem ser avaliados pelo
            profissional responsável, considerando a legislação vigente, as particularidades da empresa
            e os demais fatores aplicáveis. A ferramenta não constitui consultoria tributária nem
            substitui a análise profissional.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-ink-400">
            © {ano} {site.nomeCompleto}
          </p>
          <p className="text-[0.8125rem] text-ink-400">
            Empresas e valores usados nos exemplos são fictícios, criados apenas para demonstração.
          </p>
        </div>
      </div>
    </footer>
  );
}
