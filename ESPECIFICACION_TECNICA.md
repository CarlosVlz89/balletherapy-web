# Especificación técnica, arquitectura y control de calidad (QA): Balletherapie

Documento maestro integral de arquitectura de software, especificación visual editorial (Warm Editorial + Soft Glass), principios de neuromarketing y psicología cognitiva, modelo operativo y comercial asistido por WhatsApp, protocolos de seguridad y privacidad ARCO, accesibilidad técnica (WCAG 2.1 AA / WAI-ARIA), estrategia SEO, analítica de conversión, optimización de rendimiento web (Core Web Vitals) y matriz de control de calidad.

Este documento constituye la **única fuente de la verdad (Single Source of Truth - SSOT)** para el producto y la plataforma web de Balletherapie.

---

## 1. Resumen ejecutivo y parámetros de negocio

Balletherapie es un método integral y santuario de bienestar concebido para la mujer contemporánea, fundado y dirigido por Elizabeth Caballero. El producto combina una landing page interactiva de alta conversión —diseñada para aliviar la carga mental, el sedentarismo laboral y el agotamiento crónico (burnout)— con un canal de atención personalizada y reserva asistida de mujer a mujer mediante WhatsApp, ofreciendo clases virtuales 100% en vivo por Zoom con atención somática personalizada y corrección postural en tiempo real.

| Parámetro del proyecto | Especificación detallada |
| :--- | :--- |
| **Nombre comercial** | Balletherapie (identidad visual editorial: Balletherapie Wellness Studio) |
| **Fundadora y directora** | Elizabeth Caballero ("Eli"), bailarina profesional y terapeuta de movimiento |
| **Propuesta de valor** | Fusión sinérgica de barre somático, journaling terapéutico y meditación aplicada para descomprimir la columna vertebral, regular el sistema nervioso y sanar el agotamiento crónico (burnout) sin estándares punitivos ni dolor. |
| **Lema principal (Hero)** | Burnout que pesa • Barre que restaura • Movimiento que serena |
| **Titular institucional** | Horas sentada. Días iguales. Balletherapie. |
| **Subtítulo axial** | El espacio donde el barre activa, el journaling libera y tu sistema nervioso se regula. |
| **Esquema de precios** | Inversión flexible: clase de prueba gratuita de bienvenida, paquetes a tu medida (combos) o pago por clase individual. Sin mensualidades forzosas ("Pagas solo lo que usas"). |
| **Público objetivo** | Mujeres de 24 a 55 años estructuradas en 3 arquetipos clave: La profesional en burnout, La joven preventiva y La madre multitarea. |
| **Pilares del método** | 1. Journaling terapéutico manuscrito (procesar el estrés y ruido mental)<br>2. Barre somático (alineación y descompresión lumbar sin impacto articular)<br>3. Meditación aplicada (regulación nerviosa y límites energéticos) |
| **Canales oficiales** | **WhatsApp oficial:** `+52 55 3913 4996` (enlace directo: `https://wa.me/525539134996`)<br>**Correo institucional:** `balletherapystudio@gmail.com`<br>**Instagram oficial:** `@balletherapy` (`https://instagram.com/balletherapy`) |
| **Plataforma y despliegue** | Single Page Application (SPA) construida en React 19 + Vite + Tailwind CSS, alojada en Firebase Hosting bajo el proyecto `balletherapie-dev` (`https://balletherapie-dev.web.app`) con base path `/`. |

---

## 2. Identidad de marca, arquetipos y narrativa editorial

### 2.1. Propósito y valores del método
A diferencia del fitness tradicional, el ballet clásico convencional o las disciplinas de acondicionamiento físico de alto impacto, Balletherapie no persigue la flexibilidad extrema, la hipertrofia ni la pose perfecta bajo estándares punitivos. Su propósito esencial es la **reconciliación somatosensorial integral**: devolver el equilibrio biomecánico y emocional a través de la liberación de tensiones en la columna vertebral, la regulación del sistema nervioso autónomo y la reconexión consciente con el cuerpo.

### 2.2. Historia de resiliencia y voz de la fundadora
La marca está personificada y dirigida por **Elizabeth Caballero ("Eli")**, bailarina y terapeuta de movimiento. Su narrativa biográfica define el tono de comunicación:
- **Resiliencia y legitimidad orgánica:** A los 16 años enfrentó el rechazo en pruebas de ballet profesional debido a no cumplir con cánones anatómicos tradicionales ni la edad temprana exigida. Posteriormente, sufrió dos caídas graves y una hernia discal que detuvieron su práctica dancística.
- **Epifanía de sanación:** Este punto de quiebre transformó su relación con el movimiento. Comprendió que su dolor crónico de espalda no era un mero fallo mecánico, sino la somatización acumulada de exigencias emocionales y mentales. De esta experiencia nació Balletherapie.
- **Tono de voz institucional:** Cálido, compasivo, íntimo, sereno, no intimidante y editorialmente sofisticado. Trata a la usuaria de mujer a mujer, desmantelando la culpa por la falta de tiempo o la falta de flexibilidad. Nunca emplea consignas agresivas tipo "no pain no gain" ni elitismo técnico.

### 2.3. Arquetipos de usuaria y mapeo de síntomas
La segmentación se estructura en tres perfiles representativos para evitar la sobrecarga de opciones (Ley de Hick) y maximizar la autoidentificación empática. En la interfaz pública de usuaria, se elimina la nomenclatura técnica de "Arquetipo 01/02/03" en favor de una presentación cálida y cercana, identificando cada perfil mediante su badge de ícono circular, el titular descriptivo en Playfair Display y un micro-tag temático de apoyo:

1. **La profesional en burnout:**
   - *Micro-tag temático:* "Tensión y sobrecarga".
   - *Metáfora cognitiva:* "Tu cuerpo es solo un 'vehículo de productividad' que empieza a fallar."
   - *Síntomas físicos y emocionales:* Dolor crónico de espalda alta y cuello, insomnio paradójico (cansancio extremo pero mente hiperactiva en la cama), fines de semana y vacaciones utilizados exclusivamente para intentar recuperarse.
   - *Identidad cromática en UI:* Fondo con tinte terracota pálido `bg-[#FAF3F2]/90 backdrop-blur-xl`, borde perimetral `border-[#E8D6D5]`, badge de ícono `bg-brand-primary/10 text-brand-primary`.
2. **La joven preventiva:**
   - *Micro-tag temático:* "Sedentarismo digital".
   - *Metáfora cognitiva:* "Intentas mantener el equilibrio, pero la carga laboral siempre gana."
   - *Síntomas físicos y emocionales:* Ansiedad y fatiga visual por exposición a pantallas, comidas rápidas frente a la computadora, el concepto de "tiempo para mí" se reduce a scrollear redes sociales sin descanso real.
   - *Identidad cromática en UI:* Fondo con tinte lino neutro arena `bg-[#F6F2EE]/90 backdrop-blur-xl`, borde perimetral `border-[#E5DDD6]`, badge de ícono `bg-[#685D57]/10 text-[#685D57]`.
3. **La madre multitarea:**
   - *Micro-tag temático:* "Autoexigencia diaria".
   - *Metáfora cognitiva:* "Cuidas de todos menos de ti misma. Sientes que debes poder con todo."
   - *Síntomas físicos y emocionales:* Fatiga crónica acompañada de culpa por tomar pausas personales, aislamiento selectivo, sensación de vivir en piloto automático cumpliendo exigencias ajenas.
   - *Identidad cromática en UI:* Fondo con tinte borgoña suave `bg-[#F7F2F3]/90 backdrop-blur-xl`, borde perimetral `border-[#E6D9DC]`, badge de ícono `bg-brand-secondary/10 text-brand-secondary`.

### 2.4. Los tres pilares metodológicos
1. **Journaling terapéutico:** Descarga manuscrita y procesamiento cognitivo del estrés previo o posterior al movimiento, aterrizando el ruido mental en el papel para clarificar las emociones.
2. **Barre somático:** Trabajo postural de bajo impacto inspirado en la barra de ballet clásico que descomprime, oxigena y reequilibra la columna vertebral respetando la anatomía individual.
3. **Meditación aplicada:** Herramientas concretas de regulación del sistema nervioso y establecimiento de límites energéticos para la vida laboral y personal.

