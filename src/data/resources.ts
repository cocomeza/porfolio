export type Resource = {
  title: string;
  description: string;
  href: string;
  type: "caso de estudio" | "tutorial" | "documentación";
};

export const resources: Resource[] = [
  {
    title: "Caso de estudio: Sistema Inmobiliario",
    description:
      "Cómo diseñar un flujo de compra complejo con filtros, comparador y accesibilidad AA usando Supabase + Next.js.",
    href: "https://proyecto-inmobiliaria-demo.vercel.app/",
    type: "caso de estudio",
  },
  {
    title: "Checklist de Integración Supabase",
    description:
      "Plantilla para validar autenticación, RLS, storage y despliegues en Supabase con proyectos Next.js.",
    href: "#",
    type: "documentación",
  },
  {
    title: "Guía: Microinteracciones con Framer Motion",
    description:
      "Buenas prácticas para animaciones sutiles que refuerzan la confianza y la conversión en landings SaaS.",
    href: "#",
    type: "tutorial",
  },
  {
    title: "Playbook freelance remoto",
    description:
      "Proceso recurrente para discovery, handoff y seguimiento post-lanzamiento con clientes internacionales.",
    href: "#",
    type: "documentación",
  },
];


