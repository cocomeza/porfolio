import { test, expect } from '@playwright/test';

test.describe('Formulario de contacto', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contacto');
  });

  test('debe mostrar todos los campos del formulario', async ({ page }) => {
    await expect(page.getByText(/Nombre/i)).toBeVisible();
    await expect(page.getByText(/Email/i)).toBeVisible();
    await expect(page.getByText(/Empresa/i)).toBeVisible();
    await expect(page.getByText(/Tipo de proyecto/i)).toBeVisible();
    await expect(page.getByText(/Mensaje/i)).toBeVisible();
    await expect(page.getByText(/consentimiento/i)).toBeVisible();
  });

  test('debe validar campos requeridos', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /Enviar mensaje/i });
    await submitButton.click();

    // Debe mostrar errores de validación
    await expect(page.getByText(/Necesito tu nombre/i).or(page.getByText(/al menos 2 caracteres/i))).toBeVisible();
  });

  test('debe validar formato de email', async ({ page }) => {
    await page.getByPlaceholder(/nombre y apellido/i).fill('Test User');
    await page.getByPlaceholder(/hola@tuempresa/i).fill('email-invalido');
    await page.getByPlaceholder(/SaaS, dashboard/i).fill('SaaS');
    await page.getByPlaceholder(/contexto, deadlines/i).fill('Este es un mensaje de prueba para validar el formulario.');

    const submitButton = page.getByRole('button', { name: /Enviar mensaje/i });
    await submitButton.click();

    await expect(page.getByText(/email.*válido/i).or(page.getByText(/formato válido/i))).toBeVisible();
  });

  test('debe requerir consentimiento para enviar', async ({ page }) => {
    await page.getByPlaceholder(/nombre y apellido/i).fill('Test User');
    await page.getByPlaceholder(/hola@tuempresa/i).fill('test@example.com');
    await page.getByPlaceholder(/SaaS, dashboard/i).fill('SaaS');
    await page.getByPlaceholder(/contexto, deadlines/i).fill('Este es un mensaje de prueba para validar el formulario.');

    // Desactivar el switch de consentimiento (está checked por defecto)
    const consentSwitch = page.getByRole('switch');
    const isChecked = await consentSwitch.isChecked();
    if (isChecked) {
      await consentSwitch.click();
    }
    await expect(consentSwitch).not.toBeChecked();

    const submitButton = page.getByRole('button', { name: /Enviar mensaje/i });
    await submitButton.click();

    await expect(page.getByText(/consentimiento/i).or(page.getByText(/Necesito tu consentimiento/i))).toBeVisible();
  });

  test('debe funcionar correctamente en móvil', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    await expect(page.getByText(/Nombre/i)).toBeVisible();
    await expect(page.getByText(/Email/i)).toBeVisible();
    
    // Verificar que los campos son accesibles
    await page.getByPlaceholder(/nombre y apellido/i).fill('Test Mobile');
    await expect(page.getByPlaceholder(/nombre y apellido/i)).toHaveValue('Test Mobile');
  });
});

