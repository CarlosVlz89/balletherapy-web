import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Estaba cansada de sentirme cansada. No tenía tiempo ni energía, pero estas sesiones me cambiaron la mente, el cuerpo y el alma.",
    author: "Alumna de Balletherapy",
    role: "CEO",
    initial: "C",
    delay: 0
  },
  {
    quote: "Me encantan las clases, siempre aprende algo nuevo mi cuerpo. Es increíble cómo movimientos tan sutiles pueden liberar tanta tensión.",
    author: "Alumna de Balletherapy",
    role: "Madre y ejecutiva",
    initial: "M",
    delay: 0.2
  },
  {
    quote: "Por fin un lugar donde no me siento juzgada por mi flexibilidad. Aquí vengo a sanar mi espalda, no a competir con nadie.",
    author: "Alumna de Balletherapy",
    role: "Abogada corporativa",
    initial: "A",
    delay: 0.4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const cardWidth = Math.min(clientWidth * 0.82, 320) + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  };

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const targetChild = carouselRef.current.children[index];
    if (targetChild) {
      targetChild.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="testimonios" className="py-24 px-6 relative overflow-hidden scroll-mt-20">

      {/* Halos decorativos de fondo sutiles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-linen/30 rounded-full blur-[90px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[90px] translate-y-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary font-medium tracking-wide text-xs block"
          >
            Voces reales
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-dark"
          >
            Ellas ya encontraron <span className="italic text-brand-primary">su centro</span>.
          </motion.h2>
        </div>

        {/* Carrusel táctil con peek affordance en móvil (< md) y cuadrícula en escritorio (>= md) */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 px-4 -mx-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:px-0 md:mx-0 items-stretch"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-[82vw] max-w-[320px] flex-shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between border border-brand-linen shadow-soft hover:shadow-md glass-panel relative group hover:-translate-y-1 transition-all duration-300 md:w-auto md:max-w-none md:flex-shrink md:snap-align-none"
            >
              <Quote className="absolute top-6 right-6 w-6 h-6 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors" />

              <div>
                {/* 5 estrellas en terracota */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
                  ))}
                </div>

                <p className="text-brand-dark/90 text-sm sm:text-base leading-relaxed italic mb-6 font-light">
                  "{item.quote}"
                </p>
              </div>

              {/* Pie de alumna: Monograma tipográfico editorial a la izquierda y datos a la derecha */}
              <div className="mt-auto border-t border-brand-linen/60 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-linen/60 text-brand-primary font-serif font-semibold text-sm flex items-center justify-center shrink-0 border border-brand-linen shadow-soft">
                  {item.initial}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-brand-dark font-medium text-xs sm:text-sm">{item.author}</h4>
                  <span className="text-brand-muted text-[0.7rem] sm:text-xs tracking-wider">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicador visual sutil de posición (dots) para móvil */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4" aria-hidden="true">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToSlide(idx)}
              aria-label={`Ver testimonio ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === idx 
                  ? 'w-6 bg-brand-primary' 
                  : 'w-2 bg-brand-linen hover:bg-brand-muted/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;