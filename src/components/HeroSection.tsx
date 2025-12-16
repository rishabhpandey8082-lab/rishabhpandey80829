import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-skin rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 border border-skin rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-skin/10 rounded-full blur-xl animate-pulse-soft" />

      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 opacity-0 animate-fade-up">
            <div className="relative inline-block group">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-skin shadow-large mx-auto relative transition-transform duration-500 group-hover:scale-105">
                <img
                  src={profilePhoto}
                  alt="Rishabh Raj Pandey - Professional Portrait"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-full bg-skin/30 blur-xl -z-10 scale-110 animate-pulse-soft" />
              <div className="absolute inset-0 rounded-full border-2 border-skin/20 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Overline */}
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4 opacity-0 animate-fade-up delay-100">
            {t.hero.greeting}
          </p>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up delay-200 leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-up delay-300">
            {t.hero.subtitle}
          </p>

          {/* Quote */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-400 italic">
            „{t.hero.quote}"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-500">
            <Button variant="hero" size="xl" asChild>
              <Link to="/portfolio">
                {t.hero.viewPortfolio}
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="/Rishabh_Pandey_Lebenslauf.pdf" download className="flex items-center gap-2">
                <Download size={18} />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Mail size={18} />
                {t.hero.contactMe}
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">{t.hero.scrollDown}</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
