"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { submitContactLead } from "@/actions/contact";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validation/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<
    | {
        type: "success" | "error";
        message: string;
      }
    | null
  >(null);

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
      consent: true,
    },
  });

  async function onSubmit(values: ContactFormInput) {
    startTransition(async () => {
      setFormStatus(null);

      const response = await submitContactLead(values);

      if (response.success) {
        form.reset({
          ...values,
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
          consent: true,
        });

        setFormStatus({
          type: "success",
          message: response.message,
        });
      } else {
        setFormStatus({
          type: "error",
          message: response.message,
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre y apellido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  placeholder="hola@tuempresa.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa u organización</FormLabel>
              <FormControl>
                <Input placeholder="Opcional" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de proyecto</FormLabel>
              <FormControl>
                <Input placeholder="SaaS, dashboard, migración, etc." {...field} />
              </FormControl>
              <FormDescription>
                Contame qué necesitás o qué objetivo querés alcanzar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Compartí contexto, deadlines y métricas deseadas."
                  className="min-h-[140px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-2xl border border-border/60 bg-muted/50 p-4">
              <FormControl>
                <Switch
                  checked={Boolean(field.value)}
                  onCheckedChange={field.onChange}
                  aria-label="Acepto el tratamiento de datos"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Acepto que Botón Creativo gestione mis datos para contactarme.
                </FormLabel>
                <FormDescription>
                  Usaré tus datos solamente para responder tu consulta. Podés
                  solicitar su eliminación en cualquier momento.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        {formStatus && (
          <p
            role="status"
            className="rounded-2xl border border-border bg-muted/60 px-4 py-3 text-sm"
          >
            <span
              className={
                formStatus.type === "success"
                  ? "font-medium text-emerald-500"
                  : "font-medium text-destructive"
              }
            >
              {formStatus.type === "success" ? "¡Listo!" : "Ups…"}
            </span>{" "}
            <span className="text-muted-foreground">{formStatus.message}</span>
          </p>
        )}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full rounded-full"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensaje
              <Send className="ml-2 h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}


