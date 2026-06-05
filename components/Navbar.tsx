"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "La empresa",      href: "#quienes-somos" },
  { label: "Divisiones",      href: "#divisiones" },
  { label: "Proyectos",       href: "#proyectos" },
  { label: "Plantas",         href: "#plantas" },
  { label: "Tecnología",      href: "#tecnologia" },
  { label: "Sustentabilidad", href: "#sustentabilidad" },
  { label: "Carreras",        href: "#trabaja" },
  { label: "Contacto",        href: "#contacto" },
];

const LANGS = [
  { code: "ES", label: "Español",    available: true  },
  { code: "EN", label: "English",    available: false },
  { code: "PT", label: "Português",  available: false },
];

export default function Navbar() {
  const [solid, setSolid]       = useState(false);
  const [open, setOpen]         = useState(false);
  const [lang, setLang]         = useState("ES");
  const [toast, setToast]       = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLang = (code: string, available: boolean) => {
    if (available) {
      setLang(code);
      return;
    }
    setLang(code);
    const label = LANGS.find(l => l.code === code)?.label ?? code;
    setToast(`Versión en ${label} próximamente disponible`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      {/* ── Toast notification ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "5rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
              background: "#0B1C2C",
              color: "#fff",
              padding: "0.65rem 1.5rem",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            <Globe size={12} style={{ display: "inline", marginRight: "0.4rem", verticalAlign: "middle", color: "#C4773A" }} />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Navbar ── */}
      <motion.header
        initial={{ y: -68, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: solid
            ? "rgba(255,255,255,0.97)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)",
          backdropFilter: solid ? "blur(12px)" : "none",
          borderBottom: solid ? "1px solid #E2E1DC" : "1px solid transparent",
          boxShadow: solid ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          className="wrap"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}
        >
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span style={{
              fontWeight: 900,
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: solid ? "#0B1C2C" : "#fff",
              textShadow: solid ? "none" : "0 1px 4px rgba(0,0,0,0.4)",
              transition: "color 0.3s",
            }}>
              Grupo Cinterra
            </span>
            <span style={{
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4773A",
            }}>
              S.A.
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden xl:flex" style={{ alignItems: "center", gap: "0" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{
                  padding: "0.5rem 0.875rem",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: solid ? "#6B7B8D" : "rgba(255,255,255,0.85)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = solid ? "#0B1C2C" : "#fff"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = solid ? "#6B7B8D" : "rgba(255,255,255,0.85)"}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right: lang + mobile */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>

            {/* Language switcher */}
            <div
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: "0.5rem",
                paddingLeft: "1rem",
                borderLeft: solid ? "1px solid #E2E1DC" : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {LANGS.map(({ code, available }) => (
                <button
                  key={code}
                  onClick={() => handleLang(code, available)}
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    padding: "0.2rem 0.3rem",
                    borderRadius: "1px",
                    transition: "all 0.2s",
                    color: lang === code
                      ? (solid ? "#0B1C2C" : "#fff")
                      : (solid ? "#C0BBB4" : "rgba(255,255,255,0.28)"),
                    borderBottom: lang === code ? "1.5px solid #C4773A" : "1.5px solid transparent",
                  }}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden"
              style={{ color: solid ? "#0B1C2C" : "#fff", transition: "color 0.3s" }}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              zIndex: 40,
              background: "#fff",
              borderBottom: "1px solid #E2E1DC",
            }}
            className="xl:hidden"
          >
            <div className="wrap" style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}>
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.href)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "0.8rem 0",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#6B7B8D",
                    borderBottom: "1px solid #F0EDE8",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#0B1C2C"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6B7B8D"}
                >
                  {l.label}
                </motion.button>
              ))}

              {/* Lang in mobile */}
              <div style={{ display: "flex", gap: "0.75rem", paddingTop: "1rem" }}>
                {LANGS.map(({ code, available }) => (
                  <button
                    key={code}
                    onClick={() => handleLang(code, available)}
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: lang === code ? "#0B1C2C" : "#C0BBB4",
                      borderBottom: lang === code ? "1.5px solid #C4773A" : "1.5px solid transparent",
                      paddingBottom: "1px",
                    }}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