### 2.5. Espacio seguro ("Tu espacio seguro")
Bloque de contención emocional en carbón profundo (`#2A2421`) que neutraliza los temores iniciales de la mujer primeriza explicitando dos garantías fundamentales:
- **Sin comparaciones:** No existen espejos acusadores ni miradas evaluativas; cada cuerpo trabaja en su rango anatómico seguro.
- **Sin prisa:** El progreso se mide por descompresión y serenidad interna, no por repeticiones forzadas ni velocidad.

### 2.6. Lemas y declaraciones institucionales oficiales
- *"Burnout que pesa • Barre que restaura • Movimiento que serena"*
- *"Horas sentada. Días iguales. Balletherapie."*
- *"El espacio donde el barre activa, el journaling libera y tu sistema nervioso se regula."*
- *"Equilibra tu interior, fortalece tu exterior."*
- *"De la rigidez a la libertad."*
- *"Más que ejercicio, un hábito que te sostiene."*
- *"Tu espacio, tu tiempo."*
- *"Tu pausa en medio del ruido."*

---

## 3. Sistema de diseño visual: "Warm Editorial & Soft Glass"

La dirección estética fusiona la sobriedad reflexiva de las publicaciones editoriales de arte con la ligereza de paneles translúcidos cálidos (Soft Glass), concebidos para reducir el cortisol visual y transmitir calma inmediata.

### 3.1. Tokens cromáticos semánticos
Configurados en `tailwind.config.js` bajo el espacio de nombres `brand`:

| Token de Tailwind | Tono conceptual | Código Hexadecimal | Formato RGB | Propósito y aplicación en interfaz |
| :--- | :--- | :--- | :--- | :--- |
| `brand.base` | Alabastro / Lino limpio | `#FAF7F5` | `rgb(250, 247, 245)` | Fondo base general del lienzo, libre de saturaciones frías o rosados estridentes. |
| `brand.linen` / `brand.light` | Lino neutro sutil | `#EADFD9` | `rgb(234, 223, 217)` | Bordes sutiles de paneles Soft Glass, divisores finos y marcos arquitectónicos. |
| `brand.surface` | Blanco puro | `#FFFFFF` | `rgb(255, 255, 255)` | Tarjetas internas, superficies de modales y contenedores de lectura destacados. |
| `brand.text` / `brand.dark` | Carbón / Espresso profundo | `#2A2421` | `rgb(42, 36, 33)` | Tipografía de titulares y lectura principal, garantizando contraste WCAG AA. |
| `brand.muted` | Taupé / Muted cálido | `#685D57` | `rgb(104, 93, 87)` | Subtítulos, textos explicativos secundarios y detalles de apoyo. |
| `brand.primary` | Terracota / Borgoña cálido | `#A05255` | `rgb(160, 82, 85)` | Botones de conversión primarios (CTAs), badges clave y citas destacadas. |
| `brand.secondary` / `brand.medium` | Borgoña profundo | `#8E4A49` | `rgb(142, 74, 73)` | Estados hover/active de botones, gradientes de acento y sombras sutiles. |
| `brand.glass` | Capa translúcida | `rgba(255, 255, 255, 0.85)` | `rgba(255, 255, 255, 0.85)` | Paneles con desenfoque de fondo (`backdrop-blur-md`). |

#### Atmósfera fija de fondo
Definida en `src/index.css` sobre la etiqueta `body`:
```css
body {
  @apply bg-brand-base text-brand-text antialiased;
  background-color: #FAF7F5;
  background-image: 
    radial-gradient(at 0% 0%, rgba(160, 82, 85, 0.03) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(234, 223, 217, 0.2) 0px, transparent 50%);
  background-attachment: fixed;
}
```

### 3.2. Especificaciones tipográficas y ortotipografía RAE
- **Regla de oro de Sentence Case:** En todos los titulares (`h1`, `h2`, `h3`, `h4`), botones, enlaces, descripciones, acordeones y textos legales, únicamente la letra inicial de la primera palabra debe ir en mayúscula, manteniendo en minúsculas el resto, a excepción estricta de nombres propios de personas o marcas registradas (ej. *Elizabeth Caballero*, *Zoom*, *WhatsApp*, *Balletherapie*) y acrónimos técnicos (ej. *FAQ*, *ARCO*, *CTA*, *MXN*, *SEO*, *GA4*).
- **Prohibición de `uppercase` indiscriminado:** Queda terminantemente prohibido el uso de la clase utilitaria `uppercase` de Tailwind CSS en párrafos, títulos largos o botones principales. Solo se permite en micro-etiquetas de sistema tipo badge (como *"Lunes a Viernes"* o *"Voces Reales"*) de máximo 3 palabras y tamaño no mayor a `12px` (`text-[0.65rem]` o `text-xs`) con alto interletreado (`tracking-widest`).
- **Wordmark institucional de autor en cursiva editorial:** `Playfair Display Italic` (`font-serif italic font-normal tracking-wide`), aplicado al logotipo textual de marca en la barra de navegación superior (`Navbar.jsx`: `text-xl sm:text-2xl text-brand-text hover:text-brand-primary`) y en el pie de página institucional (`Footer.jsx`: `text-2xl sm:text-3xl text-brand-text !text-brand-base`), aportando distinción editorial orgánica. Se complementa con micro-descriptor sans-serif limpio en estricto Sentence Case (*"Wellness studio"*, `font-sans not-italic text-[0.65rem] tracking-widest text-brand-muted`).
- **Tipografía de titulares (Display Serif):** `Playfair Display`, serif (pesos 400, 600, 700 y cursiva). Transmite elegancia reflexiva, serenidad orgánica y distinción editorial.
- **Tipografía de lectura e interfaz (Geometric Sans-Serif):** `Montserrat`, sans-serif (pesos 300, 400, 500, 600). Otorga legibilidad nítida, descanso visual y ritmo geométrico en pantallas móviles.

### 3.3. Acabados de interfaz, radios y utilidades Soft Glass
- **Clase utilitaria `.glass-panel`:**
  ```css
  @apply bg-white/85 backdrop-blur-md border border-[#EADFD9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-3xl;
  ```
- **Clase utilitaria `.glass-button`:**
  ```css
  @apply bg-brand-primary text-white shadow-sm hover:bg-brand-secondary hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] transition-all duration-300 active:scale-95 min-h-[44px] inline-flex items-center justify-center font-medium;
  ```
- **Radios de curvatura estándar:**
  - Botones y pastillas (Pills): `rounded-full`.
  - Paneles, tarjetas y modales: `rounded-3xl` (24px) o `rounded-2xl` (16px).
  - Marco hero de autoría: Arco superior editorial estilizado `rounded-t-[10rem] rounded-b-[2rem]` en escritorio y `rounded-t-[2.5rem] rounded-b-xl` (`max-h-[190px]`) en móvil.
