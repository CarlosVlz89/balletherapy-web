import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, Sparkles, XCircle } from 'lucide-react';

const pillars = [
  {
    title: "Journaling terapéutico",
    icon: <BookOpen className="w-5 h-5 text-white" strokeWidth={1.75} />,
    description: "No es solo escribir. Es procesar el estrés.",
    details: [
      "Escribir a mano nos quita el peso de la angustia o lo que duele.",
      "Observamos el ruido mental lo aterrizamos y llegamos a la calma con más claridad."
    ],
    color: "bg-brand-primary",
    cardClass: "bg-white/85 md:translate-y-0"
  },
  {
    title: "Barre somático",
    icon: <Activity className="w-5 h-5 text-white" strokeWidth={1.75} />,
    description: "No buscamos la pose perfecta, sino sentir tu centro.",
    details: [
      "Liberas tensión donde acumulas emociones.",
      "Honramos tu columna: la relajamos y oxigenamos."
    ],
    color: "bg-brand-secondary",
    cardClass: "bg-white/95 md:-translate-y-3 shadow-glass border-brand-primary/30"
  },
  {
    title: "Meditación aplicada",
    icon: <Sparkles className="w-5 h-5 text-white" strokeWidth={1.75} />,
    description: "No son abstracciones. Son herramientas para tu realidad.",
    details: [
      "Aprendes a poner límites energéticos en el trabajo.",
      "Encuentras calma sin negar tus responsabilidades."
    ],
    color: "bg-[#7A3E40]",
    cardClass: "bg-white/85 md:translate-y-0"
  }
];

const Differentiators = () => {
  return (
    <section id="metodo" className="py-24 px-6 relative overflow-hidden scroll-mt-20">

      {/* Halo decorativo tenue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-linen/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-primary font-medium tracking-wide text-xs mb-3 block">
            La diferencia estructural
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
            Más que ejercicio, un <span className="italic text-brand-primary">hábito</span> que te sostiene.
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed font-light mb-10">
            A diferencia del Yoga o Pilates (igualmente valiosos), aquí no buscamos flexibilidad extrema ni fuerza bruta.
          </p>

          {/* Bloque Manifiesto Editorial Pedagógico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-brand-linen shadow-soft border-l-4 border-l-brand-primary max-w-3xl mx-auto space-y-3"
          >
            <p className="text-brand-dark text-base sm:text-lg leading-relaxed font-light">
              Atrapadas en la mente, el cuerpo paga el precio: estrés y emociones guardadas. El ballet clásico guarda un secreto: <span className="italic font-medium text-brand-primary">una columna alineada es equilibrio</span>.
            </p>
            <p className="text-brand-dark text-base sm:text-lg leading-relaxed font-light">
              No se trata de ser bailarina, sino de habitar tu cuerpo con fuerza y serenidad. Balletherapy es la fusión para devolverte el equilibrio en medio del caos.
            </p>
          </motion.div>
        </div>

        {/* Grid de Tarjetas con jerarquía rítmica y líneas finas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.18, duration: 0.6 }}
              viewport={{ once: true }}
              className={`backdrop-blur-md rounded-3xl p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 relative border border-brand-linen shadow-soft hover:shadow-md flex flex-col ${pillar.cardClass}`}
            >
              {/* Icono flotante con elevación suave */}
              <div className={`absolute -top-5 left-8 ${pillar.color} w-11 h-11 rounded-xl shadow-soft flex items-center justify-center`}>
                {pillar.icon}
              </div>

              <div className="mt-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-brand-dark mb-3">
                  {pillar.title}
                </h3>
                <p className="text-brand-dark/90 font-medium mb-6 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="space-y-4 border-t border-brand-linen/60 pt-6 mt-auto">
                  {pillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-brand-muted leading-relaxed font-light">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary/60 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección "Tu espacio seguro" en tono espresso profundo de alta sofisticación */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 bg-brand-dark rounded-3xl p-6 sm:p-8 md:p-12 text-[#FAF7F5] shadow-[0_8px_30px_rgba(42,36,33,0.08)] flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-dark"
        >
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-serif text-[#FAF7F5]">Tu espacio seguro</h3>
            <p className="text-[#FAF7F5]/80 font-light leading-relaxed text-sm md:text-base">
              Aquí no hay juicios ni la obligación de hacer cada movimiento perfecto. Es un lugar para mujeres que entienden tu carga.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[200px] w-full md:w-auto justify-center">
            <div className="flex items-center gap-2.5 text-[#FAF7F5]/90">
              <XCircle className="w-5 h-5 text-brand-linen shrink-0" strokeWidth={1.75} />
              <span className="text-sm font-medium">Sin comparaciones</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#FAF7F5]/90">
              <XCircle className="w-5 h-5 text-brand-linen shrink-0" strokeWidth={1.75} />
              <span className="text-sm font-medium">Sin prisa</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Differentiators;