import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certificates = [
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
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="bg-gray-light section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Zertifikate
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Weiterbildungen
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
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
                    Was ich gelernt habe:
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
                    Zertifikatslink hinzufügen
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
