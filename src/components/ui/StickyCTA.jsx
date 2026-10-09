import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { handleWhatsAppClick, getWhatsAppUrl } from '../../lib/analytics';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Visibilidad condicionada a superar el primer pliegue visual (Hero)
      setIsVisible(window.scrollY >= 420);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden fixed bottom-4 inset-x-4 z-40 bg-white/90 backdrop-blur-md border border-brand-linen rounded-full p-2 pl-5 flex items-center justify-between shadow-lg"
          role="region"
          aria-label="Llamada a la acción rápida móvil"
        >
          {/* Texto somatosensorial izquierdo */}
          <div className="flex flex-col pr-2">
            <span className="font-serif text-sm font-semibold text-brand-dark leading-tight">
              Tu primera sesión
            </span>
            <span className="text-[0.7rem] text-brand-muted font-light leading-tight">
              Clase de prueba gratis
            </span>
          </div>

          {/* Botón de conversión rápida */}
          <a
            href={getWhatsAppUrl('StickyCTA')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick('StickyCTA')}
            className="bg-brand-primary text-white text-xs px-4 py-2.5 rounded-full font-medium hover:bg-brand-secondary active:scale-95 transition-all shadow-sm min-h-[44px] flex items-center justify-center gap-1.5 shrink-0 group hover:shadow-[0_4px_16px_rgba(160,82,85,0.25)]"
          >
            <span>Reservar</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
