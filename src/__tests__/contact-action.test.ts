import { describe, expect, it, vi, beforeEach } from "vitest";

import { submitContactLead } from "@/actions/contact";
import type { ContactFormInput } from "@/lib/validation/contact";

// Mock de fetch global
global.fetch = vi.fn();

describe("submitContactLead", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Limpiar variables de entorno
    delete process.env.LEGACY_FORM_ENDPOINT;
  });

  it("retorna éxito cuando los datos son válidos y no hay endpoint configurado", async () => {
    const validData: ContactFormInput = {
      name: "Juan Pérez",
      email: "juan@example.com",
      company: "Mi Empresa",
      projectType: "SaaS médico",
      message: "Necesito un sistema de gestión de turnos para mi clínica.",
      consent: true,
    };

    const result = await submitContactLead(validData);

    expect(result.success).toBe(true);
    expect(result.message).toContain("Gracias por escribirme");
    expect(result.fallback).toBeUndefined();
  });

  it("retorna error cuando los datos son inválidos", async () => {
    const invalidData = {
      name: "A", // Muy corto
      email: "no-es-email",
      company: "",
      projectType: "AB", // Muy corto
      message: "Corto", // Muy corto
      consent: false,
    };

    const result = await submitContactLead(invalidData as ContactFormInput);

    expect(result.success).toBe(false);
    expect(result.message).toBeTruthy();
  });

  it("intenta usar el endpoint de fallback cuando está configurado", async () => {
    const endpoint = "https://api.example.com/contact";
    process.env.LEGACY_FORM_ENDPOINT = endpoint;

    const validData: ContactFormInput = {
      name: "María García",
      email: "maria@example.com",
      company: "Startup Tech",
      projectType: "Dashboard analítico",
      message: "Queremos un dashboard para visualizar métricas de nuestro SaaS.",
      consent: true,
    };

    // Mock de respuesta exitosa
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
    });

    const result = await submitContactLead(validData);

    expect(result.success).toBe(true);
    expect(result.fallback).toBe(true);
    expect(result.message).toContain("fallback");
    expect(global.fetch).toHaveBeenCalledWith(
      endpoint,
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validData),
      })
    );
  });

  it("maneja errores del endpoint de fallback correctamente", async () => {
    const endpoint = "https://api.example.com/contact";
    process.env.LEGACY_FORM_ENDPOINT = endpoint;

    const validData: ContactFormInput = {
      name: "Carlos López",
      email: "carlos@example.com",
      company: "",
      projectType: "E-commerce",
      message: "Necesito una tienda online para mi negocio.",
      consent: true,
    };

    // Mock de respuesta con error
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const result = await submitContactLead(validData);

    // Aunque el endpoint falle, el formulario retorna éxito
    // porque el fallback se intentó (aunque falló)
    expect(result.success).toBe(true);
    expect(result.fallback).toBe(true);
  });

  it("maneja excepciones de red correctamente", async () => {
    const endpoint = "https://api.example.com/contact";
    process.env.LEGACY_FORM_ENDPOINT = endpoint;

    const validData: ContactFormInput = {
      name: "Ana Martínez",
      email: "ana@example.com",
      company: "Design Studio",
      projectType: "Landing page",
      message: "Quiero una landing page moderna para mi estudio de diseño.",
      consent: true,
    };

    // Mock de error de red
    (global.fetch as any).mockRejectedValueOnce(
      new Error("Network error")
    );

    const result = await submitContactLead(validData);

    // Cuando hay error de red, no se activa el fallback
    // pero el formulario retorna éxito de todas formas
    expect(result.success).toBe(true);
  });
});

