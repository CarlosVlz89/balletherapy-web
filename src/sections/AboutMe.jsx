import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import eliImage from '../assets/eli-about.jpg'; 

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      
      {/* Fondo Blob decorativo */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-brand-light/20 rounded-full blur-[80px] -z-10 translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Columna de Imagen */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
            {/* CORRECCIÓN 1: Quitamos 'grayscale' para que siempre esté a color */}
            <img 
              src={eliImage} 
              alt="Eli, fundadora de Balletherapy" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Un brillo sutil encima para integrarla */}
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
          </div>

          {/* CORRECCIÓN 2: Tarjeta más sólida para lectura perfecta */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white/90 backdrop-blur-xl p-8 max-w-xs border-l-4 border-brand-primary z-10 rounded-tr-3xl rounded-bl-3xl shadow-2xl">
            <Quote className="w-8 h-8 text-brand-primary mb-4 opacity-100" />
            <p className="text-brand-primary font-serif text-lg leading-relaxed italic font-medium">
              "El ballet dejó de ser solo danza para convertirse en mi entrenamiento para la vida."
            </p>
          </div>
        </motion.div>

        {/* Columna de Texto */}
        <div className="space-y-8 relative mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-medium font-bold tracking-wider uppercase text-sm mb-2 block">
              Sobre Mí
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6 leading-tight">
              De la rigidez a la <span className="italic text-brand-medium">libertad</span>.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 space-y-6 leading-relaxed text-lg font-light"
          >
            <p>
              Mi camino no fue el de la bailarina prodigio. Comencé tarde, a los 17 años, y fui rechazada múltiples veces por tener una "espalda rígida".
            </p>
            <p>
              Me obligué a trabajar mi cuerpo de forma analítica. Pero el esfuerzo tuvo un costo: <strong className="text-brand-primary font-medium">dos caídas graves y una hernia discal</strong> diagnosticada en Cuba.
            </p>
            
            {/* Caja destacada */}
            <div className="bg-white/60 backdrop-blur-sm p-6 border-l-2 border-brand-primary rounded-r-xl">
              <p className="italic text-gray-700 font-normal">
                Ese fue mi despertar. Entendí que mi dolor de espalda no era solo físico; era la somatización de mis emociones y pensamientos.
              </p>
            </div>

            <p>
              <strong className="text-brand-primary font-medium">Balletherapy nace de esa sanación</strong>: un método para que tú también transformes tu dolor en equilibrio.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;