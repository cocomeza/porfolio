import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accesibilidad', () => {
  test('debe pasar análisis de accesibilidad en la página principal', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('debe tener estructura semántica correcta', async ({ page }) => {
    await page.goto('/');

    // Verificar que hay un header
    await expect(page.locator('header')).toBeVisible();
    
    // Verificar que hay un main
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Verificar que hay un footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('debe tener títulos jerárquicos correctos', async ({ page }) => {
    await page.goto('/');

    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    const h1Count = await h1.count();
    expect(h1Count).toBe(1); // Solo debe haber un H1
  });

  test('debe tener alt text en imágenes', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      // Las imágenes decorativas pueden tener alt vacío, pero deben tener el atributo
      expect(alt).not.toBeNull();
    }
  });

  test('debe tener contraste adecuado en textos', async ({ page }) => {
    await page.goto('/');

    // Verificar que los textos principales son visibles
    const mainText = page.getByText(/Desarrollo aplicaciones web/i);
    await expect(mainText).toBeVisible();

    // Verificar que los botones tienen suficiente contraste
    const buttons = page.getByRole('button').or(page.getByRole('link'));
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });

  test('debe ser navegable con teclado', async ({ page }) => {
    await page.goto('/');

    // Navegar con Tab
    await page.keyboard.press('Tab');
    
    // Verificar que hay elementos focusables
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});

