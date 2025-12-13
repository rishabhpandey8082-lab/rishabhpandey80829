import { Linkedin } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const LinkedInSection = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-background mb-2">
                Vernetzen Sie sich mit mir
              </h3>
              <p className="text-background/70">
                Lassen Sie uns auf LinkedIn in Kontakt treten
              </p>
            </div>
            
            <a
              href="https://www.linkedin.com/in/rishabh-raj-pandey-3b683b324"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-background text-foreground px-8 py-4 rounded-full hover:bg-skin transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">Rishabh Raj Pandey</p>
                <p className="text-sm text-muted-foreground">LinkedIn Profil</p>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
