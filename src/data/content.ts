import type { Language } from "@/i18n";

export const EMAIL = "rishabhpandey80829@gmail.com";
export const PHONE = "+49 172 7711065";
export const LINKEDIN = "https://www.linkedin.com/in/rishabh-raj-pandey-3b683b324";

type Bi<T> = Record<Language, T>;

export const extra = {
  de: {
    nav: { home: "Start", about: "Über mich", skills: "Skills", projects: "Projekte", cases: "Fallstudien", certs: "Zertifikate", contact: "Kontakt" },
    roles: ["Finanzanalyse", "Datenbasierte Entscheidungen", "Business Development", "Internationales Business"],
    stats: { certs: "Zertifikate", models: "Finanzmodelle", erp: "ERP-Systeme", tools: "Finance Tools" },
    aboutEyebrow: "Über mich",
    skillsHint: "Maus bewegen – Kugel dreht sich",
    skillsEyebrow: "Skills & Tools",
    projectsEyebrow: "Portfolio",
    casesEyebrow: "Fallstudien",
    certsEyebrow: "Zertifikate & Simulationen",
    download: "Modell herunterladen",
    openCert: "Zertifikat ansehen",
    learnings: "Inhalte",
    present: "heute",
    scroll: "Scrollen",
    madeWith: "Gebaut mit React, Three.js & viel Kaffee.",
  },
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", cases: "Case Studies", certs: "Certificates", contact: "Contact" },
    roles: ["Financial Analysis", "Data-Driven Decisions", "Business Development", "International Business"],
    stats: { certs: "Certificates", models: "Financial Models", erp: "ERP Systems", tools: "Finance Tools" },
    aboutEyebrow: "About me",
    skillsHint: "Move your mouse – the sphere follows",
    skillsEyebrow: "Skills & Tools",
    projectsEyebrow: "Portfolio",
    casesEyebrow: "Case Studies",
    certsEyebrow: "Certificates & Simulations",
    download: "Download model",
    openCert: "View certificate",
    learnings: "Key learnings",
    present: "Present",
    scroll: "Scroll",
    madeWith: "Built with React, Three.js & lots of coffee.",
  },
} satisfies Bi<Record<string, unknown>>;

export interface Project { title: string; description: string; tools: string[]; file: string; }
export const projects: Bi<Project[]> = {
  de: [
    { title: "Finanz-Dashboard", description: "Interaktives Dashboard zur Visualisierung von Finanzkennzahlen und KPIs mit Excel und Power BI.", tools: ["Excel", "Power BI"], file: "projects/Finanz_Dashboard.xlsx" },
    { title: "NPV & IRR Analyse", description: "Investitionsbewertungsmodell zur Berechnung von Kapitalwert und internem Zinsfuß.", tools: ["Excel", "Financial Modeling"], file: "projects/NPV_IRR.xlsx" },
    { title: "Break-Even Analyse", description: "Detaillierte Gewinnschwellenanalyse für verschiedene Geschäftsszenarien.", tools: ["Excel", "Szenarioplanung"], file: "projects/Break_Even_Professional.xlsx" },
    { title: "Unternehmensbewertung (DCF)", description: "Discounted Cash Flow Modell zur Bewertung von Unternehmen.", tools: ["Excel", "DCF Modeling"], file: "projects/DCF_Valuation.xlsx" },
  ],
  en: [
    { title: "Financial Dashboard", description: "Interactive dashboard for visualizing financial metrics and KPIs with Excel and Power BI.", tools: ["Excel", "Power BI"], file: "projects/Finanz_Dashboard.xlsx" },
    { title: "NPV & IRR Analysis", description: "Investment valuation model for calculating net present value and internal rate of return.", tools: ["Excel", "Financial Modeling"], file: "projects/NPV_IRR.xlsx" },
    { title: "Break-Even Analysis", description: "Detailed break-even analysis for various business scenarios.", tools: ["Excel", "Scenario Planning"], file: "projects/Break_Even_Professional.xlsx" },
    { title: "Company Valuation (DCF)", description: "Discounted Cash Flow model for company valuation.", tools: ["Excel", "DCF Modeling"], file: "projects/DCF_Valuation.xlsx" },
  ],
};

