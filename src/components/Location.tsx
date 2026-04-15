"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "10:00 am – 6:00 pm", closed: false },
  { day: "Saturday", time: "9:00 am – 3:00 pm", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

const serviceAreas = ["Arlington Heights", "Palatine", "Mount Prospect", "Rolling Meadows", "Buffalo Grove", "Barrington"];

export default function Location() {
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }); },
      { threshold: 0.08 }
    );
    [headRef.current, contentRef.current].forEach((el) => {
      if (el) { el.classList.add("reveal"); observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" aria-labelledby="location-heading" className="location-section">
      <div className="section-container">
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "16px" }}>Visit Us</p>
          <h2 id="location-heading" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, color: "#0D0D0D", lineHeight: 1.1 }}>
            Come Find Us in{" "}
            <em style={{ fontStyle: "italic", color: "#C8102E" }}>Arlington Heights</em>
          </h2>
        </div>

        <div ref={contentRef} className="location-grid">
          {/* Left — Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

            {/* Address */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <MapPin size={14} color="#C8102E" strokeWidth={2} aria-hidden="true" />
                <p className="eyebrow" style={{ color: "#C8102E", fontSize: "11px" }}>Address</p>
              </div>
              <address style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "16px", fontWeight: 400, color: "#0D0D0D", fontStyle: "normal", lineHeight: 1.6 }}>
                813 W Rand Rd, Suite A<br />Arlington Heights, IL 60004
              </address>
            </div>

            {/* Phone */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <Phone size={14} color="#C8102E" strokeWidth={2} aria-hidden="true" />
                <p className="eyebrow" style={{ color: "#C8102E", fontSize: "11px" }}>Phone</p>
              </div>
              <a href="tel:+18477668554" style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "22px", fontWeight: 500, color: "#0D0D0D", textDecoration: "none", transition: "color 0.3s", display: "block" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8102E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#0D0D0D")}
                aria-label="Call Enoch Tailor Shop"
              >
                (847) 766-8554
              </a>
            </div>

            {/* Email */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <Mail size={14} color="#C8102E" strokeWidth={2} aria-hidden="true" />
                <p className="eyebrow" style={{ color: "#C8102E", fontSize: "11px" }}>Email</p>
              </div>
              <a href="mailto:info@enochtailor.shop" style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "15px", fontWeight: 400, color: "#0D0D0D", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8102E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#0D0D0D")}
              >
                info@enochtailor.shop
              </a>
            </div>

            {/* Hours */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <Globe size={14} color="#C8102E" strokeWidth={2} aria-hidden="true" />
                <p className="eyebrow" style={{ color: "#C8102E", fontSize: "11px" }}>Hours of Operation</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {hours.map(({ day, time, closed }) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #ECECEC", gap: "16px" }}>
                    <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "13px", fontWeight: 500, color: "#0D0D0D" }}>{day}</span>
                    <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "13px", fontWeight: 300, color: closed ? "#C8102E" : "#777" }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <p className="eyebrow" style={{ color: "#C8102E", marginBottom: "12px", fontSize: "11px" }}>Serving</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {serviceAreas.map((area) => (
                  <span key={area} style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "11px", fontWeight: 500, color: "#0D0D0D", background: "#F8F8F8", border: "1px solid #CCCCCC", padding: "5px 12px", letterSpacing: "0.04em" }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="tel:+18477668554" className="btn-base btn-gold" aria-label="Call Enoch Tailor Shop">
                <Phone size={14} strokeWidth={2.5} />
                Call Now
              </a>
              <a href="https://maps.google.com/?q=813+W+Rand+Rd+Suite+A+Arlington+Heights+IL+60004" target="_blank" rel="noopener noreferrer" className="btn-base btn-forest-sm" style={{ padding: "16px 28px" }} aria-label="Get directions to Enoch Tailor Shop">
                <MapPin size={14} strokeWidth={2.5} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Right — Map */}
          <div style={{ border: "1px solid #CCCCCC", overflow: "hidden", aspectRatio: "4/3", minHeight: "300px", width: "100%", maxWidth: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.4287853956076!2d-87.98897492349396!3d42.065267671218244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb9c0f1b1e9c3%3A0x6d5d8f2c2b1a4e0!2s813%20W%20Rand%20Rd%2C%20Arlington%20Heights%2C%20IL%2060004!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Enoch Tailor Shop location — 813 W Rand Rd, Arlington Heights, IL 60004"
            />
          </div>
        </div>
      </div>

      <style>{`
        .location-section { background: #fff; padding: 100px 60px; }
        .location-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        @media (max-width: 1100px) {
          .location-section { padding: 80px 40px; }
          .location-grid { gap: 40px; }
        }
        @media (max-width: 900px) {
          .location-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .location-section { padding: 64px 20px; }
        }
      `}</style>
    </section>
  );
}
