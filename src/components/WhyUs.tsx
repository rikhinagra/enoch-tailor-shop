"use client";

import { useEffect, useRef } from "react";
import { Scissors, Zap, DollarSign, Users, Shirt, Phone } from "lucide-react";

const cards = [
  {
    Icon: Scissors,
    title: "25+ Years of Mastery",
    description: "Two decades perfecting every garment for the Arlington Heights community. Experience you can feel in every stitch.",
  },
  {
    Icon: Zap,
    title: "Fast Turnarounds",
    description: "We respect your schedule. Efficient process, quick returns. Never cutting corners on quality.",
  },
  {
    Icon: DollarSign,
    title: "Fair, Honest Prices",
    description: "No surprises, no hidden fees. Upfront quotes and exceptional work at prices your neighbors recommend.",
  },
  {
    Icon: Users,
    title: "Friendly Local Shop",
    description: "Walk in as a customer, leave as a regular. Warm, welcoming, and genuinely happy to help you look your best.",
  },
  {
    Icon: Shirt,
    title: "Every Garment Welcome",
    description: "Everyday denim to designer couture, work basics to bridal. Every piece gets the same expert care.",
  },
  {
    Icon: Phone,
    title: "Call Us Anytime",
    description: "Have a question before you come in? Call the tailor directly. We're here to help: (847) 766-8554.",
  },
];

export default function WhyUs() {
  const headRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }); },
      { threshold: 0.08 }
    );
    if (headRef.current) { headRef.current.classList.add("reveal"); observer.observe(headRef.current); }
    cardRefs.current.forEach((el, i) => {
      if (el) { el.classList.add("reveal", `rd${Math.min(i + 1, 6)}`); observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      aria-labelledby="whyus-heading"
      className="whyus-section"
    >
      <div className="section-container">
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "16px" }}>Why Locals Choose Us</p>
          <h2
            id="whyus-heading"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, color: "#fff", lineHeight: 1.1 }}
          >
            Arlington Heights&apos;{" "}
            <em style={{ fontStyle: "italic", color: "#E8213E" }}>Most Trusted</em> Tailor
          </h2>
        </div>

        <div className="whyus-grid">
          {cards.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="whyus-card"
            >
              <div className="whyus-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.5} color="#C8102E" />
              </div>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "22px", fontWeight: 600, color: "#fff", marginBottom: "10px", lineHeight: 1.2 }}>
                {title}
              </h3>
              <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .whyus-section {
          background: linear-gradient(140deg, #111111 0%, #000000 100%);
          padding: 100px 60px;
        }
        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .whyus-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 36px 30px;
          transition: all 0.35s;
          cursor: default;
        }
        .whyus-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-4px);
          border-color: rgba(200,16,46,0.25);
        }
        .whyus-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(200,16,46,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          background: rgba(200,16,46,0.07);
        }
        @media (max-width: 1100px) {
          .whyus-section { padding: 80px 40px; }
          .whyus-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .whyus-section { padding: 64px 20px; }
          .whyus-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
