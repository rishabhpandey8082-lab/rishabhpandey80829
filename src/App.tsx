import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Cursor, ScrollProgress } from "@/components/fx";

// The 3D world is code-split so the page text renders immediately.
const Scene = lazy(() => import("@/three/Scene"));

// No router: this is a single scroll-driven page, which also removes the
// GitHub Pages "404 on refresh / sub-path" problem the old BrowserRouter had.
const App = () => (
  <LanguageProvider>
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,hsl(170_60%_12%)_0%,hsl(225_45%_4%)_60%)]" />
    <Suspense fallback={null}><Scene /></Suspense>
    <div className="pointer-events-none fixed inset-0 z-[1] bg-background/25" />
    <ScrollProgress />
    <Cursor />
    <Toaster theme="dark" position="bottom-right" />
    <div className="relative z-10">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);

export default App;
