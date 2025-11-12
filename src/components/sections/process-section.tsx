"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-muted/30 py-20">
      <div className="container space-y-12">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Un proceso iterativo pensado para ejecutar y aprender en cada
            release.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Trabajo en ciclos quincenales que priorizan feedback continuo, QA
            automatizado y documentación viva para tu equipo.
          </p>
        </header>
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/80 via-border to-border md:block" />
          <ul className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative flex flex-col gap-4 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur md:ml-16"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-semibold">{step.id}</span>
                      <CheckCircle2 className="absolute -right-3 top-0 hidden h-6 w-6 text-primary md:block" />
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Sprint {index + 1}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Entregables
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                    {step.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2 rounded-xl bg-muted/60 p-3"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


