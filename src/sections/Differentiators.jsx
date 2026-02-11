import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, Sparkles, XCircle } from 'lucide-react';

const pillars = [
  {
    title: "Journaling Terapéutico",
    icon: <BookOpen className="w-6 h-6 text-white" />,
    description: "No es solo escribir. Es procesar el estrés.",
    details: [
      "Separas 'lo que quieres' de 'lo que esperan de ti'.",
      "Sacas el ruido mental al papel antes de moverte."
    ],
    color: "bg-brand-primary"
  },
  {
    title: "Movimiento Consciente",
    icon: <Activity className="w-6 h-6 text-white" />,
    description: "No buscamos la pose perfecta, sino sentir tu centro.",
    details: [
      "Liberas tensión donde acumulas emociones.",
      "Honramos tu columna: la relajamos y oxigenamos."
    ],
    color: "bg-brand-medium"
  },
  {
    title: "Meditación Aplicada",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    description: "No son abstracciones. Son herramientas para tu realidad.",
    details: [
      "Aprendes a poner límites energéticos en el trabajo.",
      "Encuentras calma sin negar tus responsabilidades."
    ],
    color: "bg-brand-light"
  }
];

const Differentiators = () => {
  return (
    <section id="metodo" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-brand-medium font-bold tracking-wider uppercase text-sm mb-4 block">
            La Diferencia Estructural
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">
            Más que ejercicio, una <span className="italic text-brand-medium">reconciliación</span>.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            A diferencia del Yoga o Pilates tradicionales, aquí no buscamos flexibilidad extrema ni fuerza bruta.
          </p>
        </div>

        {/* Grid de Tarjetas de Vidrio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 relative"
            >
              {/* Icono Flotante */}
              <div className={`absolute -top-6 left-8 ${pillar.color} w-12 h-12 rounded-xl shadow-lg flex items-center justify-center`}>
                {pillar.icon}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-serif text-brand-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 font-medium mb-6">
                  {pillar.description}
                </p>
                
                <ul className="space-y-4">
                  {pillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección "No es para ti si..." (Estilo Vidrio Oscuro/Saturado) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-brand-primary/90 backdrop-blur-md rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20"
        >
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl font-serif text-brand-base">Tu espacio seguro</h3>
            <p className="text-brand-base/90 font-light">
              Aquí no hay espejos que reflejen juicios, ni correcciones públicas que humillen. Es un lugar para mujeres que entienden tu carga.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[200px]">
            <div className="flex items-center gap-2 text-brand-base">
              <XCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Sin espejos</span>
            </div>
            <div className="flex items-center gap-2 text-brand-base">
              <XCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Sin jerarquías</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Differentiators;