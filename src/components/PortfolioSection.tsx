import { BarChart3, Calculator, TrendingDown, LineChart, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const projectIcons = [BarChart3, Calculator, TrendingDown, LineChart];

export const PortfolioSection = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'de' ? "Finanz-Dashboard" : "Financial Dashboard",
      description: language === 'de' 
        ? "Interaktives Dashboard zur Visualisierung von Finanzkennzahlen und KPIs mit Excel und Power BI."
        : "Interactive dashboard for visualizing financial metrics and KPIs with Excel and Power BI.",
      tools: ["Excel", "Power BI"],
      link: "#"
    },
    {
      title: language === 'de' ? "NPV & IRR Analyse" : "NPV & IRR Analysis",
      description: language === 'de'
        ? "Investitionsbewertungsmodell zur Berechnung von Kapitalwert und internem Zinsfuß."
        : "Investment valuation model for calculating net present value and internal rate of return.",
      tools: ["Excel", "Financial Modeling"],
      link: "#"
    },
    {
      title: language === 'de' ? "Break-Even Analyse" : "Break-Even Analysis",
      description: language === 'de'
        ? "Detaillierte Gewinnschwellenanalyse für verschiedene Geschäftsszenarien."
        : "Detailed break-even analysis for various business scenarios.",
      tools: ["Excel", language === 'de' ? "Szenarioplanung" : "Scenario Planning"],
      link: "#"
    },
    {
      title: language === 'de' ? "Unternehmensbewertung (DCF)" : "Company Valuation (DCF)",
      description: language === 'de'
        ? "Discounted Cash Flow Modell zur Bewertung von Unternehmen."
        : "Discounted Cash Flow model for company valuation.",
      tools: ["Excel", "DCF Modeling"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="bg-foreground section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
            {t.portfolio.title}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-background">
            {t.portfolio.subtitle}
          </h2>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[index];
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group bg-card rounded-xl p-8 shadow-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-muted rounded-lg group-hover:bg-skin transition-colors">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <a
                      href={project.link}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="outline" size="sm" asChild className="w-full group-hover:bg-foreground group-hover:text-background transition-colors">
                      <a href={project.link}>
                        {t.portfolio.viewProject}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Placeholder for more projects */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <p className="text-background/60 text-sm">
            {language === 'de' ? 'Weitere Projekte werden hinzugefügt' : 'More projects coming soon'}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
