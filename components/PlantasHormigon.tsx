"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import basePath from "@/lib/basePath";
import { Cylinder, Truck, FlaskConical } from "lucide-react";

/*
 * Ancla: CABA path (609.8, 349) = 58.4°W, 34.6°S
 * k_x = 22 px/° | k_y = 25 px/°
 * x = 609.8 + (58.4 - lon) * 22
 * y = 349   + (lat - 34.6) * 25
 */
const plants = [
  { id:1,  name:"San Isidro",          province:"Buenos Aires",  capacity:"180 m³/h", mixers:24, lab:true,  x:608, y:347 },
  { id:2,  name:"Quilmes",             province:"Buenos Aires",  capacity:"160 m³/h", mixers:20, lab:true,  x:612, y:352 },
  { id:3,  name:"Rosario",             province:"Santa Fe",      capacity:"120 m³/h", mixers:16, lab:true,  x:559, y:309 },
  { id:4,  name:"Córdoba Capital",     province:"Córdoba",       capacity:"140 m³/h", mixers:18, lab:true,  x:482, y:269 },
  { id:5,  name:"Mendoza",             province:"Mendoza",       capacity:"100 m³/h", mixers:12, lab:false, x:381, y:307 },
  { id:6,  name:"Mar del Plata",       province:"Buenos Aires",  capacity:"90 m³/h",  mixers:10, lab:false, x:630, y:434 },
  { id:7,  name:"Tucumán",             province:"Tucumán",       capacity:"80 m³/h",  mixers:10, lab:false, x:460, y:154 },
  { id:8,  name:"Bahía Blanca",        province:"Buenos Aires",  capacity:"110 m³/h", mixers:14, lab:true,  x:524, y:452 },
  { id:9,  name:"Neuquén",             province:"Neuquén",       capacity:"95 m³/h",  mixers:12, lab:false, x:396, y:457 },
  { id:10, name:"Santa Rosa",          province:"La Pampa",      capacity:"75 m³/h",  mixers:8,  lab:false, x:480, y:399 },
  { id:11, name:"Comodoro Rivadavia",  province:"Chubut",        capacity:"70 m³/h",  mixers:8,  lab:false, x:410, y:648 },
  { id:12, name:"Posadas",             province:"Misiones",      capacity:"65 m³/h",  mixers:8,  lab:false, x:665, y:169 },
];