export interface Cert { title: string; description: string; learnings: string[]; file: string; provider?: string; }
export const certs: Bi<Cert[]> = {
  de: [
    { title: "Citi – Finance Job Simulation", description: "Dieses Simulationsprogramm vermittelte praxisrelevante Analystenaufgaben der Citi-Bank.", learnings: ["KPI-Analyse zur Bewertung der Unternehmensperformance", "Validierung von RWA-Berechnungen", "Risikoanalysen im Kreditkartenbereich", "Monitoring von Limits und Einlagen"], file: "certificates/Citi_Bank_completion_certificate.pdf", provider: "Citi" },
    { title: "Goldman Sachs – Controllers Division Simulation", description: "Ein tiefgehendes Controlling-Training im Investmentbanking.", learnings: ["NAV-Berechnung", "Fund Accounting", "Trendanalyse mit Excel", "Erstellung professioneller Controlling-Reports"], file: "certificates/Goldman_Sachs_completion_certificate.pdf", provider: "Goldman Sachs" },
    { title: "CFI – Careers in Finance", description: "Grundlagen zu Finanzmärkten, Rollen, Investmentprozessen.", learnings: [], file: "certificates/CFI_Careers_In_Finance.pdf", provider: "CFI" },
    { title: "Executive Diploma in Leadership & Management", description: "Führungsgrundsätze, Organisationsmanagement & Teamdynamik.", learnings: [], file: "certificates/MTF_Institute_of_Management_Technology_and_Finance.pdf", provider: "MTF Institute" },
    { title: "DelftX – Electric Cars Technology", description: "Elektromobilität, Batteriesysteme & nachhaltige Technologien.", learnings: [], file: "certificates/Electric_Cars_Technology_DelftX_Certificate.pdf", provider: "DelftX" },
    { title: "Design Thinking COIL Programm", description: "Internationales Kollaborationsprojekt zur Entwicklung innovativer Lösungen durch Design Thinking.", learnings: ["Nutzerorientierte Problemlösung", "Prototyping und Testing", "Interkulturelle Teamarbeit"], file: "certificates/Design_Thinking_Beschreibung.pdf", provider: "COIL" },
    { title: "DKU – Internationale Projektfinanzierung", description: "Fortbildung zu internationaler Projektfinanzierung und Investitionsanalyse.", learnings: ["Projektbewertung", "Internationale Finanzierungsmodelle", "Risikomanagement"], file: "certificates/DKU_Bescheinigung.pdf", provider: "DKU" },
    { title: "DATEV – Rechnungswesen", description: "Zertifizierter Wissensnachweis im Bereich Rechnungswesen mit DATEV-Software.", learnings: ["Buchführung mit DATEV", "Kontierung und Belegerfassung", "Jahresabschlussarbeiten"], file: "certificates/DATEV_Rechnungswesen_Zertifikat.pdf", provider: "DATEV" },
  ],
  en: [
    { title: "Citi – Finance Job Simulation", description: "This simulation program taught practical analyst tasks at Citi Bank.", learnings: ["KPI analysis for company performance evaluation", "Validation of RWA calculations", "Risk analysis in credit card area", "Monitoring of limits and deposits"], file: "certificates/Citi_Bank_completion_certificate.pdf", provider: "Citi" },
    { title: "Goldman Sachs – Controllers Division Simulation", description: "An in-depth controlling training in investment banking.", learnings: ["NAV calculation", "Fund Accounting", "Trend analysis with Excel", "Creating professional controlling reports"], file: "certificates/Goldman_Sachs_completion_certificate.pdf", provider: "Goldman Sachs" },
    { title: "CFI – Careers in Finance", description: "Fundamentals of financial markets, roles, investment processes.", learnings: [], file: "certificates/CFI_Careers_In_Finance.pdf", provider: "CFI" },
    { title: "Executive Diploma in Leadership & Management", description: "Leadership principles, organizational management & team dynamics.", learnings: [], file: "certificates/MTF_Institute_of_Management_Technology_and_Finance.pdf", provider: "MTF Institute" },
    { title: "DelftX – Electric Cars Technology", description: "Electric mobility, battery systems & sustainable technologies.", learnings: [], file: "certificates/Electric_Cars_Technology_DelftX_Certificate.pdf", provider: "DelftX" },
    { title: "Design Thinking COIL Program", description: "International collaboration project for developing innovative solutions through Design Thinking.", learnings: ["User-centered problem solving", "Prototyping and testing", "Intercultural teamwork"], file: "certificates/Design_Thinking_Beschreibung.pdf", provider: "COIL" },
    { title: "DKU – International Project Finance", description: "Training in international project financing and investment analysis.", learnings: ["Project evaluation", "International financing models", "Risk management"], file: "certificates/DKU_Bescheinigung.pdf", provider: "DKU" },
    { title: "DATEV – Accounting", description: "Certified knowledge proof in accounting with DATEV software.", learnings: ["Bookkeeping with DATEV", "Account assignment and document entry", "Year-end closing procedures"], file: "certificates/DATEV_Rechnungswesen_Zertifikat.pdf", provider: "DATEV" },
  ],
};
