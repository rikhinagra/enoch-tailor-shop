"use client";

import { Phone, Mail, Globe } from "lucide-react";

const mensServices = ["Suit & Blazer Alterations", "Dress Shirt Tailoring", "Pants & Jeans Hemming", "Tuxedo Alterations", "Coat & Jacket Resizing", "Leather Jacket Repair"];
const womensServices = ["Dress & Skirt Alterations", "Wedding Gown Alterations", "Prom Dress Hemming", "Pants & Jeans Tailoring", "Blouse & Top Tapering", "Zipper Replacement"];
const shopItems = ["Suits from $289", "Dress Shirts", "Ties & Bowties", "Pocket Squares", "Belts & Suspenders", "Cufflinks"];

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p
        className="eyebrow"
        style={{ color: "rgba(255,255,255,0.35)", marginBottom: "16px", fontSize: "11px" }}
      >
        {title}
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
        {items.map((item) => (
          <li key={item}>
            <span
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(253,250,245,0.48)",
                lineHeight: 1.4,
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#000000" }} role="contentinfo" aria-label="Site footer">

      {/* ── Top area ── */}
      <div className="footer-top">

        {/* Brand — always full row on mobile */}
        <div className="footer-brand">
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            Enoch Tailor Shop
          </p>
          <p className="eyebrow" style={{ color: "#C8102E", fontSize: "11px", marginBottom: "16px" }}>
            Expert Alterations Since 1999
          </p>
          <p
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "rgba(253,250,245,0.46)",
              lineHeight: 1.75,
              marginBottom: "22px",
            }}
          >
            Arlington Heights&apos; most trusted tailoring and alteration service. Proudly serving
            men and women across the Chicago northwest suburbs for 25+ years.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href="tel:+18477668554"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(253,250,245,0.62)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8213E")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(253,250,245,0.62)")}
              aria-label="Call Enoch Tailor Shop"
            >
              <Phone size={13} strokeWidth={1.8} style={{ flexShrink: 0 }} aria-hidden="true" />
              (847) 766-8554
            </a>
          </div>
        </div>

      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", maxWidth: "1300px", margin: "0 auto" }} />

      {/* ── Copyright bar ── */}
      <div className="footer-copyright">
        {/* Row 1: copyright left — domain right */}
        <div className="footer-copyright-row">
          <p className="footer-copy-text">
            © 2026 Enoch Tailor Shop · 813 W Rand Rd · Arlington Heights, IL 60004
          </p>
        </div>
        {/* Row 2: credit — centered, always fully visible */}
        <div className="footer-credit-row">
          <p className="footer-copy-text">
            Designed &amp; Built by{" "}
            <a
              href="https://www.sachhsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                fontWeight: 600,
                letterSpacing: "0.08em",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8102E")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              aria-label="Website built by SACHHSOFT"
            >
              SACHHSOFT
            </a>
          </p>
        </div>
      </div>

      <style>{`
        /* ── Layout ── */
        .footer-top {
          max-width: 1300px;
          margin: 0 auto;
          padding: 72px 60px 60px;
          display: grid;
          grid-template-columns: 1.3fr 2fr;
          gap: 64px;
          align-items: start;
        }
        .footer-brand {
          /* brand column stays as-is */
        }
        .footer-services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .footer-copyright {
          max-width: 1300px;
          margin: 0 auto;
          padding: 18px 60px 24px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .footer-copyright-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }
        .footer-credit-row {
          display: flex;
          justify-content: flex-start;
          padding-top: 0;
        }
        .footer-copy-text {
          font-family: var(--font-jost), sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.22);
          letter-spacing: 0.04em;
        }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .footer-top { padding: 64px 40px 52px; gap: 48px; }
          .footer-copyright { padding: 18px 40px 22px; }
        }

        /* ── Small tablet: stack brand above, services 3-col below ── */
        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 56px 40px 48px;
          }
          .footer-services {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .footer-top {
            padding: 48px 20px 40px;
            gap: 36px;
          }
          /* Brand + contacts in a cleaner compact block */
          .footer-brand p:first-child { font-size: 20px; }

          /* 3 service columns → 2 columns on mobile */
          .footer-services {
            grid-template-columns: 1fr 1fr;
            gap: 28px 20px;
          }
          /* Last service column (In-Store Shop) spans full width */
          .footer-services > div:last-child {
            grid-column: 1 / -1;
            padding-top: 4px;
            border-top: 1px solid rgba(255,255,255,0.06);
          }
          /* Horizontal scroll for shop items on mobile */
          .footer-services > div:last-child ul {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 6px !important;
          }
          .footer-services > div:last-child ul li span {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.08);
            padding: 4px 10px;
            font-size: 12px !important;
            white-space: nowrap;
          }

          .footer-copyright { padding: 16px 20px 20px; gap: 4px; }
          .footer-copyright-row { flex-direction: row; align-items: flex-start; flex-wrap: wrap; gap: 4px; }
          .footer-domain { display: none; }
        }

        /* ── Extra small ── */
        @media (max-width: 380px) {
          .footer-services {
            grid-template-columns: 1fr;
          }
          .footer-services > div:last-child {
            grid-column: auto;
          }
        }
      `}</style>
    </footer>
  );
}
