import React, { useState, useRef } from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import PrivacyModal from '../components/ui/PrivacyModal';
import { trackWhatsAppLead } from '../lib/analytics';

const Footer = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const privacyTriggerRef = useRef(null);

  return (
    <>
      <footer className="bg-brand-dark text-brand-base pt-14 pb-8 border-t border-brand-linen/20 relative overflow-hidden">
        {/* Halos sutiles de fondo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-[90px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-linen/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
            
            {/* Columna Marca: 1 col en móvil, 2 cols en desktop */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <h2 className="text-3xl font-serif text-brand-base">
                Balletherapy<span className="text-brand-primary">.</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-brand-linen/85 font-light">
                Un espacio de reconciliación integral diseñado para la mujer contemporánea. 
                Equilibra tu interior, fortalece tu exterior.
              </p>
              
              {/* Redes sociales en horizontal con área táctil cómoda */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://instagram.com/balletherapy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram de Balletherapy"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-brand-linen/15 text-brand-linen hover:text-white hover:bg-white/10 transition-colors active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-primary"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.75} />
                </a>
                <a 
                  href="mailto:balletherapystudio@gmail.com" 
                  aria-label="Correo electrónico de Balletherapy"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-brand-linen/15 text-brand-linen hover:text-white hover:bg-white/10 transition-colors active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-primary"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </a>
                <a 
                  href="https://wa.me/525539134996" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppLead('Footer')}
                  aria-label="WhatsApp de Balletherapy"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-brand-linen/15 text-brand-linen hover:text-white hover:bg-white/10 transition-colors active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-primary"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
                </a>
              </div>
            </div>

            {/* Enlaces ("Explora") y "Contacto": en móvil organizados en 2 columnas limpias */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-2 md:grid-cols-2">
              {/* Columna Explora */}
              <div>
                <h4 className="font-serif text-brand-base mb-4 md:mb-6 text-base">Explora</h4>
                <ul className="space-y-2.5 text-sm font-light">
                  <li><a href="#inicio" className="text-brand-linen/80 hover:text-white transition-colors py-1 inline-block">Inicio</a></li>
                  <li><a href="#metodo" className="text-brand-linen/80 hover:text-white transition-colors py-1 inline-block">Método</a></li>
                  <li><a href="#sobre-mi" className="text-brand-linen/80 hover:text-white transition-colors py-1 inline-block">Sobre mí</a></li>
                  <li><a href="#testimonios" className="text-brand-linen/80 hover:text-white transition-colors py-1 inline-block">Testimonios</a></li>
                  <li><a href="#reservar" className="text-brand-linen/80 hover:text-white transition-colors py-1 inline-block">Clases</a></li>
                  <li><a href="#faq" className="text-brand-linen/80 hover:text-white transition-colors py-1 inline-block">Preguntas</a></li>
                </ul>
              </div>

              {/* Columna Contacto */}
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-brand-base mb-4 md:mb-6 text-base">Contacto</h4>
                  <ul className="space-y-2.5 text-sm font-light">
                    <li>
                      <a 
                        href="mailto:balletherapystudio@gmail.com" 
                        className="text-brand-linen/80 hover:text-white transition-colors break-words text-xs sm:text-sm"
                      >
                        balletherapystudio@gmail.com
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://wa.me/525539134996" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => trackWhatsAppLead('Footer')}
                        className="text-brand-linen/80 hover:text-white transition-colors"
                      >
                        +52 55 3913 4996
                      </a>
                    </li>
                    <li className="text-brand-linen/60 text-xs pt-1">
                      Sesiones vía Zoom
                    </li>
                  </ul>
                </div>

                {/* Botón Aviso de privacidad con área táctil accesible y márgenes equilibrados */}
                <div className="pt-4">
                  <button 
                    ref={privacyTriggerRef}
                    id="privacy-trigger"
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="text-brand-linen/90 hover:text-white underline underline-offset-4 text-xs min-h-[44px] inline-flex items-center active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary text-left"
                  >
                    Aviso de privacidad
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Barra inferior de copyright */}
          <div className="border-t border-brand-linen/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-linen/70 font-light text-center sm:text-left">
            <p>© {new Date().getFullYear()} Balletherapy. Todos los derechos reservados.</p>
            <p className="text-brand-linen/50">Bienestar consciente y movimiento somático</p>
          </div>
        </div>
      </footer>

      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
        triggerRef={privacyTriggerRef}
      />
    </>
  );
};

export default Footer;