# Especificación técnica, arquitectura y control de calidad (QA): Balletherapy

Documento maestro integral de arquitectura de software, especificación visual editorial (Warm Editorial + Soft Glass), principios de neuromarketing y psicología cognitiva, modelo operativo y comercial asistido por WhatsApp, protocolos de seguridad y privacidad ARCO, accesibilidad técnica (WCAG 2.1 AA / WAI-ARIA), estrategia SEO, analítica de conversión, optimización de rendimiento web (Core Web Vitals) y matriz de control de calidad.

Este documento constituye la **única fuente de la verdad (Single Source of Truth - SSOT)** para el producto y la plataforma web de Balletherapy.

---

## 1. Resumen ejecutivo y parámetros de negocio

Balletherapy es un método integral y santuario de bienestar concebido para la mujer contemporánea, fundado y dirigido por Elizabeth Caballero. El producto combina una landing page interactiva de alta conversión —diseñada para aliviar la carga mental, el sedentarismo laboral y el agotamiento crónico (burnout)— con un canal de atención personalizada y reserva asistida de mujer a mujer mediante WhatsApp, ofreciendo clases virtuales 100% en vivo por Zoom con atención somática personalizada y corrección postural en tiempo real.

| Parámetro del proyecto | Especificación detallada |
| :--- | :--- |
| **Nombre comercial** | Balletherapy (identidad visual editorial: Balletherapy Wellness Studio) |
| **Fundadora y directora** | Elizabeth Caballero ("Eli"), bailarina profesional y terapeuta de movimiento |
| **Propuesta de valor** | Fusión sinérgica de barre somático, journaling terapéutico y meditación aplicada para descomprimir la columna vertebral, regular el sistema nervioso y sanar el agotamiento crónico (burnout) sin estándares punitivos ni dolor. |
| **Lema principal (Hero)** | Burnout que pesa • Barre que restaura • Movimiento que serena |
| **Titular institucional** | Horas sentada. Días iguales. Balletherapy. |
| **Subtítulo axial** | El espacio donde el barre activa, el journaling libera y tu sistema nervioso se regula. |
| **Esquema de precios** | Inversión flexible: clase de prueba gratuita de bienvenida, paquetes a tu medida (combos) o pago por clase individual. Sin mensualidades forzosas ("Pagas solo lo que usas"). |
| **Público objetivo** | Mujeres de 24 a 55 años estructuradas en 3 arquetipos clave: La profesional en burnout, La joven preventiva y La madre multitarea. |
| **Pilares del método** | 1. Journaling terapéutico manuscrito (procesar el estrés y ruido mental)<br>2. Barre somático (alineación y descompresión lumbar sin impacto articular)<br>3. Meditación aplicada (regulación nerviosa y límites energéticos) |
| **Canales oficiales** | **WhatsApp oficial:** `+52 55 3913 4996` (enlace directo: `https://wa.me/525539134996`)<br>**Correo institucional:** `balletherapystudio@gmail.com`<br>**Instagram oficial:** `@balletherapy` (`https://instagram.com/balletherapy`) |
| **Plataforma y despliegue** | Single Page Application (SPA) construida en React 19 + Vite + Tailwind CSS, alojada en GitHub Pages bajo la ruta base `/balletherapy-web/` (`https://carlosvlz89.github.io/balletherapy-web/`). |

---

## 2. Identidad de marca, arquetipos y narrativa editorial

### 2.1. Propósito y valores del método
A diferencia del fitness tradicional, el ballet clásico convencional o las disciplinas de acondicionamiento físico de alto impacto, Balletherapy no persigue la flexibilidad extrema, la hipertrofia ni la pose perfecta bajo estándares punitivos. Su propósito esencial es la **reconciliación somatosensorial integral**: devolver el equilibrio biomecánico y emocional a través de la liberación de tensiones en la columna vertebral, la regulación del sistema nervioso autónomo y la reconexión consciente con el cuerpo.

