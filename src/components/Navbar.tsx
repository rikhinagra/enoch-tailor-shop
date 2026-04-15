"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Alterations", href: "#alterations" },
  { label: "Repairs", href: "#repairs" },
  { label: "In-Store Shop", href: "#shop" },
  { label: "Find Us", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        id="mainNav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              textAlign: "left",
            }}
            aria-label="Enoch Tailor Shop — Home"
          >
            <span className="nav-logo-name">Enoch Tailor Shop</span>
            <span className="nav-logo-sub">Arlington Heights, IL</span>
          </button>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="nav-link-btn"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a href="tel:+18477668554" className="nav-call-btn" aria-label="Call (847) 766-8554">
                <Phone size={13} strokeWidth={2.5} />
                Call Tailor
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} color="#fff" /> : <Menu size={22} color="#fff" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="mobile-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ marginTop: "12px" }}>
                <a href="tel:+18477668554" className="mobile-call-btn" aria-label="Call Enoch Tailor Shop">
                  <Phone size={14} strokeWidth={2.5} />
                  (847) 766-8554 · Call Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 20px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: padding 0.4s ease;
        }
        .nav-logo-name {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .nav-logo-sub {
          font-family: var(--font-jost), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 32px;
          align-items: center;
        }
        .nav-link-btn {
          font-family: var(--font-jost), sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.72);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          transition: color 0.3s;
        }
        .nav-link-btn:hover { color: #E8213E; }
        .nav-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #C8102E;
          color: #fff;
          font-family: var(--font-jost), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          padding: 11px 20px;
          text-decoration: none;
          transition: all 0.3s;
        }
        .nav-call-btn:hover { background: #E8213E; transform: translateY(-1px); }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu {
          position: fixed;
          top: 62px;
          left: 0;
          right: 0;
          z-index: 999;
          background: rgba(8,8,8,0.98);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 20px 24px 28px;
        }
        .mobile-link {
          display: block;
          width: 100%;
          text-align: left;
          font-family: var(--font-jost), sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          padding: 14px 0;
          transition: color 0.3s;
        }
        .mobile-link:hover { color: #E8213E; }
        .mobile-call-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          justify-content: center;
          background: #C8102E;
          color: #fff;
          font-family: var(--font-jost), sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 14px 20px;
          text-decoration: none;
          transition: background 0.3s;
        }
        .mobile-call-btn:hover { background: #E8213E; }

        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .nav-inner { padding: 18px 24px !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .nav-inner { padding: 20px 40px !important; }
          .nav-links { gap: 22px !important; }
        }
      `}</style>
    </>
  );
}
