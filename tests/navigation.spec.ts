import { test, expect } from '@playwright/test';

test.describe('Navegación del sitio', () => {
  test('debe cargar la página principal correctamente', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Maximiliano Meza/);
  });

  test('debe navegar a todas las secciones desde el header', async ({ page }) => {
    await page.goto('/');
    
    // Verificar que el header está visible
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Navegar a cada sección
    const navItems = [
      { label: 'Inicio', href: '/' },
      { label: 'Sobre mí', href: '/sobre-mi' },
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Habilidades', href: '/habilidades' },
      { label: 'Contacto', href: '/contacto' },
    ];

    for (const item of navItems) {
      const link = page.getByRole('link', { name: item.label });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(new RegExp(item.href === '/' ? '/$' : item.href));
    }
  });

  test('debe tener enlace de descarga de CV visible', async ({ page }) => {
    await page.goto('/');
    const cvLink = page.getByRole('link', { name: /Descargar CV/i });
    await expect(cvLink).toBeVisible();
    await expect(cvLink).toHaveAttribute('href', '/Maximiliano_Meza_CV.Dev.pdf');
  });

  test('debe tener menú móvil funcional', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');
    
    const menuButton = page.getByRole('button', { name: /Menú/i });
    await expect(menuButton).toBeVisible();
    
    await menuButton.click();
    
    // Verificar que el menú móvil se abre
    const mobileNav = page.locator('nav').filter({ hasText: 'Inicio' });
    await expect(mobileNav).toBeVisible();
  });
});

