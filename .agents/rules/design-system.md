# Design System Rules: Balletherapy (Warm Editorial & High-End Minimalist)

## 1. Zero Copy Changes
- Queda estrictamente prohibido alterar, resumir o eliminar cualquier texto, titular, lista, horario o pregunta existente en los componentes. Los copies deben permanecer 100% intactos.

## 2. Atmósfera Cromática y Contraste
- **Fondo base:** Lienzo lino/alabastro limpio (`#FAF7F5` o `#FDFBF7`). Erradicar fondos rosados saturados.
- **Tipografía de lectura:** Carbón/espresso profundo (`#2A2421`) para garantizar contraste WCAG AA sobre fondos claros.
- **Acentos:** Tono terracota/borgoña (`#A05255` o `#8E4A49`) exclusivo para CTAs primarios, citas destacadas y badges clave.
- **Acabado Glass:** Paneles con `bg-white/85` o `bg-white/90`, `backdrop-blur-md`, borde sutil lino (`border-[#EADFD9]`) y sombras suaves (`shadow-[0_4px_20px_rgba(0,0,0,0.03)]`).

## 3. Ortotipografía y Componentes
- Estricto Sentence Case en español (normas RAE). Cero `uppercase` innecesario en Tailwind.
- Enlaces y botones con área táctil mínima de 44x44px y respuesta háptica `active:scale-95`.
- Tarjetas y acordeones estilizados con líneas divisorias finas en lugar de contenedores toscos.
