import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          
          {/* Fondo Oscuro (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/20 backdrop-blur-sm"
          />

          {/* Ventana del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col border border-white/40"
          >
            {/* Encabezado */}
            <div className="p-6 border-b border-brand-primary/10 flex justify-between items-center bg-brand-base/50">
              <h3 className="text-xl font-serif text-brand-primary">Aviso de Privacidad</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-brand-primary/10 rounded-full transition-colors group"
              >
                <X className="w-5 h-5 text-gray-500 group-hover:text-brand-primary" />
              </button>
            </div>

            {/* Contenido Legal */}
            <div className="p-6 overflow-y-auto custom-scrollbar text-gray-600 text-sm space-y-4 leading-relaxed">
              <p><strong className="text-brand-primary">Última actualización: Febrero 2026</strong></p>
              
              <p>
                <strong>Balletherapy</strong>, operado por <strong>Elizabeth Caballero</strong>, (en adelante "El Responsable"), con domicilio para oír y recibir notificaciones en Ciudad de México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
              </p>

              <h4 className="font-bold text-brand-primary mt-4 text-base">¿Para qué fines utilizaremos sus datos personales?</h4>
              <p>
                Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
              </p>
              <ul className="list-disc pl-5 space-y-1 marker:text-brand-medium">
                <li>Proveer los servicios de clases de movilidad, ballet y bienestar (online o presencial).</li>
                <li>Gestión de citas, horarios y envío de enlaces para sesiones en vivo.</li>
                <li>Facturación y cobro de servicios.</li>
                <li>Contacto para dudas, aclaraciones o seguimiento de su progreso.</li>
              </ul>

              <h4 className="font-bold text-brand-primary mt-4 text-base">¿Qué datos personales utilizaremos?</h4>
              <p>
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: Nombre completo, teléfono celular (WhatsApp) y correo electrónico.
              </p>

              <h4 className="font-bold text-brand-primary mt-4 text-base">Derechos ARCO</h4>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
              </p>
              
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva enviando un correo electrónico a: <strong className="text-brand-medium">balletherapystudio@gmail.com</strong>
              </p>
            </div>

            {/* Pie del Modal */}
            <div className="p-6 border-t border-brand-primary/10 bg-brand-base/30 text-right">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 transition-colors text-sm font-medium shadow-lg"
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