- **Tratamiento cromático de fotografías:** Las imágenes editoriales integran una sutil capa de mezcla `mix-blend-soft-light` con gradiente tenue de `brand-primary/10` para armonizar la temperatura de color con la atmósfera lino del lienzo.
- **Proporciones y contención de tarjetas editoriales (Peek affordance y formato apaisado):**
  - *Tarjetas alargadas apaisadas de audiencia (`TargetAudience.jsx`):* Formato horizontal amplio y esbelto `w-[85vw] sm:w-[580px] md:w-[680px] lg:w-[740px] shrink-0 snap-center` con altura compactada y esbelta `min-h-[300px] sm:min-h-[340px] md:min-h-[350px]` y espaciado interno asimétrico `py-4 px-5 sm:py-6 sm:px-7 md:py-6 md:px-8 flex flex-col justify-between`. Carrusel full-bleed de ancho completo de borde a borde `w-full overflow-x-auto no-scrollbar scrollbar-hide snap-x snap-mandatory touch-pan-y overscroll-x-contain flex items-stretch gap-6 sm:gap-8 px-6 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4` con `shrink-0` imperativo en cada tarjeta para neutralizar cualquier compresión o aplastamiento horizontal de Flexbox. Soporte explícito de `touch-action: pan-y` y `overscroll-behavior-x: contain` para impedir que el swipe horizontal intercepte el scroll vertical del usuario. Contenedor sticky con `h-[100dvh]` y despeje inferior `pb-20 md:pb-6` garantizando visibilidad completa ante el `StickyCTA` móvil flotante. Distribución interna balanceada en 2 columnas con cuadrícula calibrada `grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-4 md:gap-7` y aprovechamiento de altura completa (`h-full flex flex-col justify-between`): columna izquierda (identidad y conversión) con badge circular de trazo fino (`w-8 h-8`, ícono `w-3.5 h-3.5`), micro-tag temático, título Display Serif (`text-lg sm:text-2xl font-semibold`), descripción contextual con ancho equilibrado (`max-w-[270px]`) y enlace "Sentirme mejor →" anclado al pie (`min-h-[44px]`); columna derecha (empatía somatosensorial) con tarjeta interior suave `bg-white/60 border border-brand-linen/80 rounded-xl p-2.5 sm:p-3.5 mb-2 sm:mb-2.5 shadow-[0_2px_12px_rgba(42,36,33,0.02)]` para la cita cognitiva y lista de síntomas con viñetas `CheckCircle2` (`w-3.5 h-3.5 text-brand-primary`, `space-y-1 sm:space-y-1.5 mt-auto`, `text-xs sm:text-[0.8rem]`). Acabado Soft Glass con diferenciación cromática tenue por perfil y sombra con relieve `shadow-[0_12px_36px_rgba(42,36,33,0.06)] hover:shadow-[0_16px_44px_rgba(160,82,85,0.1)] transition-shadow duration-300`.
  - *Tarjetas compactas testimoniales (`Testimonials.jsx`):* En móvil (`< md`), ancho contenido relativo `w-[82vw] max-w-[320px] flex-shrink-0 snap-center` con espaciado `p-6`, bordes `rounded-3xl border border-brand-linen` y estructura vertical con peek affordance (~18vw visible). En escritorio (`>= md`), cuadrícula de 3 columnas (`md:grid md:grid-cols-3 md:gap-6`) con alturas niveladas.
  - *Gestión de desplazamiento limpio:* Utilidades CSS `.no-scrollbar` y `.scrollbar-hide` para ocultar la barra de desplazamiento nativa sin entorpecer el swipe táctil o desplazamiento por trackpad con inercia elástica.
  - *Despeje inferior adaptativo y convivencia con StickyCTA:* Para evitar que la barra flotante móvil (`StickyCTA.jsx`, fijada en `bottom-4`) cubra contenido interactivo, se aplican márgenes inferiores de contención en componentes clave: `pb-20 md:pb-6` en el escenario sticky de `TargetAudience.jsx`, `pb-24 md:pb-12` en el contenedor de `Schedule.jsx`, y `pb-24 md:pb-8` en el contenedor de `Footer.jsx`.
  - *Reglas de no-partición tipográfica en rangos y canales:* Los rangos horarios no deben fracturarse en múltiples renglones, implementando `whitespace-nowrap text-sm sm:text-base font-semibold text-brand-text` combinado con cabeceras `flex-wrap gap-2`. Igualmente, el correo institucional en el pie de página debe utilizar `break-normal sm:break-all` sobre una columna con ancho mínimo garantizado desde pantallas de 360px.

---

## 4. Arquitectura de la SPA y especificación de componentes

La experiencia de Balletherapie se articula como una Single Page Application (SPA) continua, estructurada en 9 componentes principales interconectados mediante desplazamiento suave por anclas:

```text
[ Navbar Flotante Dinámico (Scroll-Aware) ]
                   │
                   ▼
[ 1. Hero: Propuesta de Valor, Marco Editorial y CTAs ] (#inicio)
                   │
                   ▼
[ 2. Audiencia: 3 Arquetipos de Autoidentificación ]
                   │
                   ▼
[ 3. El Método: 3 Pilares Terapéuticos y Espacio Seguro ] (#metodo)
                   │
                   ▼
[ 4. Sobre Mí: Historia de Elizabeth Caballero y Resiliencia ] (#sobre-mi)
                   │
                   ▼
[ 5. Testimonios: Prueba Social y Voces Reales ] (#testimonios)
                   │
                   ▼
[ 6. Horarios y Reservas: Agenda en Vivo y Enlace a WhatsApp ] (#reservar)
                   │
                   ▼
[ 7. Preguntas Frecuentes: Acordeón Interactivo ] (#faq)
                   │
                   ▼
[ Footer Institucional y Modal Legal de Privacidad ARCO ]
                   │
                   ▼
[ Sticky CTA Móvil: Conversión Rápida Diferida ] (md:hidden, scrollY >= 420)
```

### 4.1. Detalle técnico de cada componente

#### 1. Barra de navegación (`src/layout/Navbar.jsx`)
- **Patrón Smart Scroll direccional y doble estado visual:**
  - Control de visibilidad mediante listener pasivo (`{ passive: true }`) y referencia `lastScrollY` (`useRef(0)`):
    * En la cima de la página (`currentScrollY <= 40`): Barra siempre visible (`isVisible = true`).
    * Al descender (`currentScrollY > lastScrollY && currentScrollY > 60`): La barra se oculta fluidamente hacia arriba (`-translate-y-28 opacity-0 pointer-events-none`).
    * Al ascender (`currentScrollY < lastScrollY`): La barra reaparece inmediatamente (`translate-y-0 opacity-100 pointer-events-auto`).
    * *Excepción obligatoria:* Con el menú móvil abierto (`isMobileMenuOpen === true`), la visibilidad permanece forzosamente en `true`.
  - *Estado al tope (`scrollY <= 20` / `isScrolled = false`):* Barra 100% plana, transparente y libre de cápsula tanto en móvil como en escritorio (`w-full max-w-6xl mx-auto px-6 sm:px-8 py-5 sm:py-6 bg-transparent border-transparent shadow-none rounded-none backdrop-blur-none`). El wordmark "Balletherapie" en cursiva y el botón de menú hamburguesa (o enlaces de escritorio) descansan directamente sobre el lienzo, fusionándose de forma natural con el fondo del Hero sin encerrarse en ninguna cápsula.
  - *Estado en desplazamiento (`scrollY > 20` / `isScrolled = true`):* Transición suave (`transition-all duration-300 ease-in-out`) a cápsula flotante Soft Glass centrada `max-w-4xl mx-auto mt-2 sm:mt-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FAF7F5]/95 backdrop-blur-md border border-[#EADFD9] shadow-[0_4px_20px_rgba(42,36,33,0.06)]`.
- **Logotipo institucional de autor:** Wordmark en cursiva editorial (*Playfair Display Italic*, `font-serif italic font-normal tracking-wide text-brand-text hover:text-brand-primary`) con micro-descriptor inferior en tipografía sans limpia y Sentence Case (*"Wellness studio"*, `font-sans not-italic text-[0.65rem] tracking-widest text-brand-muted`).
- **Navegación de escritorio:** Enlaces a `#inicio`, `#metodo`, `#sobre-mi`, `#testimonios`, `#faq` y botón de conversión directa *"Agendar clase"* con halo lumínico en hover.
- **Menú móvil interactivo:** Botón accesible de mínimo 44x44px con ícono de alternancia `Menu` / `X`. Despliega una cortina en pantalla completa con `backdrop-blur-xl`, enlaces de gran escala, bloqueo de scroll en el `body` (`document.body.style.overflow = 'hidden'`) y autocierre tras pulsar una opción.

#### 2. Sección Hero (`src/sections/Hero.jsx`)
- **Contenedor y atmósfera visual (Above the Fold optimizado y despeje de Navbar):** Posicionamiento no estático garantizado `relative w-full overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 md:pb-20 flex flex-col justify-center min-h-[92vh] md:min-h-screen px-4 sm:px-6` para erradicar cualquier colisión o cercanía excesiva con el Navbar flotante en pantallas móviles, complementado con halos lumínicos difusos en lino (`bg-brand-linen/40 blur-[120px]`) y terracota tenue (`bg-brand-primary/5 blur-[100px]`).
- **Jerarquía textual calibrada al primer pliegue:**
  - *Kicker badge institucional:* Micro-etiqueta sutil diferenciada visualmente del Navbar sin sombras pesadas `inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-brand-linen/30 border border-brand-linen/60 text-brand-primary text-[0.68rem] sm:text-xs tracking-wide max-w-[90vw] sm:max-w-md mb-3 sm:mb-4`.
  - *Titular H1 editorial:* Escala fluida adaptable `text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-serif text-brand-text leading-tight sm:leading-tight mb-2 sm:mb-3` con remate en itálica terracota (*Balletherapie*).
  - *Subtítulo somatosensorial:* Tipografía limpia en `text-xs sm:text-sm md:text-base text-brand-muted max-w-lg mx-auto md:mx-0 leading-relaxed mb-3 sm:mb-5`.
