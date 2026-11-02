import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { handleWhatsAppClick, getWhatsAppUrl } from '../lib/analytics';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Smart Scroll direccional con listener pasivo de alto rendimiento
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Estado de compresión Soft Glass cuando scrollY > 20
      setIsScrolled(currentScrollY > 20);

      // Excepción obligatoria: Si el menú móvil está abierto, la barra debe ser forzosamente visible
      if (isMobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Lógica direccional Smart Scroll
      if (currentScrollY <= 40) {
        // En la cabecera superior siempre visible en estado inicial
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        // La usuaria baja: ocultar hacia arriba
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // La usuaria sube: reaparecer de inmediato
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Bloqueo de desplazamiento del documento (Anti-scroll) al abrir el menú móvil
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Método", href: "#metodo" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleWhatsAppAction = () => {
    handleWhatsAppClick('Navbar');
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-in-out px-4 sm:px-6 md:px-8 ${
          isVisible || isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-28 opacity-0 pointer-events-none'
        }`}
      >
        {/* Contenedor adaptativo: 100% transparente y plano al tope; cápsula flotante Soft Glass al desplazarse */}
        <div className={`
          relative flex items-center justify-between transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'w-full max-w-4xl mx-auto mt-2 sm:mt-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FAF7F5]/95 backdrop-blur-md border border-[#EADFD9] shadow-[0_4px_20px_rgba(42,36,33,0.06)]' 
            : 'w-full max-w-6xl mx-auto px-6 sm:px-8 py-5 sm:py-6 bg-transparent border-transparent shadow-none rounded-none backdrop-blur-none'
          }
        `}>
          
          {/* Logotipo institucional de autor en cursiva editorial */}
          <a href="#inicio" className="flex flex-col leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 rounded-lg group">
            <span className={`font-serif italic font-normal tracking-wide text-brand-text hover:text-brand-primary transition-colors ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
              Balletherapie
            </span>
            <span className={`font-sans not-italic text-[0.65rem] tracking-widest text-brand-muted transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 mt-1'}`}>
              Wellness studio
            </span>
          </a>

          {/* Menú de navegación en escritorio */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-xs font-medium text-brand-muted hover:text-brand-primary transition-colors tracking-wider min-h-[44px] inline-flex items-center px-2 py-2 focus-visible:ring-2 focus-visible:ring-brand-primary/50 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href={getWhatsAppUrl('Navbar')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('Navbar')}
              className="glass-button px-6 py-2.5 rounded-full font-medium text-xs tracking-wider shadow-soft hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-primary/50 transition-all duration-300 min-h-[44px]"
            >
              Agendar clase
            </a>
          </div>

          {/* Botón hamburguesa accesible en móvil con área táctil mínima de 44x44px */}
          <button 
            type="button"
            className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brand-primary rounded-full hover:bg-brand-linen/30 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-primary/50 cursor-pointer transition-colors"
            onClick={() => {
              setIsVisible(true);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.75} /> : <Menu className="w-6 h-6" strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil de pantalla completa con desenfoque y bloqueo de scroll */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-brand-base/95 pt-28 pb-10 px-6 md:hidden flex flex-col items-center overflow-y-auto"
          >
            <ul className="flex flex-col gap-5 text-center w-full max-w-sm my-auto">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full border-b border-brand-linen/60 pb-2">
                  <a 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-brand-dark hover:text-brand-primary block w-full py-2 min-h-[44px] flex items-center justify-center active:scale-95 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 w-full">
                <a 
                  href={getWhatsAppUrl('Navbar')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppAction}
                  className="glass-button w-full text-center px-8 py-4 rounded-2xl font-medium text-base shadow-soft hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] active:scale-95 min-h-[48px] flex items-center justify-center transition-all duration-300"
                >
                  Agendar clase
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
