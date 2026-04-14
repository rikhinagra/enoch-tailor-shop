import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Enoch Tailor Shop",
  description: "The page you're looking for doesn't exist. Return to Enoch Tailor Shop — Arlington Heights' most trusted tailor since 1999.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a", overflow: "hidden" }}>
      <Image
        src="/images/professional-tailor-studio-with-vintage-sewing-machine.webp"
        alt="Enoch Tailor Shop interior"
        fill
        priority
        style={{ objectFit: "cover", opacity: 0.22 }}
        sizes="100vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.92))" }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "40px 24px", maxWidth: "600px" }}>
        <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "20px" }}>
          Enoch Tailor Shop · Arlington Heights, IL
        </p>
        <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(80px, 15vw, 140px)", fontWeight: 300, color: "rgba(255,255,255,0.08)", lineHeight: 1, marginBottom: "4px" }} aria-label="Error 404">
          404
        </h1>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 500, color: "#fff", lineHeight: 1.2, marginBottom: "16px" }}>
          Page Not Found
        </h2>
        <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "40px" }}>
          This page seems to have gone missing, much like an ill-fitting suit. Let&apos;s get you back to a perfect fit.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" className="btn-base btn-gold" aria-label="Return to Enoch Tailor Shop homepage">
            <ArrowLeft size={14} strokeWidth={2.5} />
            Back to Homepage
          </a>
          <a href="tel:+18477668554" className="btn-base btn-ghost" aria-label="Call Enoch Tailor Shop">
            <Phone size={14} strokeWidth={2.5} />
            (847) 766-8554
          </a>
        </div>
      </div>
    </div>
  );
}
