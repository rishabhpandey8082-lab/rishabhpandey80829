import { Briefcase, Globe, Building, TrendingUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import financeHero from "@/assets/finance-hero.jpg";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-skin section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.about.title}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            {t.about.familyBusiness.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </AnimatedSection>

        {/* Finance Hero Image */}
        <AnimatedSection delay={0.1} animation="fade-in" className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-large hover-lift">
            <img 
              src={financeHero} 
              alt="Investment Banking and Finance" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 text-background">
                <TrendingUp className="w-6 h-6 animate-pulse-soft" />
                <span className="font-display text-xl font-semibold">Investment Banking Focus</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* moVeas Work Experience */}
        <AnimatedSection delay={0.15} className="bg-card rounded-xl p-8 md:p-12 shadow-medium mb-12 hover-lift border-l-4 border-primary">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg hover-glow transition-all">
              <Briefcase className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                {t.about.workExperience.moveas.title}
              </h3>
              <p className="text-foreground font-medium">{t.about.workExperience.moveas.company}</p>
              <p className="text-muted-foreground text-sm">{t.about.workExperience.moveas.period} · {t.about.workExperience.moveas.location}</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {t.about.workExperience.moveas.tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}>
                <span className="text-foreground mt-1">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {t.about.workExperience.moveas.skills.map((skill, index) => (
              <span key={index} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Family Business Card */}
        <AnimatedSection delay={0.25} className="bg-card rounded-xl p-8 md:p-12 shadow-medium mb-12 hover-lift">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-muted rounded-lg hover-glow transition-all">
              <Building className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                {t.about.familyBusiness.title}
              </h3>
              <p className="text-muted-foreground">2018 – Present</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            {t.about.familyBusiness.description}
          </p>

          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-4">
              {t.about.familyBusiness.title}:
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {t.about.familyBusiness.tasks.map((task, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}>
                  <span className="text-foreground mt-1">✔</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6 hover-glow transition-all">
            <h4 className="font-semibold text-foreground mb-2">Value:</h4>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.familyBusiness.value}
            </p>
          </div>
        </AnimatedSection>

        {/* International Projects */}
        <AnimatedSection delay={0.3} className="bg-gray-light rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-foreground animate-pulse-soft" />
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {t.about.internationalProjects.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-soft hover-lift">
              <h4 className="font-semibold text-foreground mb-3">
                {t.about.internationalProjects.coil.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t.about.internationalProjects.coil.countries}
              </p>
              <p className="text-muted-foreground">
                {t.about.internationalProjects.coil.description}
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft hover-lift">
              <h4 className="font-semibold text-foreground mb-3">
                {t.about.internationalProjects.projectManagement.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t.about.internationalProjects.projectManagement.country}
              </p>
              <p className="text-muted-foreground">
                {t.about.internationalProjects.projectManagement.description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
