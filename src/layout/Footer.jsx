import React, { useState } from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import PrivacyModal from '../components/ui/PrivacyModal';

const Footer = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#8a5a5b] text-brand-base pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Columna 1: Marca */}
            <div className="col-span-1 md:col-span-2 space-y-6">
              <h2 className="text-3xl font-serif text-brand-base">
                Balletherapy<span className="text-brand-glass">.</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed opacity-80 font-light">
                Un espacio de reconciliación integral diseñado para la mujer moderna. 
                Equilibra tu interior, fortalece tu exterior.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/balletherapy" target="_blank" rel="noreferrer" className="hover:text-brand-glass transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:balletherapystudio@gmail.com" className="hover:text-brand-glass transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://wa.me/525539134996" target="_blank" rel="noreferrer" className="hover:text-brand-glass transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Columna 2: Enlaces */}
            <div>
              <h4 className="font-serif text-brand-glass mb-6">Explora</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#inicio" className="hover:text-brand-glass transition-colors">Inicio</a></li>
                <li><a href="#metodo" className="hover:text-brand-glass transition-colors">Método</a></li>
                <li><a href="#reservar" className="hover:text-brand-glass transition-colors">Clases</a></li>
                <li><a href="#faq" className="hover:text-brand-glass transition-colors">Preguntas</a></li>
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h4 className="font-serif text-brand-glass mb-6">Contacto</h4>
              <ul className="space-y-3 text-sm font-light">
                <li className="opacity-80">balletherapystudio@gmail.com</li>
                <li className="opacity-80">+52 55 3913 4996</li>
                <li className="pt-4">
                  <button 
                    onClick={() => setPrivacyOpen(true)}
                    className="text-brand-glass hover:underline text-xs"
                  >
                    Aviso de Privacidad
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-base/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60 font-light">
            <p>© {new Date().getFullYear()} Balletherapy. Todos los derechos reservados.</p>
            <p>Diseñado con ♥</p>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};

export default Footer;