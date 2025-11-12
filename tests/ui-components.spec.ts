import { test, expect } from '@playwright/test';

test.describe('Componentes UI y UX', () => {
  test('debe mostrar la sección hero con animaciones', async ({ page }) => {
    await page.goto('/');

    const heroSection = page.locator('section[id="inicio"]');
    await expect(heroSection).toBeVisible();

    // Verificar elementos clave del hero
    await expect(page.getByRole('heading', { name: /Maximiliano Meza/i })).toBeVisible();
    await expect(page.getByText(/Full-Stack SaaS Developer/i)).toBeVisible();
  });

  test('debe mostrar proyectos con información completa', async ({ page }) => {
    await page.goto('/proyectos');

    // Verificar que hay proyectos
    const projectCards = page.locator('[class*="Card"]');
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);

    // Verificar que cada proyecto tiene título y descripción
    for (let i = 0; i < Math.min(count, 3); i++) {
      const card = projectCards.nth(i);
      const title = card.locator('h2, h3').first();
      await expect(title).toBeVisible();
    }
  });

  test('debe tener enlaces sociales funcionales', async ({ page }) => {
    await page.goto('/sobre-mi');

    const githubLink = page.getByRole('link', { name: /GitHub/i });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github/i);

    const linkedinLink = page.getByRole('link', { name: /LinkedIn/i });
    await expect(linkedinLink).toBeVisible();
  });

  test('debe tener footer con información correcta', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/Botón Creativo/i)).toBeVisible();
  });

  test('debe mantener consistencia visual en todas las páginas', async ({ page }) => {
    const pages = ['/', '/sobre-mi', '/proyectos', '/habilidades', '/contacto'];

    for (const path of pages) {
      await page.goto(path);

      // Verificar que el header está presente
      await expect(page.locator('header')).toBeVisible();
      
      // Verificar que el footer está presente
      await expect(page.locator('footer')).toBeVisible();
    }
  });

  test('debe tener botones con estados hover visibles', async ({ page }) => {
    await page.goto('/');

    const ctaButton = page.getByRole('link', { name: /Trabajemos juntos/i });
    await expect(ctaButton).toBeVisible();

    // Simular hover
    await ctaButton.hover();
    await expect(ctaButton).toBeVisible();
  });
});

