import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import eliImage from '../assets/eli-about.jpg';

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6 relative overflow-hidden scroll-mt-20">

      {/* Halo decorativo de fondo en tono lino cálido */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-brand-linen/40 rounded-full blur-[100px] -z-10 translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Cabecera superior (ancho completo / encabezado de sección) */}
        <div className="mb-12 md:mb-16 text-center md:text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-primary font-medium tracking-wide text-xs mb-3 block">
              Sobre mí
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
              De la rigidez a la <span className="italic text-brand-primary">libertad</span>.
            </h2>
          </motion.div>
        </div>

        {/* Cuerpo inferior: Grid responsivo (2 columnas en desktop, apilado en móvil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Columna izquierda: Retrato editorial y cita flotante */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group max-w-md mx-auto md:max-w-none w-full"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-[0_8px_30px_rgba(42,36,33,0.06)] border border-brand-linen bg-white">
              <img
                src={eliImage}
                alt="Elizabeth Caballero, fundadora de Balletherapy"
                loading="lazy"
                decoding="async"
                width="448"
                height="560"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent mix-blend-overlay pointer-events-none" />
            </div>

            {/* Tarjeta de cita destacada con acento terracota */}
            <div className="absolute -bottom-8 -right-2 sm:-right-4 md:-right-8 bg-white/95 backdrop-blur-xl p-6 sm:p-8 max-w-[280px] sm:max-w-xs border-l-2 border-brand-primary z-10 rounded-tr-3xl rounded-bl-3xl shadow-[0_8px_30px_rgba(42,36,33,0.08)] border border-brand-linen/60">
              <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary mb-2 sm:mb-3 opacity-90" strokeWidth={1.75} />
              <p className="text-brand-dark font-serif text-base sm:text-lg leading-relaxed italic font-medium">
                "El ballet dejó de ser solo danza para convertirse en mi entrenamiento para la vida."
              </p>
            </div>
          </motion.div>

          {/* Columna derecha: Narrativa de superación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-brand-muted leading-relaxed text-base md:text-lg font-light pt-6 md:pt-0"
          >
            <p>
              Mi camino en el ballet no fue el más fácil. A los 16 años me presenté a las pruebas de una escuela profesional de ballet. No una, sino dos veces. Se necesitaba un cuerpo con condiciones anatómicas y una edad más temprana. Y sí, pese a no ser admitida la primera vez, yo sabía que iba a encontrar la manera de estudiar lo que tanto quería.
            </p>
            <p>
              Eso sí, al principio el cuerpo me pasó factura. Tuve <strong className="text-brand-dark font-medium">dos caídas fuertes y una hernia discal</strong>. Fue un momento duro, pero también un antes y un después. Me obligó a frenar y a escucharme. Comencé a trabajar desde la calma, más analítica y honrando a mi cuerpo. El resultado, una evolución en mi técnica, en mi cuerpo y en mi vida.
            </p>

            {/* Caja destacada con líneas finas */}
            <div className="bg-white/80 backdrop-blur-sm p-6 border-l-2 border-brand-primary rounded-r-xl border border-brand-linen/60 shadow-soft">
              <p className="italic text-brand-dark font-normal">
                Ese fue mi despertar. Entendí que mi dolor de espalda no era solo físico; era la somatización de mis emociones y pensamientos.
              </p>
            </div>

            <p>
              <strong className="text-brand-dark font-medium">Balletherapy nace de esa sanación</strong>: un método para que tú también transformes tu dolor en equilibrio.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;