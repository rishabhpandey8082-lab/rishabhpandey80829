import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 opacity-0 animate-fade-up">
            International Business & Economics
          </p>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up delay-100 leading-tight">
            Rishabh Raj Pandey
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-up delay-200">
            Aspiring Financial Analyst
          </p>

          {/* Quote */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-300 italic">
            „Ich kombiniere datenbasierte Analyse, internationale Erfahrung und strukturierte Problemlösung, um wertvolle finanzielle Entscheidungen zu unterstützen."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#portfolio">
                Portfolio ansehen
              </a>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="#" className="flex items-center gap-2">
                <Download size={18} />
                Lebenslauf herunterladen
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={18} />
                Kontakt aufnehmen
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
