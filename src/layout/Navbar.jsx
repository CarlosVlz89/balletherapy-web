import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Método", href: "#metodo" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-0 flex justify-center`}
      >
        <div className={`
          relative transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3
          ${isScrolled 
            ? 'w-full max-w-4xl glass-panel shadow-2xl bg-white/60' // Efecto Vidrio comprimido
            : 'w-full max-w-6xl bg-transparent' // Extendido transparente
          }
        `}>
          
          {/* LOGO */}
          <div className="flex flex-col leading-none">
            <h1 className={`font-sans font-bold tracking-[0.15em] text-brand-primary uppercase transition-all ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Balletherapy
            </h1>
            <span className={`text-[0.5rem] tracking-[0.2em] text-brand-medium uppercase text-center transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 mt-1'}`}>
              wellness studio
            </span>
          </div>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-xs font-bold text-gray-600 hover:text-brand-primary transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="#reservar"
              className="glass-button px-5 py-2 rounded-full font-medium text-xs tracking-wide uppercase"
            >
              Agendar Clase
            </a>
          </div>

          {/* BURGER MENU MÓVIL */}
          <button 
            className="md:hidden p-2 text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL (Full Screen Glass) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-brand-base/90 pt-32 px-6 md:hidden flex flex-col items-center"
          >
            <ul className="flex flex-col gap-8 text-center w-full">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full border-b border-white/30 pb-4">
                  <a 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-brand-primary block w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-8 w-full">
                <a 
                  href="#reservar"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-8 py-4 bg-brand-primary text-white rounded-2xl font-medium text-lg shadow-xl"
                >
                  Agendar Clase
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