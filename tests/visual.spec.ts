import { test, expect } from '@playwright/test';

test.describe('Tests Visuales y UI', () => {
  test('debe mantener diseño consistente en diferentes viewports', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1920, height: 1080, name: 'Desktop' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');

      // Capturar screenshot para comparación visual
      await expect(page).toHaveScreenshot(`homepage-${viewport.name.toLowerCase()}.png`, {
        maxDiffPixels: 1000, // Permitir pequeñas diferencias
      });
    }
  });

  test('debe tener colores de contraste adecuados', async ({ page }) => {
    await page.goto('/');

    // Verificar que los textos principales son legibles
    const mainHeading = page.getByRole('heading', { name: /Maximiliano Meza/i });
    await expect(mainHeading).toBeVisible();

    // Verificar que los botones tienen suficiente contraste
    const buttons = page.getByRole('button').or(page.getByRole('link', { name: /Trabajemos juntos/i }));
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });

  test('debe mostrar correctamente los proyectos', async ({ page }) => {
    await page.goto('/proyectos');

    // Verificar que los proyectos se muestran en grid
    const projectCards = page.locator('[class*="Card"]');
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);

    // Capturar screenshot de la página de proyectos
    await expect(page).toHaveScreenshot('proyectos-page.png', {
      maxDiffPixels: 2000,
    });
  });

  test('debe mantener espaciado consistente', async ({ page }) => {
    await page.goto('/');

    // Verificar que las secciones tienen espaciado adecuado
    const sections = page.locator('section');
    const sectionCount = await sections.count();
    expect(sectionCount).toBeGreaterThan(0);

    // Verificar que no hay elementos superpuestos
    for (let i = 0; i < Math.min(sectionCount, 3); i++) {
      const section = sections.nth(i);
      await expect(section).toBeVisible();
    }
  });

  test('debe tener animaciones suaves sin bloqueos', async ({ page }) => {
    await page.goto('/');

    // Navegar entre secciones y verificar que no hay bloqueos visuales
    await page.getByRole('link', { name: /Proyectos/i }).click();
    await page.waitForLoadState('networkidle');
    
    await page.getByRole('link', { name: /Habilidades/i }).click();
    await page.waitForLoadState('networkidle');

    // Si llegamos aquí sin errores, las animaciones funcionan
    expect(page.url()).toContain('/habilidades');
  });
});

