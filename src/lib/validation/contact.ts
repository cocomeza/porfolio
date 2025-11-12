import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Necesito tu nombre para responderte." })
    .min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z
    .string({ required_error: "Necesito tu email de contacto." })
    .email("El email no tiene un formato válido."),
  company: z
    .string()
    .max(80, "El nombre de la empresa debe ser más corto.")
    .optional()
    .or(z.literal("")),
  projectType: z
    .string({ required_error: "Indicá el tipo de proyecto." })
    .min(3, "El tipo de proyecto debe tener al menos 3 caracteres."),
  message: z
    .string({ required_error: "Contame qué necesitás." })
    .min(10, "El mensaje debe ser más descriptivo.")
    .max(1000, "El mensaje debe ser más corto."),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Necesito tu consentimiento para gestionar tus datos.",
    }),
  }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

