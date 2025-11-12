import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";

export default function SobreMiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <SiteHeader />
      <main className="flex-1">
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}

