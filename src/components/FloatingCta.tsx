"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="floatingCta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 998, display: "flex", flexDirection: "column", gap: "8px" }}
          aria-label="Quick contact"
        >
          <a
            href="tel:+18477668554"
            className="float-btn float-call"
            aria-label="Call Enoch Tailor Shop — (847) 766-8554"
          >
            <Phone size={14} strokeWidth={2.5} />
            Call the Tailor
          </a>
          <a
            href="https://maps.google.com/?q=813+W+Rand+Rd+Suite+A+Arlington+Heights+IL+60004"
            target="_blank"
            rel="noopener noreferrer"
            className="float-btn float-dir"
            aria-label="Get directions to Enoch Tailor Shop"
          >
            <MapPin size={14} strokeWidth={2.5} />
            Directions
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
