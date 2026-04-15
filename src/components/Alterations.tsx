"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const mensCategories = [
  {
    title: "Suits & Blazers",
    services: ["Sleeve tapering", "Body shaping", "Shoulder reshaping", "Full resizing", "Lining repair"],
  },
  {
    title: "Shirts & Tops",
    services: ["Side seam tapering", "Sleeve shortening", "Collar & cuff", "Hem shaping"],
  },
  {
    title: "Pants, Chinos & Jeans",
    services: ["Hemming", "Leg tapering", "Waist & seat", "Inseam repair", "Chain stitch denim"],
  },
  {
    title: "Coats & Outerwear",
    services: ["Sleeve & body", "Lining replacement", "Hem shortening", "Zipper replacement"],
  },
  {
    title: "Tuxedos & Formalwear",
    services: ["Tuxedo alterations", "Rental suit fitting", "Military uniforms", "Rush service"],
  },
];

const womensCategories = [
  {
    title: "Dresses & Skirts",
    services: ["Hem shortening", "Waist & bodice", "Strap modification", "Zipper repair", "Lining"],
  },
  {
    title: "Bridal & Wedding Gowns",
    services: ["Gown hemming", "Bustle attachment", "Bodice fitting", "Bridesmaid dresses", "Bead repair"],
  },
  {
    title: "Pants, Jeans & Tops",
    services: ["Jeans hemming", "Waist shaping", "Blouse tapering", "Knit alterations"],
  },
  {
    title: "Prom, Gala & Party Wear",
    services: ["Prom hemming", "Formal gown resizing", "Strapless bodice", "Rush service"],
  },
  {
    title: "Jackets, Blazers & Coats",
    services: ["Sleeve tapering", "Shoulder adjustment", "Coat hemming", "Button & zipper"],
  },
];

function ServiceCategory({ title, services }: { title: string; services: string[] }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 22px",
        marginBottom: "8px",
        transition: "all 0.35s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "16px",
          fontWeight: 600,
          color: "#fff",
          marginBottom: "8px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "var(--font-jost), sans-serif",
          fontSize: "12px",
          fontWeight: 300,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
        }}
      >
        {services.join(" · ")}
      </p>
    </div>
  );
}

function AlterationColumn({
  gender,
  image,
  imageAlt,
  categories,
  delay,
}: {
  gender: string;
  image: string;
  imageAlt: string;
  categories: { title: string; services: string[] }[];
  delay: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal", `rd${delay}`);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("in-view"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        background: gender === "men" ? "#0D0D0D" : "#1A1A1A",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.75) sepia(0.15)" }}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "28px",
          }}
        >
          <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "6px", fontSize: "11px" }}>
            {gender === "men" ? "Men's" : "Women's"} Alterations
          </p>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(26px, 2.5vw, 34px)",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            {gender === "men" ? "For Him" : "For Her"}
          </h3>
        </div>
      </div>

      {/* Services */}
      <div style={{ padding: "32px 28px 40px" }}>
        {categories.map((cat) => (
          <ServiceCategory key={cat.title} title={cat.title} services={cat.services} />
        ))}

      </div>
    </div>
  );
}

export default function Alterations() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.classList.add("reveal");
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("in-view"); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="alterations"
      aria-labelledby="alterations-heading"
      style={{ background: "#F8F8F8" }}
    >
      {/* Section header */}
      <div
        ref={headRef}
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "100px 60px 60px",
          textAlign: "center",
        }}
        className="alt-header"
      >
        <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "16px", fontSize: "15px" }}>
          Expert Alterations
        </p>
        <h2
          id="alterations-heading"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(24px, 2.8vw, 38px)",
            fontWeight: 500,
            color: "#0D0D0D",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          For Him &amp; For Her
        </h2>
        <p
          style={{
            fontFamily: "var(--font-jost), sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            color: "#777",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.75,
          }}
        >
          Every garment, every occasion, every age. Men&apos;s and women&apos;s alterations handled
          with the same 25+ years of expert skill.
        </p>
      </div>

      {/* Two-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "1300px",
          margin: "0 auto",
          paddingBottom: "80px",
        }}
        className="alt-grid"
      >
        <AlterationColumn
          gender="men"
          image="/images/mens-fashion-mannequin-display-tweed-blazer-and-plaid-suit.webp"
          imageAlt="Men's suit and blazer alterations at Enoch Tailor Shop Arlington Heights"
          categories={mensCategories}
          delay="1"
        />
        <AlterationColumn
          gender="women"
          image="/images/beautiful-bride-in-lace-wedding-dress-with-veil-blowing-in-the-wind.webp"
          imageAlt="Women's and bridal gown alterations at Enoch Tailor Shop Arlington Heights"
          categories={womensCategories}
          delay="2"
        />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .alt-grid { grid-template-columns: 1fr !important; }
          .alt-header { padding: 80px 40px 40px !important; }
        }
        @media (max-width: 600px) {
          .alt-header { padding: 64px 24px 32px !important; }
        }
      `}</style>
    </section>
  );
}
