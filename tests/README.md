# Tests E2E con Playwright

Tests automatizados de QA/QC para verificar UX/UI y responsividad en diferentes navegadores y dispositivos.

## Navegadores soportados
- Chromium
- Firefox  
- Microsoft Edge
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)
- Tablet (iPad Pro)

## Ejecutar tests

```bash
# Instalar dependencias (solo la primera vez)
npm install
npx playwright install --with-deps chromium firefox msedge

# Ejecutar todos los tests
npm run test:e2e

# Ejecutar en un navegador específico
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:edge

# Ejecutar con UI interactiva
npm run test:e2e:ui

# Ver reporte HTML
npm run test:e2e:report
```

## Estructura de tests

- `navigation.spec.ts` - Navegación y estructura básica
- `responsive.spec.ts` - Responsividad en diferentes dispositivos
- `contact-form.spec.ts` - Validación del formulario de contacto
- `accessibility.spec.ts` - Tests de accesibilidad (WCAG)
- `ui-components.spec.ts` - Componentes UI y consistencia visual
- `performance.spec.ts` - Tests de performance y optimización
- `seo.spec.ts` - Tests de SEO y meta tags
- `visual.spec.ts` - Tests visuales con screenshots comparativos
- `security.spec.ts` - Tests básicos de seguridad

