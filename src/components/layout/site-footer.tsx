import Link from "next/link";

import { socialLinks } from "@/data/navigation";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container flex flex-col gap-6 px-4 text-center text-sm sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
        <div className="space-y-2">
          <Link
            href="https://botoncreativo.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition hover:from-blue-700 hover:to-indigo-700"
          >
            Botón Creativo
          </Link>
          <p className="text-sm leading-relaxed text-gray-600">
            © {currentYear}. Diseño y desarrollo de experiencias web hechas a medida.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 md:justify-end">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}


