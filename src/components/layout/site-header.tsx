"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition hover:from-blue-700 hover:to-indigo-700"
        >
          Botón Creativo
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-semibold transition",
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="/Maximiliano_Meza_CV_Dev.pdf"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
          >
            Descargar CV
          </a>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 lg:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>
      <nav
        className={cn(
          "border-t border-slate-200 bg-white transition-all lg:hidden",
          isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex w-full rounded-lg px-3 py-2 font-semibold",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="/Maximiliano_Meza_CV_Dev.pdf"
              className="flex w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700"
              onClick={() => setIsMobileOpen(false)}
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