### 2.2. Historia de resiliencia y voz de la fundadora
La marca está personificada y dirigida por **Elizabeth Caballero ("Eli")**, bailarina y terapeuta de movimiento. Su narrativa biográfica define el tono de comunicación:
- **Resiliencia y legitimidad orgánica:** A los 16 años enfrentó el rechazo en pruebas de ballet profesional debido a no cumplir con cánones anatómicos tradicionales ni la edad temprana exigida. Posteriormente, sufrió dos caídas graves y una hernia discal que detuvieron su práctica dancística.
- **Epifanía de sanación:** Este punto de quiebre transformó su relación con el movimiento. Comprendió que su dolor crónico de espalda no era un mero fallo mecánico, sino la somatización acumulada de exigencias emocionales y mentales. De esta experiencia nació Balletherapy.
- **Tono de voz institucional:** Cálido, compasivo, íntimo, sereno, no intimidante y editorialmente sofisticado. Trata a la usuaria de mujer a mujer, desmantelando la culpa por la falta de tiempo o la falta de flexibilidad. Nunca emplea consignas agresivas tipo "no pain no gain" ni elitismo técnico.

### 2.3. Arquetipos de usuaria y mapeo de síntomas
La segmentación se restringe a exactamente tres arquetipos representativos para evitar la sobrecarga de opciones (Ley de Hick) y maximizar la autoidentificación empática:

1. **La profesional en burnout:**
   - *Metáfora cognitiva:* "Tu cuerpo es solo un 'vehículo de productividad' que empieza a fallar."
   - *Síntomas físicos y emocionales:* Dolor crónico de espalda alta y cuello, insomnio paradójico (cansancio extremo pero mente hiperactiva en la cama), fines de semana y vacaciones utilizados exclusivamente para intentar recuperarse.
   - *Acento cromático en UI:* Terracota (`brand.primary`).
2. **La joven preventiva:**
   - *Metáfora cognitiva:* "Intentas mantener el equilibrio, pero la carga laboral siempre gana."
   - *Síntomas físicos y emocionales:* Ansiedad y fatiga visual por exposición a pantallas, comidas rápidas frente a la computadora, el concepto de "tiempo para mí" se reduce a scrollear redes sociales sin descanso real.
   - *Acento cromático en UI:* Lino neutro (`brand.linen`) con tarjeta elevada.
3. **La madre multitarea:**
   - *Metáfora cognitiva:* "Cuidas de todos menos de ti misma. Sientes que debes poder con todo."
   - *Síntomas físicos y emocionales:* Fatiga crónica acompañada de culpa por tomar pausas personales, aislamiento selectivo, sensación de vivir en piloto automático cumpliendo exigencias ajenas.
   - *Acento cromático en UI:* Borgoña profundo (`brand.secondary`).

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
- *"Horas sentada. Días iguales. Balletherapy."*
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
- **Regla de oro de Sentence Case:** En todos los titulares (`h1`, `h2`, `h3`, `h4`), botones, enlaces, descripciones, acordeones y textos legales, únicamente la letra inicial de la primera palabra debe ir en mayúscula, manteniendo en minúsculas el resto, a excepción estricta de nombres propios de personas o marcas registradas (ej. *Elizabeth Caballero*, *Zoom*, *WhatsApp*, *Balletherapy*) y acrónimos técnicos (ej. *FAQ*, *ARCO*, *CTA*, *MXN*, *SEO*, *GA4*).
- **Prohibición de `uppercase` indiscriminado:** Queda terminantemente prohibido el uso de la clase utilitaria `uppercase` de Tailwind CSS en párrafos, títulos largos o botones principales. Solo se permite en micro-etiquetas de sistema tipo badge (como *"Lunes a Viernes"* o *"Voces Reales"*) de máximo 3 palabras y tamaño no mayor a `12px` (`text-[0.65rem]` o `text-xs`) con alto interletreado (`tracking-widest`).
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
  - Marco hero de autoría: Arco superior editorial estilizado `rounded-t-[10rem] rounded-b-[2rem]` en escritorio y `rounded-t-[4rem] rounded-b-[1.5rem]` en móvil.
