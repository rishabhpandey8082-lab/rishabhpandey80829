import { Lightbulb, Building2, AlertTriangle, Users, Leaf } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const caseStudyIcons = [Lightbulb, Building2, AlertTriangle, Users, Leaf];
const caseStudyColors = ["text-blue-500", "text-purple-500", "text-red-500", "text-green-500", "text-yellow-500"];

export const CaseStudiesSection = () => {
  const { t, language } = useLanguage();

  const caseStudies = language === 'de' ? [
    {
      title: "Forces Supporting vs. Resisting Change: Hyperloop & Kodak",
      description: "Eine Analyse zweier Organisationen, die gegensätzliche Reaktionen auf Wandel zeigen.",
      insights: [
        "Hyperloop nutzte Vision, globale Zusammenarbeit, offene Innovation und starke Medienpräsenz",
        "Kodak scheiterte aufgrund von Angst vor digitaler Disruption und kulturellem Widerstand"
      ],
      result: "Unternehmen, die Wandel akzeptieren, überleben und wachsen."
    },
    {
      title: "Patagonia: Purpose-Driven Culture & Organizational Design",
      description: "Analyse der außergewöhnlichen Unternehmenskultur von Patagonia.",
      insights: [
        "Kultur & Purpose sind vollständig integriert",
        "Werte werden aktiv gelebt (1% for the Planet, Worn Wear)",
        "Flache Strukturen fördern Autonomie & Innovation"
      ],
      result: "Patagonia ist ein Beispiel für eine erfolgreiche, zweckorientierte Organisationskultur."
    },
    {
      title: "Boeing 737 MAX Crisis: A Bounded Discretion Breakdown",
      description: "Analyse der Boeing-Krise durch das Konzept der 'Bounded Discretion'.",
      insights: [
        "Geschwindigkeit vor Sicherheit: Boeing priorisierte Wettbewerb statt Sicherheit",
        "Verheimlichung des MCAS-Systems führte zu katastrophalen Folgen",
        "'Ethical Fading' – Geschäftsentscheidungen statt moralischer Entscheidungen"
      ],
      result: "Zu viel Freiheit ohne moralische Grenzen führt zu katastrophalen Entscheidungen."
    },
    {
      title: "B-Corp & HR Transformation: Romano Lana (Italy)",
      description: "Wie ein traditionelles Familienunternehmen moderne HR-Strategien implementieren kann.",
      insights: [
        "Formalisierung der HR-Systeme notwendig",
        "B-Corp erhöht Attraktivität für Talente",
        "Employee Value Proposition: familiäre Kultur, sinnvolle Arbeit"
      ],
      result: "Tradition + moderne HR-Prozesse = langfristige Wettbewerbsfähigkeit."
    },
    {
      title: "Sustainable Innovation: Corporate Innovation Challenges",
      description: "Analyse der Herausforderungen und Chancen nachhaltiger Innovation.",
      insights: [
        "Ziele: Wertschöpfung, nachhaltige Produktion, Trendorientierung",
        "Vorteile: Kostenreduktion, Zugang zu neuen Märkten",
        "Beispiele: Home-Office, Elektromobilität, Patagonia Worn Wear"
      ],
      result: "Innovationsorientierte Unternehmen bleiben langfristig wettbewerbsfähig."
    }
  ] : [
    {
      title: "Forces Supporting vs. Resisting Change: Hyperloop & Kodak",
      description: "An analysis of two organizations showing opposite reactions to change.",
      insights: [
        "Hyperloop used vision, global collaboration, open innovation and strong media presence",
        "Kodak failed due to fear of digital disruption and cultural resistance"
      ],
      result: "Companies that embrace change survive and grow."
    },
    {
      title: "Patagonia: Purpose-Driven Culture & Organizational Design",
      description: "Analysis of Patagonia's exceptional corporate culture.",
      insights: [
        "Culture & Purpose are fully integrated",
        "Values are actively lived (1% for the Planet, Worn Wear)",
        "Flat structures promote autonomy & innovation"
      ],
      result: "Patagonia is an example of a successful, purpose-driven organizational culture."
    },
    {
      title: "Boeing 737 MAX Crisis: A Bounded Discretion Breakdown",
      description: "Analysis of the Boeing crisis through the concept of 'Bounded Discretion'.",
      insights: [
        "Speed over safety: Boeing prioritized competition over safety",
        "Concealment of the MCAS system led to catastrophic consequences",
        "'Ethical Fading' – business decisions instead of moral decisions"
      ],
      result: "Too much freedom without moral boundaries leads to catastrophic decisions."
    },
    {
      title: "B-Corp & HR Transformation: Romano Lana (Italy)",
      description: "How a traditional family business can implement modern HR strategies.",
      insights: [
        "Formalization of HR systems necessary",
        "B-Corp increases attractiveness for talent",
        "Employee Value Proposition: family culture, meaningful work"
      ],
      result: "Tradition + modern HR processes = long-term competitiveness."
    },
    {
      title: "Sustainable Innovation: Corporate Innovation Challenges",
      description: "Analysis of challenges and opportunities of sustainable innovation.",
      insights: [
        "Goals: value creation, sustainable production, trend orientation",
        "Benefits: cost reduction, access to new markets",
        "Examples: home office, electric mobility, Patagonia Worn Wear"
      ],
      result: "Innovation-oriented companies remain competitive in the long term."
    }
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-gray-light">
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.caseStudies.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.caseStudies.subtitle}
          </p>
        </AnimatedSection>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => {
            const IconComponent = caseStudyIcons[index];
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center ${caseStudyColors[index]}`}>
                        <IconComponent size={28} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow space-y-4">
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        {study.title}
                      </h3>
                      
                      <p className="text-muted-foreground">
                        {study.description}
                      </p>

                      {/* Insights */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm uppercase tracking-wide">
                          {t.caseStudies.keyInsights}:
                        </h4>
                        <ul className="space-y-2">
                          {study.insights.map((insight, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-skin mt-1">✓</span>
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Result */}
                      <div className="pt-4 border-t border-border">
                        <p className="text-foreground font-medium">
                          <span className="text-skin">{t.caseStudies.result}:</span> {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom Section */}
        <AnimatedSection delay={0.6} className="mt-16 text-center bg-skin/30 rounded-xl p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {language === 'de' ? 'Warum Case Studies?' : 'Why Case Studies?'}
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t.caseStudies.conclusion}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
