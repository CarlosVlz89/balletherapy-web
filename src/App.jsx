import React from 'react';
import Navbar from './layout/Navbar'; // <--- Importamos el Navbar
import Hero from './sections/Hero';
import TargetAudience from './sections/TargetAudience';
import Differentiators from './sections/Differentiators';
import AboutMe from './sections/AboutMe';
import Testimonials from './sections/Testimonials';
import Schedule from './sections/Schedule';
import FAQ from './sections/FAQ';
import Footer from './layout/Footer';

function App() {
  return (
    <main className="font-sans antialiased text-gray-800 bg-brand-cream selection:bg-brand-coral/30">
      
      {/* Navbar Fijo */}
      <Navbar />
      
      {/* Secciones de Contenido */}
      <Hero />
      <TargetAudience />
      <Differentiators />
      <AboutMe />
      <Testimonials />
      <Schedule />
      <FAQ />

      {/* Footer */}
      <Footer />
      
    </main>
  );
}

export default App;