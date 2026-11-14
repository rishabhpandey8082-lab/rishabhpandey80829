import { lazy, Suspense, useEffect, useState } from "react";
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
import { Preloader } from "@/components/Preloader";
import { initScroll } from "@/lib/scroll";

// The 3D world is code-split so the page text renders immediately.
const Scene = lazy(() => import("@/three/Scene"));

// No router: single scroll-driven page (also avoids the GitHub Pages sub-path 404 problem).
const App = () => {
  const [ready, setReady] = useState(false); // intro curtain lifted → start hero animations
  const [gone, setGone] = useState(false);

  useEffect(() => initScroll(), []);

  return (
    <LanguageProvider>
      <Suspense fallback={null}><Scene /></Suspense>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-background/10" />
      <ScrollProgress />
      <Cursor />
      <Toaster theme="dark" position="bottom-right" />
      {!gone && <Preloader onReveal={() => setReady(true)} onGone={() => setGone(true)} />}
      <div className="relative z-10">
        {ready && <Navigation />}
        <main>
          {ready ? <HeroSection /> : <section id="home" className="min-h-screen" />}
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
};

export default App;
