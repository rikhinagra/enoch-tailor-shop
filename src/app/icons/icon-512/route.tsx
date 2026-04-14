import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          background: "#C8102E",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 300,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          E
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: 42,
            fontWeight: 600,
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.22em",
          }}
        >
          TAILOR
        </span>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
