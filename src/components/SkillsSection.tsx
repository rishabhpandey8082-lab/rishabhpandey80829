import { Brain, Wrench, Database, Palette } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-background section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.skills.softSkills.title}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            {t.skills.title}
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <AnimatedSection delay={0.1} animation="slide-left" className="bg-muted rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Brain className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t.skills.softSkills.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.skills.softSkills.items.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card text-foreground rounded-full text-sm font-medium shadow-soft hover:shadow-medium transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Finance Tools */}
          <AnimatedSection delay={0.2} animation="slide-right" className="bg-skin rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Wrench className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t.skills.financeTools.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.skills.financeTools.items.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* ERP Systems */}
          <AnimatedSection delay={0.3} animation="slide-left" className="bg-skin rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Database className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t.skills.erpSystems.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.skills.erpSystems.items.map((system, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  {system}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Other Tools */}
          <AnimatedSection delay={0.4} animation="slide-right" className="bg-muted rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Palette className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t.skills.otherTools.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.skills.otherTools.items.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
