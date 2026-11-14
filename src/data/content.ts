import type { Language } from "@/i18n";

export const EMAIL = "rishabhpandey80829@gmail.com";
export const PHONE = "+49 172 7711065";
export const LINKEDIN = "https://www.linkedin.com/in/rishabh-raj-pandey-3b683b324";

type Bi<T> = Record<Language, T>;

export const ui: Bi<{
  nav: Record<"about" | "experience" | "skills" | "projects" | "cases" | "certs" | "contact", string>;
  eyebrow: string; headline: string; intro: string; resume: string; contact: string;
  facts: { label: string; value: string }[];
  aboutTitle: string; aboutText: string[]; education: string; educationValue: string; educationSub: string;
  expEyebrow: string; expTitle: string; present: string; intlTitle: string;
  skillsEyebrow: string; projectsEyebrow: string; projectsTitle: string; casesEyebrow: string; certsEyebrow: string;
  download: string; openCert: string; learnings: string; contactTitle: string; contactEyebrow: string; built: string;
}> = {
  en: {
    nav: { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", cases: "Case Studies", certs: "Certificates", contact: "Contact" },
    eyebrow: "Financial Accounting · Business Transformation",
    headline: "Rishabh Raj Pandey",
    intro: "International Business & Economics student at Hochschule Schmalkalden. I work in financial accounting and business transformation at moVeas, and I am building Gentleflow, a women's wellness platform.",
    resume: "Download résumé",
    contact: "Get in touch",
    facts: [
      { label: "Based in", value: "Schmalkalden, Germany" },
      { label: "Currently", value: "moVeas GmbH" },
      { label: "Founder", value: "Gentleflow" },
      { label: "Studying", value: "Hochschule Schmalkalden" },
    ],
    aboutTitle: "About",
    aboutText: [
      "I am an International Business and Economics (IBE) student with a focus on business strategy, growth, innovation and automation.",
      "Alongside my studies I work as a working student at moVeas GmbH in financial accounting and in contract controlling and business transformation. I also run Gentleflow, and I have supported my family's pharmaceutical business in operations, finance and business development since 2018.",
    ],
    education: "Education",
    educationValue: "Hochschule Schmalkalden",
    educationSub: "International Business & Economics (IBE)",
    expEyebrow: "Experience",
    expTitle: "Where I have worked",
    present: "Present",
    intlTitle: "International projects",
    skillsEyebrow: "Skills & Tools",
    projectsEyebrow: "Portfolio",
    projectsTitle: "Selected financial models",
    casesEyebrow: "Case Studies",
    certsEyebrow: "Certificates & Simulations",
    download: "Download model",
    openCert: "View certificate",
    learnings: "Key learnings",
    contactEyebrow: "Contact",
    contactTitle: "Let's talk",
    built: "Built with React and Three.js.",
  },
  de: {
    nav: { about: "Über mich", experience: "Erfahrung", skills: "Skills", projects: "Projekte", cases: "Fallstudien", certs: "Zertifikate", contact: "Kontakt" },
    eyebrow: "Finanzbuchhaltung · Business Transformation",
    headline: "Rishabh Raj Pandey",
    intro: "Student für International Business & Economics an der Hochschule Schmalkalden. Ich arbeite bei moVeas in der Finanzbuchhaltung und Business Transformation und baue Gentleflow auf, eine Wellness-Plattform für Frauen.",
    resume: "Lebenslauf herunterladen",
    contact: "Kontakt aufnehmen",
    facts: [
      { label: "Standort", value: "Schmalkalden, Deutschland" },
      { label: "Aktuell", value: "moVeas GmbH" },
      { label: "Gründer", value: "Gentleflow" },
      { label: "Studium", value: "Hochschule Schmalkalden" },
    ],
    aboutTitle: "Über mich",
    aboutText: [
      "Ich studiere International Business and Economics (IBE) mit Schwerpunkt auf Unternehmensstrategie, Wachstum, Innovation und Automatisierung.",
      "Neben dem Studium arbeite ich als Werkstudent bei der moVeas GmbH in der Finanzbuchhaltung sowie im Vertragscontrolling und in der Business Transformation. Außerdem führe ich Gentleflow und unterstütze seit 2018 das pharmazeutische Familienunternehmen in Operations, Finanzen und Geschäftsentwicklung.",
    ],
    education: "Ausbildung",
    educationValue: "Hochschule Schmalkalden",
    educationSub: "International Business & Economics (IBE)",
    expEyebrow: "Erfahrung",
    expTitle: "Wo ich gearbeitet habe",
    present: "heute",
    intlTitle: "Internationale Projekte",
    skillsEyebrow: "Skills & Tools",
    projectsEyebrow: "Portfolio",
    projectsTitle: "Ausgewählte Finanzmodelle",
    casesEyebrow: "Fallstudien",
    certsEyebrow: "Zertifikate & Simulationen",
    download: "Modell herunterladen",
    openCert: "Zertifikat ansehen",
    learnings: "Inhalte",
    contactEyebrow: "Kontakt",
    contactTitle: "Sprechen wir",
    built: "Gebaut mit React und Three.js.",
  },
};

export interface Job {
  company: string; role: string; type: string; period: string; location?: string;
  points: string[]; skills: string[];
}

export const jobs: Bi<Job[]> = {
  en: [
    {
      company: "moVeas GmbH", role: "Working Student, Contract Controlling, Business Transformation & Performance Analysis", type: "Part-time", period: "Aug 2026 – Present", location: "Germany",
      points: ["Contract controlling and performance analysis: monitored, analyzed and structured financial contracts and operational workflows to ensure compliance and cost efficiency."],
      skills: ["Contract Management", "Business Strategy"],
    },
    {
      company: "moVeas GmbH", role: "Working Student, Financial Accounting", type: "Part-time", period: "Mar 2026 – Present", location: "Germany",
      points: [
        "Supported the finance team in daily financial accounting tasks, ensuring accuracy and compliance",
        "Reviewed and processed incoming and outgoing invoices, contributing to streamlined operations",
        "Assisted with invoice verification and data entry, enhancing the efficiency of financial records management",
        "Maintained financial records and master data, supporting the overall integrity of the accounting department",
      ],
      skills: ["Financial Accounting", "Microsoft Excel", "Invoice Processing", "Accounts Payable", "DATEV", "Bank Reconciliation", "General Ledger", "Tax Compliance"],
    },
    {
      company: "Gentleflow", role: "Founder", type: "Self-employed", period: "Jan 2026 – Present",
      points: ["Building Gentleflow, a women's wellness platform that combines a free period tracking app with physical sanitary products. The app offers cycle tracking, ovulation prediction, symptom logging and AI wellness insights."],
      skills: ["Entrepreneurship", "Product Strategy"],
    },
    {
      company: "Shree Gauri Pharma", role: "Head of Operations, Finance & Business Development (family-owned pharmaceutical company)", type: "Part-time", period: "Oct 2018 – Present", location: "India",
      points: [
        "Supported day-to-day business operations in a family-owned pharmaceutical manufacturing and trading business",
        "Financial accounting and reporting, ERP system implementation",
        "Cash flow management, cost analysis and optimization",
      ],
      skills: ["Business Operations", "Financial Record Keeping", "Inventory Management"],
    },
    {
      company: "ElringKlinger Kunststofftechnik GmbH", role: "Production & Process Operations Associate (summer position)", type: "Full-time", period: "", location: "Germany",
      points: [], skills: [],
    },
  ],
  de: [
    {
      company: "moVeas GmbH", role: "Werkstudent Vertragscontrolling, Business Transformation & Performance-Analyse", type: "Teilzeit", period: "Aug 2026 – heute", location: "Deutschland",
      points: ["Vertragscontrolling und Performance-Analyse: Überwachung, Analyse und Strukturierung von Finanzverträgen und operativen Abläufen zur Sicherstellung von Compliance und Kosteneffizienz."],
      skills: ["Vertragsmanagement", "Business Strategy"],
    },
    {
      company: "moVeas GmbH", role: "Werkstudent Finanzbuchhaltung", type: "Teilzeit", period: "Mär 2026 – heute", location: "Deutschland",
      points: [
        "Unterstützung des Finanzteams bei der täglichen Finanzbuchhaltung mit Fokus auf Genauigkeit und Compliance",
        "Prüfung und Bearbeitung von Eingangs- und Ausgangsrechnungen zur Optimierung der Abläufe",
        "Unterstützung bei der Rechnungsprüfung und Datenerfassung für effizientere Buchhaltungsunterlagen",
        "Pflege von Buchhaltungsdaten und Stammdaten zur Sicherung der Integrität der Buchhaltung",
      ],
      skills: ["Finanzbuchhaltung", "Microsoft Excel", "Rechnungsbearbeitung", "Kreditorenbuchhaltung", "DATEV", "Bankabstimmung", "Hauptbuch", "Steuer-Compliance"],
    },
    {
      company: "Gentleflow", role: "Gründer", type: "Selbstständig", period: "Jan 2026 – heute",
      points: ["Aufbau von Gentleflow, einer Wellness-Plattform für Frauen, die eine kostenlose Zyklus-App mit physischen Hygieneprodukten verbindet. Die App bietet Zyklustracking, Eisprungprognose, Symptomprotokoll und KI-gestützte Wellness-Einblicke."],
      skills: ["Unternehmertum", "Produktstrategie"],
    },
    {
      company: "Shree Gauri Pharma", role: "Leitung Operations, Finanzen & Geschäftsentwicklung (pharmazeutisches Familienunternehmen)", type: "Teilzeit", period: "Okt 2018 – heute", location: "Indien",
      points: [
        "Unterstützung des operativen Tagesgeschäfts in einem pharmazeutischen Produktions- und Handelsunternehmen der Familie",
        "Finanzbuchhaltung und Berichtswesen, Einführung eines ERP-Systems",
        "Cashflow-Management, Kostenanalyse und -optimierung",
      ],
      skills: ["Betriebsführung", "Buchhaltung", "Bestandsmanagement"],
    },
    {
      company: "ElringKlinger Kunststofftechnik GmbH", role: "Mitarbeiter Produktion & Prozess-Operations (Sommerposition)", type: "Vollzeit", period: "", location: "Deutschland",
      points: [], skills: [],
    },
  ],
};

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
