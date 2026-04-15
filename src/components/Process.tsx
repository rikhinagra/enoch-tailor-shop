"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

const steps = [
  { number: "01", title: "Bring It In", description: "Walk in on Rand Road. No appointment needed for most alterations." },
  { number: "02", title: "Fitting & Quote", description: "We assess your garment, talk through your needs, and give an honest upfront price." },
  { number: "03", title: "Expert Work", description: "Our tailor gets to work with precision. Every stitch done right, first time." },
  { number: "04", title: "Pick Up & Love It", description: "Try it on and leave with clothes that fit the way they were always meant to." },
];

export default function Process() {
  const photoRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }); },
      { threshold: 0.08 }
    );
    [photoRef.current, headRef.current].forEach((el) => {
      if (el) { el.classList.add("reveal"); observer.observe(el); }
    });
    stepRefs.current.forEach((el, i) => {
      if (el) { el.classList.add("reveal", `rd${i + 1}`); observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-labelledby="process-heading" style={{ background: "#F8F8F8" }}>
      {/* Quote photo */}
      <div ref={photoRef} style={{ position: "relative", height: "340px", overflow: "hidden" }}>
        <Image
          src="/images/classic-tailor-shop-display-with-bespoke-suit-and-sewing-machine.webp"
          alt="Classic tailor studio with bespoke suits — Enoch Tailor Shop Arlington Heights"
          fill
          style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.38) sepia(0.2)" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
          <blockquote style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(20px, 2.5vw, 32px)", fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.9)", textAlign: "center", maxWidth: "700px", lineHeight: 1.5 }}>
            &ldquo;We treat every garment as if it were our own, with care, precision, and pride in the craft.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Steps */}
      <div className="process-section">
        <div className="section-container">
          <div ref={headRef} style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "16px", fontSize: "15px" }}>How It Works</p>
            <h2 id="process-heading" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(24px, 2.8vw, 38px)", fontWeight: 500, color: "#0D0D0D", lineHeight: 1.1 }}>
              Simple.{" "}
              <em style={{ fontStyle: "italic", color: "#C8102E" }}>Easy.</em> Perfect Fit.
            </h2>
          </div>

          <div className="process-grid">
            {steps.map((step, i) => (
              <div key={step.number} ref={(el) => { stepRefs.current[i] = el; }} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "60px", fontWeight: 300, color: "rgba(200,16,46,0.12)", lineHeight: 1, marginBottom: "14px" }} aria-hidden="true">
                  {step.number}
                </div>
                <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, #C8102E, transparent)", margin: "0 auto 18px" }} aria-hidden="true" />
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "22px", fontWeight: 600, color: "#0D0D0D", marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "14px", fontWeight: 300, color: "#777", lineHeight: 1.75 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <a href="tel:+18477668554" className="btn-base btn-gold" aria-label="Call Enoch Tailor Shop to get started">
              <Phone size={14} strokeWidth={2.5} />
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .process-section { padding: 100px 60px; }
        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        @media (max-width: 1100px) { .process-section { padding: 80px 40px; } }
        @media (max-width: 900px) { .process-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; } }
        @media (max-width: 600px) {
          .process-section { padding: 64px 20px; }
          .process-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
        }
        @media (max-width: 380px) {
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
