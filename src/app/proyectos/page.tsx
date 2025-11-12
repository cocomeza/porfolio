import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function ProyectosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <SiteHeader />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