- **Marco abovedado editorial y dimensiones responsivas:**
  - En escritorio (`>= md`): Arco arquitectónico estilizado `rounded-t-[10rem] rounded-b-[2rem]` con altura `h-[520px] lg:h-[580px]` conteniendo `hero-bg.jpg` y tarjeta flotante Soft Glass *"Tu pausa en medio del ruido"*.
  - En dispositivos móviles (`< md`): Marco compacto optimizado para mantener botones visibles en el primer pantallazo sin desbordamiento: `w-full max-w-[280px] sm:max-w-[340px] md:max-w-none mx-auto md:mx-0 aspect-[4/3] sm:aspect-[16/10] max-h-[190px] sm:max-h-[220px] rounded-t-[2.5rem] rounded-b-xl my-3` con microtarjeta flotante Soft Glass compactada (`text-[0.65rem] sm:text-xs py-1 px-2.5`).
- **Acciones primarias, microinteracciones y prueba social:**
  - Botón primario *"Agendar clase de prueba"* hacia WhatsApp con desplazamiento interactivo de flecha (`group-hover:translate-x-1 duration-200`), halo terracota (`hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] duration-300`), área táctil de `min-h-[44px]` y espaciado móvil equilibrado (`gap-2.5 sm:gap-3 mt-1 sm:mt-2`).
  - Botón secundario *"Conocer el método"* hacia `#metodo`.
  - Microprueba social de modalidades: *"Sesiones matutinas en vivo • Vía Zoom • Atención somática personalizada"* en `text-[0.65rem] sm:text-xs text-brand-muted mt-2 sm:mt-3` (en estricto Sentence Case).

#### 3. Audiencia y autoidentificación (`src/sections/TargetAudience.jsx`)
- **Arquitectura de Scrollytelling Pinned en 3 fases (Patrón Diana Ledesma adaptado a Warm Editorial):**
  - *Pista exterior extendida y optimizada:* Contenedor exterior con altura calculada y ágil de `h-[140vh]` en móvil (`< md`) y `h-[240vh]` en escritorio (`>= md`) con posicionamiento relativo (`relative w-full`), previniendo recorridos muertos y permitiendo que la usuaria avance con ligereza sin quedar "atrapada" en un pantallazo estático.
  - *Escenario sticky en viewport y balance vertical móvil:* Contenedor fijo en pantalla con altura dinámica `sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center py-3 sm:py-6 pb-20 md:pb-6`. La utilización de `100dvh` neutraliza por completo los saltos y redibujados bruscos causados por el colapso o despliegue de las barras de navegación en Safari iOS y Chrome Android. El despeje inferior `pb-20 md:pb-6` asegura que ni la pastilla de navegación inferior ni el botón "Sentirme mejor" queden ocluidos por el `StickyCTA` flotante. El encabezado (`w-full max-w-3xl mx-auto px-4 text-center mb-2 sm:mb-4 pointer-events-none relative z-20 flex-shrink-0`) mantiene al subtítulo montado en el DOM con desvanecimiento por opacidad para eliminar CLS. Ausencia estricta de clases de transición CSS en elementos interpolados por GPU. El carrusel de tarjetas incorpora `touch-pan-y` y `overscroll-x-contain` (`touch-action: pan-y; overscroll-behavior-x: contain;`) para blindar el desplazamiento vertical nativo contra bloqueos producidos por el deslizamiento horizontal.
  - *Interpolaciones cinemáticas continuas GPU con `useTransform` (Calibración ágil 0.08 - 0.25):* Monitoreo de `scrollYProgress` (0.0 a 1.0) mediante `useScroll` de Framer Motion con transformaciones matemáticas continuas sin estados booleanos reactivos ni re-renderizados durante el scroll:
    * `headerY = useTransform(scrollYProgress, [0.08, 0.25], ["18vh", "0vh"])`
    * `subtitleOpacity = useTransform(scrollYProgress, [0.08, 0.18], [1, 0])`
    * `cardsOpacity = useTransform(scrollYProgress, [0.14, 0.25], [0, 1])`
    * `cardsY = useTransform(scrollYProgress, [0.14, 0.25], ["30px", "0px"])`
    * `cardsPointerEvents = useTransform(scrollYProgress, (v) => v >= 0.22 ? "auto" : "none")`
    * `backdropOpacity = useTransform(scrollYProgress, [0.08, 0.25], [1, 0])`
- **Coreografía continua en 3 fases:**
  - *Fase 1 (`progress < 0.08`):* Protagonismo exclusivo para el encabezado posicionado en el centro óptico vertical de la pantalla (`headerY: 18vh`). Compuesto por kicker badge *"¿Te sientes identificada?"*, titular display H2 *"El cansancio que no se quita durmiendo"* y subtítulo reflexivo visible (`opacity: 1`). Tarjetas y controles permanecen invisibles (`opacity: 0`) y bloqueados (`pointer-events: none`).
  - *Fase 2 (`0.08 <= progress <= 0.25`):* Transición cinemática rápida y continua. Desvanecimiento suave del subtítulo (`opacity: 1 -> 0` entre `0.08` y `0.18`), ascenso del titular a su posición de cabecera directa (`y: 18vh -> 0vh` entre `0.08` y `0.25`) y emergencia vertical de las tarjetas (`y: 30px -> 0px`, `opacity: 0 -> 1` entre `0.14` y `0.25`).
  - *Fase 3 (`progress > 0.25`):* Titular fijado como cabecera inmediata. Las tarjetas apaisadas full-bleed y la pastilla de controles alcanzan opacidad total e interactividad plena (`pointer-events: auto` a partir de `0.22`), permitiendo swipe horizontal fluido sin retención de scroll.
- **Tarjetas alargadas apaisadas (Landscape Cards compactas con silueta esbelta y diferenciación cromática suave):**
  - Eliminación total de la nomenclatura técnica "Arquetipo 01/02/03", reemplazada por badge circular con ícono Lucide (`BatteryWarning`, `Smartphone`, `Clock`), título en `Playfair Display` seminegrita (`text-lg sm:text-2xl text-brand-text font-semibold`) y micro-tags descriptivos de apoyo.
  - Diferenciación cromática suave en cada tarjeta:
    * *Tarjeta 1 (La profesional en burnout):* Fondo `bg-[#FAF3F2]/90 backdrop-blur-xl`, borde perimetral `border-[#E8D6D5]`, badge de ícono `bg-brand-primary/10 text-brand-primary` y micro-tag "Tensión y sobrecarga".
    * *Tarjeta 2 (La joven preventiva):* Fondo `bg-[#F6F2EE]/90 backdrop-blur-xl`, borde perimetral `border-[#E5DDD6]`, badge de ícono `bg-[#685D57]/10 text-[#685D57]` y micro-tag "Sedentarismo digital".
    * *Tarjeta 3 (La madre multitarea):* Fondo `bg-[#F7F2F3]/90 backdrop-blur-xl`, borde perimetral `border-[#E6D9DC]`, badge de ícono `bg-brand-secondary/10 text-brand-secondary` y micro-tag "Autoexigencia diaria".
  - Geometría de presencia extendida con silueta rectangular compacta: `w-[85vw] sm:w-[580px] md:w-[680px] lg:w-[740px] shrink-0 snap-center`, altura compacta `min-h-[300px] sm:min-h-[340px] md:min-h-[350px]`, espaciado interno asimétrico `py-4 px-5 sm:py-6 sm:px-7 md:py-6 md:px-8 flex flex-col justify-between`, sombra con relieve `shadow-[0_12px_36px_rgba(42,36,33,0.06)] hover:shadow-[0_16px_44px_rgba(160,82,85,0.1)] transition-shadow duration-300` con cuadrícula interna `grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-4 md:gap-7` y aprovechamiento de altura completa en ambas columnas (`h-full flex flex-col justify-between`).
  - *Columna izquierda (Identidad y conversión):* Badge superior de ícono (`w-8 h-8`, ícono `w-3.5 h-3.5`) con micro-tag, título Display Serif (`text-lg sm:text-2xl font-semibold`), descripción contextual compacta (`max-w-[270px]`) y botón de llamada a la acción en la base ("Sentirme mejor →") con enlace blindado a WhatsApp (`target="_blank" rel="noopener noreferrer"`).
  - *Columna derecha (Empatía somatosensorial):* Tarjeta interior suave (`bg-white/60 border border-brand-linen/80 rounded-xl p-2.5 sm:p-3.5 mb-2 sm:mb-2.5 shadow-[0_2px_12px_rgba(42,36,33,0.02)]`) con cita destacada en cursiva e ícono `Quote`, acompañada de lista de síntomas con viñetas `CheckCircle2` (`w-3.5 h-3.5 text-brand-primary`), espaciado compacto (`space-y-1 sm:space-y-1.5 mt-auto`) y tipografía en `Montserrat` (`text-brand-muted text-xs sm:text-[0.8rem]`).
