"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, ShieldCheck, GraduationCap, Wind, Recycle, Sun } from "lucide-react";

const items = [
  { icon:Leaf,          title:"Gestión ambiental",     pct:92, desc:"Plan de gestión ambiental en cada obra. Control de efluentes, residuos y ecosistemas." },
  { icon:ShieldCheck,   title:"Seguridad laboral",      pct:99, desc:"Índice de frecuencia de accidentes por debajo del promedio sectorial. Entrenamiento mensual." },
  { icon:GraduationCap, title:"Capacitación continua",  pct:85, desc:"Formación técnica y profesional continua. Convenios con universidades nacionales." },
  { icon:Wind,          title:"Reducción de emisiones", pct:38, desc:"Flota Tier 4 y plantas de hormigón con filtros certificados y recirculación de agua." },
  { icon:Recycle,       title:"Economía circular",      pct:70, desc:"Reutilización de materiales de excavación y reciclado de hormigón demolido." },
  { icon:Sun,           title:"Energías limpias",       pct:45, desc:"Paneles solares en oficinas y plantas. Meta: −30% consumo energético para 2030." },
];

export default function Sustentabilidad() {
  const ref = useRef(null);
  const io  = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sustentabilidad" ref={ref} className="section bg-ink">
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-12">
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
            <p className="t-label text-[#C4773A] mb-6">Responsabilidad corporativa</p>
            <h2 className="t-display text-white">
              Construimos<br />con consciencia
            </h2>
          </motion.div>
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.12 }} className="flex flex-col justify-end">
            <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"0.95rem", lineHeight:1.75 }}>
              Alineados con los ODS de la Agenda 2030 de la ONU. Nuestro compromiso
              ambiental y social es inseparable de cada decisión operativa del grupo.
            </p>
            <div className="flex gap-3 mt-6">
              {["ODS 9","ODS 11","ODS 13"].map(o => (
                <div key={o} className="px-3 py-1.5 border" style={{ borderColor:"rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.35)", fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase" }}>{o}</div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="rule-dark mb-10" />

        {/* Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:20 }}
              animate={io?{opacity:1,y:0}:{}}
              transition={{ duration:0.55, delay:i*0.08 }}
              className="p-10 bg-ink"
              style={{ borderRight:i%3===2?"none":undefined, borderBottom:i>=3?"none":undefined }}
            >
              <item.icon size={22} style={{ color:"rgba(255,255,255,0.3)", marginBottom:"1.25rem" }} />
              <h3 style={{ fontWeight:700, fontSize:"0.9rem", color:"rgba(255,255,255,0.8)", marginBottom:"0.5rem" }}>{item.title}</h3>
              <p style={{ fontSize:"0.78rem", color:"rgba(255,255,255,0.35)", lineHeight:1.65, marginBottom:"1.5rem" }}>{item.desc}</p>

              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.2)" }}>Avance</span>
                <span style={{ fontWeight:900, fontSize:"1.3rem", color:"#C4773A", letterSpacing:"-0.02em" }}>{item.pct}%</span>
              </div>
              <div style={{ height:"1px", background:"rgba(255,255,255,0.08)", position:"relative" }}>
                <motion.div
                  initial={{ width:0 }}
                  animate={io?{ width:`${item.pct}%` }:{}}
                  transition={{ duration:1.1, delay:0.3+i*0.09, ease:"easeOut" }}
                  style={{ position:"absolute", top:0, left:0, height:"100%", background:"#C4773A" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
