import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { extra } from "@/data/content";

const ids = ["home", "about", "skills", "projects", "cases", "certs", "contact"] as const;

export const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  const labels = extra[language].nav;
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6 ${scrolled ? "shadow-2xl" : ""}`}
      >
        <button onClick={() => go("home")} className="font-display text-sm font-semibold tracking-tight" aria-label="Home">
          <span className="text-gradient">RRP</span><span className="text-muted-foreground">.</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {ids.map((id) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${active === id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {active === id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative z-10 font-medium">{labels[id]}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium transition hover:bg-white/10" aria-label="Switch language">
            <Languages className="h-3.5 w-3.5" />{language === "de" ? "EN" : "DE"}
          </button>
          <button onClick={() => setOpen((o) => !o)} className="rounded-full border border-white/10 bg-white/5 p-2 lg:hidden" aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            className="glass absolute left-4 right-4 top-[72px] rounded-3xl p-3 lg:hidden"
          >
            {ids.map((id) => (
              <button key={id} onClick={() => go(id)} className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${active === id ? "bg-primary/15 text-primary" : "text-foreground/80"}`}>
                {labels[id]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
