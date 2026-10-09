import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BatteryWarning, Smartphone, Clock, CheckCircle2 } from 'lucide-react';

const personas = [
  {
    title: "La profesional en burnout",
    Icon: BatteryWarning,
    description: "Tu cuerpo es solo un 'vehículo de productividad' que empieza a fallar.",
    symptoms: [
      "Dolor crónico de espalda y cuello",
      "Insomnio paradójico",
      "Vacaciones solo para dormir"
    ],
    accentBorder: "border-t-2 border-t-brand-primary/40",
    cardBg: "bg-white/85 md:translate-y-0"
  },
  {
    title: "La joven preventiva",
    Icon: Smartphone,
    description: "Intentas mantener el equilibrio, pero la carga laboral siempre gana.",
    symptoms: [
      "Ansiedad y fatiga visual",
      "Comes frente a la computadora",
      "'Tiempo para mí' es scrollear"
    ],
    accentBorder: "border-t-2 border-t-brand-primary",
    cardBg: "bg-white/95 md:-translate-y-2 shadow-[0_12px_36px_rgba(42,36,33,0.06)]"
  },
  {
    title: "La madre multitarea",
    Icon: Clock,
    description: "Cuidas de todos menos de ti misma. Sientes que debes poder con todo.",
    symptoms: [
      "Fatiga crónica y culpa",
      "Aislamiento selectivo",
      "Vives en piloto automático"
    ],
    accentBorder: "border-t-2 border-t-brand-secondary/40",
    cardBg: "bg-white/85 md:translate-y-0"
  }
];

const TargetAudience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const cardWidth = Math.min(clientWidth * 0.82, 320) + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), personas.length - 1));
  };

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const targetChild = carouselRef.current.children[index];
    if (targetChild) {
      targetChild.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* Halos decorativos de fondo sutiles en tono lino */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-linen/40 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-dark"
          >
            ¿Te sientes identificada?
          </motion.h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto font-light">
            Balletherapy es un espacio para mujeres reales.
          </p>
        </div>

        {/* Carrusel táctil con peek affordance en móvil (< md) y cuadrícula en escritorio (>= md) */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 px-4 -mx-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:px-0 md:mx-0 items-stretch"
        >
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.18 }}
              viewport={{ once: true }}
              className={`w-[82vw] max-w-[320px] flex-shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between border border-brand-linen shadow-soft hover:shadow-md backdrop-blur-md transition-all duration-300 md:w-auto md:max-w-none md:flex-shrink md:snap-align-none ${persona.accentBorder} ${persona.cardBg}`}
            >
              <div>
                {/* Insignia superior circular compacta */}
                <div className="w-10 h-10 rounded-full bg-brand-linen/40 text-brand-primary flex items-center justify-center mb-4 shadow-soft border border-brand-linen/50">
                  <persona.Icon className="w-4 h-4 text-brand-primary" strokeWidth={1.75} />
                </div>

                <h3 className="text-xl font-serif text-brand-dark mb-2 text-left">
                  {persona.title}
                </h3>

                <p className="text-brand-muted mb-4 italic text-xs sm:text-sm text-left leading-relaxed">
                  "{persona.description}"
                </p>
              </div>

              {/* Lista compacta de síntomas con espaciado controlado */}
              <ul className="border-t border-brand-linen/60 pt-4 space-y-2 mt-auto">
                {persona.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted font-light">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Indicador visual sutil de posición (dots) para móvil */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4" aria-hidden="true">
          {personas.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToSlide(idx)}
              aria-label={`Ver arquetipo ${idx + 1}`}
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

export default TargetAudience;