- **Tratamiento cromático de fotografías:** Las imágenes editoriales integran una sutil capa de mezcla `mix-blend-soft-light` con gradiente tenue de `brand-primary/10` para armonizar la temperatura de color con la atmósfera lino del lienzo.
- **Proporciones y contención de tarjetas compactas con peek affordance:**
  - *Móvil (`< md`):* Ancho contenido relativo `w-[82vw] max-w-[320px] flex-shrink-0 snap-center` con espaciado `p-6`, bordes `rounded-3xl border border-brand-linen` y estructura `flex flex-col justify-between`. Esta geometría deja entrever el borde de la tarjeta consecutiva (~18vw visible), otorgando una pista visual inmediata (peek affordance) de continuidad horizontal y previniendo el scroll vertical desmedido en teléfonos.
  - *Escritorio (`>= md`):* Cuadrícula estructurada de 3 columnas (`md:grid md:grid-cols-3 md:gap-6 md:w-auto md:max-w-none md:flex-shrink md:snap-align-none`) con alturas niveladas (`items-stretch`).
  - *Gestión de desplazamiento limpio:* Utilidades CSS `.no-scrollbar` y `.scrollbar-hide` para ocultar la barra de desplazamiento nativa sin entorpecer el swipe táctil con inercia elástica.

---

## 4. Arquitectura de la SPA y especificación de componentes

La experiencia de Balletherapy se articula como una Single Page Application (SPA) continua, estructurada en 9 componentes principales interconectados mediante desplazamiento suave por anclas:

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
- **Control reactivo de scroll:** Escucha el evento `window.scrollY > 10` para conmutar de manera suave entre dos estados:
  - *Estado superior transparente:* Contenedor ancho `max-w-6xl`, fondo limpio, logotipo con subtítulo descriptivo *"wellness studio"*. En móvil adopta una pastilla translúcida protegida (`bg-white/80 backdrop-blur-md border border-brand-linen/60 rounded-full`).
  - *Estado comprimido Soft Glass:* Cápsula flotante centrada `max-w-4xl`, fondo reforzado `bg-[#FAF7F5]/92 backdrop-blur-md border border-[#EADFD9] shadow-[0_4px_20px_rgba(42,36,33,0.06)]` y bordes redondeados (`rounded-full`), garantizando contraste cromático óptimo y nitidez sobre cualquier fotografía o bloque textual.
- **Navegación de escritorio:** Enlaces a `#inicio`, `#metodo`, `#sobre-mi`, `#testimonios`, `#faq` y botón de conversión directa *"Agendar clase"* con halo lumínico en hover.
- **Menú móvil interactivo:** Botón accesible de mínimo 44x44px con ícono de alternancia `Menu` / `X`. Despliega una cortina en pantalla completa con `backdrop-blur-xl`, enlaces de gran escala y autocierre tras pulsar una opción.

#### 2. Sección Hero (`src/sections/Hero.jsx`)
- **Halos lumínicos de atmósfera:** Círculos difusos en lino (`bg-brand-linen/40 blur-[120px]`) y terracota tenue (`bg-brand-primary/5 blur-[100px]`).
- **Jerarquía textual:** Badge institucional, titular H1 con remate en itálica terracota y subtítulo somatosensorial.
- **Marco abovedado editorial:** Arco arquitectónico (`rounded-t-[10rem] rounded-b-[2rem]` en escritorio; `rounded-t-[4rem] rounded-b-[1.5rem]` en móvil) conteniendo `hero-bg.jpg` y tarjeta flotante Soft Glass *"Tu pausa en medio del ruido"*.
- **Acciones primarias, microinteracciones y prueba social:** Botón primario *"Agendar clase de prueba"* hacia WhatsApp con desplazamiento interactivo de flecha (`group-hover:translate-x-1 duration-200`) y halo terracota (`hover:shadow-[0_4px_20px_rgba(160,82,85,0.25)] duration-300`), botón secundario *"Conocer el método"* hacia `#metodo`, y microprueba social de modalidades: *"Sesiones matutinas en vivo • Vía Zoom • Atención somática personalizada"* (en estricto Sentence Case).

