"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, ScanLine, Plane, Monitor, FlaskConical, BarChart3, Satellite, Layers3 } from "lucide-react";

const techs = [
  { icon:Layers3,     title:"Modelado BIM",            badge:"BIM Level 2", desc:"Coordinación 3D, detección de interferencias y planificación 4D/5D integrada en todos los proyectos." },
  { icon:ScanLine,    title:"Nube de puntos 3D",        badge:"±2 mm",       desc:"Escaneo láser y fotogrametría aérea para modelos digitales del terreno y estructuras con precisión milimétrica." },
  { icon:Monitor,     title:"Control digital de obra",  badge:"ERP propio",  desc:"Dashboard de avance físico, control de costos, gestión de RFIs y bitácora digital integrada en tiempo real." },
  { icon:FlaskConical,title:"Laboratorio de materiales",badge:"IRAM",        desc:"Certificación IRAM en granulometría, dosificación, resistencia y performance del hormigón en todas las plantas." },
  { icon:Plane,       title:"Relevamiento con drones",  badge:"LiDAR",       desc:"UAVs con LiDAR y sensores multiespectrales para topografía, control de avance y supervisión en altura." },
  { icon:BarChart3,   title:"Monitoreo IoT",            badge:"24/7",        desc:"Sensores en equipos y estructuras. Productividad, consumos y seguridad estructural monitoreados en tiempo real." },
  { icon:Satellite,   title:"Topografía GPS RTK",       badge:"±1 cm",       desc:"Replanteos y nivelación con corrección diferencial en tiempo real. Precisión centimétrica garantizada." },
  { icon:Cpu,         title:"Ingeniería computacional",  badge:"FEM + IA",   desc:"Simulación por elementos finitos y optimización de mezclas de hormigón mediante inteligencia artificial." },
];

export default function Tecnologia() {
  const ref = useRef(null);
  const io  = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="tecnologia" ref={ref} className="section bg-white">
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-14">
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
            <p className="t-label text-[#C4773A] mb-6">Capacidad técnica</p>
            <h2 className="t-display text-[#0B1C2C]" style={{ overflow: "visible" }}>
              Tecnología al<br />servicio de la<br />ingeniería
            </h2>
          </motion.div>
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.12 }} className="flex flex-col justify-end gap-8">
            <p className="t-body text-base leading-relaxed">
              Invertimos sistemáticamente en tecnología de vanguardia. La innovación
              no es un diferencial — es un requerimiento operativo que garantiza
              resultados de mayor calidad, menor costo y mejor plazo.
            </p>
            {/* Inline stats */}
            <div className="grid grid-cols-3 gap-0 border-t-2 border-[#0B1C2C] pt-8">
              {[["95%","Precisión BIM"],["40+","Drones en flota"],["8","Labs certificados"]].map(([n,l],i) => (
                <div key={i} className="pr-6 border-r border-[#E2E1DC] last:border-r-0 last:pr-0" style={{ paddingLeft:i>0?"1.5rem":0 }}>
                  <div style={{ fontWeight:900, fontSize:"1.8rem", color:"#0B1C2C", letterSpacing:"-0.03em", lineHeight:1 }}>{n}</div>
                  <div style={{ fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#6B7B8D", marginTop:"4px" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E1DC]">
          {techs.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:20 }}
              animate={io?{opacity:1,y:0}:{}}
              transition={{ duration:0.5, delay:i*0.07 }}
              className="bg-white p-10 group hover:bg-[#0B1C2C] transition-colors duration-300 cursor-default"
            >
              <span
                className="inline-block px-2 py-0.5 mb-5 text-[9px] font-bold tracking-[0.14em] uppercase bg-[#F5F4F0] group-hover:bg-white/8 text-[#6B7B8D] group-hover:text-white/40 transition-colors"
              >
                {t.badge}
              </span>
              <t.icon size={24} className="mb-4 text-[#0B1C2C] group-hover:text-[#C4773A] transition-colors" />
              <h3 className="font-bold text-[#0B1C2C] group-hover:text-white text-sm mb-2 transition-colors" style={{ letterSpacing:"-0.01em" }}>
                {t.title}
              </h3>
              <p className="text-[#6B7B8D] group-hover:text-white/40 text-xs leading-relaxed transition-colors">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
