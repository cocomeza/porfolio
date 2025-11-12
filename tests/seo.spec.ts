import { test, expect } from '@playwright/test';

test.describe('SEO y Meta Tags', () => {
  test('debe tener título único en cada página', async ({ page }) => {
    const pages = [
      { path: '/', expectedTitle: /Maximiliano Meza/i },
      { path: '/sobre-mi', expectedTitle: /Sobre mí/i },
      { path: '/proyectos', expectedTitle: /Proyectos/i },
      { path: '/habilidades', expectedTitle: /Habilidades/i },
      { path: '/contacto', expectedTitle: /Contacto/i },
    ];

    for (const { path, expectedTitle } of pages) {
      await page.goto(path);
      const title = await page.title();
      expect(title).toMatch(expectedTitle);
      expect(title.length).toBeGreaterThan(0);
      expect(title.length).toBeLessThan(60); // Títulos no deberían ser muy largos
    }
  });

  test('debe tener meta description en la página principal', async ({ page }) => {
    await page.goto('/');
    
    const metaDescription = page.locator('meta[name="description"]');
    const description = await metaDescription.getAttribute('content');
    
    expect(description).toBeTruthy();
    expect(description?.length).toBeGreaterThan(50);
    expect(description?.length).toBeLessThan(160); // Meta descriptions óptimas
  });

  test('debe tener estructura semántica HTML5', async ({ page }) => {
    await page.goto('/');

    // Verificar elementos semánticos
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Verificar que hay al menos un h1
    const h1 = page.locator('h1');
    await expect(h1.first()).toBeVisible();
  });

  test('debe tener enlaces internos con texto descriptivo', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a[href^="/"]');
    const count = await links.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      
      // Los enlaces internos deben tener texto descriptivo
      if (href && href !== '/' && text) {
        expect(text.trim().length).toBeGreaterThan(0);
      }
    }
  });

  test('debe tener Open Graph tags configurados', async ({ page }) => {
    await page.goto('/');

    const ogTitle = page.locator('meta[property="og:title"]');
    const ogDescription = page.locator('meta[property="og:description"]');
    
    const title = await ogTitle.getAttribute('content');
    const description = await ogDescription.getAttribute('content');
    
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});

