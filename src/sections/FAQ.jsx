import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { handleWhatsAppClick, getWhatsAppUrl } from '../lib/analytics';

const faqs = [
  {
    question: "¿Necesito saber ballet o ser flexible?",
    answer: "¡Para nada! Balletherapy no es danza técnica; es terapia de movimiento. No buscamos que levantes la pierna hasta la oreja, sino que reconectes con tu cuerpo respetando tu anatomía."
  },
  {
    question: "¿Qué necesito para la clase?",
    answer: "Ropa cómoda, un espacio pequeño y una silla o superficie estable para usar como barra de apoyo. Puedes practicar descalza o con calcetines antideslizantes."
  },
  {
    question: "¿Es seguro si tengo lesiones de espalda?",
    answer: "El enfoque es de bajo impacto y descompresión espinal. Si tienes una lesión aguda reciente o hernia con dolor agudo, consulta previamente con tu médico. En cada sesión guiamos variaciones suaves y seguras."
  },
  {
    question: "¿Cómo funcionan los pagos?",
    answer: "Puedes realizar tu pago por clase individual o mediante paquetes a tu medida sin mensualidades forzosas. Una vez confirmado tu pago vía WhatsApp, recibes las credenciales directas de Zoom."
  },
  {
    question: "¿Qué pasa si no puedo conectarme a mi clase?",
    answer: "Nuestras sesiones son completamente en vivo para proteger la privacidad de las alumnas y asegurar una guía postural cercana. Si por algún imprevisto no puedes asistir, puedes reagendar tu sesión en cualquiera de los otros horarios matutinos disponibles dentro de la misma semana avisando con anticipación."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 relative scroll-mt-20">
      <div className="max-w-3xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-base text-brand-primary mb-4 border border-brand-linen shadow-soft">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">
            Resolvemos tus dudas
          </h2>
        </div>

        {/* Tarjetas individuales del acordeón con microinteracción y realce visual */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div 
                key={index} 
                className={`bg-white/85 backdrop-blur-md rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-primary/30 shadow-[0_4px_16px_rgba(160,82,85,0.06)] bg-white/95' 
                    : 'border-brand-linen shadow-soft hover:border-brand-linen/90 hover:bg-white/90'
                }`}
              >
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 min-h-[56px] cursor-pointer group"
                >
                  <span className={`font-serif text-base sm:text-lg font-medium pr-6 transition-colors duration-200 ${isOpen ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-primary'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Icono con rotación fluida de 45° a aspa */}
                  <div className={`p-2 rounded-full transition-all duration-200 shrink-0 ${isOpen ? 'bg-brand-primary text-white shadow-soft' : 'bg-brand-base border border-brand-linen text-brand-primary group-hover:border-brand-primary/40'}`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" strokeWidth={1.75} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-brand-muted leading-relaxed font-light text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-muted mb-4 font-light text-sm">¿Tienes alguna otra pregunta?</p>
          <a
            href={getWhatsAppUrl('FAQ')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick('FAQ')}
            className="text-brand-primary font-medium hover:text-brand-secondary transition-colors border-b border-brand-primary/40 hover:border-brand-secondary min-h-[44px] inline-flex items-center active:scale-95 text-sm"
          >
            Escríbeme por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;