export type ProjectCategory = "destacado" | "legacy";

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  year: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "iglesia-puerta-de-salvacion",
    title: "Iglesia Puerta de Salvación",
    subtitle: "Landing responsive con agenda de actividades",
    year: "2025",
    category: "destacado",
    description:
      "Sitio informativo con secciones dinámicas y recursos descargables para una comunidad religiosa local.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "https://iglesiapuertadesalvacion.onrender.com",
  },
  {
    slug: "huerta-comunitaria-vr",
    title: "Huerta Comunitaria Villa Ramallo",
    subtitle: "Portal para convocar voluntarios",
    year: "2025",
    category: "destacado",
    description:
      "Diseñé un sitio claro para comunicar actividades, sumar colaboradores y compartir novedades con la comunidad.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "https://huertacomunitaria-vr.onrender.com",
  },
  {
    slug: "medical-appointments",
    title: "Turnos Médicos Villa Ramallo",
    subtitle: "Agenda digital para centros de salud",
    year: "2025",
    category: "destacado",
    description:
      "Sistema de reservas con panel de administración, recordatorios por correo y estadísticas rápidas para cada consultorio.",
    tags: ["Next.js 14", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    demoUrl: "https://turnosmedicos-vr.vercel.app/",
    codeUrl: "https://github.com/botoncreativo/turnosmedicos-vr",
  },
  {
    slug: "estetica-integral",
    title: "Estética Integral",
    subtitle: "Gestión de turnos y comunicación personalizada",
    year: "2025",
    category: "destacado",
    description:
      "Landing y panel privado para una marca de estética con formularios validados, agenda protegida y automatización de correos.",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://esteticaintegral.vercel.app/",
    codeUrl: "https://github.com/botoncreativo/esteticaintegral",
  },
  {
    slug: "zingarito-kids",
    title: "Zingarito Kids Mayorista",
    subtitle: "E-commerce B2B con catálogo filtrable",
    year: "2025",
    category: "destacado",
    description:
      "Implementé un catálogo mayorista con acceso privado, carrito persistente y tablero para gestión de pedidos y clientes.",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://tiendaderopazingaritokidsmayorista.vercel.app/",
    codeUrl: "https://github.com/botoncreativo/tiendaderopazingaritokids",
  },
  {
    slug: "proyecto-inmobiliaria",
    title: "Sistema de Gestión Inmobiliaria",
    subtitle: "Catálogo dinámico y panel administrativo",
    year: "2025",
    category: "destacado",
    description:
      "Aplicación full stack con filtros avanzados, favoritos y espacio privado para agentes. Optimicé tiempos de búsqueda y cargas editoriales para la inmobiliaria.",
    tags: ["Next.js 14", "React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://proyecto-inmobiliaria-demo.vercel.app/",
    codeUrl: "https://github.com/botoncreativo/proyecto-inmobiliaria-demo",
  },
];