- **Pastilla de controles de navegación inferior:**
  - Cápsula flotante centrada `bg-white/90 backdrop-blur-xl px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-brand-linen shadow-md flex items-center gap-3` con botones tipo chevron accesibles de mínimo 44x44px (`active:scale-95`) vinculados a desplazamiento imperativo `scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })`, sincronizados reactivamente con un listener de scroll pasivo (`addEventListener('scroll', ..., { passive: true })`) sobre `carouselRef.current` para actualizar los micro-indicadores reactivos (dots) según `scrollLeft`.

#### 4. El método y pilares terapéuticos (`src/sections/Differentiators.jsx`)
- Manifiesto editorial explicando la diferencia entre el barre somático restaurativo y el fitness punitivo tradicional.
- Tres tarjetas Soft Glass para los pilares (*Journaling terapéutico*, *Barre somático*, *Meditación aplicada*) con íconos `BookOpen`, `Activity` y `Sparkles`.
- Caja de contención *"Tu espacio seguro"* en carbón profundo con distintivos *"Sin comparaciones"* y *"Sin prisa"*.

#### 5. Sobre mí - Elizabeth Caballero (`src/sections/AboutMe.jsx`)
- **Estructura de jerarquía superior:** Encabezado posicionado al inicio superior de la sección arriba de la fotografía de Elizabeth tanto en móvil como en escritorio, compuesto por kicker badge *"Sobre mí"* y titular principal H2 *"De la rigidez a la libertad."*.
- **Cuerpo inferior a 2 columnas:** Retrato editorial de Elizabeth Caballero (`eli-about.jpg`) con halo cálido y tarjeta flotante de cita a la izquierda, acompañado a la derecha por la narrativa biográfica de resiliencia (rechazo en audiciones a los 16 años, dos caídas graves, hernia discal y epifanía somática del dolor como puente hacia el bienestar) y tarjeta destacada de reflexión Soft Glass.

#### 6. Testimonios y voces reales (`src/sections/Testimonials.jsx`)
- **Layout híbrido responsivo:** Carrusel táctil horizontal en móvil (`< md`) con peek affordance (`flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 px-4 -mx-4` y tarjetas `w-[82vw] max-w-[320px] flex-shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between`), manteniendo cuadrícula de 3 columnas en escritorio (`>= md`, `md:grid md:grid-cols-3 md:gap-6`).
- 3 tarjetas compactas Soft Glass con 5 estrellas terracota (`Star`), comillas tipográficas (`Quote`) y testimonios de alumnas reales (CEO, Madre y ejecutiva, Abogada corporativa).
- **Monogramas tipográficos editoriales:** Avatar circular `w-10 h-10 rounded-full bg-brand-linen/60 text-brand-primary font-serif font-semibold text-sm border border-brand-linen` con la inicial del arquetipo (*C* para CEO, *M* para Madre y ejecutiva, *A* para Abogada corporativa) a la izquierda de la información de la alumna.
- Indicador visual interactivo de posición (dots/pastillas) para móvil.

#### 7. Horarios, modalidad y reserva (`src/sections/Schedule.jsx`)
- Agenda dinámica y franjas orientativas coordinadas semanalmente de mujer a mujer vía WhatsApp:
  - *Bloque matutino:* Rango horario blindado con contenedor no divisible `whitespace-nowrap text-sm sm:text-base font-semibold text-brand-text` (`07:00 AM - 11:00 AM`) de lunes a sábado, evitando fracturas antiestéticas en múltiples líneas. Cabecera adaptativa con `flex flex-wrap items-center justify-between gap-2` para reacomodo natural del badge sin comprimir el texto. Ideal para comenzar el día oxigenando el cuerpo, alineando la postura y calmando el sistema nervioso.
  - *Bloque complementario / tardes bajo consulta:* Franjas vespertinas acordadas semanalmente de forma personalizada para adaptarse a agendas laborales dinámicas y compromisos cambiantes, con cabecera flexible `flex flex-wrap items-center justify-between gap-2`.
- Tarjeta de contención informativa de modalidad Zoom y cupo limitado: Sesiones 100% en vivo con cupo limitado para garantizar corrección postural y atención somática cercana, en un espacio seguro y confidencial sin grabaciones invasivas. La cita y horario específico se agendan directamente por chat según disponibilidad de la semana.
- Viñeta informativa de pie de panel con alineación superior precisa `flex items-start gap-2 text-left` y punto indicador `mt-1` sincronizado con la primera línea del texto.
- Despeje inferior prioritario frente a `StickyCTA`: Contenedor de sección configurado con `pt-20 md:pt-24 pb-24 md:pb-12 px-6` para asegurar que la tarjeta de inversión y el botón de WhatsApp no queden cubiertos por la barra flotante móvil.
- Tarjeta destacada de "Inversión flexible" en gradiente terracota ("Paquetes a tu medida o pago por clase", sin mensualidades forzosas ni ataduras) con botón directo a WhatsApp (`https://wa.me/525539134996?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20los%20horarios%20disponibles%20para%20esta%20semana`), atributos `target="_blank" rel="noopener noreferrer"` y analítica GA4 `handleWhatsAppClick('Schedule')`.

#### 8. Preguntas frecuentes (`src/sections/FAQ.jsx`)
- Acordeón interactivo con 5 preguntas frecuentes gestionado con `AnimatePresence` de Framer Motion. La pregunta 5 aborda la política de inasistencia garantizando que las sesiones son 100% en vivo para proteger la privacidad de las alumnas y permitir reagendar en otros horarios matutinos de la misma semana con aviso previo.
- **Microinteracciones y jerarquía visual:** Rotación fluida de 45° en el icono `Plus` para transformarse suavemente en aspa al expandir (`rotate: 45` con `duration: 0.25, ease: "easeInOut"`). Realce de tarjeta activa con borde terracota tenue (`border-brand-primary/30`) y sombra suave (`shadow-[0_4px_16px_rgba(160,82,85,0.06)]`).
- Enlace complementario de contacto directo a WhatsApp para resolver inquietudes particulares.

#### 9. Pie de página institucional y modal legal (`src/layout/Footer.jsx` y `src/components/ui/PrivacyModal.jsx`)
- Logotipo de autor en cursiva editorial (*Playfair Display Italic*, `font-serif italic font-normal tracking-wide text-2xl sm:text-3xl text-brand-text !text-brand-base`) con punto final terracota.
- Enlaces de navegación rápida y canales de contacto oficiales organizados en sub-cuadrícula `grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2`, asegurando amplitud completa para la columna de contacto desde dispositivos de 360px de ancho.
- Enlace del correo institucional configurado con `text-xs sm:text-sm text-brand-muted hover:text-brand-base transition-colors inline-block break-normal sm:break-all`, garantizando que `balletherapystudio@gmail.com` se lea en una sola línea continua sin particiones.
- Despeje inferior para `StickyCTA`: Padding de contenedor `pt-14 pb-24 md:pb-8` asegurando que la barra de copyright y el botón de privacidad conserven holgura visual plena.
- Disparador del modal de Aviso de Privacidad y derechos ARCO conforme a la normativa mexicana.

