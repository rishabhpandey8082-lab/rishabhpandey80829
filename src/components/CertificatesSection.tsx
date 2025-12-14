import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export const CertificatesSection = () => {
  const { t, language } = useLanguage();

  const certificates = language === 'de' ? [
    {
      title: "Citi – Finance Job Simulation",
      description: "Dieses Simulationsprogramm vermittelte praxisrelevante Analystenaufgaben der Citi-Bank.",
      learnings: [
        "KPI-Analyse zur Bewertung der Unternehmensperformance",
        "Validierung von RWA-Berechnungen",
        "Risikoanalysen im Kreditkartenbereich",
        "Monitoring von Limits und Einlagen"
      ],
      link: "#"
    },
    {
      title: "Goldman Sachs – Controllers Division Simulation",
      description: "Ein tiefgehendes Controlling-Training im Investmentbanking.",
      learnings: [
        "NAV-Berechnung",
        "Fund Accounting",
        "Trendanalyse mit Excel",
        "Erstellung professioneller Controlling-Reports"
      ],
      link: "#"
    },
    {
      title: "CFI – Careers in Finance",
      description: "Grundlagen zu Finanzmärkten, Rollen, Investmentprozessen.",
      learnings: [],
      link: "#"
    },
    {
      title: "Executive Diploma in Leadership & Management",
      description: "Führungsgrundsätze, Organisationsmanagement & Teamdynamik.",
      learnings: [],
      link: "#",
      provider: "Udemy"
    },
    {
      title: "MITx – Becoming an Entrepreneur",
      description: "Geschäftsmodelle, Marktanalyse, Innovationsmanagement.",
      learnings: [],
      link: "#"
    },
    {
      title: "DelftX – Electric Cars Technology",
      description: "Elektromobilität, Batteriesysteme & nachhaltige Technologien.",
      learnings: [],
      link: "#"
    }
  ] : [
    {
      title: "Citi – Finance Job Simulation",
      description: "This simulation program taught practical analyst tasks at Citi Bank.",
      learnings: [
        "KPI analysis for company performance evaluation",
        "Validation of RWA calculations",
        "Risk analysis in credit card area",
        "Monitoring of limits and deposits"
      ],
      link: "#"
    },
    {
      title: "Goldman Sachs – Controllers Division Simulation",
      description: "An in-depth controlling training in investment banking.",
      learnings: [
        "NAV calculation",
        "Fund Accounting",
        "Trend analysis with Excel",
        "Creating professional controlling reports"
      ],
      link: "#"
    },
    {
      title: "CFI – Careers in Finance",
      description: "Fundamentals of financial markets, roles, investment processes.",
      learnings: [],
      link: "#"
    },
    {
      title: "Executive Diploma in Leadership & Management",
      description: "Leadership principles, organizational management & team dynamics.",
      learnings: [],
      link: "#",
      provider: "Udemy"
    },
    {
      title: "MITx – Becoming an Entrepreneur",
      description: "Business models, market analysis, innovation management.",
      learnings: [],
      link: "#"
    },
    {
      title: "DelftX – Electric Cars Technology",
      description: "Electric mobility, battery systems & sustainable technologies.",
      learnings: [],
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="bg-gray-light section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.certificates.subtitle}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            {t.certificates.title}
          </h2>
        </AnimatedSection>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <Award className="w-5 h-5 text-foreground" />
                  </div>
                  {cert.provider && (
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {cert.provider}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {cert.learnings.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                      {t.certificates.keyLearnings}:
                    </p>
                    <ul className="space-y-1">
                      {cert.learnings.map((learning, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-foreground">•</span>
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-4">
                  <Button variant="ghost" size="sm" asChild className="w-full text-muted-foreground hover:text-foreground">
                    <a href={cert.link} className="flex items-center justify-center gap-2">
                      {t.certificates.viewCertificate}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
