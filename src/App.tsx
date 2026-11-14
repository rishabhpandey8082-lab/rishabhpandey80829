import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

// Single page, no router: works on GitHub Pages sub-paths and any custom domain.
const App = () => (
  <LanguageProvider>
    <Toaster position="bottom-right" />
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
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
