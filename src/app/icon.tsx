import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#C8102E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 21,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          E
        </span>
      </div>
    ),
    { ...size }
  );
}
