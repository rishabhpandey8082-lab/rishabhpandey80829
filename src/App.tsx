import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { GlanceSection } from "@/components/GlanceSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { VentureSection } from "@/components/VentureSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/fx";

// Single page, no router: works on GitHub Pages sub-paths and any custom domain.
const App = () => (
  <LanguageProvider>
    <Toaster position="bottom-right" />
    <ScrollProgress />
    <Navigation />
    <main>
      <HeroSection />
      <GlanceSection />
      <AboutSection />
      <ExperienceSection />
      <VentureSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <CertificatesSection />
      <ContactSection />
    </main>
    <Footer />
  </LanguageProvider>
);

export default App;
