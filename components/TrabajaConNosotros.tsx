"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Wrench, BarChart2, Settings, Truck, HardHat, Send, Check } from "lucide-react";

const areas = [
  { icon:Wrench,    label:"Ingeniería",       sub:"Proyectos viales, estructurales e hidráulicos" },
  { icon:BarChart2, label:"Administración",   sub:"Finanzas, RRHH, compras y legales"             },
  { icon:Settings,  label:"Operaciones",      sub:"Supervisión y dirección de obras"               },
  { icon:Truck,     label:"Logística",        sub:"Flota, materiales y cadena de abastecimiento"   },
  { icon:HardHat,   label:"Maquinaria Pesada",sub:"Operadores, mecánicos y topógrafos"             },
];

export default function TrabajaConNosotros() {
  const ref = useRef(null);
  const io  = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ nombre:"", email:"", area:"", mensaje:"" });
  const [sent, setSent] = useState(false);

  return (
    <section id="trabaja" ref={ref} className="section" style={{ background:"#F5F4F0" }}>
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-12">
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
            <p className="t-label text-[#C4773A] mb-6">Carreras</p>
            <h2 className="t-display text-[#0B1C2C]">
              Sumáte al<br />equipo
            </h2>
          </motion.div>
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.12 }} className="flex flex-col justify-end">
            <p className="t-body text-base leading-relaxed">
              Más de 3.500 profesionales construyendo infraestructura estratégica.
              Buscamos personas comprometidas con el largo plazo, la calidad técnica
              y el impacto nacional.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Areas */}
          <motion.div initial={{ opacity:0, x:-16 }} animate={io?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.2 }}>
            <div className="border border-[#E2E1DC] bg-white">
              {areas.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0 }} animate={io?{opacity:1}:{}} transition={{ delay:0.3+i*0.07 }}
                  className="flex items-center gap-4 px-6 py-5 border-b border-[#E2E1DC] last:border-b-0 group hover:bg-[#0B1C2C] transition-colors duration-250 cursor-default"
                >
                  <a.icon size={18} className="text-[#0B1C2C] group-hover:text-[#C4773A] flex-shrink-0 transition-colors" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-[#0B1C2C] group-hover:text-white transition-colors">{a.label}</div>
                    <div className="text-[0.72rem] text-[#6B7B8D] group-hover:text-white/40 transition-colors">{a.sub}</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span style={{ fontSize:"0.6rem", fontWeight:700, color:"#6B7B8D", textTransform:"uppercase", letterSpacing:"0.1em" }} className="group-hover:text-white/30 transition-colors">Activo</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-6 grid grid-cols-2 gap-px bg-[#E2E1DC]">
              {["Obra en todo el país","Formación universitaria","Medicina prepaga","Convenio UOCRA"].map(b => (
                <div key={b} className="bg-white px-5 py-4 flex items-start gap-2">
                  <Check size={13} className="text-[#C4773A] mt-0.5 flex-shrink-0" />
                  <span className="text-[0.78rem] text-[#6B7B8D]">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0, x:16 }} animate={io?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.3 }}
            className="bg-white border border-[#E2E1DC] p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-14 h-14 bg-[#0B1C2C] flex items-center justify-center"><Check size={22} className="text-white" /></div>
                <div className="font-bold text-[#0B1C2C] text-lg">Postulación enviada</div>
                <p className="text-[#6B7B8D] text-sm max-w-xs">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-[#0B1C2C] text-base mb-6">Enviar postulación</h3>
                <form onSubmit={e=>{ e.preventDefault(); setSent(true); }} className="flex flex-col gap-5">
                  {[["nombre","Nombre","text","Tu nombre completo"],["email","Email","email","email@empresa.com"]].map(([k,l,t,p]) => (
                    <div key={k}>
                      <label className="t-label text-[#6B7B8D] block mb-2">{l}</label>
                      <input type={t} required placeholder={p}
                        value={form[k as keyof typeof form]}
                        onChange={e=>setForm({...form,[k]:e.target.value})}
                        className="w-full border border-[#E2E1DC] text-[#0B1C2C] text-sm px-4 py-3 focus:outline-none focus:border-[#0B1C2C] placeholder-[#D0CEC8] bg-white transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="t-label text-[#6B7B8D] block mb-2">Área de interés</label>
                    <select required value={form.area} onChange={e=>setForm({...form,area:e.target.value})}
                      className="w-full border border-[#E2E1DC] text-[#0B1C2C] text-sm px-4 py-3 focus:outline-none focus:border-[#0B1C2C] bg-white"
                    >
                      <option value="">Seleccioná un área</option>
                      {areas.map(a=><option key={a.label}>{a.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="t-label text-[#6B7B8D] block mb-2">Presentación profesional</label>
                    <textarea rows={4} value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})}
                      placeholder="Experiencia y motivación..."
                      className="w-full border border-[#E2E1DC] text-[#0B1C2C] text-sm px-4 py-3 focus:outline-none focus:border-[#0B1C2C] placeholder-[#D0CEC8] bg-white resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#6B7B8D]">
                    <input type="checkbox" required className="mt-0.5 accent-[#0B1C2C]" />
                    <span>Acepto el tratamiento de datos personales (Ley 25.326)</span>
                  </div>
                  <button type="submit" className="btn btn-dark mt-1 justify-center">Enviar postulación <Send size={13} /></button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