#### 3. Audiencia y autoidentificación (`src/sections/TargetAudience.jsx`)
- **Layout híbrido responsivo:** Carrusel táctil horizontal en móvil (`< md`) con peek affordance (`flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 px-4 -mx-4` y tarjetas `w-[82vw] max-w-[320px] flex-shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between`), transformándose en cuadrícula rítmica de 3 columnas en escritorio (`>= md`, `md:grid md:grid-cols-3 md:gap-6`).
- Presentación secuencial de los 3 arquetipos (*La profesional en burnout*, *La joven preventiva*, *La madre multitarea*).
- Insignia superior compacta circular (`w-10 h-10 rounded-full bg-brand-linen/40 text-brand-primary`) con íconos temáticos de Lucide (`BatteryWarning`, `Smartphone`, `Clock`) en trazo fino (`strokeWidth={1.75}`).
- Lista de síntomas compacta (`space-y-2`) con tipografía `text-xs sm:text-sm text-brand-muted` y señalizadores `CheckCircle2` (`w-4 h-4 text-brand-primary`).
- Indicador visual interactivo de posición (dots/pastillas) en la parte inferior para móvil.

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
- Cuadrícula con los bloques horarios oficiales en vivo:
  - *Lunes a viernes:* `06:45 AM - 07:45 AM`, `08:00 AM - 09:00 AM`, `10:00 AM - 11:00 AM`.
  - *Sábados:* `09:00 AM - 10:00 AM`, `10:00 AM - 11:00 AM`.
- Tarjeta explicativa de la modalidad Zoom con énfasis en privacidad y presencia: *"Espacio seguro y confidencial: sesiones 100% en vivo para garantizar corrección postural en tiempo real y cuidar la privacidad de cada alumna"*, acompañada del icono `ShieldCheck`.
- Tarjeta destacada de "Inversión flexible" en gradiente terracota ("Paquetes a tu medida o pago por clase") con botón directo a WhatsApp y microinteracción táctil.

#### 8. Preguntas frecuentes (`src/sections/FAQ.jsx`)
- Acordeón interactivo con 5 preguntas frecuentes gestionado con `AnimatePresence` de Framer Motion. La pregunta 5 aborda la política de inasistencia garantizando que las sesiones son 100% en vivo para proteger la privacidad de las alumnas y permitir reagendar en otros horarios matutinos de la misma semana con aviso previo.
- **Microinteracciones y jerarquía visual:** Rotación fluida de 45° en el icono `Plus` para transformarse suavemente en aspa al expandir (`rotate: 45` con `duration: 0.25, ease: "easeInOut"`). Realce de tarjeta activa con borde terracota tenue (`border-brand-primary/30`) y sombra suave (`shadow-[0_4px_16px_rgba(160,82,85,0.06)]`).
- Enlace complementario de contacto directo a WhatsApp para resolver inquietudes particulares.

#### 9. Pie de página institucional y modal legal (`src/layout/Footer.jsx` y `src/components/ui/PrivacyModal.jsx`)
- Enlaces de navegación rápida, canales de contacto oficiales y copyright institucional.
- Disparador del modal de Aviso de Privacidad y derechos ARCO conforme a la normativa mexicana.

#### 10. Barra flotante de conversión móvil diferida (`src/components/ui/StickyCTA.jsx`)
- **Exclusividad móvil:** Barra flotante fija inferior (`md:hidden fixed bottom-4 inset-x-4 z-40`).
- **Aparición reactiva al scroll:** Condicionada con `AnimatePresence` a que el scroll supere el pliegue visual inicial (`window.scrollY >= 420`), previniendo colisión visual con el Hero.
- **Estilo Soft Glass y contenido:** Cápsula `bg-white/90 backdrop-blur-md border border-brand-linen rounded-full p-2 pl-5 flex items-center justify-between shadow-lg`, copy somatosensorial *"Tu primera sesión"* con subtítulo *"Clase de prueba gratis"*, y botón de conversión con enlace blindado a WhatsApp (`target="_blank" rel="noopener noreferrer"`), mensaje humano natural y evento de analítica GA4 (`handleWhatsAppClick('StickyCTA')`).

