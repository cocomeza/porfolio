"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const softSkills = [
  "Comunicación clara y cercana",
  "Pensamiento creativo",
  "Empatía y escucha activa",
  "Adaptabilidad",
  "Trabajo en equipo",
  "Gestión integral de contenido",
  "Optimización visual y funcional",
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="border-t-2 bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid gap-8 p-8 lg:grid-cols-[220px_1fr] lg:gap-12 lg:p-12">
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-blue-200 shadow-lg sm:h-40 sm:w-40">
                <Image
                  src="/foto-hero.jpeg"
                  alt="Maximiliano Meza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Desarrollador Web Full Stack Freelance
                </h2>
                <p className="text-sm text-gray-600">
                  Creación de contenidos para redes sociales · Técnico en Turismo y
                  Hotelería
                </p>
              </div>
            </div>
            <div className="space-y-6 text-base leading-7 text-gray-600">
              <p>
                ¡Hola! Soy Maximiliano Meza, desarrollador web full stack con sólida
                base en frontend y backend. Me especializo en construir aplicaciones
                web modernas usando <strong className="font-bold text-blue-600">Next.js 14</strong>,{" "}
                <strong className="font-bold text-blue-600">React</strong>,{" "}
                <strong className="font-bold text-blue-600">TypeScript</strong> y{" "}
                <strong className="font-bold text-blue-600">Supabase</strong>, con{" "}
                <strong className="font-bold text-blue-600">Tailwind CSS</strong>,{" "}
                <strong className="font-bold text-blue-600">shadcn/ui</strong> y{" "}
                <strong className="font-bold text-blue-600">Radix UI</strong> para interfaces
                profesionales y responsivas.
              </p>
              <p>
                Tengo experiencia práctica creando proyectos completos para clientes
                reales: sistemas de gestión inmobiliaria, plataformas de turnos
                médicos, e-commerce B2B y sitios web institucionales. Cada proyecto
                está en producción y resuelve problemas concretos de negocio.
              </p>
              <p>
                Complemento mi formación técnica (Diplomaturas en Desarrollo Web
                Frontend y Backend de UNTREF) con capacitación constante en QA y
                automatización. También tengo conocimientos básicos en{" "}
                <strong className="font-bold text-blue-600">WordPress</strong> a través de cursos
                especializados. Soy proactivo, autodidacta y orientado a la mejora
                continua, buscando incorporarme a equipos donde pueda seguir
                creciendo y aportar con tecnologías modernas.
              </p>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Mis focos principales
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border-2 border-blue-100 bg-blue-50/50 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                <span className="text-gray-500">Encontrame en:</span>
                <Link
                  href="https://www.linkedin.com/in/maxi-meza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/cocomeza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.instagram.com/boton.creativo.ar?igsh=c3NhZXV0OHMwNW81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


