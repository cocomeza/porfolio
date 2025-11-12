"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactDetails, availability } from "@/data/contact";

export function ContactSection() {
  return (
    <section id="contacto" className="border-t-2 bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container grid gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
            Contacto directo
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contame qué necesitás y te respondo en menos de 24 horas.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            El formulario llega directo a mi correo. Si preferís otra vía,
            dejalo aclarado en el mensaje o escribime por WhatsApp.
          </p>
          <ContactForm />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <Card className="rounded-2xl border-2 border-gray-200 bg-white shadow-md">
            <CardHeader className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
              <CardTitle className="text-lg font-bold text-gray-900">
                Datos directos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6 text-sm">
              <ContactRow
                icon={<Mail className="h-5 w-5 text-blue-600" />}
                label="Email"
                value={
                  <Link
                    href={`mailto:${contactDetails.email}`}
                    className="font-semibold text-gray-900 transition hover:text-blue-600"
                  >
                    {contactDetails.email}
                  </Link>
                }
              />
              <ContactRow
                icon={<Phone className="h-5 w-5 text-blue-600" />}
                label="WhatsApp"
                value={
                  <Link
                    href={`https://wa.me/${contactDetails.phone.replace(/\D/g, "")}`}
                    className="font-semibold text-gray-900 transition hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactDetails.phone}
                  </Link>
                }
              />
              <ContactRow
                icon={<MapPin className="h-5 w-5 text-blue-600" />}
                label="Ubicación"
                value={
                  <Link
                    href={contactDetails.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 transition hover:text-blue-600"
                  >
                    {contactDetails.location}
                  </Link>
                }
              />
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-2 border-gray-200 bg-white shadow-md">
            <CardHeader className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <Rocket className="h-5 w-5 text-blue-600" /> Disponibilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-6 text-sm text-gray-600">
              {availability.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-2 border-gray-200 bg-white shadow-md">
            <CardHeader className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <ShieldCheck className="h-5 w-5 text-emerald-600" /> Política de datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-6 text-sm text-gray-600">
              <p className="font-medium">
                Uso tus datos únicamente para responder tu consulta. Si necesitás
                eliminar la información, pedímelo en cualquier momento.
              </p>
              <p className="font-medium">
                También puedo responderte por la vía que prefieras: correo o WhatsApp.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <div className="mt-1 text-sm">{value}</div>
      </div>
    </div>
  );
}


