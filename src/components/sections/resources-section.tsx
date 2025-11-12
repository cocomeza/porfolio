"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileCode2, NotebookPen } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resources } from "@/data/resources";

export function ResourcesSection() {
  return (
    <section id="recursos" className="bg-muted/20 py-20">
      <div className="container space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
              Recursos y documentación
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Casos de estudio, guías técnicas y documentos listos para compartir
              con tu equipo.
            </h2>
          </div>
          <p className="max-w-xl text-base text-muted-foreground">
            Preparando un blog en español e inglés para compartir aprendizajes,
            microtutoriales y documentación viva de cada proyecto.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="space-y-2 p-0">
                  <Badge
                    variant="outline"
                    className="w-fit border-border/60 bg-background/60 text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {resource.type}
                  </Badge>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-4 space-y-6 p-0">
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:underline"
                  >
                    Ver recurso
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div
            className="flex h-full flex-col justify-between rounded-3xl border border-dashed border-primary/40 bg-background/60 p-6 text-primary shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: resources.length * 0.05 }}
          >
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <NotebookPen className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold">
                ¿Querés recibir actualizaciones?
              </h3>
              <p className="text-sm text-muted-foreground">
                Integrá Supabase para convertir esta tarjeta en un formulario de
                newsletter. Leads guardados en tiempo real y dashboard interno
                incluido.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
              <FileCode2 className="h-5 w-5" />
              `src/components/sections/resources-section.tsx`
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


