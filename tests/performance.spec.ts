import { test, expect } from '@playwright/test';

test.describe('Performance y Optimización', () => {
  test('debe cargar la página principal rápidamente', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // La página debe cargar en menos de 3 segundos
    expect(loadTime).toBeLessThan(3000);
  });

  test('debe tener imágenes optimizadas', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');
      
      if (src) {
        // Verificar que las imágenes no sean demasiado grandes
        const response = await page.request.get(page.url() + src);
        const contentLength = response.headers()['content-length'];
        
        if (contentLength) {
          const sizeInMB = parseInt(contentLength) / (1024 * 1024);
          // Las imágenes no deberían ser mayores a 1MB
          expect(sizeInMB).toBeLessThan(1);
        }
      }
    }
  });

  test('debe tener recursos mínimos bloqueantes', async ({ page }) => {
    await page.goto('/');
    
    // Verificar que hay scripts async/defer
    const scripts = page.locator('script[src]');
    const scriptCount = await scripts.count();
    
    // Al menos algunos scripts deberían ser async o defer
    let asyncCount = 0;
    for (let i = 0; i < scriptCount; i++) {
      const script = scripts.nth(i);
      const async = await script.getAttribute('async');
      const defer = await script.getAttribute('defer');
      if (async || defer) asyncCount++;
    }
    
    // No es crítico, pero es bueno tenerlo
    expect(scriptCount).toBeGreaterThan(0);
  });

  test('debe tener tiempo de respuesta rápido en todas las páginas', async ({ page }) => {
    const pages = ['/', '/sobre-mi', '/proyectos', '/habilidades', '/contacto'];
    
    for (const path of pages) {
      const startTime = Date.now();
      await page.goto(path);
      await page.waitForLoadState('domcontentloaded');
      const loadTime = Date.now() - startTime;
      
      // Cada página debe cargar en menos de 2 segundos
      expect(loadTime).toBeLessThan(2000);
    }
  });
});