export default function PlantasHormigon() {
  const ref = useRef(null);
  const io  = useInView(ref, { once: true, margin: "-60px" });
  const [sel, setSel] = useState(plants[0]);

  return (
    <section id="plantas" ref={ref} className="section" style={{ background:"#F5F4F0" }}>
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-12">
          <motion.div initial={{ opacity:0,y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
            <p className="t-label text-[#C4773A] mb-6">Cinterra Concreto</p>
            <h2 className="t-display text-[#0B1C2C]">
              Red nacional<br />de plantas
            </h2>
          </motion.div>
          <motion.div initial={{ opacity:0,y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.12 }} className="flex flex-col justify-end">
            <p style={{ color:"#6B7B8D", fontSize:"0.95rem", lineHeight:1.75 }}>
              12 plantas industriales con capacidad total superior a 1.380 m³/hora.
              Flota de 180+ mixers y laboratorios certificados IRAM distribuidos
              estratégicamente en todo el territorio nacional.
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[200px_1fr_320px] gap-10 items-start">

          {/* Plant list */}
          <motion.div initial={{ opacity:0, x:-16 }} animate={io?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.2 }}>
            <div style={{ border:"1px solid #E2E1DC", background:"#fff" }}>
              {plants.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSel(p)}
                  style={{
                    display:"block", width:"100%", textAlign:"left",
                    padding:"0.75rem 1rem",
                    borderBottom:"1px solid #F0EDE8",
                    borderLeft: sel.id===p.id ? "3px solid #C4773A" : "3px solid transparent",
                    background: sel.id===p.id ? "#FBF9F7" : "transparent",
                    transition:"all 0.2s",
                  }}
                >
                  <div style={{ fontSize:"0.78rem", fontWeight:600, color: sel.id===p.id ? "#0B1C2C" : "#6B7B8D" }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize:"0.65rem", color:"#9BA8B4" }}>{p.province}</div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Map — SVG recortado a Argentina con marcadores */}
          <motion.div
            initial={{ opacity:0 }} animate={io?{opacity:1}:{}} transition={{ duration:0.7, delay:0.3 }}
            className="hidden lg:block"
          >
            <div style={{ maxWidth:"300px", margin:"2rem auto 0" }}>
            <svg
              viewBox="265 45 500 950"
              style={{ width:"100%", height:"auto", display:"block" }}
              overflow="hidden"
            >
              <image href={`${basePath}/argentina.svg`} x="0" y="0" width="1000" height="1000"
                style={{ filter:"grayscale(1) brightness(1.35) sepia(0.15)" }}
              />
              {plants.map((p, i) => (
                <motion.g
                  key={p.id}
                  initial={{ opacity:0, scale:0 }}
                  animate={io ? { opacity:1, scale:1 } : {}}
                  transition={{ delay:0.5 + i*0.06, type:"spring", stiffness:260 }}
                  onClick={() => setSel(p)}
                  style={{ cursor:"pointer" }}
                >
                  {sel.id===p.id && (
                    <motion.circle cx={p.x} cy={p.y} r={18}
                      fill="none" stroke="#C4773A" strokeWidth="2.5"
                      animate={{ r:[12,22,12], opacity:[1,0,1] }}
                      transition={{ duration:2, repeat:Infinity }}
                    />
                  )}
                  <circle
                    cx={p.x} cy={p.y}
                    r={sel.id===p.id ? 10 : 7}
                    fill={sel.id===p.id ? "#C4773A" : "#0B1C2C"}
                    stroke="#fff"
                    strokeWidth={sel.id===p.id ? 3 : 2}
                    style={{ transition:"all 0.25s" }}
                  />
                </motion.g>
              ))}
            </svg>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity:0, x:16 }} animate={io?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.4 }}>
            <motion.div
              key={sel.id}
              initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3 }}
              style={{ background:"#fff", border:"1px solid #E2E1DC", padding:"2rem" }}
            >
              <p style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.2em",
                textTransform:"uppercase", color:"#C4773A", marginBottom:"1rem" }}>
                Planta activa
              </p>
              <h3 style={{ fontWeight:800, fontSize:"1.4rem", letterSpacing:"-0.02em",
                color:"#0B1C2C", marginBottom:"0.2rem", lineHeight:1.1 }}>
                {sel.name}
              </h3>
              <p style={{ color:"#9BA8B4", fontSize:"0.8rem", marginBottom:"2rem" }}>
                {sel.province}
              </p>

              {[
                { icon:Cylinder,     label:"Capacidad",    value:sel.capacity },
                { icon:Truck,        label:"Mixers",       value:`${sel.mixers} unidades` },
                { icon:FlaskConical, label:"Laboratorio",  value:sel.lab ? "IRAM Certificado" : "Control externo" },
              ].map((row, i) => (
                <div key={i} style={{
                  display:"flex", alignItems:"center", gap:"1rem",
                  padding:"1rem 0",
                  borderBottom: i < 2 ? "1px solid #F0EDE8" : "none",
                }}>
                  <row.icon size={16} style={{ color:"#C4773A", flexShrink:0 }} />
                  <div>
                    <div style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.14em",
                      textTransform:"uppercase", color:"#9BA8B4", marginBottom:"2px" }}>
                      {row.label}
                    </div>
                    <div style={{ fontSize:"0.85rem", fontWeight:600, color:"#0B1C2C" }}>
                      {row.value}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Summary grid */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1px",
              background:"#E2E1DC", marginTop:"1px" }}>
              {[["12","Plantas"],["180+","Mixers"],["1.380+","m³/hora"],["8","Labs ISO"]].map(([n,l]) => (
                <div key={l} style={{ background:"#fff", padding:"1.25rem 1rem", textAlign:"center" }}>
                  <div style={{ fontWeight:900, fontSize:"1.4rem", color:"#0B1C2C",
                    letterSpacing:"-0.03em", lineHeight:1 }}>{n}</div>
                  <div style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.14em",
                    textTransform:"uppercase", color:"#9BA8B4", marginTop:"4px" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
