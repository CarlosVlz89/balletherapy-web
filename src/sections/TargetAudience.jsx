import React from 'react';
import { motion } from 'framer-motion';
import { BatteryWarning, Smartphone, Clock, CheckCircle2 } from 'lucide-react';

const personas = [
  {
    title: "La Profesional en Burnout",
    icon: <BatteryWarning className="w-8 h-8 text-brand-primary" />,
    description: "Tu cuerpo es solo un 'vehículo de productividad' que empieza a fallar.",
    symptoms: [
      "Dolor crónico de espalda y cuello",
      "Insomnio paradójico",
      "Vacaciones solo para dormir"
    ]
  },
  {
    title: "La Joven Preventiva",
    icon: <Smartphone className="w-8 h-8 text-brand-medium" />,
    description: "Intentas mantener el equilibrio, pero la carga laboral siempre gana.",
    symptoms: [
      "Ansiedad y fatiga visual",
      "Comes frente a la computadora",
      "'Tiempo para mí' es scrollear"
    ]
  },
  {
    title: "La Madre Multitarea",
    icon: <Clock className="w-8 h-8 text-brand-primary" />,
    description: "Cuidas de todos menos de ti misma. Sientes que debes poder con todo.",
    symptoms: [
      "Fatiga crónica y culpa",
      "Aislamiento selectivo",
      "Vives en piloto automático"
    ]
  }
];

const TargetAudience = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo (Blobs) para resaltar el vidrio */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-medium/10 rounded-full blur-3xl translate-x-1/4"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-primary"
          >
            ¿Te sientes identificada?
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Balletherapy es un refugio para mujeres reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              // AQUÍ APLICAMOS EL EFECTO DE VIDRIO LÍQUIDO
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="bg-white/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm">
                {persona.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left">
                {persona.title}
              </h3>
              
              <p className="text-gray-600 mb-6 italic text-sm text-center md:text-left">
                "{persona.description}"
              </p>
              
              <ul className="space-y-3 mt-auto">
                {persona.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-medium shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;