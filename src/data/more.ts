import type { Language } from "@/i18n";

type Bi<T> = Record<Language, T>;

export const more: Bi<{
  badge1: string; badge2: string;
  glanceEyebrow: string; glanceTitle: string; stats: { years: string; certs: string; models: string; roles: string };
  servicesEyebrow: string; servicesTitle: string; services: { title: string; text: string }[];
  ventureEyebrow: string; ventureText: string; features: string[]; featuresLabel: string;
}> = {
  en: {
    badge1: "Working Student · moVeas",
    badge2: "Founder · Gentleflow",
    glanceEyebrow: "At a glance",
    glanceTitle: "The numbers behind the work",
    stats: { years: "Years in family business operations", certs: "Certificates & simulations", models: "Financial models", roles: "Roles held" },
    servicesEyebrow: "What I do",
    servicesTitle: "Where I can help",
    services: [
      { title: "Financial accounting", text: "Invoice processing, accounts payable, bank reconciliation, general ledger and DATEV-based bookkeeping." },
      { title: "Contract controlling", text: "Monitoring and structuring financial contracts and workflows for compliance and cost efficiency." },
      { title: "Business transformation", text: "Performance analysis, process improvement and automation to help growing teams work better." },
      { title: "Financial modeling", text: "NPV and IRR, DCF valuation, break-even analysis and KPI dashboards in Excel and Power BI." },
    ],
    ventureEyebrow: "Venture",
    ventureText: "A women's wellness platform that combines a free period tracking app with physical sanitary products.",
    features: ["Cycle tracking", "Ovulation prediction", "Symptom logging", "AI wellness insights"],
    featuresLabel: "In the app",
  },
  de: {
    badge1: "Werkstudent · moVeas",
    badge2: "Gründer · Gentleflow",
    glanceEyebrow: "Auf einen Blick",
    glanceTitle: "Die Zahlen hinter der Arbeit",
    stats: { years: "Jahre im Familienunternehmen", certs: "Zertifikate & Simulationen", models: "Finanzmodelle", roles: "Stationen" },
    servicesEyebrow: "Was ich mache",
    servicesTitle: "Wobei ich helfen kann",
    services: [
      { title: "Finanzbuchhaltung", text: "Rechnungsbearbeitung, Kreditoren, Bankabstimmung, Hauptbuch und Buchhaltung mit DATEV." },
      { title: "Vertragscontrolling", text: "Überwachung und Strukturierung von Finanzverträgen und Abläufen für Compliance und Kosteneffizienz." },
      { title: "Business Transformation", text: "Performance-Analyse, Prozessverbesserung und Automatisierung für wachsende Teams." },
      { title: "Finanzmodellierung", text: "NPV und IRR, DCF-Bewertung, Break-Even-Analyse und KPI-Dashboards in Excel und Power BI." },
    ],
    ventureEyebrow: "Gründung",
    ventureText: "Eine Wellness-Plattform für Frauen, die eine kostenlose Zyklus-App mit physischen Hygieneprodukten verbindet.",
    features: ["Zyklustracking", "Eisprungprognose", "Symptomprotokoll", "KI-Wellness-Einblicke"],
    featuresLabel: "In der App",
  },
};
