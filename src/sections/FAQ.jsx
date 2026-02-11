import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito saber ballet o ser flexible?",
    answer: "¡Para nada! Balletherapy no es danza técnica; es terapia de movimiento. No buscamos que levantes la pierna hasta la oreja, sino que reconectes con tu cuerpo."
  },
  {
    question: "¿Qué necesito para la clase?",
    answer: "Ropa cómoda, un espacio pequeño y una silla o superficie estable para usar como barra. Puedes hacerlo descalza o con calcetines."
  },
  {
    question: "¿Es seguro si tengo lesiones de espalda?",
    answer: "El enfoque es de bajo impacto. Sin embargo, si tienes una lesión aguda reciente, consulta a tu médico. En clase, siempre damos variaciones suaves."
  },
  {
    question: "¿Cómo funcionan los pagos?",
    answer: "Pagas por clase individual. Sin mensualidades forzosas. Una vez realizado el pago, recibes el link de Zoom."
  },
  {
    question: "¿Qué pasa si no puedo conectarme en vivo?",
    answer: "Si te inscribes pero no puedes llegar, te enviamos la grabación de la clase disponible por 24 horas."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 relative scroll-mt-20">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary mb-4 border border-brand-primary/20">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Tiras de vidrio individuales
              className="glass-panel overflow-hidden transition-all hover:border-brand-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-brand-primary' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-brand-base text-brand-primary'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed font-light border-t border-brand-primary/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 font-light">¿Tienes alguna otra pregunta?</p>
          <a 
            href="https://wa.me/525539134996" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-primary font-medium hover:text-brand-medium transition-colors border-b border-brand-primary/30 hover:border-brand-medium"
          >
            Escríbeme por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;