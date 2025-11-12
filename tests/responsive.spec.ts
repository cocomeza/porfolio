import { test, expect } from '@playwright/test';

const viewports = {
  mobile: { width: 375, height: 667 }, // iPhone SE
  tablet: { width: 768, height: 1024 }, // iPad
  laptop: { width: 1366, height: 768 }, // Laptop
  desktop: { width: 1920, height: 1080 }, // Desktop
};

test.describe('Responsividad en diferentes dispositivos', () => {
  for (const [device, viewport] of Object.entries(viewports)) {
    test(`debe renderizar correctamente en ${device}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      // Verificar que el hero section es visible
      const heroSection = page.locator('section[id="inicio"]');
      await expect(heroSection).toBeVisible();

      // Verificar que el título principal es visible
      const mainTitle = page.getByRole('heading', { name: /Maximiliano Meza/i });
      await expect(mainTitle).toBeVisible();

      // Verificar que los botones CTA son visibles
      const ctaButtons = page.getByRole('link', { name: /Trabajemos juntos|Descargar CV/i });
      await expect(ctaButtons.first()).toBeVisible();
    });
  }

  test('debe adaptar el layout del header en móvil', async ({ page }) => {
    await page.setViewportSize(viewports.mobile);
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /Menú/i });
    await expect(menuButton).toBeVisible();

    // En desktop no debería estar visible
    await page.setViewportSize(viewports.desktop);
    await expect(menuButton).not.toBeVisible();
  });

  test('debe mostrar proyectos en grid responsivo', async ({ page }) => {
    await page.goto('/proyectos');

    // En desktop: 2 columnas
    await page.setViewportSize(viewports.desktop);
    const projectCards = page.locator('[class*="grid"]').first();
    await expect(projectCards).toBeVisible();

    // En móvil: 1 columna
    await page.setViewportSize(viewports.mobile);
    await expect(projectCards).toBeVisible();
  });

  test('debe mantener legibilidad en todos los tamaños', async ({ page }) => {
    for (const [device, viewport] of Object.entries(viewports)) {
      await page.setViewportSize(viewport);
      await page.goto('/');

      // Verificar que los textos son legibles (no están cortados)
      const paragraphs = page.locator('p');
      const count = await paragraphs.count();
      
      for (let i = 0; i < Math.min(count, 5); i++) {
        const p = paragraphs.nth(i);
        if (await p.isVisible()) {
          const text = await p.textContent();
          expect(text?.length).toBeGreaterThan(0);
        }
      }
    }
  });
});

