import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HabilidadesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <SiteHeader />
      <main className="flex-1">
        <SkillsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

