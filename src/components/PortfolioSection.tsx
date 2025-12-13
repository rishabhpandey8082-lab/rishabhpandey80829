import { BarChart3, Calculator, TrendingDown, LineChart, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";

const projects = [
  {
    title: "Finanz-Dashboard",
    description: "Interaktives Dashboard zur Visualisierung von Finanzkennzahlen und KPIs mit Excel und Power BI.",
    icon: BarChart3,
    tools: ["Excel", "Power BI"],
    link: "#"
  },
  {
    title: "NPV & IRR Analyse",
    description: "Investitionsbewertungsmodell zur Berechnung von Kapitalwert und internem Zinsfuß.",
    icon: Calculator,
    tools: ["Excel", "Financial Modeling"],
    link: "#"
  },
  {
    title: "Break-Even Analyse",
    description: "Detaillierte Gewinnschwellenanalyse für verschiedene Geschäftsszenarien.",
    icon: TrendingDown,
    tools: ["Excel", "Szenarioplanung"],
    link: "#"
  },
  {
    title: "Unternehmensbewertung (DCF)",
    description: "Discounted Cash Flow Modell zur Bewertung von Unternehmen.",
    icon: LineChart,
    tools: ["Excel", "DCF Modeling"],
    link: "#"
  }
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-foreground section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-background">
            Meine Projekte
          </h2>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group bg-card rounded-xl p-8 shadow-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-muted rounded-lg group-hover:bg-skin transition-colors">
                    <project.icon className="w-6 h-6 text-foreground" />
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
                      Projektlink hinzufügen
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholder for more projects */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <p className="text-background/60 text-sm">
            Weitere Projekte werden hinzugefügt
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};