import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg'; 

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      
      {/* Círculos decorativos de fondo (Blobs) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-medium/20 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Columna de Texto */}
        <div className="space-y-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 1. BADGE: Texto poético pequeño */}
            <span className="inline-block py-2 px-4 rounded-full bg-brand-primary/10 text-brand-primary font-bold tracking-widest uppercase text-[0.65rem] md:text-xs mb-6 border border-brand-primary/20 md:whitespace-nowrap">
              burnout que pesa • barre que restaura • movimiento que serena
            </span>
            
            {/* 2. H1: El problema y la marca */}
            <h1 className="text-4xl md:text-6xl font-serif text-brand-primary mt-2 leading-[1.15]">
              Horas sentad@. <br />
              Días iguales. <br />
              <span className="italic text-brand-medium">Balletherapy.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 max-w-lg mx-auto md:mx-0"
          >
            {/* 3. INTRODUCCIÓN: Resumen potente (negritas para escaneo rápido) */}
            <p className="text-lg text-brand-primary/90 font-medium leading-relaxed">
              Es el espacio donde el <strong>barre activa</strong>, el <strong>journaling libera</strong> y tu sistema nervioso se regula.
            </p>

            {/* 4. TEXTO LARGO: Formato editorial (más pequeño y ligero) */}
            <div className="pl-4 border-l-2 border-brand-medium/30 text-sm md:text-base text-gray-600 leading-relaxed font-light text-justify md:text-left">
              <p>
                Atrapadas en la mente, el cuerpo paga el precio: estrés y emociones guardadas. 
                El ballet clásico guarda un secreto: <span className="italic text-brand-medium">una columna alineada es equilibrio.</span>
              </p>
              <p className="mt-2">
                No se trata de ser bailarina, sino de habitar tu cuerpo con fuerza y serenidad. Balletherapy es la fusión para devolverte el equilibrio en medio del caos.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          >
            <a href="#reservar" className="glass-button px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transition-all">
              Agendar clase de prueba
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#metodo" className="border border-brand-primary/30 text-brand-primary px-8 py-4 rounded-full font-medium hover:bg-brand-primary/5 transition-all">
              Conocer el método
            </a>
          </motion.div>
        </div>

        {/* Columna de Imagen */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative h-[600px] w-full hidden md:block"
        >
          <div className="w-full h-full relative z-10">
             <div className="absolute inset-0 border-2 border-white/40 rounded-t-[10rem] rounded-b-[2rem] transform translate-x-4 translate-y-4"></div>
             
             <div className="w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl relative">
                <img 
                  src={heroImage} 
                  alt="Mujer en paz - Balletherapy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent mix-blend-overlay"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;