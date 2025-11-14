"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b bg-gradient-to-br from-blue-50 via-indigo-50 to-white"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
        <motion.div
          className="mb-8 flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
          </span>
          Full-Stack SaaS Developer
        </motion.div>
        <motion.h1
          className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          ¡Hola! Soy{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Maximiliano Meza
          </span>
        </motion.h1>
        <motion.div
          className="mb-8 flex flex-wrap items-center justify-center gap-2.5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {["Next.js 14", "React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Radix UI"].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-blue-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        <motion.p
          className="mb-10 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Desarrollo aplicaciones web full stack para clientes reales. Construyo
          plataformas web responsivas desde cero hasta producción, que funcionan en
          cualquier dispositivo, resolviendo problemas concretos con código limpio y
          tecnologías modernas.
        </motion.p>
        <motion.div
          className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 sm:w-auto"
          >
            <Link href="/contacto">Trabajemos juntos</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-2 border-gray-300 bg-white font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 sm:w-auto"
          >
            <Link href="/Maximiliano_Meza_CV.Dev.pdf" download>
              Descargar CV
              <Download className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