---

## 5. Estrategia de neuromarketing y psicología cognitiva aplicada

| Principio cognitivo | Mecanismo psicológico | Aplicación concreta en Balletherapy |
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
  <link rel="canonical" href="https://carlosvlz89.github.io/balletherapy-web/" />
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
  <title>Balletherapy | Santuario de bienestar, barre somático y regulación nerviosa</title>
  <meta name="description" content="Espacio de bienestar integral para la mujer contemporánea. Barre somático, journaling terapéutico y meditación aplicada para aliviar el burnout y cuidar tu espalda." />
  <meta name="keywords" content="balletherapy, barre somático, journaling terapéutico, meditación, burnout, dolor de espalda, bienestar femenino, clases zoom" />
  <meta name="author" content="Elizabeth Caballero" />
  ```

### 6.2. Metadatos Open Graph y Twitter Cards
Las imágenes de previsualización deben respetar la proporción 1.91:1 con resolución recomendada de **1200 x 630 píxeles** para evitar recortes indeseados en WhatsApp e Instagram:
```html
<!-- Open Graph / WhatsApp / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://carlosvlz89.github.io/balletherapy-web/" />
<meta property="og:title" content="Balletherapy | Santuario de bienestar, barre somático y regulación nerviosa" />
<meta property="og:description" content="Burnout que pesa • Barre que restaura • Movimiento que serena. Clases virtuales 100% en vivo vía Zoom con atención somática personalizada." />
<meta property="og:image" content="https://carlosvlz89.github.io/balletherapy-web/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="es_MX" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://carlosvlz89.github.io/balletherapy-web/" />
<meta name="twitter:title" content="Balletherapy | Santuario de bienestar, barre somático y regulación nerviosa" />
<meta name="twitter:description" content="Espacio donde el barre activa, el journaling libera y tu sistema nervioso se regula. Sesiones 100% en vivo vía Zoom con atención somática personalizada." />
<meta name="twitter:image" content="https://carlosvlz89.github.io/balletherapy-web/og-image.jpg" />
```

### 6.3. Marcado semántico estructurado JSON-LD (Schema.org)
Implementado en `index.html` dentro de una etiqueta `<script type="application/ld+json">` para otorgar contexto a los rastreadores:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://carlosvlz89.github.io/balletherapy-web/#business",
      "name": "Balletherapy Wellness Studio",
      "alternateName": "Balletherapy",
      "url": "https://carlosvlz89.github.io/balletherapy-web/",
      "logo": "https://carlosvlz89.github.io/balletherapy-web/logo.png",
      "image": "https://carlosvlz89.github.io/balletherapy-web/og-image.jpg",
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
        "@id": "https://carlosvlz89.github.io/balletherapy-web/#founder",
        "name": "Elizabeth Caballero",
        "jobTitle": "Terapeuta de movimiento y bailarina",
        "description": "Fundadora de Balletherapy, especialista en descompresión espinal y regulación del sistema nervioso."
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "06:45",
          "closes": "11:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "11:00"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://carlosvlz89.github.io/balletherapy-web/#course",
      "name": "Clases de barre somático y journaling Balletherapy",
      "description": "Sesiones matutinas online 100% en vivo vía Zoom con atención somática personalizada y corrección postural en tiempo real.",
      "provider": {
        "@id": "https://carlosvlz89.github.io/balletherapy-web/#business"
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

Sitemap: https://carlosvlz89.github.io/balletherapy-web/sitemap.xml
```

