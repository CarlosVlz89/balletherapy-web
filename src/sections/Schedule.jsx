import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Video, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { handleWhatsAppClick, getWhatsAppUrl } from '../lib/analytics';

const Schedule = () => {
  const scheduleWhatsAppUrl = getWhatsAppUrl('Schedule');

  return (
    <section id="reservar" className="pt-20 md:pt-24 pb-24 md:pb-12 px-6 relative scroll-mt-24 overflow-hidden">

      {/* Halos decorativos de atmósfera lino y terracota tenue */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-linen/40 rounded-full blur-[110px] -z-10 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Encabezado editorial de la sección */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-primary font-medium tracking-wide text-xs block">
            Tu espacio, tu tiempo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">
            Encuentra el momento para <span className="italic text-brand-primary">ti</span>.
          </h2>
          <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Agenda dinámica y acompañamiento cercano. Coordinamos cada sesión según el ritmo de tu semana, sin la presión de horarios rígidos.
          </p>
        </div>

        {/* Cuadrícula de franjas y contención informativa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

          {/* Columna izquierda: Franjas horarias orientativas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 border border-brand-linen shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-brand-linen/60 pb-4">
                <div className="bg-brand-base border border-brand-linen/80 p-3 rounded-full text-brand-primary shadow-soft">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-brand-dark">Franjas orientativas</h3>
                  <span className="text-xs text-brand-muted block font-light">Disponibilidad coordinada de mujer a mujer</span>
                </div>
              </div>

              <p className="text-brand-muted font-light text-sm md:text-base leading-relaxed mb-6">
                Para cuidar tu constancia sin saturar tu rutina, trabajamos con bloques de referencia habituales. La hora de cada sesión se coordina directamente contigo por chat.
              </p>

              <div className="space-y-4">
                {/* Franja matutina con cabecera flexible y rango horario no divisible */}
                <div className="bg-brand-base/80 border border-brand-linen/80 rounded-2xl p-5 transition-all duration-300 hover:border-brand-primary/30 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-brand-primary shrink-0" />
                      <h4 className="font-serif font-semibold text-brand-dark text-base md:text-lg flex flex-wrap items-center gap-x-1.5">
                        <span>Bloque matutino:</span>
                        <span className="whitespace-nowrap text-sm sm:text-base font-semibold text-brand-text">
                          07:00 AM - 11:00 AM
                        </span>
                      </h4>
                    </div>
                    <span className="text-[0.65rem] tracking-wider text-brand-primary bg-brand-linen/50 px-2.5 py-1 rounded-full font-medium shrink-0">
                      Lunes a sábado
                    </span>
                  </div>
                  <p className="text-brand-muted text-xs md:text-sm font-light leading-relaxed">
                    Ideal para comenzar el día oxigenando tu cuerpo, alineando la postura y calmando el sistema nervioso antes de tus pendientes.
                  </p>
                </div>

                {/* Franja complementaria vespertina con cabecera flexible */}
                <div className="bg-brand-base/80 border border-brand-linen/80 rounded-2xl p-5 transition-all duration-300 hover:border-brand-primary/30 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-brand-primary shrink-0" />
                      <h4 className="font-serif font-semibold text-brand-dark text-base md:text-lg">
                        Bloque complementario / tardes bajo consulta
                      </h4>
                    </div>
                    <span className="text-[0.65rem] tracking-wider text-brand-muted bg-brand-linen/40 px-2.5 py-1 rounded-full font-medium shrink-0">
                      Bajo consulta
                    </span>
                  </div>
                  <p className="text-brand-muted text-xs md:text-sm font-light leading-relaxed">
                    Horarios vespertinos coordinados de forma personalizada según demanda y cupo disponible, pensados para adaptarse a agendas laborales cambiantes.
                  </p>
                </div>
              </div>
            </div>

            {/* Nota de contención al pie del panel con alineación a la primera línea */}
            <div className="mt-8 pt-4 border-t border-brand-linen/60 flex items-start gap-2 text-left text-xs text-brand-muted font-light">
              <span className="w-2 h-2 rounded-full bg-brand-primary/70 shrink-0 mt-1" />
              <span>Coordinación directa de mujer a mujer vía WhatsApp con confirmación previa.</span>
            </div>
          </motion.div>

          {/* Columna derecha: Modalidad e inversión */}
          <div className="space-y-6 flex flex-col justify-between">

            {/* Tarjeta de contención informativa: Zoom y cupo limitado */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 border border-brand-linen shadow-soft space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-brand-base border border-brand-linen/80 p-2.5 rounded-full text-brand-primary shadow-soft">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-dark">Modalidad en vivo vía Zoom</h3>
                  <span className="text-xs text-brand-muted block font-light">Corrección postural y atención somática</span>
                </div>
              </div>

              <p className="text-brand-muted font-light text-sm md:text-base leading-relaxed">
                Todas las sesiones son <strong>100% en vivo vía Zoom</strong> con <strong>cupo limitado</strong> para asegurar que cada postura sea guiada y cuidada en tiempo real.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 bg-brand-base/80 p-4 rounded-2xl border border-brand-linen/80 text-xs md:text-sm text-brand-dark/90 leading-relaxed">
                  <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p>
                    <strong>Espacio seguro y confidencial:</strong> sesiones privadas sin grabaciones invasivas. Tu proceso se desenvuelve en un ambiente íntimo y libre de juicios.
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-brand-base/80 p-4 rounded-2xl border border-brand-linen/80 text-xs md:text-sm text-brand-dark/90 leading-relaxed">
                  <Users className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p>
                    <strong>Cita directa por chat:</strong> al contar con plazas reducidas, tu lugar se agenda directamente por chat según los espacios disponibles de la semana.
                  </p>
                </div>
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
                <span className="text-[#FAF7F5]/80 text-xs font-medium tracking-wide block mb-1">
                  Inversión flexible
                </span>
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-2xl md:text-3xl font-bold leading-none text-white">
                    Paquetes a tu medida
                  </span>
                  <span className="text-lg italic text-[#FAF7F5]/90 font-serif">
                    o pago por clase
                  </span>
                </div>
                <p className="text-[#FAF7F5]/85 text-xs md:text-sm mb-6 font-light leading-relaxed">
                  Sin mensualidades forzosas ni ataduras. Elige la frecuencia que mejor se adapte a tu vida: pagas únicamente por las clases que tomas.
                </p>

                {/* Botón CTA a WhatsApp con área táctil óptima y microinteracción */}
                <a
                  href={scheduleWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick('Schedule')}
                  className="w-full text-center bg-white text-brand-primary py-3.5 px-6 rounded-full font-medium hover:bg-brand-base transition-all duration-300 shadow-soft hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] active:scale-95 min-h-[44px] flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Consultar horarios disponibles</span>
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
