"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Scissors, MapPin, Clock, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero — Enoch Tailor Shop"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", backgroundColor: "#0a0a0a" }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.88,
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <source src="/videos/luxury-bespoke-tailoring-craftsmanship-showcase.mp4" type="video/mp4" />
      </video>
      {/* Fallback image if video fails */}
      <Image
        src="/images/tailor-hands-working-on-tweed-fabric-bespoke-craftsmanship.webp"
        alt="Expert tailor crafting bespoke garments at Enoch Tailor Shop, Arlington Heights IL"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.45, zIndex: -1 }}
        sizes="100vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 100%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 45%)", zIndex: 1 }} />

      <div className="hero-inner" style={{ position: "relative", zIndex: 2 }}>
        {/* Left — Headline */}
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ color: "#C8102E", marginBottom: "20px", textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)" }}
          >
            Arlington Heights, IL · Since 1999
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-h1"
          >
            Tailored to{" "}
            <em style={{ fontStyle: "italic", color: "#E8213E" }}>Fit.</em>
            <br />
            Built to Last.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hero-sub"
          >
            Arlington Heights&apos; most trusted tailor for over 25 years. Expert alterations for
            men and women: suits, gowns, jeans, leather, and everything in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-trust"
          >
            <div className="trust-badge">
              <span style={{ color: "#F5C518", fontSize: "13px", letterSpacing: "2px" }}>★★★★★</span>
              <span className="trust-text">Highly Rated on Yelp &amp; Google</span>
            </div>
            <span className="trust-sub">Trusted by thousands of locals</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="hero-btns"
          >
            <a href="tel:+18477668554" className="btn-base btn-gold" aria-label="Call Enoch Tailor Shop at (847) 766-8554">
              <Phone size={14} strokeWidth={2.5} />
              Call the Tailor
            </a>
            <button onClick={() => scrollTo("#alterations")} className="btn-base btn-ghost" aria-label="See our alteration services">
              <Scissors size={14} strokeWidth={2} />
              See Our Services
            </button>
          </motion.div>
        </div>

        {/* Right — Glass card */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-card"
          aria-label="Quick business info"
        >
          <div style={{ border: "1px dashed rgba(200,184,154,0.18)", padding: "32px", height: "100%" }}>
            <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "24px" }}>Visit Us</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <MapPin size={16} color="#C8102E" style={{ marginTop: "3px", flexShrink: 0 }} aria-hidden="true" />
                <div>
                  <p className="eyebrow" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "5px", fontSize: "11px" }}>Address</p>
                  <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "15px", fontWeight: 400, color: "#fff", lineHeight: 1.6 }}>
                    813 W Rand Rd, Suite A<br />Arlington Heights, IL 60004
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Phone size={16} color="#C8102E" style={{ marginTop: "3px", flexShrink: 0 }} aria-hidden="true" />
                <div>
                  <p className="eyebrow" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "5px", fontSize: "11px" }}>Phone</p>
                  <a href="tel:+18477668554" style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "16px", fontWeight: 500, color: "#fff", textDecoration: "none" }}>
                    (847) 766-8554
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Clock size={16} color="#C8102E" style={{ marginTop: "3px", flexShrink: 0 }} aria-hidden="true" />
                <div>
                  <p className="eyebrow" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "5px", fontSize: "11px" }}>Hours</p>
                  <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "14px", fontWeight: 400, color: "#fff", lineHeight: 1.7 }}>
                    Mon–Fri: 10am – 6pm<br />Sat: 9am – 3pm · Closed Sun
                  </p>
                </div>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                <a
                  href="https://maps.google.com/?q=813+W+Rand+Rd+Suite+A+Arlington+Heights+IL+60004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-gold-sm"
                  style={{ justifyContent: "center", width: "100%" }}
                  aria-label="Get directions to Enoch Tailor Shop"
                >
                  <MapPin size={13} strokeWidth={2.5} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("#alterations")}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", zIndex: 3, background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
        aria-label="Scroll to alterations section"
      >
        <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} color="rgba(200,16,46,0.7)" />
        </motion.div>
      </motion.button>

      <style>{`
        .hero-inner {
          position: relative;
          z-index: 3;
          max-width: 1300px;
          margin: 0 auto;
          padding: 130px 60px 90px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: center;
        }
        .hero-h1 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(48px, 6.5vw, 88px);
          font-weight: 600;
          line-height: 1.05;
          color: #fff;
          margin-bottom: 28px;
          text-shadow: 0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5);
        }
        .hero-sub {
          font-family: var(--font-jost), sans-serif;
          font-size: clamp(14px, 1.5vw, 17px);
          font-weight: 400;
          line-height: 1.75;
          color: rgba(255,255,255,0.95);
          max-width: 520px;
          margin-bottom: 36px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.8);
        }
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 10px 16px;
          backdrop-filter: blur(8px);
        }
        .trust-text {
          font-family: var(--font-jost), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.05em;
          white-space: nowrap;
          text-shadow: 0 1px 6px rgba(0,0,0,0.8);
        }
        .trust-sub {
          font-family: var(--font-jost), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.08em;
          text-shadow: 0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8);
        }
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-card {
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(14px);
          padding: 40px 36px;
          align-self: center;
        }

        @media (max-width: 1100px) {
          .hero-inner { padding: 120px 40px 80px; gap: 40px; grid-template-columns: 1fr 360px; }
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr !important; padding: 110px 40px 70px !important; }
          .hero-card { display: none !important; }
        }
        @media (max-width: 600px) {
          .hero-inner { padding: 100px 20px 60px !important; }
          .hero-btns { flex-direction: column; }
          .hero-btns a, .hero-btns button { justify-content: center; width: 100%; }
          .trust-badge { flex-wrap: wrap; }
        }
        @media (max-width: 400px) {
          .hero-inner { padding: 90px 16px 60px !important; }
        }
      `}</style>
    </section>
  );
}