#### 10. Barra flotante de conversión móvil diferida (`src/components/ui/StickyCTA.jsx`)
- **Exclusividad móvil:** Barra flotante fija inferior (`md:hidden fixed bottom-4 inset-x-4 z-40`).
- **Aparición reactiva al scroll:** Condicionada con `AnimatePresence` a que el scroll supere el pliegue visual inicial (`window.scrollY >= 420`), previniendo colisión visual con el Hero.
- **Estilo Soft Glass y contenido:** Cápsula `bg-white/90 backdrop-blur-md border border-brand-linen rounded-full p-2 pl-5 flex items-center justify-between shadow-lg`, copy somatosensorial *"Tu primera sesión"* con subtítulo *"Clase de prueba gratis"*, y botón de conversión con enlace blindado a WhatsApp (`target="_blank" rel="noopener noreferrer"`), mensaje humano natural y evento de analítica GA4 (`handleWhatsAppClick('StickyCTA')`).

---

## 5. Estrategia de neuromarketing y psicología cognitiva aplicada

| Principio cognitivo | Mecanismo psicológico | Aplicación concreta en Balletherapie |
| :--- | :--- | :--- |
| **Gaze cueing y postura corporal** | La atención visual del usuario sigue de forma refleja la dirección de la mirada y postura de rostros humanos. | Las fotografías de Elizabeth Caballero en Hero y Sobre Mí orientan su mirada y línea corporal hacia los titulares y botones de reserva. |
| **Reducción del dolor de pagar (Pain of paying)** | Las suscripciones obligatorias y ataduras mensuales activan el dolor cognitivo de la pérdida monetaria. | Se presenta como "Inversión flexible": clase de bienvenida gratuita, paquetes a tu medida o pago por clase individual ("Pagas solo lo que usas"). |
| **Copys somatosensoriales y propioceptivos** | Las expresiones propioceptivas activan la corteza sensorial y premotora del lector. | Copys como *"oxigenar la columna"*, *"aterrizar el ruido mental en el papel"* y *"soltar el peso de la angustia"* conectan la molestia física con la solución terapéutica. |
| **Efecto de dotación (Endowment effect)** | Las personas atribuyen mayor valor a un espacio cuando sienten que ya les pertenece. | Expresiones de pertenencia: *"Tu espacio, tu tiempo"*, *"Tu pausa en medio del ruido"*, *"Ellas ya encontraron su centro"*. |
| **Mitigación de sobrecarga (Ley de Hick)** | El exceso de alternativas genera parálisis decisional y abandono. | Tres arquetipos exactos, horarios en bloques homogéneos y una única llamada a la acción primordial por sección. |
| **Espacio seguro (Safe space conditioning)** | La mujer principiante teme el juicio por falta de flexibilidad o nivel técnico. | Contenedor en carbón profundo con las declaraciones explícitas *"Sin comparaciones"* y *"Sin prisa"*, disolviendo la barrera de entrada. |
| **Affordances táctiles inmediatas** | La respuesta visual física inmediata valida la sensación de control. | Áreas táctiles mínimas de 44x44px con compresión táctil elástica `active:scale-95` y aperturas amortiguadas en Framer Motion. |

---

## 6. Estrategia SEO, Open Graph y marcado estructurado

Para garantizar un posicionamiento óptimo en motores de búsqueda y previsualizaciones visuales de alto impacto en redes sociales y servicios de mensajería (WhatsApp, Instagram, LinkedIn, Telegram), se definen las siguientes directivas:

### 6.1. Metadatos de cabecera en `index.html`
- **Etiqueta de idioma:** `<html lang="es">` obligatoria para indexación regional hispanohablante.
- **Etiqueta canónica:**
  ```html
  <link rel="canonical" href="https://balletherapie-dev.web.app/" />
  ```
- **Favicons oficiales Warm Editorial:**
  ```html
  <link rel="icon" type="image/svg+xml" href="./favicon.svg?v=1" />
  <link rel="alternate icon" href="./favicon.ico?v=1" />
  <link rel="apple-touch-icon" href="./apple-touch-icon.png?v=1" />
  ```
  Activos generados en `public/`:
  - `public/favicon.svg`: Vectorial escalable moderno con identidad Warm Editorial (fondo terracota `#A05255` y letra "B" estilizada en Playfair Display `#FAF7F5`).
  - `public/favicon.ico`: Formato estándar tradicional con soporte multi-resolución (32x32 y 16x16 px).
  - `public/apple-touch-icon.png`: Resolución optimizada de 180x180 px para dispositivos Apple / iOS.
- **Meta tags primarios:**
  ```html
  <title>Balletherapie | Santuario de bienestar, barre somático y regulación nerviosa</title>
  <meta name="description" content="Espacio de bienestar integral para la mujer contemporánea. Barre somático, journaling terapéutico y meditación aplicada para aliviar el burnout y cuidar tu espalda." />
  <meta name="keywords" content="balletherapie, barre somático, journaling terapéutico, meditación, burnout, dolor de espalda, bienestar femenino, clases zoom" />
  <meta name="author" content="Elizabeth Caballero" />
  ```

### 6.2. Metadatos Open Graph y Twitter Cards
Las imágenes de previsualización deben respetar la proporción 1.91:1 con resolución recomendada de **1200 x 630 píxeles** para evitar recortes indeseados en WhatsApp e Instagram:
```html
<!-- Open Graph / WhatsApp / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://balletherapie-dev.web.app/" />
<meta property="og:title" content="Balletherapie | Santuario de bienestar, barre somático y regulación nerviosa" />
<meta property="og:description" content="Burnout que pesa • Barre que restaura • Movimiento que serena. Clases virtuales 100% en vivo vía Zoom con atención somática personalizada." />
<meta property="og:image" content="https://balletherapie-dev.web.app/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="es_MX" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://balletherapie-dev.web.app/" />
<meta name="twitter:title" content="Balletherapie | Santuario de bienestar, barre somático y regulación nerviosa" />
<meta name="twitter:description" content="Espacio donde el barre activa, el journaling libera y tu sistema nervioso se regula. Sesiones 100% en vivo vía Zoom con atención somática personalizada." />
<meta name="twitter:image" content="https://balletherapie-dev.web.app/og-image.jpg" />
```

### 6.3. Marcado semántico estructurado JSON-LD (Schema.org)
Implementado en `index.html` dentro de una etiqueta `<script type="application/ld+json">` para otorgar contexto a los rastreadores:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://balletherapie-dev.web.app/#business",
      "name": "Balletherapie Wellness Studio",
      "alternateName": "Balletherapie",
      "url": "https://balletherapie-dev.web.app/",
      "logo": "https://balletherapie-dev.web.app/logo.png",
      "image": "https://balletherapie-dev.web.app/og-image.jpg",
      "description": "Método integral de bienestar para mujeres: barre somático, journaling terapéutico y meditación para el alivio del estrés y el dolor de espalda.",
      "telephone": "+52-55-3913-4996",
      "email": "balletherapystudio@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ciudad de México",
        "addressCountry": "MX"
      },
      "founder": {
        "@type": "Person",
        "@id": "https://balletherapie-dev.web.app/#founder",
        "name": "Elizabeth Caballero",
        "jobTitle": "Terapeuta de movimiento y bailarina",
        "description": "Fundadora de Balletherapie, especialista en descompresión espinal y regulación del sistema nervioso."
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:00",
          "closes": "11:00"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://balletherapie-dev.web.app/#course",
      "name": "Clases de barre somático y journaling Balletherapie",
      "description": "Sesiones matutinas online 100% en vivo vía Zoom con atención somática personalizada y corrección postural en tiempo real.",
      "provider": {
        "@id": "https://balletherapie-dev.web.app/#business"
      }
    }
  ]
}
```

### 6.4. Archivos estáticos de indexación (`robots.txt` y `sitemap.xml`)
Ubicados en el directorio `/public/` para ser copiados íntegramente a `/dist/` durante el build:

**Contenido de `public/robots.txt`:**
```text
User-agent: *
Allow: /

Sitemap: https://balletherapie-dev.web.app/sitemap.xml
```

**Contenido de `public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://balletherapie-dev.web.app/</loc>
    <lastmod>2026-10-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 7. Analítica web y atribución de conversión

### 7.1. Integración de Google Analytics 4 (GA4) / GTM
Inclusión asíncrona no bloqueante en el `<head>` de `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    anonymize_ip: true,
    page_path: window.location.pathname
  });
</script>
```

