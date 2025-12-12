import { Briefcase, Globe, TrendingUp, Building } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-skin section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Über mich
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Mein Hintergrund
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ich bin Rishabh Raj Pandey, ein engagierter Student der International Business & Economics mit Fokus auf Finance, Controlling und Business Analytics. Durch meine internationale Erfahrung in Deutschland, Kasachstan, Nigeria und Argentinien verbinde ich kulturelle Kompetenz mit analytischer Denkweise.
          </p>
        </div>

        {/* Family Business Card */}
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-medium mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-muted rounded-lg">
              <Building className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Family Business – Finance & Operations
              </h3>
              <p className="text-muted-foreground">2018 – Heute</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Seit 2018 unterstütze ich unser familiengeführtes Pharmaunternehmen im Bereich Finanzen, Buchhaltung, Cashflow-Management und ERP-Systeme.
          </p>

          <div className="mb-8">
            <h4 className="font-semibold text-foreground mb-4">Meine Aufgaben:</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Finanzberichte, Umsatz- & Margenanalysen",
                "Cashflow- und Liquiditätsmanagement",
                "Rechnungsstellung, Debitoren & Zahlungsabwicklung",
                "Verkaufsdatenanalyse & Trendermittlung",
                "Bestandsplanung & Lieferantenmanagement",
                "Anwendung von Marg ERP auf fortgeschrittenem Niveau"
              ].map((task, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-foreground mt-1">✔</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Warum das wertvoll ist:</h4>
            <p className="text-muted-foreground leading-relaxed">
              Dadurch habe ich ein tiefes Verständnis für Financial Reporting, Kostenstrukturen, Working Capital und betriebliche Effizienz entwickelt.
            </p>
          </div>
        </div>

        {/* International Projects */}
        <div className="bg-gray-light rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-foreground" />
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Internationale Projekte
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">
                COIL Programme
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Deutschland, Nigeria, Argentinien
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  Entwicklung innovativer Geschäftsmodelle
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  Interkulturelle Teamarbeit
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">
                International Project Management
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Kasachstan
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  Projektplanung, Ressourcensteuerung
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  Teamkoordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
