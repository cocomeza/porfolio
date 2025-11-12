"use server";

import { contactFormSchema, type ContactFormInput } from "@/lib/validation/contact";

type ContactFormResponse = {
  success: boolean;
  message: string;
  fallback?: boolean;
};

async function deliverFallback(payload: ContactFormInput) {
  const endpoint = process.env.LEGACY_FORM_ENDPOINT;
  if (!endpoint) {
    return false;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn(
        "[submitContactLead] Fallback endpoint respondió con estado",
        response.status
      );
    }

    return true;
  } catch (error) {
    console.error("[submitContactLead] Error al utilizar el fallback:", error);
    return false;
  }
}

export async function submitContactLead(
  data: ContactFormInput
): Promise<ContactFormResponse> {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message:
        parsed.error.issues[0]?.message ??
        "Revisá el formulario, hay campos con errores.",
    };
  }

  const fallbackTriggered = await deliverFallback(parsed.data);

  if (fallbackTriggered) {
    return {
      success: true,
      fallback: true,
      message:
        "Gracias por tu mensaje. Lo recibí mediante el endpoint de fallback y te voy a responder por mail.",
    };
  }

  return {
    success: true,
    message:
      "¡Gracias por escribirme! Revisá tu correo, te voy a responder a la brevedad desde boton.creativo.ar@gmail.com.",
  };
}


