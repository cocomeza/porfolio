"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects, Project } from "@/data/projects";

export function ProjectsSection() {
  const proyectosClientes = projects.filter((project) => project.category === "destacado");

  return (
    <section id="proyectos" className="border-t bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container space-y-12 px-4 sm:px-6">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Proyectos a clientes
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Plataformas y aplicaciones SaaS que desarrollé para clientes reales, usando
            Next.js 14, React, TypeScript y Supabase. Cada proyecto está en producción
            y resuelve problemas concretos de negocio.
          </p>
        </div>

        <ProjectGrid projects={proyectosClientes} />
      </div>
    </section>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Card className="group flex h-full flex-col overflow-hidden border-2 border-gray-200 bg-white shadow-md transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
            <CardHeader className="space-y-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {project.year}
                </p>
                {project.category === "destacado" && (
                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    Destacado
                  </span>
                )}
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 sm:text-2xl">
                {project.title}
              </CardTitle>
              {project.subtitle && (
                <CardDescription className="text-base font-medium text-gray-600">
                  {project.subtitle}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-1 space-y-4 p-6">
              <p className="text-sm leading-7 text-gray-600">{project.description}</p>
            </CardContent>
            <CardFooter className="mt-auto flex flex-wrap gap-3 border-t-2 border-gray-100 bg-gray-50/50 p-6">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                >
                  Ver demo
                </Link>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}


