import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import UnidadesNegocio from "@/components/UnidadesNegocio";
import Proyectos from "@/components/Proyectos";
import PlantasHormigon from "@/components/PlantasHormigon";
import Tecnologia from "@/components/Tecnologia";
import Sustentabilidad from "@/components/Sustentabilidad";
import TrabajaConNosotros from "@/components/TrabajaConNosotros";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuienesSomos />
      <UnidadesNegocio />
      <Proyectos />
      <PlantasHormigon />
      <Tecnologia />
      <Sustentabilidad />
      <TrabajaConNosotros />
      <Contacto />
      <Footer />
    </main>
  );
}
