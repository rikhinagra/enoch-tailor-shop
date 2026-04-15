"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
const suitTags = ["Two-Piece", "Three-Piece", "Slim Fit", "Classic Cut", "All Sizes"];
const shirtTags = ["Solid Colors", "Pinstripe", "Spread Collar", "French Cuff", "All Sizes"];
const accessories = ["Ties & Bowties", "Pocket Squares", "Belts", "Cufflinks", "Suspenders"];

function Tag({ label }: { label: string }) {
  return (
    <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", padding: "4px 10px" }}>
      {label}
    </span>
  );
}

export default function Shop() {
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }); },
      { threshold: 0.08 }
    );
    [headRef.current, gridRef.current, bannerRef.current].forEach((el) => {
      if (el) { el.classList.add("reveal"); observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="shop" aria-labelledby="shop-heading" className="shop-section">
      <div className="section-container">
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "16px", fontSize: "15px" }}>In-Store Collection</p>
          <h2 id="shop-heading" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(24px, 2.8vw, 38px)", fontWeight: 500, color: "#fff", lineHeight: 1.1, marginBottom: "20px" }}>
            Shop the Best.{" "}
            <em style={{ fontStyle: "italic", color: "#E8213E" }}>Dressed Right</em> from Day One.
          </h2>
          <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.58)", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
            Walk in, pick your suit, get fitted on the spot. Dress shirts, ties, and accessories all available in-store. Everything you need, under one roof.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="shop-grid">

          {/* Suits */}
          <div className="shop-card">
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <Image src="/images/tailored-suits-hanging-on-modern-copper-rack.webp" alt="Premium men's suits starting at $289 — Enoch Tailor Shop Arlington Heights" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.8)" }} sizes="(max-width: 900px) 100vw, 30vw" />
            </div>
            <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "22px", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>Premium Men&apos;s Suits</h3>
              <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "12px", fontWeight: 500, color: "#C8102E", letterSpacing: "0.08em", marginBottom: "10px" }}>from $289</p>
              <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "16px" }}>
                Hand-selected suits for every occasion: interviews, weddings, work. Each suit is fitted and altered in-store so it looks made for you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {[
                  "Two-piece & three-piece styles",
                  "Slim, classic & modern cuts",
                  "Alterations included with purchase",
                  "Perfect for weddings, work & events",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C8102E", flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {suitTags.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          </div>

          {/* Shirts */}
          <div className="shop-card">
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <Image src="/images/white-formal-shirt-on-hanger-mens-closet.webp" alt="Dress shirts in-store at Enoch Tailor Shop Arlington Heights" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.8)" }} sizes="(max-width: 900px) 100vw, 30vw" />
            </div>
            <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "22px", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>Dress Shirts</h3>
              <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "16px" }}>
                Crisp quality shirts in a range of colors, patterns, and collar styles, paired and tailored on the spot with any suit. Available in all sizes, from slim fit to classic cut.
              </p>
              {/* Extra detail rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {[
                  "Solid, striped & patterned options",
                  "Spread, point & button-down collars",
                  "French cuff & standard cuff styles",
                  "Tailored on-site to fit perfectly",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C8102E", flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              {/* Tags pushed to bottom */}
              <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {shirtTags.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="shop-card">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "200px" }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image src="/images/multi-colored-patterned-silk-neckties-collection.webp" alt="Silk neckties and bowties collection at Enoch Tailor Shop" fill style={{ objectFit: "cover", filter: "brightness(0.8)" }} sizes="15vw" />
              </div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image src="/images/premium-leather-belts-with-silver-buckles.webp" alt="Premium leather belts at Enoch Tailor Shop" fill style={{ objectFit: "cover", filter: "brightness(0.8)" }} sizes="15vw" />
              </div>
            </div>
            <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "22px", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>Accessories</h3>
              <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "16px" }}>
                The finishing touches that complete every look. Curated men&apos;s accessories hand-picked to complement any suit or shirt in our collection.
              </p>
              {/* Extra detail rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {[
                  "Silk ties, bowties & pocket squares",
                  "Premium leather belts & suspenders",
                  "Cufflinks for every occasion",
                  "Perfectly paired with our suits",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C8102E", flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              {/* Tags pushed to bottom */}
              <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {accessories.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div ref={bannerRef} className="shop-banner">
          <div>
            <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
              Everything You Need, All Under One Roof
            </h3>
            <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "520px" }}>
              Walk in, pick your suit, get fitted, add a shirt and accessories. Walk out looking sharp. Our tailor is on-site to ensure everything fits perfectly.
            </p>
          </div>
          <div className="shop-banner-tags">
            {["Suits", "Shirts", "Ties", "Accessories", "Alterations"].map((item, i, arr) => (
              <span key={item} style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none", paddingRight: i < arr.length - 1 ? "16px" : "0" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .shop-section { background: #0D0D0D; padding: 100px 60px; }
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }
        .shop-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          transition: all 0.35s;
          display: flex;
          flex-direction: column;
        }
        .shop-card:hover { background: rgba(255,255,255,0.07); transform: translateY(-4px); border-color: rgba(200,16,46,0.2); }
        .shop-banner {
          background: #111111;
          border: 1px solid rgba(255,255,255,0.06);
          padding: 36px 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .shop-banner-tags { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }

        @media (max-width: 1100px) {
          .shop-section { padding: 80px 40px; }
          .shop-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .shop-section { padding: 64px 20px; }
          .shop-grid { grid-template-columns: 1fr; }
          .shop-banner { padding: 28px 20px; }
          .shop-banner-tags { display: none; }
        }
      `}</style>
    </section>
  );
}