### 7.2. Evento personalizado de conversión (`generate_lead`)
Al tratarse de una conversión fuera de banda (out-of-band) asistida por WhatsApp, cada clic en un botón de reserva debe disparar un evento analítico estándar:
```javascript
const handleWhatsAppClick = (sourceSection) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: sourceSection,
      method: 'whatsapp',
      value: 1
    });
  }
};
```

### 7.3. Atribución granular de prospectos por sección
Para preservar la calidez humana y una experiencia conversacional sin fricción, los textos predefinidos de WhatsApp prescinden de identificadores técnicos visibles tipo "(Origen: X)". La atribución analítica de la fuente se delega exclusivamente a Google Analytics 4 mediante el parámetro `event_label: sourceSection` en el evento `generate_lead` disparado por `handleWhatsAppClick()`. Los enlaces de WhatsApp integran mensajes naturales y empáticos codificados con `encodeURIComponent`:

| Componente | Mensaje humano natural | Mensaje codificado en URL |
| :--- | :--- | :--- |
| **Hero principal** | `Hola! Quiero agendar mi clase de prueba gratis` | `https://wa.me/525539134996?text=Hola!%20Quiero%20agendar%20mi%20clase%20de%20prueba%20gratis` |
| **Horarios / Inversión** | `Hola! Me gustaría consultar los horarios disponibles para esta semana` | `https://wa.me/525539134996?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20los%20horarios%20disponibles%20para%20esta%20semana` |
| **FAQ (Dudas)** | `Hola! Tengo una duda sobre las clases de Balletherapie` | `https://wa.me/525539134996?text=Hola!%20Tengo%20una%20duda%20sobre%20las%20clases%20de%20Balletherapie` |
| **Navbar / Menú móvil** | `Hola! Me gustaría agendar mi clase de prueba` | `https://wa.me/525539134996?text=Hola!%20Me%20gustar%C3%ADa%20agendar%20mi%20clase%20de%20prueba` |
| **Sticky CTA móvil** | `Hola! Quiero agendar mi clase de prueba gratis` | `https://wa.me/525539134996?text=Hola!%20Quiero%20agendar%20mi%20clase%20de%20prueba%20gratis` |

---

## 8. Accesibilidad técnica universal (WCAG 2.1 AA / WAI-ARIA)

### 8.1. Ratios de contraste cromático
Todos los emparejamientos de texto y fondo satisfacen el umbral WCAG 2.1 AA:
- Texto normal sobre fondo lino (`#2A2421` sobre `#FAF7F5`): Ratio superior a **13.5:1** (supera holgadamente el mínimo de 4.5:1).
- Texto secundario muted (`#685D57` sobre `#FAF7F5`): Ratio de **5.2:1** (aprobado).
- Botón terracota con texto blanco (`#FFFFFF` sobre `#A05255`): Ratio de **4.8:1** (aprobado).

### 8.2. Acordeón interactivo accesible (`src/sections/FAQ.jsx`)
Cada elemento del acordeón debe implementar los atributos semánticos de WAI-ARIA:
- Botón disparador:
  - `id={"faq-trigger-" + index}`
  - `aria-expanded={openIndex === index}`
  - `aria-controls={"faq-content-" + index}`
- Contenedor de respuesta expandible:
  - `id={"faq-content-" + index}`
  - `role="region"`
  - `aria-labelledby={"faq-trigger-" + index}`
- Control por teclado: soporte de navegación con teclas `Enter` y `Space`.

### 8.3. Modal legal accesible con Focus Trap (`src/components/ui/PrivacyModal.jsx`)
El modal de privacidad debe cumplir estrictamente con el patrón accesible de diálogo modal:
1. **Atributos de contenedor:** `role="dialog"`, `aria-modal="true"` y `aria-labelledby="privacy-title"`.
2. **Atrapamiento activo de foco (Focus Trap):** Al abrirse el modal, el foco se coloca automáticamente en el primer elemento interactivo (botón de cierre o contenedor con scroll). Las pulsaciones sucesivas de `Tab` o `Shift + Tab` ciclan el foco exclusivamente dentro del modal sin escapar al fondo de la página.
3. **Cierre con tecla Escape:** Escucha del evento `keydown` global para cerrar el modal cuando el usuario presiona la tecla `Escape`.
4. **Retorno de foco:** Al cerrarse el modal, el foco debe regresar de forma automática al botón o enlace del Footer que detonó su apertura.

### 8.4. Menú móvil interactivo accesible (`src/layout/Navbar.jsx`)
- **Bloqueo del scroll del documento:** Al abrir el menú móvil, se aplica de inmediato `document.body.style.overflow = 'hidden'` para evitar desplazamientos accidentales del fondo; al cerrarse, se restaura a `''` o `unset`.
- **Aislamiento para lectores de pantalla:** El botón disparador cuenta con `aria-expanded={isOpen}` y `aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}`. Cuando el menú está abierto, el contenedor del resto de la página se marca con `aria-hidden="true"`.

---

## 9. Rendimiento de recursos web y Core Web Vitals (CWV)

Para garantizar un rendimiento estelar en dispositivos móviles bajo redes celulares de velocidad media (4G), la plataforma se rige por los siguientes estándares:

### 9.1. Métricas objetivo de Core Web Vitals
- **Largest Contentful Paint (LCP):** Inferior a **2.5 segundos** en móviles.
- **Interaction to Next Paint (INP):** Inferior a **200 milisegundos**.
- **Cumulative Layout Shift (CLS):** Inferior a **0.1**.

### 9.2. Directrices de optimización de imágenes
- **Formatos de última generación:** Todas las imágenes rasterizadas (`hero-bg.jpg`, `eli-about.jpg`) deben contar con versiones optimizadas en formato `.webp` o `.avif`, conservando compresión adaptada al peso objetivo (< 150 KB por imagen principal).
- **Carga prioritaria en la imagen Hero:**
  ```jsx
  <img 
    src={heroImg} 
    alt="Elizabeth Caballero guiando sesión de barre somático" 
    fetchPriority="high"
    loading="eager"
    decoding="sync"
    width="500"
    height="650"
    className="w-full h-full object-cover object-center"
  />
  ```
- **Carga diferida en imágenes secundarias:** Las imágenes debajo del primer pliegue visual (como `eli-about.jpg` en la sección Sobre Mí) deben usar `loading="lazy"` y `decoding="async"`.
- **Prevención de CLS con dimensiones explícitas:** Todas las etiquetas `img` deben declarar explícitamente atributos `width` y `height`, o estar envueltas en contenedores con relación de aspecto fija (`aspect-[3/4]`, `aspect-square`), reservando el espacio de renderizado antes de que la imagen termine de descargarse.

### 9.3. Eficiencia de renderizado y animaciones GPU
- **Aceleración por hardware:** Las animaciones de Framer Motion se restringen estrictamente a propiedades delegadas al compositor de la GPU (`opacity`, `transform`). Se prohíbe animar propiedades que provoquen recálculos de layout (`width`, `height`, `top`, `margin`).
- **Directiva de visualización única:** Todo componente animado con Framer Motion debe incluir obligatoriamente la propiedad `viewport={{ once: true }}`. Esto evita recalcular y redisparar animaciones durante el scroll repetido del usuario.

---

## 10. Seguridad, privacidad LFPDPPP y resiliencia en GitHub Pages

### 10.1. Cumplimiento de la legislación mexicana de datos personales (LFPDPPP)
El modal `src/components/ui/PrivacyModal.jsx` y la operación del estudio se rigen conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México):
- **Responsable del tratamiento:** Elizabeth Caballero, persona física titular de Balletherapie, con domicilio para oír y recibir notificaciones en Ciudad de México.
- **Datos personales recabados en el flujo asistido:** Únicamente nombre de contacto, número de WhatsApp y dirección de correo electrónico. No se recaban datos financieros ni información sensible en la plataforma web.
- **Finalidades del tratamiento:**
  1. Coordinación de citas, horarios y envío de enlaces individuales para sesiones de Zoom.
  2. Facturación, comprobación de pago y seguimiento del bienestar de la alumna.
  3. Reagendación de sesiones por imprevistos y resolución de dudas personalizadas.
