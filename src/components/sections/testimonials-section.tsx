"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-background py-20">
      <div className="container space-y-12">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 rounded-full border border-border/80 bg-muted/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Testimonios · Conecta Supabase para carga dinámica
          </div>
          <p className="max-w-xl text-sm text-muted-foreground">
            Podés conectar Supabase y mostrar testimonios en tiempo real desde
            tu dashboard interno. Así mantendrás el portfolio actualizado sin
            editar código.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.company}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-3xl border border-border/60 bg-card/80 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    “{testimonial.quote}”
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Proyecto: {testimonial.project}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


