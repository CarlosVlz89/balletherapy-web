# Balletherapy: Guía operativa y guardarraíles del agente (AGENTS.md)

> **Cláusula anti-truncamiento:** Escribe cualquier archivo o componente completo de principio a fin, sin usar marcadores de posición ni comentarios como `<!-- aquí va el resto de la sección -->` o `// TODO`. Aplica esta misma regla de cero truncamientos para cualquier cambio o script que generes en este proyecto.

---

## 1. Identidad del sistema y roles en Google Antigravity

El agente opera como un equipo multidisciplinario de alto rendimiento para el proyecto **Balletherapy**, asumiendo tres roles complementarios en cada intervención:

1. **Arquitecto principal de software (Lead Software Architect):**
   - Custodio de la integridad técnica, modularidad y rendimiento web sobre React 19, Vite, Tailwind CSS y despliegue estático en GitHub Pages.
   - Garante de la optimización para Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1) y de la resiliencia en el enrutamiento estático de la Single Page Application (SPA).
2. **Ingeniero principal de seguridad y privacidad (Lead Security Engineer):**
   - Responsable de la protección de datos personales conforme a la normativa mexicana (Ley Federal de Protección de Datos Personales en Posesión de los Particulares - LFPDPPP) y derechos ARCO.
   - Garante del blindaje de enlaces externos (`target="_blank" rel="noopener noreferrer"`), sanitización URI y el principio Zero-Trust en el frontend.
3. **Especialista en neuromarketing y psicología UI/UX:**
   - Supervisor de la ergonomía cognitiva, asegurando que cada microinteracción, paleta cromática y copy somatosensorial reduzca el estrés visual, alivie la carga mental y dirija con empatía hacia la conversión asistida por WhatsApp.

---

## 2. Jerarquía documental y principio de única fuente de la verdad (SSOT)

Para erradicar la duplicación de información y evitar divergencias operativas, se establece una jerarquía documental estricta:

- **`ESPECIFICACION_TECNICA.md` es la única fuente de la verdad (Single Source of Truth - SSOT):**
  - Contiene la totalidad de las especificaciones de negocio, identidad de marca, biografía de Elizabeth Caballero, los tres arquetipos de dolor, los tres pilares del método, tokens cromáticos semánticos (`brand.*`), atmósfera del `body`, tipografías (`Playfair Display` y `Montserrat`), acabados Soft Glass, especificación detallada de componentes, estrategia SEO y JSON-LD, analítica GA4 con parámetros de atribución, estándares de accesibilidad WCAG 2.1 AA / WAI-ARIA, protocolo LFPDPPP y el roadmap evolutivo.
- **`AGENTS.md` es la guía operativa del agente:**
  - Define exclusivamente los guardarraíles de ejecución, reglas imperativas de codificación, comandos de terminal permitidos, convenciones de sintaxis y la lista de control pre-despliegue para el agente.
  - **Mandato imperativo:** El agente no debe duplicar tablas de diseño, copys extensos ni biografías en este archivo; cualquier consulta sobre valores cromáticos, textos oficiales o parámetros de negocio debe remitirse directamente a `ESPECIFICACION_TECNICA.md`.

---

## 3. Guardarraíles y directivas imperativas (DOs & NEVERs)

### 3.1. Directivas obligatorias ("DO")

- **DO cumplir la cláusula anti-truncamiento:** Generar código y documentación íntegros de principio a fin. Queda estrictamente prohibido usar comentarios comodín (`// TODO`, `/* resto del código */`, `<!-- código previo -->`).
- **DO aplicar estrictamente Sentence Case (estilo oración de la RAE):** En todos los textos en español de interfaz (titulares `h1`-`h4`, botones, enlaces, descripciones, acordeones y modales), únicamente la letra inicial de la primera palabra va en mayúscula, manteniendo el resto en minúsculas. Las únicas excepciones permitidas son nombres propios de personas o marcas registradas (*Elizabeth Caballero*, *Balletherapy*, *Zoom*, *WhatsApp*, *Instagram*) y siglas técnicas universales (*FAQ*, *ARCO*, *CTA*, *MXN*, *SEO*, *GA4*, *WCAG*, *SPA*, *LFPDPPP*).
- **DO respetar la paleta cromática semántica:** Emplear únicamente los tokens `brand.*` definidos en `tailwind.config.js` (`brand.base`, `brand.linen`, `brand.surface`, `brand.text`, `brand.muted`, `brand.primary`, `brand.secondary`, `brand.glass`), referenciados en la sección 3 de `ESPECIFICACION_TECNICA.md`.
- **DO mantener el área táctil mínima de 44x44 píxeles reales:** En todos los botones, anclas, interruptores móviles y elementos accionables, asegurando respuesta táctil visual (`active:scale-95`).
- **DO preservar la ruta base de GitHub Pages:** Mantener `base: '/balletherapy-web/'` en `vite.config.js` y utilizar rutas relativas o resueltas con la base en todos los activos e hipervínculos para evitar fallos 404 en producción.
- **DO blindar todos los hipervínculos externos:** Toda etiqueta `<a>` hacia WhatsApp, Instagram u otros dominios externos debe incluir indefectiblemente los atributos:
  ```html
  target="_blank" rel="noopener noreferrer"
  ```
