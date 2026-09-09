import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Dasturlash xizmatlari O'zbekistonda — Innosoft Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Taqdimot uslubidagi OG banner: qora fon, neon ko'k yorug'lik dog'lari va
 * katta oq sarlavha. Satori text-shadow'ni qo'llab-quvvatlamaydi, shuning
 * uchun porlash matn ortidagi radial gradientlar bilan beriladi.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          position: "relative",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(45% 45% at 20% 25%, rgba(1,156,248,0.45), transparent 65%), radial-gradient(40% 45% at 82% 20%, rgba(174,135,252,0.35), transparent 62%), radial-gradient(55% 50% at 60% 92%, rgba(0,108,219,0.4), transparent 70%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#3da6fb",
              fontWeight: 600,
            }}
          >
            Innosoft Systems
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 26,
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -3,
              color: "#ffffff",
            }}
          >
            <span>DASTURLASH</span>
            <span>XIZMATLARI</span>
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 30,
              color: "#cbd5e1",
              maxWidth: 900,
            }}
          >
            Web sayt · Telegram bot · CRM · ERP · Mobil ilova · AI
          </div>

          <div
            style={{
              marginTop: 44,
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 24,
              color: "#019cf8",
              fontWeight: 600,
            }}
          >
            dasturlashxizmatlari.uz
            <span style={{ color: "#5b6478" }}>·</span>
            <span style={{ color: "#8a94a6" }}>+998 91 055 55 11</span>
          </div>
        </div>

        {/* Taqdimotdagi o'ng tomondagi ingichka chiziq */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 48,
            width: 2,
            height: 260,
            background: "#fdfdfd",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