**Contenido de `public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://carlosvlz89.github.io/balletherapy-web/</loc>
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
| **Horarios / Inversión** | `Hola! Me gustaría inscribirme a las clases matutinas` | `https://wa.me/525539134996?text=Hola!%20Me%20gustar%C3%ADa%20inscribirme%20a%20las%20clases%20matutinas` |
| **FAQ (Dudas)** | `Hola! Tengo una duda sobre las clases de Balletherapy` | `https://wa.me/525539134996?text=Hola!%20Tengo%20una%20duda%20sobre%20las%20clases%20de%20Balletherapy` |
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
    fetchpriority="high"
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
- **Responsable del tratamiento:** Elizabeth Caballero, persona física titular de Balletherapy, con domicilio para oír y recibir notificaciones en Ciudad de México.
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

### 10.4. Resiliencia de enrutamiento estático en GitHub Pages (`404.html`)
GitHub Pages carece de reescritura nativa en el servidor para Single Page Applications. Para evitar errores 404 si el usuario accede o recarga una ruta secundaria (ej. `/balletherapy-web/reservar`), se estipula la inclusión de un archivo estático `public/404.html` que redirige el path a la raíz preservando los parámetros de búsqueda:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Balletherapy</title>
    <script>
      var pathSegmentsToKeep = 1; // Para /balletherapy-web/
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

---

## 11. Matriz de control de calidad (QA Checklist exhaustivo)

Antes de fusionar cambios a la rama principal o ejecutar `npm run deploy`, debe comprobarse el cumplimiento de los siguientes puntos:

| Módulo / Criterio | Escenario de validación | Resultado esperado |
| :--- | :--- | :--- |
| **Ortotipografía RAE** | Inspección visual y estática de todos los textos de interfaz. | Estricto Sentence Case en encabezados, botones y badges; ausencia de `uppercase` indiscriminado. |
| **Navbar flotante** | Desplazamiento vertical superando los 10px de scroll (`window.scrollY > 10`). | Transición fluida entre estado transparente y cápsula comprimida Soft Glass con borde lino. |
| **Menú móvil interactivo** | Pulsación del botón hamburguesa en pantallas menores a 768px. | Apertura a pantalla completa con `backdrop-blur-xl`, bloqueo de scroll del body (`overflow: hidden`) y cierre al tocar un enlace. |
| **Atribución WhatsApp** | Clic en botones de reserva de Hero, Horarios, FAQ y Navbar. | Apertura de enlace de WhatsApp con número internacional `+52 55 3913 4996` y parámetro de mensaje específico de la sección. |
| **Seguridad de enlaces** | Inspección de todas las etiquetas `<a>` externas. | Presencia estricta de `target="_blank"` y `rel="noopener noreferrer"`. |
| **Accesibilidad FAQ** | Navegación por teclado y prueba con lector de pantalla en el acordeón. | Botones con `aria-expanded` dinámico, paneles con `role="region"` y `aria-labelledby` correspondiente. |
| **Accesibilidad modal** | Apertura y navegación por teclado en el modal de privacidad. | Foco atrapado en el modal (Focus Trap), cierre con tecla `Escape` y retorno de foco al disparador. |
| **Rendimiento de imagen** | Inspección del elemento Hero en red móvil simulada. | Atributos `fetchpriority="high"`, `loading="eager"`, dimensiones explícitas y ausencia de CLS. |
| **SEO y metadatos** | Inspección del código fuente HTML de la página compilada. | `<html lang="es">`, canonical URL, etiquetas Open Graph 1200x630px y script JSON-LD válidos. |
| **Archivos estáticos** | Solicitud directa de `/robots.txt` y `/sitemap.xml`. | Archivos accesibles bajo la ruta base con referencias absolutas correctas. |
| **Compilación Vite** | Ejecución de `npm run build` en la terminal. | Generación limpia de la carpeta `dist/` con código de salida `0` y cero errores de TypeScript/Linter. |
| **Ruta base GitHub Pages** | Carga del sitio en `http://localhost:5173/balletherapy-web/` o servidor remoto. | Resolución correcta de todos los activos estáticos sin errores 404 en scripts o imágenes. |

---

## 12. Roadmap y escalabilidad operativa

La evolución tecnológica del ecosistema Balletherapy se estructura en tres fases progresivas:

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
