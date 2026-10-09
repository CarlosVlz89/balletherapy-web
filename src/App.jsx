import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import TargetAudience from './sections/TargetAudience';
import Differentiators from './sections/Differentiators';
import AboutMe from './sections/AboutMe';
import Testimonials from './sections/Testimonials';
import Schedule from './sections/Schedule';
import FAQ from './sections/FAQ';
import Footer from './layout/Footer';
import StickyCTA from './components/ui/StickyCTA';

function App() {
  return (
    <main className="font-sans antialiased text-brand-text bg-brand-base selection:bg-brand-primary/20">
      
      {/* Barra de navegación flotante scroll-aware */}
      <Navbar />
      
      {/* Secciones de contenido estructuradas por anclas */}
      <Hero />
      <TargetAudience />
      <Differentiators />
      <AboutMe />
      <Testimonials />
      <Schedule />
      <FAQ />

      {/* Pie de página institucional */}
      <Footer />

      {/* Llamada a la acción flotante diferida en móvil */}
      <StickyCTA />
      
    </main>
  );
}

export default App;