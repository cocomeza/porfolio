"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-muted/20 py-20">
      <div className="container space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
              Servicios clave
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Acompaño todo el ciclo del producto SaaS: discovery, diseño,
              desarrollo y evolución.
            </h2>
          </div>
          <p className="max-w-xl text-base text-muted-foreground">
            Cada servicio se apoya en un playbook documentado, con entregables
            claros y microinteracciones que elevan la experiencia del usuario.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-3xl border border-border/60 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <service.icon className="h-9 w-9 rounded-full bg-primary/10 p-2 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Resultados
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="leading-relaxed">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


