import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const titulo = "Simples x Híbrido — comparador de CBS para empresas do Simples Nacional";
const descricao =
  "Planilha profissional que compara, no mesmo mês, o Simples Nacional convencional e o recolhimento híbrido da CBS: DAS, débito, crédito e diferença entre os regimes em um painel único.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titulo,
    template: `%s · ${site.nome}`,
  },
  description: descricao,
  keywords: [
    "Simples Nacional híbrido",
    "recolhimento híbrido CBS",
    "simulador Simples Nacional",
    "CBS Simples Nacional",
    "Reforma Tributária Simples Nacional",
    "comparador Simples Nacional",
    "planilha Reforma Tributária",
    "LC 214/2025",
  ],
  authors: [{ name: site.nomeCompleto }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nomeCompleto,
    title: titulo,
    description: descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
