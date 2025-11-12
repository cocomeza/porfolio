export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Próximo cliente",
    role: "CEO",
    company: "Startup SaaS",
    quote:
      "Integra tus testimonios desde Supabase para potenciar la credibilidad. El componente ya está listo para recibir data dinámica.",
    project: "Testimonios dinámicos",
  },
  {
    name: "Equipo de Producto",
    role: "Product Manager",
    company: "Scale-up remoto",
    quote:
      "Botón Creativo transformó nuestra plataforma con procesos reproducibles y lanzamientos continuos. Métricas claras en cada iteración.",
    project: "Sistema de Gestión Inmobiliaria",
  },
  {
    name: "Directora de Estética Integral",
    role: "Fundadora",
    company: "Estética Integral",
    quote:
      "Todo el ciclo de turnos quedó automatizado con notificaciones y reporting. La plataforma es intuitiva para todo el equipo.",
    project: "Estética Integral",
  },
];