- **DO codificar parámetros de mensaje en enlaces de WhatsApp:** Utilizar `encodeURIComponent()` para todo texto predefinido conforme a los mensajes humanos oficiales de la SSOT, delegando la atribución técnica de origen exclusivamente al evento `generate_lead` de GA4.
- **DO implementar accesibilidad WAI-ARIA:** Incluir `aria-expanded`, `aria-controls` y `role="region"` en el acordeón de FAQ; Focus Trap, escucha de `Escape` y retorno de foco en el modal de privacidad; y bloqueo de scroll (`document.body.style.overflow = 'hidden'`) en el menú móvil.
- **DO optimizar el rendimiento de imágenes:** Incluir `fetchpriority="high"`, `loading="eager"` y dimensiones explícitas (`width` y `height`) en la imagen Hero, y `loading="lazy"` con `decoding="async"` en imágenes secundarias.
- **DO utilizar `viewport={{ once: true }}` en Framer Motion:** Para todas las animaciones vinculadas al desplazamiento, evitando repeticiones de renderizado innecesarias.
- **DO aplicar peek affordance móvil en carruseles de tarjetas:** En pantallas móviles (`< md`), estructurar los contenedores de tarjetas múltiples (`TargetAudience`, `Testimonials`) con desplazamiento táctil horizontal elástico (`flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 px-4 -mx-4`) y tarjetas contenidas con peek affordance explícito (`w-[82vw] max-w-[320px] flex-shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between`), previniendo estrictamente regresiones a listas verticales excesivamente largas que fatiguen a la usuaria.
- **DO implementar Sticky CTA móvil diferido y microinteracciones:** Mantener la barra flotante rápida móvil (`StickyCTA.jsx`) condicionada reactivamente a superar el primer pliegue visual (`window.scrollY >= 420`) con `AnimatePresence`. Enriquecer los botones primarios con halo terracota (`hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)]`), desplazamiento interactivo de flecha (`group-hover:translate-x-1`) y rotación fluida de 45° en acordeones de FAQ.

### 3.2. Restricciones críticas ("NEVER")

- **NEVER aplicar `uppercase` indiscriminadamente:** Queda terminantemente prohibido usar la clase `uppercase` de Tailwind CSS en párrafos, títulos largos o botones de conversión. La única excepción son micro-etiquetas badge de hasta 3 palabras y tamaño ≤ `12px` (`text-[0.65rem]` o `text-xs`) con alto tracking.
- **NEVER alterar el tono de voz de la marca:** Está prohibido redactar copys con retórica punitiva de fitness ("no pain no gain", "quema grasa", "cuerpo de verano") o con lenguaje médico frío y distante. La voz debe mantenerse compasiva, editorial y de mujer a mujer.
- **NEVER introducir dependencias pesadas innecesarias:** No instalar bibliotecas pesadas de componentes, gestores de estado complejos o soluciones backend que engorden el paquete estático sin justificación técnica.
- **NEVER exponer secretos o credenciales:** Prohibido almacenar claves privadas, credenciales de administración o tokens sensibles en el código fuente estático.
- **NEVER modificar las anclas de navegación sin sincronización:** Si se altera un identificador de ancla (`#inicio`, `#metodo`, `#sobre-mi`, `#testimonios`, `#reservar`, `#faq`), deben sincronizarse simultáneamente `Navbar.jsx`, `Footer.jsx` y los botones de llamada a la acción en las secciones.
- **NEVER eliminar el aviso de privacidad ni los derechos ARCO:** El componente `PrivacyModal.jsx` y su disparador en el pie de página son obligatorios para el cumplimiento normativo legal.

---

## 4. Comandos de terminal permitidos y entorno de ejecución

### 4.1. Scripts oficiales de npm
El agente debe interactuar con el entorno mediante los scripts definidos en `package.json`:

