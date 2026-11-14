import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, LINKEDIN, ui } from "@/data/content";

export const Footer = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="border-t border-border py-8">
      <div className="wrap flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Rishabh Raj Pandey. {t.footer.rights}</p>
        <p className="flex items-center gap-5">
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <span className="hidden md:inline">{ui[language].built}</span>
        </p>
      </div>
    </footer>
  );
};
