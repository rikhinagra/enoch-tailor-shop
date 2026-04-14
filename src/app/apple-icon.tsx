import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#C8102E",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 96,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          E
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          TAILOR
        </span>
      </div>
    ),
    { ...size }
  );
}
