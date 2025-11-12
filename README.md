# Mi portfolio como Botón Creativo

Construí este portfolio desde cero con el stack que hoy uso en mis proyectos SaaS. Está hecho con Next.js 14 y reúne todo lo que necesito para mostrar mi propuesta, los servicios que ofrezco y los proyectos en los que trabajé.

## Qué vas a encontrar adentro
- Secciones pensadas como landing completa: hero, servicios, proyectos, proceso de trabajo, testimonios, recursos y un contacto listo para captar leads.
- Dark/light mode, animaciones suaves con Framer Motion y componentes reutilizables armados con shadcn/ui y Radix UI.
- Formulario de contacto validado con React Hook Form + Zod y ejecutado con Server Actions. Lo configuré para que puedas enviarme el mensaje a través de un endpoint externo (Formspree/Netlify u otro) sin mantener una base de datos propia.
- Tests rápidos con Vitest para asegurar que el esquema del formulario no se rompa cuando itero.

## Stack que elegí
- **Frontend:** Next.js 14 (App Router), React 18, TypeScript.
- **UI:** Tailwind CSS, shadcn/ui, Radix UI, lucide-react, Framer Motion.
- **Estado y utilidades:** TanStack Query, next-themes, tailwind-merge.
- **Forms & data:** React Hook Form, Zod, envío mediante endpoint externo configurable.
- **Testing:** Vitest.

## Cómo está organizado
```
src/
  actions/        # Server Actions (contacto y futuros endpoints)
  app/            # layout, página principal y estilos globales
  components/     # providers, layout, secciones y UI reutilizable
  data/           # contenido editable: servicios, proyectos, métricas...
  lib/            # clientes y utilidades
  __tests__/      # pruebas con Vitest
```
Cada sección del sitio vive en `src/components/sections`, y todo el copy se centralizó en `src/data` para que cambies texto/links rápido.

## Cómo lo levanto
1. Instalo dependencias:
   ```bash
   npm install
   ```
2. Levanto el entorno con:
   ```bash
   npm run dev
   ```
   El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

Si quiero que el formulario envíe los mensajes automáticamente, defino una URL en la variable `LEGACY_FORM_ENDPOINT` (por ejemplo, un endpoint de Formspree, Netlify Forms o cualquier servicio que me reenvíe el correo).

## Scripts que uso a diario
- `npm run dev`: modo desarrollo.
- `npm run build` y `npm run start`: build y server de producción.
- `npm run lint`: chequeo de ESLint/Next.
- `npm run test`, `npm run test:watch`, `npm run test:ci`: pruebas con Vitest (en CI genera cobertura).
- `npm run test:e2e`: tests E2E con Playwright (todos los navegadores).
- `npm run test:e2e:chromium`, `test:e2e:firefox`, `test:e2e:edge`: tests en navegador específico.
- `npm run test:e2e:ui`: tests con UI interactiva de Playwright.
- `npm run deploy`: build listo para subir a Vercel.

## Pruebas
- **Tests unitarios:** Vitest para validar esquemas y lógica (`src/__tests__/`)
- **Tests E2E:** Playwright para tests end-to-end en múltiples navegadores (`tests/`)
  - Tests de navegación, responsividad, formularios
  - Tests de accesibilidad (WCAG), performance, SEO
  - Tests visuales y de seguridad
  - Soporta Chromium, Firefox, Edge y dispositivos móviles

## Personalizarlo
- Edito los textos, métricas y links en `src/data`.
- Ajusto estilos globales o la paleta en `src/app/globals.css`.
- Cada sección tiene su propio componente, así que puedo agregar o quitar bloques sin perder consistencia.

## Despliegue
Está pensado para Vercel: conecto el repo, cargo `LEGACY_FORM_ENDPOINT` si quiero que el formulario envíe correos automáticamente y hago deploy. También puedo sacar un artefacto de Docker si lo necesito, pero Vercel es el camino más directo.

---
Creado por mí, Botón Creativo. Si querés charlar sobre proyectos SaaS, dashboards u otras soluciones a medida, el formulario de contacto ya está listo para empezar la conversación.
