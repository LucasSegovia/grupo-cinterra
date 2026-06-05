"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { year: "1978", text: "Fundación en Buenos Aires por el Ing. Roberto Cinterra. Primeros contratos viales en la provincia de Buenos Aires." },
  { year: "1985", text: "Adjudicación del corredor Azul–Olavarría, Ruta Nacional 3. Primera obra de escala nacional." },
  { year: "1993", text: "Expansión regional. Apertura de oficinas en Córdoba, Rosario y Mendoza. Primer proyecto hidráulico en Cuyo." },
  { year: "1998", text: "Inauguración de la primera planta de hormigón elaborado propia, Gran Buenos Aires. Inicio de la División Concreto." },
  { year: "2005", text: "Certificación ISO 9001. Más de 200 obras acumuladas. Incorporación de equipos de ingeniería internacionales." },
  { year: "2010", text: "Adopción de BIM, topografía GPS RTK y drones para control de obra en tiempo real." },
  { year: "2016", text: "Lanzamiento de la arquitectura de 6 divisiones CINTERRA. 12 plantas de hormigón operativas." },
  { year: "2023", text: "Más de 500 obras ejecutadas. Presencia en 23 provincias. Inicio de expansión en mercados de América Latina." },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const io = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={io ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function QuienesSomos() {
  const tlRef = useRef(null);
  const tlIn  = useInView(tlRef, { once: true, margin: "-60px" });

  return (
    <section id="quienes-somos" className="section bg-white">
      <div className="wrap">

        {/* ── Intro ── */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-16">
          <FadeUp>
            <p className="t-label text-[#C4773A] mb-6">La empresa</p>
            <h2 className="t-display text-[#0B1C2C]">
              Un grupo de<br />infraestructura<br />de escala nacional
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="t-body text-[#6B7B8D] mt-2 text-base leading-relaxed">
              Grupo Cinterra S.A. no es simplemente una constructora. Es una
              corporación de infraestructura integrada, dedicada a diseñar, construir
              y operar los sistemas físicos sobre los que descansa el crecimiento
              económico de largo plazo.
            </p>
            <p className="t-body text-[#6B7B8D] mt-5 text-base leading-relaxed">
              Desde su fundación en 1978, el grupo ha participado en los principales
              proyectos de desarrollo vial, energético, hidráulico e industrial del
              país, operando con recursos propios: flota de maquinaria pesada, 12
              plantas de hormigón elaborado y laboratorios de materiales certificados.
            </p>

            {/* Three columns: Mission · Vision · Values */}
            <div className="mt-10 grid grid-cols-3 gap-0 border-t-2 border-[#0B1C2C] pt-8">
              {[
                { t: "Misión", b: "Diseñar, construir y operar infraestructura que acelere el desarrollo económico y mejore la calidad de vida de las generaciones futuras." },
                { t: "Visión", b: "Convertirnos en el grupo de infraestructura más respetado de América Latina, modelando la columna vertebral de las economías del mañana." },
                { t: "Valores", b: "Pensamiento de largo plazo. Excelencia técnica sin concesiones. Confiabilidad. Integridad institucional. Progreso como propósito." },
              ].map((v, i) => (
                <div
                  key={i}
                  className="pr-6 border-r border-[#E2E1DC] last:border-r-0 last:pr-0"
                  style={{ paddingLeft: i > 0 ? "1.5rem" : 0 }}
                >
                  <div className="t-label text-[#C4773A] mb-2">{v.t}</div>
                  <p className="text-[#6B7B8D] text-[0.78rem] leading-relaxed">{v.b}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* ── Timeline ── */}
        <div className="rule mb-12" />

        <FadeUp>
          <p className="t-label text-[#6B7B8D] mb-10">Trayectoria institucional</p>
        </FadeUp>

        <div ref={tlRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E2E1DC]">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={tlIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 border-r border-b border-[#E2E1DC] last:border-r-0"
              style={{
                borderRight: i % 4 === 3 ? "none" : undefined,
                borderBottom: i >= 4 ? "none" : undefined,
              }}
            >
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "2rem",
                  letterSpacing: "-0.03em",
                  color: "#0B1C2C",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                {m.year}
              </div>
              <p className="text-[#6B7B8D] text-xs leading-relaxed">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
