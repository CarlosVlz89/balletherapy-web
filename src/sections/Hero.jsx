import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// 1. IMPORTAMOS LA IMAGEN AQUÍ
// Asegúrate de que el nombre coincida con tu archivo en assets
import heroImage from '../assets/hero-bg.jpg'; 

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      
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
            <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary font-semibold tracking-wider uppercase text-xs mb-4 border border-brand-primary/20">
              Equilibra tu interior
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-primary mt-2 leading-[1.1]">
              Cuando todo se mueve, <br />
              <span className="italic text-brand-medium">tu centro permanece.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-light"
          >
            El balance perfecto entre energía para rendir y calma para decidir. 
            Un espacio libre de juicios diseñado para la mujer moderna.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#reservar" className="glass-button px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group">
              Agendar clase de prueba
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#metodo" className="border border-brand-primary/30 text-brand-primary px-8 py-4 rounded-full font-medium hover:bg-brand-primary/5 transition-all">
              Conocer el método
            </a>
          </motion.div>
        </div>

        {/* Columna de Imagen (Con tu foto local) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative h-[550px] w-full hidden md:block"
        >
          <div className="w-full h-full relative z-10">
             {/* Marco de vidrio alrededor de la imagen */}
             <div className="absolute inset-0 border-2 border-white/40 rounded-t-[10rem] rounded-b-[2rem] transform translate-x-4 translate-y-4"></div>
             
             <div className="w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl relative">
                {/* 2. USAMOS LA VARIABLE AQUÍ */}
                <img 
                  src={heroImage} 
                  alt="Mujer en paz - Balletherapy" 
                  className="w-full h-full object-cover"
                />
                {/* Gradiente suave encima de la imagen para integrar colores */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent mix-blend-overlay"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;