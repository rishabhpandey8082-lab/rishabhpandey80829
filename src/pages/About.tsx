import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { LinkedInSection } from "@/components/LinkedInSection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <AboutSection />
          <SkillsSection />
          <CertificatesSection />
          <LinkedInSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
