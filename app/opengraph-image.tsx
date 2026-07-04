import { ImageResponse } from "next/og";

export const alt = "Terso - Ensuring process in every step";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #f7fbff 0%, #bae6fd 55%, #38bdf8 100%)",
          color: "#0f2437",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 104,
              height: 104,
              borderRadius: 28,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0ea5e9",
              fontSize: 48,
              fontWeight: 900,
            }}
          >
            T
          </div>
          <div style={{ fontSize: 52, fontWeight: 800 }}>Terso</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05, maxWidth: 920 }}>
            Ensuring process in every step
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.35, maxWidth: 880 }}>
            Affordable hygiene products with safe production practice and industrial standard procedures.
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>
          Port Harcourt, Nigeria • 08145210122 • tersotex1930@gmail.com
        </div>
      </div>
    ),
    size,
  );
}
