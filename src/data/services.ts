import { Code, Layout, Zap, Database, Smartphone, Search } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  outcomes: string[];
};

export const services: Service[] = [
  {
    title: "Desarrollo Full Stack",
    description:
      "Construyo aplicaciones web completas desde cero hasta producción, usando Next.js, React y TypeScript.",
    icon: Code,
    outcomes: [
      "Aplicaciones escalables y mantenibles",
      "Código limpio y bien documentado",
      "Integración con APIs y bases de datos",
      "Deploy automatizado y CI/CD",
    ],
  },
  {
    title: "Diseño de Interfaces",
    description:
      "Diseño interfaces modernas y responsivas que mejoran la experiencia del usuario y aumentan la conversión.",
    icon: Layout,
    outcomes: [
      "Diseños responsivos para todos los dispositivos",
      "Componentes reutilizables y consistentes",
      "Microinteracciones que mejoran la UX",
      "Accesibilidad WCAG 2.1 AA",
    ],
  },
  {
    title: "Optimización de Performance",
    description:
      "Optimizo aplicaciones para que carguen rápido y funcionen de manera eficiente, mejorando métricas clave.",
    icon: Zap,
    outcomes: [
      "Tiempos de carga optimizados",
      "Mejora en Core Web Vitals",
      "Optimización de imágenes y assets",
      "Lazy loading y code splitting",
    ],
  },
  {
    title: "Backend y Bases de Datos",
    description:
      "Diseño y desarrollo de APIs RESTful, integración con bases de datos y servicios de terceros.",
    icon: Database,
    outcomes: [
      "APIs REST bien estructuradas",
      "Integración con Supabase/PostgreSQL",
      "Autenticación y autorización segura",
      "Optimización de consultas",
    ],
  },
  {
    title: "Aplicaciones Móviles Responsivas",
    description:
      "Desarrollo aplicaciones web que funcionan perfectamente en móviles, tablets y desktop.",
    icon: Smartphone,
    outcomes: [
      "Diseño mobile-first",
      "Experiencia optimizada para touch",
      "Progressive Web Apps (PWA)",
      "Testing en múltiples dispositivos",
    ],
  },
  {
    title: "SEO y Optimización",
    description:
      "Implemento mejores prácticas de SEO para que tu aplicación sea encontrada y rankee bien en buscadores.",
    icon: Search,
    outcomes: [
      "Meta tags y estructura semántica",
      "Sitemap y robots.txt",
      "Open Graph y Twitter Cards",
      "Performance y Core Web Vitals",
    ],
  },
];