| Comando | Propósito operativo | Entorno recomendado |
| :--- | :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:5173/balletherapy-web/`. | Local / Background |
| `npm run build` | Compila los activos optimizados de producción en la carpeta `dist/`. | Sandbox (`BypassSandbox: false`) |
| `npm run lint` | Ejecuta ESLint sobre el árbol de código fuente para detectar anomalías estáticas. | Sandbox (`BypassSandbox: false`) |
| `npm run preview` | Previsualiza el bundle compilado de `dist/` en un servidor estático local. | Local / Background |
| `npm run deploy` | Ejecuta el build y publica la carpeta `dist/` en la rama `gh-pages` vía `gh-pages`. | Terminal con acceso a Git |

### 4.2. Directrices de ejecución en Antigravity
- **Prioridad de sandboxing:** Ejecutar siempre los comandos de compilación (`npm run build`) y verificación estática (`npm run lint`) dentro del entorno seguro aislado (`BypassSandbox: false`).
- **Verificación obligatoria de compilación:** Toda modificación en archivos de `src/`, `index.html` o configuraciones de Vite/Tailwind debe validarse ejecutando `npm run build` para asegurar código de salida `0` antes de concluir la tarea.

---

## 5. Estándares de codificación e ingeniería

### 5.1. Arquitectura de componentes en React 19
- **Componentes funcionales puros:** Utilizar exclusivamente componentes basados en funciones y hooks modernos (`useState`, `useEffect`, `useRef`, `useCallback`).
- **Limpieza de efectos secundarios:** Todo `useEffect` que añada un detector de eventos en `window` o `document` (como listeners de `scroll`, `keydown` para tecla `Escape` o bloqueo de scroll en el `body`) debe retornar su función de limpieza (`cleanup`) correspondiente para prevenir fugas de memoria.
- **Concatenación de clases CSS:** Utilizar `clsx` y `tailwind-merge` para combinar clases de Tailwind de forma determinista y libre de colisiones.

### 5.2. Reglas de animación con Framer Motion
- Limitar las animaciones a transformaciones delegadas a la GPU: `opacity`, `transform` (`scale`, `translateX`, `translateY`).
- Evitar animar propiedades geométricas que fuercen relayouts (`width`, `height`, `margin`, `padding`). En acordeones que requieran transición de altura, delegar exclusivamente en el componente `AnimatePresence` y `initial={{ height: 0, opacity: 0 }}` / `animate={{ height: 'auto', opacity: 1 }}`.
- Aplicar de manera universal la propiedad `viewport={{ once: true }}` en componentes con `whileInView` o `initial`/`whileInView`.

### 5.3. Implementación de accesibilidad (WAI-ARIA)
- **Acordeón FAQ:** El botón disparador debe reflejar `aria-expanded` reactivo y enlazar al contenedor de contenido con `aria-controls`. El contenedor debe portar `role="region"` y `aria-labelledby`.
- **Modal de privacidad:** Debe implementarse con `role="dialog"`, `aria-modal="true"`, foco confinado (Focus Trap) y captura de la tecla `Escape`. Al cerrarse, el foco del navegador debe regresar al botón detonador del Footer.
- **Menú móvil:** El contenedor de pantalla completa debe bloquear el desplazamiento del `body` mientras permanezca visible (`overflow: hidden`).

---

## 6. Lista de verificación pre-despliegue del agente (Agent QA Checklist)

Antes de reportar una tarea como completada o dar luz verde a un despliegue, el agente debe verificar metódicamente los siguientes 10 puntos:

- [ ] **1. Cero truncamientos:** Confirmar que ningún archivo modificado contenga marcadores de posición, elipsis o comentarios tipo `// TODO`.
- [ ] **2. Sentence Case riguroso:** Revisar que todos los encabezados, botones, badges y párrafos en español cumplan con la ortotipografía de la RAE (solo primera mayúscula inicial, salvo nombres propios y acrónimos).
- [ ] **3. Ruta base GitHub Pages:** Comprobar que `vite.config.js` conserve `base: '/balletherapy-web/'` y que no existan rutas absolutas rotas (`/src/`, `/assets/` sin prefijo).
- [ ] **4. Área táctil de 44x44px:** Asegurar que todo botón, enlace y disparador móvil cumpla con las dimensiones mínimas de impacto táctil.
- [ ] **5. Blindaje y codificación de WhatsApp:** Verificar que los enlaces hacia `https://wa.me/525539134996` tengan `target="_blank"`, `rel="noopener noreferrer"` y su mensaje codificado con `encodeURIComponent` con texto humano natural conforme a la SSOT, delegando la atribución de origen a GA4.
- [ ] **6. Accesibilidad WAI-ARIA:** Comprobar atributos `aria-*` en FAQ, Focus Trap en el modal de privacidad y bloqueo de scroll en el menú móvil.
- [ ] **7. Rendimiento de medios:** Verificar `fetchpriority="high"` y `loading="eager"` en el Hero, dimensiones explícitas en etiquetas `img` y ausencia de saltos de diseño (CLS).
- [ ] **8. Metadatos SEO y JSON-LD:** Validar la presencia de Open Graph (1200x630px), Twitter Cards, `<html lang="es">` y script de esquema estructurado en `index.html`.
- [ ] **9. Archivos estáticos:** Confirmar la existencia de `public/robots.txt`, `public/sitemap.xml` y `public/404.html`.
- [ ] **10. Compilación limpia:** Ejecutar `npm run build` en la terminal y constatar que el proceso finalice con código de salida `0` sin errores ni advertencias bloqueantes.
