import { describe, expect, it } from "vitest";

import { contactFormSchema } from "@/lib/validation/contact";

describe("contactFormSchema", () => {
  it("valida correctamente un payload completo", () => {
    const payload = {
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines",
      projectType: "SaaS médico",
      message: "Necesitamos automatizar la gestión de turnos y reportes.",
      consent: true,
    };

    const result = contactFormSchema.safeParse(payload);
    expect(result.success).toBe(true);
  });

  it("falla cuando falta el consentimiento", () => {
    const payload = {
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines",
      projectType: "SaaS médico",
      message: "Necesitamos automatizar la gestión de turnos y reportes.",
      consent: false,
    };

    const result = contactFormSchema.safeParse(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(/consentimiento/i);
    }
  });

  it("falla cuando el email no es válido", () => {
    const payload = {
      name: "Ada Lovelace",
      email: "no-es-un-email",
      company: "",
      projectType: "SaaS inmobiliario",
      message: "Queremos optimizar el funnel de propiedades destacadas.",
      consent: true,
    };

    const result = contactFormSchema.safeParse(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(/email/i);
    }
  });
});


