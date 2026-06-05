"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const cats = ["Todos", "Vial", "Estructuras", "Hidráulica", "Logística", "Urbano", "Energía"];

const projects = [
  { id:1, name:"Autovía del Corredor Atlántico",      desc:"185 km de calzada doble en el corredor Mar del Plata–Necochea. Peajes electrónicos, banquinas pavimentadas y señalización inteligente.", year:2021, province:"Buenos Aires",     type:"Vial",        area:"185 km",    photo:"/proyecto-1.png", size:"large" },
  { id:2, name:"Puente Vial sobre el Río Paraná",     desc:"Viaducto de hormigón postensado de 620 m sobre el Paraná. Tablero continuo, pilas de gran altura y resistencia sísmica certificada.",    year:2020, province:"Entre Ríos",       type:"Estructuras", area:"620 m",     photo:"/proyecto-2.png", size:"small" },
  { id:3, name:"Complejo Industrial Campana",         desc:"Planta multipropósito de 28 ha en el polo petroquímico de Campana. Estructuras metálicas, cañerías industriales y pavimentos pesados.",   year:2022, province:"Buenos Aires",     type:"Logística",   area:"28 ha",     photo:"/proyecto-3.png", size:"small" },
  { id:4, name:"Presa y Central Hidroeléctrica NOA",  desc:"Presa de hormigón de doble curvatura de 112 m de altura. Capacidad de generación de 480 MW. Obras civiles, compuertas y canales de descarga.", year:2019, province:"Neuquén",    type:"Hidráulica",  area:"112 m alt", photo:"/proyecto-4.png", size:"small" },
  { id:5, name:"Parque Logístico Federal",            desc:"Centro de distribución multimodal de 95 ha con acceso ferroviario y vial. Galpones clase A, cámaras frigoríficas y playas de maniobra.",   year:2023, province:"Santa Fe",         type:"Logística",   area:"95 ha",     photo:"/proyecto-5.png", size:"large" },
  { id:6, name:"Puerto Madero Distrito Tecnológico",  desc:"Desarrollo de usos mixtos en CABA: 3 torres residenciales y oficinas premium. Pilotaje profundo, estructura de hormigón visto y fachada ventilada.", year:2022, province:"CABA",   type:"Urbano",      area:"62.000 m²", photo:"/proyecto-6.png", size:"small" },
  { id:7, name:"Línea de Alta Tensión Comahue–GBA",   desc:"500 km de tendido de 500 kV conectando el sistema Comahue con el Gran Buenos Aires. Torres de acero, fundaciones especiales y subestaciones.", year:2021, province:"Neuquén",   type:"Energía",     area:"500 km",    photo:"/proyecto-7.png", size:"small" },
  { id:8, name:"Túnel Subfluvial Santa Fe–Paraná",    desc:"Tuneladora TBM de 11,8 m de diámetro. 2.400 m bajo el lecho del Paraná. Revestimiento prefabricado de hormigón y sistemas de ventilación forzada.", year:2023, province:"Santa Fe", type:"Estructuras", area:"2.400 m",   photo:"/proyecto-8.png", size:"small" },
];

function Card({ p, large }: { p: typeof projects[0]; large?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`group relative overflow-hidden cursor-default ${large ? "lg:row-span-2" : ""}`}
      style={{ height: "100%" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Photo bg */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ${hover ? "scale-[1.04]" : "scale-100"}`}
        style={{ backgroundImage:`url('${p.photo}')`, backgroundSize:"cover", backgroundPosition:"center" }}
      />

      {/* Gradient overlay — stronger at bottom */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,13,22,0.92) 0%, rgba(6,13,22,0.4) 50%, rgba(6,13,22,0.1) 100%)" }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        {/* Type badge */}
        <span
          className="self-start mb-4 px-2.5 py-1"
          style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"#C4773A", border:"1px solid rgba(196,119,58,0.4)", background:"rgba(196,119,58,0.08)" }}
        >
          {p.type}
        </span>

        {/* Area watermark */}
        {large && (
          <div
            className="mb-2"
            style={{ fontWeight:900, fontSize:"clamp(2rem,5vw,4rem)", letterSpacing:"-0.04em", lineHeight:1, color:"rgba(255,255,255,0.08)" }}
          >
            {p.area}
          </div>
        )}

        <h3 style={{ fontWeight:700, fontSize: large ? "1.4rem" : "1rem", color:"#fff", letterSpacing:"-0.01em", lineHeight:1.15, marginBottom:"0.5rem" }}>
          {p.name}
        </h3>

        {/* Description — slides in on hover */}
        <motion.div
          initial={false}
          animate={{ height: hover ? "auto" : 0, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.55)", lineHeight:1.6, marginBottom:"0.75rem" }}>
            {p.desc}
          </p>
        </motion.div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1.5" style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.35)", fontWeight:600, letterSpacing:"0.06em" }}>
            <MapPin size={10} /> {p.province} &nbsp;·&nbsp; {p.year}
          </div>
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: hover ? "#C4773A" : "rgba(255,255,255,0.25)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Proyectos() {
  const ref = useRef(null);
  const io  = useInView(ref, { once: true, margin: "-60px" });
  const [cat, setCat] = useState("Todos");

  const list = cat === "Todos" ? projects : projects.filter(p => p.type === cat);

  return (
    <section id="proyectos" ref={ref} className="section bg-white">
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-10">
          <motion.div initial={{ opacity:0, y:22 }} animate={io ? { opacity:1, y:0 } : {}} transition={{ duration:0.7 }}>
            <p className="t-label text-[#C4773A] mb-6">Portafolio</p>
            <h2 className="t-display text-[#0B1C2C]">
              Proyectos<br />que definen<br />territorios
            </h2>
          </motion.div>
          <motion.div initial={{ opacity:0, y:22 }} animate={io ? { opacity:1, y:0 } : {}} transition={{ duration:0.7, delay:0.12 }} className="flex flex-col justify-end">
            <p className="t-body text-lg">
              Más de 500 obras ejecutadas en todo el país. Cada proyecto representa
              un compromiso con la escala, la precisión técnica y el impacto de
              largo plazo sobre el territorio.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="rule mb-8" />
        <motion.div
          initial={{ opacity:0 }} animate={io ? { opacity:1 } : {}} transition={{ delay:0.2 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase border transition-all duration-200"
              style={{
                background: cat === c ? "#0B1C2C" : "transparent",
                color:      cat === c ? "#fff"    : "#6B7B8D",
                borderColor: cat === c ? "#0B1C2C" : "#E2E1DC",
              }}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Grid — editorial layout like Techint */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            transition={{ duration:0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[340px]"
          >
            {list.slice(0, 1).map(p => (
              <motion.div key={p.id} className="lg:col-span-1 lg:row-span-2"
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
                <Card p={p} large />
              </motion.div>
            ))}
            {list.slice(1).map((p, i) => (
              <motion.div key={p.id}
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:(i+1)*0.06 }}>
                <Card p={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity:0, y:16 }} animate={io ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay:0.4 }}
          className="mt-12 flex items-center gap-8 border-t border-[#E2E1DC] pt-8"
        >
          <span className="t-body text-sm text-[#6B7B8D]">+500 obras ejecutadas en Argentina</span>
          <button className="link-arrow ml-auto">
            Ver todos los proyectos <ArrowRight size={12} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
