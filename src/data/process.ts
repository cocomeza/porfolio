export type ProcessStep = {
  id: number;
  title: string;
  description: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Roadmap",
    description:
      "Entendemos los objetivos del SaaS, mapeamos usuarios clave y definimos métricas de éxito.",
    deliverables: [
      "Workshop inicial y análisis de stakeholders",
      "Mapa de funcionalidades priorizadas",
      "Estimación técnica y cronograma iterativo",
    ],
  },
  {
    id: 2,
    title: "Design System & Prototipo",
    description:
      "Construimos wireframes, moodboard y design system basado en shadcn/ui y Tailwind.",
    deliverables: [
      "Component library reutilizable",
      "Prototipo navegable en modo light/dark",
      "Validación de accesibilidad temprana",
    ],
  },
  {
    id: 3,
    title: "Implementación Iterativa",
    description:
      "Desarrollo incremental con Next.js App Router, Server Actions y Supabase listo para producción.",
    deliverables: [
      "Deploys continuos en Vercel",
      "Pruebas automáticas (E2E + unitarias)",
      "Documentación y handoff funcional",
    ],
  },
  {
    id: 4,
    title: "Lanzamiento & Evolución",
    description:
      "Medimos resultados, optimizamos la conversión de leads y planificamos nuevas releases.",
    deliverables: [
      "Integración de analytics y CRM",
      "Playbook de soporte y monitoreo",
      "Roadmap de mejoras basado en data",
    ],
  },
];


