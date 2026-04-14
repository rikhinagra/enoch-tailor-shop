"use client";

const items = [
  "Suit Alterations",
  "Wedding Gowns",
  "Leather Repair",
  "Jeans Hemming",
  "Zipper Replacement",
  "Suits from $289",
  "25+ Years Experience",
  "Arlington Heights IL",
  "Men & Women",
  "Prom Dresses",
  "Quick Turnaround",
  "Walk-Ins Welcome",
];

const Dot = () => (
  <span
    style={{
      display: "inline-block",
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: "#C8102E",
      margin: "0 28px",
      verticalAlign: "middle",
      flexShrink: 0,
    }}
    aria-hidden="true"
  />
);

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "16px 0",
      }}
      aria-label="Featured services marquee"
      role="marquee"
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          animation: "marquee 32s linear infinite",
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
