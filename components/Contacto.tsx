"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Check, Globe, Share2, Users } from "lucide-react";

const info = [
  { icon:MapPin, label:"Sede central",  value:"Puerto Madero, Ciudad Autónoma de Buenos Aires" },
  { icon:Phone,  label:"Teléfono",      value:"+54 11 4000-0000" },
  { icon:Mail,   label:"Email",         value:"contacto@grupocinterra.com.ar" },
  { icon:Clock,  label:"Atención",      value:"Lunes a viernes, 8:00 – 18:00 hs" },
];

export default function Contacto() {
  const ref = useRef(null);
  const io  = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ nombre:"", empresa:"", email:"", asunto:"", mensaje:"" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" ref={ref} className="section bg-ink">
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-12" style={{ alignItems: "end" }}>
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} style={{ overflow:"visible" }}>
            <p className="t-label text-[#C4773A] mb-6">Contacto</p>
            <h2 className="t-display text-white" style={{ overflow:"visible" }}>
              Hablemos de<br />tu proyecto
            </h2>
          </motion.div>
          <motion.div initial={{ opacity:0, y:22 }} animate={io?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.12 }} className="flex flex-col justify-end">
            <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.95rem", lineHeight:1.75 }}>
              ¿Tenés un proyecto de infraestructura de escala? Nuestro equipo de
              especialistas está disponible para analizar tu requerimiento.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12">

          {/* Info */}
          <motion.div initial={{ opacity:0, x:-16 }} animate={io?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.2 }}>
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-5 border-b" style={{ borderColor:"rgba(255,255,255,0.07)" }}>
                <item.icon size={15} style={{ color:"#C4773A", marginTop:2, flexShrink:0 }} />
                <div>
                  <div style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(255,255,255,0.25)", marginBottom:"3px" }}>{item.label}</div>
                  <div style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.7)", fontWeight:500 }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <div style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.2)", marginBottom:"0.75rem" }}>Redes institucionales</div>
              <div className="flex gap-2">
                {[Globe, Share2, Users].map((Icon, i) => (
                  <button key={i} className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
                    style={{ borderColor:"rgba(255,255,255,0.1)" }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#C4773A"; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.1)"; }}
                  >
                    <Icon size={13} style={{ color:"rgba(255,255,255,0.3)" }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 flex flex-col items-center justify-center border"
              style={{ height:200, borderColor:"rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)" }}
            >
              <MapPin size={26} style={{ color:"#C4773A", marginBottom:"0.4rem" }} />
              <div style={{ color:"rgba(255,255,255,0.7)", fontWeight:600, fontSize:"0.85rem" }}>Puerto Madero, CABA</div>
              <div style={{ color:"rgba(255,255,255,0.25)", fontSize:"0.72rem", marginTop:"2px" }}>Argentina</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0, x:16 }} animate={io?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.3 }}
            className="border p-10" style={{ borderColor:"rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.03)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center border-2" style={{ borderColor:"#C4773A" }}>
                  <Check size={26} style={{ color:"#C4773A" }} />
                </div>
                <div style={{ color:"#fff", fontWeight:700, fontSize:"1.1rem" }}>Mensaje recibido</div>
                <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"0.85rem", maxWidth:"280px" }}>
                  Un especialista de Grupo Cinterra S.A. se comunicará a la brevedad.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ color:"#fff", fontWeight:700, fontSize:"1rem", marginBottom:"1.5rem" }}>Enviar consulta</h3>
                <form onSubmit={e=>{ e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[["nombre","Nombre","text","Tu nombre"],["empresa","Empresa","text","Empresa u organismo"]].map(([k,l,t,p])=>(
                      <div key={k}>
                        <label style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", display:"block", marginBottom:"0.4rem" }}>{l}</label>
                        <input type={t} required={k==="nombre"} placeholder={p}
                          value={form[k as keyof typeof form]} onChange={e=>setForm({...form,[k]:e.target.value})}
                          style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", color:"#fff", fontSize:"0.85rem", padding:"0.7rem 1rem", outline:"none" }}
                          className="focus:border-[#C4773A] transition-colors placeholder-white/15"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", display:"block", marginBottom:"0.4rem" }}>Email</label>
                    <input type="email" required placeholder="email@empresa.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                      style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", color:"#fff", fontSize:"0.85rem", padding:"0.7rem 1rem", outline:"none" }}
                      className="focus:border-[#C4773A] transition-colors placeholder-white/15"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", display:"block", marginBottom:"0.4rem" }}>Asunto</label>
                    <select value={form.asunto} onChange={e=>setForm({...form,asunto:e.target.value})}
                      style={{ width:"100%", background:"rgba(0,0,0,0.5)", border:"1px solid rgba(255,255,255,0.1)", color:"#fff", fontSize:"0.85rem", padding:"0.7rem 1rem", outline:"none" }}
                      className="focus:border-[#C4773A] transition-colors"
                    >
                      <option value="">Seleccioná un asunto</option>
                      <option>Infraestructura vial</option>
                      <option>Hormigón elaborado</option>
                      <option>Licitaciones y contrataciones</option>
                      <option>Obras industriales</option>
                      <option>Otras consultas</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", display:"block", marginBottom:"0.4rem" }}>Mensaje</label>
                    <textarea rows={4} required placeholder="Proyecto, ubicación, plazos..." value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})}
                      style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", color:"#fff", fontSize:"0.85rem", padding:"0.7rem 1rem", outline:"none", resize:"none" }}
                      className="focus:border-[#C4773A] transition-colors placeholder-white/15"
                    />
                  </div>
                  <div className="flex items-start gap-2" style={{ color:"rgba(255,255,255,0.25)", fontSize:"0.72rem" }}>
                    <input type="checkbox" required className="mt-0.5" style={{ accentColor:"#C4773A" }} />
                    <span>Acepto la Política de Privacidad y el tratamiento de datos (Ley 25.326).</span>
                  </div>
                  <button type="submit" className="btn btn-dark mt-1 justify-center" style={{ background:"#C4773A", border:"none" }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="#a8622e"; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="#C4773A"; }}
                  >
                    Enviar consulta <Send size={13} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
