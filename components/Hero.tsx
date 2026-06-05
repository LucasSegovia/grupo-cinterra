"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import basePath from "@/lib/basePath";
import { ArrowDown, ArrowRight } from "lucide-react";

function useCounter(end: number, dur = 2000, go = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, dur, go]);
  return n;
}

export default function Hero() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 400); return () => clearTimeout(t); }, []);

  const sectionRef = useRef<HTMLElement>(null);

  const n0 = useCounter(45,  2000, on);
  const n1 = useCounter(500, 2400, on);
  const n2 = useCounter(12,  1600, on);
  const n3 = useCounter(23,  1900, on);

  const stats = [
    { n: n0, s: "+", label: "Años de trayectoria"       },
    { n: n1, s: "+", label: "Obras ejecutadas"           },
    { n: n2, s: "",  label: "Plantas de hormigón"        },
    { n: n3, s: "",  label: "Provincias con presencia"   },
  ];

  return (
    <section
      id="inicio"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "#070F18",
      }}
    >
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `url('${basePath}/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} />

      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to right, rgba(6,13,22,0.92) 0%, rgba(6,13,22,0.7) 50%, rgba(6,13,22,0.45) 100%)",
      }} />

      {/* Diagonal texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(58deg, transparent, transparent 60px, rgba(255,255,255,0.018) 60px, rgba(255,255,255,0.018) 61px)",
        zIndex: 2,
      }} />

      {/* Year watermark */}
      <div aria-hidden style={{
        position: "absolute", right: 0, bottom: "5%",
        fontWeight: 900, fontSize: "clamp(8rem, 22vw, 26rem)",
        lineHeight: 1, letterSpacing: "-0.04em",
        color: "rgba(255,255,255,0.022)",
        userSelect: "none", pointerEvents: "none", zIndex: 3,
      }}>
        1978
      </div>

      {/* Content — fades and lifts on scroll */}
      <div
        className="wrap"
        style={{ position: "relative", zIndex: 10, paddingTop: "6rem", paddingBottom: "2rem" }}
      >

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem" }}
        >
          Grupo Cinterra S.A. &nbsp;·&nbsp; Argentina &nbsp;·&nbsp; Desde 1978
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(3rem, 7.5vw, 9rem)", fontWeight: 900,
            lineHeight: 0.92, letterSpacing: "-0.035em", color: "#fff", margin: 0 }}
        >
          Construimos
          <br />
          <span style={{ color: "#C4773A" }}>el país</span>
          <br />
          que viene.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ marginTop: "2.5rem", color: "rgba(255,255,255,0.45)",
            fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, maxWidth: "500px" }}
        >
          Infraestructura, energía y desarrollo territorial que conectan
          regiones, industrias y oportunidades en toda América Latina.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{ marginTop: "3rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
        >
          <button className="btn btn-dark"
            onClick={() => document.querySelector("#quienes-somos")?.scrollIntoView({ behavior: "smooth" })}>
            Conocer la compañía <ArrowRight size={13} />
          </button>
          <button className="btn btn-ghost"
            onClick={() => document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" })}>
            Ver proyectos
          </button>
        </motion.div>

        {/* Stats — always visible, no parallax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            marginTop: "5rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "2rem 2rem 2rem 0",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              paddingLeft: i > 0 ? "2rem" : 0,
            }}>
              <div style={{
                fontWeight: 900, fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                lineHeight: 1, letterSpacing: "-0.03em", color: "#fff",
                fontVariantNumeric: "tabular-nums",
              }}>
                {s.n}{s.s}
              </div>
              <div style={{
                marginTop: "0.5rem", fontSize: "0.6rem", fontWeight: 600,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.32)",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        onClick={() => document.querySelector("#quienes-somos")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
          color: "rgba(255,255,255,0.2)", cursor: "pointer", zIndex: 10,
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
        <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
      </motion.div>
    </section>
  );
}
