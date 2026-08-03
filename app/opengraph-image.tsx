import { ImageResponse } from "next/og";

export const alt = "Mash — Desarrollo web y herramientas para negocios en Tampa, FL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen de vista previa (Open Graph). Se genera en el build/edge, sin assets externos.
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
          background: "#131a3a",
          padding: "76px 84px",
          fontFamily: "sans-serif",
        }}
      >
        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ width: 15, height: 15, borderRadius: 99, background: "#5fd3a8" }} />
          <div style={{ color: "#8e97be", fontSize: 27, letterSpacing: 5 }}>
            DESARROLLO WEB · TAMPA, FL
          </div>
        </div>

        {/* título */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 140,
              fontWeight: 800,
              color: "#f2efe9",
              letterSpacing: -5,
              lineHeight: 1,
            }}
          >
            Mash<span style={{ color: "#ff5c35" }}>.</span>
          </div>
          <div style={{ color: "#c7ceea", fontSize: 44, marginTop: 30 }}>
            El papeleo de tu negocio,
          </div>
          <div style={{ color: "#ff5c35", fontSize: 44, fontWeight: 700 }}>
            hecho software.
          </div>
        </div>

        {/* chips de stack */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Next.js", "TypeScript", "Supabase", "Android"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                color: "#8e97be",
                fontSize: 26,
                border: "1px solid rgba(255,255,255,0.16)",
                padding: "10px 22px",
                borderRadius: 10,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
