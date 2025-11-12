export type SkillCategory = {
  title: string;
  items: { label: string; level: "Básico" | "Intermedio" | "Avanzado" }[];
  columns?: number;
};

export const skillsByCategory: SkillCategory[] = [
  {
    title: "Stack Principal",
    items: [
      { label: "Next.js 14", level: "Intermedio" },
      { label: "React", level: "Intermedio" },
      { label: "TypeScript", level: "Intermedio" },
      { label: "Supabase", level: "Intermedio" },
      { label: "Tailwind CSS", level: "Intermedio" },
      { label: "Bootstrap", level: "Básico" },
      { label: "shadcn/ui", level: "Intermedio" },
      { label: "Radix UI", level: "Intermedio" },
    ],
    columns: 2,
  },
  {
    title: "Backend y Base de Datos",
    items: [
      { label: "Node.js", level: "Básico" },
      { label: "PostgreSQL", level: "Básico" },
      { label: "MongoDB", level: "Básico" },
      { label: "MySQL", level: "Básico" },
      { label: "Express", level: "Básico" },
      { label: "REST APIs", level: "Intermedio" },
    ],
    columns: 2,
  },
  {
    title: "Tests Automatizados",
    items: [
      { label: "Playwright", level: "Básico" },
      { label: "Vitest", level: "Básico" },
      { label: "Tests E2E", level: "Básico" },
      { label: "Tests de Performance", level: "Básico" },
      { label: "Tests Visuales", level: "Básico" },
      { label: "Tests de SEO", level: "Básico" },
      { label: "Tests de Accesibilidad", level: "Básico" },
      { label: "Tests de Seguridad", level: "Básico" },
    ],
    columns: 2,
  },
  {
    title: "Herramientas y Deployment",
    items: [
      { label: "Git & GitHub", level: "Intermedio" },
      { label: "Vercel", level: "Intermedio" },
      { label: "Render", level: "Intermedio" },
      { label: "Postman", level: "Básico" },
      { label: "WordPress", level: "Básico" },
      { label: "React Hook Form", level: "Intermedio" },
      { label: "Zod", level: "Intermedio" },
    ],
    columns: 2,
  },
];


