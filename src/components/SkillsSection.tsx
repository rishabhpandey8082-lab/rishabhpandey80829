import { Brain, Wrench, Database, Palette } from "lucide-react";

const softSkills = [
  "Analytisches Denken",
  "Problemlösung",
  "Organisation & Struktur",
  "Detailorientiert",
  "Teamfähigkeit",
  "Kommunikationsstärke",
  "Flexibilität"
];

const financeTools = [
  "Excel (Pivot, SVERWEIS, Dashboards)",
  "Budgetierung & Reporting",
  "KPI & Trendanalyse",
  "Financial Modeling (Basis)"
];

const erpSystems = [
  "SAP ERP",
  "Marg ERP (fortgeschritten)"
];

const otherTools = [
  "Canva",
  "Power BI Grundlagen",
  "MS Office (PowerPoint, Outlook)"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="bg-background section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Fähigkeiten
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Kompetenzen & Tools
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div className="bg-muted rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Brain className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card text-foreground rounded-full text-sm font-medium shadow-soft hover:shadow-medium transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Finance Tools */}
          <div className="bg-skin rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Wrench className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Finance Tools
              </h3>
            </div>
            <ul className="space-y-3">
              {financeTools.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* ERP Systems */}
          <div className="bg-skin rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Database className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                ERP Systeme
              </h3>
            </div>
            <ul className="space-y-3">
              {erpSystems.map((system, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  {system}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Tools */}
          <div className="bg-muted rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-foreground rounded-lg">
                <Palette className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Weitere Tools
              </h3>
            </div>
            <ul className="space-y-3">
              {otherTools.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
