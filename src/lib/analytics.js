/**
 * Utilidades de analítica web (GA4) y generación de enlaces de WhatsApp para Balletherapy
 */

export const trackWhatsAppLead = (sourceSection) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: sourceSection,
      method: 'whatsapp',
      value: 1,
    });
  }
};

// Alias exportado para compatibilidad semántica con manejadores de eventos
export const handleWhatsAppClick = trackWhatsAppLead;

const WHATSAPP_PHONE = '525539134996';

const WHATSAPP_MESSAGES = {
  Hero: 'Hola! Quiero agendar mi clase de prueba gratis',
  Horarios: 'Hola! Me gustaría inscribirme a las clases matutinas',
  FAQ: 'Hola! Tengo una duda sobre las clases de Balletherapy',
  Navbar: 'Hola! Me gustaría agendar mi clase de prueba',
  StickyCTA: 'Hola! Quiero agendar mi clase de prueba gratis',
};

export const getWhatsAppUrl = (sourceSection = 'Hero') => {
  const message = WHATSAPP_MESSAGES[sourceSection] || WHATSAPP_MESSAGES.Hero;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};
