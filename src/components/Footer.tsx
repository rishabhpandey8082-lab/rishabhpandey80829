import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, LINKEDIN, extra } from "@/data/content";

export const Footer = () => {
  const { t, language } = useLanguage();
  const btn = "grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary";
  return (
    <footer className="relative border-t border-white/5 bg-background/60 px-5 py-12 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-semibold"><span className="text-gradient">Rishabh Raj Pandey</span></p>
          <p className="mt-1 text-sm text-muted-foreground">{t.footer.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${EMAIL}`} className={btn} aria-label="Email"><Mail className="h-5 w-5" /></a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={btn} aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={btn} aria-label="Top"><ArrowUp className="h-5 w-5" /></button>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Rishabh Raj Pandey. {t.footer.rights} · {extra[language].madeWith}</p>
    </footer>
  );
};
