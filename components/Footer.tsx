"use client";

import { ChevronRight, Globe, Share2, Users } from "lucide-react";

const cols = [
  { title:"La empresa",    items:["Quiénes somos","Divisiones","Proyectos","Plantas de hormigón","Tecnología"],          hrefs:["#quienes-somos","#divisiones","#proyectos","#plantas","#tecnologia"] },
  { title:"Institucional", items:["Sustentabilidad","Carreras","Contacto","Política de privacidad","Aviso legal"],        hrefs:["#sustentabilidad","#trabaja","#contacto","#","#"] },
  { title:"Divisiones",    items:["Cinterra Infraestructura","Cinterra Industrial","Cinterra Energía","Cinterra Hídrica","Cinterra Concreto"], hrefs:["#divisiones","#divisiones","#divisiones","#divisiones","#divisiones"] },
];

export default function Footer() {
  const go = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background:"#070F18" }}>
      <div className="wrap py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 pb-12 border-b" style={{ borderColor:"rgba(255,255,255,0.06)" }}>

          {/* Brand */}
          <div>
            <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} className="mb-5 block">
              <span style={{ fontWeight:900, fontSize:"0.85rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#fff" }}>
                Grupo Cinterra <span style={{ color:"#C4773A" }}>S.A.</span>
              </span>
            </button>
            <p style={{ color:"rgba(255,255,255,0.3)", fontSize:"0.8rem", lineHeight:1.7, maxWidth:"260px", marginBottom:"1.5rem" }}>
              Ingeniería, infraestructura y desarrollo para el país. Más de 45 años
              construyendo la Argentina.
            </p>
            <div className="flex gap-2">
              {[Globe, Share2, Users].map((Icon, i) => (
                <button key={i} className="w-8 h-8 flex items-center justify-center border transition-colors"
                  style={{ borderColor:"rgba(255,255,255,0.08)" }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#C4773A"; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"; }}
                >
                  <Icon size={13} style={{ color:"rgba(255,255,255,0.3)" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:"1.25rem" }}>
                {col.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item, i) => (
                  <li key={item}>
                    <button onClick={() => go(col.hrefs[i])} className="group flex items-center gap-1"
                      style={{ color:"rgba(255,255,255,0.25)", fontSize:"0.8rem", transition:"color 0.2s" }}
                      onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="#fff"; }}
                      onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.25)"; }}
                    >
                      <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color:"#C4773A" }} />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["ISO 9001:2015","ISO 45001:2018","ISO 14001:2015","IRAM Cert.","UOCRA"].map(c => (
            <div key={c} style={{ padding:"0.4rem 0.75rem", border:"1px solid rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.2)", fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase" }}>
              {c}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t pt-6" style={{ borderColor:"rgba(255,255,255,0.06)" }}>
          <span style={{ color:"rgba(255,255,255,0.2)", fontSize:"0.72rem" }}>
            © {new Date().getFullYear()} Grupo Cinterra S.A. Todos los derechos reservados.
          </span>
          <span style={{ color:"rgba(255,255,255,0.15)", fontSize:"0.72rem" }}>
            CUIT: 30-12345678-9 &nbsp;·&nbsp; Puerto Madero, CABA, Argentina
          </span>
          <div className="flex gap-5">
            {["Privacidad","Legal"].map(l => (
              <button key={l} style={{ color:"rgba(255,255,255,0.2)", fontSize:"0.72rem", transition:"color 0.2s" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.5)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.2)"; }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
