import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BatteryWarning, Smartphone, Clock, CheckCircle2, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { handleWhatsAppClick } from '../lib/analytics';

const WHATSAPP_PHONE = '525539134996';

const personas = [
  {
    id: 'burnout',
    title: 'La profesional en burnout',
    tag: 'Tensión y sobrecarga',
    Icon: BatteryWarning,
    cardBg: 'bg-[#FAF3F2]/90',
    cardBorder: 'border-[#E8D6D5]',
    badgeBg: 'bg-brand-primary/10 text-brand-primary',
    tagClass: 'bg-brand-primary/10 text-brand-primary border border-brand-primary/15',
    context: 'Exigencia mental continua, contracturas en cuello y desconexión progresiva de tu cuerpo.',
    description: 'Tu cuerpo es solo un vehículo de productividad que empieza a fallar.',
    symptoms: [
      'Dolor crónico de espalda alta, hombros y cuello',
      'Insomnio paradójico: cansancio extremo con mente hiperactiva',
      'Fines de semana dedicados exclusivamente a intentar recuperarte',
    ],
    whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola! Me identifiqué con el perfil de profesional en burnout y me gustaría consultar disponibilidad')}`,
  },
  {
    id: 'preventiva',
    title: 'La joven preventiva',
    tag: 'Sedentarismo digital',
    Icon: Smartphone,
    cardBg: 'bg-[#F6F2EE]/90',
    cardBorder: 'border-[#E5DDD6]',
    badgeBg: 'bg-[#685D57]/10 text-[#685D57]',
    tagClass: 'bg-[#685D57]/10 text-[#685D57] border border-[#685D57]/15',
    context: 'Sedentarismo frente al monitor, fatiga visual y el deseo de cuidar tu postura a tiempo.',
    description: 'Intentas mantener el equilibrio, pero la carga laboral siempre gana.',
    symptoms: [
      'Ansiedad difusa y fatiga visual por exposición continua a pantallas',
      'Comidas rápidas frente a la computadora sin pausas conscientes',
      'El tiempo para ti se reduce a scrollear redes sociales sin descanso real',
    ],
    whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola! Me identifiqué con el perfil de joven preventiva y me gustaría consultar disponibilidad')}`,
  },
  {
    id: 'multitarea',
    title: 'La madre multitarea',
    tag: 'Autoexigencia diaria',
    Icon: Clock,
    cardBg: 'bg-[#F7F2F3]/90',
    cardBorder: 'border-[#E6D9DC]',
    badgeBg: 'bg-brand-secondary/10 text-brand-secondary',
    tagClass: 'bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/15',
    context: 'Cuidado constante de los demás postergando tu propio espacio y acumulando tensión.',
    description: 'Cuidas de todos menos de ti misma. Sientes que debes poder con todo.',
    symptoms: [
      'Fatiga crónica acumulada y culpa involuntaria al tomar pausas',
      'Aislamiento selectivo por falta de energía al finalizar el día',
      'Sensación de vivir en piloto automático cumpliendo exigencias ajenas',
    ],
    whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola! Me identifiqué con el perfil de madre multitarea y me gustaría consultar disponibilidad')}`,
  },
];

