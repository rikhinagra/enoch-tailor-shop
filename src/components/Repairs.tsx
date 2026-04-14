"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

const repairs = [
  {
    title: "Leather Repair",
    description: "Leather jackets, coats, vests: resized, repaired, and restored. Real and faux leather handled with expert care.",
    image: "/images/black-leather-moto-jacket-and-platform-boots.webp",
    imageAlt: "Leather jacket repair and restoration at Enoch Tailor Shop Arlington Heights",
  },
  {
    title: "Zipper Replacement",
    description: "Broken or missing zippers on jackets, dresses, bags, and pants. Replaced quickly and cleanly.",
    image: "/images/bright-orange-zipper-on-teal-fabric.webp",
    imageAlt: "Zipper replacement service at Enoch Tailor Shop Arlington Heights IL",
  },
  {
    title: "Recutting & Tapering",
    description: "Give old clothes a modern shape. We recut boxy silhouettes into tailored fits that look current and sharp.",
    image: "/images/grey-plaid-blazer-on-mannequin-with-measuring-tape.webp",
    imageAlt: "Recutting and tapering clothes for a modern fit at Enoch Tailor Shop",
  },
  {
    title: "General Repairs",
    description: "Torn seams, missing buttons, ripped linings, broken hooks. Fast, clean repairs so your clothes last years longer.",
    image: "/images/flat-lay-sewing-and-tailoring-supplies-on-wooden-table.webp",
    imageAlt: "General garment repairs and sewing services at Enoch Tailor Shop",
  },
];

export default function Repairs() {
  const headRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }); },
      { threshold: 0.08 }
    );
    if (headRef.current) { headRef.current.classList.add("reveal"); observer.observe(headRef.current); }
    cardRefs.current.forEach((el, i) => {
      if (el) { el.classList.add("reveal", `rd${i + 1}`); observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="repairs" aria-labelledby="repairs-heading" className="repairs-section">
      <div className="section-container">
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "16px" }}>Repairs &amp; Specialty</p>
          <h2
            id="repairs-heading"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, color: "#0D0D0D", lineHeight: 1.1, marginBottom: "20px" }}
          >
            We Fix It.{" "}
            <em style={{ fontStyle: "italic", color: "#C8102E" }}>We Save It.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "16px", fontWeight: 300, color: "#777", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
            Don&apos;t throw it away. Bring it to us. From broken zippers to full leather restoration, we bring your favorite pieces back to life.
          </p>
        </div>

        <div className="repairs-grid">
          {repairs.map((repair, i) => (
            <div
              key={repair.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="repair-card"
            >
              <div className="repair-bar" />
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <Image src={repair.image} alt={repair.imageAlt} fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.85)" }} sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              </div>
              <div style={{ padding: "28px 28px 32px" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "24px", fontWeight: 600, color: "#0D0D0D", marginBottom: "12px", lineHeight: 1.2 }}>
                  {repair.title}
                </h3>
                <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "14px", fontWeight: 300, color: "#777", lineHeight: 1.75 }}>
                  {repair.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="tel:+18477668554" className="btn-base btn-gold" aria-label="Call Enoch Tailor Shop to discuss your repair">
            <Phone size={14} strokeWidth={2.5} />
            Call About Your Repair
          </a>
        </div>
      </div>

      <style>{`
        .repairs-section { background: #F0F0F0; padding: 100px 60px; }
        .repairs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .repair-card {
          background: #fff;
          border: 1px solid #CCCCCC;
          overflow: hidden;
          transition: all 0.35s;
          position: relative;
          cursor: default;
        }
        .repair-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
        .repair-card:hover .repair-bar { transform: scaleX(1); }
        .repair-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #C8102E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          z-index: 1;
        }
        @media (max-width: 1100px) {
          .repairs-section { padding: 80px 40px; }
          .repairs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .repairs-section { padding: 64px 20px; }
          .repairs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
