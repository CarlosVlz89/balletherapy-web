import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-bg.webp';
import { handleWhatsAppClick, getWhatsAppUrl } from '../lib/analytics';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative w-full overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 md:pb-20 flex flex-col justify-center min-h-[92vh] md:min-h-screen px-4 sm:px-6"
    >
      {/* Halos decorativos cálidos y sutiles (Lino / Terracota suave) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-linen/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10 w-full">
        
        {/* Columna de texto */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center md:items-start"
          >
            {/* 1. Badge institucional sutil diferenciado visualmente del Navbar */}
            <span className="inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-brand-linen/30 border border-brand-linen/60 text-brand-primary text-[0.68rem] sm:text-xs tracking-wide text-center max-w-[90vw] sm:max-w-md mx-auto md:mx-0 mb-3 sm:mb-4">
              Burnout que pesa • Barre que restaura • Movimiento que serena
            </span>
            
            {/* 2. Titular H1 editorial adaptable al primer pliegue */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-serif text-brand-text leading-tight sm:leading-tight mb-2 sm:mb-3">
              Horas sentada. <br />
              Días iguales. <br />
              <span className="italic text-brand-primary">Balletherapie.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full"
          >
            {/* 3. Subtítulo somatosensorial axial */}
            <p className="text-xs sm:text-sm md:text-base text-brand-muted max-w-lg mx-auto md:mx-0 leading-relaxed mb-3 sm:mb-5">
              El espacio donde el <strong className="text-brand-primary font-semibold">barre activa</strong>, el <strong className="text-brand-primary font-semibold">journaling libera</strong> y tu sistema nervioso se regula.
            </p>
          </motion.div>

          {/* Imagen en móvil (< md): Compactada para asegurar visibilidad de CTAs above the fold */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block md:hidden relative w-full my-2 sm:my-3"
          >
            <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-none mx-auto md:mx-0 aspect-[4/3] sm:aspect-[16/10] md:aspect-[3/4] max-h-[190px] sm:max-h-[220px] md:max-h-[520px] rounded-t-[2.5rem] rounded-b-xl md:rounded-t-[10rem] md:rounded-b-[2rem] overflow-hidden relative shadow-lg my-3 md:my-0 border border-brand-linen bg-white">
              <img 
                src={heroImage} 
                alt="Espacio sereno de bienestar y movimiento somático en Balletherapie" 
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                width="384"
                height="190"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Capa de superposición cálida para armonizar contrastes */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-linen/40 via-brand-primary/10 to-transparent mix-blend-soft-light pointer-events-none" />
              <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />

              {/* Microtarjeta flotante Soft Glass compacta */}
              <div className="absolute bottom-2 sm:bottom-3 left-2.5 sm:left-3 glass-panel py-1 px-2.5 shadow-soft border border-brand-linen/80 z-20 max-w-[190px] text-left">
                <p className="font-serif italic text-[0.65rem] sm:text-xs text-brand-dark font-medium leading-snug">
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
            className="pt-1 sm:pt-2 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mt-1 sm:mt-2 justify-center md:justify-start w-full">
              <a 
                href={getWhatsAppUrl('Hero')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick('Hero')}
                className="glass-button px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 group shadow-soft hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] transition-all duration-300 min-h-[44px] active:scale-95 text-xs sm:text-sm md:text-base w-full sm:w-auto"
              >
                <span>Agendar clase de prueba</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a 
                href="#metodo" 
                className="border border-brand-linen bg-white/60 text-brand-dark px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-medium hover:bg-white hover:border-brand-primary/40 transition-all min-h-[44px] flex items-center justify-center active:scale-95 shadow-soft text-xs sm:text-sm md:text-base w-full sm:w-auto"
              >
                Conocer el método
              </a>
            </div>

            {/* 5. Micro-prueba social y modalidades */}
            <p className="text-[0.65rem] sm:text-xs text-brand-muted font-light tracking-wide mt-2 sm:mt-3">
              Sesiones matutinas en vivo • Vía Zoom • Atención somática personalizada
            </p>
          </motion.div>
        </div>

        {/* Columna de imagen en escritorio (md: y lg:) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative h-[520px] lg:h-[580px] w-full hidden md:block"
        >
          <div className="w-full h-full relative z-10">
             {/* Marco arquitectónico exterior */}
             <div className="absolute inset-0 border border-brand-linen/80 rounded-t-[10rem] rounded-b-[2rem] transform translate-x-3 translate-y-3 pointer-events-none" />
             
             {/* Contenedor principal de la imagen */}
             <div className="w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-[0_12px_40px_rgba(42,36,33,0.06)] relative bg-white border border-brand-linen">
                <img 
                  src={heroImage} 
                  alt="Espacio sereno de bienestar y movimiento somático en Balletherapie" 
                  fetchPriority="high"
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
