import { ImageResponse } from "next/og";
import { EVENT } from "@/lib/content";

export const alt =
  "IMPACT — Digital Media Forum 2026 · 17 Juni 2026, PIK2 Signature Gallery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  ink: "#0C1226",
  navy: "#161E3A",
  red: "#DD1B3C",
  redBright: "#FF3B5C",
  paper: "#F3F4F7",
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          background: `
            radial-gradient(circle at 12% 18%, ${COLORS.redBright}66, transparent 42%),
            radial-gradient(circle at 88% 82%, ${COLORS.red}88, transparent 45%),
            linear-gradient(135deg, #2A1430 0%, #1A1838 50%, #3A0E22 100%)
          `,
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: COLORS.redBright,
          }}
        >
          <span style={{ display: "flex" }}>inilah.com presents</span>
          <span style={{ display: "flex", opacity: 0.5 }}>·</span>
          <span style={{ display: "flex" }}>{EVENT.shortDate}</span>
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 28,
            fontSize: 132,
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: -3,
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            IMPA
            <span
              style={{
                display: "flex",
                width: 38,
                height: 38,
                marginTop: 60,
                marginLeft: 6,
                marginRight: 6,
                borderRadius: 999,
                background: COLORS.red,
              }}
            />
            CT
          </span>
          <span style={{ display: "flex", color: COLORS.redBright }}>
            Digital Media
          </span>
          <span style={{ display: "flex" }}>Forum 2026</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 36,
            fontSize: 28,
            lineHeight: 1.35,
            maxWidth: 880,
            color: "rgba(255,255,255,0.82)",
            display: "flex",
          }}
        >
          Dari informasi menuju pengaruh — ruang kolaborasi media, kreator,
          platform, regulator, dan industri.
        </div>

        {/* Spacer pushes meta bar to the bottom */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Meta bar */}
        <div
          style={{
            display: "flex",
            gap: 56,
            paddingTop: 28,
            borderTop: "2px solid rgba(255,255,255,0.18)",
          }}
        >
          {[
            { k: "Tanggal", v: EVENT.shortDate },
            { k: "Venue", v: EVENT.venue },
            { k: "Format", v: "Curated · ±350 tamu" },
          ].map((m) => (
            <div
              key={m.k}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  display: "flex",
                  fontSize: 15,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {m.k}
              </span>
              <span
                style={{
                  display: "flex",
                  marginTop: 8,
                  fontSize: 26,
                  fontWeight: 800,
                }}
              >
                {m.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
