import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, MonitorPlay } from 'lucide-react';

const Schedule = () => {
  return (
    <section id="reservar" className="py-24 px-6 relative scroll-mt-24 overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-light/30 rounded-full blur-[100px] -z-10 translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-medium font-bold tracking-wider uppercase text-sm">
            Tu Espacio, Tu Tiempo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">
            Encuentra el momento para <span className="italic text-brand-medium">ti</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Panel de Horarios (Vidrio Claro) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-brand-primary/10 pb-4">
              <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-brand-primary">Horarios en Vivo</h3>
            </div>

            <div className="space-y-8">
              {/* Lunes a Viernes */}
              <div className="relative pl-6 border-l-2 border-brand-medium">
                <span className="text-brand-medium font-bold uppercase tracking-wide text-xs mb-1 block">Lunes a Viernes</span>
                <ul className="space-y-3 mt-2">
                  {["06:45 AM - 07:45 AM", "08:00 AM - 09:00 AM", "10:00 AM - 11:00 AM"].map((time, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-light">
                      <Clock className="w-4 h-4 text-brand-primary/60" />
                      {time}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sábados */}
              <div className="relative pl-6 border-l-2 border-brand-medium">
                <span className="text-brand-medium font-bold uppercase tracking-wide text-xs mb-1 block">Sábados</span>
                <ul className="space-y-3 mt-2">
                  {["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"].map((time, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-light">
                      <Clock className="w-4 h-4 text-brand-primary/60" />
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Info y Pago */}
          <div className="space-y-6">
            
            {/* Tarjeta Modalidad */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="glass-panel p-8"
            >
              <h3 className="text-xl font-serif text-brand-primary mb-4 flex items-center gap-2">
                <Video className="w-5 h-5 text-brand-medium" />
                Modalidad Online
              </h3>
              <p className="text-gray-600 mb-4 font-light">
                Clases vía <strong>Zoom</strong>. Recibirás el enlace directo al confirmar.
              </p>
              <div className="flex items-start gap-3 mt-4 text-sm text-gray-500 bg-white/40 p-4 rounded-xl border border-white/30">
                <MonitorPlay className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p>¿No puedes asistir? Acceso a la <strong>grabación por 24 horas</strong>.</p>
              </div>
            </motion.div>

            {/* Tarjeta de Acción (Botón Gigante con Degradado) */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-brand-primary to-brand-medium text-white shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-serif mb-2 text-brand-base">Inversión Simple</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">Pago por clase</span>
                </div>
                <p className="text-white/80 text-sm mb-6 font-light">
                  Sin mensualidades forzosas. Pagas solo lo que usas.
                </p>
                
                {/* Botón CTA a WhatsApp */}
                <a 
                  href="https://wa.me/525539134996?text=Hola!%20Quiero%20agendar%20mi%20clase%20de%20prueba%20gratis" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-brand-primary py-3 rounded-full font-medium hover:bg-brand-base transition-colors shadow-lg"
                >
                  Reservar mi clase
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;
