"use client";

import { motion } from "framer-motion";

import { skillsByCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="habilidades" className="border-t-2 bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container space-y-12 px-4 sm:px-6">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Habilidades y tecnologías
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Herramientas que uso a diario para planificar, diseñar, desarrollar,
            testear y entregar proyectos listos para producción.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillsByCategory.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition hover:border-blue-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {category.title}
              </h3>
              <div
                className={cn(
                  "mt-4 grid gap-3",
                  category.columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"
                )}
              >
                {category.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border-2 border-blue-100 bg-blue-50/50 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span>{item.label}</span>
                    <span className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

