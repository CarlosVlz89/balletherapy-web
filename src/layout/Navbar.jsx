import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { handleWhatsAppClick, getWhatsAppUrl } from '../lib/analytics';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 flex justify-center"
      >
        <div className={`
          relative transition-all duration-500 ease-in-out flex items-center justify-between px-5 md:px-6 py-2.5 md:py-3
          ${isScrolled 
            ? 'w-full max-w-4xl bg-[#FAF7F5]/92 backdrop-blur-md border border-[#EADFD9] shadow-[0_4px_20px_rgba(42,36,33,0.06)] rounded-full' 
            : 'w-full max-w-6xl bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-brand-linen/60 md:border-transparent rounded-full md:rounded-none shadow-soft md:shadow-none'
          }
        `}>
          
          {/* Logotipo institucional */}
          <a href="#inicio" className="flex flex-col leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 rounded-lg">
            <span className={`font-sans font-bold tracking-[0.15em] text-brand-primary transition-all ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Balletherapy
            </span>
            <span className={`text-[0.55rem] tracking-[0.25em] text-brand-muted text-center transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 mt-1'}`}>
              wellness studio
            </span>
          </a>

          {/* Menú de escritorio */}
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
              className="glass-button px-6 py-2.5 rounded-full font-medium text-xs tracking-wider shadow-soft hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-primary/50 transition-all duration-300"
            >
              Agendar clase
            </a>
          </div>

          {/* Botón hamburguesa accesible en móvil con área táctil mínima de 44x44px */}
          <button 
            type="button"
            className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brand-primary rounded-full hover:bg-brand-linen/30 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-primary/50 cursor-pointer transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.75} /> : <Menu className="w-6 h-6" strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil de pantalla completa con desenfoque y scroll seguro */}
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