import { Lightbulb, Building2, AlertTriangle, Users, Leaf } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const caseStudies = [
  {
    id: 1,
    icon: Lightbulb,
    color: "text-blue-500",
    title: "Forces Supporting vs. Resisting Change: Hyperloop & Kodak",
    description: "Eine Analyse zweier Organisationen, die gegensätzliche Reaktionen auf Wandel zeigen: Hyperloop als Beispiel für erfolgreiche Veränderung und Kodak als Beispiel für Widerstand gegen Innovation.",
    insights: [
      "Hyperloop nutzte Vision, globale Zusammenarbeit, offene Innovation und starke Medienpräsenz, um Veränderung voranzutreiben",
      "Kodak scheiterte aufgrund von Angst vor digitaler Disruption, kulturellem Widerstand und verspäteter Innovation"
    ],
    result: "Unternehmen, die Wandel akzeptieren, überleben und wachsen. Unternehmen, die ihn vermeiden, verlieren Relevanz."
  },
  {
    id: 2,
    icon: Building2,
    color: "text-purple-500",
    title: "Patagonia: Purpose-Driven Culture & Organizational Design",
    description: "Analyse der außergewöhnlichen Unternehmenskultur von Patagonia, die auf Umweltverantwortung, Innovation und Mitarbeiterbeteiligung basiert.",
    insights: [
      "Kultur & Purpose sind vollständig integriert: 'We're in business to save our home planet'",
      "Werte werden aktiv gelebt (1% for the Planet, Worn Wear, Don't Buy This Jacket)",
      "Rekrutierung nach Werte-Fit, nicht nur Skills",
      "Flache Strukturen fördern Autonomie & Innovation"
    ],
    result: "Patagonia ist ein Beispiel für eine erfolgreiche, zweckorientierte Organisationskultur — nachhaltig, konsistent und authentisch."
  },
  {
    id: 3,
    icon: AlertTriangle,
    color: "text-red-500",
    title: "Boeing 737 MAX Crisis: A Bounded Discretion Breakdown",
    description: "Analyse der Boeing-Krise (737 MAX) durch das Konzept der 'Bounded Discretion'.",
    insights: [
      "Geschwindigkeit vor Sicherheit: Boeing priorisierte Wettbewerb mit Airbus statt Sicherheit",
      "Verheimlichung des MCAS-Systems führte zu katastrophalen Folgen",
      "346 Todesopfer, Milliardenstrafen, Vertrauensverlust",
      "'Ethical Fading' – Entscheidungen wurden als Geschäftsentscheidungen statt als moralische Entscheidungen betrachtet"
    ],
    result: "Zu viel Freiheit ohne moralische und gesetzliche Grenzen führt zu katastrophalen Entscheidungen."
  },
  {
    id: 4,
    icon: Users,
    color: "text-green-500",
    title: "B-Corp & HR Transformation: Romano Lana (Italy)",
    description: "Analyse, wie ein traditionelles Familienunternehmen moderne HR-Strategien implementieren kann, um B-Corp zu werden.",
    insights: [
      "Formalisierung der HR-Systeme (Recruiting, Development, Compensation) notwendig",
      "B-Corp erhöht Attraktivität für Talente (Werte, Sinnhaftigkeit, Nachhaltigkeit)",
      "Employee Value Proposition: familiäre Kultur, sinnvolle Arbeit, Karrierewege"
    ],
    result: "Tradition + moderne HR-Prozesse = langfristige Attraktivität & Wettbewerbsfähigkeit."
  },
  {
    id: 5,
    icon: Leaf,
    color: "text-yellow-500",
    title: "Sustainable Innovation: Corporate Innovation Challenges",
    description: "Analyse der typischen Herausforderungen und Chancen von nachhaltiger Innovation.",
    insights: [
      "Ziele: Wertschöpfung, nachhaltige Produktion, Trendorientierung, Prozessvereinfachung",
      "Vorteile: Kostenreduktion, Zugang zu neuen Märkten, höhere Kundenattraktivität",
      "Beispiele: Home-Office, Elektromobilität, Patagonia Worn Wear, Puma Biodegradable Collection"
    ],
    result: "Innovationsorientierte Unternehmen bleiben langfristig wettbewerbsfähig und resilient."
  }
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 md:py-32 bg-gray-light">
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Praxisorientierte Fallstudien – Analyse, Strategie & Entscheidungsfindung
          </p>
        </AnimatedSection>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.id} delay={index * 0.1}>
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center ${study.color}`}>
                      <study.icon size={28} />
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
                        Wesentliche Erkenntnisse:
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
                        <span className="text-skin">Ergebnis:</span> {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Section */}
        <AnimatedSection delay={0.6} className="mt-16 text-center bg-skin/30 rounded-xl p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Warum Case Studies?
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Diese Fallstudien zeigen meine Fähigkeit, komplexe Probleme zu verstehen, Daten zu analysieren, 
            geschäftliche Entscheidungen zu treffen und strategische Lösungen zu entwickeln — zentrale 
            Fähigkeiten für Rollen in Finance, Consulting und Business Analytics.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};