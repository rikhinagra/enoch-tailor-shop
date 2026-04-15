"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ── Platform logo SVGs ── */
function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google" role="img">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function YelpLogo() {
  return (
    <svg width="14" height="16" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg" aria-label="Yelp" role="img">
      <path fill="#FF1A1A" d="M20.16 17.63c-.41 1.17-2.43 3.99-3.66 4.51-.52.22-1.04.09-1.39-.34l-3.04-3.84c-.28-.36-.34-.77-.17-1.19.17-.4.54-.67.98-.72l4.84-.6c.59-.07 1.1.2 1.34.74.13.28.17.98.1 1.44zm-3.97-6.24l4.53-1.86c.56-.23 1.1-.02 1.41.54.17.3.55 1.52.55 2.76 0 1.26-.22 2.37-.39 2.58-.28.35-.79.44-1.35.2l-4.52-1.88c-.42-.18-.67-.55-.67-1.02 0-.47.26-.86.44-1.02.09-.08.0-.3 0-.3zm-3.54-1.63L10.3 4.9c-.27-.56-.06-1.14.52-1.44.3-.16 1.52-.54 2.77-.54 1.24 0 2.35.21 2.56.38.36.28.45.79.2 1.36l-1.87 4.52c-.18.42-.55.66-1.02.66-.47 0-.86-.25-1.01-.43-.09-.1-.3 0-.3 0h.5-.5zm-3.25 2.83L4.88 9.74c-.59-.07-1.01-.49-1.01-1.08 0-.31.26-1.55.87-2.63.62-1.1 1.33-1.93 1.57-2.04.42-.2.92-.04 1.22.4l2.82 3.96c.26.36.28.78.07 1.18-.22.4-.62.64-1.06.64l-.01-.01h.12-.12zM5.37 19.97c-.32-.5-.19-1.07.33-1.42l4.02-2.72c.37-.25.8-.26 1.18-.03.39.24.59.65.54 1.1l-.52 4.86c-.06.6-.46 1-.99 1-.29 0-1.48-.35-2.5-1.03-1.04-.69-1.82-1.47-2.06-1.76z"/>
    </svg>
  );
}

function PlatformBadge({ platform }: { platform: "Google" | "Yelp" }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "#fff",
        border: "1px solid #e8e8e8",
        padding: "5px 10px",
        borderRadius: "4px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      {platform === "Google" ? <GoogleLogo /> : <YelpLogo />}
      <span
        style={{
          fontFamily: "var(--font-jost), sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          color: platform === "Google" ? "#444" : "#FF1A1A",
        }}
      >
        {platform}
      </span>
    </div>
  );
}

const Stars = ({ count }: { count: number }) => (
  <span aria-label={`${count} out of 5 stars`} style={{ color: "#F5C518", fontSize: "14px", letterSpacing: "1px" }}>
    {"★".repeat(count)}
  </span>
);

const reviews = [
  {
    name: "Michael R.",
    location: "Arlington Heights",
    quote: "Best tailor in Arlington Heights. Took in my suit before a big interview. Perfect fit, incredibly fast turnaround.",
    platform: "Yelp" as const,
    rating: 5,
    avatar: "https://i.pravatar.cc/48?img=11",
  },
  {
    name: "Sarah K.",
    location: "Mount Prospect",
    quote: "Brought my wedding dress here. So careful and precise. It fit perfectly on my wedding day. Couldn't be happier.",
    platform: "Google" as const,
    rating: 5,
    avatar: "https://i.pravatar.cc/48?img=47",
  },
  {
    name: "James L.",
    location: "Palatine",
    quote: "Had my leather jacket repaired. Thought it was done for. They brought it back to life. Incredible skill, totally fair price.",
    platform: "Yelp" as const,
    rating: 5,
    avatar: "https://i.pravatar.cc/48?img=3",
  },
  {
    name: "Dave T.",
    location: "Buffalo Grove",
    quote: "Bringing my jeans and dress pants here for years. Perfect hems every single time. Wouldn't go anywhere else.",
    platform: "Google" as const,
    rating: 5,
    avatar: "https://i.pravatar.cc/48?img=51",
  },
  {
    name: "Ashley W.",
    location: "Rolling Meadows",
    quote: "Got my prom dress altered last minute and they pulled it off beautifully. Friendly, fast, and fair. I felt amazing!",
    platform: "Google" as const,
    rating: 5,
    avatar: "https://i.pravatar.cc/48?img=44",
  },
  {
    name: "Christine M.",
    location: "Barrington",
    quote: "Designer blazer alteration, handled with such care, looked custom from the start. Truly professional work.",
    platform: "Google" as const,
    rating: 5,
    avatar: "https://i.pravatar.cc/48?img=46",
  },
];

export default function Testimonials() {
  const headRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); });
      },
      { threshold: 0.08 }
    );
    if (headRef.current) {
      headRef.current.classList.add("reveal");
      observer.observe(headRef.current);
    }
    cardRefs.current.forEach((el, i) => {
      if (el) {
        el.classList.add("reveal", `rd${Math.min(i + 1, 6)}`);
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="testimonials-section"
    >
      <div className="section-container">

        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "16px", fontSize: "15px" }}>
            What Locals Are Saying
          </p>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(24px, 2.8vw, 38px)",
              fontWeight: 500,
              color: "#0D0D0D",
              lineHeight: 1.1,
              marginBottom: "14px",
            }}
          >
            Trusted by Your{" "}
            <em style={{ fontStyle: "italic", color: "#C8102E" }}>Neighbors</em>
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <Stars count={5} />
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "13px", color: "#777", fontWeight: 400 }}>
              200+ 5-star reviews across Yelp &amp; Google
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <article
              key={review.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="testimonial-card"
            >
              {/* Top row: platform badge + stars */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <PlatformBadge platform={review.platform} />
                <Stars count={review.rating} />
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#0D0D0D",
                  lineHeight: 1.65,
                  flex: 1,
                  marginBottom: "24px",
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid #ECECEC",
                    position: "relative",
                  }}
                >
                  <Image
                    src={review.avatar}
                    alt={`Photo of ${review.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="42px"
                    unoptimized
                  />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "13px", fontWeight: 600, color: "#0D0D0D" }}>
                    {review.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "11px", fontWeight: 400, color: "#999", letterSpacing: "0.04em" }}>
                    {review.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section { background: #F4F4F4; padding: 100px 60px; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .testimonial-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          padding: 32px;
          transition: all 0.35s;
          cursor: default;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .testimonial-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }
        @media (max-width: 1100px) {
          .testimonials-section { padding: 80px 40px; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .testimonials-section { padding: 64px 20px; }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
