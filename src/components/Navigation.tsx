import { useEffect, useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/content";

const ids = ["about", "experience", "skills", "projects", "cases", "certs", "contact"] as const;

export const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  const labels = ui[language].nav;
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${scrolled || open ? "border-border bg-background/90 backdrop-blur" : "border-transparent bg-transparent"}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">Rishabh Raj Pandey</a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {ids.map((id) => (
            <a key={id} href={`#${id}`} className={`text-sm transition-colors ${active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-foreground/40" aria-label="Switch language">
            <Languages className="h-3.5 w-3.5" />{language === "de" ? "EN" : "DE"}
          </button>
          <button onClick={() => setOpen((o) => !o)} className="rounded-full border border-border p-2 lg:hidden" aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="wrap flex flex-col pb-4 lg:hidden" aria-label="Mobile">
          {ids.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-t border-border py-3 text-sm">{labels[id]}</a>
          ))}
        </nav>
      )}
    </header>
  );
};
