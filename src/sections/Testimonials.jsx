import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Estaba cansada de sentirme cansada. No tenía tiempo ni energía, pero estas sesiones me cambiaron la mente, el cuerpo y el alma.",
    author: "Alumna de Balletherapy",
    role: "Madre y Ejecutiva",
    delay: 0
  },
  {
    quote: "Me encantan las clases, siempre aprende algo nuevo mi cuerpo. Es increíble cómo movimientos tan sutiles pueden liberar tanta tensión.",
    author: "Alumna de Balletherapy",
    role: "Diseñadora Gráfica",
    delay: 0.2
  },
  {
    quote: "Por fin un lugar donde no me siento juzgada por mi flexibilidad. Aquí vengo a sanar mi espalda, no a competir con nadie.",
    author: "Alumna de Balletherapy",
    role: "Abogada Corporativa",
    delay: 0.4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      
      {/* Manchas de color de fondo para resaltar el vidrio */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[80px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-medium/20 rounded-full blur-[80px] translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-medium font-bold tracking-wider uppercase text-sm"
          >
            Voces Reales
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-primary"
          >
            Ellas ya encontraron <span className="italic text-brand-medium">su centro</span>.
          </motion.h2>
        </div>

        {/* Grid de Tarjetas de Vidrio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.6 }}
              viewport={{ once: true }}
              // AQUI LA CLASE MAGIC: glass-panel
              className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-primary opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-medium fill-brand-medium" />
                ))}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed italic mb-8 font-light">
                "{item.quote}"
              </p>

              <div className="mt-auto border-t border-brand-primary/10 pt-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-base flex items-center justify-center text-brand-primary font-serif font-bold shadow-inner">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-brand-primary font-medium text-sm">{item.author}</h4>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;