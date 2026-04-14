import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Enoch Tailor Shop — Expert Alterations & Tailoring in Arlington Heights, IL";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0D0D0D",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left red accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            background: "#C8102E",
          }}
        />


        {/* Logo mark + eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "#C8102E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "Georgia, serif",
                lineHeight: 1,
              }}
            >
              E
            </span>
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.22em",
            }}
          >
            ARLINGTON HEIGHTS, IL · SINCE 1999
          </span>
        </div>

        {/* Shop name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 78,
            fontWeight: 600,
            fontFamily: "Georgia, serif",
            lineHeight: 1.05,
            marginBottom: 20,
            letterSpacing: "-0.01em",
          }}
        >
          Enoch Tailor Shop
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 28,
            fontWeight: 300,
            fontFamily: "Arial, sans-serif",
            marginBottom: 48,
            letterSpacing: "0.02em",
          }}
        >
          Expert Alterations &amp; Tailoring for Men and Women
        </div>

        {/* Red divider */}
        <div style={{ width: 64, height: 3, background: "#C8102E", marginBottom: 40 }} />

        {/* Address + phone */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 20,
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            813 W Rand Rd, Suite A · Arlington Heights, IL 60004
          </span>
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.12)", display: "flex" }} />
          <span
            style={{
              color: "#C8102E",
              fontSize: 20,
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            (847) 766-8554
          </span>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            right: 96,
            color: "rgba(255,255,255,0.2)",
            fontSize: 16,
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          enochtailor.shop
        </div>
      </div>
    ),
    { ...size }
  );
}