- **Mecanismo de ejercicio de derechos ARCO:** Cualquier alumna puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición enviando su solicitud formal al correo oficial `balletherapystudio@gmail.com`.

### 10.2. Blindaje de hipervínculos externos
- Todo enlace saliente hacia dominios externos (WhatsApp `https://wa.me/525539134996`, Instagram `https://instagram.com/balletherapy`) debe incluir obligatoriamente los atributos de seguridad:
  ```html
  target="_blank" rel="noopener noreferrer"
  ```
  Esto neutraliza ataques de *Reverse Tabnabbing* y evita que la página de destino acceda a `window.opener`.
- **Sanitización URI:** Todo parámetro de texto predeterminado en enlaces hacia la API de WhatsApp debe codificarse mediante `encodeURIComponent()`.

### 10.3. Principio Zero-Trust en frontend estático
- El código compilado en `dist/` no debe contener claves privadas, tokens de API restringidos ni credenciales maestras.
- La confirmación de transacciones y el envío de contraseñas de Zoom se gestionan fuera de banda (out-of-band) a través del canal privado de WhatsApp.

### 10.4. Resiliencia de enrutamiento estático en Firebase Hosting (`firebase.json`)
La Single Page Application (SPA) se despliega sobre la infraestructura CDN global de Firebase Hosting. Para garantizar que cualquier acceso directo o recarga de ruta secundaria en el navegador (ej. `/reservar`, `/metodo`) no arroje errores 404, se configura la regla nativa de reescritura en `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
Esto delega el enrutamiento y la resolución de recursos de forma limpia y transparente al cliente en React 19 sin requerir scripts paliativos de redirección.

---

## 11. Matriz de control de calidad (QA Checklist exhaustivo)

Antes de fusionar cambios a la rama principal o ejecutar `npm run deploy`, debe comprobarse el cumplimiento de los siguientes puntos:

| Módulo / Criterio | Escenario de validación | Resultado esperado |
| :--- | :--- | :--- |
| **Ortotipografía RAE** | Inspección visual y estática de todos los textos de interfaz. | Estricto Sentence Case en encabezados, botones y badges; ausencia de `uppercase` indiscriminado. |
| **Navbar flotante** | Desplazamiento vertical superando los 10px de scroll (`window.scrollY > 10`). | Transición fluida entre estado transparente y cápsula comprimida Soft Glass con borde lino. |
| **Menú móvil interactivo** | Pulsación del botón hamburguesa en pantallas menores a 768px. | Apertura a pantalla completa con `backdrop-blur-xl`, bloqueo de scroll del body (`overflow: hidden`) y cierre al tocar un enlace. |
| **Scrollytelling móvil** | Desplazamiento vertical en `TargetAudience` en iOS Safari y Android Chrome. | Pista ágil `h-[140vh]`, escenario `100dvh` sin saltos por barras del navegador, transición de titular completa en `0.25`, carrusel con `touch-pan-y` sin secuestro de scroll vertical y despeje `pb-20` frente a StickyCTA. |
| **Layout responsivo de horarios** | Visualización de `Schedule` en anchos móviles desde 360px. | Rango `07:00 AM - 11:00 AM` en una sola línea (`whitespace-nowrap`), cabeceras con `flex-wrap` sin compresión de badges, viñeta alineada al primer renglón (`items-start mt-1`) y despeje `pb-24 md:pb-12`. |
| **Tipografía institucional en pie** | Visualización de `Footer` en pantallas móviles desde 360px. | Correo `balletherapystudio@gmail.com` legible en una sola línea continua (`break-normal sm:break-all`), sub-cuadrícula con columna de contacto amplia y despeje inferior `pb-24 md:pb-8`. |
| **Convivencia StickyCTA móvil** | Desplazamiento de la SPA superando 420px de scroll en viewport móvil. | La barra flotante inferior no ocluye tarjetas apaisadas, botones de reserva ni créditos de pie de página gracias a los paddings de contención (`pb-20`, `pb-24`). |
| **Atribución WhatsApp** | Clic en botones de reserva de Hero, Horarios, FAQ y Navbar. | Apertura de enlace de WhatsApp con número internacional `+52 55 3913 4996` y parámetro de mensaje específico de la sección. |
| **Seguridad de enlaces** | Inspección de todas las etiquetas `<a>` externas. | Presencia estricta de `target="_blank"` y `rel="noopener noreferrer"`. |
| **Accesibilidad FAQ** | Navegación por teclado y prueba con lector de pantalla en el acordeón. | Botones con `aria-expanded` dinámico, paneles con `role="region"` y `aria-labelledby` correspondiente. |
| **Accesibilidad modal** | Apertura y navegación por teclado en el modal de privacidad. | Foco atrapado en el modal (Focus Trap), cierre con tecla `Escape` y retorno de foco al disparador. |
| **Rendimiento de imagen** | Inspección del elemento Hero en red móvil simulada. | Atributos `fetchPriority="high"`, `loading="eager"`, dimensiones explícitas y ausencia de CLS. |
| **SEO y metadatos** | Inspección del código fuente HTML de la página compilada. | `<html lang="es">`, canonical URL, etiquetas Open Graph 1200x630px y script JSON-LD válidos. |
| **Archivos estáticos** | Solicitud directa de `/robots.txt` y `/sitemap.xml`. | Archivos accesibles bajo la raíz del dominio con referencias absolutas correctas. |
| **Compilación Vite** | Ejecución de `npm run build` en la terminal. | Generación limpia de la carpeta `dist/` con código de salida `0` y cero errores de TypeScript/Linter. |
| **Resolución raíz en Firebase Hosting** | Carga del sitio en `https://balletherapie-dev.web.app/` o servidor local de preview. | Resolución correcta de todos los activos estáticos en la raíz (`/`) sin errores 404 en scripts o imágenes. |

---

## 12. Roadmap y escalabilidad operativa

La evolución tecnológica del ecosistema Balletherapie se estructura en tres fases progresivas:

```text
┌─────────────────────────┐     ┌─────────────────────────┐     ┌─────────────────────────┐
│         FASE 1          │     │         FASE 2          │     │         FASE 3          │
│   Operación Asistida    │ ──► │   Agenda Automatizada   │ ──► │ Automatización Integral │
│   Manual por WhatsApp   │     │  (Cal.com / Calendly)   │     │  (Webhooks Zoom + CRM)  │
│        [ACTUAL]         │     │     [MEDIANO PLAZO]     │     │      [LARGO PLAZO]      │
└─────────────────────────┘     └─────────────────────────┘     └─────────────────────────┘
```

### 12.1. Fase 1: Operación asistida manual vía WhatsApp (Fase actual)
- **Mecanismo:** La alumna pulsa el botón de reserva en la landing page y aterriza en el chat privado de WhatsApp de Elizabeth Caballero con un mensaje contextual prellenado.
- **Gestión humana:** Elizabeth atiende de mujer a mujer, evalúa el estado físico o lesiones de la interesada, asigna el horario matutino disponible y comparte el enlace individual de Zoom.
- **Cobro:** Transferencia interbancaria (SPEI) o enlace de pago manual con comprobante enviado al chat.

### 12.2. Fase 2: Integración de agenda interactiva automatizada (Mediano plazo)
- **Mecanismo:** Incrustación de un widget ligero de reservaciones (Cal.com o Calendly) integrado con la estética Soft Glass de la página.
- **Funcionalidad:**
  - Detección automática de la zona horaria de la alumna.
  - Selección visual del bloque de clase deseado en tiempo real según cupo máximo (para garantizar atención somática personalizada).
  - Confirmación automática vía correo electrónico y recordatorio previo por WhatsApp API.

### 12.3. Fase 3: Automatización de credenciales Zoom y plataforma de membresía (Largo plazo)
- **Mecanismo:** Flujo backend automatizado mediante Webhooks (ej. Make / Zapier o Cloudflare Workers):
  - Creación y despacho inmediato de la credencial y contraseña única de Zoom tras confirmar el pago.
  - Sincronización en tiempo real de cupos y control de asistencia para preservar la intimidad y personalización de las sesiones 100% en vivo.
  - Opcional: Talleres monográficos de fin de semana en vivo y membresía mensual con pasarela de pagos integrada, manteniendo siempre el compromiso inquebrantable de privacidad y clases en directo sin distribución de grabaciones.
