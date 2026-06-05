"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Route, Factory, Zap, Droplets, Cylinder, Trees } from "lucide-react";

const divs = [
  { code: "Infraestructura", icon: Route,    desc: "Rutas, autopistas, puentes y grandes corredores logísticos. La división fundacional del grupo." },
  { code: "Industrial",      icon: Factory,  desc: "Parques industriales, centros de distribución y plantas productivas de gran escala." },
  { code: "Energía",         icon: Zap,      desc: "Generación, transmisión y distribución de energía. Proyectos termoeléctricos y renovables." },
  { code: "Hídrica",         icon: Droplets, desc: "Proyectos hidráulicos y ambientales. Canales, drenajes, defensas y control hídrico." },
  { code: "Concreto",        icon: Cylinder, desc: "Producción industrial de hormigón elaborado. 12 plantas, 180+ mixers, laboratorios IRAM." },
  { code: "Desarrollos",     icon: Trees,    desc: "Desarrollo territorial y urbano. Barrios, espacios públicos y proyectos de expansión." },
];

export default function Divisiones() {
  const ref = useRef(null);
  const io  = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="divisiones" ref={ref} className="section bg-ink">
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={io ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="t-label text-[#C4773A] mb-6">Arquitectura corporativa</p>
            <h2 className="t-display text-white">
              Seis divisiones.<br />Un ecosistema.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={io ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="flex flex-col justify-end"
          >
            <p className="t-body text-white/45">
              Siguiendo la lógica de grupos globales como Vinci, Ferrovial y ACS,
              Grupo Cinterra opera bajo una marca madre con seis divisiones
              especializadas que comparten infraestructura, talento y tecnología.
            </p>
          </motion.div>
        </div>

        {/* Divisions — 3×2 grid, dark cards with clean hover */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
          {divs.map((d, i) => (
            <motion.div
              key={d.code}
              initial={{ opacity: 0, y: 20 }}
              animate={io ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group bg-ink p-8 lg:p-10 cursor-default relative overflow-hidden"
              style={{ background: "#0B1C2C" }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#122540" }}
              />

              <div className="relative z-10">
                {/* Division code */}
                <p
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "1.25rem",
                  }}
                >
                  CINTERRA / {d.code.toUpperCase()}
                </p>

                <d.icon
                  size={28}
                  className="mb-5 transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                />

                <h3
                  className="mb-3 transition-colors duration-300 group-hover:text-white"
                  style={{ fontWeight: 700, fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", letterSpacing: "-0.01em" }}
                >
                  Cinterra {d.code}
                </h3>

                <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "rgba(255,255,255,0.38)" }}>
                  {d.desc}
                </p>

                {/* Bottom copper rule — slides in on hover */}
                <div
                  className="mt-8 h-[1px] w-0 group-hover:w-12 transition-all duration-500"
                  style={{ background: "#C4773A" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
