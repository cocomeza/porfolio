import type { Metadata } from "next";
import localFont from "next/font/local";

import { AppProviders } from "@/components/app-providers";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = new URL("https://botoncreativo.dev");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Maximiliano Meza · Desarrollador Web Full Stack",
    template: "%s | Maximiliano Meza",
  },
  description:
    "Portfolio personal de Maximiliano Meza: desarrollo web full stack, proyectos freelance y soluciones digitales a medida.",
  keywords: [
    "Maximiliano Meza",
    "Botón Creativo",
    "Desarrollador Web",
    "Full Stack",
    "Next.js",
    "React",
    "Freelance",
    "Portfolio",
  ],
  authors: [{ name: "Maximiliano Meza", url: siteUrl.href }],
  alternates: {
    canonical: siteUrl.href,
  },
  openGraph: {
    title: "Maximiliano Meza · Desarrollador Web Full Stack",
    description:
      "Portfolio con proyectos actuales, experiencia freelance y habilidades técnicas de Maximiliano Meza.",
    url: siteUrl.href,
    siteName: "Maximiliano Meza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximiliano Meza · Desarrollador Web Full Stack",
    description:
      "Descubrí mis proyectos, servicios y forma de trabajo como desarrollador web full stack freelance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
