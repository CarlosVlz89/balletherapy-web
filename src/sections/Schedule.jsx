import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, ShieldCheck, ArrowRight } from 'lucide-react';
import { handleWhatsAppClick, getWhatsAppUrl } from '../lib/analytics';

const Schedule = () => {
  return (
    <section id="reservar" className="py-24 px-6 relative scroll-mt-24 overflow-hidden">

      {/* Halo decorativo tenue */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-linen/40 rounded-full blur-[110px] -z-10 translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-primary font-medium tracking-wide text-xs block">
            Tu espacio, tu tiempo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">
            Encuentra el momento para <span className="italic text-brand-primary">ti</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Panel de horarios con líneas finas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 border border-brand-linen shadow-soft"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-brand-linen/60 pb-4">
              <div className="bg-brand-base border border-brand-linen/80 p-3 rounded-full text-brand-primary shadow-soft">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif text-brand-dark">Horarios en vivo</h3>
            </div>

            <div className="space-y-8">
              {/* Lunes a viernes */}
              <div className="relative pl-6 border-l-2 border-brand-linen">
                <span className="text-brand-primary font-medium tracking-wide text-xs mb-2 block">Lunes a viernes</span>
                <ul className="space-y-3 mt-2">
                  {["06:45 AM - 07:45 AM", "08:00 AM - 09:00 AM", "10:00 AM - 11:00 AM"].map((time, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-dark/90 font-light text-sm md:text-base">
                      <Clock className="w-4 h-4 text-brand-primary/70 shrink-0" />
                      {time}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sábados */}
              <div className="relative pl-6 border-l-2 border-brand-linen">
                <span className="text-brand-primary font-medium tracking-wide text-xs mb-2 block">Sábados</span>
                <ul className="space-y-3 mt-2">
                  {["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"].map((time, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-dark/90 font-light text-sm md:text-base">
                      <Clock className="w-4 h-4 text-brand-primary/70 shrink-0" />
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Modalidad e inversión */}
          <div className="space-y-6">

            {/* Tarjeta modalidad */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 border border-brand-linen shadow-soft"
            >
              <h3 className="text-xl font-serif text-brand-dark mb-4 flex items-center gap-2.5">
                <Video className="w-5 h-5 text-brand-primary" />
                Modalidad online
              </h3>
              <p className="text-brand-muted mb-4 font-light text-sm md:text-base leading-relaxed">
                Clases vía <strong>Zoom</strong>. Recibirás el enlace directo al confirmar.
              </p>
              <div className="flex items-start gap-3 mt-4 text-sm text-brand-dark/90 bg-brand-base/80 p-4 rounded-2xl border border-brand-linen/80">
                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p><strong>Espacio seguro y confidencial:</strong> sesiones 100% en vivo para garantizar corrección postural en tiempo real y cuidar la privacidad de cada alumna.</p>
              </div>
            </motion.div>

            {/* Tarjeta de inversión flexible en gradiente terracota */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-3xl p-8 relative overflow-hidden group hover:shadow-md transition-all bg-gradient-to-br from-[#A05255] to-[#8E4A49] text-white shadow-soft"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-serif mb-2 text-[#FAF7F5]">Inversión flexible</h3>
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-2xl md:text-3xl font-bold leading-none text-white">Paquetes a tu medida</span>
                  <span className="text-lg italic text-[#FAF7F5]/90 font-serif">o pago por clase</span>
                </div>
                <p className="text-[#FAF7F5]/85 text-sm mb-6 font-light leading-relaxed">
                  Sin mensualidades forzosas. Paquetes a tu medida o pago por clase adaptados a lo que tú necesitas. Pagas solo lo que usas.
                </p>

                {/* Botón CTA a WhatsApp con área táctil óptima y microinteracción */}
                <a
                  href={getWhatsAppUrl('Horarios')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick('Horarios')}
                  className="w-full text-center bg-white text-brand-primary py-3.5 px-6 rounded-full font-medium hover:bg-brand-base transition-all duration-300 shadow-soft hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] active:scale-95 min-h-[44px] flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Reservar mi clase</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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
