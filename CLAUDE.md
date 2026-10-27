@AGENTS.md

# Placely: lineamientos del proyecto


## Forma de trabajo

- Cambios chicos: un componente o una página por paso. `npm run lint` y `npm run build` tienen que pasar al terminar cada paso.
- Foco actual: diseño. No cambies rutas, datos ni lógica existente salvo que el markup lo exija o Pam lo pida.
- No crees componentes, props ni utilidades genéricas "por si acaso". Extraé un componente solo cuando se repite.
- Antes de usar una API de Next, leé el doc puntual en `node_modules/next/dist/docs/` (no explores `node_modules` en general).
- Los mockups de `redesign/mockups/` son referencia visual. No copies su HTML inline ni los releas enteros: los tokens de abajo alcanzan. Abrí solo la sección que necesites.

## Estilos

- Sass Modules: `X.tsx` + `X.module.scss` en la misma carpeta, `import styles from "./X.module.scss"`. Para páginas: `page.module.scss` junto al `page.tsx`.
- Prohibido: utilidades de Tailwind, `style={{...}}` y CSS-in-JS.
- Clases en camelCase (`.cardTitle` → `styles.cardTitle`). Estados como clase extra (`styles.navLinkActive`) o con los `data-state` de Radix.
- Nada de hex ni medidas de diseño sueltas en los módulos: usá `@use "@/styles/mixins" as *;` (que reexporta los tokens) o las variables CSS de `:root`.
- Estilos globales solo en `styles/globals.scss` (reset, `:root`, tipografía base, `.srOnly`).

## Tokens

| Token                      | Valor                                                                      |
| -------------------------- | -------------------------------------------------------------------------- |
| ink (texto y botón oscuro) | `#0B0F14`                                                                  |
| ground (fondo de página)   | `#F5F6F8`                                                                  |
| surface (cards)            | `#FFFFFF`                                                                  |
| line (bordes 1px)          | `#E6E8EC`                                                                  |
| line-strong (inputs)       | `#D6DAE1`                                                                  |
| muted (texto secundario)   | `#5B6472`                                                                  |
| chip (pill activa)         | `#EEF0F4`                                                                  |
| accent                     | `#2447F5` (vive en `--accent`)                                             |
| radios                     | 14 inputs · 18-20 tiles · 22 imagen de card · 28 cards · 999 pills/botones |
| contenedor                 | max 1280px, padding lateral 24px                                           |

Tipografía: Manrope 800 para títulos y precios (letter-spacing -0.02em a -0.035em), Inter 400-600 para el cuerpo. Hero h1 64px, h2 de sección 36px, título y precio de card 18px.

## UI

- Iconos con `react-icons` (preferir sets de trazo fino: `lu`, `fi`). No pegues SVG inline.
- Imágenes reales de `public/` y `assets/`, con `next/image`.
- Menús y dialogs accesibles con Radix (`radix-ui`), sin estilos propios de la librería.
- Accesibilidad: objetivos táctiles de al menos 44px, `:focus-visible` visible, labels reales en formularios.
- Responsive hasta mobile (~375px) sin scroll horizontal.
- Marca: "Placely".
