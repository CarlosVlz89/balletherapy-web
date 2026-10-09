import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';
import { handleWhatsAppClick, getWhatsAppUrl } from '../lib/analytics';

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      
      {/* Halos decorativos cálidos y sutiles (Lino / Terracota suave) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-linen/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Columna de texto */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 1. Badge institucional */}
            <span className="inline-block py-2 px-4 rounded-full bg-white/90 text-brand-primary font-medium tracking-wide text-xs mb-6 border border-brand-linen shadow-soft">
              Burnout que pesa • Barre que restaura • Movimiento que serena
            </span>
            
            {/* 2. Titular H1 editorial */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-dark mt-2 leading-[1.15]">
              Horas sentada. <br />
              Días iguales. <br />
              <span className="italic text-brand-primary">Balletherapy.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* 3. Subtítulo enriquecido */}
            <p className="text-lg md:text-xl text-brand-dark/90 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
              El espacio donde el <strong className="text-brand-primary font-semibold">barre activa</strong>, el <strong className="text-brand-primary font-semibold">journaling libera</strong> y tu sistema nervioso se regula.
            </p>
          </motion.div>

          {/* Imagen en móvil (< md): Ubicada entre subtítulo y CTAs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block md:hidden relative w-full max-w-sm my-4"
          >
            <div className="relative w-full h-72 sm:h-80 rounded-t-[4rem] rounded-b-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgba(42,36,33,0.06)] border border-brand-linen bg-white">
              <img 
                src={heroImage} 
                alt="Espacio sereno de bienestar y movimiento somático en Balletherapy" 
                fetchpriority="high"
                loading="eager"
                decoding="sync"
                width="384"
                height="320"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Capa de superposición cálida para armonizar contrastes */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-linen/40 via-brand-primary/10 to-transparent mix-blend-soft-light pointer-events-none" />
              <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />

              {/* Tarjeta flotante en esquina inferior izquierda */}
              <div className="absolute bottom-3 left-3 glass-panel py-2 px-3.5 shadow-soft border border-brand-linen/80 z-20 max-w-[200px] text-left">
                <p className="font-serif italic text-xs text-brand-dark font-medium leading-snug">
                  Tu pausa en medio del ruido
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Llamados a la acción (CTAs) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 pt-2 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
              <a 
                href={getWhatsAppUrl('Hero')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick('Hero')}
                className="glass-button px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group shadow-soft hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] transition-all duration-300 min-h-[44px] active:scale-95 text-sm md:text-base w-full sm:w-auto"
              >
                <span>Agendar clase de prueba</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a 
                href="#metodo" 
                className="border border-brand-linen bg-white/60 text-brand-dark px-8 py-4 rounded-full font-medium hover:bg-white hover:border-brand-primary/40 transition-all min-h-[44px] flex items-center justify-center active:scale-95 shadow-soft text-sm md:text-base w-full sm:w-auto"
              >
                Conocer el método
              </a>
            </div>

            {/* 5. Micro-prueba social y modalidades */}
            <p className="text-xs md:text-sm text-brand-muted font-light tracking-wide pt-1">
              Sesiones matutinas en vivo • Vía Zoom • Atención somática personalizada
            </p>
          </motion.div>
        </div>

        {/* Columna de imagen en escritorio (md: y lg:) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative h-[580px] w-full hidden md:block"
        >
          <div className="w-full h-full relative z-10">
             {/* Marco arquitectónico exterior */}
             <div className="absolute inset-0 border border-brand-linen/80 rounded-t-[10rem] rounded-b-[2rem] transform translate-x-3 translate-y-3 pointer-events-none" />
             
             {/* Contenedor principal de la imagen */}
             <div className="w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-[0_12px_40px_rgba(42,36,33,0.06)] relative bg-white border border-brand-linen">
                <img 
                  src={heroImage} 
                  alt="Espacio sereno de bienestar y movimiento somático en Balletherapy" 
                  fetchpriority="high"
                  loading="eager"
                  decoding="sync"
                  width="500"
                  height="580"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Capa de superposición con gradiente suave para armonizar tonos */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-linen/40 via-brand-primary/10 to-transparent mix-blend-soft-light pointer-events-none" />
                <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />

                {/* Tarjeta flotante en esquina inferior izquierda */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute bottom-6 left-6 glass-panel py-3 px-5 shadow-soft border border-brand-linen/80 z-20 max-w-[240px]"
                >
                  <p className="font-serif italic text-sm text-brand-dark font-medium leading-snug">
                    Tu pausa en medio del ruido
                  </p>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;