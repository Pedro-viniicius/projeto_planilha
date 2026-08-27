import { ImageResponse } from "next/og";

export const alt = "Simples x Híbrido — Painel de Decisão CBS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "68px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 11,
              background: "#0b7a6e",
              color: "#fff",
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            S×H
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: "#0b1a1f" }}>Simples x Híbrido</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              letterSpacing: -2.4,
              lineHeight: 1.06,
              color: "#0b1a1f",
              maxWidth: 940,
            }}
          >
            Simples convencional ou recolhimento híbrido da CBS?
          </div>
          <div style={{ marginTop: 26, fontSize: 27, lineHeight: 1.42, color: "#556b73", maxWidth: 900 }}>
            Compare os dois cenários no mesmo mês, com os mesmos dados, e apresente o resultado em um
            painel único.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 30, fontSize: 20, color: "#7d919a" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: "#b45309" }} />
            Simples convencional
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: "#0e9384" }} />
            Regime híbrido
          </div>
          <div style={{ marginLeft: "auto", color: "#0b7a6e", fontWeight: 600 }}>
            Ferramenta para escritórios contábeis
          </div>
        </div>
      </div>
    ),
    size,
  );
}
