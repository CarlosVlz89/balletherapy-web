import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose, triggerRef }) => {
  const modalRef = useRef(null);
  const previousActiveElementRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      // Registrar que el modal estuvo abierto y capturar el elemento activo previo
      wasOpenRef.current = true;
      previousActiveElementRef.current = triggerRef?.current || document.activeElement;

      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
          return;
        }

        if (event.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );

          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      // Mover el foco al interior del modal tras montarse
      const timer = setTimeout(() => {
        if (modalRef.current) {
          const firstFocusable = modalRef.current.querySelector(
            'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
          );
          if (firstFocusable) {
            firstFocusable.focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 50);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        clearTimeout(timer);
      };
    } else if (wasOpenRef.current) {
      // Restaurar el foco al elemento detonador ÚNICA y exclusivamente si el modal estuvo abierto previamente
      wasOpenRef.current = false;
      const targetElement = previousActiveElementRef.current || triggerRef?.current || document.getElementById('privacy-trigger');
      if (targetElement && typeof targetElement.focus === 'function') {
        targetElement.focus();
      }
      previousActiveElementRef.current = null;
    }
  }, [isOpen, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          
          {/* Fondo oscuro translúcido (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          />

          {/* Ventana del diálogo modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(42,36,33,0.12)] overflow-hidden max-h-[85vh] flex flex-col border border-brand-linen focus:outline-none"
          >
            {/* Encabezado */}
            <div className="p-6 border-b border-brand-linen/60 flex justify-between items-center bg-brand-base/80">
              <h3 id="privacy-title" className="text-xl font-serif text-brand-dark">
                Aviso de privacidad
              </h3>
              <button 
                type="button"
                onClick={onClose}
                aria-label="Cerrar aviso de privacidad"
                className="p-2 hover:bg-brand-primary/10 rounded-full transition-colors group min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary/50"
              >
                <X className="w-5 h-5 text-brand-muted group-hover:text-brand-primary" />
              </button>
            </div>

            {/* Contenido legal con scroll interno */}
            <div className="p-6 overflow-y-auto text-brand-muted text-sm space-y-4 leading-relaxed font-light">
              <p><strong className="text-brand-dark font-medium">Última actualización: Febrero 2026</strong></p>
              
              <p>
                <strong className="text-brand-dark font-medium">Balletherapy</strong>, operado por <strong className="text-brand-dark font-medium">Elizabeth Caballero</strong>, (en adelante "El Responsable"), con domicilio para oír y recibir notificaciones en Ciudad de México, es el responsable del uso y protección de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), y al respecto le informamos lo siguiente:
              </p>

              <h4 className="font-serif font-bold text-brand-dark mt-4 text-base">
                ¿Para qué fines utilizaremos sus datos personales?
              </h4>
              <p>
                Los datos personales que recabamos de usted los utilizaremos para las siguientes finalidades necesarias para el servicio que solicita:
              </p>
              <ul className="list-disc pl-5 space-y-1 marker:text-brand-primary">
                <li>Proveer los servicios de clases de movilidad, barre somático, journaling y meditación (online o presencial).</li>
                <li>Gestión de citas, horarios y envío de enlaces directos para sesiones en vivo de Zoom.</li>
                <li>Facturación, comprobantes de pago y seguimiento del proceso de bienestar.</li>
                <li>Contacto para dudas, aclaraciones o seguimiento personalizado.</li>
              </ul>

              <h4 className="font-serif font-bold text-brand-dark mt-4 text-base">
                ¿Qué datos personales utilizaremos?
              </h4>
              <p>
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos exclusivamente: Nombre completo, teléfono celular (WhatsApp) y correo electrónico.
              </p>

              <h4 className="font-serif font-bold text-brand-dark mt-4 text-base">
                Derechos ARCO
              </h4>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
              </p>
              
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted puede presentar su solicitud enviando un correo electrónico formal a: <strong className="text-brand-primary font-medium">balletherapystudio@gmail.com</strong>
              </p>
            </div>

            {/* Pie del modal */}
            <div className="p-6 border-t border-brand-linen/60 bg-brand-base/50 text-right">
              <button 
                type="button"
                onClick={onClose}
                className="px-7 py-2.5 bg-brand-primary text-white rounded-full hover:bg-brand-secondary transition-all text-sm font-medium shadow-soft active:scale-95 min-h-[44px] inline-flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary/50"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;