import { Briefcase, Globe, Building } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

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

        {/* Family Business Card */}
        <AnimatedSection delay={0.1} className="bg-card rounded-xl p-8 md:p-12 shadow-medium mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-muted rounded-lg">
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
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-foreground mt-1">✔</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Value:</h4>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.familyBusiness.value}
            </p>
          </div>
        </AnimatedSection>

        {/* International Projects */}
        <AnimatedSection delay={0.2} className="bg-gray-light rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-foreground" />
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {t.about.internationalProjects.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-soft">
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

            <div className="bg-card rounded-lg p-6 shadow-soft">
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
