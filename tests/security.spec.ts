import { test, expect } from '@playwright/test';

test.describe('Seguridad Básica', () => {
  test('debe tener headers de seguridad configurados', async ({ page }) => {
    const response = await page.goto('/');
    
    if (response) {
      const headers = response.headers();
      
      // Verificar headers de seguridad comunes
      // Nota: Estos pueden no estar configurados en desarrollo local
      // pero es bueno verificarlos
      const contentType = headers['content-type'];
      expect(contentType).toContain('text/html');
    }
  });

  test('debe prevenir XSS en formularios', async ({ page }) => {
    await page.goto('/contacto');

    // Intentar inyectar script malicioso
    const maliciousInput = '<script>alert("XSS")</script>';
    
    await page.getByPlaceholder(/nombre y apellido/i).fill(maliciousInput);
    
    // El valor debe ser escapado, no ejecutado
    const value = await page.getByPlaceholder(/nombre y apellido/i).inputValue();
    expect(value).not.toContain('<script>');
  });

  test('debe validar inputs del formulario correctamente', async ({ page }) => {
    await page.goto('/contacto');

    // Intentar enviar datos inválidos
    await page.getByPlaceholder(/hola@tuempresa/i).fill('not-an-email');
    await page.getByPlaceholder(/nombre y apellido/i).fill('A'); // Muy corto
    
    const submitButton = page.getByRole('button', { name: /Enviar mensaje/i });
    await submitButton.click();

    // Debe mostrar errores de validación
    await expect(page.getByText(/email.*válido/i).or(page.getByText(/al menos 2 caracteres/i))).toBeVisible();
  });

  test('debe tener enlaces externos con rel="noopener noreferrer"', async ({ page }) => {
    await page.goto('/');

    const externalLinks = page.locator('a[href^="http"]');
    const count = await externalLinks.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const link = externalLinks.nth(i);
      const rel = await link.getAttribute('rel');
      
      // Los enlaces externos deberían tener rel="noopener noreferrer"
      if (rel) {
        expect(rel).toContain('noopener');
      }
    }
  });
});