const TargetAudience = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Control de scroll y progreso en viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Interpolaciones ágiles vinculadas a la GPU calibradas para mobile first (sin bloqueos de scroll)
  const headerY = useTransform(scrollYProgress, [0.08, 0.25], ['18vh', '0vh']);
  const subtitleOpacity = useTransform(scrollYProgress, [0.08, 0.18], [1, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.14, 0.25], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.14, 0.25], ['30px', '0px']);
  const cardsPointerEvents = useTransform(scrollYProgress, (v) => (v >= 0.22 ? 'auto' : 'none'));
  const backdropOpacity = useTransform(scrollYProgress, [0.08, 0.25], [1, 0]);

  // Sincronización pasiva del índice activo en desplazamiento horizontal
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const onCarouselScroll = () => {
      const card = carousel.firstElementChild;
      if (!card) return;
      const cardWidth = card.clientWidth + 28;
      const newIndex = Math.round(carousel.scrollLeft / cardWidth);
      const clampedIndex = Math.max(0, Math.min(newIndex, personas.length - 1));
      setActiveIndex(clampedIndex);
    };

    carousel.addEventListener('scroll', onCarouselScroll, { passive: true });
    return () => {
      carousel.removeEventListener('scroll', onCarouselScroll);
    };
  }, []);

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const targetChild = carouselRef.current.children[index];
    if (targetChild) {
      targetChild.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild;
      const scrollAmount = card ? card.clientWidth + 28 : 680;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="audiencia"
      ref={sectionRef}
      className="relative w-full h-[140vh] md:h-[240vh]"
    >
      {/* Escenario fijo en viewport (100dvh para soporte de barras dinámicas de navegadores móviles) */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center py-3 sm:py-6 pb-20 md:pb-6">

        {/* Capa atmosférica de fondo reactiva al scroll (Transición inmersiva de Fase 1 a Fase 2) */}
        <motion.div
          style={{ opacity: backdropOpacity }}
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#EFE8E3] via-[#F4EEE9] to-brand-base"
        />

        {/* Halos decorativos de fondo en lino y terracota difuminada */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-linen/40 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl translate-x-1/4 pointer-events-none" />

        {/* Encabezado cinemático en 3 fases sin saltos de layout */}
        <motion.div
          style={{ y: headerY }}
          className="w-full max-w-3xl mx-auto px-4 text-center mb-2 sm:mb-4 pointer-events-none relative z-20 flex-shrink-0"
        >
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-sans tracking-wide bg-brand-linen/40 text-brand-primary mb-2 sm:mb-3 shadow-soft">
            ¿Te sientes identificada?
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-brand-text leading-tight">
            El cansancio que no se quita <span className="italic font-normal text-brand-primary">durmiendo</span>
          </h2>

          {/* El subtítulo se mantiene siempre montado para prevenir CLS */}
          <motion.p
            style={{ opacity: subtitleOpacity }}
            className="text-brand-muted text-xs sm:text-base mt-2 sm:mt-3 max-w-xl mx-auto leading-relaxed font-light"
          >
            Balletherapie es un espacio para mujeres reales. Tres historias comunes de agotamiento y un mismo camino hacia la reconciliación con tu cuerpo.
          </motion.p>
        </motion.div>

        {/* Carrusel horizontal full-bleed con touch-action pan-y y overscroll-x contain */}
        <motion.div
          ref={carouselRef}
          style={{
            opacity: cardsOpacity,
            y: cardsY,
            pointerEvents: cardsPointerEvents,
            touchAction: 'pan-y',
            overscrollBehaviorX: 'contain',
          }}
          className="w-full overflow-x-auto no-scrollbar scrollbar-hide snap-x snap-mandatory touch-pan-y overscroll-x-contain flex items-stretch gap-6 sm:gap-8 px-6 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 relative z-10"
        >
          {personas.map((persona) => (
            <div
              key={persona.id}
              className={`w-[85vw] sm:w-[580px] md:w-[680px] lg:w-[740px] shrink-0 snap-center min-h-[300px] sm:min-h-[340px] md:min-h-[350px] py-4 px-5 sm:py-6 sm:px-7 md:py-6 md:px-8 rounded-3xl ${persona.cardBg} backdrop-blur-xl border ${persona.cardBorder} shadow-[0_12px_36px_rgba(42,36,33,0.06)] hover:shadow-[0_16px_44px_rgba(160,82,85,0.1)] transition-shadow duration-300 overflow-hidden flex flex-col justify-between`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-4 md:gap-7 h-full items-stretch flex-1">

                {/* Columna izquierda (Identidad y llamada a la acción) */}
                <div className="h-full flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-linen/60 pb-3 md:pb-0 md:pr-5">
                  <div>
                    {/* Cabecera: Badge circular con ícono temático y micro-tag descriptivo */}
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${persona.badgeBg}`}>
                        <persona.Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </div>
                      <span className={`text-[0.7rem] font-medium px-2 py-0.5 rounded-full ${persona.tagClass}`}>
                        {persona.tag}
                      </span>
                    </div>

                    {/* Nombre del perfil en Playfair Display con tamaño destacado */}
                    <h3 className="text-lg sm:text-2xl font-serif text-brand-text font-semibold leading-snug my-1 sm:my-1.5">
                      {persona.title}
                    </h3>

                    {/* Descripción contextual con ancho holgado para fluidez tipográfica */}
                    <p className="text-xs text-brand-muted leading-relaxed mb-2 sm:mb-3 max-w-[270px] font-light hidden sm:block">
                      {persona.context}
                    </p>
                  </div>

                  <div className="mt-auto pt-1">
                    <a
                      href={persona.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleWhatsAppClick(`Audience_${persona.id}`)}
                      className="text-xs sm:text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors inline-flex items-center gap-1 py-1 min-h-[44px] active:scale-95 group"
                    >
                      <span>Sentirme mejor</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>

                {/* Columna derecha (Empatía somatosensorial) */}
                <div className="h-full flex flex-col justify-between pt-1 md:pt-0">
                  <div className="bg-white/60 border border-brand-linen/80 rounded-xl p-2.5 sm:p-3.5 mb-2 sm:mb-2.5 shadow-[0_2px_12px_rgba(42,36,33,0.02)]">
                    <div className="flex items-start gap-2">
                      <Quote className="w-3.5 h-3.5 text-brand-primary/60 shrink-0 mt-0.5" />
                      <p className="font-sans italic text-xs sm:text-[0.8rem] text-brand-text leading-snug">
                        "{persona.description}"
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1 sm:space-y-1.5 mt-auto">
                    {persona.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-[0.8rem] text-brand-muted leading-tight font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Pastilla flotante de controles de navegación inferior */}
        <motion.div
          style={{
            opacity: cardsOpacity,
            pointerEvents: cardsPointerEvents,
          }}
          className="mt-3 sm:mt-5 flex justify-center items-center gap-3 relative z-10 flex-shrink-0"
        >
          <div className="bg-white/90 backdrop-blur-xl px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-brand-linen shadow-md flex items-center gap-3">
            {/* Botón chevron anterior */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={activeIndex === 0}
              aria-label="Ver perfil anterior"
              className="w-11 h-11 flex items-center justify-center rounded-full text-brand-dark hover:text-brand-primary hover:bg-brand-linen/40 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Micro-indicadores visuales reactivos (dots) */}
            <div className="flex items-center gap-2 px-1" role="tablist" aria-label="Indicadores de perfiles">
              {personas.map((persona, idx) => (
                <button
                  key={persona.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === idx}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Ver ${persona.title}`}
                  className="h-11 min-w-[20px] flex items-center justify-center focus:outline-none group"
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-300 block ${
                      activeIndex === idx
                        ? 'w-8 bg-brand-primary shadow-sm'
                        : 'w-2.5 bg-brand-linen group-hover:bg-brand-muted/40'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Botón chevron siguiente */}
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={activeIndex === personas.length - 1}
              aria-label="Ver perfil siguiente"
              className="w-11 h-11 flex items-center justify-center rounded-full text-brand-dark hover:text-brand-primary hover:bg-brand-linen/40 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TargetAudience;
